import React,{useEffect} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import fieldProps from './fieldProps'
import { apiClient } from '@b/services/http/client';

  const InputUpload = (prop:any) => {
    // const props: UploadProps = {
    //   name: 'file',
    //   onChange(info:any) {
    //     setValue(info)
    //   },
    // };    

    const props: UploadProps = {
      name: 'file',
      multiple: true,
      action: '/api/media',
      onChange(info:any) {
        const { status,response } = info.file;
        setValue(info)
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
          console.log('Response:', response);
          localStorage.setItem('id',response.spot.id)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
      // onDrop(e) {
      //   console.log('Dropped files', e.dataTransfer.files);
      // },
    };





  const [value, setValue] = React.useState(null)
  console.log("value>>>>>",value)


  return (
    <>
  <Upload {...props} accept="image/png, image/jpeg" >
    <Button icon={<UploadOutlined />}>Premi per Caricare</Button>
  </Upload>
    </>
  )
}
export default fieldProps(InputUpload)