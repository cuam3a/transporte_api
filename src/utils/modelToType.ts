import { Inspector } from "../types";

export const formatInspectorData = (model: Inspector): Partial<Inspector> => {
    var userType: Partial<Inspector> = 
    { 
        id: model.id, 
        name: model.name,
        lastName: model.lastName,
        dni: model.dni,
        address: model.address,
        birthDate: model.birthDate,
        gender: model.gender,
        user: model.user,
        rol: model.rol,
    }
    return userType
}