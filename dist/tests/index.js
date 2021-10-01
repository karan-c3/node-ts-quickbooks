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
const online_1 = __importDefault(require("../online"));
const api_json_1 = __importDefault(require("./api.json"));
const calls = {
    Create: 'create',
    Delete: 'delete',
    GetAll: 'find',
    GetById: 'get',
    GetDetails: 'get',
    Query: 'get',
    Read: 'get',
    ReadAll: 'find',
    ReadById: 'get',
    ReadByID: 'get',
    Update: 'update',
    Void: 'delete',
};
const clientId = "";
const clientSecret = "";
const accessToken = "";
const realmId = "";
const refreshToken = "";
const online = new online_1.default({
    accessToken,
    clientId,
    clientSecret,
    // use the sandbox?
    debug: false,
    // enable debugging?
    minorVersion: '59',
    onRefresh: () => { },
    realmId,
    refreshToken,
    useSandbox: process.env.NODE_ENV !== 'production',
});
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("run hua");
    try {
        yield Promise.all(api_json_1.default.item.map((collection) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("loop ke andar gaya");
            const name = collection.name;
            // @ts-ignore
            yield collection.item.reduce((prom, request) => __awaiter(void 0, void 0, void 0, function* () {
                var _a, _b, _c;
                yield prom;
                const requestName = request.name.replace(/\w+?\s?-\s?/, '');
                const requestType = calls[request.name.replace(/\w+?\s?-\s?/, '')];
                let methodName = requestType + name;
                if (requestName.toLowerCase().includes('all')) {
                    if (methodName[methodName.length - 1] === 'y')
                        methodName = methodName.slice(0, -1) + 'ies';
                    else if (methodName[methodName.length - 1] === 's') {
                        if (methodName[methodName.length - 2] !== 'e')
                            methodName += 'es';
                    }
                    else
                        methodName += 's';
                }
                if (name === 'Reports')
                    methodName = 'report' + requestName;
                let data = undefined;
                try {
                    const method = online[methodName];
                    if (!method) {
                        console.log('Missing Request:', methodName);
                        return;
                    }
                    const req = request.request;
                    if ((_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.raw) {
                        try {
                            data = JSON.parse((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.raw);
                        }
                        catch (e) {
                            data = (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.raw;
                        }
                        yield method(data);
                        console.log('SUCCESS:', methodName);
                    }
                }
                catch (e) {
                    console.log('FAILED', methodName, data, e.response.body);
                }
            }), Promise.resolve());
        })));
    }
    catch (e) { }
});
run();
