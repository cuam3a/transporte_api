import { Schema, Types, model, Model } from "mongoose";
import { Driver } from "../types";

const DriverSchema = new Schema<Driver>(
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
            required: true,
        },
        experience: {
            type: Number,
        },
        phone: {
            type: String,
        },
        driveLicense: {
            type: String,
        },
        city: {
            type: String,
        },
        status: {
            type: String,
            enum: [ "ACTIVO", "ELIMINADO" ],
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const DriverModel = model("driver", DriverSchema);
export default DriverModel;