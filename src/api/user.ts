import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetUser = async (data: number): Promise<any> => {
    const result = await axios.get(`${base_url}User/${data}`);
    if (result)
        return result;
    else
        return null;
}

export const apiGetAllGetUser = async (): Promise<any> => {
    const result = await axios.get(`${base_url}User`);
    if (result)
        return result;
    else
        return null;
}
