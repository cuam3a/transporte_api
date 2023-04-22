import { Inspector } from "../types"
import InspectorModel from "../models/inspector.model";
import { verified } from "../utils/bcypt.handle";
import { generateToken } from "../utils/jwt.handle";
import { formatInspectorData } from "../utils/modelToType";

const loginAppService = async ({ user, password }: Partial<Inspector>) => {
  const checkIs = await InspectorModel.findOne({ user });
  if (!checkIs) throw Error("USER OR PASSWORD INCORRECT");

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password ?? '', passwordHash);

  if (!isCorrect) throw Error("USER OR PASSWORD INCORRECT");

  //const token = generateToken(`${checkIs._id}`);
  return formatInspectorData(checkIs);
}

export {
  loginAppService,
}