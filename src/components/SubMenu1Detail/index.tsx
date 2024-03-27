import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import './style.scss'
import { Add, Remove } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

interface Row1 {
    stt: number | null;
    thietBiDayHoc: string;
    soLuong: number | null;
    baiThiNghiem: string;
    ghiChu: string;
}
interface Row2 {
    stt: number | null;
    tenPhong: string;
    soLuong: number | null;
    phamViNoiDung: string;
    ghiChu: string;
}

interface Row3 {
    stt: number | null;
    baiHoc: string;
    soTiet: number | null;
    yeuCau: string;
}

interface Row4 {
    stt: number | null;
    chuyenDe: string;
    soTiet: number | null;
    yeuCau: string;
}


const SubMenu1Detail = () => {
    const location = useLocation()
    const [rows1, setRows1] = useState<Row1[]>([{ stt: null, thietBiDayHoc: '', soLuong: null, baiThiNghiem: '', ghiChu: '' }]);
    const [rows2, setRows2] = useState<Row2[]>([{ stt: null, tenPhong: '', soLuong: null, phamViNoiDung: '', ghiChu: '' }]);
    const [rows3, setRows3] = useState<Row3[]>([{ stt: null, baiHoc: '', soTiet: null, yeuCau: '' }]);
    const [rows4, setRows4] = useState<Row4[]>([{ stt: null, chuyenDe: '', soTiet: null, yeuCau: '' }]);
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const docs = [{ uri: require("./phuluc1.pdf") }]

    const handleAddRow1 = () => {
        const newRow = {
            stt: null,
            thietBiDayHoc: '',
            soLuong: null,
            baiThiNghiem: '',
            ghiChu: ''
        };
        setRows1([...rows1, newRow]);
    };
    const handleAddRow2 = () => {
        const newRow = {
            stt: null,
            tenPhong: '',
            soLuong: null,
            phamViNoiDung: '',
            ghiChu: ''
        };
        setRows2([...rows2, newRow]);
    };
    const handleAddRow3 = () => {
        const newRow = {
            stt: null,
            baiHoc: '',
            soTiet: null,
            yeuCau: '',
        };
        setRows3([...rows3, newRow]);
    };
    const handleAddRow4 = () => {
        const newRow = {
            stt: null,
            chuyenDe: '',
            soTiet: null,
            yeuCau: '',
        };
        setRows4([...rows4, newRow]);
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

    const handleRemoveRow3 = () => {
        if (rows1.length > 1) {
            const updatedRows = [...rows3];
            updatedRows.pop();
            setRows3(updatedRows);
        }
    };

    const handleRemoveRow4 = () => {
        if (rows1.length > 1) {
            const updatedRows = [...rows4];
            updatedRows.pop();
            setRows4(updatedRows);
        }
    };
    return (
        <div className='sub-menu-container'>
            {
                location.pathname?.includes("edit") ?
                    <div>
                        <div className='sub-menu-content'>
                            <div className="sub-menu-content-header">
                                <strong className='phu-luc'>Phụ lục I</strong>
                                <div className="sub-menu-content-header-title">
                                    <strong className="sub-menu-content-header-title-main">
                                        KHUNG KẾ HOẠCH DẠY HỌC MÔN HỌC CỦA TỔ CHUYÊN MÔN
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
                                <div><strong>KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN</strong></div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div><strong>MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC</strong><input type="text" placeholder='..............' style={{ width: "50px" }} /></div>
                                    <div><strong>, KHỐI LỚP</strong><input type="number" placeholder='...........' style={{ width: "50px" }} /></div>
                                </div>
                                <div>(Năm học 20<input type="text" placeholder='...........' style={{ width: "15px" }} /> - 20<input type="text" placeholder='...........' style={{ width: "15px" }} />)</div>
                            </div>

                            <div className='sub-menu-content-main'>
                                <div className="sub-menu-content-main-feature">
                                    <div className="sub-menu-content-main-feature-item-last">
                                        <div><strong>I. Đặc điểm tình hình</strong></div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-item">
                                        <div><strong>1. Số lớp: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                        <div><strong>Số học sinh: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                        <div><strong>Số học sinh học chuyên để lựa chọn</strong>(nếu có)<input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-item">
                                        <div><strong>2. Tình hình đội ngũ: </strong></div>
                                        <div><strong>Số giáo viên: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                        <div style={{ display: "flex" }}>
                                            <strong>Trình độ đào tạo:</strong>
                                            <div style={{ marginLeft: "6px" }}><strong>Cao đẳng: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                            <div><strong>; Đại học: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                            <div><strong>; Trên đại học: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                        </div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-item" style={{ justifyContent: "flex-end" }}>
                                        <div><strong>Mức độ đạt chuẩn nghề nghiệp giáo viên:  </strong></div>
                                        <div style={{ display: "flex" }}>
                                            <div>Tốt: <input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                            <div>; Khá: <input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                            <div>; Chưa đạt: <input type="number" placeholder='..............' style={{ width: "50px" }} /></div>
                                        </div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-table">
                                        <div><strong>3. Thiết bị dạy học </strong> (Trình bày cụ thể các thiết bị dạy học có thể sử dụng để tổ chức dạy học môn học/hoạt động giáo dục)</div>
                                        <TableContainer component={Paper} className="table-list-sub-menu">
                                            <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow sx={{ 'th': { border: 1 } }}>
                                                        <TableCell align="center">STT</TableCell>
                                                        <TableCell align="center">Thiết bị dạy học</TableCell>
                                                        <TableCell align="center">Số lượng</TableCell>
                                                        <TableCell align="center">Các bài thí nghiệm thực hành</TableCell>
                                                        <TableCell align="center">Ghi chú</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows1.map((row, index) => (
                                                        <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                            <TableCell align="center">{index + 1}</TableCell>
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
                                                                    value={row.soLuong ?? ''}
                                                                    onChange={(e) => {
                                                                        const newValue = parseInt(e.target.value);
                                                                        const updatedRows = [...rows1];
                                                                        updatedRows[index].soLuong = newValue;
                                                                        setRows1(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.baiThiNghiem}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows1];
                                                                        updatedRows[index].baiThiNghiem = newValue;
                                                                        setRows1(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.ghiChu}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows1];
                                                                        updatedRows[index].ghiChu = newValue;
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
                                    <div className="sub-menu-content-main-feature-table">
                                        <div><strong>4. Phòng học bộ môn/phòng thí nghiệm/phòng đa năng/sân chơi, bài tập</strong> (Trình bày cụ thể các phòng thí nghiệm/phòng bộ môn/phòng đa năng/sân chơi/bãi tập có thể sử dụng để tổ chức dạy học môn học/hoạt động giáo dục)</div>
                                        <TableContainer component={Paper} className="table-list-sub-menu">
                                            <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow sx={{ 'th': { border: 1 } }}>
                                                        <TableCell align="center">STT</TableCell>
                                                        <TableCell align="center">Thiết bị dạy học</TableCell>
                                                        <TableCell align="center">Số lượng</TableCell>
                                                        <TableCell align="center">Các bài thí nghiệm thực hành</TableCell>
                                                        <TableCell align="center">Ghi chú</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows2.map((row, index) => (
                                                        <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                            <TableCell align="center">{index + 1}</TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.tenPhong}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows2];
                                                                        updatedRows[index].tenPhong = newValue;
                                                                        setRows2(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.soLuong ?? ''}
                                                                    onChange={(e) => {
                                                                        const newValue = parseInt(e.target.value);
                                                                        const updatedRows = [...rows2];
                                                                        updatedRows[index].soLuong = newValue;
                                                                        setRows2(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.phamViNoiDung}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows2];
                                                                        updatedRows[index].phamViNoiDung = newValue;
                                                                        setRows2(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.ghiChu}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows2];
                                                                        updatedRows[index].ghiChu = newValue;
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

                                <div className="sub-menu-content-main-feature">
                                    <div className="sub-menu-content-main-feature-item-last">
                                        <div><strong>II. Kế hoạch dạy học</strong></div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-table">
                                        <div><strong>1. Phân phối chương trình </strong></div>
                                        <TableContainer component={Paper} className="table-list-sub-menu">
                                            <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow sx={{ 'th': { border: 1 } }}>
                                                        <TableCell align="center">STT</TableCell>
                                                        <TableCell align="center">Bài học</TableCell>
                                                        <TableCell align="center">Số tiết</TableCell>
                                                        <TableCell align="center">Yêu cầu cần đạt</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows3.map((row, index) => (
                                                        <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                            <TableCell align="center">{index + 1}</TableCell>
                                                            <TableCell align="center">
                                                                <textarea name="" id="" style={{ width: "100%", border: 0 }}></textarea>
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.soTiet ?? ''}
                                                                    onChange={(e) => {
                                                                        const newValue = parseInt(e.target.value);
                                                                        const updatedRows = [...rows3];
                                                                        updatedRows[index].soTiet = newValue;
                                                                        setRows3(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.yeuCau}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows3];
                                                                        updatedRows[index].yeuCau = newValue;
                                                                        setRows3(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <div className='add-row-button'>
                                            <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddRow3} />
                                            <Remove style={{ color: "black" }} className='add-row-icon' onClick={handleRemoveRow3} />
                                        </div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-table">
                                        <div><strong>2. Chuyên đề lựa chọn (đối với cấp trung học phổ thông)</strong></div>
                                        <TableContainer component={Paper} className="table-list-sub-menu">
                                            <Table sx={{ minWidth: 450, fontSize: '12px', border: 1 }} aria-label="simple table" >
                                                <TableHead>
                                                    <TableRow sx={{ 'th': { border: 1 } }}>
                                                        <TableCell align="center">STT</TableCell>
                                                        <TableCell align="center">Chuyên đề</TableCell>
                                                        <TableCell align="center">Số tiết</TableCell>
                                                        <TableCell align="center">Yêu cầu cần đạt</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows4.map((row, index) => (
                                                        <TableRow key={index} sx={{ 'td': { border: 1 } }}>
                                                            <TableCell align="center">{index + 1}</TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.chuyenDe}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows4];
                                                                        updatedRows[index].chuyenDe = newValue;
                                                                        setRows4(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.soTiet ?? ''}
                                                                    onChange={(e) => {
                                                                        const newValue = parseInt(e.target.value);
                                                                        const updatedRows = [...rows4];
                                                                        updatedRows[index].soTiet = newValue;
                                                                        setRows4(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                            <TableCell align="center">
                                                                <textarea
                                                                    value={row.yeuCau}
                                                                    onChange={(e) => {
                                                                        const newValue = e.target.value;
                                                                        const updatedRows = [...rows4];
                                                                        updatedRows[index].yeuCau = newValue;
                                                                        setRows4(updatedRows);
                                                                    }}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <div className='add-row-button'>
                                            <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddRow4} />
                                            <Remove style={{ color: "black" }} className='add-row-icon' onClick={handleRemoveRow4} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sub-menu-content-action">
                            <Button onClick={handleClickOpen} >Xác nhận xét duyệt</Button>
                        </div>
                    </div> : <>
                        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
                            config={{
                                header: {
                                    disableHeader: true,
                                    disableFileName: true,
                                    retainURLParams: true,
                                },
                                pdfVerticalScrollByDefault: true,
                            }}
                        />
                        <div className="sub-menu-infomation">
                            <div className="sub-menu-row">
                                <div><i>(Tài liệu chưa được thẩm định)</i></div>
                                <div className='right-action'><strong><u className='underline-blue'>Nhấn vào đây để tải về</u></strong></div>
                            </div>
                            <div className="sub-menu-row">
                                <div><strong>Nguồn: </strong> https://baigiang.violet.vn</div>
                                <div className='right-action'><strong><u className='underline-blue'>Báo tài liệu có sai sót</u></strong></div>
                            </div>
                            <div className="sub-menu-row">
                                <div><strong>Người gửi: </strong> <u className='underline-blue'>Sam Dung</u></div>
                                <div className='right-action'><strong><u className='underline-blue'>Nhắn tin cho tác giả</u></strong></div>
                            </div>
                            <div className="sub-menu-row">
                                <div><strong>Ngày gửi: </strong> 10h:34' 14-01-2024</div>
                                <div className='right-action'>
                                    <div className='share-facebook'>
                                        <img src="/facebook-circle-svgrepo-com.svg" alt="SVG" />
                                        <span>Chia sẻ</span>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-menu-row">
                                <div><strong>Dung lượng: </strong> 19/9 KB</div>
                                <div className='right-action'></div>
                            </div>
                            <div className="sub-menu-row">
                                <div><strong>Số lượt tải: </strong>25</div>
                                <div className='right-action'></div>
                            </div>
                            <div className="sub-menu-row">
                                <div><strong>Số lượt thích: </strong> 0 người</div>
                                <div className='right-action'></div>
                            </div>
                        </div>
                        <div>
                            <div className="sub-menu-action">
                                <div className="verify">
                                    <span>Tình trạng thẩm định:</span>
                                    <div style={{ display: "flex", columnGap: "10px" }}>
                                        <div className='action-button'>Chấp thuận</div>
                                        <div className='action-button'>Từ chối</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-menu-note">
                                Ghi chú <br />
                                <textarea name="" id="" rows={8} ></textarea>
                            </div>
                        </div>
                    </>
            }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center", fontWeight: 600 }}>
                    Bạn có chắc chắn không
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ textAlign: "center", fontWeight: 600 }}>
                        Bạn có chắc muốn đưa phụ lục này vào xét duyệt
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleClose} style={{ color: "#000", fontWeight: 600 }} >Hủy bỏ</Button>
                    <Button onClick={handleClose} className='button-mui' autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default SubMenu1Detail