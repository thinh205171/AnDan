import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.scss'

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
                        </div>
                        <div className="home-panel-content-sub-menu-item-content-grid">
                            {
                                subMenu?.map((item, index) => (
                                    <div key={index} className='sub-menu-content-detail' onClick={() => navigate('/sub-menu-5/detail')}>
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