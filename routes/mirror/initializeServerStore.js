const { createStore, applyMiddleware, compose } = require( 'redux' )
const createSagaMiddleware  = require(  'redux-saga')
const mirrorMiddleware  = require(  './mirror')
const reducer  = require(  './reducer')
const {}  = require(  './actionTypes')
// ...
const sagas  = require(  './sagas')

const {  } = sagas;


const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, /* preloadedState, */ 
    compose(
        applyMiddleware(mirrorMiddleware, sagaMiddleware)
    )
);

export default store;




