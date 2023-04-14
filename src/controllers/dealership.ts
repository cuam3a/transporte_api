import { Request, Response } from "express";
import { Inspector, DealershipResponse } from "../types"
import { addService, editService, getByIdService, listService, removeService } from "../services/dealership";
import { handleError } from "../utils/error.handle";

const list = async (req: Request, res: Response) => {
  try {
    const { s } = req.params
    let data = await listService(s);
    console.log(data)
    const response: Partial<DealershipResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR GET LIST DEALERSHIP")
  }
}

const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    console.log(id)
    let data = await getByIdService(id);
    const response: Partial<DealershipResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR GET DEALERSHIP")
  }
}

const add = async ({ body } : Request, res: Response) => {
  try {
    console.log(body)
    let data = await addService(body);
    const response: Partial<DealershipResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR ADD DEALERSHIP")
  }
}

const edit = async ({ body }: Request, res: Response) => {
  try {
    let data = await editService(body);
    const response: Partial<DealershipResponse> = {
      status: 200,
      token: '',
      data: data,
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR EDIT DEALERSHIP")
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    let data = await removeService(id);
    const response: Partial<DealershipResponse> = {
      status: 200,
      token: '',
      data: data
    }
    res.send(response);
  }
  catch(e){
    console.log(e);
    handleError(res, "ERROR REMOVE DEALERSHIP")
  }
}
export {
  list,
  add,
  getById,
  edit,
  remove
}