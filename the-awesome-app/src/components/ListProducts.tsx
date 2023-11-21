import {useEffect, useState} from 'react';
import axios from 'axios';
import {Product} from '../model/Product';
import './Listproducts.css';

const base_url = "http://localhost:9000";

function ListProducts(){

    //useEffect(callback, [dependencies])
    //useEffect => invoked only once on when mounted, 
                            //  pass am array of empty denpendies
    useEffect(() => {
        console.log("useEffect on mount");
        fetchProducts();
    }, []);
    const [products, setProducts] = useState<Product []>([]);


    function fetchProducts(){
        const url = base_url + "/products";
        axios
            .get<Array<Product>>(url)
            .then((response) => {
                   console.log("success", response.data); 
                   setProducts(response.data);

            }, (errorResponse) => {
                console.log("error", errorResponse); 
            });
    }

    return (
        <div>
            <h4>List Products</h4>
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {products.map((item: Product) => {
                    return (
                        <div className='product'  key={item.id}>
                            <p>Id: {item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default ListProducts;