import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetSubMenu2 = async () => {
    const result = await axios.get(`${base_url}Document2`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetDocument2ByUserSpecialiedDepartment = async (query: any) => {
    const result = await axios.get(`${base_url}Document2/GetDocument2ByUserSpecialiedDepartment?${query}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetSubMenu2ById = async (id: string) => {
    const result = await axios.get(`${base_url}Document2/ById/${id}`);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu2 = async (data: any) => {
    const result = await axios.post(`${base_url}Document2`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu2Grade = async (data: any, docId: any) => {
    const result = await axios.put(`${base_url}Document2Grade/${docId}`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiDeleteSubMenu2 = async (docId: any) => {
    const result = await axios.delete(`${base_url}Document2/${docId}`);
    if (result)
        return result;
    else
        return null;
}

export const apiUpdateSubMenu2 = async (data: any, docId: any) => {
    const result = await axios.put(`${base_url}Document2/${docId}`, data);
    if (result)
        return result;
    else
        return null;
}
