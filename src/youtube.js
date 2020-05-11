import axios from 'axios';

const KEY =['AIzaSyD5uHFWghTOvQUhRm28HjXyfnQEe-_S5ts'];

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})