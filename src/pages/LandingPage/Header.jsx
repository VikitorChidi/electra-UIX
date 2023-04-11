import React from 'react';
import { AppBar, Box, Collapse, IconButton, styled, Toolbar, Typography } from '@mui/material';
import { ExpandMore, Sort } from '@material-ui/icons';
import { Link as Scroll } from 'react-scroll';

export const AppBarWrapper = styled(AppBar)(
    ({ theme }) => `
    background: none;
`
);

const Header = () => {
    const [checked, setChecked] = React.useState(false);
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
                    height: '100vh'
                }}
            >
                <AppBarWrapper elevation={0}>
                    <Toolbar sx={{ width: '80%', margin: '0 auto' }}>
                        <Typography sx={{ flexGrow: 1, color: '#344767' }}>Elektra Registrar</Typography>
                        <IconButton>
                            <Sort style={{ color: '#FFF', fontSize: '2rem' }} />
                        </IconButton>
                    </Toolbar>
                </AppBarWrapper>
                <Collapse in={checked} collapsedSize={50} {...(checked ? { timeout: 2000 } : {})}>
                    <Box
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h1" sx={{ color: '#FFF' }}>
                            Elektra Registrar
                        </Typography>
                        <Typography variant={'h4'} sx={{ color: '#FFF', mb: 2 }}>
                            Elektra Registrar is a web product that provide licences to use other digital products developed by <br />{' '}
                            Syntechsys Register as a company or Individual in other to benefit from this resources provided by Syntechsys.
                        </Typography>
                        <Scroll to="place-to-visit" smooth={true}>
                            <IconButton>
                                <ExpandMore style={{ color: '#FFF', fontSize: '4rem' }} />
                            </IconButton>
                        </Scroll>
                    </Box>
                </Collapse>
            </Box>
        </>
    );
};
export default Header;
