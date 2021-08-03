import React,{useState} from 'react'
import {Card,Button, ListGroup} from 'react-bootstrap';



function Product(props) {
//   console.log(props);

    return (
        <>
        {
        
       props.view?
        <Card style={{ width: '18rem' }}>
            <Card.Title>{props.eventname}</Card.Title>
            <Card.Img variant="bottom" src={props.thumb_url} width="300px"/>
            <Card.Body>
                <Card.Text>
                    {props.venue}
                </Card.Text>
                <Card.Title>{props.start_time_display}</Card.Title>
             
            </Card.Body>
        </Card>:
        <ListGroup>
            <ListGroup.Item variant="primary">{props.eventname}</ListGroup.Item>
        </ListGroup>
    }
            </>
    )
}

export default Product;