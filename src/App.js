import React from 'react';
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
import Filter from './Components/Filter';
import Products from './Components/Products';
import data from './data.json';
import store from './store';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    }
  };

  creatOrder = order =>{
    alert('need to save order for ' + order.name)
  }
  removeFromCart = product =>{
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter (x => x._id !== product._id)
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter(x => x._id !== product._id)));

  }
  addToCart = product =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item =>{
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    })
    if(!alreadyInCart){
      cartItems.push({...product, count: 1})
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  
  sortProducts = (event) => {
    console.log(event.target.value)
    const sort = event.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
      .slice()
      .sort((a, b) =>
        sort === "lowest"
        ? a.price > b.price 
        ? 1
        : -1
        : sort === "highest" 
        ? a.price < b.price 
        ? 1
        : -1
        : a._id < b._id 
        ? 1
        : -1
    ),
  }));
  };
 
  filterProducts = (event) =>{
    console.log(event.target.value)
    if(event.target.value === ""){
      this.setState({size:event.target.value , products: data.products})
    } else{
        this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      })
    }
    
  }
    render(){
    return (
      <Provider store = {store}>
      <div>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Card</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter count = {this.state.products.length} 
                size = {this.state.size}
                sort = {this.state.sort}
                filterProducts = {this.filterProducts}
                sortProducts = {this.sortProducts}
                />
                <Products addToCart = {this.addToCart} product = {this.state.products} />
              </div>
              <div className="sidebar">
                <Cart creatOrder = {this.creatOrder} removeFromCart = {this.removeFromCart} cartItems = {this.state.cartItems} />
              </div>
            </div>
          </main>
          <footer>
            All right reserve
          </footer>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
