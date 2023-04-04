import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';

const useClosableSnackbar = () => {
    const { enqueueSnackbar, closeSnackbar, ...others } = useSnackbar();

    const action = (snackbarId) => (
        <Button
            variant="outlined"
            sx={{
                borderColor: 'white'
            }}
            children="Close"
            className="capitalize text-white text-10"
            size="small"
            onClick={() => closeSnackbar(snackbarId)}
        />
    );
    return {
        enqueueSnackbar: (message, options) => enqueueSnackbar(message, { action, ...options }),
        closeSnackbar,
        ...others
    };
};

export default useClosableSnackbar;
