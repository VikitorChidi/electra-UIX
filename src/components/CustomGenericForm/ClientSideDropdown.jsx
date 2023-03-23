import {MenuItem, TextField} from "@mui/material";
import React from "react";

const ClientSideDropdown = ({enumType, ...props}) => {
    return (
        <TextField {...props} select variant="outlined">
            {enumType.map(((val) => (
                <MenuItem key={val.key} value={val.name}>
                    {val.name}
                </MenuItem>
            )))}
        </TextField>
    )
}
export default ClientSideDropdown
