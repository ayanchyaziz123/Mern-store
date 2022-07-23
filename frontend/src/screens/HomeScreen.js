import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Container, Form, ListGroup } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts, listCoupons } from '../actions/productActions'
import ProductOffer from '../components/ProductOffer'
import ProductOffer2 from '../components/ProductOffer2'
import Navs from '../components/Navs'
import Navs2 from '../components/Navs2'
import CompareProduct from '../components/CompareProduct'
import ProductCarousel from '../components/ProductCarousel'
import SearchRAM from '../components/SearchRam'
import Coupon from '../components/Coupon'
import SearchSlider from '../components/SearchSlider'
import CoinTable from '../components/CoinTable'
import SearchBrand from '../components/SearchBrand'




function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)


    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search





    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>


                <Row>
                    <Col md={12}>
                        <ProductOffer2 />
                    </Col>
                </Row>

       

            <Navs2 />
            <br></br>
            <Navs />



            <h4 className="mt-2">Latest Products</h4>
            <a href="/admin/productlist/abcd">link</a>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div className="pt-3">
                        <Row className='="p-2'>
                            <Col md={2}>
                                <h1>Hello</h1>

                            </Col>
                            <Col md={10}>


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
