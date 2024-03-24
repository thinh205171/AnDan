import { ArrowDropDownOutlined } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import './style.scss'

const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/profile" className='user-profile'>
                <span>Chào mừng User1</span> <ArrowDropDownOutlined style={{ color: "#B6B1B1", textDecoration: "none" }} />
            </NavLink>
            <div className='header-image'></div>
            <div className="header-nav-bar">
                <div className="header-nav-bar-item">
                    <NavLink to="/">Trang chủ</NavLink>
                </div>
                <div className="header-nav-bar-item">
                    <NavLink to="/sub-menu-1">Phụ lục 1</NavLink>
                </div>
                <div className="header-nav-bar-item">
                    <NavLink to="/sub-menu-2">Phụ lục 2</NavLink>
                </div>
                <div className="header-nav-bar-item">
                    <NavLink to="/sub-menu-3">Phụ lục 3</NavLink>
                </div>
                <div className="header-nav-bar-item">
                    <NavLink to="/sub-menu-4">Phụ lục 4</NavLink>
                </div>
                <div className="header-nav-bar-item">
                    <NavLink to="/sub-menu-5">Phụ lục 5</NavLink>
                </div>
                <div className="header-nav-bar-item">
                    <NavLink to="/bai-giang-scrom">Bài giảng SCORM</NavLink>
                </div>
                <div className="header-nav-bar-item">
                    <NavLink to="/">Thoát</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header