import { Product } from "../model/Product";

export interface GadgetsState{
    cart: any [],
    products: Product[]
}

const initState: GadgetsState = {
    cart: [],
    products: []
}

interface GadgetsAction{
    type: string,
    payload: any
}
export const gadgetsReducer = (currentState=initState, action: GadgetsAction) => {

    return currentState;
}