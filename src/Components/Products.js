import React, { Component } from 'react';
import formatCurrency from '../utill';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import Zoom from 'react-reveal/Zoom';
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/productActions'


class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null,
        }
    };
    componentDidMount() {
        this.props.fetchProducts();
    }
    openModal = product =>{
        this.setState({ product });
    }
    closeModal = () =>{
        this.setState({product: null})
    }
    render() {
        const {product} = this.state;
        return (
            <div>
                <Fade bottom cascade>
                <ul className = 'products'>
                    {this.props.product.map(product => {
                      return  <li key = {product._id}>
                          <div className="product">
                              <a href= {"#" + product._id}>
                                <img onClick = {() => this.openModal(product)} src={product.image} alt= {product.title} />
                                <p>{product.title}</p>
                              </a>
                              <div className="product-price">
                                  <div>{formatCurrency(product.price)} </div>
                                  <button onClick = {() =>this.props.addToCart(product)} className="button primary">Add To Cart</button>
                              </div>
                          </div>
                        </li>
                    })}
                </ul>
                </Fade>
                {
                    product && 
                    <Modal isOpen = {true} >
                        <Zoom>
                            <button className="close-modal" onClick = {this.closeModal}>x</button>
                            <div className="product-details">
                                <img src={product.image} alt=""/>
                                <div className="product-details-description">
                                    <p>
                                        <strong>{product.title}</strong>
                                    </p>
                                    <p>
                                        {product.description}
                                    </p>
                                    <p>
                                        Available Size {" "}
                                        {product.availableSizes.map(x => (
                                            <span> {" "}
                                            <button className="button"> {x} </button>
                                            </span>
                                        ))}
                                    </p>
                                    <div className="product-price">
                                        <div> {formatCurrency(product.price)} </div>
                                        <button className = "button primary"
                                            onClick = {() => {this.props.addToCart(product);
                                            this.closeModal();
                                            }}
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </Modal>
                }
            </div>
        );
    }
}

export default connect((state) => ({products: state.products.items}), {fetchProducts})(Products);