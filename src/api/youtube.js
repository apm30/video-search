import axios from 'axios';

const KEY = 'AIzaSyAEPj16U7WkAikiy0wyFg0vZIbXZCaeDpE';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: `${KEY}`
	}
});
