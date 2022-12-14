import { useContext } from 'react';
import { Modal, Button, Select } from 'antd';
import { StoreContext } from '../store';
import { CartIcon } from './Icons';
export const ADD_CART_ITEM = 'ADD_CART_ITEM';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

const { Option } = Select;

export default function CartModal({isModalVisible, toggleModal}) {
    const { state: { cartItems }, dispatch} = useContext(StoreContext);
    const handleCancel = () => toggleModal(!isModalVisible);

    const addToCart = (product, qty) => {
        dispatch({
          type: ADD_CART_ITEM,
          payload: {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            countInStock: product.countInStock,
            qty,
          },
        });
      };
    
      const removeFromCart = (productId) => {
        dispatch({ type:REMOVE_CART_ITEM, payload:productId});
      };
    
      const getTotalPrice = () => {
        return (cartItems.length > 0) ?
          cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
          : 0;
      }
    
    return (
    <Modal
        title = "Shopping Bag"
        visible = {isModalVisible}
        onCancel = {handleCancel}
        footer = {null}
    >
        {cartItems.length === 0 ? (
            <div>Cart is empty</div>
        ) : (
            cartItems.map(item => (
                <li key = {item.id} className="cart-item">
                    <div className="cart-image">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-content">
                        <div className="cart-name">{item.name}</div>
                        <div className="product-qty">
                            Qty: {"   "}
                            <Select
                                defaultValue={item.qty}
                                className="select-style"
                                onChange={(val) => addToCart(item, val)}
                            >
                                {[...Array(item.countInStock).keys()].map((x) => (
                                    <Option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </div>
                    <div className="cart-item-end">
                        <div className="cart-price">
                            ${item.price * item.qty}
                        </div>
                        <div className="cart-item-delete" onClick={() => removeFromCart(item.id)}>
                            x
                        </div>
                    </div>
                </li>
            ))
        )}
        <div className="cart-total-price-wrap">
            Total
            <div className="cart-total-price">${getTotalPrice()}</div>
        </div>
        <Button 
            type="primary" 
            className='cart-modal-btn'
        >
           <CartIcon size={20} /> 
           <span style={{marginLeft: 12}}> Start Checkout </span>
        </Button>

    </Modal>
    
  );
}