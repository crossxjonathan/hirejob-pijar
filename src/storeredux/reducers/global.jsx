import {
    GLOBAL_SUCCESS,
    GLOBAL_ERROR,
    GLOBAL_CLEAR
} from "../types";

export default function globalReducer(state = {}, action) {
    switch (action.type) {
        case GLOBAL_SUCCESS:
            return {
                ...state,
                success: true,
                message: action.payload
            }
        case GLOBAL_ERROR:
            return {
                ...state,
                success: false,
                message: action.payload
            }
        case GLOBAL_CLEAR:
            return {}
        default:
            return state;
    }
}