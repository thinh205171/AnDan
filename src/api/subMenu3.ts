import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetSubMenu3 = async () => {
    const result = await axios.get(`${base_url}Document3`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSubMenu3ById = async (id: string) => {
    const result = await axios.get(`${base_url}Document3/ById/${id}`);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu3 = async (data: any) => {
    const result = await axios.post(`${base_url}Document3`, data);
    if (result)
        return result;
    else
        return null;
}

