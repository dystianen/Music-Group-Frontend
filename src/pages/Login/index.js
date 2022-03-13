import React, {useState} from "react";
import {useStore} from "../../utils/useStore";
import {Button, Card, Modal, Col, Form, Input, Row, Typography, message} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

const {Title} = Typography;

export const Login = () => {
    const store = useStore();
    const [form] = Form.useForm();
    const [isModal, setIsModal] = useState(false);

    let history = useHistory();

    async function onFinish(values) {
        try {
            const body = {
                email: values.email,
                password: values.password,
            }

            console.log({body});
            const res = await store.authentication.login(body);

            console.log({res})

            if (res.body.statusCode === 200)     {
                history.push('/app/admin')
                localStorage.setItem('access_token', res.body.data.access_token)
                localStorage.setItem('username', res.body.data.username)
                message.success('Login Success')
            }
        } catch (e) {
            console.log(e.response.body.message)
            message.error(e.response.body.message);
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
                                    marginBottom: 0,
                                    paddingTop: '2em'
                                }}>
                                <Button type="primary"
                                        block
                                        htmlType="submit"
                                        size={'large'}
                                        className="login-form-button">
                                    Sign In
                                </Button>
                            </Form.Item>

                            <Form.Item
                                style={{
                                    marginBottom: 5,
                                    textAlign: 'left'
                                }}>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Button type="link" onClick={() => history.push('/register')}>Anda belum mempunyai akun?</Button>
                                </Form.Item>
                            </Form.Item>
                        </Form>
                    </Card>
                </div>
            </Col>
        </Row>

    </div>;
};
