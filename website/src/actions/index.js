import axios from 'axios';

export const ActionTypes = {
  NOTES: 'NOTES',
};

const ROOT_URL = (window.location.hostname === 'localhost') ? 'http://localhost:9090/api' : 'https://exampleapi-de9z.onrender.com/api';

export function fetchNotes() {
  return async (dispatch) => {
    await axios.get(`${ROOT_URL}/notes`).then((response) => {
      dispatch({
        type: ActionTypes.NOTES,
        payload: response.data,
      });
    }).catch((error) => {
      console.log('error fetches');
      console.log(error);
    });
  };
}

export function createNote(note, nav) {
  if (note.title !== '') {
    return async () => {
      const fields = {
        title: note.title, date: (new Date()).toString(),
      };
      await axios.post(`${ROOT_URL}/notes`, fields).then((response) => {
        console.log('new note success');
      }).catch((error) => {
        console.log('error new note');
        console.log(error);
      });
      nav('/');
    };
  } else {
    return { type: 'defaultStateAnything' };
  }
}

export function deleteNote(id) {
  return async (dispatch) => {
    const fields = { id };
    await axios.delete(`${ROOT_URL}/notes/${id}`, fields).then((response) => {
      dispatch({
        type: ActionTypes.NOTES,
        payload: response.data,
      });
    }).catch((error) => {
      console.log('error fetches');
      console.log(error);
    });
  };
}
