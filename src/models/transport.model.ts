import { Schema, Types, model, Model } from "mongoose";
import { Transport } from "../types";

const TransportSchema = new Schema<Transport>(
    {
        plateNumber: {
            required: true,
            type: String,
        },
        soat: {
            type: String,
            required: true,
        },
        nfc: {
            type: String,
            required: true,
        },
        idDealership: {
            type: String,
        },
        idDriver: {
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

const TransportModel = model("transport", TransportSchema);
export default TransportModel;