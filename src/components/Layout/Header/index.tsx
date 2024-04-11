import { Link } from 'react-router-dom'
import './style.scss'
import { useEffect, useState } from 'react';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Tooltip } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../../hook/useTypedSelector';
import { checkAuthenticationUser, loginUser } from '../../../features/user/userSlice';

const Header = () => {
    const dispatch = useAppDispatch();
    const [isScrolling, setIsScrolling] = useState(false);
    const [openLogin, setOpenlogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    const [isLogin, setIsLogin] = useState(false)
    // const [user, setUser] = useState<string | null>('');

    const user = useAppSelector(state => state.auth.user)
    console.log("user: ", user)

    useEffect(() => {
        const verifyToken = async () => {
            await dispatch(checkAuthenticationUser());
        }
        verifyToken()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLoginClickOpen = () => {
        setOpenlogin(true);
    };

    const handleLoginClose = () => {
        setOpenlogin(false);
    };

    const handleRegisterClose = () => {
        setOpenRegister(false);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
        setIsLogin(false)
    }

    return (
        <div className={`header  ${isScrolling ? "scroll" : ""}`}>
            {/* <NavLink to="/profile" className='user-profile'>
                <span>Chào mừng User1</span> <ArrowDropDownOutlined style={{ color: "#B6B1B1", textDecoration: "none" }} />
            </NavLink>
            <div className='header-image'>
                <img src="/banner.jpg" alt="banner" />
            </div> */}
            <div className="container">
                <div className="left-header">
                    <div className="logo-header">
                        <Link to="/">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Circle-icons-document.svg"
                                alt="logo"
                            />
                        </Link>
                    </div>
                    <div className="text-header">
                        <p>E-LESSON MANAGEMENT</p>
                    </div>
                </div>
                <div className="right-header">
                    <div className="nav-list">
                        <div className="item-header">
                            <Link to="/">TRANG CHỦ</Link>
                        </div>
                        <div className="item-header">
                            <Link to="/">PHỤ LỤC</Link>
                            <ul className="dropdown">
                                <li>
                                    <Link to="/sub-menu/1">PHỤ LỤC 1</Link>
                                </li>
                                <li>
                                    <Link to="/sub-menu/2">PHỤ LỤC 2</Link>
                                </li>
                                <li>
                                    <Link to="/sub-menu/3">PHỤ LỤC 3</Link>
                                </li>
                                <li>
                                    <Link to="/sub-menu/4">PHỤ LỤC 4</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="item-header">
                            <Link to="/bai-giang-scrom">BÀI GIẢNG SCROM</Link>
                        </div>
                        <div className="item-header">
                            <Link to="/">TIN TỨC</Link>
                            <ul className="dropdown">
                                <li>
                                    <Link to="/">TIN TỨC 1</Link>
                                </li>
                                <li>
                                    <Link to="/">TIN TỨC 2</Link>
                                </li>
                                <li>
                                    <Link to="/">TIN TỨC 3</Link>
                                </li>
                                <li>
                                    <Link to="/">TIN TỨC 4</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="item-header">
                            <Link to="/">HỖ TRỢ</Link>
                        </div>
                        <div className="item-header">
                            {
                                !user ? (
                                    <div className="action-header">
                                        <button className="login" onClick={handleLoginClickOpen}>
                                            ĐĂNG NHẬP
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <Tooltip
                                            componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        backgroundColor: "white",
                                                        position: "absolute",
                                                        right: "-100px",
                                                        left: "auto",
                                                        top: "-15px",
                                                        padding: "12px 0 12px 0",
                                                        width: "200px",
                                                        textAlign: "center"
                                                    },
                                                },
                                            }}
                                            title={
                                                <Container>
                                                    <ul>
                                                        <div style={{ borderBottom: "1px solid  #ccc", paddingTop: "12px" }}>
                                                            <span style={{ fontSize: "16px", color: "#000" }}>{user.username}</span>
                                                        </div>
                                                        <div style={{ borderBottom: "1px solid  #ccc", paddingTop: "12px" }}>
                                                            <Link to="/profile" style={{ fontSize: "16px" }}>Thông tin tài khoản</Link>
                                                        </div>
                                                        <div style={{ borderBottom: "1px solid  #ccc", paddingTop: "12px" }}>
                                                            <Link to="/yeu-cau-phe-duyet" style={{ fontSize: "16px" }}>Yêu cầu phê duyệt</Link>
                                                        </div>
                                                        <div style={{ paddingTop: "12px" }}>
                                                            <span
                                                                onClick={handleLogout}
                                                                style={{ cursor: "pointer", color: "#000", fontSize: "16px" }}
                                                            >
                                                                Đăng xuất
                                                            </span>
                                                        </div>
                                                    </ul>
                                                </Container>
                                            }
                                        >
                                            <AccountCircle style={{ width: "32px", height: "32px", color: "#CD8D7A" }} />
                                        </Tooltip>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="hide-header">
                    <div className="hide-header-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fillRule="red"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </div>
                    <div className="hide-header-action">
                        <button className="login-button hide-button-action">
                            <Link to="/">Đăng nhập</Link>
                        </button>
                        <button className="hide-button-action">
                            <Link to="/">Đăng ký</Link>
                        </button>
                    </div>
                </div> */}
            </div>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={openLogin}
                onClose={handleLoginClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const username = formJson.username;
                        const password = formJson.password;
                        try {
                            await dispatch(loginUser({ username, password }));
                        } catch (e) {
                            console.log(e);
                        }
                    },
                }}
            >
                <DialogTitle style={{ textAlign: "center" }}>Đăng nhập</DialogTitle>
                <DialogContent style={{ textAlign: "center" }}>
                    <DialogContentText>
                        Điền đầy đủ thông tin đăng nhập
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
                    <div style={{ paddingTop: "12px" }}>
                        Chưa có tài khoản?
                        <span
                            style={{ cursor: "pointer", fontStyle: "italic", marginLeft: "6px" }}
                            onClick={() => {
                                setOpenlogin(false)
                                setOpenRegister(true)
                            }}
                        ><u>Đăng ký ngay</u></span>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLoginClickOpen}>Cancel</Button>
                    <Button type="submit">Login</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={openRegister}
                onClose={handleRegisterClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const email = formJson.email;
                        console.log(email);
                        handleRegisterClose();
                    },
                }}
            >
                <DialogTitle style={{ textAlign: "center" }}>Đăng ký</DialogTitle>
                <DialogContent style={{ textAlign: "center" }}>
                    <DialogContentText>
                        Điền đầy đủ thông tin đăng ký
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
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
                    <Button onClick={handleRegisterClose}>Cancel</Button>
                    <Button type="submit">Register</Button>
                </DialogActions>
            </Dialog>
        </div >
    )
}

export default Header