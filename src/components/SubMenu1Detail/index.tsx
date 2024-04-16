/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, MenuItem, Paper, Radio, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import './style.scss'
import { Add, Remove } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import DocViewer, { PDFRenderer } from '@cyntler/react-doc-viewer';
import { useAppSelector } from '../../hook/useTypedSelector';
import { apiDeleteSubMenu1, apiPostSubMenu1 } from '../../api/subMenu1';
import { apiGetGrade } from '../../api/grade';
import { Grade } from '../../models/grade';
import { apiGetSubject } from '../../api/subject';
import { Subject } from '../../models/subject';
import { TeachingEquipment } from '../../models/teachingEquipment';
import { apiGetTeachingEquipment } from '../../api/teachingEquipment';
import { SubjectRoom } from '../../models/SubjectRoom';
import { SelectedTopic } from '../../models/SelectedTopic';
import { CurriculumDistribution } from '../../models/CurriculumDistribution';
import { apiGetSubjectRoom } from '../../api/subjectRoom';
import { apiGetSelectedTopic } from '../../api/selectedTopic';
import { apiGetCurriculumDistribution } from '../../api/curriculumDistribution';

interface Row1 {
    stt: number | null;
    thietBiDayHoc: number | null;
    soLuong: number | null;
    baiThiNghiem: string;
    ghiChu: string;
}
interface Row2 {
    stt: number | null;
    tenPhong: number | null;
    soLuong: number | null;
    phamViNoiDung: string;
    ghiChu: string;
}

interface Row3 {
    stt: number | null;
    baiHoc: number | null;
    soTiet: number | null;
    yeuCau: string;
}

interface Row4 {
    stt: number | null;
    chuyenDe: number | null;
    soTiet: number | null;
    yeuCau: string;
}

interface Row5 {
    stt: number | null;
    thoiGian: Date | null;
    thoiDiem: Date | null;
    yeuCau: string;
    hinhthuc: string;
}

