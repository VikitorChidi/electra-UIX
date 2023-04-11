import * as React from 'react';
import { Box, Button, Card, Collapse, Typography } from '@mui/material';
import { ArrowForward } from '@material-ui/icons';
import { useNavigate } from 'react-router';

const VisitCard = ({ details, checked, cardBgColor }) => {
    const navigate = useNavigate();

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <Card
                sx={{
                    maxWidth: 345,
                    minWidth: 345,
                    minHeight: 345,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    textAlign: 'left',
                    borderRadius: '1rem',
                    p: 2,
                    m: 2,
                    backgroundImage: cardBgColor
                }}
            >
                <Box sx={{ mr: 1 }}>{details?.icon}</Box>
                <Box sx={{ display: 'flex', alignItems: 'baseline', flexDirection: 'column' }}>
                    <Typography variant={'h3'} sx={{ mb: 1, color: '#344767' }}>
                        {details?.header}
                    </Typography>
                    <Typography variant={'body2'}>{details?.body}</Typography>
                    <Button
                        sx={{
                            '&:hover': {
                                transform: 'translateX(5px)',
                                transition: 'all 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                                cursor: 'pointer'
                            },
                            px: 0,
                            py: 0,
                            color: '#e91e63 !important'
                        }}
                        endIcon={<ArrowForward />}
                        onClick={() => navigate(details?.navigateTo)}
                    >
                        {details?.buttonLabel}
                    </Button>
                </Box>
            </Card>
        </Collapse>
    );
};
export default VisitCard;
