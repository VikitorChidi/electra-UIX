import { makeStyles } from '@mui/styles';

export const borderStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.border-radius-0': {
            borderRadius: '0px !important',
            overflow: 'hidden'
        },
        '.border-radius-4': {
            borderRadius: '4px !important',
            overflow: 'hidden'
        },
        '.border-radius-8': {
            borderRadius: '8px !important',
            overflow: 'hidden'
        },
        '.border-radius-12': {
            borderRadius: '12px !important',
            overflow: 'hidden'
        },
        '.border-radius-circle': { borderRadius: '50% !important' },
        '.border-none': { border: 'none !important' },
        '.border-transparent': { border: '1px solid transparent !important' },
        '.rounded': {
            borderRadius: '300px !important',
            overflow: 'hidden !important'
        },
        '.rounded-l': {
            borderTopLeftRadius: '300px !important',
            borderBottomLeftRadius: '300px !important',
            overflow: 'hidden !important'
        },
        '.rounded-r': {
            borderTopRightRadius: '300px !important',
            borderBottomRightRadius: '300px !important',
            overflow: 'hidden !important'
        },
        ...generateBorders()
    }
}));

const generateBorders = (start = 0, end = 10, increment = 1) => {
    let classList = {};

    for (let i = start; i <= end; i++) {
        classList[`.border-${i}`] = {
            border: `${i}px solid !important`
        };
        classList[`.border-bottom-${i}`] = {
            borderBottom: `${i}px solid !important`
        };
        classList[`.border-top-${i}`] = {
            borderTop: `${i}px solid !important`
        };
        classList[`.border-left-${i}`] = {
            borderLeft: `${i}px solid !important`
        };
        classList[`.border-right-${i}`] = {
            borderRight: `${i}px solid !important`
        };
    }

    return classList;
};
