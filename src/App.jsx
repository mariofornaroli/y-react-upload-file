import { useState } from 'react'
import './App.scss';
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';

function App() {
  const [files, setFiles] = useState([{
    name: 'fileName.pdf'
  }])
  return (
    <div className="App">
      <div className="title">Upload file</div>
      <FileUpload files={files} setFiles={setFiles} />
      <FileList files={files} setFiles={setFiles} />
    </div>
  );
}

export default App;
