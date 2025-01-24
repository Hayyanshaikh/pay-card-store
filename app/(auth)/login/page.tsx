"use client"
import React from "react";
import Form from "antd/es/form";
import { Input, Button, Checkbox } from "antd";

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.error("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <Form
          form={form}
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          {/* Email Input */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="rounded-lg"
              size="large"
            />
          </Form.Item>

          {/* Password Input */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              className="rounded-lg"
              size="large"
            />
          </Form.Item>

          {/* Remember Me Checkbox */}
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full rounded-lg"
            >
              Login
            </Button>
          </Form.Item>

          <div className="text-center">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <a className="text-blue-500 hover:underline" href="/register">
                Register
              </a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
