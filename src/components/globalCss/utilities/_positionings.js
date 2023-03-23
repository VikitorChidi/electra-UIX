import { makeStyles } from '@mui/styles';

export const positioningStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.hidden': { display: 'none' },
        '.block': { display: 'block !important' },
        '.inline-block': { display: 'inline-block !important' },
        '.flex': { display: 'flex' },
        '.flex-column': { display: 'flex', flexDirection: 'column' },
        '.flex-wrap': { flexWrap: 'wrap' },
        '.justify-start': { justifyContent: 'flex-start !important' },
        '.justify-center': { justifyContent: 'center' },
        '.justify-end': { justifyContent: 'flex-end' },
        '.justify-between': { justifyContent: 'space-between !important' },
        '.justify-around': { justifyContent: 'space-around' },
        '.items-center': { alignItems: 'center' },
        '.items-start': { alignItems: 'flex-start' },
        '.items-end': { alignItems: 'flex-end' },
        '.items-stretch': { alignItems: 'stretch' },
        '.self-start': { alignSelf: 'flex-start' },
        '.self-end': { alignSelf: 'flex-end' },
        '.self-center': { alignSelf: 'center' },
        '.flex-grow': { flexGrow: '1' },
        '.overflow-auto': { overflow: 'auto !important' },
        '.overflow-hidden': { overflow: 'hidden !important' },
        '.overflow-unset': { overflow: 'unset !important' },
        '.overflow-visible': { overflow: 'visible !important' },
        '.scroll-y': { overflowX: 'hidden', overflowY: 'auto' },
        '.relative': { position: 'relative' },
        '.position-absolute': { position: 'absolute !important' },
        '.position-bottom': { position: 'absolute', bottom: '0' },
        '.text-center': { textAlign: 'center' },
        '.align-middle': { verticalAlign: 'middle' },
        '.text-right': { textAlign: 'right' },
        '.text-left': { textAlign: 'left' },
        '.x-center': { left: '50%', transform: 'translateX(-50%)' },
        '.y-center': { top: '50%', transform: 'translateY(-50%)' },
        ...generateStickyPositions(),
        ...generateStickyPositions(0, 10, 5, 'px'),
        ...generateElevations()
    }
}));

const generateStickyPositions = (start = 0, end = 10, increment = 5, unit = 'rem') => {
    let classList = {};
    classList[`.sticky-top`] = {
        position: 'sticky !important',
        top: 0
    };
    classList[`.sticky-left`] = {
        position: 'sticky !important',
        left: 0
    };
    classList[`.sticky-right`] = {
        position: 'sticky !important',
        right: 0
    };
    classList[`.sticky-bottom`] = {
        position: 'sticky !important',
        bottom: 0
    };

    for (let i = start; i <= end; i++) {
        classList[`.sticky-top-${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            top: `${i * increment}${unit}`
        };
        classList[`.sticky-left-${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            left: `${i * increment}${unit}`
        };
        classList[`.sticky-right-${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            right: `${i * increment}${unit}`
        };
        classList[`.sticky-bottom-${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            bottom: `${i * increment}${unit}`
        };
        classList[`.sticky-top--${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            top: `-${i * increment}${unit}`
        };
        classList[`.sticky-left--${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            left: `-${i * increment}${unit}`
        };
        classList[`.sticky-right--${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            right: `${i * increment}${unit}`
        };
        classList[`.sticky-bottom--${i}${unit === 'px' ? 'px' : ''}`] = {
            position: 'sticky !important',
            bottom: `-${i * increment}${unit}`
        };
    }

    return classList;
};

const generateElevations = (start = 0, end = 10, increment = 1) => {
    let classList = {};

    for (let i = start; i <= end; i++) {
        classList[`.z-index-${i}`] = {
            zIndex: i
        };
    }

    return classList;
};
