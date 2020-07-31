import axios from 'axios';
import config from "../config/config";

const KEY = `${config.ApiKeyValue}`;

export default axios.create({
    baseURL: `${config.ApiUrl}`,
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});