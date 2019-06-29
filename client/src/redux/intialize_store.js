import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer';
// ...
//import { helloSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ 
    composeEnhancers(
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(sagaMiddleware)
    )
);
/* eslint-enable */
//sagaMiddleware.run(helloSaga);


store.dispatch({type:"SCENE_CREATE", payload: {name: "asdfa"}});
export default store;
