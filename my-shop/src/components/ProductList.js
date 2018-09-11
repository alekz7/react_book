import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    let productComponents = [];
    for (let product of this.props.items) {
      productComponents.push(<Product item={product} hS={this.props.handleSelect}/>);
    }
    return <ul>{productComponents}</ul>;
  }
}
export default ProductList;
