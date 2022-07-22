import React from 'react';
import {Table, ListGroup, Card, Button} from 'react-bootstrap';

const CoinTable = () =>{
    return(
        <div >
        
            <Card className="shadow">
                <Card.Header className="text-center bg-dark text-white">Coin Table</Card.Header>
                <ListGroup variant="flush" className="text-center">
                    <ListGroup.Item>Coin To Tk</ListGroup.Item>
                    <ListGroup.Item>100 To 1000</ListGroup.Item>
                    <ListGroup.Item>200 To 2000</ListGroup.Item>
                    <ListGroup.Item>30 To 3000</ListGroup.Item>
                    <ListGroup.Item>40 To 4000</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default CoinTable;