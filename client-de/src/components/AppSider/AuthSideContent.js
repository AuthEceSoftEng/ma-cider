import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Divider, Icon, Avatar } from 'antd'
import { GudebookMenuItems, GuidebookkeysLinksMap } from './GuidebookSideContent'
import { getMyUsername, getMyRole } from '../../utilities/helpers'

const { SubMenu } = Menu;

const keysLinksMap = [
    { link: '/platform/my-projects', key: 'platform-1' },
    { link: '/platform/create/project', key: 'platform-2-1' },
    { link: '/platform/create/activity', key: 'platform-2-2' },
    { link: '/platform/create/participant', key: 'platform-2-3' },
    { link: '/platform/create/app', key: 'platform-2-4' },
    { link: '/platform/favorites', key: 'platform-3' },
    { link: '/platform/settings', key: 'platform-4' },
    { link: '/platform/users', key: 'platform-5' },
].concat(GuidebookkeysLinksMap)

const getDefaultSelectedKeys = () => {
    const pathname = window.location.pathname;
    let f = keysLinksMap.find(k => pathname === k.link) || keysLinksMap.find(k => pathname.includes(k.link))
    if (f) {
        return f.key
    } else {
        return null;
    }
}

const getDefaultOpenKeys = () => {
    const pathname = window.location.pathname
    let ret = [];
    if (pathname.includes('/guidebook')) {
        ret = ['platform-guidebook-submenu']
    } else if (pathname.includes('/platform/create')) {
        ret = ['platform-2-0']
    }
    return ret;
}

const AuthSideContent = () => {
    return (
        <div>
            <div className="logo" style={{
                height: 'auto',
                background: 'rgba(255, 255, 255, .2)',
                margin: '16px',
                textAlign: 'center'
            }}>
                <div>
                    <Avatar style={{ backgroundColor: 'rgb(170,208,219)' }} icon="user" size="large" />
                    <p style={{ marginTop: '4px', overflowWrap: 'break-word' }}>
                        {getMyUsername() || ''}
                        {/* <br /> */}
                        {/* <span style={{ fontStyle: 'italic', visibility: 'visible' }}>Developer</span> */}
                    </p>
                </div>
            </div>
            <Menu
                style={{ paddingBottom: '40px' }}
                defaultOpenKeys={getDefaultOpenKeys()}
                theme="light"
                defaultSelectedKeys={[getDefaultSelectedKeys()]}
                selectedKeys={[getDefaultSelectedKeys()]}
                mode="inline">
                <Menu.Item key="platform-1">
                    <Link to="/platform/my-projects">
                        <Icon type="book" theme="outlined" />
                        <span>My Projects</span>
                    </Link>
                </Menu.Item>
                <SubMenu key="platform-2-0" title={<span ><Icon type="plus" /><span>Create</span></span>}>
                    <Menu.Item key="platform-2-1"><Link to='/platform/create/project'><span>Project</span></Link></Menu.Item>
                    <Menu.Item key="platform-2-2"><Link to='/platform/create/activity'><span>Activity</span></Link></Menu.Item>
                    <Menu.Item key="platform-2-3"><Link to='/platform/create/participant'><span>Participant</span></Link></Menu.Item>
                    <Menu.Item key="platform-2-4"><Link to='/platform/create/app'><span>App</span></Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="platform-3">
                    <Link to="/platform/favorites">
                        <Icon type="heart" theme="outlined" />
                        <span>Favorites</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="platform-4">
                    <Link to="/platform/settings">
                        <Icon type="setting" theme="outlined" />
                        <span>Settings</span>
                    </Link>
                </Menu.Item>
                {getMyRole() === 'admin' &&
                    <Menu.Item key="platform-5">
                        <Link to="/platform/users">
                            <Icon type="team" theme="outlined" />
                            <span>Users</span>
                        </Link>
                    </Menu.Item>
                }
                <Menu.Item key="platform-6">
                    <span style={{ display: 'block', color: '#ee0000' }} onClick={() => {
                        localStorage.removeItem('user');
                        localStorage.removeItem('token');
                        window.location.replace('/')
                    }}>
                        <Icon type="logout" theme="outlined" />
                        <span>Logout</span>
                    </span>
                </Menu.Item>
                <Divider />
                <SubMenu
                    key="platform-guidebook-submenu"
                    title={
                        <span>
                            <Icon type="book" />
                            <span>Guidebook</span>
                        </span>
                    }>
                    {GudebookMenuItems()}
                </SubMenu>
            </Menu>
        </div>
    )
}

export default AuthSideContent;
