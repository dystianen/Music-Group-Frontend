import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Card, Button, Form, Input, Typography } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { useStore } from "../../utils/useStore";
import { LeftCircleOutlined } from "@ant-design/icons";

const {Title} = Typography;

export const DetailAdmin = observer(() => {
    const [form] = Form.useForm();
    const params = useParams();
    const store = useStore();
    const history = useHistory();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const res = await store.admin.getDetail(params.id);

        const data = res.body.data
        form.setFieldsValue({
            email: data.email,
            firstname: data.firstName,
            lastname: data.lastName,
            bank_name: data.bankName,
            bank_account_number: data.accountNumber,
            bank_account_holder_name: data.accountName,
            amount: data.amount,
            phone_number: data.phone,
            status: data.status,
        })
    }

    return (
        <Card
            title={<Title level={3} strong>Detail</Title>}
            extra={<Button icon={<LeftCircleOutlined/>} onClick={() => history.goBack()}>Back</Button>}
        >
            <Form form={form} layout={'vertical'}>
                <Form.Item name={'artist'} label={'Artist Name'}>
                    <Input disabled defaultValue={localStorage.getItem('username')} />
                </Form.Item>
                <Form.Item
                    name={'email'}
                    label={'Email'}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name={'firstname'}
                    label={'First Name'}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name={'lastname'}
                    label={'Last Name'}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name={'bank_name'}
                    label={'Bank Name'}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name={'bank_account_number'}
                    label={'Account Number'}
                >
                    <Input disabled />
                </Form.Item>
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
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name={'amount'}
                    label={'Amount'}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name={'phone_number'}
                    label={'Phone Number'}
                >
                    <Input disabled />
                </Form.Item>
                <Form.Item
                    name={'status'}
                    label={'Status Transfer'}
                >
                    <Input disabled />
                </Form.Item>
            </Form>
        </Card>
    )
})