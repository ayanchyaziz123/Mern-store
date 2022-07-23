import {React, useState, useEffect} from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import AdminSideBar from '../admin_components/AdminSideBar';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Todolist from '../admin_components/Todolist';
import PieCharts from '../admin_components/PieCharts';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

const baseURL = "http://127.0.0.1:8000/api/products/dashboard/";






const DashboardScreen = ({history}) =>{

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const [newCustomers, setNewCustomers] = useState(0);
    const [pendingOrders, setPendingOrders] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [error, setError] = useState(false);
    const [profit, setProfit] = useState(null);

    useEffect(() => {

        if (!userInfo) {
                history.push('/login')
        }
        else{
            if(!userInfo.isAdmin)
            {
                history.push('/')
            }
            axios.get(baseURL).then(response=>{
                setNewCustomers(response.data.new_users);
                setPendingOrders(response.data.pending_orders);
                setRevenue(response.data.revenue);
                setProfit(response.data.profit);
            })
        }

    }, [history, userInfo])

    const data = profit;
    console.log("####",   data);


    const renderLineChart = (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
            <Line type="monotone" dataKey="profit" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="red" />
            <Line type="monotone" dataKey="expenses" stroke="black" />
            <Tooltip />
        </LineChart>
    );


    return(
        <div>
            <h3>Dashboard SCreen</h3>
            <Row>
                <Col md={3}>
                    <AdminSideBar/>
                </Col>
                <Col md={5}>           
                    <Card
                        bg="danger"
                        className="mb-2 text-white text-center"
                    >
                        <Card.Header className="nav-text"><i class="fas fa-money-check "></i> Revenue</Card.Header>
                        <Card.Body>
                            <Card.Title>{revenue} </Card.Title>
    
                        </Card.Body>
                    </Card>     
                    <hr></hr>
                    <div style={{marginBottom: "100px"}}>

                    </div>
                
                    <h3 className="text-danger">Past few years profit graph</h3>
                    <div>{renderLineChart}</div>
                    <div style={{ marginBottom: "100px" }}>

                    </div>
                    <Todolist/>

                </Col>
                <Col md={2}>
                    <Card
                        bg="info"
                        className="mb-2 text-white text-center"
                    >
                        <Card.Header className="nav-text"><i class="fas fa-shopping-cart"></i> Pending Orders </Card.Header>
                        <Card.Body>
                            <Card.Title>{pendingOrders} </Card.Title>
                
                        </Card.Body>
                    </Card>
                    <hr></hr>
               
                </Col>
                <Col md={2}>
                    <Card
                        bg="dark"
                        className="mb-2 text-white text-center"
                    >
                        <Card.Header className="nav-text"><i class="fas fa-users"></i> New Customers</Card.Header>
                        <Card.Body>
                            <Card.Title>{newCustomers} </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

              
            </Row>
        </div>
    )
}

export default DashboardScreen;