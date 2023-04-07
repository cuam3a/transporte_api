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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInformation = exports.login = exports.live = void 0;
const app_1 = require("../services/app");
const error_handle_1 = require("../utils/error.handle");
const live = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("ENTRO LIVE");
    const response = {
        status: 200,
        token: ''
    };
    res.send(response);
});
exports.live = live;
const login = ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, password } = body;
    console.log({ user, password });
    try {
        const userToken = yield (0, app_1.loginAppService)({ user, password });
        const response = {
            status: 200,
            token: userToken
        };
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR LOGIN", e);
    }
});
exports.login = login;
const userInformation = ({ idUser }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(idUser);
        const idU = idUser === null || idUser === void 0 ? void 0 : idUser.idUser;
        //const userInformation = await userInformationService(idU);
        const response = {
            status: 200,
            name: "" //userInformation
        };
        console.log(response);
        res.send(response);
    }
    catch (e) {
        (0, error_handle_1.handleError)(res, "ERROR LOGIN", e);
    }
});
exports.userInformation = userInformation;
