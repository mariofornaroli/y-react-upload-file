import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import './FileItem.scss'

const FileItem = ({ file, deleteFile }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
                <p>{file.name}</p>
                {/* <div className="file-info">
                    <p>{file.name} - Uploaded</p>
                    <div className="progress"></div>
                </div> */}
                <div className="actions">
                    <div className="loading"></div>
                    <FontAwesomeIcon icon={faTrash}
                        onClick={() => deleteFile(file.name)} />
                </div>
            </li>
        </>
    )
}

export default FileItem
