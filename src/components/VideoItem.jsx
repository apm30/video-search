import React from 'react';

function VideoItem({ video }) {
	return <div>{video.snippet.title}</div>;
}

export default VideoItem;
