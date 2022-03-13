import React, { useEffect, useState } from 'react';
import { Card, Typography, Table, Button, Tag, Modal, Form, Input, Row, Col, Select, message, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Icon, { EditOutlined, EyeOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { observer } from "mobx-react-lite";
import { useStore } from "../../utils/useStore";
import moment from "moment";
import { useHistory } from "react-router-dom";

const { Title } = Typography;

export const Admin = observer(() => {
    const store = useStore();
    const history = useHistory();
    const [form] = Form.useForm();
    const [isModal, setIsModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [IDData, setIDData] = useState('');
    const [dataAdmin, setDataAdmin] = useState([]);
    const [index, setIndex] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await store.admin.getAll();

        setDataAdmin(res.body);
        console.log({ res })
    }

    const styles = {
        actionFooter: {
            display: 'flex',
            justifyContent: 'end',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '5px',
        },
    };

    const statusValues = (record) => {
        switch (record || '') {
            case true:
                return <Tag color={'green'}>Transferred</Tag>;
            case false:
                return <Tag color={'red'}>Not Available</Tag>;
            default:
                return record;
        }
    };

    const setEditValue = (data) => {
        console.log({ data })
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

    async function onSubmit(data) {
        try {
            setIsLoading(true);
            const body = {
                artistName: localStorage.getItem('username'),
                email: data.email,
                firstName: data.firstname,
                lastName: data.lastname,
                bankName: data.bank_name,
                accountNumber: data.bank_account_number,
                accountName: data.bank_account_holder_name,
                amount: data.amount,
                phone: data.phone_number,
                status: data.status,
            };

            if (isEdit) {
                const res = await store.admin.update(IDData, body);

                if (res.body.statusCode == 200) {
                    fetchData()
                    setIsModal(false);
                    setIsEdit(false);
                    form.resetFields();
                    message.success('Updated successfully');
                } else {
                    message.error('failed to update');
                }
            } else {
                const res = await store.admin.create(body);

                console.log({ res })

                if (res.body.statusCode == 201) {
                    fetchData()
                    setIsModal(false);
                    setIsEdit(false);
                    form.resetFields();
                    message.success(res.body.message);
                } else {
                    message.error(res.body.message);
                }
            }

            setIsLoading(false);
        } catch (e) {
            message.error(e);
        }
    };

    const modalAddRevenue = () => {
        return (
            <Modal
                title={
                    <Title level={4} strong>
                        {isEdit ? 'Edit Revenue' : 'Add Revenue'}
                    </Title>
                }
                visible={isModal}
                maskClosable={false}
                closable={true}
                onCancel={() => setIsModal(false)}
                footer={
                    <div style={styles.actionFooter}>
                        <Button
                            onClick={() => {
                                setIsModal(false);
                                setIsEdit(false);
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            type='primary'
                            onClick={() => {
                                form.validateFields().then((values) => {
                                    onSubmit(values);
                                });
                            }}
                        >
                            Submit
                        </Button>
                    </div>
                }
            >
                <Form form={form} layout={'vertical'}>
                    <Form.Item name={'artist'} label={'Artist Name'}>
                        <Input disabled defaultValue={localStorage.getItem('username')} />
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
                        <Input placeholder={'Input email'} />
                    </Form.Item>
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
                        <Input placeholder={'Input firstname'} />
                    </Form.Item>
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
                        <Input placeholder={'Input lastname'} />
                    </Form.Item>
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
                        <Input placeholder={'Input bank name'} />
                    </Form.Item>
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
                        <Input placeholder={'Input bank account number'} />
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
                        <Input placeholder={'Input bank account holder name'} />
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
                        <Input placeholder={'Input amount'} />
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
                        <Input placeholder={'Input phone number'} />
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
                            <Select.Option key='transferred' value={true}>
                                Transferred
                            </Select.Option>
                            <Select.Option key='not_available' value={false}>
                                Not Available
                            </Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };

    const modalDelete = (id) => {
        Modal.confirm({
            title: 'Hapus Transaksi',
            icon: <ExclamationCircleOutlined />,
            content: 'Apakah anda yakin ingin mengahapus data transaksi ini?',
            okText: 'Oke',
            cancelText: 'Cancel',
            onOk() {
                store.admin.delete(id);
                fetchData()
            }
        });
    };

    const columns = [
        {
            title: 'No. ',
            key: index,
            dataIndex: index,
            render: (t, r, index) => `${(page - 1) * 10 + index + 1}`,
        },
        {
            title: 'Date',
            key: 'created_at',
            dataIndex: 'created_at',
            render: (record) => moment(record).format('DD MMM YYYY HH:mm')
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (record) => statusValues(record),
        },
        {
            title: 'Action',
            key: 'action',
            width: 120,
            align: 'center',
            render: (record) => (
                <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                    <Button
                        type='link'
                        icon={<EditOutlined />}
                        style={{ color: '#000000' }}
                        onClick={() => {
                            setIDData(record.id);
                            setIsEdit(true);
                            setIsModal(true);
                            setEditValue(record);
                        }}
                    />
                    <Button
                        type='link'
                        icon={<EyeOutlined />}
                        style={{ color: '#000000' }}
                        onClick={() => {
                            history.push(`/app/detail/${record.id}`)
                        }}
                    />
                    <Button
                        type='link'
                        icon={<DeleteOutlined />}
                        style={{ color: '#000000' }}
                        onClick={() => {
                            modalDelete(record.id);
                        }}
                    />
                </div>
            ),
        },
    ];

    return (
        <Card
            title={<Title level={4} strong>Admin</Title>}
            extra={
                <Button type={'primary'} icon={<PlusOutlined />} onClick={() => setIsModal(true)}>
                    Add Revenue
                </Button>
            }
        >
            {modalAddRevenue()}
            <Spin spinning={isLoading}>
                <Table
                    columns={columns}
                    dataSource={dataAdmin?.data?.map(it => it)}
                    scroll={{ x: 'max-content', y: 400 }} 
                    pagination={{
                        total: dataAdmin.count,
                        onChange(current) {
                            setPage(current);
                        },
                    }}

                    />
            </Spin>
        </Card>
    );
});
