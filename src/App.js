import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "../image/phone.jpg",
          id: 1,
        },
        {
          price: 99,
          title: "Charger",
          qty: 1,
          img: "../image/charger.jpg",
          id: 2,
        },
        {
          price: 9,
          title: "Earbud",
          qty: 1,
          img: "../image/earbud.jpg",
          id: 3,
        },
      ],
    };
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty == 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      proudcts: products,
    });
  };
  handleDeleteQuantity = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const {products} = this.state;

    let count = 0;
    products.forEach((product) =>{
      count += product.qty;
    });
    return count;
  }
  countTotal = () =>{
    const {products} = this.state;
    let total = 0;
    products.forEach((product) =>{
      total += product.qty*product.price;
    });
    return total;
  }
  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQty={this.handleIncreaseQuantity}
          onDecreaseQty={this.handleDecreaseQuantity}
          onDeleteQty={this.handleDeleteQuantity}
        />
        <div style={{fontSize: 25,marginLeft:20, padding: 15}}>TOTAL: {this.countTotal()}</div>
      </div>
    );
  }
}

export default App;
