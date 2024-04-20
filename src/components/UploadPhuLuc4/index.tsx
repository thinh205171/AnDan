import React, { useEffect, useState } from 'react'
import './style.scss'
import generatePDF, { Options } from "react-to-pdf";
import { Subject } from '../../models/subject';
import { Class } from '../../models/class';
import { apiGetAllClass } from '../../api/class';
import { apiGetSubject } from '../../api/subject';
import { blob } from 'stream/consumers';

export const options: Options = {
    filename: "using-function.pdf",
    page: {
        margin: 20
    }
};
const UploadPhuLuc4 = () => {
    const [subjectId, setSubjectId] = useState<number | null>(null)
    const [classId, setClassId] = useState<number | null>(null)
    const [tieuDe, setTieuDe] = useState('')
    const [fileDoc, setFileDoc] = useState<File | null>(null)
    const [avatar, setAvatar] = useState<File | null>(null)
    const [subjects, setSubjects] = useState<Subject[]>([])
    const [classes, setClasses] = useState<Class[]>([])
    const getTargetElement = () => document.getElementById("main-content");
    // const downloadPdf = () => generatePDF(getTargetElement, options);

    const downloadPdf = () => {
        generatePDF(getTargetElement, options).then((pdf) => {
            // Chuyển file PDF thành Blob
            // Tạo một FormData object và thêm file PDF vào đó
            const formData = new FormData();
            formData.append('files', pdf.output("blob"), 'document.pdf');

            // Gọi API để lưu file PDF vào cơ sở dữ liệu
            fetch('https://localhost:7241/api/S3FileUpload/upload?prefix=images%2F', {
                method: 'POST',
                body: formData
            }).then((response) => {
                // Xử lý kết quả sau khi gửi file lên máy chủ
                console.log('Các file PDF đã được lưu vào cơ sở dữ liệu.');
            }).catch((error) => {
                console.error('Lỗi khi gửi các file PDF lên máy chủ:', error);
            });
        });
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
    const handleFileDocChange = (e: any) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileDoc(file);
        }
    };

    const handleAvatarChange = (e: any) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAvatar(file);
        }
    };

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
                        <input type="file" onChange={handleFileDocChange} />
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Ảnh đại diện
                    </div>
                    <div className="upload-input-file">
                        <input type="file" onChange={handleAvatarChange} />
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
                <div className='upload-button'>Lưu lại</div>
            </div>
            <button onClick={downloadPdf}>Xuất PDF</button>

        </div>
    )
}

export default UploadPhuLuc4