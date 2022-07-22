import React from 'react';
import {Form, Button, Table } from 'react-bootstrap';

const Todolist = () =>{

    return(
        <div>
            <h5>To do list</h5>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>What to do</Form.Label>
                    <Form.Control type="text" size="sm" placeholder="What to do" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>deadline</Form.Label>
                    <Form.Control type="date" size="sm"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="completed" />
                </Form.Group>
                <Button size="sm" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <hr></hr>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>What to do</th>
                        <th>Deadline</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>To add some user</td>
                        <td>2020-1-10</td>
                        <td>Completed</td>
                        <td><Button size="sm" className="btn btn-warning"><i class="fas fa-edit"></i></Button> <Button className="btn btn-danger" size="sm"><i class="fas fa-trash"></i></Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>delete some user</td>
                        <td>2022-1-10</td>
                        <td>incompleted</td>
                        <td><Button size="sm" className="btn btn-warning"><i class="fas fa-edit"></i></Button> <Button className="btn btn-danger" size="sm"><i class="fas fa-trash"></i></Button></td>
                    </tr>
            
                </tbody>
            </Table>
        </div>
    )
}

export default Todolist;
