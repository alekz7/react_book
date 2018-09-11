import React, { Component } from 'react';
import './Catalogo.css';
import ProductList from './ProductList';
import jsonData from '../products.json';

class Catalogo extends Component{
  constructor(){
    super();
    this.state = {products : []};
    // fetch("products.json")
    //   .then(response=>response.json())
    //   .then(json=>{this.setState({products:json})})
    //   .catch(error=>console.log(error));
    // this.setState({products:jsonData})
  }
  select(productCode){
    console.log(this.state.products);
    // let productList = this.state.products.map(function(p){
    //   if (p.code === productCode){
    //     p.selected = (p.selected);
    //   }
    //   return p;
    // });
    // this.setState({products:productList});
  }
  componentWillMount(){
    this.setState({products:jsonData});
  }
  render(){
    return <div>
    <h1>Hola soy un Catalogo</h1>
    <ProductList items={this.state.products} handleSelect={this.select}/>
    </div>
  }
  componentDidMount(){
  }
}

export default Catalogo;