const SubMenu1Detail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const user = useAppSelector(state => state.auth.user)
    const [rows1, setRows1] = useState<Row1[]>([{ stt: null, thietBiDayHoc: null, soLuong: null, baiThiNghiem: '', ghiChu: '' }]);
    const [rows2, setRows2] = useState<Row2[]>([{ stt: null, tenPhong: null, soLuong: null, phamViNoiDung: '', ghiChu: '' }]);
    const [rows3, setRows3] = useState<Row3[]>([{ stt: null, baiHoc: null, soTiet: null, yeuCau: '' }]);
    const [rows4, setRows4] = useState<Row4[]>([{ stt: null, chuyenDe: null, soTiet: null, yeuCau: '' }]);
    const [rows5, setRows5] = useState<Row5[]>([{ stt: null, thoiGian: null, thoiDiem: null, yeuCau: '', hinhthuc: '' }]);
    const [login, setLogin] = useState(false);
    const [open, setOpen] = useState(false);
    const [openAccept, setOpenAccept] = useState(false);
    const [openDeny, setOpenDeny] = useState(false);
    const [openReport, setOpenReport] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);
    const [grades, setGrades] = useState<Grade[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [teachingEquipment, setTeachingEquipment] = useState<TeachingEquipment[]>([]);
    const [subjectRoom, setSubjectRoom] = useState<SubjectRoom[]>([]);
    const [selectedTopic, setSelectedTopic] = useState<SelectedTopic[]>([]);
    const [curriculumDistribution, setCurriculumDistribution] = useState<CurriculumDistribution[]>([]);

    const [truong, setTruong] = useState('');
    const [to, setTo] = useState('');
    const [hoadDong, setHoatDong] = useState('');
    const [khoiLop, setKhoiLop] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
    const [soLop, setSoLop] = useState('');
    const [soHocSinh, setSoHocSinh] = useState('');
    const [soHocSinhChuyenDe, setSoHocSinhChuyenDe] = useState('');
    const [soGiaoVien, setSoGiaoVien] = useState('');
    const [caoDang, setCaoDang] = useState('');
    const [daiHoc, setDaiHoc] = useState('');
    const [trenDaiHoc, setTrenDaiHoc] = useState('');
    const [tot, setTot] = useState('');
    const [kha, setKha] = useState('');
    const [chuaDat, setChuaDat] = useState('');
    const [documentId, setDocumentId] = useState(null);

    useEffect(() => {
        const fetchGrade = async () => {
            const res = await apiGetGrade();
            if (res && res.data) {
                const gradeData: Grade[] = res.data;
                setGrades(gradeData);
            }
        }

        const fetchSubject = async () => {
            const res = await apiGetSubject();
            if (res && res.data) {
                const subjectData: Subject[] = res.data;
                setSubjects(subjectData);
            }
        }

        const fetchTeachingEquipment = async () => {
            const res = await apiGetTeachingEquipment();
            if (res && res.data) {
                const teachingEquipmentData: TeachingEquipment[] = res.data;
                setTeachingEquipment(teachingEquipmentData);
            }
        }

        const fetchSubjectRoom = async () => {
            const res = await apiGetSubjectRoom();
            if (res && res.data) {
                const subjectRoomData: SubjectRoom[] = res.data;
                setSubjectRoom(subjectRoomData);
            }
        }

        const fetchSelectedTopic = async () => {
            const res = await apiGetSelectedTopic();
            if (res && res.data) {
                const selectedTopicData: SelectedTopic[] = res.data;
                setSelectedTopic(selectedTopicData);
            }
        }

        const fetchCurriculumDistribution = async () => {
            const res = await apiGetCurriculumDistribution();
            if (res && res.data) {
                const curriculumDistributionData: CurriculumDistribution[] = res.data;
                setCurriculumDistribution(curriculumDistributionData);
            }
        }

        fetchGrade();
        fetchSubject();
        fetchTeachingEquipment();
        fetchSelectedTopic();
        fetchSubjectRoom();
        fetchCurriculumDistribution()
    }, []);

    const handleClickOpen = async () => {
        if (khoiLop && user && hoadDong) {
            setOpen(true);
            const post = await apiPostSubMenu1({
                name: "KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC",
                subjectId: hoadDong,
                gradeId: khoiLop,
                userId: user.userId,
                note: "",
                status: true,
                approveByName: ""
            })
            if (post) {
                setDocumentId(post?.data?.id)
            }
        }
        else
            alert("Nhập đầy đủ thông tin!")
    };

    console.log("documentId: ", documentId)
    const handleClose = async () => {
        setOpen(false);
        try {
            const result = await apiDeleteSubMenu1(documentId);
            console.log("result: ", result)
        } catch (error) {
            console.error(error);
        }
    };

    const handleClickOpenAccept = () => {
        setOpenAccept(true);
    };

    const handleCloseAccept = () => {
        setOpenAccept(false);
    };

    const handleClickOpenDeny = () => {
        setOpenDeny(true);
    };

    const handleCloseDeny = () => {
        setOpenDeny(false);
    };

    const handleClickOpenReport = () => {
        setOpenReport(true);
    };

    const handleCloseReport = () => {
        setOpenReport(false);
    };

    const handleClickOpenRemove = () => {
        setOpenRemove(true);
    };

    const handleCloseRemove = () => {
        setOpenRemove(false);
    };

    const handleClickSave = () => {
        navigate(`/sub-menu-1/detail-edit/${location.pathname.split('/')[1].split('-')[2]}`)
    };

    const docs = useMemo(() => [
        { uri: require("./phuluc1.pdf") },
    ], []);

    const handleAddRow1 = () => {
        const newRow = {
            stt: null,
            thietBiDayHoc: null,
            soLuong: null,
            baiThiNghiem: '',
            ghiChu: ''
        };
        setRows1([...rows1, newRow]);
    };
    const handleAddRow2 = () => {
        const newRow = {
            stt: null,
            tenPhong: null,
            soLuong: null,
            phamViNoiDung: '',
            ghiChu: ''
        };
        setRows2([...rows2, newRow]);
    };
    const handleAddRow3 = () => {
        const newRow = {
            stt: null,
            baiHoc: null,
            soTiet: null,
            yeuCau: '',
        };
        setRows3([...rows3, newRow]);
    };
    const handleAddRow4 = () => {
        const newRow = {
            stt: null,
            chuyenDe: null,
            soTiet: null,
            yeuCau: '',
        };
        setRows4([...rows4, newRow]);
    };
    const handleAddRow5 = () => {
        const newRow = {
            stt: null,
            thoiGian: null,
            thoiDiem: null,
            yeuCau: '',
            hinhthuc: ''
        };
        setRows5([...rows5, newRow]);
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
        if (rows3.length > 1) {
            const updatedRows = [...rows3];
            updatedRows.pop();
            setRows3(updatedRows);
        }
    };

    const handleRemoveRow4 = () => {
        if (rows3.length > 1) {
            const updatedRows = [...rows4];
            updatedRows.pop();
            setRows4(updatedRows);
        }
    };

    const handleRemoveRow5 = () => {
        if (rows5.length > 1) {
            const updatedRows = [...rows5];
            updatedRows.pop();
            setRows5(updatedRows);
        }
    };

    const displayRow1 = () => {
        setOpen(false)
    }
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
                                        <div style={{ display: "flex" }}> <div><strong>TRƯỜNG: </strong><input type="text" placeholder='...........' onChange={e => setTruong(e.target.value)} /></div></div>
                                        <div style={{ display: "flex" }}> <div><strong>TỔ: </strong><input type="text" placeholder='...........' onChange={e => setTo(e.target.value)} /></div></div>
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
                                    <div><strong>MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC</strong>
                                        <select id="grades" style={{ width: "120px", marginLeft: "4px" }}
                                            onChange={(e) => setHoatDong(e.target.value)}
                                            defaultValue={''}
                                        >
                                            <option value="" disabled>Chọn môn học</option>
                                            {
                                                subjects?.map((item) => (
                                                    <option value={item?.id}>{item?.name}</option>
                                                ))
                                            }
                                        </select>

                                        {/* <input type="text" placeholder='..............' style={{ width: "50px" }} onChange={e => setHoatDong(e.target.value)} /> */}
                                    </div>
                                    <div><strong>, KHỐI LỚP</strong>
                                        <select id="grades" style={{ width: "70px", marginLeft: "4px" }}
                                            onChange={(e) => setKhoiLop(e.target.value)}
                                            defaultValue={''}
                                        >
                                            <option value="" disabled>Chọn lớp</option>
                                            {
                                                grades?.map((item) => (
                                                    <option value={item?.id}>{item?.name}</option>
                                                ))
                                            }
                                        </select>
                                        {/* <input type="number" placeholder='...........' style={{ width: "50px" }} onChange={e => setKhoiLop(e.target.value)} /> */}
                                    </div>
                                </div>
                                <div>(Năm học 2023 - 2024)</div>
                            </div>

                            <div className='sub-menu-content-main'>
                                <div className="sub-menu-content-main-feature">
                                    <div className="sub-menu-content-main-feature-item-last">
                                        <div><strong>I. Đặc điểm tình hình</strong></div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-item">
                                        <div><strong>1. Số lớp: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setSoLop(e.target.value)} /></div>
                                        <div><strong>Số học sinh: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setSoHocSinh(e.target.value)} /></div>
                                        <div><strong>Số học sinh học chuyên để lựa chọn</strong>(nếu có)<input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setSoHocSinhChuyenDe(e.target.value)} /></div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-item">
                                        <div><strong>2. Tình hình đội ngũ: </strong></div>
                                        <div><strong>Số giáo viên: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setSoGiaoVien(e.target.value)} /></div>
                                        <div style={{ display: "flex" }}>
                                            <strong>Trình độ đào tạo:</strong>
                                            <div style={{ marginLeft: "6px" }}><strong>Cao đẳng: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setCaoDang(e.target.value)} /></div>
                                            <div><strong>; Đại học: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setDaiHoc(e.target.value)} /></div>
                                            <div><strong>; Trên đại học: </strong><input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setTrenDaiHoc(e.target.value)} /></div>
                                        </div>
                                    </div>
                                    <div className="sub-menu-content-main-feature-item" style={{ justifyContent: "flex-end" }}>
                                        <div><strong>Mức độ đạt chuẩn nghề nghiệp giáo viên:  </strong></div>
                                        <div style={{ display: "flex" }}>
                                            <div>Tốt: <input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setTot(e.target.value)} /></div>
                                            <div>; Khá: <input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setKha(e.target.value)} /></div>
                                            <div>; Chưa đạt: <input type="number" placeholder='..............' style={{ width: "50px" }} onChange={e => setChuaDat(e.target.value)} /></div>
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
                                                                <select id="teachingEquipment" style={{ width: "150px", height: "40px", marginLeft: "4px" }}
                                                                    defaultValue={''}>
                                                                    <option value="" disabled>Chọn lớp</option>
                                                                    {
                                                                        teachingEquipment?.map((item) => (
                                                                            <option value={item?.id}>{item?.name}</option>
                                                                        ))
                                                                    }
                                                                </select>
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
                                                        <TableCell align="center">Tên phòng</TableCell>
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
                                                                <select id="teachingEquipment" style={{ width: "150px", height: "40px", marginLeft: "4px" }} defaultValue={''}>
                                                                    <option value="" disabled>Chọn phòng học</option>
                                                                    {
                                                                        subjectRoom?.map((item) => (
                                                                            <option value={item?.id}>{item?.name}</option>
                                                                        ))
                                                                    }
                                                                </select>
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
                                                                <select id="teachingEquipment" style={{ width: "210px", height: "40px", marginLeft: "4px" }} defaultValue={''}>
                                                                    <option value="" disabled>Chọn phân phối chương trình</option>
                                                                    {
                                                                        curriculumDistribution?.map((item) => (
                                                                            <option value={item?.id}>{item?.name}</option>
                                                                        ))
                                                                    }
                                                                </select>
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
                                                                <select id="teachingEquipment" style={{ width: "150px", height: "40px", marginLeft: "4px" }} defaultValue={''}>
                                                                    <option value="" disabled>Chọn chuyên đề</option>
                                                                    {
                                                                        selectedTopic?.map((item) => (
                                                                            <option value={item?.id}>{item?.name}</option>
                                                                        ))
                                                                    }
                                                                </select>
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
                        <DocViewer documents={docs} pluginRenderers={[PDFRenderer]}
                            config={{
                                header: {
                                    disableHeader: true,
                                    disableFileName: true,
                                    retainURLParams: true,
                                },
                                pdfVerticalScrollByDefault: true,
                            }}
                        />
                        <div>
                            <div className="sub-menu-action">
                                <div className="verify" style={{ justifyContent: "center" }}>
                                    <div style={{ display: "flex", columnGap: "10px" }}>
                                        <div className='action-button' onClick={handleClickSave}>Sửa</div>
                                        <div className='action-button' onClick={handleClickOpenRemove}>Xóa</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sub-menu-infomation">
                            <div className="sub-menu-row">
                                <div><i>(Tài liệu chưa được thẩm định)</i></div>
                            </div>
                            <div className="sub-menu-row">
                                <div><strong>Nguồn: </strong> https://baigiang.violet.vn</div>
                                <div className='right-action' onClick={handleClickOpenReport}><strong><u className='underline-blue'>Báo tài liệu có sai sót</u></strong></div>
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
                                        <div className='action-button' onClick={handleClickOpenAccept}>Chấp thuận</div>
                                        <div className='action-button' onClick={handleClickOpenDeny}>Từ chối</div>
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
                onClose={async (event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleClose();
                    }
                }}
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
                    <Button onClick={displayRow1} className='button-mui' autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openReport}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleCloseReport();
                    }
                }}
                maxWidth={"md"}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center", fontWeight: 600 }}>
                    Báo cáo tài liệu
                </DialogTitle>

                {
                    login ? (
                        <>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description" style={{ textAlign: "left", backgroundColor: "#D9D9D9", borderRadius: "20px", padding: "20px" }}>
                                    <div className="report-row">
                                        <div className='report-title'>Tài liệu</div>
                                        <div className='report-detail'>
                                            Giáo án tài liệu A
                                        </div>
                                    </div>
                                    <div className="report-row">
                                        <div className='report-title'>
                                            Lý do báo cáo
                                        </div>
                                        <div className='report-detail' style={{ display: "flex", flexDirection: "column" }}>
                                            <FormControlLabel value="" control={<Radio />} label="Có lỗi kỹ thuật ..." />
                                            <FormControlLabel value="" control={<Radio />} label="Không dùng để dạy học" />
                                            <FormControlLabel value="" control={<Radio />} label="Vi phạm bản quyền" />
                                            <FormControlLabel value="" control={<Radio />} label="Lý do khác" />
                                        </div>
                                    </div>
                                    <div className="report-row">
                                        <div className='report-title'>Chi tiết lỗi</div>
                                        <div className='report-detail'>
                                            <span style={{ whiteSpace: "nowrap" }}>Đề nghị cung cấp lý do và chỉ ra các điểm không chính xác</span>
                                            <br />
                                            <textarea name="" id="" rows={10} />
                                        </div>
                                    </div>
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions >
                                <Button onClick={handleCloseReport} style={{ color: "#000", fontWeight: 600 }} > Quay lại trang</Button>
                                <Button onClick={handleCloseReport} className='button-mui' autoFocus>
                                    Gửi báo cáo
                                </Button>
                            </DialogActions></>
                    ) : (
                        <>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description" style={{ textAlign: "left", fontWeight: 600, marginBottom: "12px" }}>
                                    Bạn cần đăng nhập để thực hiện chức năng
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions >
                                <Button onClick={handleCloseReport} style={{ color: "#000", fontWeight: 600 }} >Hủy bỏ</Button>
                                <Button onClick={() => setLogin(true)} className='button-mui' autoFocus>
                                    Đăng nhập
                                </Button>
                            </DialogActions>
                        </>
                    )
                }
            </Dialog>
            <Dialog
                open={openAccept}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleCloseAccept();
                    }
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center", fontWeight: 600 }}>
                    Bạn có chắc chắn không
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ textAlign: "center", fontWeight: 600 }}>
                        Bạn có chắc muốn đưa phụ lục này vào thẩm duyệt
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleCloseAccept} style={{ color: "#000", fontWeight: 600 }} >Hủy bỏ</Button>
                    <Button onClick={handleCloseAccept} className='button-mui' autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openDeny}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleCloseDeny();
                    }
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center", fontWeight: 600 }}>
                    Bạn có chắc chắn không
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ textAlign: "center", fontWeight: 600 }}>
                        Bạn có chắc muốn từ chối đưa phụ lục này vào thẩm duyệt
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleCloseDeny} style={{ color: "#000", fontWeight: 600 }} >Hủy bỏ</Button>
                    <Button onClick={handleCloseDeny} className='button-mui' autoFocus>
                        Từ chối
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openRemove}
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
                        handleCloseRemove();
                    }
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center", fontWeight: 600 }}>
                    Bạn có chắc chắn không
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ textAlign: "center", fontWeight: 600 }}>
                        Bạn có chắc muốn xóa thay đổi không?
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleCloseRemove} style={{ color: "#000", fontWeight: 600 }} >Hủy bỏ</Button>
                    <Button onClick={handleCloseRemove} className='button-mui' autoFocus>
                        Xóa
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default SubMenu1Detail