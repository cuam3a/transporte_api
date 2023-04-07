import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export type User = {
    id: string
    name: string
    last_name: string
    dni: string
    address: string
    birth_date: Date
    gender: string
    user: string
    password: string
    isAdmin: boolean
    active: boolean
    rol: Rol
  }

export enum Rol { ADMIN = 'ADMIN', SUPERVISOR = 'SUPERVISOR', VENTAS = 'VENTAS' }

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