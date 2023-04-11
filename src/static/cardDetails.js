import { Flag, PrecisionManufacturing, ReceiptLong } from '@mui/icons-material';
import * as React from 'react';

export const cardDetails = [
    {
        header: 'Getting Started With Elektra Registrar',
        body: 'Register with us to have access to a wide range of our software products..\n',
        icon: <Flag />,
        buttonLabel: "let's start",
        navigateTo: '/'
    },
    {
        header: 'Elektra Lab Studio',
        body: 'This is a compendium of engineering digital products that can be used in the lab for better results.\n',
        icon: <PrecisionManufacturing />,
        buttonLabel: 'Read More',
        navigateTo: '/'
    },
    {
        header: 'Elektra Field Studio',
        body: 'This is a compendium of engineering digital products that can be used in the field to tackle problems such as liquid loading problem, Sand production problem, Corrosion problem, flow assurance problem etc..\n',
        icon: <ReceiptLong />,
        buttonLabel: 'Read More',
        navigateTo: '/'
    }
];
