import {React, useState} from 'react';
import {Row, Col, Table, Button, Modal} from 'react-bootstrap';
import AdminSideBar from '../admin_components/AdminSideBar';

const AdminContactScreen = () => {

    const [smShow, setSmShow] = useState(false);

    return(
        <div className='large-devices-margin'>
            <h3>Contact screen</h3>
            <Row>
                <Col md={3}>
                    <AdminSideBar />
                </Col>
                <Col>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Message</th>
                                <th>Status(reply)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>aadmin@.com</td>
                                <td>Use size="sm" to make tables compact by cutting cell padding in half.</td>
                                <td>yes</td>
                                <td> <Button  size="sm" onClick={() => setSmShow(true)}>Reply</Button>{' '}</td>

                                <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-sm">
                                            Reply
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>...</Modal.Body>
                                </Modal>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton@gmail.com</td>
                                <td>abc Use size="sm" to make tables compact by cutting cell padding in half.</td>
                                <td>no</td>
                                <td><Button varint="warning" size="sm">Reply</Button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Ajx Aacob</td>
                                <td>Ajx@mail.com</td>
                                <td>Ucompact by cutting cell padding in half.</td>
                                <td>no</td>
                                <td><Button varint="warning" size="sm">Reply</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>    
        </div>
    )
}

export default AdminContactScreen;