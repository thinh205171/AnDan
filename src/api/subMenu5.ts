import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetSubMenu5 = async () => {
    const result = await axios.get(`${base_url}Document5`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSubMenu5ById = async (id: string) => {
    const result = await axios.get(`${base_url}Document5/ById/${id}`);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu5 = async (data: any) => {
    const result = await axios.post(`${base_url}Document5`, data);
    if (result)
        return result;
    else
        return null;
}

