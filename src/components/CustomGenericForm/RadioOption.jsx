import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export const RadioOption = ({ radioOptions, ...props }) => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        setOptions(radioOptions);
    }, [radioOptions]);

    return (
        <RadioGroup row {...props} aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            {options.map((option) => (
                <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.name} />
            ))}
        </RadioGroup>
    );
};

export default RadioOption;
