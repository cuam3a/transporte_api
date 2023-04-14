import { Transport } from "../types"
import TransportModel from "../models/transport.model";
import { formatTransportData } from "../utils/modelToType";

const listService = async (s : string) : Promise<Partial<Transport>[]>=> {
  const transport = await TransportModel.find<Transport>({ status: 'ACTIVO', name: new RegExp(s) }); 
  return transport.map(transport => { return formatTransportData(transport) })
}

const getByIdService = async (id: string) : Promise<Partial<Transport>> => {
  const transport = await TransportModel.findOne({ _id: id });
  if(!transport) throw Error("NO FOUND TRANSPORT")

  return transport;
}

const addService = async (Transport : Partial<Transport>) : Promise<Partial<Transport>>=> {
  const newTransport = await TransportModel.create({
    plateNumber: Transport.plateNumber,
    soat: Transport.soat,
    nfc: Transport.nfc,
    idDealerchip: Transport.idDealerchip,
    idDriver: Transport.idDriver,
    status: 'ACTIVO'
  });

  if(!newTransport) throw Error("ERROR CREATE TRANSPORT")
  
  return formatTransportData(newTransport);
}

const editService = async (Transport : Partial<Transport>) :Promise<Partial<Transport>>=> {
  const updateTransport = await TransportModel.findOneAndUpdate({ _id: Transport.id }, Transport, {
    new: true,
  });

  if(!updateTransport) throw Error("NO FOUND TRANSPORT")
  
  return formatTransportData(updateTransport);
}

const removeService = async (id: string) :Promise<Partial<Transport>>=> {
  const removeTransport = await TransportModel.findOneAndUpdate({ _id: id }, { status: "ELIMINADO" }, {
    new: true,
  });

  if(!removeTransport) throw Error("NO FOUND TRANSPORT")

  return formatTransportData(removeTransport);
}
export {
  listService,
  addService,
  getByIdService,
  editService,
  removeService
}