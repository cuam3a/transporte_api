import { Schema, Types, model, Model } from "mongoose";
import { OperationalDetail } from "../types";

const OperationalDetailSchema = new Schema<OperationalDetail>(
    {
        observation: {
            required: true,
            type: String,
        },
        idDriver: {
            type: String,
            required: true,
        },
        idDealership: {
            type: String,
            required: true,
        },
        idTransport: {
            type: String,
            required: true,
        },
        idOperational: {
            type: String,
            required: true,
        },
        nfc:{
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

const OperationalDetailModel = model("operationalDetail", OperationalDetailSchema);
export default OperationalDetailModel;