import React, {useState} from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({onFormSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleChange(event) {
        setSearchTerm(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            onFormSubmit(searchTerm);
        }
    }

    return(
        <Paper elevation={6} style={{ padding: '25px' }}>
            <TextField 
                fullWidth 
                label='Search...' 
                value={searchTerm}
                onChange={handleChange} 
                onKeyPress={handleKeyPress} 
            />
        </Paper>
    )
}

export default SearchBar;