import React, {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {Card, Col, Form, Input, Row, Select} from "antd";
import {useParams} from "react-router-dom";
import {useStore} from "../../utils/useStore";

export const DetailAdmin = observer(() => {
    const [form] = Form.useForm();
    const params = useParams();
    const store = useStore();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await store.admin.getDetail(params.id);

        const data = res.body.data.admin[0]
        form.setFieldsValue({
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            bank_name: data.bank_name,
            bank_account_number: data.bank_account_number,
            bank_account_holder_name: data.bank_account_holder_name,
            amount: data.amount,
            phone_number: data.phone_number,
            status: data.status,
        })
    }

    return (
        <Card
            title={'Detail'}
        >
            <Form form={form} layout={'vertical'}>
                <Form.Item name={'artist'} label={'Artist Name'}>
                    <Input disabled defaultValue={localStorage.getItem('username')}/>
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label={'Email'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input placeholder={'Input email'}/>
                </Form.Item>
                <Row gutter={24}>
                    <Col>
                        <Form.Item
                            name={'firstname'}
                            label={'First Name'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input firstname!',
                                },
                            ]}
                        >
                            <Input placeholder={'Input firstname'}/>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={'lastname'}
                            label={'Last Name'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input lastname!',
                                },
                            ]}
                        >
                            <Input placeholder={'Input lastname'}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col>
                        <Form.Item
                            name={'bank_name'}
                            label={'Bank Name'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input bank name!',
                                },
                            ]}
                        >
                            <Input placeholder={'Input bank name'}/>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item
                            name={'bank_account_number'}
                            label={'Bank Account Number'}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input bank account number!',
                                },
                            ]}
                        >
                            <Input placeholder={'Input bank account number'}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name={'bank_account_holder_name'}
                    label={'Bank Account Holder Name'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input bank account holder name!',
                        },
                    ]}
                >
                    <Input placeholder={'Input bank account holder name'}/>
                </Form.Item>
                <Form.Item
                    name={'amount'}
                    label={'Amount'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input amount!',
                        },
                    ]}
                >
                    <Input placeholder={'Input amount'}/>
                </Form.Item>
                <Form.Item
                    name={'phone_number'}
                    label={'Phone Number'}
                    rules={[
                        {
                            required: true,
                            message: 'Please input phone number!',
                        },
                    ]}
                >
                    <Input placeholder={'Input phone number'}/>
                </Form.Item>
                <Form.Item
                    name={'status'}
                    label={'Status Transfer'}
                    rules={[
                        {
                            required: true,
                            message: 'Please select status transfer!',
                        },
                    ]}
                >
                    <Select placeholder={'Select status transfer'}>
                        <Select.Option key='transferred' value={'transferred'}>
                            Transferred
                        </Select.Option>
                        <Select.Option key='not_available' value={'not_available'}>
                            Not Available
                        </Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Card>
    )
})