import { useState } from 'react'
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';

function App() {
  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }

  return (
    <div className="App">
      <div className="title">Upload file</div>
      <FileUpload files={files} setFiles={setFiles}
        removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
}

export default App;
