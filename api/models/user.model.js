"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    last_name: {
        type: String,
    },
    dni: {
        type: String,
    },
    address: {
        type: String,
    },
    birth_date: {
        type: Date,
    },
    gender: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean
    },
    user: {
        type: String,
        required: true,
        unique: true,
    },
    active: {
        type: Boolean
    },
    rol: {
        type: String,
        enum: ["ADMIN", "SUPERVISOR", "VENTAS"],
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
const UserModel = (0, mongoose_1.model)("users", UserSchema);
exports.default = UserModel;
