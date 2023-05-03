import { Request, Response } from "express";
import { LoginResponse, UserResponse, RequestExt, OperationalResponse, OperationalDetailResponse } from "../types";
import { listOperationalDetailService, listOperationalService, loginAppService } from "../services/app";
import { handleError } from "../utils/error.handle";

const live = async (req: Request, res: Response) => {
  console.log("ENTRO LIVE")
    const response: LoginResponse = {
      status: 200,
      token: '',
      id: '',
      name: '',
      rol: ''
    }

    res.send(response);
};

const login = async ({ body }: Request, res: Response) => {
  const { user, password } = body;
  console.log({ user, password })
  try {
    const userData = await loginAppService({ user, password });
    const response: LoginResponse = {
      status: 200,
      token: '',
      id: userData.id ?? '',
      name: userData.name ?? '',
      rol: userData.rol ?? ''
    }

    res.send(response);
  }
  catch (e: any) {
    handleError(res, "ERROR LOGIN", e)
  }
};

const userInformation = async ({ idUser }: RequestExt, res: Response) => {
  try {
    console.log(idUser)
    const idU = idUser?.idUser
    //const userInformation = await userInformationService(idU);

    const response : UserResponse = {
      status: 200,
      name: ""//userInformation
    }
    console.log(response)
    res.send(response)
  }
  catch (e: any) {
    handleError(res, "ERROR LOGIN", e)
  }
};

const reportOperational = async (req: RequestExt, res: Response) => {
  try {
    const { s } = req.params
    let data = await listOperationalService(s);
    console.log(data)
    const response: Partial<OperationalResponse> = {
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

const reportOperationalDetail = async ({ body }: Request, res: Response) => {
  try {
    const { id, dni, plateNumber } = body
    let data = await listOperationalDetailService(id,dni,plateNumber);
    console.log(data)
    const response: Partial<OperationalDetailResponse> = {
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

export {
  live,
  login,
  userInformation,
  reportOperational,
  reportOperationalDetail,
}