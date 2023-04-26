import { Dealership } from "../types"
import DealershipModel from "../models/dealership.model";
import { formatDealershipData } from "../utils/modelToType";

const listService = async (s : string) : Promise<Partial<Dealership>[]>=> {
  const dealership = await DealershipModel.find<Dealership>({ status: 'ACTIVO', name: new RegExp(s, 'i') }); 
  return dealership.map(dealership => { return formatDealershipData(dealership) })
}

const getByIdService = async (id: string) : Promise<Partial<Dealership>> => {
  const Dealership = await DealershipModel.findOne({ _id: id });
  if(!Dealership) throw Error("NO FOUND TRANSPORT")

  return Dealership;
}

const addService = async (Dealership : Partial<Dealership>) : Promise<Partial<Dealership>>=> {
  const newDealership = await DealershipModel.create({
    name: Dealership.name,
    ruc: Dealership.ruc,
    email: Dealership.email,
    status: 'ACTIVO'
  });

  if(!newDealership) throw Error("ERROR CREATE TRANSPORT")
  
  return formatDealershipData(newDealership);
}

const editService = async (Dealership : Partial<Dealership>) :Promise<Partial<Dealership>>=> {
  const updateDealership = await DealershipModel.findOneAndUpdate({ _id: Dealership.id }, Dealership, {
    new: true,
  });

  if(!updateDealership) throw Error("NO FOUND TRANSPORT")
  
  return formatDealershipData(updateDealership);
}

const removeService = async (id: string) :Promise<Partial<Dealership>>=> {
  const removeDealership = await DealershipModel.findOneAndUpdate({ _id: id }, { status: "ELIMINADO" }, {
    new: true,
  });

  if(!removeDealership) throw Error("NO FOUND TRANSPORT")

  return formatDealershipData(removeDealership);
}
export {
  listService,
  addService,
  getByIdService,
  editService,
  removeService
}