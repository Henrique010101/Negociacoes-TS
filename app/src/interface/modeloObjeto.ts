import { Eimprimivel } from "../utils/Eimprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Objeto <T> extends Eimprimivel, Comparavel <T> {  }