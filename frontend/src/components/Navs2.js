import React, { useState } from 'react'
import { Button, Form, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Navs2 = () =>{

    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }




    return(
        <>
        
            <h5 className="text-center mt-2 mb-2">Top Brand Clothes</h5>

            <p className="text-center mt-1 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Nav className="justify-content-center">
                <Nav.Item>
                        <Form onSubmit={submitHandler} inline>
                            <Button
                                type='submit'
                                onClick={() => setKeyword('linux')}
                            >
                                <div className="bg-info p-3 br"  >
                                    <div className="text-center nav-text" ><i class="fab fa-critical-role"></i></div>
                                    <div className="text-center">Rolex</div>
                                </div>
                                
                            </Button>
                        </Form>
                </Nav.Item>


                <Nav.Item>
                    <Form onSubmit={submitHandler} inline>
                        <Button
                            type='submit'
                            onClick={() => setKeyword('apple')}
                        >
                            <div className="bg-info p-3 br" >
                                <div className="text-center nav-text" ><i class="fab fa-bandcamp"></i></div>
                                <div className="text-center">Balenciaga</div>
                            </div>
                        </Button>
                    </Form>
                </Nav.Item>
               
                        
                        
                        
                <Nav.Item>
                    <Form onSubmit={submitHandler} inline>
                        <Button
                            type='submit'
                            onClick={() => setKeyword('android')}
                        >
                            <div className="bg-info p-3 br"  >
                                <div className="text-center nav-text" ><i class="fab fa-themeco"></i></div>
                                <div className="text-center">Thom Browne</div>
                            </div>
                        </Button>
                    </Form>
                </Nav.Item>

                <Nav.Item>
                    <Form onSubmit={submitHandler} inline>
                        <Button
                            type='submit'
                            onClick={() => setKeyword('windows')}
                        >
                            <div className="bg-info p-3 br"  >
                                <div className="text-center nav-text" ><i class="fas fa-pastafarianism"></i></div>
                                <div className="text-center">Armani</div>
                            </div>

                        </Button>
                    </Form>
                </Nav.Item>

                        
            
            </Nav>
   
           
        </>
    )
}

export default Navs2;