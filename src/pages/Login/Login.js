import React, {useState} from "react";
import {observer} from 'mobx-react-lite';
import {useStore} from "../../utils/useStore";
import {Button, Card, Checkbox, Col, Form, Input, Row, Typography} from 'antd';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";

const {Title} = Typography;

export const Login = observer(() => {
    const store = useStore();
    const [loading, setLoading] = useState(false);

    let history = useHistory();

    const onFinish = values => {
        console.log('Received values of form: ', values);
        enterLoading(values).then(res => {
            console.log(res, "awasaa");
        }).catch((error) => {
            console.log({error}, "awasaa error");
        });
    };

    const enterLoading = async (props) => {
        store.setInitialToken("ayayay", "clap");
        return history.push("/app/page_example_1");
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
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                size={'large'}
                                rules={[{required: false, message: 'Please input your Username!'}]}
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
                                rules={[{required: false, message: 'Please input your Password!'}]}
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
                                        loading={loading}
                                        htmlType="submit"
                                        size={'large'}
                                        onSubmit={enterLoading}
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
