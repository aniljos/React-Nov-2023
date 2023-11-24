import {useAxiosFetchProducts} from '../hooks/useAxiosFetchProducts';
import { CartItem } from '../model/CartItem';
import { Product } from '../model/Product';
import {useDispatch, useSelector} from 'react-redux';
import { AppDispatch, AppState } from '../redux/store';
import { createAddToCartAction, createSetProductsAction } from '../redux/actionCreators';
import { useEffect } from 'react';
import { addItemToCart, fetchProductsAsync } from '../redux/gadgetsReducers';

function GadgetStore(){

    //const [products, setProducts] =  useAxiosFetchProducts();
    const products = useSelector((state: AppState) => state.gadgets.products);
    const dispatch = useDispatch<any>();
    
    useEffect(() => {

        //dispatch(createSetProductsAction())
        dispatch(fetchProductsAsync());

    }, [])


    function addToCart(product: Product){

        //dispatch({type: "ADD_TO_CART", payload: new CartItem(product, 1)});
        //dispatch(createAddToCartAction(new CartItem(product, 1)));

        dispatch(addItemToCart(new CartItem(product, 1)));
    }
    
    function renderProducts() {

        const productsView =  products.map((item, index) => {
            return (
                <div className="col" key={index} >
                    <div className="card border-warning" >
                        <div className="card-body text-success">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p className="card-text text-primary">INR {item.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
    
                </div>
            );
        })
        return (
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {productsView}
            </div>
        )
    }



    return (
        <div>
            <h4>Gadget Store</h4>
            {renderProducts()}
        </div>
    )

}

export default GadgetStore;