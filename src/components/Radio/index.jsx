import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';

const RadioInput = ({ name, value, label, options, onChange, onBlur, helperText, error, required, ...props }) => {
    return (
        <FormControl error={error} required={required}>
            <FormLabel className="flex">
                <Typography variant="subtitle1" sx={{ fontSize: '12px' }}>
                    {label}
                </Typography>
            </FormLabel>
            <RadioGroup name={name} value={value} onChange={onChange} onBlur={onBlur} {...props}>
                {options.map((role, roleIndex) => (
                    <FormControlLabel
                        key={roleIndex}
                        value={role.value}
                        label={<Typography sx={{ fontSize: '13px' }}>{role.label}</Typography>}
                        control={<Radio />}
                    />
                ))}
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};
export default RadioInput;
