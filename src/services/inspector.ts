import { Inspector } from "../types"
import InspectorModel from "../models/inspector.model";
import { encrypt } from "../utils/bcypt.handle";
import { formatInspectorData } from "../utils/modelToType";

const listService = async (s : string) : Promise<Partial<Inspector>[]>=> {
  const inspectors = await InspectorModel.find<Inspector>({ status: 'ACTIVO', name: new RegExp(s) }); 
  return inspectors.map(inspector => { return formatInspectorData(inspector) })
}

const getByIdService = async (id: string) : Promise<Partial<Inspector>> => {
  const inspector = await InspectorModel.findOne({ _id: id });
  if(!inspector) throw Error("NO FOUND USER")

  return inspector;
}

const addService = async (Inspector : Partial<Inspector>) : Promise<Partial<Inspector>>=> {
  const passHash = await encrypt(Inspector.password ?? '');
  const newInspector = await InspectorModel.create({
    name: Inspector.name,
    lastName: Inspector.lastName,
    dni: Inspector.dni,
    address: Inspector.address,
    gender: Inspector.gender,
    birthDate: Inspector.birthDate,
    user: Inspector.user,
    password: passHash,
    rol: Inspector.rol,
    status: 'ACTIVO'
  });

  if(!newInspector) throw Error("ERROR CREATE USER")
  
  return formatInspectorData(newInspector);
}

const editService = async (Inspector : Partial<Inspector>) :Promise<Partial<Inspector>>=> {
  const updateInspector = await InspectorModel.findOneAndUpdate({ _id: Inspector.id }, Inspector, {
    new: true,
  });

  if(!updateInspector) throw Error("NO FOUND USER")
  
  return formatInspectorData(updateInspector);
}

const removeService = async (id: string) :Promise<Partial<Inspector>>=> {
  const removeInspector = await InspectorModel.findOneAndUpdate({ _id: id }, { status: "ELIMINADO" }, {
    new: true,
  });

  if(!removeInspector) throw Error("NO FOUND USER")

  return formatInspectorData(removeInspector);
}
export {
  listService,
  addService,
  getByIdService,
  editService,
  removeService
}