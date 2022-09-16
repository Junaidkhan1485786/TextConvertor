import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const AutohideExample = () => {
    const [show, setShow] = useState(false);

    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Made By junaid Khan (+91 9982274550)</strong>
                        <small className='btn btn-dark'>10 seconds ago</small>
                    </Toast.Header>
                    <Toast.Body className='btn btn-warning mx-3' >😊Welcome to My TextConverter APP😊</Toast.Body>
                </Toast>
            </Col>
            <Col xs={6}>
                <Button className='my-3 ' onClick={() => setShow(true)} style={{background:"cyan",color:"black",}}>Show Message</Button>
            </Col>
        </Row>
    );
};

export default AutohideExample;