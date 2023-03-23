// ==============================|| THEME CONFIG  ||============================== //

const config = {
    defaultPath: '/dashboard/default',
    fontFamily: `'Public Sans', sans-serif`,
    i18n: 'en',
    miniDrawer: false,
    container: true,
    mode: 'light',
    presetColor: 'default',
    themeDirection: 'ltr'
};

export default config;
export const drawerWidth = 260;

export const twitterColor = '#1DA1F2';
export const facebookColor = '#3b5998';
export const linkedInColor = '#0e76a8';

const getIP = () => {
    const environment = process.env.NODE_ENV;
    switch (environment) {
        case 'production':
            // when building (prod), this resorts to empty string and falls back on UI server's nginx for proxying
            if (process.env.REACT_APP_SERVER_BASE_ADDRESS?.length > 0) return process.env.REACT_APP_SERVER_BASE_ADDRESS;
            return window.location.origin;
        case 'development':
            return process.env.REACT_APP_SERVER_BASE_ADDRESS ?? 'http://localhost:3000';
        default:
            return '';
    }
};

const baseAddress = getIP();

export const backendConfig = {
    portal: baseAddress
};
