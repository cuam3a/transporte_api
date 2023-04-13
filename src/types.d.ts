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
    isAdmin: boolean
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