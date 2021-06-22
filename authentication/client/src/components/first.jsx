import React from "react";
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

export default function First() {
  console.log("First");
  async function onFinish(values) {
    console.log('Success:', values);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/first/login`, {...values});
    console.log("Result: ", result);
  }

  function onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
  }

  return (
    <>
      <h1>{"First"}</h1>
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
