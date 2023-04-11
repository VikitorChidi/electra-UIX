import React, { useEffect } from 'react';
import { Formik } from 'formik';
import usePasswordToggle from '../../../hook/usePasswordToggle';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import { useSnackbar } from 'notistack';
import { Button, CircularProgress, Grid, InputAdornment, TextField, Zoom } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import * as yup from 'yup';

const AuthLogin = () => {
    const location = useLocation();
    const [passwordType, ToggleIcon] = usePasswordToggle();
    const { login, loading } = useAuth();
    const { enqueueSnackbar } = useSnackbar();

    const loginSchema = yup.object().shape({
        username: yup.string().required('username is required'),
        password: yup.string().required('Password is required')
    });

    const handleLogin = ({ username, password }) => {
        login({ username, password }).then(() => {
            enqueueSnackbar('Login successful', {
                variant: 'success',
                anchorOrigin: { vertical: 'top', horizontal: 'center' },
                TransitionComponent: Zoom
            });
        });
    };

    useEffect(() => {
        if (location?.state?.sessionExpired) {
            enqueueSnackbar('Session expired, please sign in again', {
                variant: 'info',
                anchorOrigin: { vertical: 'top', horizontal: 'center' },
                TransitionComponent: Zoom
            });
            window.history.replaceState({}, document.title);
        }
    }, []);

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={handleLogin}
            enableReinitialize={true}
            validationSchema={loginSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, submitCount }) => {
                const getProps = (name) => {
                    return {
                        name: name,
                        fullWidth: true,
                        size: 'normal',
                        variant: 'standard',
                        value: values[name] ?? '',
                        onChange: handleChange,
                        onBlur: handleBlur,
                        error: Boolean((submitCount > 0 || touched[name]) && errors[name]),
                        helperText: (submitCount > 0 || touched[name]) && errors[name]
                    };
                };

                return (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField id="username" label="Username" {...getProps('username')} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    label="Password"
                                    {...getProps('password')}
                                    type={passwordType}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">{ToggleIcon}</InputAdornment>
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={loading}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        {loading ? <CircularProgress size={20} sx={{ color: 'blue' }} className="ml-2" /> : 'Login'}
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                );
            }}
        </Formik>
    );
};
export default AuthLogin;
