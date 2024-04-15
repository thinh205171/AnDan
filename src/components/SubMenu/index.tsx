import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import './style.scss'
import { apiGetSubMenu1 } from '../../api/subMenu1';
import { SubMenuData } from '../../models/subMenu';
import { apiGetSubMenu4 } from '../../api/subMenu4';

const SubMenu = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [subMenu1Data, setSubMenu1Data] = useState<SubMenuData[]>([]);
    const [subMenuName, setSubMenuName] = useState('');
    const [gradeData, setGradeData] = useState<{ gradeName: any; items: SubMenuData[] }[]>([]);
    const indexSubMenu = location.pathname.split('/')[2];
    const subMenu = [1, 2, 3];
    const grades = useMemo(() => ["6", "7", "8", "9"], []);
    const handleAddSubMenu = () => {
        navigate(`/sub-menu-${indexSubMenu}/detail-add`)
    }

    useEffect(() => {
        if (indexSubMenu === '1')
            setSubMenuName("KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC")
    }, [indexSubMenu])

    useEffect(() => {
        const fetchList = async () => {
            if (indexSubMenu === '1') {
                const res = await apiGetSubMenu1();
                if (res)
                    setSubMenu1Data(res.data)
                else
                    setSubMenu1Data([])
            }
            if (indexSubMenu === '4') {
                const res = await apiGetSubMenu4();
                if (res)
                    setSubMenu1Data(res.data)
                else
                    setSubMenu1Data([])
            }
        }
        fetchList();
    }, [indexSubMenu])

    useEffect(() => {
        if (subMenu1Data) {
            const result = grades.map((grade: any) => {
                const filteredItems = subMenu1Data.filter((item) => item.gradeName === grade);
                return { gradeName: grade, items: filteredItems };
            });
            setGradeData(result);
        }
    }, [grades, subMenu1Data]);


    console.log("gradeData: ", gradeData)

    return (
        <div className='home-panel1'>
            <div className='home-panel1-content'>
                <div className="home-panel1-content-sub-menu">
                    <div className="home-panel1-content-sub-menu-list">
                        <div className="home-panel1-content-sub-menu-item-name">
                            <div>
                                {subMenuName}
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
                            gradeData?.map((grade, index) => (
                                <div key={index}>
                                    <div className="grade-name" style={{ fontSize: "24px" }}>Lớp {grade?.gradeName}</div>
                                    <div className="home-panel1-content-sub-menu-item-content-grid"
                                        style={{ borderBottom: index === grades.length - 1 ? 'none' : '1px solid black' }}
                                    >
                                        {
                                            grade?.items?.map((item, index) => (
                                                <div key={index} className='sub-menu-content-detail' onClick={() => navigate(`/sub-menu-${indexSubMenu}/detail-view/${item?.id}`)}>
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