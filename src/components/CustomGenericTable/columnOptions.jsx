import React from 'react';
import Chip from '@mui/material/Chip';
import { enumOptions } from '../../utils/enums/enumOptions';
import Typography from '@mui/material/Typography';
import { CheckCircleTwoTone, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

export const getEnumBody = (value, enumType) => {
    // return <CheckCircleFilled style={{ color: 'green' }} />;
    return <Chip size="small" label={value} color={enumOptions[enumType].filter((x) => x.value === value)[0]?.class} />;
};

export const getBooleanBody = (value) => {
    if (value) {
        return <CheckCircleFilled style={{ color: 'green' }} />;
    } else {
        return <CloseCircleFilled style={{ color: 'red' }} />;
    }
};

export const getLongTextBody = (values) => {
    return (
        <Typography style={{ textOverflow: 'ellipsis', maxWidth: 400, overflow: 'hidden', whiteSpace: 'noWrap' }} noWrap display="block">
            {values}
        </Typography>
    );
};

export const getDefaultBody = (value) => {
    return value;
};

export default {
    getEnumBody,
    getDefaultBody,
    getBooleanBody
};
