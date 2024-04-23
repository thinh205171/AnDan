import React, { useEffect, useState } from 'react'
import './style.scss'
import generatePDF, { Options } from "react-to-pdf";
import { Subject } from '../../models/subject';
import { Class } from '../../models/class';
import { apiGetAllClass } from '../../api/class';
import { apiGetSubject } from '../../api/subject';
import { blob } from 'stream/consumers';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useAppSelector } from '../../hook/useTypedSelector';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiDeleteTeachingPlanner, apiPostTeachingPlanner } from '../../api/teachingPlanner';
import { apiPostSubMenu4 } from '../../api/subMenu4';

export const options: Options = {
    filename: "using-function.pdf",
    page: {
        margin: 20
    }
};
const UploadPhuLuc4 = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const user = useAppSelector(state => state.auth.user)
    const [subjectId, setSubjectId] = useState<number | null>(null)
    const [classId, setClassId] = useState<number | null>(null)
    const [tieuDe, setTieuDe] = useState('')
    const [fileDoc, setFileDoc] = useState<File | null>(null)
    const [avatar, setAvatar] = useState<File | null>(null)
    const [subjects, setSubjects] = useState<Subject[]>([])
    const [classes, setClasses] = useState<Class[]>([])
    const [avatarUrl, setAvatarUrl] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const [fileUrl, setFileUrl] = useState('')
    const [open, setOpen] = useState(false);
    const [teachingPlannerId, setTeachingPlannerId] = useState(null);

    const handleAvatarChange = async (e: any) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setAvatar(file);
            const blob = new Blob([file], { type: file.type });
            const formData = new FormData();
            formData.append('files', blob, file.name);
            const response = await axios.post('https://localhost:7241/api/S3FileUpload/upload?prefix=images%2F', formData);
            if (response?.status === 200)
                setAvatarUrl(response.data)
        }
    };

    const handleFileChange = async (e: any) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            setAvatar(file);
            const blob = new Blob([file], { type: file.type });
            const formData = new FormData();
            formData.append('files', blob, file.name);
            const response = await axios.post('https://localhost:7241/api/S3FileUpload/upload?prefix=doc4%2F', formData);
            if (response?.status === 200)
                setFileUrl(response.data)
        }
    };

    useEffect(() => {
        const fetchClasses = async () => {
            const res = await apiGetAllClass();
            if (res && res.data) {
                const classData: Class[] = res.data;
                setClasses(classData);
            }
        }

        const fetchSubject = async () => {
            const res = await apiGetSubject();
            if (res && res.data) {
                const subjectData: Subject[] = res.data;
                setSubjects(subjectData);
            }
        }

        fetchClasses();
        fetchSubject();

    }, []);

    const handleTieuDeChange = (e: any) => {
        setTieuDe(e.target.value);
    };

    const handleUpload = async () => {
        setOpen(true)
        if (subjectId && classId && user) {
            const post = await apiPostTeachingPlanner(null, { userId: user?.userId, subjectId: subjectId, classId: classId })
            if (post) {
                setTeachingPlannerId(post?.data.id)
            }
        }
    }

    const handleClose = async () => {
        setOpen(false)
        try {
            await apiDeleteTeachingPlanner(teachingPlannerId);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAddDoc4 = async () => {
        if (teachingPlannerId && user && tieuDe && fileUrl && avatarUrl) {
            const post = await apiPostSubMenu4({ teachingPlannerId: teachingPlannerId, name: tieuDe, linkFile: fileUrl, linkImage: avatarUrl })
            if (post)
                alert("Thành công")
        }
        else
            alert("Nhập đầy đủ thông tin!")
    }

    return (
        <div className='scrom-upload-panel'>
            <div className='scrom-upload-panel-content' id='main-content'>
                <div>ĐĂNG TẢI KHUNG KẾ HOẠCH GIẢNG DẠY</div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        Đưa vào thư viện: Gốc &gt; HD sử dụng phần mềm &gt; Violet
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Môn học
                    </div>
                    <div className="upload-input">
                        <select id="subjects" style={{ width: "100%", height: "30px" }}
                            onChange={(e) => setSubjectId(parseInt(e.target.value))}
                            defaultValue={''}
                        >
                            <option value="" disabled>Chọn môn học</option>
                            {
                                subjects?.map((item) => (
                                    <option value={item?.id}>{item?.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Lớp
                    </div>
                    <div className="upload-input">
                        <select id="classes" style={{ width: "100%", height: "30px" }}
                            onChange={(e) => setClassId(parseInt(e.target.value))}
                            defaultValue={''}
                        >
                            <option value="" disabled>Chọn lớp</option>
                            {
                                classes?.map((item) => (
                                    <option value={item?.id}>{item?.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Tiêu đề
                    </div>
                    <div className="upload-input">
                        <input type="text" value={tieuDe} onChange={handleTieuDeChange} />
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        File dữ liệu
                    </div>
                    <div className="upload-input-file">
                        <input type="file" onChange={handleFileChange} accept='application/pdf' />
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Ảnh đại diện
                    </div>
                    <div className="upload-input-file">
                        <input type="file" onChange={handleAvatarChange} accept='image/*' />
                    </div>
                </div>
                <div className='upload-tutorial'>
                    <div><strong>Các thầy cô đọc kỹ những chú ý sau để gửi lên e-learning thành công:</strong></div>
                    <ul>
                        <li>Nhấn nút <strong>Browse</strong> để chọn file e-learning đưa lên.</li>
                        <ul>
                            <li>Bài giảng được soạn bằng các phần mềm hỗ trợ.......</li>
                            <li>Bài giảng nên được .......</li>
                        </ul>
                        <li>Chọn ảnh đại diện........</li>
                        <li>Nhấn nút <strong>Lưu lại</strong>, bài giảng sẽ....</li>
                    </ul>
                </div>
                <div className='upload-button' onClick={handleUpload}>Lưu lại</div>
            </div>
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
                <DialogActions>
                    <Button onClick={handleClose} style={{ color: "#000", fontWeight: 600 }} >Hủy bỏ</Button>
                    <Button onClick={handleAddDoc4} className='button-mui' autoFocus>
                        Đồng ý
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default UploadPhuLuc4