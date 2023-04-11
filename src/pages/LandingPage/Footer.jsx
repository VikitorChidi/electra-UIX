import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material';

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
                    px: 5,
                    py: 5
                }}
            >
                <Grid container direction="row" spacing={10} alignItems="baseline" justifyContent="center">
                    <Grid item>
                        <Stack spacing={1}>
                            <CardMedia sx={{ height: 40 }} image={`${process.env.PUBLIC_URL + '/assets/logo1.png'}`} />
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#FFF',
                                    fontWeight: '600 !important',
                                    fontSize: '1rem',
                                    lineHeight: 1.625
                                }}
                            >
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
