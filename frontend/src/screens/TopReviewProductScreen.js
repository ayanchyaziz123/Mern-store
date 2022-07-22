import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductOffer from '../components/ProductOffer'
import Navs from '../components/Navs'


function TopReviewProductScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>

            {!keyword && <ProductOffer />}
            <br></br>

            <Navs />

            <h4 className="mt-5">Latest Laptops</h4>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => product.numReviews > 0 ? (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ) : null )}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }

        </div>
    )
}

export default TopReviewProductScreen;
