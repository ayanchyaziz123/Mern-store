import React, { initialState, useState, useEffect } from 'react';
import axios from 'axios';
import RangeSlider from 'react-bootstrap-range-slider';
import Loader from '../components/Loader';
import { Row, Col, Container } from 'react-bootstrap'
import Product from '../components/Product'


const baseURL = "http://127.0.0.1:8000/api/products/all/";

const PriceRangeScreen = () =>{
    const [value, setValue] = useState(100000);
    const [p, setP] = useState(initialState);
    const [element, setElement] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
        setLoading(true);
        setElement(10);
        setLoading(false);
        
    };

    useEffect(async () => {
        try {
    
            axios.get(baseURL).then((response) => {
                setP(response.data)

            });
           
          
        }
        catch (error) {
            console.log(error);
        }
    }, []);



    return (
        <Container>
        <div>
            {loading ? <Loader/>:
            <div>
                <h4 classNmae="mt-2">Search Price Range</h4>
                <h1>
        <RangeSlider
           
            max="300000"
            min="10000"
            tooltip="on"
            onChange={rangeSelector}
            size="lg"
        >
            </RangeSlider>
            </h1>
            
        <h3>Price Range (10000 to {value}) TK</h3>
                    <Row>
                        {p && p.map(product => product.price <= value ? (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ) : null)}
                    </Row>
        
        </div>
            }


       
    
        </div>
        </Container>
    );

}

export default PriceRangeScreen;