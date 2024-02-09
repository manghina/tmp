import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import type { SelectProps } from 'antd';
import { apiClient } from '@b/services/http/client';

const InputAutoselect: React.FC = (props:any) => {
  const { url, field, required, name } = props
  const [options, setOptions] = useState<SelectProps<object>['options']>([]);
  const [value , setValue] = useState<any | null>(null)

  const handleSearch = (value: string) => {
    const request = {field : field, value : value}
    apiClient
    .post(`/api/${url}`, request)
    .then(res => {
      const options : any[] = []
      res.data.map((e:any)=> {e['value'] = e[field]; options.push(e)})
      setOptions(options)
    })
  };

  const onSelect = (value: string) => {
    setValue(value);
  };

  return (
    <AutoComplete
      key={name}
      className={props.className}
      popupMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
      size="large"
      value={value}
    >
      <Input.Search value={value} name={name} size="large" enterButton />
    </AutoComplete>
  );
};

export default InputAutoselect;