import { Button, Card, Modal, Col, Form, Input, Row, Typography, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useStore } from '../../utils/useStore';

const { Title } = Typography;


export const Register = () => {
    const store = useStore();
    const history = useHistory();
    const [form] = Form.useForm();

    async function onFinish(values) {
        try {
            const body = {
                firstName: values.firstname,
                lastName: values.lastname,
                username: values.username,
                email: values.email,
                password: values.password,
            }

            console.log({body});
            const res = await store.authentication.register(body);

            console.log({res})

            if (res.body.statusCode === 201)     {
                history.push('/login')
                message.success('Registration Success')
            } else {
                message.error('Registration Failed')
            }
        } catch (e) {
            message.error(e);
        }
    };

    return <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Row justify={'center'}>
            <Col>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Card
                        style={{ width: 320, textAlign: 'center' }}
                        headStyle={{ fontSize: 13, fontWeight: 200 }}
                        className={"shadow"}
                        bordered={true}
                        title={<Title level={4} strong>Register Your Account</Title>}
                    >
                        <Form
                            layout={'vertical'}
                            name="normal_login"
                            className="login-form"
                            form={form}
                            onFinish={onFinish}
                        >
                            <Form.Item name='firstname' label='First Name' rules={[
                                {
                                    required: true,
                                    message: 'please input you firstname!'
                                }
                            ]}>
                                <Input placeholder="Input firstname" />
                            </Form.Item>

                            <Form.Item name='lastname' label='Last Name' rules={[
                                {
                                    required: true,
                                    message: 'please input you lastname!'
                                }
                            ]}>
                                <Input placeholder="Input lastname" />
                            </Form.Item>

                            <Form.Item name='username' label='Username' rules={[
                                {
                                    required: true,
                                    message: 'please input you username!'
                                }
                            ]}>
                                <Input placeholder="Input username" />
                            </Form.Item>

                            <Form.Item name='email' label='Email' rules={[
                                {
                                    required: true,
                                    message: 'please input you email!'
                                }
                            ]}>
                                <Input placeholder="Input email" />
                            </Form.Item>

                            <Form.Item name='password' label='Password' rules={[
                                {
                                    required: true,
                                    message: 'please input you password!'
                                }
                            ]}>
                                <Input.Password placeholder="Input password" />
                            </Form.Item>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'end',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: '15px',
                                paddingTop: '2em',

                            }}>
                                <Button onClick={() => {
                                    history.goBack();
                                }}>
                                    Cancel
                                </Button>
                                <Button type="primary" htmlType='submit'>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </div>
            </Col>
        </Row>

    </div>;
    // <Card title={<Title level={4} strong>Register</Title>}>
    //     <Form form={form} layout='vertical'>

    //     </Form>
    // </Card>
}