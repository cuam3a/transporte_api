import { Schema, Types, model, Model } from "mongoose";
import { Operational } from "../types";

const OperationalSchema = new Schema<Operational>(
    {
        name: {
            required: true,
            type: String,
        },
        date: {
            type: String,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        latitud: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
        idInspector: {
            type: String
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

const OperationalModel = model("operational", OperationalSchema);
export default OperationalModel;