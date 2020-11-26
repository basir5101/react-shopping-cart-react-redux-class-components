import React, { Component } from 'react';
import formatCurrency from '../utill';


class Products extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <ul className = 'products'>
                    {this.props.product.map(product => {
                      return  <li key = {product._id}>
                          <div className="product">
                              <a href= {"#" + product._id}>
                                <img src={product.image} alt= {product.title} />
                                <p>{product.title}</p>
                              </a>
                              <div className="product-price">
                                  <div>{formatCurrency(product.price)} </div>
                                  <button className="button primary">Add To Cart</button>
                              </div>
                          </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Products;