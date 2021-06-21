import React, {useState} from "react";
import {Form, Input, Button, Select} from "antd";
import axios from "axios";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const options = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
];

export default function Register() {
  const [select, setSelect] = useState(null);

  console.log("Register");
  async function onFinish(values) {
    console.log('Success:', values);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/${select}`, {...values});
    console.log("Result: ", result);
  }

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  }

  return (
    <>
      <div style={{marginTop: 50}}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="type" label="Authentication Type" rules={[{ required: true }]}>
            <Select style={{width: 120}} defaultValue={select} onChange={(value) => setSelect(value)}>
              {options.map((option) => {
                return (
                  <Select.Option value={option} key={option}>
                    {option}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              {"Submit"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
