import { React, useState} from 'react';
import {Row, Col} from 'react-bootstrap'

function Contact()
{
    const [contact, setContact] = useState(
        {
            f_name: "",
            l_name: "",
            a_code: "",
            tel_p: "",
            email: "",
            need_contact: "",
            c_type: "",
            message: "",

        }
    )
    

    return(
        <div className="container">
                <h1>Contact Screen</h1>
           <Row>
                <Col md={6} className="bg-dark p-4 text-white">
                    <h5 className="text-white">Our Address</h5>
                    <address>
                        121, Zindabazar<br></br>
                        Sylhet, Sylhet<br></br>
                        Bangladesh<br></br>
                        <i class="fa fa-phone"></i>: +852 1234 5678<br></br>
                        <i class="fa fa-fax"></i>: +852 8765 4321<br></br>
                        <i class="fa fa-envelope"></i>:
                        <a href="mailto:aaziz9642@gmail.com" className="text-white">aaziz9642@gmail.com</a>
                    </address>
                    <div class="btn-group" role="group">
                        <a role="button" class="btn btn-warning" href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
                        <a role="button" class="btn btn-info"><i class="fa fa-skype"></i> Skype</a>
                        <a role="button" class="btn btn-success" href="mailto:aaziz9642@gmail.com"><i class="fa fa-envelope-o"></i> Email</a>
                    </div>
                </Col>
                <Col md={5} className="bg-dark p-4 ml-5">
                    <h4 className="text-white"> Location Information</h4>
                </Col>
               
           </Row>
           <hr></hr>
           <Row>
        
                    <Col md={8} className="bg-dark p-4 mt-5">
                        <div class="form-group">
                            <label for="exampleInputEmail1" className="text-white">First Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" name="f_name" />
                        </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" className="text-white">Last Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"  name="l_name"/>
                    </div>

                    <Row>
                        <Col md={6}>
                            <div class="form-group">
                                <label for="exampleInputEmail1" className="text-white">Area Code</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter area code" name="a_code"/>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div class="form-group">
                                <label for="exampleInputEmail1" className="text-white">Telphone</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter telphone no" name="tel_p"/>
                            </div>
                        </Col>
                    </Row>

                        <div class="form-group">
                            <label for="exampleInputEmail1" className="text-white">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                            <small id="emailHelp" class="form-text text-muted text-white">We'll never share your email with anyone else.</small>
                        </div>


                        <Row>

                        <Col md={10}>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="approve" id="approve" value="" name="need_contact"/>
                                <label class="form-check-label" for="approve">
                                    <strong>May we contact you?</strong>
                                </label>

                            </div>
                        </Col>
                        <Col md={2} >

                            <select class="form-control">
                                <option value="tel">Tel.</option>
                                <option value="email">Email</option>
                            </select>
                        </Col>



                        </Row>
                   
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1" className="text-white">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                   
                  
                       
               </Col>

           </Row>
           <button className="btn btn-warning mt-4">Submit</button>
        
        </div>
    )
}

export default Contact;