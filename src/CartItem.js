import React from "react";

const CartItem = (props) => {
  const { price, title, qty,img } = props.product;
  const { product, onIncreaseQty, onDecreaseQty, onDeleteQty } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img src= {img} alt="" style={styles.image} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/*Button*/}
          <img
            src="../image/plus.png"
            alt="increase"
            className="action-icons"
            onClick={() => {
              onIncreaseQty(product);
            }}
          />
          <img
            src="../image/minuss.png"
            alt="decrease"
            className="action-icons"
            onClick={() => {
              onDecreaseQty(product);
            }}
          />
          <img
            src="../image/trashs.png"
            alt="delete"
            className="action-icons"
            onClick={() => {
              onDeleteQty(product.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#777",
  },
};

export default CartItem;
