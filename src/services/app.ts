import { Inspector, Operational, OperationalDetail, Transport, Driver, Dealership } from "../types"
import InspectorModel from "../models/inspector.model";
import OperationaModel from "../models/operational.model";
import { verified } from "../utils/bcypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { formatDealershipData, formatDriverData, formatInspectorData, formatOperationalData, formatOperationalDetailData, formatTransportData } from "../utils/modelToType";
import DealershipModel from "../models/dealership.model";
import OperationalDetailModel from "../models/operationalDetail.model";
import TransportModel from "../models/transport.model";
import DriverModel from "../models/driver.model";

const loginAppService = async ({ user, password }: Partial<Inspector>) => {
  const checkIs = await InspectorModel.findOne({ user });
  if (!checkIs) throw Error("USUARIO O CONTRASEÑA INCORRECTA");

  // const passwordHash = checkIs.password;
  // const isCorrect = await verified(password ?? '', passwordHash);

  if(checkIs.password != password)throw Error("USUARIO O CONTRASEÑA INCORRECTA");

  return formatInspectorData(checkIs);
}

const listOperationalService = async (s: string): Promise<Partial<Operational>[]> => {
  const operational = await OperationaModel.find<Operational>({ status: 'ACTIVO', ubication: new RegExp(s, 'i') });

  const list = await Promise.all(operational.map(async (operational) => { 
    var Inspector = await InspectorModel.findOne<Inspector>({ _id: operational.idInspector });
    return formatOperationalData({ model: operational, inspector: formatInspectorData(Inspector) });
  }));

  return list
}

const listOperationalDetailService = async (id: string, dni: string, plateNumber: string): Promise<Partial<OperationalDetail>[]> => {
  const operationalDetail = await OperationalDetailModel.find<OperationalDetail>({ status: 'ACTIVO', idOperational: id });

  const list = await Promise.all(operationalDetail.map(async (detail) => { 
    var Transport = detail.idTransport !== '' ? await TransportModel.findOne<Transport>({ _id: detail.idTransport, plateNumber: new RegExp(plateNumber, 'i') }) : null;
    var Driver = detail.idDriver !== '' ? await DriverModel.findOne<Driver>({ _id: detail.idDriver, dni: new RegExp(dni, 'i') }) : null;
    var Dealership = detail.idDealership !== '' ? await DealershipModel.findOne<Dealership>({ _id: detail.idDealership }) : null;
    return formatOperationalDetailData({ model: detail, transport: formatTransportData({model:Transport}), driver: formatDriverData(Driver), dealership: formatDealershipData(Dealership) });
  }));

  return list.filter(f => {return (f.driver?.id ?? "") !== "" && (f.transport?.id ?? "") !== "" });
}

export {
  loginAppService,
  listOperationalService,
  listOperationalDetailService,
}