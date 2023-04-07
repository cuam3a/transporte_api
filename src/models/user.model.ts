import { Schema, Types, model, Model } from "mongoose";
import { User } from "../types";

const UserSchema = new Schema<User>(
    {
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
        isAdmin:{
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
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const UserModel = model("users", UserSchema);
export default UserModel;