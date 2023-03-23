import { makeStyles } from '@mui/styles';

export const colorStyles = makeStyles(({ palette, ...theme }) => ({
    '@global': {
        '.bg-primary': { background: `${palette.primary.main} !important` },
        '.bg-secondary': { background: `${palette.secondary.main} !important` },
        '.bg-green': {
            backgroundColor: 'rgba(9, 182, 109, 1) !important',
            background: '#08ad6c !important'
        },
        '.bg-error': {
            background: `${palette.error.main} !important`,
            color: 'white !important'
        },
        '.bg-white': { background: '#fff !important', color: 'inherit' },
        '.bg-default': {
            background: `${palette.background.default} !important`
        },
        '.bg-paper': { background: `${palette.background.paper}` },
        '.bg-gray': { background: 'rgba(0, 0, 0, 0.15) !important' },
        '.bg-light-gray': { background: '#E1E6ED !important' },
        '.bg-light-purple': { background: '#EAE3EF !important' },
        '.bg-light-blue': { background: '#EEF0FD !important' },
        '.bg-light-violet': { background: '#E6E5F1 !important' },
        '.bg-light-yellow': { background: 'rgba(248, 181, 31, 0.08) !important' },
        '.bg-light-red': { background: '#FEE4E2 !important' },
        '.bg-mid-gray': { background: '#D1D0D0 !important' },
        '.bg-accept': { background: '#018708 !important' },
        '.bg-reject': { background: '#D63815 !important' },
        '.bg-dark': { background: '#000000', color: '#fff' },
        '.bg-light-dark': { background: '#212121', color: 'white' },
        '.hover-bg-primary': { transition: 'all 250ms' },
        '.hover-bg-primary:hover': {
            background: `${palette.primary.main} !important`,
            color: '#ffffff',
            backgroundColor: `${palette.primary.main} !important`,
            fallbacks: [{ color: 'white !important' }]
        },
        '.hover-bg-primary:hover [class^="MuiSvgIcon-"]': {
            fill: 'white !important'
        },
        '.hover-bg-secondary': { transition: 'all 250ms' },
        '.hover-bg-secondary:hover': {
            background: `${palette.secondary.main} !important`,
            color: '#ffffff',
            backgroundColor: `${palette.secondary.main} !important`,
            fallbacks: [{ color: 'white !important' }]
        },
        '.hover-bg-error': { transition: 'all 250ms' },
        '.hover-bg-error:hover': {
            background: `${palette.error.main} !important`,
            color: '#ffffff',
            backgroundColor: `${palette.error.main} !important`,
            fallbacks: [{ color: 'white !important' }]
        },
        '.hover-bg-green': { transition: 'all 250ms' },
        '.hover-bg-green:hover': {
            background: `rgba(9, 182, 109, 1) !important`,
            color: '#ffffff',
            backgroundColor: `rgba(9, 182, 109, 1) !important`,
            fallbacks: [{ color: 'white !important' }]
        },
        '.hover-text-brand': { transition: 'all 250ms' },
        '.hover-text-brand:hover': { color: `${palette.primary.main} !important` },
        '.bg-light-primary': {
            background: `${palette.primary.lighter} !important`
        },
        '.hover-bg-light-primary': { transition: 'all 250ms' },
        '.hover-bg-light-primary:hover': {
            backgroundColor: `${palette.primary.lighter} !important`
            // fallbacks: [{ color: 'white !important' }],
        },
        '.bg-light-secondary': {
            background: `${palette.secondary.lighter} !important`
        },
        '.bg-light-error': {
            background: `${palette.error.lighter} !important`
        },
        '.hover-bg-light-error': { transition: 'all 250ms' },
        '.hover-bg-light-error:hover': {
            backgroundColor: `${palette.error.lighter} !important`
            // fallbacks: [{ color: 'white !important' }],
        },
        '.section-bg-light-primary': { background: 'rgba(var(--primary),0.1)' },
        '.bg-light-green': { background: 'rgba(9, 182, 109, 0.15) !important' },
        '.hover-bg-light-green': { transition: 'all 250ms' },
        '.hover-bg-light-green:hover': { background: 'rgba(9, 182, 109, 0.15) !important' },
        '.bg-transparent': { background: 'transparent !important' },
        '.text-white': { color: 'rgba(255, 255, 255, 1) !important' },
        '.text-black': { color: 'rgba(0, 0, 0, 0.87) !important' },
        '.text-body': { color: 'rgba(var(--body), 0.87) !important' },
        '.text-white-secondary': {
            color: 'rgba(255, 255, 255, 0.87) !important'
        },
        '.text-muted-white': { color: 'rgba(255, 255, 255, 0.54) !important' },
        '.text-light-white': { color: 'rgba(255, 255, 255, 0.54) !important' },
        '.text-muted': { color: `${palette.text.secondary} !important` },
        '.text-hint': { color: `${palette.text.hint} !important` },
        '.text-gray': { color: '#717375 !important' },
        '.text-brand': { color: `${palette.primary.main} !important` },
        '.text-primary': { color: `${palette.primary.main} !important` },
        '.text-secondary': { color: `${palette.secondary.main} !important` },
        '.text-error': { color: `${palette.error.main} !important` },
        '.text-green': { color: '#0CCC36 !important' },
        '.text-purple': { color: '#3A0259 !important' },
        '.text-blue': { color: '#5866EB !important' },
        '.text-violet': { color: '#7B77BA !important' },
        '.text-yellow': { color: '#F8B51F !important' },
        '.text-red': { color: '#CC0C0F !important' },
        '.text-dark-mid-gray': { color: '#313034 !important' },
        '.text-inherit': { color: 'inherit !important' },
        '.gray-on-hover': { transition: 'background 250ms ease' },
        '.gray-on-hover:hover': { background: 'rgba(0,0,0,0.05)' },
        '.border-color-white': { borderColor: '#ffffff !important' },
        '.border-color-primary': {
            borderColor: `${palette.primary.main} !important`
        },
        '.border-color-secondary': {
            borderColor: `${palette.secondary.main} !important`
        },
        '.border-color-error': {
            borderColor: `${palette.error.main} !important`
        },
        '.border-color-default': {
            borderColor: `${palette.background.default} !important`
        },
        '.border-color-paper': {
            borderColor: `${palette.background.paper} !important`
        },
        '.border-color-gray': {
            borderColor: 'rgba(0,0,0,0.15) !important'
        }
    }
}));
