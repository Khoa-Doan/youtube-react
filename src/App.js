import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, Video, VideoList } from './components';
import youtubeAPI from './api/youtubeAPI';
{/* Don't need curly brace if it's a default export */}

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    async function handleSubmit(searchTerm) {
        {/* async: stop the execution of the code until something is fetched */}

        const response = await youtubeAPI.get('search', { 
            params: { 
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyDhVdg-1pa9rD3lxvIUloPwUIp5d14fnGk',
                q: searchTerm
            } 
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    useEffect(() => {
        handleSubmit('react mastery');
    }, selectedVideo);

    return (
        <Grid justify="center" container spacing={10}>
            <Grid item xs={12}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={handleSubmit}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Video video={selectedVideo}/>
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App;