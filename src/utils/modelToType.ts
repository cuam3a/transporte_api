import DealershipModel from "../models/dealership.model";
import DriverModel from "../models/driver.model";
import { Dealership, Driver, Inspector, Operational, OperationalDetail, Transport } from "../types";

export const formatInspectorData = (model: Inspector | null): Partial<Inspector> => {
    if(model === null)
        return {}

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
    model: Transport | null,
    driver?: Partial<Driver>
    dealership?: Partial<Dealership>
}

export const formatTransportData = ({ model, driver, dealership }:TransportProps ): Partial<Transport> => {
    if(model === null)
        return {}

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

type OperationalProps = {
    model: Operational | null,
    inspector?: Partial<Inspector>
}

export const formatOperationalData = ({ model, inspector }:OperationalProps ): Partial<Operational> => {
    if(model === null)
        return {}
        
    var operationalType: Partial<Operational> = 
    { 
        id: model.id, 
        name: model.name,
        date: model.date,
        time: model.time,
        latitud: model.latitud,
        longitude: model.longitude,
        ubication: model.ubication,
        status: model.status,
        idInspector: model.idInspector,
        inspector: inspector,
    }
    return operationalType
}

type OperationalDetailProps = {
    model: OperationalDetail,
    transport?: Partial<Transport>
    driver?: Partial<Inspector>
    dealership?: Partial<Dealership>
}

export const formatOperationalDetailData = ({ model, transport, driver, dealership }:OperationalDetailProps ): Partial<OperationalDetail> => {
    var operationalDetailType: Partial<OperationalDetail> = 
    { 
        id: model.id, 
        observation: model.observation,
        nfc: model.nfc,
        status: model.status,
        idTransport: model.idTransport,
        idDealership: model.idDealership,
        idDriver: model.idDriver,
        idOperational: model.idOperational,
        transport: model.transport,
        driver: driver,
        dealership: dealership,
    }
    return operationalDetailType
}