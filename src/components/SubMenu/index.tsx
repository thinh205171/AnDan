import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import './style.scss'
import { apiGetDocument1ByUserSpecialiedDepartment, apiGetSubMenu1 } from '../../api/subMenu1';
import { SubMenuData } from '../../models/subMenu';
import { apiGetDocument4ByUserSpecialiedDepartment, apiGetSubMenu4 } from '../../api/subMenu4';
import { apiGetDocument2ByUserSpecialiedDepartment, apiGetSubMenu2 } from '../../api/subMenu2';
import { apiGetDocument3ByUserSpecialiedDepartment, apiGetSubMenu3 } from '../../api/subMenu3';
import { apiGetDocument5ByUserSpecialiedDepartment, apiGetSubMenu5 } from '../../api/subMenu5';
import { apiGetSpecializedDepartment } from '../../api/specializedDepartment';

const SubMenu = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [subMenu1Data, setSubMenu1Data] = useState<SubMenuData[]>([]);
    const [specializedDepartmentId, setSpecializedDepartmentID] = useState<any>([]);
    const [specializedDepartment, setSpecializedDepartment] = useState<any>([]);
    const [subMenuName, setSubMenuName] = useState('');
    const indexSubMenu = location.pathname.split('/')[2];
    const grades = useMemo(() => ["6", "7", "8", "9"], []);
    const handleAddSubMenu = () => {
        navigate(`/sub-menu-${indexSubMenu}/detail-create`)
    }

    useEffect(() => {
        if (indexSubMenu === '1')
            setSubMenuName("KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC")
        else if (indexSubMenu === '2')
            setSubMenuName("KẾ HOẠCH TỔ CHỨC CÁC HOẠT ĐỘNG GIÁO DỤC CỦA TỔ CHUYÊN MÔN ")
        else if (indexSubMenu === '3')
            setSubMenuName("KẾ HOẠCH GIÁO DỤC CỦA GIÁO VIÊN")
        else if (indexSubMenu === '4')
            setSubMenuName("KHUNG KẾ HOẠCH BÀI DẠY")
        else if (indexSubMenu === '5')
            setSubMenuName("PHIẾU ĐÁNH GIÁ BÀI DẠY")
    }, [indexSubMenu])

    useEffect(() => {
        const fetchList = async () => {
            if (indexSubMenu === '1') {
                const res = await apiGetDocument1ByUserSpecialiedDepartment(specializedDepartmentId);
                if (res)
                    setSubMenu1Data(res.data)
                else
                    setSubMenu1Data([])
            }
            else if (indexSubMenu === '2') {
                const res = await apiGetDocument2ByUserSpecialiedDepartment(specializedDepartmentId);
                if (res)
                    setSubMenu1Data(res.data)
                else
                    setSubMenu1Data([])
            }
            else if (indexSubMenu === '3') {
                const res = await apiGetDocument3ByUserSpecialiedDepartment(specializedDepartmentId);
                if (res)
                    setSubMenu1Data(res.data)
                else
                    setSubMenu1Data([])
            }
            else if (indexSubMenu === '4') {
                const res = await apiGetDocument4ByUserSpecialiedDepartment(specializedDepartmentId);
                if (res)
                    setSubMenu1Data(res.data)
                else
                    setSubMenu1Data([])
            }
            else if (indexSubMenu === '5') {
                const res = await apiGetSubMenu5();
                if (res)
                    setSubMenu1Data(res.data)
                else
                    setSubMenu1Data([])
            }
        }
        fetchList();
    }, [indexSubMenu, specializedDepartmentId])

    useEffect(() => {
        const fetchSpecializedDepartment = async () => {
            const res = await apiGetSpecializedDepartment();
            if (res && res.data) {
                setSpecializedDepartment(res.data)
                const idArray = res.data.map((item: any) => item.id);
                const queryString = idArray.map((id: any) => `listId=${id}`).join('&');
                setSpecializedDepartmentID(queryString)
            }
        }
        fetchSpecializedDepartment()
    }, [])

    const displayStyle = indexSubMenu === '3' ? 'none' : 'initial';

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
                                        <Add style={{ color: "black", display: `${displayStyle}` }} className='add-row-icon' onClick={handleAddSubMenu} />
                                        :
                                        <Add style={{ color: "black" }} className='add-row-icon' onClick={() => navigate('/upload-sub-menu-4')} />
                                }
                            </div>
                        </div>
                        {
                            subMenu1Data?.map((doc, index) => (
                                <div key={index}>
                                    <div className="grade-name" style={{ fontSize: "24px" }}>Tổ {specializedDepartment[index]?.name}</div>
                                    <div className="home-panel1-content-sub-menu-item-content-grid"
                                        style={{ borderBottom: index === grades.length - 1 ? 'none' : '1px solid black' }}
                                    >
                                        {
                                            doc?.documents?.map((item: any, index: number) => (
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