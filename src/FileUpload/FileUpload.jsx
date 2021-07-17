import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss'

const FileUpload = () => {
    return (
        <>
            <div className="file-card">

                <div className="fileinputs">
                    <input type="file" />
                    <button>
                        <div className="icon">
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                        Upload
                    </button>
                </div>

                <p className="main">Supported files</p>
                <p className="info">PDF, JPG, PNG</p>

            </div>
        </>
    )
}

export default FileUpload
