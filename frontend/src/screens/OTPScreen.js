import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

function OTPScreen({ location, history }) {

    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (localStorage.getItem('data_tkn'))
        {
            setEmail(localStorage.getItem('data_tkn'));
        }
        if (userInfo) {
            localStorage.removeItem('data_tkn');
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
            dispatch(register(otp, email))
    }

    return (

        <FormContainer>
            <div className="card p-3">
                <h1>Otp</h1>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='otp'>
                        <Form.Label>Otp</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='Enter otp'
                            onChange={(e) => setOtp(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary' size="sm">
                        Submit
                    </Button>

                </Form>

                <Row className='py-3'>
                    <Col>
                        Have an Account? <Link
                            to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                            Sign In
                        </Link>
                    </Col>
                </Row>
            </div>
        </FormContainer >

    )
}

export default OTPScreen;
