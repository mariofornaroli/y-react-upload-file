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
      <FileUpload />
      <FileList files={files} />
    </div>
  );
}

export default App;
