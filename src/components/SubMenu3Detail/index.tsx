import React, { useState } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import './style.scss'
import { Add, Remove } from '@mui/icons-material';

interface Row {
    stt: number | null;
    baiHoc: string;
    soTiet: number | null;
    thietBiDayHoc: string;
    thoiDiem: string;
    diaDiem: string;
}

const SubMenu3Detail = () => {
    const [rows1, setRows1] = useState<Row[]>([{ stt: null, baiHoc: '', thietBiDayHoc: '', soTiet: null, thoiDiem: '', diaDiem: '' }]);
    const [rows2, setRows2] = useState<Row[]>([{ stt: null, baiHoc: '', thietBiDayHoc: '', soTiet: null, thoiDiem: '', diaDiem: '' }]);
    const handleAddRow1 = () => {
        const newRow = {
            stt: null,
            baiHoc: '',
            thietBiDayHoc: '',
            soTiet: null,
            thoiDiem: '',
            diaDiem: ''
        };
        setRows1([...rows1, newRow]);
    };

    const handleAddRow2 = () => {
        const newRow = {
            stt: null,
            baiHoc: '',
            thietBiDayHoc: '',
            soTiet: null,
            thoiDiem: '',
            diaDiem: ''
        };
        setRows2([...rows2, newRow]);
    };

    const handleRemoveRow1 = () => {
        if (rows1.length > 1) {
            const updatedRows = [...rows1];
            updatedRows.pop();
            setRows1(updatedRows);
        }
    };

    const handleRemoveRow2 = () => {
        if (rows2.length > 1) {
            const updatedRows = [...rows2];
            updatedRows.pop();
            setRows2(updatedRows);
        }
    };
    return (
        <div className='sub-menu-container'>
            <div className='sub-menu-content'>
                <div className="sub-menu-content-header">
                    <strong className='phu-luc'>Phụ lục III</strong>
                    <div className="sub-menu-content-header-title">
                        <strong className="sub-menu-content-header-title-main">
                            KHUNG KẾ HOẠCH DẠY HỌC MÔN HỌC CỦA GIÁO VIÊN
                        </strong>
                        <div className="sub-menu-content-header-title-sub">
                            <i>(Kèm theo Công văn số 5512/BGDĐT-GDTrH ngày 18 tháng 12 năm 2020 của Bộ GDĐT)</i>
                        </div>
                    </div>
                    <div className="sub-menu-content-header-infomation">
                        <div className='sub-menu-content-header-infomation-detail' >
                            <div style={{ display: "flex" }}> <div><strong>TRƯỜNG: </strong><input type="text" placeholder='...........' /></div></div>
                            <div style={{ display: "flex" }}> <div><strong>TỔ: </strong><input type="text" placeholder='...........' /></div></div>
                            <div style={{ display: "flex" }}> <div>Họ và tên giáo viên:<input type="text" placeholder='...........' /></div></div>
                        </div>
                        <div className='sub-menu-content-header-infomation-slogan'>
                            <div> <strong>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</strong></div>
                            <div> <strong>Độc lập - Tự do - Hạnh phúc</strong></div>
                        </div>
                    </div>
                </div>

                <div className="sub-menu-content-title">
                    <div><strong>KẾ HOẠCH DẠY HỌC CỦA GIÁO VIÊN</strong></div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div>
                            <strong>MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC</strong>
                            <input type="text" placeholder='..............' style={{ width: "50px" }} />
                            <strong>, LỚP</strong>
                            <input type="text" placeholder='..............' style={{ width: "50px" }} />
                        </div>
                    </div>
                    <div>(Năm học 20<input type="text" placeholder='...........' style={{ width: "15px" }} /> - 20<input type="text" placeholder='...........' style={{ width: "15px" }} />)</div>
                </div>

                <div className='sub-menu-content-main'>
                    <div className="sub-menu-content-main-feature">
                        <div className="sub-menu-content-main-feature-item">
                            <div><strong>I. Phân phối chương trình</strong></div>
                        </div>
                        <div className="sub-menu-content-main-feature-table">
                            <TableContainer component={Paper} className="table-list-sub-menu">
                                <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow sx={{ 'th': { border: 1 } }}>
                                            <TableCell align="center">STT</TableCell>
                                            <TableCell align="center">Bài học <br />(1)</TableCell>
                                            <TableCell align="center">Số tiết <br />(2)</TableCell>
                                            <TableCell align="center">Thời điểm <br />(3)</TableCell>
                                            <TableCell align="center">Thiết bị dạy học <br />(4)</TableCell>
                                            <TableCell align="center">Địa điểm dạy học<br />(5)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows1.map((row, index) => (
                                            <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">
                                                    <textarea
                                                        value={row.baiHoc}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].baiHoc = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <textarea
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
                                                    <textarea
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
                                                    <textarea
                                                        value={row.thietBiDayHoc}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].thietBiDayHoc = newValue;
                                                            setRows1(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <textarea
                                                        value={row.diaDiem}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows1];
                                                            updatedRows[index].diaDiem = newValue;
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
                                <Remove style={{ color: "black" }} className='add-row-icon' onClick={handleRemoveRow1} />
                            </div>
                        </div>
                    </div>

                    <div className="sub-menu-content-main-feature">
                        <div className="sub-menu-content-main-feature-item">
                            <div><strong>2. Chuyên đề lựa chọn</strong>(đối với cấp trung học phổ thông)</div>
                        </div>
                        <div className="sub-menu-content-main-feature-table">
                            <TableContainer component={Paper} className="table-list-sub-menu">
                                <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                    <TableHead>
                                        <TableRow sx={{ 'th': { border: 1 } }}>
                                            <TableCell align="center">STT</TableCell>
                                            <TableCell align="center">Bài học <br />(1)</TableCell>
                                            <TableCell align="center">Số tiết <br />(2)</TableCell>
                                            <TableCell align="center">Thời điểm <br />(3)</TableCell>
                                            <TableCell align="center">Thiết bị dạy học <br />(4)</TableCell>
                                            <TableCell align="center">Địa điểm dạy học<br />(5)</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows2.map((row, index) => (
                                            <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                <TableCell align="center">{index + 1}</TableCell>
                                                <TableCell align="center">
                                                    <textarea
                                                        value={row.baiHoc}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows2];
                                                            updatedRows[index].baiHoc = newValue;
                                                            setRows2(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <textarea
                                                        value={row.soTiet ?? ''}
                                                        onChange={(e) => {
                                                            const newValue = parseInt(e.target.value);
                                                            const updatedRows = [...rows2];
                                                            updatedRows[index].soTiet = newValue;
                                                            setRows2(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <textarea
                                                        value={row.thoiDiem}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows2];
                                                            updatedRows[index].thoiDiem = newValue;
                                                            setRows2(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <textarea
                                                        value={row.thietBiDayHoc}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows2];
                                                            updatedRows[index].thietBiDayHoc = newValue;
                                                            setRows2(updatedRows);
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell align="center">
                                                    <textarea
                                                        value={row.diaDiem}
                                                        onChange={(e) => {
                                                            const newValue = e.target.value;
                                                            const updatedRows = [...rows2];
                                                            updatedRows[index].diaDiem = newValue;
                                                            setRows2(updatedRows);
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
                                <Remove style={{ color: "black" }} className='add-row-icon' onClick={handleRemoveRow2} />
                            </div>
                        </div>
                    </div>

                    <div className="sub-menu-content-main-note">
                        <div><i>(1) Tên bài học/chuyên đề được xây dựng từ nội dung/chủ đề (được lấy nguyên hoặc thiết kê lại phù hợp với điều kiện thực
                            tê của nhà trường) theo chương trùnh, sách giáo khoa môn họchoạt động giáo dục. </i></div>
                        <div><i>(2) Số tiết được sử dụng đề thực hiện bài dạy/chuyên đề.</i></div>
                        <div><i>(3) Tuần thực hiện bài học/chuyên đề.</i></div>
                        <div><i>(4) Thiết bị dạy học được sử dụng để tổ chức dạy học.</i></div>
                        <div><i>(5) Địa điểm tổ chức hoạt động dạy học (lớp học, phòng học bộ môn, phòng đa năng, bãi tập, tại di sản, thực địa...).</i></div>
                    </div>

                    <div className="sub-menu-content-main-feature">
                        <div className="sub-menu-content-main-feature-item"><strong>II. Nhiệm vụ khác (nếu có)</strong>(Bồi dưỡng học sinh giỏi; Tổ chức hoạt động giáo dục)</div>
                        <div style={{ marginTop: "12px" }}>
                            <textarea
                                style={{ width: "100%", border: 0, lineHeight: "24px" }} rows={5}
                                placeholder="................................................................................................................................................................................................................................................................................................................................................
                                "
                            />
                        </div>
                    </div>
                    <div className="sub-menu-content-main-signature">
                        <div className='to-truong'>
                            <div><strong>TỔ TRƯỞNG</strong></div>
                            <div><i>(Ký và ghi rõ họ tên)</i></div>
                        </div>
                        <div className="hieu-truong">
                            <div>
                                <input type="number" placeholder='...' style={{ width: "15px" }} />
                                , ngày   <input type="number" placeholder='...' style={{ width: "15px" }} />
                                , tháng   <input type="number" placeholder='...' style={{ width: "15px" }} />
                                , năm   <input type="number" placeholder='...' style={{ width: "15px" }} />
                                20   <input type="number" placeholder='...' style={{ width: "15px" }} />
                            </div>
                            <div>
                                <strong>HIỆU TRƯỞNG</strong>
                            </div>
                            <div><i>(Ký và ghi rõ họ tên)</i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SubMenu3Detail