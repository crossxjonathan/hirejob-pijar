import {
    FETCH_RECRUITER_REQUEST,
    FETCH_RECRUITER_SUCCESS,
    FETCH_RECRUITER_FAILURE,
    UPDATE_RECRUITER_SUCCESS,
    UPDATE_RECRUITER_PHOTO_SUCCESS,
  } from '../actions/action.types';
  
  const initialState = {
    loading: false,
    profile: {},
    error: '',
  };
  
  const recruitersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECRUITER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_RECRUITER_SUCCESS:
        return {
          loading: false,
          profile: action.payload,
          error: '',
        };
      case FETCH_RECRUITER_FAILURE:
        return {
          loading: false,
          profile: {},
          error: action.payload,
        };
      case UPDATE_RECRUITER_SUCCESS:
        return {
          loading: false,
          profile: action.payload,
          error: '',
        };
      case UPDATE_RECRUITER_PHOTO_SUCCESS:
        return {
          loading: false,
          profile: action.payload,
          error: '',
        };
      default:
        return state;
    }
  };
  
  export default recruitersReducer;
  