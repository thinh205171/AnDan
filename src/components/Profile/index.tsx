import React, { useState } from 'react'
import "./style.scss"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';

const Profile = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const openHandleEdit = () => {
        setOpenEdit(!openEdit)
    }

    return (
        <div className='profile-panel'>
            <div className="profile-panel-container">
                <div className='profile-panel-container-title'>Thông tin thành viên</div>
                <div className="profile-panel-container-detail">
                    {/* <div className="profile-panel-container-detail-avatar">

                    </div> */}
                    <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="avatar"
                        className="profile-panel-container-detail-avatar" />
                    <div className="profile-panel-container-detail-description">
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Họ và tên</div>
                            <div className='profile-detail-value'>Trần Đại An</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Vai trò</div>
                            <div className='profile-detail-value'>Người dùng</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Email</div>
                            <div className='profile-detail-value'>email@gmail.com</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Giới tinh</div>
                            <div className='profile-detail-value'>Nữ</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Tuổi</div>
                            <div className='profile-detail-value'>26</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Ngày sinh</div>
                            <div className='profile-detail-value'>02/09/1998</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-edit-btn' onClick={() => setOpenEdit(true)}><Edit /> Chỉnh sửa thông tin</div>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={openEdit}
                onClose={openHandleEdit}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const username = formJson.username;
                        const password = formJson.password;

                    },
                }}
            >
                <DialogTitle style={{ textAlign: "center" }}>Thông tin cá nhân</DialogTitle>
                <DialogContent style={{ textAlign: "center" }}>
                    <DialogContentText>
                        Chỉnh sửa thông tin cá nhân
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="username"
                        name="username"
                        label="username"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={openHandleEdit}>Cancel</Button>
                    <Button type="submit">Edit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Profile