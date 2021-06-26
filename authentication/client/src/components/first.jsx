import React, {useState} from "react";
import {Form, Input, Button} from "antd";
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

const baseURL = `${process.env.REACT_APP_API_URL}`;

export default function First() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  console.log("First");
  async function handleLogin() {
    console.log("login: ", state);
    const result = await axios.post(`${baseURL}/first/login`, {...state});
    console.log(result);
  }

  async function handleRegister() {
    console.log("register: ", state);
    const result = await axios.post(`${baseURL}/first`, {...state});
    console.log(result);
  }

  function handleChange(value, key) {
    return setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <>
      <h1>{"First"}</h1>
      <div style={{marginTop: 50}}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input onChange={(e) => handleChange(e.target.value, "username")} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password onChange={(e) => handleChange(e.target.value, "password")} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button onClick={() => handleLogin()} type="primary">
              {"Login"}
            </Button>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button onClick={() => handleRegister()} type="primary">
              {"Register"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
