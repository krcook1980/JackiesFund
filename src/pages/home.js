import React from 'react';
import Nav from '../components/nav';
import { Container, Row, Col } from 'react-bootstrap';

function Home(){

    return(
    <Container>
        <Row>
            <Col md="12">
                <Nav />
            </Col>
        </Row>
        <Row>
            <Col md="9">
                
            </Col>
        </Row>

    </Container>

    )
}

export default Home;