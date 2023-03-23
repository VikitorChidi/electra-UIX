import React from 'react';
import { Grid } from '@mui/material';
import { getNestedProperty } from 'utils/format';
import Typography from '@mui/material/Typography';

const FormikField = ({
    name,
    formikBag,
    label,
    customLabel,
    Component,
    defaultValue,
    select,
    required,
    sm = 12,
    md = 12,
    noPlaceholder,
    className,
    rawFieldError,
    actions,
    fullWidth = true,
    labelAsPlaceholder,
    ...props
}) => {
    const isTouched = () => getNestedProperty(formikBag?.touched, name);
    const getError = () => getNestedProperty(formikBag?.errors, name);
    const getValue = () => getNestedProperty(formikBag?.values, name);
    const isError = () => Boolean((formikBag?.submitCount > 0 || isTouched()) && getError());
    const getFieldError = () => {
        if (isError()) {
            const fieldErr = getError();
            if (rawFieldError) return fieldErr;
            if (typeof fieldErr === 'string') return fieldErr;
            if (Array.isArray(fieldErr)) return fieldErr.join(',');
            if (typeof fieldErr === 'object') return Object.values(fieldErr).join(', ');
        }
    };
    const component = (
        <Component
            name={name}
            label={labelAsPlaceholder ? '' : select ? '' : label}
            placeholder={noPlaceholder ? '' : labelAsPlaceholder ? label : ''}
            value={getValue() ?? defaultValue ?? ''}
            onChange={formikBag?.handleChange}
            onBlur={formikBag?.handleBlur}
            touched={isTouched()}
            errors={getFieldError()}
            error={isError()}
            defaultValue={defaultValue}
            helperText={getFieldError()}
            select={select}
            fullWidth={fullWidth}
            required={required}
            {...props}
        />
    );
    return (
        <Grid sm={sm} xs={sm} md={md} item className={`mb-4 ${className ?? ''}`}>
            <>
                {customLabel ? (
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography display="block" sx={{ paddingLeft: '10px', paddingTop: '10px' }} gutterBottom>
                                {label}
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            {component}
                        </Grid>
                    </Grid>
                ) : (
                    component
                )}
            </>
        </Grid>
    );
};

export default FormikField;
