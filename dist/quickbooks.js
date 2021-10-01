"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const axios_1 = __importDefault(require("axios"));
const ErrorHandler = (error) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    if ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) {
        if ((_d = (_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.errors) === null || _d === void 0 ? void 0 : _d[0]) {
            throw new QuickbooksError((_f = (_e = error === null || error === void 0 ? void 0 : error.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.errors[0]);
        }
        if ((_k = (_j = (_h = (_g = error === null || error === void 0 ? void 0 : error.response) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.Fault) === null || _j === void 0 ? void 0 : _j.Error) === null || _k === void 0 ? void 0 : _k[0]) {
            console.log('body?.Fault?.Error?.[0]', (_p = (_o = (_m = (_l = error === null || error === void 0 ? void 0 : error.response) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.Fault) === null || _o === void 0 ? void 0 : _o.Error) === null || _p === void 0 ? void 0 : _p[0]);
            const { Detail, Message, code } = (_t = (_s = (_r = (_q = error === null || error === void 0 ? void 0 : error.response) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.Fault) === null || _s === void 0 ? void 0 : _s.Error) === null || _t === void 0 ? void 0 : _t[0];
            throw new QuickbooksError({ code, detail: Detail, message: Message });
        }
    }
    return error;
};
class QuickbooksError extends Error {
    constructor(opts) {
        super(opts.message);
        this.name = opts.type || 'Fault Error';
        this.message = opts.message;
        this.code = opts.code;
        this.infoLink = opts.infoLink;
        this.detail = opts.detail;
    }
}
class Quickbooks {
    constructor(opts) {
        this.createClient = ({ baseUrl, defaults, useSandbox = false, }) => {
            const prefixUrl = useSandbox
                ? baseUrl || ''
                : (baseUrl || '').replace(/sandbox[.-]/, '');
            this.axios = axios_1.default.create(Object.assign({ baseURL: prefixUrl }, defaults));
            this.axios.interceptors.request.use((config) => {
                config.baseURL = prefixUrl;
                config.headers = Object.assign(Object.assign({}, config.headers), { Authorization: 'Bearer ' + this.opts.accessToken, 'Company-Id': this.opts.realmId, 'Content-Type': 'application/json', 'Request-Id': (0, uuid_1.v4)(), 'User-Agent': 'node-ts-quickbooks' });
                return config;
            });
            this.axios.interceptors.response.use((response) => response, // success handler
            (error) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 401) {
                    const data = yield this.getNewToken();
                    this.opts.accessToken = data.access_token;
                    this.opts.refreshToken = data.refresh_token;
                    error.config.headers.Authorization = 'Bearer ' + this.opts.accessToken;
                    return axios_1.default.request(error.config);
                }
                return Promise.reject(error);
            }));
            this.client = {};
            const methods = [
                'get',
                'post',
                'put',
                'patch',
                'head',
                'delete',
            ];
            methods.map(method => {
                this.client[method] = (url, options) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        let payload, params = undefined;
                        if (options === null || options === void 0 ? void 0 : options.json) {
                            payload = options.json;
                        }
                        if (options === null || options === void 0 ? void 0 : options.searchParams) {
                            params = options.searchParams;
                        }
                        const { data } = yield this.axios.request({
                            url,
                            data: payload,
                            params: params,
                            method
                        });
                        if (data) {
                            const keys = Object.keys(data);
                            keys.splice(keys.indexOf('time'));
                            if (keys.length === 1)
                                return data[keys[0]];
                        }
                        return data;
                    }
                    catch (e) {
                        throw ErrorHandler(e);
                    }
                });
            });
            this.client.deleteEntity = (url, idOrEntity) => __awaiter(this, void 0, void 0, function* () {
                try {
                    // if the id is a string, get the full entity and then delete it
                    if (typeof idOrEntity === 'string') {
                        const entity = yield this.client.get(url + idOrEntity);
                        return this.client.post(url, { json: entity, searchParams: { operation: 'delete' } });
                    }
                    ;
                    // if the option is an entity, delete it
                    return this.client.post(url, { json: idOrEntity, searchParams: { operation: 'delete' } });
                }
                catch (e) {
                    throw ErrorHandler(e);
                }
            });
        };
        this.client = {};
        this.axios = axios_1.default;
        this.opts = opts;
        return;
    }
    getNewToken() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { clientId, clientSecret, refreshToken, onRefresh } = this.opts;
                const params = new URLSearchParams();
                params.append('grant_type', 'refresh_token');
                params.append('refresh_token', refreshToken);
                const { data } = yield axios_1.default
                    .post('https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer', params, {
                    headers: {
                        Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`
                    }
                });
                onRefresh(data);
                return data;
            }
            catch (e) {
                console.log("refresh error", e.response);
                throw ErrorHandler(e);
            }
        });
    }
}
exports.default = Quickbooks;
