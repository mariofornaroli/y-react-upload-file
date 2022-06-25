import React from 'react'
import './FileUpload.scss'
import axios from 'axios'
import { Icon} from "@iconify/react";

const FileUpload = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        if(!file) return;
        file.isUploading = true;
        setFiles([...files, file])

        // upload file
        const formData = new FormData();
        formData.append(
            "newFile",
            file,
            file.name
        )
        axios.post('http://localhost:8080/upload', formData)
            .then((res) => {
                file.isUploading = false;
                setFiles([...files, file])
            })
            .catch((err) => {
                // inform the user
                console.error(err)
                removeFile(file.name)
            });
    }

    return (
        <>
            <div className="file-card">
                <div><Icon style={{height:"34px", width:"34px"}}icon="carbon:cloud-upload"/></div>
                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler} />
                    <button>
                        Select Files
                    </button>
                </div>
            </div>
        </>
    )
}

export default FileUpload
