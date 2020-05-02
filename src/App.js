import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, Video, VideoList } from './components';
import youtubeAPI from './api/youtubeAPI';
{/* Don't need curly brace if it's a default export */}

class App extends React.Component {
    render() {
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            <SearchBar />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={8}>
                            <Video />
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={4}>
                            <VideoList />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;