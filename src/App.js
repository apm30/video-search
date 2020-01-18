import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import youtube from './api/youtube';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('buildings');
	}
	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: { q: term }
		});
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				{this.state.videos.length} videos found
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetails video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
