import { useState } from 'react';
import { IconButton } from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@material-ui/icons';

const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false);

    const passwordIcon = (
        <IconButton onClick={() => setVisible((visibility) => !visibility)}>
            {visible ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
        </IconButton>
    );

    const InputType = visible ? 'text' : 'password';

    return [InputType, passwordIcon];
};

export default usePasswordToggle;
