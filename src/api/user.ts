import { config } from "process";
import { base_url } from "../utils/baseUrl"
import axios from "axios";

export const apiGetUser = async (data: string): Promise<any> => {
    const result = await axios.get(`${base_url}User/${data}`);
    if (result)
        return result;
    else
        return null;
}
