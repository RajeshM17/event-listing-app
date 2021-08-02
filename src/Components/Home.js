import React from 'react'
import {Card,Button} from 'react-bootstrap';
// import {Link} from 'react-router-dom';
// import './Product.css';


function Home(props) {
  console.log(props);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>{props.category}</Card.Title>
            
        </Card>
    )
}

export default Home;