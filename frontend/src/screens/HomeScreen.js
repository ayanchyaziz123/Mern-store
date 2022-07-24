import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Form, ListGroup } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductOffer2 from '../components/ProductOffer2'
import Navs from '../components/Navs'
import Navs2 from '../components/Navs2'
import Category from '../components/Category'





function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)


    const { error, loading, products, categories, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>


            <Row>
                <Col md={12}>
                    <ProductOffer2 products={products}/>
                </Col>
                <Col md={12}>
                    <Category categories={categories} />
                </Col>
            </Row>



            <h5 className="mt-5 mb-3 text-center">latest product for you</h5>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div className="pt-3">
                        <Row className='="p-2'>
                            {/* <Col md={2}>
                                <Form.Check
                                    type="checkbox"
                                    id='default-checkbox'
                                    label='top review dresses'
                                    size="lg"
                                />
                                <Form.Check
                                    type="checkbox"
                                    id='default-checkbox'
                                    label='latest'
                                />
                                   <Form.Check
                                    type="checkbox"
                                    id='default-checkbox'
                                    label='top review dresses'
                                />
                                <Form.Check
                                    type="checkbox"
                                    id='default-checkbox'
                                    label='latest'
                                />
                                   <Form.Check
                                    type="checkbox"
                                    id='default-checkbox'
                                    label='top review dresses'
                                />
                                <Form.Check
                                    type="checkbox"
                                    id='default-checkbox'
                                    label='latest'
                                />

                            </Col> */}
                            <Col md={12}>


                                <Row>

                                    {products.map(product => (
                                        <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                                            <Product product={product} />
                                        </Col>
                                    ))}
                                </Row>
                                <Paginate page={page} pages={pages} keyword={keyword} />
                            </Col>
                        </Row>

                    </div>
            }

        </div>

    )
}

export default HomeScreen
