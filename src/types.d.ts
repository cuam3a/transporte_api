import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export type Inspector = {
    id: string
    name: string
    lastName: string
    dni: string
    address: string
    birthDate: Date
    gender: string
    user: string
    password: string
    email: string
    rol: Rol
    status: State
  }

export enum Rol { ADMINISTRADOR = 'ADMINISTRADOR', INSPECTOR = 'INSPECTOR' }

export type InspectorResponse = {
    status: number
    token: string
    data: Partial<Inspector>[] | Partial<Inspector>
    error: string
    errorDetail: string
}

export type TransportResponse = {
    status: number
    token: string
    data: Partial<Transport>[] | Partial<Transport>
    error: string
    errorDetail: string
}

export type DriverResponse = {
    status: number
    token: string
    data: Partial<Driver>[] | Partial<Driver>
    error: string
    errorDetail: string
}

export type DealershipResponse = {
    status: number
    token: string
    data: Partial<Dealership>[] | Partial<Dealership>
    error: string
    errorDetail: string
}

export type OperationalResponse = {
  status: number
  token: string
  data: Partial<Operational>[] | Partial<Operational>
  error: string
  errorDetail: string
}

export type OperationalDetailResponse = {
  status: number
  token: string
  data: Partial<OperationalDetail>[] | Partial<OperationalDetail>
  error: string
  errorDetail: string
}

export enum State { ACTIVO = 'ACTIVO', INACTIVO = 'INACTIVO', ELIMINADO = 'ELIMINADO' }

export type LoginResponse = {
    status: number
    token: string
}

export type ActionResponse = {
    status: number
    token: string
    message: string
    user: Partial<User>
}

export type ErrorResponse = {
    status: number
    error: string
    errorDetail: string
}

export type UserResponse = {
    status: number
    name: string
}

export type GetListResponse = {
    status: number
    data: any[]
}

export interface RequestExt extends Request {
  idUser?: JwtPayload | { idUser: string };
}

export type Driver = {
    id: string
    name: string
    lastName: string
    dni: string
    experience: number
    phone: string
    driveLicense: string
    city: string
    status: State
  }

  export type Dealership = {
    id: string
    name: string
    ruc: string
    email: string
    status: State
    
  }

  export type Transport = {
    id: string
    plateNumber: string
    soat: string
    nfc: string
    idDealership: string
    idDriver: string
    status: State
    driver: Partial<Driver> | null
    dealership: Partial<Dealership> | null
  }

  export type Operational = {
    id: string
    name: string
    date: string
    time: string
    latitud: number
    longitude: number
    status: State
    idInspector: string
    inspector: Partial<Inspector> | null
  }

  export type OperationalDetail = {
    id: string
    observation: string
    nfc: string
    status: State
    idTransport: string
    idDealership: string
    idDriver: string
    idOperational: string
    transport: Partial<Transport> | null
    driver: Partial<Driver> | null
    dealership: Partial<Dealership> | null
  }