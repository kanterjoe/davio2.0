import {SCENE} from '../actionTypes'

const defaultScenes = [];

const ScenesReducer = (state = defaultScenes, action) => {
    const { payload, type } = action;
    switch (type) {
        case SCENE.CREATE:
            return [
                ...state,
                payload
            ];
        case SCENE.DELETE:
            return state.filter(scene => scene.id !== payload.id);
        case SCENE.UPDATE:
            return state.map( scene => scene.id === payload.id? payload : scene);
        case SCENE.MAKE_CURRENT:
            const newCurrentId = payload;
            return state.map(scene => scene.id === newCurrentId?
                {...scene, isCurrent: true}
                : {...scene, isCurrent: false});
        default:
            return state
    }
}

export default ScenesReducer