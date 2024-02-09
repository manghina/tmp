import React,{useState} from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import {Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


const { Dragger } = Upload;

const InputDropzone: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]); 
  console.log("fileList>>>>>",fileList)

  localStorage.setItem('file',JSON.stringify(fileList))


const props: UploadProps = {
  name: 'file',
  multiple: true,
  onChange(info) {
    console.log("info>>>>>",info.file)
    setFileList(info.fileList);
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


return (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Premi o trascina i file per caricarli</p>
  </Dragger>
);


}

export default InputDropzone;