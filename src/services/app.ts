import { Inspector } from "../types"
import InspectorModel from "../models/inspector.model";
import { verified } from "../utils/bcypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { formatInspectorData } from "../utils/modelToType";

const loginAppService = async ({ user, password }: Partial<Inspector>) => {
  const checkIs = await InspectorModel.findOne({ user });
  if (!checkIs) throw Error("USUARIO O CONTRASEÑA INCORRECTA");

  // const passwordHash = checkIs.password;
  // const isCorrect = await verified(password ?? '', passwordHash);

  if(checkIs.password != password)throw Error("USUARIO O CONTRASEÑA INCORRECTA");

  return formatInspectorData(checkIs);
}

export {
  loginAppService,
}