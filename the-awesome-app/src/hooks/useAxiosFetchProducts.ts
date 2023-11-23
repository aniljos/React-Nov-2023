import axios from 'axios';
import {useState, useEffect} from 'react';
import { Product } from '../model/Product';

export function useAxiosFetchProducts(){

    const [products, setProducts] = useState<Product[]>([]);
    useEffect( () => {

       fetchProducts();

    }, [])
    async function fetchProducts(){

        try {
            
            const url = process.env.REACT_APP_BASE_URL + "/products";
            const response = await axios.get<Product[]>(url);
            setProducts(response.data);

        } catch (error) {
            console.log("useAxiosFetchProducts", error);
        }
    }

    return [products, setProducts] as const;

}