import * as global from '../global/data.global';
import axios from 'axios';


export const loginFunction = (data) => {
    return async (dispatch) => {
        try {
            const request = await axios.post('/api/auth/login', data);
            // if (request.data.success) {
                
            // }
        } catch (error) {
            dispatch(global.globalError(error.response.data.message))
        }
    }
}

// export const getWorker = () => (dispatch) => {
    
// }