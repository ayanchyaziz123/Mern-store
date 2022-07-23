import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



function ProductEditScreen({ match, history }) {

    const productId = match.params.id

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(null);
    const [tax_percentage, setText_percentage] = useState(null);
    const [countInStock, setCountInStock] = useState(null);
    const [image, setImage] = useState(null);
    const [id, setId] = useState(null);

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { error, loading, product } = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = productUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })

            history.push('/admin/productlist')
        } else {
            const flag = product &&  product._id && product._id=== productId ? 'yes' : 'no';
            console.log(typeof product._id, ' ', typeof productId)
            if (!product.name || flag === 'no') {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name);
                setDescription(product.description)
                setPrice(product.price);
                setText_percentage(product.tax_percentage);
                setCountInStock(product.countInStock);
                setId(product._id);
                setImage(product.image);
            }
        }



    }, [dispatch, product, productId, history, successUpdate])

    const submitHandler = (e) => {
        const data = {
            id: id,
            name: name,
            description: description,
            price: price,
            tax_percentage: tax_percentage,
            countInStock: countInStock
        }
        e.preventDefault()
        dispatch(updateProduct(data, product._id))
    }

    const uploadFileHandler = async (e) => {

        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('image', file)
        formData.append('product_id', id)


        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('http://localhost:4000/api/product/imageUpload', formData, config)
            setImage(data.image)
            console.log("data ", data);
           

        } catch (error) {
            
        }
    }

    return (
        <div>
            <Link to='/admin/productlist'>
                Go Back
            </Link>
            <h1>Edit Product</h1>
            <Row>
                <Col md={3}>
                <Image src={`http://localhost:4000/${image}`} width={200}
                                height={200} rounded />
                                  <Form.Group controlId='image'>
                                 <Form.File
                                    id='image-file'
                                    label='Choose File'
                                    onChange={uploadFileHandler}
                                >

                                </Form.File>
                                </Form.Group>
                </Col>
                <Col md={8}>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (

                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control

                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='description'>
                                <Form.Label>Description</Form.Label>
                                <Form.Control

                                    type='name'
                                    placeholder='Enter description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='price'>
                                <Form.Label>Price</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='countinstock'>
                                <Form.Label>Stock</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter stock'
                                    value={countInStock}
                                    onChange={(e) => setCountInStock(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId='countinstock'>
                                <Form.Label>Tax</Form.Label>
                                <Form.Control

                                    type='number'
                                    placeholder='Enter Tax'
                                    value={tax_percentage}
                                    onChange={(e) => setText_percentage(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                           

                            <Button type='submit' variant='primary'>
                                Update
                            </Button>

                        </Form>
                    )}
                    </Col>

</Row>
        </div>

    )
}

export default ProductEditScreen