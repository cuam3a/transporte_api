import { Request, Response } from "express";
import { OperationalDetailResponse, OperationalResponse } from "../types"
import { addDetailService, addService, editService, getByIdDetailService, getByIdService, getByUserService, listDetailService, listService, removeDetailService, removeService } from "../services/operational";
import { handleError } from "../utils/error.handle";

const list = async (req: Request, res: Response) => {
  try {
    const { s } = req.params
    let data = await listService(s);
    console.log(data)
    const response: Partial<OperationalResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR GET LIST INSPECTOR")
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log(id)
    let data = await getByIdService(id);
    const response: Partial<OperationalResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR GET INSPECTOR")
  }
}

const add = async ({ body } : Request, res: Response) => {
  try {
    console.log(body)
    let data = await addService(body);
    const response: Partial<OperationalResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR ADD INSPECTOR")
  }
}

const edit = async ({ body }: Request, res: Response) => {
  try {
    let data = await editService(body);
    const response: Partial<OperationalResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR EDIT INSPECTOR")
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    let data = await removeService(id);
    const response: Partial<OperationalResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR REMOVE INSPECTOR")
  }
}

const listDetail = async (req: Request, res: Response) => {
  try {
    const { s } = req.params
    let data = await listDetailService(s);
    console.log(data)
    const response: Partial<OperationalDetailResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR GET LIST INSPECTOR")
  }
}

const getByIdDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log(id)
    let data = await getByIdDetailService(id);
    const response: Partial<OperationalDetailResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR GET INSPECTOR")
  }
}

const addDetail = async ({ body } : Request, res: Response) => {
  try {
    console.log(body)
    let data = await addDetailService(body);
    const response: Partial<OperationalDetailResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR ADD INSPECTOR")
  }
}

const removeDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    let data = await removeDetailService(id);
    const response: Partial<OperationalDetailResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR REMOVE INSPECTOR")
  }
}

const getByUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    let data = await getByUserService(id);
    console.log(data)
    const response: Partial<OperationalResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR GET LIST INSPECTOR")
  }
}

export {
  list,
  add,
  getById,
  edit,
  remove,
  listDetail,
  getByIdDetail,
  addDetail,
  removeDetail,
  getByUser
}