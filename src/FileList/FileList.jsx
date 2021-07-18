import axios from 'axios'
import React from 'react'
import FileItem from './../FileItem/FileItem'

const FileList = ({ files, setFiles }) => {
    const deleteFileHandler = (_name) => {

        // axios.delete('http://localhost:8080/upload', {
        //     headers: {},
        //     data: { name: _name }
        // })
        axios.delete(`http://localhost:8080/upload?name=${_name}`)
            .then((res) => setFiles(files.filter(f => f.name !== _name)))
            .then((err) => console.error(err));
    }
    return (
        <ul className="file-list">
            {
                files &&
                files.map(f => (<FileItem
                    key={f.name}
                    file={f}
                    deleteFile={deleteFileHandler} />))
            }
        </ul>
    )
}

export default FileList
