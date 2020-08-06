import axios from 'axios';
import config from "../config/config";

export default axios.create({
    baseURL: `${config.ApiUrl}`
});

// NOTE: Had to move the params due to a Axios Version Bug & 400 "Required Parameter: part" Error
// export default axios.create({
//     baseURL: `${config.ApiUrl}`,
//     params: {
//         part: 'snippet',
//         type: 'video',
//         maxResults: 5,
//         key: KEY
//     }
// });