import axios from "axios";
import { CartItem } from "../model/CartItem";
import { Product } from "../model/Product";
import { GadgetsAction } from "./gadgetsReducers";
import { AppDispatch } from "./store";

export function createAddToCartAction(payload: CartItem): GadgetsAction{
    return {
        type: "ADD_TO_CART",
        payload
    }
}

export function createRemoveFromCartAction(product: Product): GadgetsAction{
    return {
        type: "ADD_TO_CART",
        product
    }
}

export function createSetProductsAction(){

    return async (dispatch: AppDispatch)=> {

        try {
            
            const url = process.env.REACT_APP_BASE_URL + "/products";
            const response = await axios.get<Product[]>(url);
            const products = response.data;

            dispatch({
                type: "SET_PRODUCTS",
                products:products
            });

        } catch (error) {
            
        }

    }
}