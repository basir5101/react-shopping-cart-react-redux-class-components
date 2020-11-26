import React, { Component } from 'react';

class Filter extends Component {
    render() {
        return (
            <div className = 'filter'>
                <div className="filter-result">
                {this.props.count} products
                </div>
                <div className="filter-sort">
                    Order {" "}
                    <select value = {this.props.sort} onChange = {this.props.sortProducts}>
                        <option value="">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>
                <div className="filter-size">
                Filter {" "}
                <select value = {this.props.size} onChange = {this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="V">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                </div>
            </div>
        );
    }
}

export default Filter;