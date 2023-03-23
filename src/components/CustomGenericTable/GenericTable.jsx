import {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import _ from 'lodash';
import {useSnackbar} from 'notistack';
import {getBooleanBody, getDefaultBody, getEnumBody, getLongTextBody} from './columnOptions';
import {getNestedProperty} from 'utils/format';
import {Card, IconButton} from "@mui/material";
import {Add, CloudDownload, EditOutlined, InfoOutlined, Sort, Sync} from "@material-ui/icons";


const GenericTable = ({
                          title,
                          description,
                          columns,
                          fetchData,
                          filterParams = [],
                          showDetail,
                          showAdd,
                          onEdit,
                          setItem,
                          retrieveItem,
                          reloadTable,
                          reloadItem,
                          // actions,
                      }) => {
    const [loading, setLoading] = useState(false);
    const [fetchingItem, setFetchingItem] = useState(false);
    const [rows, setRows] = useState([]);
    const [filters, setFilters] = useState([]);
    const [total, setTotal] = useState(0);
    const [max, setMax] = useState(10);
    const [page, setPage] = useState(0);
    const {enqueueSnackbar} = useSnackbar();

    const handleOnFetchTableData = (page, max, filters) => {
        setLoading(true);
        fetchData(page, max, filters)
            .then((resp) => {
                const responses = resp.data.data;
                columns.forEach((column, cindex) => {
                    if (column.name.includes('.')) {
                        responses.forEach((row, index) => {
                            responses[index][column.name] = getNestedProperty(responses[index], column.name);
                            // responses[cindex][`${column.name.split('.')[0]}`][`${column.name.split('.')[1]}`];
                        });
                    }
                });
                setRows(responses);
                setTotal(resp.data.count);
                setLoading(false);
            })
            .catch((e) => {
                console.log('error fetching paged data: ', e);
                enqueueSnackbar('Unable to retrieve data now.', {
                    variant: 'error',
                    anchorOrigin: {horizontal: 'right', vertical: 'top'}
                });
                setLoading(false);
            });
    };

    const handleOnRetrieveItem = (id) => {
        if (!fetchingItem && !_.isUndefined(id)) {
            setFetchingItem(true);
            retrieveItem(id)
                .then((resp) => {
                    // console.log('response: ', resp.data);
                    const response = resp.data;
                    columns.forEach((column, cindex) => {
                        if (column.name.includes('.')) {
                            response[column.name] = getNestedProperty(response, column.name);
                            // response[column.name] = response[`${column.name.split('.')[0]}`][`${column.name.split('.')[1]}`];
                        }
                    });
                    setItem(response);
                    setFetchingItem(false);
                    showDetail();
                })
                .catch((e) => {
                    console.log('error: ', e);
                    enqueueSnackbar(`Unable to retrieve item [${id}] now. `, {
                        variant: 'error',
                        anchorOrigin: {horizontal: 'right', vertical: 'top'}
                    });
                    setFetchingItem(false);
                });
        }
    };

    useEffect(() => {
        if (loading === false) {
            handleOnFetchTableData(page, max, filters);
        }
    }, [reloadTable, page, max]);

    useEffect(() => {
        if (reloadItem !== 0) {
            handleOnRetrieveItem(reloadItem);
        }
    }, [reloadItem]);

    const handleOnGetColumnDataFormat = (object, column) => {
        switch (column.columnType) {
            case 'ENUM':
            case 'enum':
                return getEnumBody(object[column.name], column.enumType);
            case 'BOOLEAN':
            case 'booleanState':
                return getBooleanBody(object[column.name]);
            case 'LONGTEXT':
            case 'longtext':
                return getLongTextBody(object[column.name]);
            default:
                return getDefaultBody(object[column.name]);
        }
    };

    return (
        <>
            <Card>
                <TableContainer sx={{padding: '30px'}}>
                    <Box sx={{padding: 2}}>
                        <Box sx={{textAlign: 'left'}}>
                            <Typography variant="h4" gutterBottom>
                                {title}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom>
                                {description}
                            </Typography>
                        </Box>
                        <Box sx={{textAlign: 'right'}}>
                            {!_.isUndefined(showAdd) && (
                                <Tooltip title="Add" arrow>
                                    <IconButton color="primary" onClick={() => showAdd()}>
                                        <Add sx={{fontSize: '15px', padding: '15px'}}/>
                                    </IconButton>
                                </Tooltip>
                            )}
                            <Tooltip title="Download" arrow>
                                <IconButton color="primary">
                                    <CloudDownload sx={{fontSize: '15px', padding: '15px'}}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Reload" arrow>
                                <IconButton onClick={() => handleOnFetchTableData(page, max, filters)} color="primary">
                                    <Sync sx={{fontSize: '15px', padding: '15px'}}/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Filter" arrow>
                                <IconButton color="primary">
                                    <Sort sx={{fontSize: '15px', padding: '15px'}}/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                    {/* <Divider /> */}
                    {fetchingItem && (
                        <Box sx={{width: '100%', padding: '10px'}}>
                            <LinearProgress/>
                        </Box>
                    )}
                    <Table sx={{minWidth: 650}} size="small" aria-label={description}>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{maxWidth: '2px'}}>S/N</TableCell>
                                {columns.map((column, index) => (
                                    <TableCell key={index}>{column['label']}</TableCell>
                                ))}
                                <TableCell style={{maxWidth: '2px'}}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell align="center" colSpan={columns.length + 2}>
                                        <Box sx={{display: 'flex'}} justifyContent="center" alignItems="center">
                                            <CircularProgress/>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ) : rows.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center" colSpan={columns.length + 2}>
                                        <Typography variant="h6" sx={{fontStyle: 'italic', textAlign: 'center'}}>
                                            There are no <b>{title}</b> available
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                rows.map((row, rowIndex) => (
                                    <TableRow key={rowIndex} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                        <TableCell style={{minWidth: '5px'}}>{page * max + (rowIndex + 1)}</TableCell>
                                        {columns.map((column, index) => (
                                            <TableCell
                                                key={index}>{handleOnGetColumnDataFormat(rows[rowIndex], column)}</TableCell>
                                        ))}
                                        <TableCell style={{maxWidth: '2px'}}>
                                            <Tooltip title='Edit' arrow>
                                                <IconButton aria-label="edit" color='primary'
                                                            onClick={() => onEdit(row['id'])}>
                                                    <EditOutlined sx={{fontSize: '15px', padding: '15px'}}/>
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                        <TableCell style={{maxWidth: '2px'}}>
                                            <Tooltip title='View' arrow>
                                                <IconButton color='primary'
                                                            onClick={() => handleOnRetrieveItem(row['id'])}>
                                                    <InfoOutlined sx={{fontSize: '15px', padding: '15px'}}/>
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                        <TableFooter>
                            <TableRow sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TablePagination
                                    rowsPerPageOptions={[5, 10, 25, 50, {label: 'All', value: -1}]}
                                    colSpan={3}
                                    count={total}
                                    rowsPerPage={max}
                                    page={page}
                                    SelectProps={{
                                        inputProps: {
                                            'aria-label': 'rows per page'
                                        },
                                        native: true
                                    }}
                                    onPageChange={(e, number) => {
                                        // console.log('the final sample: ', number);
                                        setPage(parseInt(number));
                                    }}
                                    onRowsPerPageChange={(e) => {
                                        // console.log('rpp change: ', e.target.value);
                                        setMax(parseInt(e.target.value));
                                        setPage(0);
                                    }}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Card>
        </>
    );
};

export default GenericTable;
