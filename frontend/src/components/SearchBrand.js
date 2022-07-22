import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBrand() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    useEffect(() => {
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        }

    }, [keyword]);

    const handleChange = (event) => {
        setKeyword(event.target.value + 'RAM')

    }


    return (


        <Form.Group as={Row} className="mb-3">
            <h5>Brand</h5>

            <Col sm={10} >


                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        name="terms"
                        label="Apple"
                        id="validationFormik0"
                        value="8"
                        defaultChecked={keyword == null ? true : false}
                        onChange={handleChange}
                    />
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        name="terms"
                        label="Asus"
                        id="validationFormik0"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        name="terms"
                        label="Hp"
                        id="validationFormik0"
                    />
                </Form.Group>
                <Form.Group className="mb-3 ">
                    <Form.Check
                        required
                        name="terms"
                        label="Lenovo"
                        id="validationFormik1"
                    />
                </Form.Group>

            </Col>
        </Form.Group>


    )
}

export default SearchBrand;
