import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createNote } from '../actions';

function newNotes(props) {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form>
        Note:
        <input onChange={titleChange} type="text" name="title" required maxLength="20" />
        <input onClick={() => dispatch(createNote({
          title,
        }, navigate))}
          className="submit"
          type="button"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default newNotes;
