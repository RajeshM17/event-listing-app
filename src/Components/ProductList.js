import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";
import fetchData from "./fetchData";

class ProductList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      products: [],
      isToggleOn: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  async componentDidMount() {
    console.log(this.props.url);
    const products = await fetchData(this.props.url);
    // console.log(products);
    this.setState({ products: products.data.item });
  }

  render() {
    const products = this.state.products.map((product) => {
      return (
        <Col lg={3} md={6}>
          <Product
            eventname={product.eventname}
            start_time_display={product.start_time_display}
            venue={product.full_address}
            thumb_url={product.thumb_url}
            event_id={product.event_id}
            view={this.state.isToggleOn}
          />
        </Col>
      );
    });

    return (
      <Row>
        {
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "LIST VIEW" : "GRID VIEW"}
          </button>
        }
        {products}
      </Row>
    );
  }
}

export default ProductList;
// const url = "https://allevents.s3.amazonaws.com/tests/categories.json";
// const url="http://allevents.s3.amazonaws.com/tests/sports.json";
