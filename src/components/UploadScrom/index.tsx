import React from 'react'
import './style.scss'

const UploadScrom = () => {

    return (
        <div className='scrom-upload-panel'>
            <div className='scrom-upload-panel-content'>
                <div>Đưa elearning từ máy tính lên thư viện</div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        Đưa vào thư viện: Gốc &gt; HD sử dụng phần mềm &gt; Violet
                    </div>
                    <div>
                        <u className='underline-blue'>Chọn thư mục khác</u>
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Tiêu đề
                    </div>
                    <div className="upload-input">
                        <input type="text" />
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        File dữ liệu
                    </div>
                    <div className="upload-input-file">
                        <input type="file" />
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Ảnh đại diện
                    </div>
                    <div className="upload-input-file">
                        <input type="file" />
                    </div>
                </div>
                <div className='upload-row'>
                    <div className='upload-title'>
                        Nguồn
                    </div>
                    <div className="upload-input">
                        <input type="text" />
                    </div>
                </div>
                <div className='upload-row' style={{ alignItems: "flex-start" }}>
                    <div className='upload-title'>
                        Nội dung
                    </div>
                    <div className="upload-input">
                        <textarea name="" id="" rows={10}></textarea>
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
        </div>
    )
}

export default UploadScrom