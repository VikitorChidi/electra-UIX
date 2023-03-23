import React, { useEffect, useState } from 'react';
import { MenuItem, TextField } from '@mui/material';

export const DropDown = ({ selectOptions, ...props }) => {
    // const [options, setOptions] = useState([]);
    // useEffect(() => {
    //     setOptions(selectOptions);
    // }, [selectOptions]);

    return (
        <TextField {...props} select variant="outlined">
            {selectOptions.map((option) => (
                <MenuItem key={option.key} value={option.key}>
                    {option.name}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default DropDown;
