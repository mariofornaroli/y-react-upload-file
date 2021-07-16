import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faTrash } from '@fortawesome/free-solid-svg-icons'

const FileItem = ({ file }) => {
    return (
        <>
            <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
                <div className="file-info">
                    <p>{file.name}</p>
                    <div className="progress"></div>
                </div>
                <div className="actions">
                    <div className="loading"></div>
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </li>
        </>
    )
}

export default FileItem
