import React from 'react'
import FileItem from './../FileItem/FileItem'

const FileList = ({files}) => {
    return (
        <ul className="file-list">
           {
               files &&
               files.map(f => (<FileItem key={f.name} file={f} />))
           }
        </ul>
    )
}

export default FileList
