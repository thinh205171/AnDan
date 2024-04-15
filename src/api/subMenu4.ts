import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetSubMenu4 = async () => {
    const result = await axios.get(`${base_url}Document4`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSubMenu4ById = async (id: string) => {
    const result = await axios.get(`${base_url}Document4/ById/${id}`);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu4 = async (data: any) => {
    const result = await axios.post(`${base_url}Document4`, data);
    if (result)
        return result;
    else
        return null;
}

