import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import _ from 'lodash';
import FormikField from 'components/CustomGenericForm/FormikField';
import {CircularProgress, InputAdornment} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/material/Stack';
import AnimateButton from 'components/@extended/AnimateButton';
import { Button, Grid, TextField } from '@mui/material';
import DropDown from 'components/CustomGenericForm/DropDown';
import RadioOption from 'components/CustomGenericForm/RadioOption';
import TextArea from 'components/joy-ui/TextArea';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClientSideDropdown from "./ClientSideDropdown";
import usePasswordToggle from "../../config/hooks/usePasswordToggle";

const GenericForm = ({ formik, fieldObjects }) => {

    //  ******************************
    // ****fieldObject properties****
    //******************************
    // fieldType, name, label, required, options
    const [passwordType, ToggleIcon] = usePasswordToggle()

    return (
        <>
            <Box>
                {/*<br />*/}
                <form onSubmit={formik.handleSubmit}>
                    <Grid item sm={12} md={12}>
                        <Stack spacing={3}>
                            <Grid container spacing={3}>
                                <Grid item md={12} sm={12}>
                                    {fieldObjects.map((item) => (
                                        <>
                                            {item.fieldType == 'Client-Side-Dropdown' && (
                                                <FormikField
                                                    formikBag={formik}
                                                    Component={ClientSideDropdown}
                                                    name={item.name}
                                                    label={item.label}
                                                    enumType={item.options.map((option) => ({ key: option.value, name: option.value }))}
                                                    required={item.required}
                                                />
                                            )}
                                            {item.fieldType == 'Dropdown' && (
                                                <FormikField
                                                    formikBag={formik}
                                                    Component={DropDown}
                                                    name={item.name}
                                                    label={item.label}
                                                    selectOptions={item.options.map((option) => ({ key: option.id, name: option.name }))}
                                                    required={item.required}
                                                />
                                            )}
                                            {item.fieldType == 'Editor' && (
                                                <FormikField
                                                    formikBag={formik}
                                                    Component={CKEditor}
                                                    data={item.value}
                                                    editor={ClassicEditor}
                                                    onChange={(event, editor) => {

                                                        const data = editor.getData();
                                                        // formik.setFieldValue((item.name).toString(), data);
                                                        formik.handleChange({ target: { name: item.name, value: editor.getData() } });
                                                        editor.ui.view.editable.element.style.minHeight = '400px';
                                                        // console.log({ event, editor, data });
                                                    }}
                                                    onReady={(editor) => {
                                                        editor.ui.view.editable.element.style.minHeight = '400px';
                                                    }}
                                                    name={item.name}
                                                    label={item.label}
                                                    required={item.required}
                                                    sm={12}
                                                    md={12}
                                                />
                                            )}
                                            {item.fieldType == 'Switch' && (
                                                <FormikField
                                                    formikBag={formik}
                                                    Component={Switch}
                                                    name={item.name}
                                                    label={item.label}
                                                    value={item.checked}
                                                    defaultChecked={item.checked}
                                                    required={item.required}
                                                    customLabel={true}
                                                />
                                            )}
                                            {item.fieldType == 'Text' && (
                                                <FormikField
                                                    formikBag={formik}
                                                    Component={TextField}
                                                    name={item.name}
                                                    label={item.label}
                                                    // onChange={formik.handleChange}
                                                    required={item.required}
                                                />
                                            )}
                                            {item.fieldType == 'Password' && (
                                                <FormikField
                                                    formikBag={formik}
                                                    Component={TextField}
                                                    name={item.name}
                                                    label={item.label}
                                                    type={passwordType}
                                                    InputProps={{
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                {ToggleIcon}
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            )}
                                            {item.fieldType == 'TextArea' && (
                                                <FormikField
                                                    formikBag={formik}
                                                    Component={TextArea}
                                                    name={item.name}
                                                    label={item.label}
                                                    placeholder={item.label}
                                                    minRows={3}
                                                    required={item.required}
                                                />
                                            )}
                                        </>
                                    ))}
                                    {/* <FormikField
                                    formikBag={formik}
                                    Component={RadioOption}
                                    defaultValue={true}
                                    name="hasQuiz"
                                    label="Has Quiz"
                                    radioOptions={[0, 1].map((option) => ({
                                        value: Boolean(option),
                                        name: Boolean(option).toString()
                                    }))}
                                /> */}
                                </Grid>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <AnimateButton>
                                    <Button
                                        // disableElevation
                                        disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
                                        fullWidth
                                        size="small"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        endIcon={
                                            formik.isSubmitting && <CircularProgress size={20} sx={{ color: 'white' }} className="ml-2" />
                                        }
                                    >
                                        {formik.isSubmitting ? null : 'Submit'}
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Stack>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default GenericForm;
