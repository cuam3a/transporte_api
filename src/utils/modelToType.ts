import DealershipModel from "../models/dealership.model";
import DriverModel from "../models/driver.model";
import { Dealership, Driver, Inspector, Transport } from "../types";

export const formatInspectorData = (model: Inspector): Partial<Inspector> => {
    var inspectorType: Partial<Inspector> = 
    { 
        id: model.id, 
        name: model.name,
        lastName: model.lastName,
        dni: model.dni,
        address: model.address,
        birthDate: model.birthDate,
        gender: model.gender,
        email: model.email,
        user: model.user,
        rol: model.rol,
        status: model.status,
    }
    return inspectorType
}

type TransportProps = {
    model: Transport,
    driver?: Partial<Driver>
    dealership?: Partial<Dealership>
}

export const formatTransportData = ({ model, driver, dealership }:TransportProps ): Partial<Transport> => {
    var transportType: Partial<Transport> = 
    { 
        id: model.id, 
        plateNumber: model.plateNumber,
        soat: model.soat,
        nfc: model.nfc,
        idDealership: model.idDealership,
        idDriver: model.idDriver,
        status: model.status,
        driver: driver,
        dealership: dealership,
    }
    return transportType
}

export const formatDriverData = (model: Driver | null): Partial<Driver> => {
    if(model === null)
        return {}

    var driverType: Partial<Driver> = 
    { 
        id: model.id, 
        name: model.name,
        lastName: model.lastName,
        dni: model.dni,
        experience: model.experience,
        phone: model.phone,
        driveLicense: model.driveLicense,
        city: model.city,
        status: model.status,
    }
    return driverType
}

export const formatDealershipData = (model: Dealership | null): Partial<Dealership> => {
    if(model === null)
        return {}

    var dealershipType: Partial<Dealership> = 
    { 
        id: model.id, 
        name: model.name,
        ruc: model.ruc,
        email: model.email,
        status: model.status,
    }
    return dealershipType
}