import React from 'react';

const Select = ({ items, handleChange, selected, empty }) => {
    if(!items || !items.length) return null;
    
    return(
        <select
            onChange={e => handleChange(e.target.value)}
            value={selected}
        >
            {empty && <option value="">{empty}</option>}
            {items.map((i, index) => (
                <option value={i} key={i+index}>{i}</option>
            ))}
        </select>
    );
}

export default Select;