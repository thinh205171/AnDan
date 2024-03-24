import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Add, Remove } from '@mui/icons-material';
import './style.scss'

const SubMenu1 = () => {
    const grades = [6, 7, 8, 9]
    const subMenu = [1, 2, 3];
    const navigate = useNavigate()
    const handleAddSubMenu = () => {
        navigate("/sub-menu-1/detail-edit")
    }
    const handleRemoveSubMenu = () => {

    }
    return (
        <div className='home-panel1'>
            <div className='home-panel1-content'>
                <div className="home-panel1-content-sub-menu">
                    <div className="home-panel1-content-sub-menu-list">
                        <div className="home-panel1-content-sub-menu-item-name">
                            <div className='add-row-button'>
                                <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddSubMenu} />
                            </div>
                        </div>
                        {
                            grades?.map((grade, index) => (
                                <div>
                                    <div className="grade-name" style={{ fontSize: "24px" }}>Lớp {grade}</div>
                                    <div className="home-panel1-content-sub-menu-item-content-grid"
                                        style={{ borderBottom: index === grades.length - 1 ? 'none' : '1px solid black' }}
                                    >
                                        {
                                            subMenu?.map((item, index) => (
                                                <div key={index} className='sub-menu-content-detail' onClick={() => navigate('/sub-menu-1/detail-view')}>
                                                    <div className="remove-row-button">
                                                        <Remove style={{ color: "black" }} className='remove-row-icon' onClick={handleRemoveSubMenu} />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubMenu1