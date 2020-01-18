import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<SearchBar />
			</div>
		);
	}
}

export default App;
