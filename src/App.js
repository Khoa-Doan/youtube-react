import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, Video, VideoList } from './components';
import youtubeAPI from './api/youtubeAPI';
{/* Don't need curly brace if it's a default export */}

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        {/* async: stop the execution of the code until something is fetched */}

        const response = await youtubeAPI.get('search', { 
            params: { 
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDhVdg-1pa9rD3lxvIUloPwUIp5d14fnGk',
                q: searchTerm
            } 
        });

       this.setState({
           videos: response.data.items,
           selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    };

    componentDidMount() {
        this.handleSubmit('react mastery');
    };

    render() {
        const { selectedVideo, videos } = this.state;
        return (
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Video video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;