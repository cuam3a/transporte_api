import { Driver } from "../types"
import DriverModel from "../models/driver.model";
import { formatDriverData } from "../utils/modelToType";

const listService = async (s : string) : Promise<Partial<Driver>[]>=> {
  const driver = await DriverModel.find<Driver>({ status: 'ACTIVO', name: new RegExp(s) }); 
  return driver.map(driver => { return formatDriverData(driver) })
}

const getByIdService = async (id: string) : Promise<Partial<Driver>> => {
  const driver = await DriverModel.findOne({ _id: id });
  if(!driver) throw Error("NO FOUND DRIVER")

  return driver;
}

const addService = async (Driver : Partial<Driver>) : Promise<Partial<Driver>>=> {
  const newDriver = await DriverModel.create({
    name: Driver.name,
    lastName: Driver.lastName,
    dni: Driver.dni,
    experience: Driver.experience,
    phone: Driver.phone,
    driveLicense: Driver.driveLicense,
    city: Driver.city,
    status: 'ACTIVO'
  });

  if(!newDriver) throw Error("ERROR CREATE DRIVER")
  
  return formatDriverData(newDriver);
}

const editService = async (Driver : Partial<Driver>) :Promise<Partial<Driver>>=> {
  const updateDriver = await DriverModel.findOneAndUpdate({ _id: Driver.id }, Driver, {
    new: true,
  });

  if(!updateDriver) throw Error("NO FOUND DRIVER")
  
  return formatDriverData(updateDriver);
}

const removeService = async (id: string) :Promise<Partial<Driver>>=> {
  const removeDriver = await DriverModel.findOneAndUpdate({ _id: id }, { status: "ELIMINADO" }, {
    new: true,
  });

  if(!removeDriver) throw Error("NO FOUND DRIVER")

  return formatDriverData(removeDriver);
}
export {
  listService,
  addService,
  getByIdService,
  editService,
  removeService
}