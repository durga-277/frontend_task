// Action Types
export const SET_EDIT_USER = 'SET_EDIT_USER';
export const CLEAR_EDIT_USER = 'CLEAR_EDIT_USER';

// Action Creators
export const setEditUser = (user) => ({
  type: SET_EDIT_USER,
  payload: user,
});

export const clearEditUser = () => ({
  type: CLEAR_EDIT_USER,
});
