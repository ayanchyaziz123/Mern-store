import React from 'react';
import { Row, Col, Table, Button, InputGroup, FormControl } from 'react-bootstrap';
import AdminSideBar from '../admin_components/AdminSideBar';

const BrandScreen = () => {

    return (
        <div className='large-devices-margin'>
            <h3>Brand screen</h3>
            <Row>
                <Col md={3}>
                    <AdminSideBar />
                </Col>
                <Col>
                    <InputGroup className="mb-3" size="sm">
                        <FormControl
                            placeholder="Brand"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" size="sm">
                            Add
                        </Button>
                    </InputGroup>
                    <hr></hr>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Apple</td>
                                <td><Button size="sm" className="btn btn-warning"><i class="fas fa-edit"></i></Button> <Button className="btn btn-danger" size="sm"><i class="fas fa-trash"></i></Button></td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Asus</td>
                                <td><Button size="sm" className="btn btn-warning"><i class="fas fa-edit"></i></Button> <Button className="btn btn-danger" size="sm"><i class="fas fa-trash"></i></Button></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>HP</td>
                                <td><Button size="sm" className="btn btn-warning"><i class="fas fa-edit"></i></Button> <Button className="btn btn-danger" size="sm"><i class="fas fa-trash"></i></Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )
}

export default BrandScreen;