import {Store} from "./lib/core/store";
import {Functions} from "./lib/core/functions";

export class Envdesk {

    static variableStore = Store.raw

    static store = Store.serialized

    static engine = Functions

}

Envdesk.engine.loadVariables({access_key: "", environment: "", private_key: ""})