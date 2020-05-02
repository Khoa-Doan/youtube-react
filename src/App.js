import React from 'react';

import { Grid } from '@material-ui/core';

{/* Don't need curly brace if it's a default export */}
import youtubeAPI from './api/youtubeAPI';

class App extends React.Component {
    render() {
        return (
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                        <Grid item xs={12}>
                            {/* SEARCH BAR */}
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={8}>
                            {/* VIDEO */}
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;