import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Tooltip, Typography} from "@mui/material";
import {CancelSharp} from "@material-ui/icons";
import PropTypes from "prop-types";


const SimpleDialog = ({
                          open,
                          title,
                          subtitle,
                          dialogAction,
                          handleDialogClose,
                          children,
                          maxWidth = 'md',
                          fullWidth = 'md'
                      }) => {
    // const Transition = forwardRef(function Transition(props, ref) {
    //     return <Slide direction="down" ref={ref} {...props}  />;
    // });
    return (
        <Dialog
            open={open}
            fullWidth={fullWidth ? fullWidth : false}
            maxWidth={maxWidth}
            onClose={handleDialogClose}
            keepMounted
            // TransitionComponent={Transition}
            aria-labelledby="simple-dialog-title"
        >
            <DialogTitle
                id="simple-dialog-title"
                className='px-6 py-4 sticky-top z-index-1 flex justify-between'>
                <Typography variant='h4' gutterBottom sx={{color: 'black', fontWeight: 'bold'}}>{title}</Typography>
                <Typography variant="subtitle2" sx={{color: 'white'}}>{subtitle}</Typography>
                <Tooltip arrow placement="top" title='Close'>
                    <IconButton className="mt--2" onClick={handleDialogClose}>
                        <CancelSharp color='' htmlColor={'#0f0e0e'}/>
                    </IconButton>
                </Tooltip>
            </DialogTitle>
            <DialogContent dividers sx={{p: 3, borderRadius: 5}}>{children}</DialogContent>
            {dialogAction && <DialogActions>{dialogAction}</DialogActions>}
        </Dialog>
    )
}
export default SimpleDialog

SimpleDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    dialogAction: PropTypes.element,
    handleDialogClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    maxWidth: PropTypes.string,
}
