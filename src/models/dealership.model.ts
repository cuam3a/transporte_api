import { Schema, Types, model, Model } from "mongoose";
import { Dealership } from "../types";

const DealershipSchema = new Schema<Dealership>(
    {
        name: {
            required: true,
            type: String,
        },
        ruc: {
            type: String,
        },
        email: {
            type: String,
            required: true,
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

const DealershipModel = model("dealership", DealershipSchema);
export default DealershipModel;