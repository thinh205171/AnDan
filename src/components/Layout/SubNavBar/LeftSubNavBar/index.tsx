import { Grid } from '@mui/material'
import React from 'react'
import '../style.scss'
import { Article, Folder, Note, Square } from '@mui/icons-material'

const LeftSubNavBar = () => {
    const folders = [
        {
            name: "Ngữ văn",
            grades: [
                {
                    grade: "Khối 10",
                    courses: ["Bài giảng 1", "Bài giảng 2"],
                },
                {
                    grade: "Khối 11",
                    courses: ["Bài giảng 1", "Bài giảng 2"]
                }
            ]
        },
        {
            name: "Toán",
            grades: [
                {
                    grade: "Khối 10",
                    courses: ["Bài giảng 1", "Bài giảng 2"],
                },
                {
                    grade: "Khối 11",
                    courses: ["Bài giảng 1", "Bài giảng 2"]
                }
            ]
        },
    ]
    return (
        <Grid item xs={2} style={{ padding: 0 }}>
            <div className='sub-nav-bar sub-nav-bar-left'>
                <div className="sub-nav-bar-item">
                    <div className="sub-nav-bar-item-name">Thư mục</div>
                    <div className="sub-nav-bar-item-content">
                        <div className="sub-nav-bar-item-content-folder">
                            {
                                folders.map((folder, index) => (
                                    <>
                                        <div key={index} className='sub-nav-bar-item-content-folder-name'>
                                            <Folder style={{ width: "30", height: "30", color: "orange" }} />
                                            <div>{folder.name}</div>
                                        </div>
                                        {
                                            folder.grades.map((grade, index) => (
                                                <>
                                                    <div className='sub-nav-bar-item-content-folder-grade' key={index}>
                                                        <Note style={{ width: "30", height: "30", color: "#008DDA" }} />
                                                        <div>{grade.grade}</div>
                                                    </div>
                                                    {
                                                        grade.courses.map((course, index) => (
                                                            <div className='sub-nav-bar-item-content-folder-course'>
                                                                <Article style={{ width: "30", height: "30", color: "#EFB38E" }} />
                                                                {course}
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                            ))
                                        }</>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="sub-nav-bar-item">
                    <div className="sub-nav-bar-item-name">Thông báo</div>
                    <div className="sub-nav-bar-item-content">
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default LeftSubNavBar