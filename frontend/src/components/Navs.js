import React from 'react'
import {Nav, Link} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function Navs() {
     
    const history = useHistory();

    const handleSelect = (eventKey) => {
        if(eventKey == "pricePredict")
        {
            history.push("/pricePredict");
        }
        if (eventKey == "priceRange")
        {
            history.push("/priceRange");
        }
        if (eventKey == "contact") {
            history.push("/contact");
        }
        
    }

    return(
        <div>


            <Nav className="justify-content-center " activeKey="/home" >
                <Nav.Item >
                    <Nav.Link  eventKey="priceRange" onSelect={handleSelect} style={{ fontSize: "17px" }}><i class="fas fa-star"></i> PRICE RANGE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="pricePredict" onSelect={handleSelect} style={{ fontSize: "17px" }}><i class="fas fa-laptop-medical text-dark"></i> PREDICT LAPTOP PRICE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  eventKey="contact" onSelect={handleSelect} style={{ fontSize: "17px" }}><b><i class="fas fa-id-card-alt"></i> CONTACT</b></Nav.Link>
                </Nav.Item>
            </Nav>
            <p className="text-center mt-4 mb-4">A laptop Store</p>
            <hr></hr>
            
        </div>
    )
    
}

export default Navs
