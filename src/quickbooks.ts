import { v4 as uuidv4 } from 'uuid';
import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from 'axios';

const ErrorHandler = (error: AxiosError): AxiosError | QuickbooksError => {
  if (error?.response?.data) {
    if (error?.response?.data?.errors?.[0]) {
      throw new QuickbooksError(error?.response?.data?.errors[0]);
    }
    if (error?.response?.data?.Fault?.Error?.[0]) {
      console.log('body?.Fault?.Error?.[0]', error?.response?.data?.Fault?.Error?.[0]);
      const { Detail, Message, code } = error?.response?.data?.Fault?.Error?.[0] as Record<
        string,
        string
      >;
      throw new QuickbooksError({ code, detail: Detail, message: Message });
    }
  }
  return error;
};

class QuickbooksError extends Error {
  name: string;
  message: string;
  code: string;
  infoLink?: string;
  detail: string;
  constructor(opts: {
    type?: string;
    message: string;
    code: string;
    infoLink?: string;
    detail: string;
  }) {
    super(opts.message);
    this.name = opts.type || 'Fault Error';
    this.message = opts.message;
    this.code = opts.code;
    this.infoLink = opts.infoLink;
    this.detail = opts.detail;
  }
}

export default class Quickbooks {
  client: Client;
  axios: AxiosInstance;
  opts: QuickbooksArgs
  constructor(opts: QuickbooksArgs) {
    this.client = {} as Client;
    this.axios = axios;
    this.opts = opts
    return;
  }
  createClient = ({
    baseUrl,
    defaults,
    useSandbox = false,
  }: QuickbooksArgs): void => {

    const prefixUrl = useSandbox
      ? baseUrl || ''
      : (baseUrl || '').replace(/sandbox[.-]/, '');
    this.axios = axios.create({
      baseURL: prefixUrl,
      ...defaults
    })

    this.axios.interceptors.request.use((config) => {
      config.baseURL = prefixUrl
      config.headers = {
        ...config.headers,
        Authorization: 'Bearer ' + this.opts.accessToken,
        'Company-Id': this.opts.realmId,
        'Content-Type': 'application/json',
        'Request-Id': uuidv4(),
        'User-Agent': 'node-ts-quickbooks',
      }
      return config
    })
    this.axios.interceptors.response.use(
      (response: AxiosResponse) => response, // success handler
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          
          const data = await this.getNewToken()
          this.opts.accessToken = data.access_token
          this.opts.refreshToken = data.refresh_token
          error.config.headers.Authorization = 'Bearer ' + this.opts.accessToken
          return axios.request(error.config)
        }
        return Promise.reject(error);
      }
    )
    this.client = {} as Client;
    const methods: Method[] = [
      'get',
      'post',
      'put',
      'patch',
      'head',
      'delete',
    ];
    methods.map(method => {
      this.client[method] = async <ReturnType>(
        url: string,
        options: { json: any, searchParams: any }
      ): Promise<ReturnType> => {
        try {
          let payload, params = undefined
          if(options?.json) {
            payload = options.json
          }
          if(options?.searchParams) {
            params = options.searchParams
          }
          const { data } = await this.axios.request({
            url,
            data: payload,
            params: params,
            method
          })
          if (data) {
            const keys = Object.keys(data);
            keys.splice(keys.indexOf('time'));
            if (keys.length === 1) return data[keys[0]] as ReturnType;
          }
          return data as ReturnType;
        } catch (e: any) {
          throw ErrorHandler(e);
        }
      };
    });

    this.client.deleteEntity = async <ReturnType>(
      url: string,
      idOrEntity: string | Record<any, any>
    ): Promise<ReturnType> => {
      try {
        // if the id is a string, get the full entity and then delete it
        if (typeof idOrEntity === 'string') {
          const entity: Record<string, any> = await this.client.get(
            url + idOrEntity
          );
          return this.client.post(url, { json: entity, searchParams: { operation: 'delete' } });
        };
        // if the option is an entity, delete it
        return this.client.post(url, { json: idOrEntity, searchParams: { operation: 'delete' } });
      } catch (e: any) {
        throw ErrorHandler(e);
      }
    };
  }
  async getNewToken() {
    try {
      const { clientId, clientSecret, refreshToken, onRefresh} = this.opts
      const params = new URLSearchParams()
      params.append('grant_type', 'refresh_token')
      params.append('refresh_token', refreshToken)
      const { data }: AxiosResponse<AuthResponse> = await axios
        .post('https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer', params, {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${clientId}:${clientSecret}`
            ).toString('base64')}`
          }
        });
      onRefresh(data);

      return data;
    } catch (e: any) {
      console.log("refresh error", e.response);
      
      throw ErrorHandler(e);
    }
  }
}
