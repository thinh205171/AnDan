import React from 'react'
import './style.scss'

const SubMenu4Detail = () => {

    return (
        <div className='sub-menu-container'>
            <div className='sub-menu-content'>
                <div className="sub-menu-content-header">
                    <strong className='phu-luc'>Phụ lục IV</strong>
                    <div className="sub-menu-content-header-title">
                        <strong className="sub-menu-content-header-title-main">
                            KHUNG KẾ HOẠCH DẠY BÀI DẠY
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
                            <div> Họ và tên giáo viên:<div>
                                <div><input type="text" placeholder='............................' style={{ width: "100px" }} /></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-menu-content-title">
                        <div><strong>TÊN BÀI DẠY <input type="text" placeholder='..................................' /></strong></div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div><strong>MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC</strong><input type="text" placeholder='..............' style={{ width: "50px" }} /></div>
                            <div><strong>, LỚP</strong><input type="number" placeholder='...........' style={{ width: "50px" }} /></div>
                        </div>
                        <div>Thời gian thức hiện <input type="number" placeholder="...." style={{ width: "25px" }} />(số tiết)</div>
                    </div>

                    <div className='sub-menu-content-main'>
                        <div className="sub-menu-content-main-feature">
                            <div className="sub-menu-content-main-feature-item">
                                <div><strong>I. Mục tiêu</strong></div>
                                <div><strong>1. Về kiến thức: </strong>Nêu cụ thể nội dung kiến thức học sinh cần học trong bài
                                    theo yêu cầu cần đạt của nội dung giáo dục/chủ đề tương ứng trong chương trình môn học/hoạt động giáo dục
                                </div>
                            </div>
                        </div>

                        <div className="sub-menu-content-main-feature">
                            <div className="sub-menu-content-main-feature-item">
                                <div><strong>II. Thiết bị dạy học và học liệu</strong></div>
                                <div>
                                    Nêu cụ thể các thiết bị dạy học và học liệu được sử dụng trong bài dạy để tổ
                                    chức cho học simh hoạt động nhăm đạt được mục tiêu, yêu cầu của bài dạy (muốn
                                    hình thành phâm chất, năng lực nào thì hoạt động học phải tương ứng và phù hợp).
                                </div>
                            </div>
                        </div>

                        <div className="sub-menu-content-main-feature">
                            <div className="sub-menu-content-main-feature-item">
                                <div><strong>III. Tiến trình dạy học </strong></div>
                                <div>
                                    <strong>1. Hoạt động 1: Xác định vấn đề/ nhiệm vụ học tập/ Mở đầu </strong>
                                    (ghi rõ tên thể hiện kết quả hoạt động)
                                </div>
                                <div>
                                    (a) Mục tiêu:
                                    <i>
                                        Vếu mục tiêu giúp học sinh xác định được vấn đề/nhiệm vụ cụ thể
                                        cân giải quyết trong bài học hoặc xác định rõ cách thức giải quyết vân đê thực
                                        hiện nhiệm vụ trong các hoạt động tiếp theo của bài học.
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SubMenu4Detail