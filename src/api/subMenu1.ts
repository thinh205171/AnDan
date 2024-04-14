import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetSubMenu1 = async () => {
    const result = await axios.get(`${base_url}Document1`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSubMenu1ById = async (id: string) => {
    const result = await axios.get(`${base_url}Document1/ById/${id}`);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1 = async (data: any) => {
    const result = await axios.post(`${base_url}Document1`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1TeachingEquipment = async (data: any) => {
    const result = await axios.post(`${base_url}Document1`, data);
    if (result)
        return result;
    else
        return null;
}


