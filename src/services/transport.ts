import { Transport, Driver, Dealership } from "../types"
import TransportModel from "../models/transport.model";
import { formatDealershipData, formatDriverData, formatTransportData } from "../utils/modelToType";
import DriverModel from "../models/driver.model";
import DealershipModel from "../models/dealership.model";

const listService = async (s: string): Promise<Partial<Transport>[]> => {
  const transport = await TransportModel.find<Transport>({ status: 'ACTIVO', plateNumber: new RegExp(s, 'i') });

  // const list = transport.map((transport) => { return formatTransportData({ model: transport }) });
  // return transport.map((transport) => { return formatTransportData({ model: transport }) })

  const list = await Promise.all(transport.map(async (transport) => { 
    var driver = await DriverModel.findOne<Driver>({ _id: transport.idDriver });
    return formatTransportData({ model: transport, driver: formatDriverData(driver) });
  }));

  return list
}

const getByIdService = async (id: string): Promise<Partial<Transport>> => {
  const transport = await TransportModel.findOne({ _id: id });
  if (!transport) throw Error("NO EXISTE TRANSPORTE")

  var Driver = transport.idDriver != '' ? await DriverModel.findOne<Driver>({ _id: transport.idDriver }) : null;
  var Dealership = transport.idDealership != '' ? await DealershipModel.findOne<Dealership>({ _id: transport.idDealership }) : null;

  return formatTransportData({ model: transport, driver: formatDriverData(Driver), dealership: formatDealershipData(Dealership) });
}

const getByNFCService = async (nfc: string): Promise<Partial<Transport>> => {
  const transport = await TransportModel.findOne({ nfc: nfc });
  if (!transport) throw Error("NO EXISTE TRANSPORTE")

  var Driver = transport.idDriver != '' ? await DriverModel.findOne<Driver>({ _id: transport.idDriver }) : null;
  var Dealership = transport.idDealership != '' ? await DealershipModel.findOne<Dealership>({ _id: transport.idDealership }) : null;

  return formatTransportData({ model: transport, driver: formatDriverData(Driver), dealership: formatDealershipData(Dealership) });
}

const addService = async (Transport: Partial<Transport>): Promise<Partial<Transport>> => {
  const existNFC = await TransportModel.findOne({ status: 'ACTIVO', nfc: Transport.nfc });
  if (existNFC) throw Error(`YA EXISTE TRANSPORTE CON NFC ${Transport.nfc}`)

  const newTransport = await TransportModel.create({
    plateNumber: Transport.plateNumber,
    soat: Transport.soat,
    nfc: Transport.nfc,
    idDealership: Transport.idDealership,
    idDriver: Transport.idDriver,
    status: 'ACTIVO'
  });

  if (!newTransport) throw Error("ERROR CREAR TRANSPORTE")

  return formatTransportData({ model: newTransport });
}

const editService = async (Transport: Partial<Transport>): Promise<Partial<Transport>> => {
  const updateTransport = await TransportModel.findOneAndUpdate({ _id: Transport.id }, Transport, {
    new: true,
  });

  if (!updateTransport) throw Error("NO EXISTE TRANSPORTE")

  return formatTransportData({ model: updateTransport });
}

const removeService = async (id: string): Promise<Partial<Transport>> => {
  const removeTransport = await TransportModel.findOneAndUpdate({ _id: id }, { status: "ELIMINADO" }, {
    new: true,
  });

  if (!removeTransport) throw Error("NO EXISTE TRANSPORTE")

  return formatTransportData({ model: removeTransport });
}
export {
  listService,
  addService,
  getByIdService,
  editService,
  removeService,
  getByNFCService
}