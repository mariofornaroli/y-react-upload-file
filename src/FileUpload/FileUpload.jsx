import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './FileUpload.scss'
import axios from 'axios'

const FileUpload = ({ files, setFiles }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => setFiles([...files, file]))
            .then((err) => console.error(err));
    }

return (
    <>
        <div className="file-card">

            <div className="file-inputs">
                <input type="file" onChange={uploadHandler} />
                <button>
                    <i>
                        <FontAwesomeIcon icon={faPlus} />
                    </i>
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
