import { useEffect, useState } from 'react';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Grid, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import AnimateButton from '../../../components/@extended/AnimateButton';
import { RegisterAs } from '../../../utils/enums';
import * as _ from 'lodash';
import useAuth from '../../../hook/useAuth';
import usePasswordToggle from '../../../hook/usePasswordToggle';
import PhoneNumberInput from '../../../components/PhoneNumberInput';

const AuthRegister = () => {
    const [initialValues, setInitialValues] = useState({});
    const [level, setLevel] = useState();
    const [passwordInputType, toggleIcon] = usePasswordToggle();
    const { register } = useAuth();

    const handleRegistrationSubmission = async (values, formikBag) => {
        console.log('values >>> ', values);
        formikBag.setSubmitting(true);
        try {
            await register(values);
            formikBag.setSubmitting(false);
        } catch (err) {
            console.warn(err);
        }
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    const registrationValidationSchema = yup.object().shape({
        firstName: yup.string().max(255).required('First name is required'),
        lastName: yup.string().max(255).required('Last name is required'),
        email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
        password: yup.string().max(255).required('Password is required')
        // homeAddress: yup.string.max(255).required('Home Address is required'),
        // phoneNumber: yup.string.max(255).required('Phone number is required'),
        // NIN: yup.string.max(255).required('NIN is required')
    });

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: registrationValidationSchema,
        enableReinitialize: true,
        onSubmit: handleRegistrationSubmission
    });

    const { values, isSubmitting, handleBlur, handleChange, handleSubmit, touched, errors, setFieldValue, isValid, setValues } = formik;

    const getProps = (name) => {
        return {
            name,
            value: values[name] ?? '',
            onChange: handleChange,
            onBlur: handleBlur,
            error: Boolean(touched[name] && errors[name]),
            helperText: touched[name] && errors[name],
            className: 'my-1',
            size: 'small',
            variant: 'outlined',
            fullWidth: true
        };
    };

    useEffect(() => {
        changePassword('');
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12}>
                        <TextField label="First Name" {...getProps('firstName')} required />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField label="Last Name" {...getProps('lastName')} required />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField label="Email" {...getProps('email')} required />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            label="Password"
                            type={passwordInputType}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">{toggleIcon}</InputAdornment>
                            }}
                            {...getProps('password')}
                            onChange={(event) => {
                                handleChange(event);
                                changePassword(event?.target?.value);
                            }}
                            required
                        />
                    </Grid>
                    <Grid item sx={{ display: 'flex', alignItems: 'baseline' }}>
                        <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px', mr: 1 }} />
                        <Typography variant="subtitle1" fontSize="0.75rem">
                            {level?.label}
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={12}>
                        <TextField label="Register As" {...getProps('registerAs')} select>
                            {RegisterAs.map((el, idx) => (
                                <MenuItem key={idx} value={el.value}>
                                    {el.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    {_.get(values, 'registerAs') === 'individual' && (
                        <>
                            <Grid item sm={12} md={12}>
                                <TextField label="Home Address" {...getProps('homeAddress')} required />
                            </Grid>
                            <Grid item sm={12} md={12}>
                                <TextField label="Phone Number" {...getProps('phoneNumber')} required />
                            </Grid>
                            <Grid item sm={12} md={12}>
                                <TextField label="NIN" {...getProps('NIN')} required />
                            </Grid>
                        </>
                    )}
                    {_.get(values, 'registerAs') === 'company' && (
                        <>
                            <Grid item sm={12} md={12}>
                                <TextField label="Company Name" {...getProps('companyName')} required />
                            </Grid>
                            <Grid item sm={12} md={12}>
                                <TextField label="Company Address" {...getProps('companyAddress')} required />
                            </Grid>
                            <Grid item sm={12} md={12}>
                                <TextField label="Company Registration Number" {...getProps('companyRegistrationNumber')} required />
                            </Grid>
                            <Grid item sm={12} md={12}>
                                <TextField label="Company TaxID" {...getProps('companyTaxID')} required />
                            </Grid>
                            <Grid item sm={12} md={12}>
                                <PhoneNumberInput
                                    label="Company Representative Phone Number"
                                    name="companyRepPhoneNumber"
                                    values={values['companyRepPhoneNumber']}
                                    onChange={(phoneNumber) => {
                                        setFieldValue('companyRepPhoneNumber', phoneNumber);
                                    }}
                                    onBlur={handleBlur}
                                    errors={errors['companyRepPhoneNumber']}
                                    touched={touched['companyRepPhoneNumber']}
                                    className="my-1"
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
                <Grid container sx={{ my: 1 }}>
                    <Grid item sm={12} md={12}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="medium"
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                {isSubmitting ? 'Creating...' : 'Create Account'}
                            </Button>
                        </AnimateButton>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AuthRegister;
