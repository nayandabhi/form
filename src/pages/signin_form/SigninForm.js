import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Radio,
  DatePicker,
  Select,
  Checkbox,
  Upload,
} from "antd";

export default function SigninForm() {
  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item>
          <h1>Form</h1>
        </Form.Item>
        <Form.Item
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname!",
            },
          ]}
        >
          <Input placeholder="Firstname" />
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your lastname!",
            },
          ]}
        >
          <Input placeholder="Lastname" />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Emailaddress" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item
          name="select"
          rules={[
            {
              required: true,
              message: "Please Select your City!",
            },
          ]}
        >
          <Select placeholder="Select City">
            <Select.Option value="Ahemdabad">Ahemdabad</Select.Option>
            <Select.Option value="Rajkot">Rajkot</Select.Option>
            <Select.Option value="Surat">Surat</Select.Option>
            <Select.Option value="Mumbai">Mumbai</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="date-picker"
          rules={[
            {
              required: true,
              message: "Please input your birthdate!",
            },
          ]}
        >
          <DatePicker placeholder="Birthdate" />
        </Form.Item>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: "Please input Gender!",
            },
          ]}
        >
          <Radio.Group name="radiogroup">
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
            <Radio value={3}>Other</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
            },
          ]}
        >
          <Input.TextArea placeholder="Address" />
        </Form.Item>
        <Form.Item
          name="image"
          valuePropName="fileList"
          rules={[
            {
              required: true,
              message: "Please upload your image",
            },
          ]}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          name="chack"
          rules={[
            {
              required: true,
              message: "Should accept agreement!",
            },
          ]}
        >
          <Checkbox>I agree with terms and conditions me</Checkbox>
          <br />
          <Checkbox>I want to receive the new slette</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginBottom: "50px" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
