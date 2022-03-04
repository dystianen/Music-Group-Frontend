import React, {useEffect, useState} from 'react';
import {
    Menu,
    Dropdown,
    Image,
    Avatar,
    message,
    Typography,
} from 'antd';
import Icon, {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined, UserOutlined,
} from '@ant-design/icons';
import ProLayout, {PageContainer} from '@ant-design/pro-layout';
import {AppRoute} from '../../routes/app';
import {useHistory, useLocation, Link} from 'react-router-dom';
import icon from '../../assets/icon/sc-logo.png';
import './DesktopLayout.css';

import MenuList from './MenuList';
import {useStore} from "../../utils/useStore";
import {observer} from "mobx-react-lite";

const {Title} = Typography;

export const DesktopLayout = observer(() => {
            const history = useHistory();
            const store = useStore();
            const location = useLocation();
            const [pathname, setPathname] = useState(location.pathname);
            const [collapsed, setCollapsed] = useState(false);

            const styles = {
                logo: {
                    display: 'flex',
                    flexDirection: 'row',
                    wrap: 'wrap',
                    gap: '0.5em',
                }
            }

            const content = (
                <PageContainer>
                    <AppRoute/>
                </PageContainer>
            );

            const sidebarIcon = () => {
                return (
                    <div style={styles.logo}>
                        <Image preview={false} style={{width: "40px", height: "40px"}} src={icon}/>
                        <Title className={'title-logo'} level={3} strong>SC Groups Music</Title>
                    </div>
                )
            }

            const menu = (
                <Menu style={{width: 'auto', backgroundColor: '#ffffff'}}>
                    <Menu.Item key="0">
                        {/*<a>{store.authentication.userData?.name}</a>*/}
                        <span>DJ Cemplek</span>
                    </Menu.Item>
                    <Menu.Divider/>
                    <Menu.Item key="2">
                        <p onClick={() => {
                            // store.authentication.logout()
                            message.success("Successfully logout!")
                            history.push('/login')
                        }}> Sign out</p>
                    </Menu.Item>
                </Menu>
            );

            return (
                <ProLayout
                    layout={'side'}
                    route={{
                        path: MenuList.route.path,
                        icon: MenuList.route.icon,
                        routes: MenuList.route.routes.filter(r => {
                            return r
                        })
                    }}
                    location={{pathname}}
                    pathname={pathname}
                    headerHeight={50}
                    headerTheme={'light'}
                    navTheme={'light'}
                    fixSiderbar={true}
                    collapsed={collapsed}
                    collapsedButtonRender={false}
                    menuItemRender={(item, dom) => (
                        <div
                            key={item.path}
                            onClick={() => {
                                setPathname(item.path);
                                if (item.path == '/app/revenue') {
                                    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfqpHhNpWqRln4V-XVTujUAI72rzI5ODvXDljEq8GVOUYPt-Q/closedform')
                                } else {
                                    history.push(item.path);
                                }
                            }}
                        >
                            {dom}
                        </div>
                    )}
                    onCollapse={setCollapsed}
                    logo={sidebarIcon}
                    title={''}
                    pageTitleRender={props => {
                        const currentRoute = MenuList.title

                        const defaultRouteName = props.pathname.replace(/\//g, ' ').trim();

                        return currentRoute ?? defaultRouteName;
                    }}
                    headerContentRender={() => {
                        return (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'nowrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 1em 0 0',
                            }}>
                                <div
                                    onClick={() => setCollapsed(!collapsed)}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '47px',
                                        height: '45px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                                </div>

                                <Dropdown overlay={menu} trigger={['click']}>
                                    <a className="ant-dropdown-link"
                                       style={{display: 'flex', alignItems: 'center', color: 'black'}}
                                       onClick={e => e.preventDefault()}>
                                        <Avatar style={{backgroundColor: '#87d068'}} icon={<UserOutlined/>}/>
                                        <span style={{marginLeft: '0.5em'}}>DJ Cemplek</span>
                                        <DownOutlined style={{ marginLeft: '0.5em' }} />
                                    </a>
                                </Dropdown>
                            </div>
                        );
                    }}
                >
                    {content}
                </ProLayout>
            );
        }
    )
;
