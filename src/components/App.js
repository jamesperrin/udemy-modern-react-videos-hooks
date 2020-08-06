import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import config from '../config/config';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = `${config.ApiKeyValue}`;

// NOTE: Had to move the params due to an Axios Version Bug & 400 "Required Parameter: part" Error
class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: KEY,
                q: term,
            },
        });

        this.setState({ videos: response.data.items });
    };

    onVideoSelect = (video) => {
        console.log('From the app!', video);
        this.setState({ selectedVideo: video });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
