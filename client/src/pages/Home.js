import React, {useState} from 'react';
import {CardDeck, Button, Input, Form, Label, FormGroup} from 'reactstrap';
import {SCENE} from '../redux/actionTypes'
import SceneCard from '../components/SceneCard'
import Shell from '../components/Shell'
import {connect} from 'react-redux';
/*

            */
const Home = props => {
    const [scene, setScene] = useState({name:"", isCurrent:false});

    const createScene = () => props.dispatch({type: SCENE.CREATE, payload: {...scene, Actions: []}})
    
    const updateName = event => setScene({...scene, name: event.target.value})
    const updateIsCurrent = event => {setScene({...scene, isCurrent: event.target.checked}); console.log(event.target.checked)}

    return (
        <Shell>
            <div>
                <Form>
                    <FormGroup>
                        <Input value={scene.name} onChange={updateName} name="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Input checked={scene.isCurrent} type="checkbox" onChange={updateIsCurrent} />
                        <Label>Is Current?</Label>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={createScene} >Create New Scene</Button>
                    </FormGroup>
                </Form>
            </div>
            <CardDeck>
                {props.scenes.map((scene, i) => <SceneCard {...scene} key={i}/>)}
            </CardDeck>
        </Shell>
)}


export default connect(
    state => ({
        scenes: state.Scene
    }),
    dispatch => ({ dispatch })
) (Home);