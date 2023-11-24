import React from "react";
import Counter from "../components/Counter";
import EditProduct from "../components/EditProduct";
import FnCounter from "../components/FnCounter";
import FnCounterWithError from "../components/FnCounterWithError";

import Hello from "../components/Hello";
import ListProducts from "../components/ListProducts";
import Login from "../components/Login";
import ViewCart from "../components/ViewCart";

//static import
//import GadgetStore from "../components/GadgetStore";

//dynamic import
const GadgetStore = React.lazy(() => import('../components/GadgetStore'));


export interface AppRoute{

    path: string;
    title?: string;
    isMainMenu: boolean,
    component: any,
    isProtected?: boolean,
    props?: object
}

export const routes: AppRoute[] =[

    {
        path: "/",
        title: "Home",
        isMainMenu: true,
        component: Hello,
        props: {message: "React"}
    },
    {
        path: "/counter",
        title: "Counter",
        isMainMenu: true,
        component: Counter,
        props: {value: 10}
    },
    {
        path: "/fncounter",
        title: "FnCounter",
        isMainMenu: true,
        component: FnCounter,
        isProtected: false
    },
    {
        path: "/products",
        title: "Products",
        isMainMenu: true,
        component: ListProducts,
        isProtected: true
    },
    {
        path: "/products/:id",
        isMainMenu: false,
        component: EditProduct,
        isProtected: true
    },
    {
        path: "/gadgets",
        title: "Gadget Store",
        isMainMenu: true,
        component: GadgetStore
    },
    {
        path: "/login",
        title: "Login",
        isMainMenu: true,
        component: Login
    },
    {
        path: "/viewcart",
        title: "View Cart",
        isMainMenu: true,
        component: ViewCart
    },
    {
        path: "/error",
        title: "FnCounterError",
        isMainMenu: true,
        component: FnCounterWithError
    }


] 

