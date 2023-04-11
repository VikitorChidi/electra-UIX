import { Box, Grid, Stack, styled, Typography } from '@mui/material';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1)
}));

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white',
                    backgroundColor: 'black',
                    width: '100%',
                    px: 10,
                    py: 10
                }}
            >
                <Grid container direction="row" spacing={10} alignItems="baseline" justifyContent="center">
                    <Grid item>
                        <Stack>
                            {/*<Box component="img" src={`${process.env.PUBLIC_URL + '/assets/logo1.jpg'}`} />*/}
                            <Typography variant="h3" sx={{ color: '#FFF' }}>
                                Elektra Registrar
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack spacing={2}>
                            <Typography variant="h5" sx={{ color: '#FFF', fontWeight: 'bold' }}>
                                Company
                            </Typography>
                            <Typography variant="subtitle1">About Us</Typography>
                            <Typography variant="subtitle1">Freebies</Typography>
                            <Typography variant="subtitle1">Premium Tools</Typography>
                            <Typography variant="subtitle1">Blog</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack spacing={2}>
                            <Typography variant="h5">Resources</Typography>
                            <Typography variant="subtitle1">Illustrations</Typography>
                            <Typography variant="subtitle1">Bits & Snippets</Typography>
                            <Typography variant="subtitle1">Affiliate Program</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack spacing={2}>
                            <Typography variant="h5" sx={{ color: '#FFF', fontWeight: 'bold' }}>
                                Help & Support
                            </Typography>
                            <Typography variant="subtitle1">Contact Us</Typography>
                            <Typography variant="subtitle1">Knowledge Center</Typography>
                            <Typography variant="subtitle1">Custom Development</Typography>
                            <Typography variant="subtitle1">Sponsorships</Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack spacing={2}>
                            <Typography variant="h5" sx={{ color: '#FFF', fontWeight: 'bold' }}>
                                Legal
                            </Typography>
                            <Typography variant="subtitle1">Terms & Conditions</Typography>
                            <Typography variant="subtitle1">Privacy Policy</Typography>
                            <Typography variant="subtitle1">Licenses (EULA)</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="baseline" sx={{ mt: 5 }}>
                    <Grid item>
                        <Typography variant="body1" sx={{ color: '#FFF', fontWeight: 'bold' }}>
                            All rights reserved. Copyright © 2023 Elektra Studio by Syntechsys.{' '}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
export default Footer;
