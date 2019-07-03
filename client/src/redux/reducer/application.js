import {APPLICATION} from '../actionTypes'

const defaultApplication = {
    initialized: false,
    loaded: false,
    userLoggedIn: false,
    currentPage: ""
};

const ApplicationReducer = (state = defaultApplication, action) => {
    const { payload, type } = action;
    switch (type) {
        case APPLICATION.INIT: 
            return {
                ...state,
                initialized: true
            }
        case APPLICATION.LOAD: 
            return {
                ...state,
                loaded: true
            }
        case APPLICATION.LOGIN: 
            return {
                ...state,
                userLoggedIn: true
            }
        case APPLICATION.LOGOUT: 
            return {
                ...state,
                userLoggedIn: false
            }
        case APPLICATION.CHANGE_PAGE: 
            return {
                ...state,
                currentPage: payload
            }
        default:
            return state
    }
}

export default ApplicationReducer