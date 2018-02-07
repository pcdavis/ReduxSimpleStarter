import axios from 'axios';
import promise from 'redux-promise';

const FETCH_POSTS='FETCH_POSTS';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=987654';

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts${API_KEY}`)
    return {
        type: FETCH_POSTS,
        payload: request
    };
}