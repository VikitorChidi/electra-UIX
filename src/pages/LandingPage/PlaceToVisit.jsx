import { Box, styled } from '@mui/material';
import VisitCard from './VisitCard';
import { cardDetails } from '../../static/cardDetails';
import useWindowPosition from '../../hook/useWindowPosition';

const RootWrapper = styled(Box)(
    ({ theme }) => `
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.breakpoints.down('md')}: {
        flex-direction: column;
    }  
`
);

const PlaceToVisit = () => {
    const checked = useWindowPosition('header');
    return (
        <>
            <RootWrapper id="place-to-visit">
                <VisitCard details={cardDetails[0]} checked={checked} />
                <VisitCard details={cardDetails[1]} checked={checked} />
                <VisitCard details={cardDetails[2]} checked={checked} />
            </RootWrapper>
        </>
    );
};
export default PlaceToVisit;
