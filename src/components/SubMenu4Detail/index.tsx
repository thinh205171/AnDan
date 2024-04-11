import React, { useState } from 'react'
import './style.scss'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Radio } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

const SubMenu4Detail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [login, setLogin] = useState(false);
    const [open, setOpen] = useState(false);
    const [openReport, setOpenReport] = useState(false);
    const [openFeedback, setOpenFeedback] = useState(false);
    const [openRemove, setOpenRemove] = useState(false);

    const handleClickOpenReport = () => {
        setOpenReport(true);
    };

    const handleCloseReport = () => {
        setOpenReport(false);
    };

    const handleClickOpenFeedback = () => {
        setOpenFeedback(true);
    };

    const handleCloseFeedback = () => {
        setOpenFeedback(false);
    };

    const handleClickOpenRemove = () => {
        setOpenRemove(true);
    };

    const handleCloseRemove = () => {
        setOpenRemove(false);
    };

    const handleClickSave = () => {
        navigate(`/sub-menu-4/detail-edit/${location.pathname.split('/')[3]}`)
    };

    const docs = [{ uri: require("./phuluc4.pdf") }]

    return (
        <div className='sub-menu-container'>
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
                    <div className='right-action' onClick={handleClickOpenFeedback}><strong><u className='underline-blue'>Đi đến phụ lục đánh giá của bài dạy</u></strong></div>
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
            <Dialog
                open={openReport}
                onClose={handleCloseReport}
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
                open={openFeedback}
                onClose={handleCloseFeedback}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center", fontWeight: 600 }}>
                    Chuyển tới đánh giá
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ textAlign: "left", fontWeight: 600, marginBottom: "12px" }}>
                        Chú ý trước khi chuyển trang:
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description" style={{ textAlign: "left", backgroundColor: "#D9D9D9", borderRadius: "20px", padding: "20px" }}>
                        Đảm bảo thông tin bài dạy được lưu lại theo đúng mong muốn trước khi chuyển sang bước đánh giá bài dạy !
                    </DialogContentText>
                </DialogContent>
                <DialogActions >
                    <Button onClick={handleCloseFeedback} style={{ color: "#000", fontWeight: 600 }} > Quay lại trang</Button>
                    <Button onClick={() => navigate('/sub-menu-5')} className='button-mui' autoFocus>
                        Click vào đây để sang phụ lục 5
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openRemove}
                onClose={handleCloseRemove}
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

export default SubMenu4Detail