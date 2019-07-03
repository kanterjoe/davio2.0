import React from 'react'
import {Row, Col, Jumbotron} from 'reactstrap'

export default props => (
    <div>
        <Row>
            <Col md={12}>
                <Jumbotron>
                    <h1>Welcome to Davio</h1>
                </Jumbotron>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                {props.children}
            </Col>
        </Row>
    </div>
);