import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image, Card } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listOfferProducts } from '../actions/productActions'

function ProductOffer() {
    const dispatch = useDispatch()

    const productOfferRated = useSelector(state => state.productOfferRated)
    const { error, loading, products } = productOfferRated

    useEffect(() => {
        dispatch(listOfferProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (  
               
                <Carousel pause='hover' className='bg-primary mt-4'>
                    {products.map(product => (
                        
                        <Carousel.Item key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <Image src={product.image} alt={product.name} fluid/>
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{product.name} real price (${product.price}) <br></br>offering price  ({product.offer_percentage}%) (${(product.price - (product.price * product.offer_percentage) / 100)}) </h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                       
                    ))}
                </Carousel>
            )

    )
}

export default ProductOffer
