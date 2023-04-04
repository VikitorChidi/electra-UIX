import { Box, Card, styled } from '@mui/material';

export const HeaderWrapper = styled(Card)(
    ({ theme }) => `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacing(7)};
    margin-bottom: ${theme.spacing(2)};
    margin-top: ${theme.spacing(2)};
  
`
);

export const OverviewWrapper = styled(Box)(
    ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);
