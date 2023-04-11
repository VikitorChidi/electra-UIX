import useAuth from '../../hook/useAuth';
import { useTranslation } from 'react-i18next';
import { Box, styled } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Header from './Header';
import PlaceToVisit from './PlaceToVisit';
import Footer from './Footer';

export const LandingPageWrapper = styled(Box)(
    ({ theme }) => `
    min-height: 100vh;
    background-image: url(${process.env.PUBLIC_URL + '/assets/bg3.jpg'});
    background-repeat: no-repeat;
    background-size: cover;
   `
);

const LandingPage = () => {
    const { isInitialized, isAuthenticated, user } = useAuth();
    const { t } = useTranslation();

    return (
        <>
            <LandingPageWrapper>
                <Helmet>
                    <title>Welcome to Elektra</title>
                </Helmet>
                <Header />
                <PlaceToVisit />
                <Footer />
            </LandingPageWrapper>
        </>
    );
};
export default LandingPage;
