const   LOAD_ACTION             = "MIRROR__LOAD_ACTION",
        RECEIVE_ACTION_SUCCESS  = "MIRROR__RECEIVE_ACTION_SUCCESS",
        RECEIVE_ACTION_FAILURE  = "MIRROR__RECEIVE_ACTION_FAILURE";


const mirrorInitialState = {
    pending_requests: [],
    inflight_requests: [],
    successful_requests: [],
    failed_requests: [],
}

const MirrorReducer = (state = mirrorInitialState, action) => {
    const { payload, type, idempotency_id } = action;

    //remove the pending requests, might be useful later
    const pending_requests = state.pending_requests.filter(request => request.idempotency_id !== idempotency_id);
    
    switch (type) {
        case LOAD_ACTION:
            return {
                ...state,
                pending_requests: [...state.pending_requests, action]
            }
        case RECEIVE_ACTION_SUCCESS:
            return {
                ...state,
                pending_requests,
                successful_requests: [...state.successful_requests, action]
            }
        case RECEIVE_ACTION_FAILURE:
            return {
                ...state,
                pending_requests,
                failed_requests: [...state.failed_requests, action]
            }

        default:
            return state
    }
}

export default MirrorReducer
