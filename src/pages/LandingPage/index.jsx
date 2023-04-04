import useAuth from '../../hook/useAuth';
import { HeaderWrapper, OverviewWrapper } from './landingPageWrappers';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const LandingPage = () => {
    const { isInitialized, isAuthenticated, user } = useAuth();
    const { t } = useTranslation();

    return (
        <>
            <OverviewWrapper>
                <Helmet>
                    <title>Welcome to Elektra</title>
                </Helmet>
                <HeaderWrapper>
                    <Container maxWidth="lg">
                        <Box display="flex" alignItems="center">
                            <Typography>Elektra</Typography>
                        </Box>
                    </Container>
                </HeaderWrapper>
                <Box>
                    <div>Welcome to Elektra</div>
                </Box>
            </OverviewWrapper>
        </>
    );
};
export default LandingPage;
