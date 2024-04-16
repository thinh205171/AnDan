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

export const apiPostSubMenu1 = async (data: any): Promise<any> => {
    const result = await axios.post(`${base_url}Document1`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiDeleteSubMenu1 = async (data: any) => {
    const result = await axios.delete(`${base_url}Document1/${data}`);
    if (result)
        return result;
    else
        return null;
}


export const apiPostSubMenu1TeachingEquipment = async (data: any) => {
    const result = await axios.put(`${base_url}Document1`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1CuriculumDistribution = async (data: any) => {
    const result = await axios.put(`${base_url}Document1CuriculumDistribution`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1SelectedTopic = async (data: any) => {
    const result = await axios.put(`${base_url}Document1SelectedTopic`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1SubjectRooms = async (data: any) => {
    const result = await axios.put(`${base_url}Document1SubjectRooms`, data);
    if (result)
        return result;
    else
        return null;
}

export const apiPostSubMenu1PeriodicAssessment = async (data: any) => {
    const result = await axios.put(`${base_url}Document1PeriodicAssessment`, data);
    if (result)
        return result;
    else
        return null;
}
