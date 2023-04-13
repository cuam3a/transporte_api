import { Schema, Types, model, Model } from "mongoose";
import { Inspector } from "../types";

const InspectorSchema = new Schema<Inspector>(
    {
        name: {
            required: true,
            type: String,
        },
        lastName: {
            type: String,
        },
        dni: {
            type: String,
        },
        address: {
            type: String,
        },
        birthDate: {
            type: Date,
        },
        gender: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
            unique: true,
        },
        rol: {
            type: String,
            enum: [ "ADMIN", "INSPECTOR" ],
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const InspectorModel = model("inspector", InspectorSchema);
export default InspectorModel;