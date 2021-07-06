import {Store} from "./lib/core/store";
import {Functions} from "./lib/core/functions";

export default class Envdesk {

    static variableStore = Store.raw

    static store = Store.serialized

    static engine = Functions

}