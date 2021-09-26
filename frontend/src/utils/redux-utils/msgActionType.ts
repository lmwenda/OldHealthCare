import { authEnum } from "./authEnum";

interface ISET_MESSAGE{
    type: authEnum.SET_MESSAGE,
    payload: string
}

interface ICLEAR_MESSAGE{
    type: authEnum.CLEAR_MESSAGE,
    payload: string
}

export type Action = ISET_MESSAGE | ICLEAR_MESSAGE;