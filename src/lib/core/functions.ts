import {HTTPService} from "../services/http";
import {Constants} from "../services/constants";
import {Variable} from "../frames/variable";
import {Store} from "./store";

export class Functions {

    static async loadVariables(options: { access_key: string, environment: string, private_key?: string }) {

        let params: { [key: string]: string } = {environment: options.environment}

        if (options.private_key) params.private_key = options.private_key

        const response = await HTTPService.run(Constants.variables, {
            access_key: options.access_key,
            params
        })

        for (let variable of <Variable[]>response?.data?.data ?? []) {
            Store.raw.push(variable);
            Store.serialized[variable.key] = variable.value

            process.env[variable.key] = variable.value;
        }


    }

}