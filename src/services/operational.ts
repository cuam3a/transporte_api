import { Operational, Driver, Dealership, Inspector, OperationalDetail, Transport } from "../types"
import TransportModel from "../models/transport.model";
import { formatDealershipData, formatDriverData, formatOperationalData, formatInspectorData, formatOperationalDetailData, formatTransportData } from "../utils/modelToType";
import OperationaModel from "../models/operational.model";
import DealershipModel from "../models/dealership.model";
import InspectorModel from "../models/inspector.model";
import OperationalDetailModel from "../models/operationalDetail.model";
import DriverModel from "../models/driver.model";

const listService = async (s: string): Promise<Partial<Operational>[]> => {
  const operational = await OperationaModel.find<Operational>({ status: 'ACTIVO', name: new RegExp(s, 'i') });

  const list = await Promise.all(operational.map(async (operational) => { 
    var Inspector = await InspectorModel.findOne<Inspector>({ _id: operational.idInspector });
    return formatOperationalData({ model: operational, inspector: formatInspectorData(Inspector) });
  }));

  return list
}

const getByIdService = async (id: string): Promise<Partial<Operational>> => {
  const operational = await OperationaModel.findOne({ _id: id });
  if (!operational) throw Error("NO FOUND OPERATIONAL")

  var Inspector = operational.idInspector !== '' ? await InspectorModel.findOne<Inspector>({ _id: operational.idInspector }) : null;
  
  return formatOperationalData({ model: operational, inspector: formatInspectorData(Inspector) });
}

const addService = async (Operational: Partial<Operational>): Promise<Partial<Operational>> => {
  const newOperational = await OperationaModel.create({
    name: Operational.name,
    date: Operational.date,
    time: Operational.time,
    latitud: Operational.latitud,
    longitude: Operational.longitude,
    ubication: Operational.ubication,
    idInspector: Operational.idInspector,
    status: 'ACTIVO'
  });

  if (!newOperational) throw Error("ERROR CREATE OPERATIONAL")

  return formatOperationalData({ model: newOperational });
}

const editService = async (Operational: Partial<Operational>): Promise<Partial<Operational>> => {
  const updateOperational = await OperationaModel.findOneAndUpdate({ _id: Operational.id }, Operational, {
    new: true,
  });

  if (!updateOperational) throw Error("NO FOUND OPERATIONAL")

  return formatOperationalData({ model: updateOperational });
}

const removeService = async (id: string): Promise<Partial<Operational>> => {
  const removeOperational = await OperationaModel.findOneAndUpdate({ _id: id }, { status: "ELIMINADO" }, {
    new: true,
  });

  if (!removeOperational) throw Error("NO FOUND OPERATIONAL")

  return formatOperationalData({ model: removeOperational });
}

//OPERATIONAL DETAILS
const listDetailService = async (id: string): Promise<Partial<OperationalDetail>[]> => {
  const operationalDetail = await OperationalDetailModel.find<OperationalDetail>({ status: 'ACTIVO', idOperational: id });

  const list = await Promise.all(operationalDetail.map(async (detail) => { 
    var Transport = detail.idTransport !== '' ? await TransportModel.findOne<Transport>({ _id: detail.idTransport }) : null;
    var Driver = detail.idDriver !== '' ? await DriverModel.findOne<Driver>({ _id: detail.idDriver }) : null;
    var Dealership = detail.idDealership !== '' ? await DealershipModel.findOne<Dealership>({ _id: detail.idDealership }) : null;
    return formatOperationalDetailData({ model: detail, transport: formatTransportData({model:Transport}), driver: formatDriverData(Driver), dealership: formatDealershipData(Dealership) });
  }));

  return list
}

const getByIdDetailService = async (id: string): Promise<Partial<OperationalDetail>> => {
  const detail = await OperationalDetailModel.findOne({ _id: id });
  if (!detail) throw Error("NO FOUND OPERATIONAL DETAIL")

  var Transport = detail.idTransport !== '' ? await TransportModel.findOne<Transport>({ _id: detail.idTransport }) : null;
  var Driver = detail.idDriver !== '' ? await DriverModel.findOne<Driver>({ _id: detail.idDriver }) : null;
  var Dealership = detail.idDealership !== '' ? await DealershipModel.findOne<Dealership>({ _id: detail.idDealership }) : null;
  return formatOperationalDetailData({ model: detail, transport: formatTransportData({model:Transport}), driver: formatDriverData(Driver), dealership: formatDealershipData(Dealership) });
}

const addDetailService = async (OperationalDetail: Partial<OperationalDetail>): Promise<Partial<OperationalDetail>> => {
  const newOperationalDetail = await OperationalDetailModel.create({
    observation: OperationalDetail.observation,
    nfc: OperationalDetail.nfc,
    idTransport: OperationalDetail.nfc,
    idDealership: OperationalDetail.idDealership,
    idDriver: OperationalDetail.idDriver,
    idOperational: OperationalDetail.idOperational,
    status: 'ACTIVO'
  });

  if (!newOperationalDetail) throw Error("ERROR CREATE OPERATIONAL DETAIL")

  return formatOperationalDetailData({ model: newOperationalDetail });
}

const removeDetailService = async (id: string): Promise<Partial<OperationalDetail>> => {
  const removeOperationalDetail = await OperationalDetailModel.findOneAndUpdate({ _id: id }, { status: "ELIMINADO" }, {
    new: true,
  });

  if (!removeOperationalDetail) throw Error("NO FOUND TRANSPORT")

  return formatOperationalDetailData({ model: removeOperationalDetail });
}

const getByUserService = async (id: string): Promise<Partial<Operational>[]> => {
  const operational = await OperationaModel.find<Operational>({ status: 'ACTIVO', idInspector: id });

  const list = await Promise.all(operational.map(async (operational) => { 
    var Inspector = operational.idInspector !== '' ?await InspectorModel.findOne<Inspector>({ _id: operational.idInspector }) : null;
    return formatOperationalData({ model: operational, inspector: formatInspectorData(Inspector) });
  }));

  return list
}

export {
  listService,
  addService,
  getByIdService,
  editService,
  removeService,
  listDetailService,
  getByIdDetailService,
  addDetailService,
  removeDetailService,
  getByUserService
}