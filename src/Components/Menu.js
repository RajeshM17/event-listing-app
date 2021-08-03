import React, { Component } from 'react'
import {Col,Row,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
// import Home from './Home';
// import axios from 'axios';
import fetchData from './fetchData';
// import ControlledTabs from './Tabs'
const url="https://allevents.s3.amazonaws.com/tests/categories.json"
class Menu extends Component {
    
    constructor(props){
        // console.log(props);
        super(props);
      
        this.state={
            products:[]
        }
    }

    async componentDidMount(){
        const products = await fetchData(url);
        // console.log(products.data);
        this.setState({products:products.data});
    }   
    
    
    render() {
        const products = this.state.products.map((product)=>{
            return (<Col>
          
                    <Link to={`/menu/${product.category}`}>
                    <Button onClick={this.props.onClickHandler} value={product.data}>{product.category}</Button>
                    </Link>
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