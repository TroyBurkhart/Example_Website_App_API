import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchNotes } from '../actions';

function reload(dispatch) {
  dispatch(fetchNotes());
}

// navbar checks the page path to make the correct buttons appear
// utilizes framer motion buttons found at the link below
// https://github.com/framer/motion
function NavBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function navigatePage() {
    if (location.pathname === '/') {
      navigate('/notes/new');
    } else {
      navigate('/');
    }
  }

  if (location.pathname === '/') {
    return (
      <div id="motion">
        <div className="motionDiv">
          <motion.div onClick={() => reload(dispatch)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><p className="button">Refresh</p></motion.div>
        </div>
        <div className="motionDiv rightButton">
          <motion.div onClick={navigatePage} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><p className="button">New Note</p></motion.div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="motion">
        <div className="motionDiv">
          <motion.div onClick={() => reload(dispatch)} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><p className="button">Refresh</p></motion.div>
        </div>
        <div className="motionDiv rightButton">
          <motion.div onClick={navigatePage} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><p className="button">Back to table</p></motion.div>
        </div>
      </div>
    );
  }
}
export default NavBar;
