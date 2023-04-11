import React from 'react';
import { AppBar, Box, Button, Collapse, IconButton, styled, Toolbar, Tooltip, Typography } from '@mui/material';
import { ExpandMore } from '@material-ui/icons';
import { Link as Scroll } from 'react-scroll';
import { useNavigate } from 'react-router';

export const AppBarWrapper = styled(AppBar)(
    ({ theme }) => `
    background: none;
`
);

const Header = () => {
    const [checked, setChecked] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <>
            <Box
                id="header"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh'
                }}
            >
                <AppBarWrapper elevation={0}>
                    <Toolbar sx={{ width: '80%', margin: '0 auto' }}>
                        <Typography sx={{ flexGrow: 1, color: '#344767', fontSize: '1rem', fontWeight: 600 }}>Elektra Registrar</Typography>
                        {/*<IconButton>*/}
                        {/*    <Sort style={{ color: '#FFF', fontSize: '2rem' }} />*/}
                        {/*</IconButton>*/}
                        <Tooltip title="Signin" arrow>
                            <Button
                                variant="text"
                                sx={{ fontWeight: 600, fontSize: '1rem', color: '#344767' }}
                                onClick={() => navigate('/session/signin')}
                            >
                                Signin
                            </Button>
                        </Tooltip>
                        <Tooltip title="Signup" arrow>
                            <Button
                                variant="text"
                                sx={{ fontWeight: 600, fontSize: '1rem', color: '#344767' }}
                                onClick={() => navigate('/session/signup')}
                            >
                                Signup
                            </Button>
                        </Tooltip>
                    </Toolbar>
                </AppBarWrapper>
                <Collapse in={checked} collapsedSize={50} {...(checked ? { timeout: 1000 } : {})}>
                    <Box
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h1" sx={{ color: '#344767' }}>
                            Elektra Registrar
                        </Typography>
                        <Typography variant={'subtitle1'} sx={{ color: '#344767', mb: 2, fontWeight: 600, fontSize: '1rem' }}>
                            Elektra Registrar is a web product that provide licences to use other digital products developed by <br />{' '}
                            Syntechsys Register as a company or Individual in other to benefit from this resources provided by Syntechsys.
                        </Typography>
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <ExpandMore style={{ color: '#344767', fontSize: '4rem' }} />
                            </IconButton>
                        </Scroll>
                    </Box>
                </Collapse>
            </Box>
        </>
    );
};
export default Header;
