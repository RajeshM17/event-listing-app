import React, { Component } from 'react'
import {Col,Row} from 'react-bootstrap';
import Product from './Product';
import axios from 'axios';
import fetchData from './fetchData';

class ProductList extends Component {
    
    constructor(props){
        super(props);
        this.state={
            products:[],
     
        }
       
    }

    async componentDidMount(){
        console.log(this.props.url);
        const products = await fetchData(this.props.url);
        // console.log(products);
        this.setState({products:products.data.item});
    }   
    
    
    render() {
      
      
        const products = this.state.products.map((product)=>{
            return (<Col lg={3} md={6}>
                    <Product 
                        eventname={product.eventname}
                        start_time_display={product.start_time_display}
                        venue={product.full_address}
                        thumb_url={product.thumb_url}
                        event_id={product.event_id}
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

export default ProductList;
 // const url = "https://allevents.s3.amazonaws.com/tests/categories.json";
  // const url="http://allevents.s3.amazonaws.com/tests/sports.json";