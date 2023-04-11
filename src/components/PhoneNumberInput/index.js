import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput = ({ name, values, touched, errors, label, onChange, onBlur, ...props }) => {
    return (
        <>
            <PhoneInput
                value={values}
                label={label}
                placeholder={label}
                country={'us'}
                inputStyle={{ color: 'green,', width: '100%', minHeight: '100%', borderRadius: 3 }}
                containerStyle={{ marginTop: 1, border: touched && errors ? 'solid red' : '' }}
                onBlur={onBlur}
                onChange={onChange}
                variant="outlined"
                fullWidth
                inputProps={{
                    name: name,
                    required: true
                }}
                {...props}
            />
            {touched && errors && <p style={{ fontSize: 'small', color: 'red', fontWeight: 'bold' }}>{errors}</p>}
        </>
    );
};
export default PhoneNumberInput;
