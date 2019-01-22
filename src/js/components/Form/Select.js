import React from 'react';

const Select = ({ items, handleChange, selected, empty }) => {
    if(!items || !items.length) return null;
    
    return(
        <select
            onChange={e => handleChange(e.target.value)}
            value={selected}
        >
            { empty && <option value="">{ empty }</option> }
            {items.map((i, index) => {
                let label = i,
                    value = i;

                if(typeof i === 'object') {
                    label = i.label,
                    value = i.value;
                }

                return(
                    <option value={value} key={label+index}>{ label }</option>
                );
            })}
        </select>
    );
}

export default Select;