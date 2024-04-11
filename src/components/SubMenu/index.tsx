import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import './style.scss'
import { apiGetSubMenu1 } from '../../api/subMenu1';

const SubMenu = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [subMenuData, setSubMenuData] = useState([]);
    console.log("subMenuData: ", subMenuData)
    const indexSubMenu = location.pathname.split('/')[2];
    const grades = [6, 7, 8, 9]
    const subMenu = [1, 2, 3];
    const handleAddSubMenu = () => {
        navigate(`/sub-menu-${indexSubMenu}/detail-add`)
    }

    useEffect(() => {
        const fetchList = async () => {
            if (indexSubMenu === '1') {
                const res = await apiGetSubMenu1();
                if (res)
                    setSubMenuData(res.data)
                else
                    setSubMenuData([])
            }
        }
        fetchList();
    }, [])

    return (
        <div className='home-panel1'>
            <div className='home-panel1-content'>
                <div className="home-panel1-content-sub-menu">
                    <div className="home-panel1-content-sub-menu-list">
                        <div className="home-panel1-content-sub-menu-item-name">
                            <div>
                                Phụ lục {indexSubMenu}
                            </div>
                            <div className='add-row-button'>
                                {
                                    indexSubMenu !== "4" ?
                                        <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddSubMenu} />
                                        :
                                        <Add style={{ color: "black" }} className='add-row-icon' onClick={() => navigate('/upload-sub-menu-4')} />
                                }
                            </div>
                        </div>
                        {
                            grades?.map((grade, index) => (
                                <div key={index}>
                                    <div className="grade-name" style={{ fontSize: "24px" }}>Lớp {grade}</div>
                                    <div className="home-panel1-content-sub-menu-item-content-grid"
                                        style={{ borderBottom: index === grades.length - 1 ? 'none' : '1px solid black' }}
                                    >
                                        {
                                            subMenu?.map((item, index) => (
                                                <div key={index} className='sub-menu-content-detail' onClick={() => navigate(`/sub-menu-${indexSubMenu}/detail-view/${index}`)}>
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

export default SubMenu