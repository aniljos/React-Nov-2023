import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";

export interface GadgetsState{
    cart: CartItem [],
    products: Product[]
}

const initState: GadgetsState = {
    cart: [],
    products: []
}

export interface GadgetsAction{
    type: string;
    payload?: CartItem;
    product?: Product;
    products?: Product []
}
export const gadgetsReducer = (currentState=initState, action: GadgetsAction) => {

    // {type: "ADD_TO_CART", payload: {product: {}, quntity: 1}}
    if(action.type === "ADD_TO_CART"){

        const cart = [...currentState.cart];
        if(action.payload){
            cart.push(action.payload);
        }
        return{
            ...currentState,
            cart: cart
        };
    }
    // {type: "REMOVE_FROM_CART", product: {}}
    if(action.type === "REMOVE_FROM_CART"){

        const cart = [...currentState.cart];
        const index = cart.findIndex(item => item.product?.id === action.product?.id)
        if(index != -1){
            cart.splice(index, 1);
        }
        return{
            ...currentState,
            cart: cart
        };
    }
    // {type: "SET_PRODUCTS", products: []}
    if(action.type === "SET_PRODUCTS"){

        if(action.products){
            return {
                ...currentState,
                products: action.products
            }
        }
       
    }

    return currentState;
}