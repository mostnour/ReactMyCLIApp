import axios from 'axios';

const baseURL = 'https://newsapi.org/v2';
const apiKey = '8fcc45ea4d8b4cddb5d8a0eec119e942';

export function get (url: string) {
    const myUrl = `${baseURL}${url}&apiKey=${apiKey}`;
    return axios.get( myUrl );
}
