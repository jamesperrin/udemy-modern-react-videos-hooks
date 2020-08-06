import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import config from "../config/config";
import VideoList from './VideoList';

const KEY = `${config.ApiKeyValue}`;

// NOTE: Had to move the params due to an Axios Version Bug & 400 "Required Parameter: part" Error
class App extends React.Component {
    state = { videos: [] };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
