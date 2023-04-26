import { Request, Response } from "express";
import { Driver, DriverResponse } from "../types"
import { addService, editService, getByIdService, listService, removeService } from "../services/driver";
import { handleError } from "../utils/error.handle";

const list = async (req: Request, res: Response) => {
  try {
    const { s } = req.params
    let data = await listService(s);
    console.log(data)
    const response: Partial<DriverResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e:any){
    console.log(e);
    handleError(res, e.message)
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log(id)
    let data = await getByIdService(id);
    const response: Partial<DriverResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e:any){
    console.log(e);
    handleError(res, e.message)
  }
}

const add = async ({ body } : Request, res: Response) => {
  try {
    console.log(body)
    let data = await addService(body);
    const response: Partial<DriverResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e:any){
    console.log(e);
    handleError(res, e.message)
  }
}

const edit = async ({ body }: Request, res: Response) => {
  try {
    let data = await editService(body);
    const response: Partial<DriverResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e:any){
    console.log(e);
    handleError(res, e.message)
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    let data = await removeService(id);
    const response: Partial<DriverResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e:any){
    console.log(e);
    handleError(res, e.message)
  }
}
export {
  list,
  add,
  getById,
  edit,
  remove
}