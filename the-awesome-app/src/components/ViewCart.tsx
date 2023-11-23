import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, AppState } from "../redux/store";
import { CartItem } from "../model/CartItem";
import { createRemoveFromCartAction } from "../redux/actionCreators";

function ViewCart() {

    const cart = useSelector((state: AppState) => state.gadgets.cart);
    const dispatch = useDispatch<AppDispatch>();

    function removeItem(cartItem : CartItem){
        //dispatch({type: "REMOVE_FROM_CART", product: cartItem.product});
        if(cartItem.product){
            dispatch(createRemoveFromCartAction(cartItem.product));
        }
        
    }

    return (
        <div>
            <h3>Cart</h3>

            {cart.length === 0 ?  <div className="alert alert-info">No Items in the cart.</div> : null}


            <div className="row row-cols-1 row-cols-md-2 g-4">
                {cart.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className="card bg-light mb-3 border-success">
                                <p className="card-header">{item.product?.name}</p>
                                <div className="card-body">
                                    <p className="card-text">{item.product?.description}</p>
                                    <p className="card-text">Quantity: {item.quantity}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" 
                                                onClick={() => removeItem(item)}>Remove</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default ViewCart;