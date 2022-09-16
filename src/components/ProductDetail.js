import { Row, Col } from "antd";
import { useState } from "react";
import { Select } from 'antd';
import AddToCart from "./AddToCart";
export const ADD_CART_ITEM = 'ADD_CART_ITEM';

const { Option } = Select

function ProductDetail({ product }) {
  let [qty, setQty] = useState(product.countInStock > 0 ? 1 : 0);
  
    return (
    <Row gutter={[32, 32]}>
      <Col lg={{ span:8, offset:2 }}>
        <img 
          alt={product.name} 
          className="product-image" 
          src={product.image} 
        />
      </Col>
      <Col lg={{ span:12 }}>
        <div className="product-info-detail">
        <h2 className="product-category">
            {product.category}
        </h2>
        <h1 className="product-name product-name-large">
            {product.name}
        </h1>  
        <p className="product-description">
            {product.description_long}
        </p>
        <div className="product-price-wrap">
            <p className="product-price product-price-large">
                USD {product.price}.00
            </p>

            <p className="product-status">
              Status: {product.countInStock > 0 ? "InStock" : "Unavailable."}
            </p>
            <p className="product-qty">
              QTY:{"  "}
              <Select
                defaultValue={qty}
                className="select-style"
                onChange={value => setQty(value)}
              >
                {[...Array(product.countInStock).keys()].map((x) => (
                  <Option key={x + 1} value={x + 1}>
                    {x + 1}
                  </Option>
                ))}
              </Select>
            </p>
            <p className="product.qty">
              Total Price:{product.price * qty}
            </p>
            <AddToCart  product={product} qty={qty} />
        </div>
        </div>
      </Col>
    </Row>
    );
}

export default ProductDetail;