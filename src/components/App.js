import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../apis/youtube';
import config from "../config/config";

const KEY = `${config.ApiKeyValue}`;

// NOTE: Had to move the params due to an Axios Version Bug & 400 "Required Parameter: part" Error
class App extends React.Component {
    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;
