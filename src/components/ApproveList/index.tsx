import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import moment from 'moment';
import { TableHead } from '@mui/material';
import "./style.scss"
import { CheckCircleOutline, DoDisturb, TaskAltSharp } from '@mui/icons-material';

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function createData(id: number, creator: string, approver: string, date: Date, status: boolean) {
    return { id, creator, approver, date, status };
}

function createData2(id: number, creator: string, approver: string, date: Date) {
    return { id, creator, approver, date };
}

const rows1 = [
    createData(1, 'John', 'Alice', new Date(2024, 3, 1), true),
    createData(2, 'Alice', 'Bob', new Date(2024, 2, 28), false),
    createData(3, 'Emma', 'John', new Date(2024, 3, 2), true),
    createData(4, 'Bob', 'Emma', new Date(2024, 2, 30), true),
    createData(5, 'Sarah', 'Alice', new Date(2024, 2, 25), false),
    createData(6, 'Alice', 'John', new Date(2024, 3, 3), true),
].sort((a, b) => a.date.getTime() - b.date.getTime());

const rows2 = [
    createData2(1, 'John', 'Alice', new Date(2024, 3, 1)),
    createData2(2, 'Alice', 'Bob', new Date(2024, 2, 28)),
    createData2(3, 'Emma', 'John', new Date(2024, 3, 2)),
    createData2(4, 'Bob', 'Emma', new Date(2024, 2, 30)),
    createData2(5, 'Sarah', 'Alice', new Date(2024, 2, 25)),
    createData2(6, 'Alice', 'John', new Date(2024, 3, 3)),
].sort((a, b) => a.date.getTime() - b.date.getTime());

const ApproveList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [isComplete, setIsCompleted] = React.useState(true)

    const emptyRows1 =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows1.length) : 0;


    const emptyRows2 =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows2.length) : 0;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            <div className="request-approve-switch">
                <span onClick={() => setIsCompleted(true)} className={`incompleted-approve ${!isComplete ? "isClicked" : ""}`}>Đã duyệt</span>
                <span onClick={() => setIsCompleted(false)} className={`completed-approve ${isComplete ? "isClicked" : ""}`}>Chưa duyệt</span>
            </div>
            {
                isComplete ? (
                    <TableContainer component={Paper}>
                        <Table aria-label="custom pagination table">
                            <TableHead>
                                <TableRow sx={{ 'th': { border: 1 } }}>
                                    <TableCell component="th" >
                                        Người tạo
                                    </TableCell>
                                    <TableCell component="th" >
                                        Người duyệt
                                    </TableCell>
                                    <TableCell align="center">
                                        Ngày
                                    </TableCell>
                                    <TableCell align="center">
                                        Trạng thái
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows1.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows1
                                ).map((row) => (
                                    <TableRow key={row.id} sx={{ 'td': { border: 1 } }}>
                                        <TableCell >
                                            {row.creator}
                                        </TableCell>
                                        <TableCell>
                                            {row.approver}
                                        </TableCell>
                                        <TableCell align="center">
                                            {moment(row.date).format('DD-MM-YYYY')}
                                        </TableCell>
                                        <TableCell align="center">
                                            {
                                                row.status ?
                                                    <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: "#99FFFF", padding: "6px 12px", width: "130px", margin: "auto", cursor: 'pointer' }}> <CheckCircleOutline /> Chấp nhận</div>
                                                    : <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: "#FF9999", padding: "6px 12px", width: "130px", margin: "auto", cursor: 'pointer' }}> <DoDisturb /> Từ chối</div>
                                            }
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {emptyRows1 > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows1 }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={rows1.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                inputProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                ) : (
                    <TableContainer component={Paper}>
                        <Table aria-label="custom pagination table">
                            <TableHead>
                                <TableRow sx={{ 'th': { border: 1 } }}>
                                    <TableCell component="th" >
                                        Người tạo
                                    </TableCell>
                                    <TableCell component="th" >
                                        Người duyệt
                                    </TableCell>
                                    <TableCell align="center">
                                        Ngày
                                    </TableCell>
                                    <TableCell align="center">
                                        Hành động
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows2.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows2
                                ).map((row) => (
                                    <TableRow key={row.id} sx={{ 'td': { border: 1 } }}>
                                        <TableCell >
                                            {row.creator}
                                        </TableCell>
                                        <TableCell>
                                            {row.approver}
                                        </TableCell>
                                        <TableCell align="center">
                                            {moment(row.date).format('DD-MM-YYYY')}
                                        </TableCell>
                                        <TableCell align="center">
                                            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: "#E2BFB3", padding: "6px 12px", width: "130px", margin: "auto", cursor: 'pointer' }}> <TaskAltSharp /> Phê duyệt</div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {emptyRows2 > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows2 }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={rows2.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        slotProps={{
                                            select: {
                                                inputProps: {
                                                    'aria-label': 'rows per page',
                                                },
                                                native: true,
                                            },
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                )
            }
        </div>
    );
}

export default ApproveList;