import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import { useLocation, useNavigate } from 'react-router-dom'
import { apiGetDoc3ByDoc1Id } from '../../api/subMenu3'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { apiGetDoc4ByDoc3Id } from '../../api/subMenu4'

function SubMenu4List() {
    const location = useLocation()
    const navigate = useNavigate()
    const [subMenuData, setSubMenuData] = useState<Document[]>([])
    const [age, setAge] = React.useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    useEffect(() => {
        const fetchSubMenu4 = async () => {
            const data = await apiGetDoc4ByDoc3Id(parseInt(location.pathname.split("/")[3]))
            if (data && data.data) {
                setSubMenuData(data.data)
            }
        }
        fetchSubMenu4()
    }, [location.pathname])
    return (
        <Layout>
            <div className="home-panel" style={{ minWidth: "20rem" }}>
                <div className="home-panel1-content">
                    <div className="home-panel1-content-sub-menu">
                        <div className="home-panel1-content-sub-menu-list">
                            <div className="home-panel1-content-sub-menu-item-name">
                                <div>KHUNG KẾ HOẠCH BÀI DẠY</div>
                            </div>

                            <form action="">
                                <div className="input-group mb-4 border rounded-pill p-1 bg-white rounded">
                                    <div className="input-group-prepend border-0">
                                        <button
                                            id="button-addon4"
                                            type="button"
                                            className="btn btn-link text-info"
                                        >
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                    <input
                                        type="search"
                                        placeholder="Tìm kiếm tài liệu..."
                                        aria-describedby="button-addon4"
                                        className="form-control bg-none border-0"
                                    />
                                </div>
                                <div className="container d-flex justify-content-center align-items-center"></div>
                            </form>

                            <div>
                                <FormControl style={{ width: "15%", background: "white" }}>
                                    <InputLabel id="demo-simple-select-label">Tổ</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            {
                                subMenuData?.map((doc: any, index) => (
                                    <div key={index}>
                                        <div
                                            className="home-panel1-content-sub-menu-item-content-grid"
                                            style={{
                                                borderBottom:
                                                    index === subMenuData.length - 1
                                                        ? "none"
                                                        : "1px solid black",
                                            }}
                                        >
                                            {
                                                <div
                                                    key={index}
                                                    className="sub-menu-content-detail"
                                                    onClick={() =>
                                                        navigate(
                                                            `/sub-menu-4/detail-view/${doc?.id}`
                                                        )
                                                    }
                                                ></div>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SubMenu4List