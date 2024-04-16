import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useAppSelector } from '../../hook/useTypedSelector';
import { apiGetUser } from '../../api/user';

const Profile = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const openHandleEdit = () => {
        setOpenEdit(!openEdit)
    }
    const [userInfo, setUserInfo] = useState<any>()

    const user = useAppSelector(state => state.auth.user)
    console.log("userInfo: ", userInfo)
    useEffect(() => {
        const fetchUser = async () => {
            if (user) {
                const res = await apiGetUser(user?.userId)
                if (res)
                    setUserInfo(res.data)
            }
        }
        fetchUser()
    }, [user?.userId, user])

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
                            <div className='profile-detail-value'>{userInfo?.fullName}</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Email</div>
                            <div className='profile-detail-value'>{userInfo?.email}</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Giới tinh</div>
                            <div className='profile-detail-value'>{userInfo?.gender}</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Tuổi</div>
                            <div className='profile-detail-value'>{userInfo?.age}</div>
                        </div>
                        <div className="profile-panel-container-detail-description-content">
                            <div className='profile-detail-field'>Nơi sinh</div>
                            <div className='profile-detail-value'>{userInfo?.placeOfBirth}</div>
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