import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const FileUpload = () => {
    return (
        <>
            <div className="card">
                <button className="cta">
                    <FontAwesomeIcon icon={faPlus} />
                    Upload
                </button>

                <p className="main">Supported files</p>
                <p className="info">PDF, JPG, PNG</p>

            </div>
        </>
    )
}

export default FileUpload
