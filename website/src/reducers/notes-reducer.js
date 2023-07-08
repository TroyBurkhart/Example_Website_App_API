import { ActionTypes } from '../actions';

const NotesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.NOTES:
      return action.payload;
    default:
      return state;
  }
};

export default NotesReducer;
