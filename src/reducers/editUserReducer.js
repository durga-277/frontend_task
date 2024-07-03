import { SET_EDIT_USER, CLEAR_EDIT_USER } from '../actions/editUserActions';

const initialState = {
  id: null,
  name: '',
  email: '',
};

const editUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDIT_USER:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    case CLEAR_EDIT_USER:
      return {
        ...state,
        id: null,
        name: '',
        email: '',
      };
    default:
      return state;
  }
};

export default editUserReducer;
