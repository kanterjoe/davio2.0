import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mirrorMiddleware from './mirror'
import reducer from './reducer';
import {APPLICATION} from './actionTypes'
// ...
import sagas from './sagas'

const { sceneSaga, appSaga } = sagas;


const sagaMiddleware = createSagaMiddleware()
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ 
    composeEnhancers(
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(mirrorMiddleware, sagaMiddleware)
    )
);
/* eslint-enable */
sagaMiddleware.run(sceneSaga);
sagaMiddleware.run(appSaga);


store.dispatch({type: APPLICATION.START, payload: null});
export default store;
