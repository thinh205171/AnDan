import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiPostTeachingPlanner = async (data: any, query: any) => {
    const result = await axios.post(`${base_url}TeachingPlanner`, data, { params: query });
    if (result)
        return result;
    else
        return null;
}

export const apiDeleteTeachingPlanner = async (data: any) => {
    const result = await axios.post(`${base_url}TeachingPlanner?${data}`);
    if (result)
        return result;
    else
        return null;
}