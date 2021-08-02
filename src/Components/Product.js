import React from 'react'
import {Card,Button} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import './Product.css';


function Product(props) {
//   console.log(props);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>{props.eventname}</Card.Title>
            <Card.Img variant="bottom" src={props.thumb_url} width="300px"/>
            <Card.Body>
                
                <Card.Text>
                    {props.venue}
                </Card.Text>
                <Card.Title>{props.start_time_display}</Card.Title>
             
            </Card.Body>
        </Card>
    )
}

export default Product;