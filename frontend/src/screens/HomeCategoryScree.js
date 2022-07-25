import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';
import CheckBoxBrand from '../components/CeckBoxBrand';
import MinimumDistanceSlider from '../components/PriceRangeSlider';

const HomeCategoryScreen = ({ match }) => {
    const id = match.params.id;
    const [products, setProducts] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    var brand = ['asus', 'vivo', 'iphone'];
    var price = [10, 40];
    const baseURL = `http://localhost:4000/api/category/getFilterCategories/${id}/data?brand=${brand}&price=${price}`;
    console.log("products ", products);
    var total = products && products.review && products.review.length > 0 ? products.review.reduce((accum,item) => accum + item.rating, 0) : 0;

    useEffect(() => {
        try {
            axios.get(baseURL).then(res => {
                setProducts(res.data.products);
                setError('');
                // setSuccess(res.data.message);
            })
        }
        catch (error) {
            setSuccess('');
            setError(error.response && error.response.data.detail
                ? error.response.data.detail
                : "network error");
        }

    }, [id])

    return (
        <>
            <Row>
                <Col md={2} className="mr-1">    

                                <CheckBoxBrand/>
                                 <MinimumDistanceSlider/>
                              

                </Col>
                <Col md={9}>
                    <Row>
                
                    {
                        products && products.map((product, ind)=>{
                            return(
                                <>
                                <Col md={3} className="m-0 p-0">
                                <div className="card my-2 p-2 text-center">
            <strong className="ct">{product.review.length > 0  ? <span class="badge badge-info"><i class="fas fa-star"></i> TOP REVIEWED</span> : <br></br> }</strong>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={`http://localhost:4000/${product.image}`} className="img-fluid ps rounded mx-auto d-block"/>
            </Link>

            <Card.Body >
                <Link to={`/product/${product._id}`} >
                    <Card.Title as="div" >
                        <strong >{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div" >
                    <div className="my-3">
                        <Rating value={total/product.review.length} text={`${product.review.length} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as="h6" >
                    &#2547;{product.is_offer ?  product.price - ((product.price * product.offer_percentage)/100) : product.price}
                    <br></br><span class="text-tl">{product.is_offer ? '৳' + product.price : null}</span> {product.is_offer ? '-'+product.offer_percentage+'%' : null}
                </Card.Text>
            </Card.Body>
        </div>
                                </Col>
                                </>
                            )

                        })
                    }
                    </Row>
                    </Col>
            </Row>
        </>
    )
}


export default HomeCategoryScreen;