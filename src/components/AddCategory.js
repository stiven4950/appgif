import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(cats => [inputValue, ...cats]);

        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}

export default AddCategory;