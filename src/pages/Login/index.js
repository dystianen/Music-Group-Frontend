import React, {useState} from "react";
import {observer} from 'mobx-react-lite';
import {useStore} from "../../utils/useStore";
import {Button, Card, Checkbox, Col, Form, Input, Row, Typography, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

const {Title} = Typography;

export const Login = observer(() => {
    const store = useStore();
    const [form] = Form.useForm();

    let history = useHistory();

    async function onFinish(values) {
        try {
            const body = {
                email: values.email,
                password: values.password,
            }

            console.log({body});
            await store.authentication.login(body);
            history.push('/app/admin')
        } catch (e) {
            message.error(e);
        }
    };

    return <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Row justify={'center'}>
            <Col>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Card
                        style={{width: 320, textAlign: 'center'}}
                        headStyle={{fontSize: 13, fontWeight: 200}}
                        className={"shadow"}
                        bordered={true}
                        title={<Title level={4} strong>SC Music Group</Title>}
                    >
                        <Form
                            layout={'vertical'}
                            name="normal_login"
                            className="login-form"
                            form={form}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                size={'large'}
                                rules={[{required: true, message: 'Please input your Username!'}]}
                            >
                                <Input
                                    prefix={<UserOutlined className="site-form-item-icon"/>}
                                    type="text"
                                    placeholder="Email"/>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 0,
                                }}
                                label="Password"
                                name="password"
                                size={'large'}
                                rules={[{required: true, message: 'Please input your Password!'}]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="site-form-item-icon"/>}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 5,
                                    textAlign: 'left'
                                }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 0,
                                }}>
                                <Button type="primary"
                                        block
                                        htmlType="submit"
                                        size={'large'}
                                        className="login-form-button">
                                    Sign In
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </Col>
        </Row>

    </div>;
});
