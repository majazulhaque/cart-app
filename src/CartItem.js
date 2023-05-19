import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src="" alt="" style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Button*/}
                        <img src="../image/plus.png" alt="increase" className="action-icons"/>
                        <img src="../image/minuss.png" alt="decrease" className="action-icons"/>
                        <img src="../image/trashs.png" alt="delete" className="action-icons"/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: '#777'
    }
}

export default CartItem;