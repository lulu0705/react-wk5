import { Button, notification } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store";
export const ADD_CART_ITEM = 'ADD_CART_ITEM';


export default function AddToCart({ product, qty }) {
  const { dispatch } = useContext(StoreContext);

  const openNotification = () => {
    notification.open({
      message: 'Shop Notification',
      description:
        `${qty} ${qty>1?"pieces":"piec"} of ${product.name} ${qty>1?"have":"has"} been added to your cart.`,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      placement: 'bottomRight'
    });
  };
  
  const addToCart = () => {
    openNotification();
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

  return (
    <Button type="primary" className="btn-tocar" onClick={addToCart}>
      Add To Shopping Bag
    </Button>
  );
}