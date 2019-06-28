import React, { useState, useEffect }from 'react';
import {Row, Col, Jumbotron, Card, CardBody, CardTitle, CardDeck, CardText, Table} from 'reactstrap';
import axios from 'axios';
import SceneCard from '../components/SceneCard'

const Home = props => {
    const [state, setState] = useState({
        scenes: []
    })
    useEffect(() => {
        (async () => {
            const {data: scenes} = await axios.get('/api/scene');
        
            setState({scenes});
        })();
    }, []);
    return (
    <>
    <Row>
        <Col md={12}>
            <Jumbotron>
                <h1>Welcome to Davio</h1>
            </Jumbotron>
        </Col>
    </Row>
    <Row>
        <Col md={12}>
            <CardDeck>
                {state.scenes.map(scene => <SceneCard {...scene} key={scene.id}/>)}
            </CardDeck>
        </Col>
    </Row>
    </>
)}


export default Home;