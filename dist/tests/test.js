"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const online_1 = __importDefault(require("../online"));
const clientId = "ABAC1lLPTZFKmqJEDY7bUhTFeYlzmaOWwBCOxBXd0wMU3TwChm";
const clientSecret = "ZH0gaP7Wcg1PfJN6w36B4arrJgwNEVp1YWFC9HSD";
const accessToken = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..m-ubdZcXetlIa1-vTzlUTA.2cIAeJhrN8lYfkAx84C1xNZc4IbBuxl1FXOcbEd8kvqF4x2nRiPZTmpg937J7DXe84OjPuTPYqrV2u_MmpYzv6bsGxSJEk4VvbVf78nz3_dYU-DvCtbekQZ1X3EvadOoBQoX-GZMcwBMrTzi5RKNloTniKlhDnLBHRTYQNAXOzKRWnJ8jjzIvAIGRfq0fAOWBlCFGlNhf9NxFElamwqvgxGKg9251jdjiP4yl9gZbwbNOyKJQQNUzAVqOFJ4c6xQgLg52niieSzkwZ5mDHmuy6wWJu3dwrS20104Av_1TKiCGaA0VsOS4cT4-SJ4fkKq8VjXBSZkk7NLbkFOQ0nrnQxAN_yuCdeiqYZRp7hRwqsh9NDnmaQRohRZVGT7HhvUyr8w-MaQXRwTpCUHWqnYfdSVjrYjCX8LEj8UQZ4MlwBaIjyYNGI25F2Eh9sGwtwva1DDcYsreaPlibOcN_vb_9kEHhYMsMXPZm3SBoaKwFO_yALlBlgzvWYV4dwqT2SjdCJZpwvz0kapuz10sV3qyu29mnF7CfW_DNHPy4JX4kiuy7a7BmD18_IsN07VhyO2XpFivfW4POKdCqeaN0gLTEqu66vJf04YZUt_BERBc-SFZKYUj5igXJ2aS17qtICsnkLrofFFzUtdAreSpnZfV8IYCAzFPIMYYsKtjPw3vj1GUvETInIzpd_G9hwiZ5HYKJ6CrW7-03AViDJg1YDReiLodi45BaMcZL6XPIa96qPNmLe-Gb2jpW1hONvsak1iNqzH8zOSc6TTyX3n75hzhNfuN48jEKp6zkP--u1C5gwDgfm6JdgCmzwjf59rjCrL7Ut4BIytIHrcY3kRydJ5EeKmxzf08BLpqnN3fGLu3paziJNLD1toFc4CsiWTbFGGfAinm4434geRnbQvBtqG3g.YrZFx7E2VPZy2y75l6wXAQ";
const realmId = "4620816365183953400";
const refreshToken = "AB11641791569jJ8rV8hjLuEmj1SzT6eHHaqrQx3jka2NYsGsC";
const online = new online_1.default({
    accessToken,
    clientId,
    clientSecret,
    // use the sandbox?
    debug: false,
    // enable debugging?
    minorVersion: '59',
    onRefresh: (token) => console.log(token),
    realmId,
    refreshToken,
    useSandbox: process.env.NODE_ENV !== 'production',
});
online.getCompanyInfo('4620816365183953400').then(res => {
    console.log(res);
});
