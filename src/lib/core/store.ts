import {Variable} from "../frames/variable";

export class Store {
    static raw: Variable[] = []
    static serialized: {[key: string]: string} = {}
}