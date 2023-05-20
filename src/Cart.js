import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 99,
                    title: 'Charger',
                    qty: 1,
                    img: '',
                    id:2
                },
                {
                    price: 9,
                    title: 'Band',
                    qty: 1,
                    img: '',
                    id:3
                }
            ]
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    handleIncreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products: products
        });
    }
    handleDecreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty == 0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            proudcts:products
        });
    }
    handleDeleteQuantity = (id) =>{
        const {products} = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({
            products: items
        });
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product) => {
                    return (
                        <CartItem product ={product}
                        key={product.id}
                        onIncreaseQty={this.handleIncreaseQuantity}
                        onDecreaseQty={this.handleDecreaseQuantity}
                        onDeleteQty={this.handleDeleteQuantity}
                        />
                
                    )
                })}
            </div>
        )
    }
}
    



export default Cart;