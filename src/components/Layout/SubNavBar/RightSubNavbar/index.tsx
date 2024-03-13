import { Grid } from '@mui/material'
import React from 'react'

const RightSubNavBar = () => {
    return (
        <Grid item xs={2} style={{ padding: 0 }}>
            <div className='sub-nav-bar sub-nav-bar-right'>
                <div className="sub-nav-bar-item">
                    <div className="sub-nav-bar-item-name">Tin tức</div>
                    <div className="sub-nav-bar-item-content">
                    </div>
                </div>
                <div className="sub-nav-bar-item">
                    <div className="sub-nav-bar-item-name">Hỗ trợ</div>
                    <div className="sub-nav-bar-item-content">
                    </div>
                </div>
            </div>
        </Grid>
    )
}

export default RightSubNavBar