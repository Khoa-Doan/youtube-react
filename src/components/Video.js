import React, { Fragment } from 'react';

import { Paper, Typography } from '@material-ui/core';

const Video = (props) => {
    const { video } = props;

    if (!video) return (<div>Loading...</div>)

    {/* Create a string using ES6 interpolation, since we are using dynamic data */}
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder='0' style={{ height: '100%', width: '100%' }} title='Video Player' src={videoSrc} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant='h4'>{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
                <Typography variant='subtitle2'>{video.snippet.description}</Typography>
            </Paper>
        </Fragment>
    )
}

export default Video;