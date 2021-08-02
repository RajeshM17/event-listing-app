import React, { Component } from 'react'
import {Col,Row} from 'react-bootstrap';
import Home from './Home';
import axios from 'axios';
import fetchData from './fetchData';
import ControlledTabs from './Tabs'
const url="https://allevents.s3.amazonaws.com/tests/categories.json"
class Menu extends Component {
    
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }

    async componentDidMount(){
        const products = await fetchData(url);
        console.log(products.data);
        this.setState({products:products.data});
    }   
    
    
    render() {
        const products = this.state.products.map((product)=>{
            return (<Col>
                    <ControlledTabs 
                        category={product.category}
                        data={product.data}
                        />
                </Col>)
        })


        return (
            <Row>
               {products}
            </Row>
        )
    }
}

export default Menu;
 // const url = "https://allevents.s3.amazonaws.com/tests/categories.json";
  // const url="http://allevents.s3.amazonaws.com/tests/sports.json";