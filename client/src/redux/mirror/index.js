import LISTENED_ACTIONS from './LISTENED_ACTIONS'
import axios from 'axios';
import uuid from 'uuid';
const generate_idempotency_id = uuid.v4;
const mirror_middleware = store => next => async action => {
    // console.log('dispatching', action)
    // let result = next(action)
    // console.log('next state', store.getState())
    const {type, payload, id} = action;
    const isListened = LISTENED_ACTIONS.includes(type)
    if (isListened) {
        const idempotency_id = id || generate_idempotency_id();
        console.log("Got one of the actions:  ", type, id)
        
        next({type: "MIRROR__LOAD_ACTION", payload, idempotency_id})

        try {
            const result = await axios.post(`/api/mirror`, {type, payload, idempotency_id})
            next({type: "MIRROR__RECEIVE_ACTION_SUCCESS", payload, idempotency_id})
        }   
        catch (error) {
            next({type: "MIRROR__RECEIVE_ACTION_FAILURE", payload, idempotency_id, error})

        }
        
        
        //return next(action);

    }
    return next(action)
  }


export default mirror_middleware;