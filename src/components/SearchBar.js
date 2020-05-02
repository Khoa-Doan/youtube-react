import React from 'react';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value,
        })
    }

    handleSubmit = (event) => {
        {/* Destructuring */}
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        {/* Send search term to App.js to handle */}
        onFormSubmit(searchTerm);

        {/* Prevent the page from refreshing */}
        event.preventDefault();
    }

    render() {
        return(
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label='Search...' onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;