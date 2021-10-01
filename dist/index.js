"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickbooksPayments = exports.QuickbooksOnline = void 0;
var online_1 = require("./online");
Object.defineProperty(exports, "QuickbooksOnline", { enumerable: true, get: function () { return __importDefault(online_1).default; } });
var payments_1 = require("./payments");
Object.defineProperty(exports, "QuickbooksPayments", { enumerable: true, get: function () { return __importDefault(payments_1).default; } });
