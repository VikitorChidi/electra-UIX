import { makeStyles } from '@mui/styles';

export const shadowStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        ...generateShadows(theme)
    }
}));

const generateShadows = (theme) => {
    let classList = {};

    theme.shadows.forEach((shadow, ind) => {
        classList[`.elevation-z${ind}`] = {
            boxShadow: `${shadow} !important`
        };
        classList[`.hover-elevation-z${ind}`] = {
            transition: 'all 250ms'
        };
        classList[`.hover-elevation-z${ind}:hover`] = {
            boxShadow: `${shadow} !important`
        };
    });

    return classList;
};
