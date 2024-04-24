import {
    GLOBAL_SUCCESS,
    GLOBAL_ERROR,
    GLOBAL_CLEAR
} from '../../types';

export const globalSuccess = (message) => ({
    type: GLOBAL_SUCCESS,
    payload: message
})

export const globalError = (message) => ({
    type: GLOBAL_ERROR,
    payload: message
})

export const globalClear = () => {
    return (dispatch) => {
        dispatch({
            type: GLOBAL_CLEAR
        })
    }
}