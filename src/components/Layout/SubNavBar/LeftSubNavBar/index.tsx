import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../style.scss'
import { Article, Folder, Note, Square } from '@mui/icons-material'
import { apiGetSpecializedDepartment, apiGetSpecializedDepartmentById } from '../../../../api/specializedDepartment'
import axios from 'axios'
import { base_url } from '../../../../utils/baseUrl'

const LeftSubNavBar = () => {
    const [depts, setDepts] = useState<any>([])


    useEffect(() => {

        const getDepartmentHandler = async () => {
            await apiGetSpecializedDepartment().then((res) => {
                setDepts(res.data);
                console.log(res.data);
            })
        }
        getDepartmentHandler();
    }, []);

    return (
        <Grid item xs={2} style={{ padding: 0 }}>
            <div className='sub-nav-bar sub-nav-bar-left'>
                <div className="sub-nav-bar-item">
                    <div className="sub-nav-bar-item-name">Thư mục</div>
                    <div className="sub-nav-bar-item-content">
                        <div className="sub-nav-bar-item-content-folder">
                            {
                                depts.map((dep: any, index: any) => (
                                    <>
                                        <Document dep={dep}></Document>
                                    </>
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



const Document = ({ dep }: any) => {
    const [documents, setDocuments] = useState<any>([]);
    const [show, setShow] = useState<any>(false);

    useEffect(() => {
        const getDocument = async () => {
            var doc1 = await axios.get(base_url + "Document1/GetDocument1ByUserSpecialiedDepartment?listId=" + dep.id)
            var doc2 = await axios.get(base_url + "Document2/GetDocument2ByUserSpecialiedDepartment?listId=" + dep.id)
            var doc3 = await axios.get(base_url + "Document3/GetDocument3ByUserSpecialiedDepartment?listId=" + dep.id)
            var doc4 = await axios.get(base_url + "Document4/GetDocument4ByUserSpecialiedDepartment?listId=" + dep.id)
            setDocuments([...doc1.data[0].documents, ...doc2.data[0].documents, ...doc3.data[0].documents, ...doc4.data[0].documents]);
        }
        getDocument();
    }, [dep.id])

    //    if(documents.length === 0){
    //     return <>Loading ...</>
    //    }

    return <>
        <div className='sub-nav-bar-item-content-folder-name' onClick={() => setShow(!show)}>
            <Folder style={{ width: "30", height: "30", color: "orange" }} />
            <div>{dep.name}</div>
        </div>
        <div className={show ? 'nav-is-show' : 'nav-is-hidden'}>
            {documents.map((doc: any) => (
                <div key={doc.name} className='sub-nav-bar-item-content-folder-course'>
                    <Article style={{ width: "30", height: "30", color: "#EFB38E" }} />
                    {doc.name}
                </div>
            ))
            }
        </div>
    </>
}

export default LeftSubNavBar