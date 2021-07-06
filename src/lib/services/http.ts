import axios from "axios";
import {Constants} from "./constants";

export class HTTPService {
    static async run(route: string, config: { access_key: string, params: { [key: string]: string } }) {
        return axios.get(`${Constants.base}${route}`, {
            params: {
                access_key: config.access_key,
                ...config.params
            }
        }).catch(e => {
            throw new Error(e.response?.data?.message ?? "An error occurred connecting to EnvDesk Service")
        })
    }
}