import { AxiosInstance } from 'axios';
export default class Quickbooks {
    client: Client;
    axios: AxiosInstance;
    opts: QuickbooksArgs;
    constructor(opts: QuickbooksArgs);
    createClient: ({ baseUrl, defaults, useSandbox, }: QuickbooksArgs) => void;
    getNewToken(): Promise<AuthResponse>;
}
