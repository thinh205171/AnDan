import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss'
import { Add } from '@mui/icons-material';

const SubMenu5 = () => {
    const subMenu = [1, 2, 3, 5, 5, 6, 7, 8, 9];
    const navigate = useNavigate()
    return (
        <div className='home-panel'>
            <div className='home-panel-content'>
                <div className="home-panel-content-sub-menu">
                    <div className="home-panel-content-sub-menu-list">
                        <div className="home-panel-content-sub-menu-item-name">
                            Phụ lục 5
                            <div className='add-row-button'>
                                <Add style={{ color: "black" }} className='add-row-icon' onClick={() => navigate('/sub-menu-5/detail-edit')} />
                            </div>
                        </div>
                        <div className="home-panel-content-sub-menu-item-content-grid">
                            {
                                subMenu?.map((item, index) => (
                                    <div key={index} className='sub-menu-content-detail' onClick={() => navigate('/sub-menu-5/detail-view')}>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubMenu5