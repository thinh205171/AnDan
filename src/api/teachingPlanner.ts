import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiPostTeachingPlanner = async (data: any, userId: number) => {
    const result = await axios.put(`${base_url}TeachingPlanner/${userId}`);
    if (result)
        return result;
    else
        return null;
}