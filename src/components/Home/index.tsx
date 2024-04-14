import './style.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { apiGetSubMenu1 } from '../../api/subMenu1';
import { Tooltip } from '@mui/material';
import { SubMenuData } from '../../models/subMenu';
import { apiGetSubMenu2 } from '../../api/subMenu2';
import { apiGetSubMenu3 } from '../../api/subMenu3';

const Home = () => {
    const navigate = useNavigate()
    const [subMenu1Data, setSubMenu1Data] = useState<SubMenuData[]>([]);
    const [subMenu2Data, setSubMenu2Data] = useState<SubMenuData[]>([]);
    const [subMenu3Data, setSubMenu3Data] = useState<SubMenuData[]>([]);

    useEffect(() => {
        const fetchList = async () => {
            const res1 = await apiGetSubMenu1();
            const res2 = await apiGetSubMenu2();
            const res3 = await apiGetSubMenu3();
            if (res1)
                setSubMenu1Data(res1.data)
            if (res2)
                setSubMenu2Data(res2.data)
            if (res3)
                setSubMenu3Data(res3.data)
        }
        fetchList();
    }, [])

    const handleAddSubMenu1 = () => {
        navigate("/sub-menu-1/detail-add")
    }

    const handleAddSubMenu2 = () => {
        navigate("/sub-menu-2/detail-add")
    }

    const handleAddSubMenu3 = () => {
        navigate("/sub-menu-3/detail-add")
    }

    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div className='home-panel'>
            <div className='home-panel-content'>
                <div className="home-panel-content-sub-menu">
                    <div className="home-panel-content-sub-menu-list">
                        <div className="home-panel-content-sub-menu-item-name">
                            <span>
                                KẾ HOẠCH DẠY HỌC CỦA TỔ CHUYÊN MÔN MÔN HỌC/HOẠT ĐỘNG GIÁO DỤC
                            </span>
                            <div className='add-row-button'>
                                <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddSubMenu1} />
                            </div>
                        </div>
                        <div className="home-panel-content-sub-menu-item-content">
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={20}
                                centeredSlides={true}
                                slidesPerView={3}
                                loop={true}
                            >
                                {
                                    subMenu1Data?.map((subMenu1, index) => (
                                        <SwiperSlide>
                                            <Tooltip title={subMenu1?.name} arrow placement="top" key={index}>
                                                <div className='sub-menu-content-detail' onClick={() => navigate(`/sub-menu-1/detail-view/${subMenu1?.id}`)}>
                                                    <div className='sub-menu-subject-name'>
                                                        {subMenu1.subjectName} {subMenu1.gradeName}
                                                    </div>
                                                </div>
                                            </Tooltip>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="home-panel-content-sub-menu">
                    <div className="home-panel-content-sub-menu-list">
                        <div className="home-panel-content-sub-menu-item-name">
                            <span>
                                Phụ lục 2
                            </span>
                            <div className='add-row-button'>
                                <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddSubMenu2} />
                            </div>
                        </div>
                        <div className="home-panel-content-sub-menu-item-content">
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={20}
                                centeredSlides={true}
                                slidesPerView={3}
                                loop={true}
                            >
                                {
                                    subMenu2Data?.map((subMenu2, index) => (
                                        <SwiperSlide>
                                            <Tooltip title={subMenu2?.name} arrow placement="top" key={index}>
                                                <div className='sub-menu-content-detail' onClick={() => navigate(`/sub-menu-2/detail-view/${subMenu2?.id}`)}>
                                                    <div className='sub-menu-subject-name'>
                                                        {subMenu2.subjectName} {subMenu2.gradeName}
                                                    </div>
                                                </div>
                                            </Tooltip>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="home-panel-content-sub-menu">
                    <div className="home-panel-content-sub-menu-list">
                        <div className="home-panel-content-sub-menu-item-name">
                            <span>
                                Phụ lục 3
                            </span>
                            <div className='add-row-button'>
                                <Add style={{ color: "black" }} className='add-row-icon' onClick={handleAddSubMenu3} />
                            </div>
                        </div>
                        <div className="home-panel-content-sub-menu-item-content">
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                spaceBetween={20}
                                centeredSlides={true}
                                slidesPerView={3}
                                loop={true}
                            >
                                {
                                    subMenu3Data?.map((subMenu3, index) => (
                                        <SwiperSlide>
                                            <Tooltip title={subMenu3?.name} arrow placement="top" key={index}>
                                                <div className='sub-menu-content-detail' onClick={() => navigate(`/sub-menu-3/detail-view/${subMenu3?.id}`)}>
                                                    <div className='sub-menu-subject-name'>
                                                        {subMenu3.subjectName} {subMenu3.gradeName}
                                                    </div>
                                                </div>
                                            </Tooltip>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home