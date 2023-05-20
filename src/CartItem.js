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
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log("Increase qty:",this.state.qty);
        //shallow merging
        this.setState({
            qty: this.state.qty + 1
        },()=>{
            console.log("Increase qty:",this.state.qty);
        });
    }
    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        // this.state.qty -= 1;
        // console.log("Decrease qty:",this.state.qty);
        // if prevState is used
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        },()=>{
            console.log("Decrease qty:",this.state.qty);
        });
    }
    deleteQuantity = () =>{
        this.state.qty = 0;
        console.log("Delete qty:",this.state.qty);
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
                        <img src="../image/plus.png" alt="increase" className="action-icons" onClick={this.increaseQuantity}/>
                        <img src="../image/minuss.png" alt="decrease" className="action-icons" onClick={this.decreaseQuantity}/>
                        <img src="../image/trashs.png" alt="delete" className="action-icons" onClick={this.deleteQuantity}/>
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