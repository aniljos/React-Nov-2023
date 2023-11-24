import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../model/Product';
import './Listproducts.css';
import { useNavigate } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import { useSelector } from 'react-redux';
import { AuthState } from '../redux/authReducer';


const base_url = "http://localhost:9000";

function ListProducts() {

    //useEffect(callback, [dependencies])
    //useEffect => invoked only once on when mounted, 
    //  pass am array of empty denpendies
    useEffect(() => {
        console.log("useEffect on mount");
        fetchProducts();
    }, []);
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();
    useTitle("Products");
    const auth = useSelector((state: any) => state.auth) as AuthState



    function fetchProducts() {

        const accessToken = auth.accessToken;
        const url = base_url + "/secure_products";
        const headers = { "Authorization": `Bearer ${accessToken}` }
        axios
            .get<Array<Product>>(url, { headers })
            .then((response) => {
                console.log("success", response.data);
                setProducts(response.data);

            }, (errorResponse) => {
                console.log("error", errorResponse);
            });
    }

    // function deleteProduct(product: Product){

    //     const url = base_url + "/products/" + product.id;
    //     axios
    //         .delete(url)
    //         .then((response)=> {

    //             fetchProducts();
    //             alert("record deleted");

    //         }, (errorResponse)=>{
    //             alert("failed to delete");
    //         })
    // }
    async function deleteProduct(product: Product) {

        const url = base_url + "/secure_products/" + product.id;
        try {

            //promise fulfilled
            const response = await axios.delete(url);
            //fetchProducts();
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            copy_of_products.splice(index, 1);
            setProducts(copy_of_products);


            alert("record deleted");


        } catch (errorResponse) {

            //promise rejected
            alert("failed to delete");
        }
    }

    function editProduct(product: Product) {

        navigate("/products/" + product.id);
    }

    return (
        <div>
            <h4>List Products</h4>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                {products.map((item: Product) => {
                    return (
                        <div className='product' key={item.id} data-testid="product">
                            <p>Id: {item.id}</p>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            <div>
                                <button className='btn btn-danger'
                                    onClick={() => { deleteProduct(item) }}>Delete</button>&nbsp;
                                <button className='btn btn-primary'
                                    onClick={() => { editProduct(item) }}>Edit</button>
                            </div>

                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default ListProducts;