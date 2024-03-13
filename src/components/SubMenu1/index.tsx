import React, { useRef } from 'react'
import DocViewer, { DocViewerRef } from "@cyntler/react-doc-viewer";
import './style.scss'
const SubMenu1 = () => {
    const docViewerRef = useRef<DocViewerRef>(null);

    const docs = [
        { uri: require("./sample.pdf") },
    ];

    return (
        <div className='sub-menu-container'>
            <DocViewer
                ref={docViewerRef}
                documents={docs}
                config={{ header: { disableHeader: true } }}
            />
        </div>
    )
}

export default SubMenu1