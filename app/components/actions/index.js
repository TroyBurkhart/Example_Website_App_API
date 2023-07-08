import axios from 'axios';

export const ActionTypes = {
  NOTES: 'NOTES',
};

const ROOT_URL = 'https://exampleapi-de9z.onrender.com/api';
// const ROOT_URL = 'http://localhost:9090/api';

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

export function createNote(note) {
  if (note.title !== '') {
    return async (dispatch) => {
      const fields = {
        title: note.title, date: (new Date()).toString(),
      };
      await axios.post(`${ROOT_URL}/notes`, fields).then(() => {
        dispatch(fetchNotes());
      }).catch((error) => {
        console.log('error new note');
        console.log(error);
      });
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

export async function youtubeSearch(term) {
  const params = {
    searchTerm: term,
  };
  const response = await axios.get(`${ROOT_URL}/youtube`, { params });
  return response.data;
}
