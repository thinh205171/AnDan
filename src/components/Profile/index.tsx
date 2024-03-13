import React from 'react'
import "./style.scss"

const Profile = () => {
    return (
        <div className='profile-panel'>
            <div className="profile-panel-container">
                <div className='profile-panel-container-title'>Thông tin thành viên</div>
                <div className="profile-panel-container-detail">
                    <div className="profile-panel-container-detail-avatar">

                    </div>
                    <div className="profile-panel-container-detail-description">
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Họ và tên</div>
                            <div className='profile-detail-value'>Trần Đại An</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Giới tinh</div>
                            <div className='profile-detail-value'>Nữ</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Tuổi</div>
                            <div className='profile-detail-value'>26</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile