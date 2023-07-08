import { Router } from 'express';
import axios from 'axios';
import * as Notes from './controllers/noteController';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our blog api!' });
});

// get notes
router.route('/notes').get(async (req, res) => {
  try {
    const result = await Notes.getNotes();
    return res.json(result);
  } catch (error) {
    return res.status(422).json({ error: error.message });
  }
});

// create note
router.route('/notes').post(async (req, res) => {
  const noteInfo = req.body;
  try {
    const result = await Notes.createNote(noteInfo);
    return res.json(result);
  } catch (error) {
    return res.status(422).json({ error: error.message });
  }
});

// delete a note
router.route('/notes/:id').delete(async (req, res) => {
  const noteInfo = req.params.id;
  console.log(noteInfo);
  try {
    const result = await Notes.deleteNote(noteInfo);
    return res.json(result);
  } catch (error) {
    return res.status(422).json({ error: error.message });
  }
});

router.route('/youtube').get(async (req, res) => {
  const term = req.query.searchTerm;
  const API_URL = 'https://www.googleapis.com/youtube/v3/search';
  const YOUTUBE_API_KEY = process.env.YOUTUBE_KEY || '';
  const params = {
    maxResults: 15,
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: term,
    type: 'video',
  };

  try {
    const response = await axios.get(API_URL, { params });
    return res.json(response.data.items);
  } catch (error) {
    console.log(`youtube api error: ${error}`);
    throw error;
  }
});

export default router;
