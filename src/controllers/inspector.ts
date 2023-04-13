import { Request, Response } from "express";
import { Inspector, InspectorResponse } from "../types"
import { addService, editService, getByIdService, listService, removeService } from "../services/inspector";
import { handleError } from "../utils/error.handle";

const list = async (req: Request, res: Response) => {
  try {
    const { s } = req.params
    let data = await listService(s);
    console.log(data)
    const response: Partial<InspectorResponse> = {
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
    const response: Partial<InspectorResponse> = {
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
    const response: Partial<InspectorResponse> = {
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
    const response: Partial<InspectorResponse> = {
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
    const response: Partial<InspectorResponse> = {
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
export {
  list,
  add,
  getById,
  edit,
  remove
}