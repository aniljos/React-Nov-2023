import { ChangeEvent, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Product } from '../model/Product';

const base_url = "http://localhost:9000";

function EditProduct(){

    const params = useParams();
    useEffect(() => {
        fetchProduct()
    }, []);
    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));

    async function fetchProduct(){

        try {

            const url = base_url + "/products/" + params.id;
            const response = await axios.get<Product>(url);
            setProduct(response.data);


        } catch (error) {
            alert("Failed to fetch the product");
        }
    }

    function handleName(evt: ChangeEvent<HTMLInputElement>){
        
        const value = evt.target.value;
        // const copy_of_product = {...product};
        // copy_of_product.name = value;
        // setProduct(copy_of_product);

        setProduct({...product, name: value});
    }

    return (
        <div>
            <h4>Edit Product : {params.id}</h4>

            <div className="form-group">
                <label>Name</label>
                <input className="form-control" value={product.name} onChange={handleName}/>
            </div>

            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" 
                            value={product.price} 
                            onChange={(evt) => setProduct({...product, price: Number(evt.target.value)}) }/>
            </div>

            <div className="form-group">
                <label>Description</label>
                <input className="form-control" value={product.description}
                            onChange={e => setProduct({...product, description: e.target.value})}/>
            </div>
            <br/>
            <div>
                <button className="btn btn-primary">Save</button>&nbsp;
                <button className="btn btn-warning">Cancel</button>
            </div>
        </div>
    )

}

export default EditProduct;