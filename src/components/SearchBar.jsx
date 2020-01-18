import React, { Component } from 'react';

export class SearchBar extends Component {
	state = { term: '' };

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};
	onFormSumbit = e => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label>video search</label>
						<input
							value={this.state.term}
							onChange={this.onInputChange}
							type="text"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
