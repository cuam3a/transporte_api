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
exports.initConfig = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const bcypt_handle_1 = require("./bcypt.handle");
const initConfig = () => __awaiter(void 0, void 0, void 0, function* () {
    const existAdmin = yield user_model_1.default.findOne({ user: "admin" });
    if (existAdmin)
        return;
    const passHash = yield (0, bcypt_handle_1.encrypt)("admin");
    const admin = yield user_model_1.default.create({ name: "admin", user: "admin", password: passHash, active: true, rol: "ADMIN" });
    console.log(admin);
    return;
});
exports.initConfig = initConfig;
