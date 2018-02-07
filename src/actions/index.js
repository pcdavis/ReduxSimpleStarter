import axios from 'axios';
import promise from 'redux-promise';

const FETCH_POSTS='FETCH_POSTS';
const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=987654'

export function fetchPosts() {
    const request = axios.get("http://reduxblog.herokuapp.com/api/posts/?key=987654")
    return {
        type: FETCH_POSTS,
        payload: request
    };
}