import axios from 'axios';
import { React, useState, useEffect} from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

const baseUrl = "http://127.0.0.1:8000/api/users/resetPassword/";

const ResetPassword = ({location, history}) =>{

    const [success, setSuccess] = useState(3);
    const [email, setEmail] = useState(null);
    console.log("success : ", success);

    useEffect(() => {
        if(success != 3 && success == 1)
        {
            history.push('/otp_screen');
        }    
    }, [success])

    const form_handeler = (e) =>{
        e.preventDefault();

        if(email)
        {
            axios.post(baseUrl, {email}).then(response => {
                setEmail(response.data.email);
                setSuccess(response.data.result)
              //  localStorage.setItem('reset_email', response.data);

            })

        }

    }





    return(
        <div className="large-devices-margin">
          
                <Row>
                    <Col sm={4}>
                    </Col>
                    <Col sm={4}>
                        <Form onSubmit={form_handeler}>
                        <h3>Reset Password</h3>
                        {success == 3 ? null : <h5>This email is not registerd</h5>}
                          <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            size="sm"
                            type='email'
                            placeholder='Enter Email'
                            onChange={(e)=> setEmail(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button type="submit" size="sm" className="btn-block">Submit</Button>
                    </Form>

                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
        

        </div>
    )
}
export default ResetPassword;