'use client'

import { FormEvent } from 'react'
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Button, Checkbox, Form, Input, Radio } from 'antd';

const FormSchema = z
.object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
    role: z.enum(['user', 'admin']).optional(),
})
.refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
});

const CreateUser = () => {

    // Radio Button
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };

    const router = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        },
    });
    const onSubmit = async (values: z.infer<typeof FormSchema>) => {
        const response = await fetch('/api/user',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
            role: values.role
            })
        })
    
        if(response.ok){
            router.push('/')
        }
        else {
            console.log('Something went wrong.');
        }
        };
 
  return (
    <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    onFinish={onSubmit}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Role"
      name="role"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={"admin"}>Admin</Radio>
      <Radio value={"employee"}>Employee</Radio>
      <Radio value={"courier"}>Courier</Radio>
    </Radio.Group>
    
    </Form.Item>
   
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Confirm Password"
      name="confirmPassword"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
    }
  export default CreateUser;