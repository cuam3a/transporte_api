import InspectorModel from "../models/inspector.model"
import { encrypt } from "./bcypt.handle"

export const initConfig = async () => {
    const existAdmin = await InspectorModel.findOne({ user: "admin" });
    if (existAdmin) return;
    
    //const passHash = await encrypt("admin");
    const admin = await InspectorModel.create({ name: "admin", user: "admin", password: "admin", rol: "ADMIN", status: "ACTIVO" })
    console.log(admin)
    return
}