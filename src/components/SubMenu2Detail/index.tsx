import React, { useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import './style.scss'
import { Add } from '@mui/icons-material';

interface Row {
    stt: number | null;
    chuDe: string;
    yeuCau: string;
    soTiet: number | null;
    thoiDiem: string;
    chuTri: string;
    phoiHop: string;
    dieuKien: string;
}

const SubMenu2Detail = () => {
    const [rows1, setRows1] = useState<Row[]>([{ stt: null, chuDe: '', yeuCau: '', soTiet: null, thoiDiem: '', chuTri: '', phoiHop: '', dieuKien: '' }]);
    const [rows2, setRows2] = useState<Row[]>([{ stt: null, chuDe: '', yeuCau: '', soTiet: null, thoiDiem: '', chuTri: '', phoiHop: '', dieuKien: '' }]);
    const handleAddRow1 = () => {
        const newRow = {
            stt: null,
            chuDe: '',
            yeuCau: '',
            soTiet: null,
            thoiDiem: '',
            chuTri: '',
            phoiHop: '',
            dieuKien: ''
        };
        setRows1([...rows1, newRow]);
    };
    const handleAddRow2 = () => {
        const newRow = {
            stt: null,
            chuDe: '',
            yeuCau: '',
            soTiet: null,
            thoiDiem: '',
            chuTri: '',
            phoiHop: '',
            dieuKien: ''
        };
        setRows2([...rows2, newRow]);
    };
    return (
        <div className='sub-menu-container'>
            <div className='sub-menu-content'>
                <div className="sub-menu-content-header">
                    <strong className='phu-luc'>Phụ lục II</strong>
                    <div className="sub-menu-content-header-title">
                        <strong className="sub-menu-content-header-title-main">
                            KHUNG KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN
                        </strong>
                        <div className="sub-menu-content-header-title-sub">
                            <i>(Kèm theo Công văn số 5512/BGDĐT-GDTrH ngày 18 tháng 12 năm 2020 của Bộ GDĐT)</i>
                        </div>
                    </div>
                    <div className="sub-menu-content-header-infomation">
                        <div className='sub-menu-content-header-infomation-detail' >
                            <div style={{ display: "flex" }}> <div><strong>TRƯỜNG: </strong><input type="text" placeholder='...........' /></div></div>
                            <div style={{ display: "flex" }}> <div><strong>TỔ: </strong><input type="text" placeholder='...........' /></div></div>
                        </div>
                        <div className='sub-menu-content-header-infomation-slogan'>
                            <div> <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong></div>
                            <div> <strong>Độc lập - Tự do - Hạnh phúc</strong></div>
                        </div>
                    </div>
                </div>

                <div className="sub-menu-content-title">
                    <div><strong>KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN</strong></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div><strong>MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC</strong><input type="text" placeholder='..............' style={{ width: "50px" }} /></div>
                        <div><strong>, KHỐI LỚP</strong><input type="number" placeholder='...........' style={{ width: "50px" }} /></div>
                    </div>
                    <div>(Năm học 20<input type="text" placeholder='...........' style={{ width: "15x" }} /> - 20<input type="text" placeholder='...........' style={{ width: "15px" }} />)</div>
                </div>

                <div className='sub-menu-content-main'>
                    <div className="sub-menu-content-main-feature">
                        <div className="sub-menu-content-main-feature-item">
                            <div><strong>1. Khối lớp: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                            <div><strong>Số học sinh: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                        </div>
                        <div className="sub-menu-content-main-feature-table">
                            <TableContainer component={Paper} className="table-list-sub-menu">
                                <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow sx={{ 'th': { border: 1 } }}>
                                            <TableCell align="center">STT</TableCell>
                                            <TableCell align="center">Chủ đề</TableCell>
                                            <TableCell align="center">Yêu cầu cần đạt</TableCell>
                                            <TableCell align="center">Số tiết</TableCell>
                                            <TableCell align="center">Thời điểm</TableCell>
                                            <TableCell align="center">Địa điểm</TableCell>
                                            <TableCell align="center">Chủ trì</TableCell>
                                            <TableCell align="center">Phối hợp</TableCell>
                                            <TableCell align="center">Điều kiện thực hiên</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows1.map((row, index) => (
                                            <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.chuDe}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].chuDe = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="number"
                                                        value={row.yeuCau ?? null}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].yeuCau = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.soTiet ?? ''}
                                                        onChange={(e) => {
                                                            const newValue = parseInt(e.target.value);
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].soTiet = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.thoiDiem}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].thoiDiem = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.chuTri}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].chuTri = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.phoiHop}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].phoiHop = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.dieuKien}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].dieuKien = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='add-row-button'>
                                <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddRow1} />
                            </div>
                        </div>

                    </div>
                    <div className="sub-menu-content-main-feature">
                        <div className="sub-menu-content-main-feature-item">
                            <div><strong>1. Khối lớp: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                            <div><strong>Số học sinh: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                        </div>
                        <div className="sub-menu-content-main-feature-table">
                            <TableContainer component={Paper} className="table-list-sub-menu">
                                <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow sx={{ 'th': { border: 1 } }}>
                                            <TableCell align="center">STT</TableCell>
                                            <TableCell align="center">Chủ đề</TableCell>
                                            <TableCell align="center">Yêu cầu cần đạt</TableCell>
                                            <TableCell align="center">Số tiết</TableCell>
                                            <TableCell align="center">Thời điểm</TableCell>
                                            <TableCell align="center">Địa điểm</TableCell>
                                            <TableCell align="center">Chủ trì</TableCell>
                                            <TableCell align="center">Phối hợp</TableCell>
                                            <TableCell align="center">Điều kiện thực hiên</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows2.map((row, index) => (
                                            <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.chuDe}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].chuDe = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="number"
                                                        value={row.yeuCau ?? null}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].yeuCau = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.soTiet ?? ''}
                                                        onChange={(e) => {
                                                            const newValue = parseInt(e.target.value);
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].soTiet = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.thoiDiem}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].thoiDiem = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.chuTri}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].chuTri = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.phoiHop}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].phoiHop = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <input
                                                        type="text"
                                                        value={row.dieuKien}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].dieuKien = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className='add-row-button'>
                                <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddRow2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SubMenu2Detail