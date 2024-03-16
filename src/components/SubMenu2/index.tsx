import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss'

const SubMenu2 = () => {
    const subMenu = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const navigate = useNavigate()
    return (
        <div className='home-panel'>
            <div className='home-panel-content'>
                <div className="home-panel-content-sub-menu">
                    <div className="home-panel-content-sub-menu-list">
                        <div className="home-panel-content-sub-menu-item-name">
                            Phụ lục 2
                        </div>
                        <div className="home-panel-content-sub-menu-item-content-grid">
                            {
                                subMenu?.map((item, index) => (
                                    <div key={index} className='sub-menu-content-detail' onClick={() => navigate('/sub-menu-2/detail')}>
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

export default SubMenu2