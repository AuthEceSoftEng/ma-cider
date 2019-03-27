import React from 'react';
import { Menu, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom'
import { ConnectToPlatformModal } from '../_index'
import { isUserLoggedIn } from '../../utilities/helpers'
import CO_CREATION_PROCESS from '../../screens/guidebook/data/coCreationProcess/coCreationProcessBasic'

const MenuItemGroup = Menu.ItemGroup

export const GuidebookkeysLinksMap = [
    // Introduction
    { link: '/guidebook/about', key: 'introduction-1' },
    { link: '/guidebook/why-what-who', key: 'introduction-2' },
    { link: '/guidebook/how-to-use', key: 'introduction-3' },
    // Co creation process
    { link: '/guidebook/co-creation-process/1', key: 'co-creation-process-1' },
    { link: '/guidebook/co-creation-process/2', key: 'co-creation-process-2' },
    { link: '/guidebook/co-creation-process/3', key: 'co-creation-process-3' },
    { link: '/guidebook/co-creation-process/4', key: 'co-creation-process-4' },
    { link: '/guidebook/co-creation-process/5', key: 'co-creation-process-5' },
    { link: '/guidebook/co-creation-process/6', key: 'co-creation-process-6' },
    { link: '/guidebook/co-creation-process/7', key: 'co-creation-process-7' },

    // Methods
    { link: '/guidebook/methods', key: 'resources-1' },
    // Case studies
    { link: '/guidebook/case-studies', key: 'resources-2' },
    // Materials
    { link: '/guidebook/materials', key: 'resources-3' },

    // Evaluation framework
    { link: '/guidebook/evaluation-framework', key: 'tools-2' },

    { link: '/data/resources/CIDER.pdf', key: 'cider-download' },

    // This must be in the end
    { link: '/', key: 'home' },
]

const getDefaultSelectedKeys = () => {
    const pathname = window.location.pathname;
    if (pathname === '/') {
        return 'home';
    } else {
        let f = GuidebookkeysLinksMap.find(k => pathname === k.link)
            || GuidebookkeysLinksMap.find(k => pathname.includes(k.link))
        if (f) {
            return f.key
        } else {
            return GuidebookkeysLinksMap[0].key
        }
    }
}

export const GudebookMenuItems = props => {
    return (
        [
            <Menu.Item key="home">
                <Link to="/">
                    <Icon type="home" />
                    <span>Home</span>
                </Link>
            </Menu.Item>,
            <MenuItemGroup key="g1" title={<span><Icon type="bars" /><span className='ml-8'>Introduction</span></span>}>
                <Menu.Item key="introduction-2">
                    <Link to="/guidebook/why-what-who">
                        <span>Co-creation: why, what, who</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="introduction-3">
                    <Link to="/guidebook/how-to-use">
                        <span>Guidebook: How to use</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="introduction-1">
                    <Link to="/guidebook/about" aria-label="About this guidebook">
                        <span>About</span>
                    </Link>
                </Menu.Item>
            </MenuItemGroup>,

            <MenuItemGroup key="g2" title={<span><Icon type="table" /><span className='ml-8'>Co-Creation Process</span></span>}>
                <Menu.Item key="co-creation-process-1">
                    <Link to="/guidebook/co-creation-process/1">
                        <span>{CO_CREATION_PROCESS[0].name}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="co-creation-process-2">
                    <Link to="/guidebook/co-creation-process/2">
                        <span className='break-white-space'>{CO_CREATION_PROCESS[1].name}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="co-creation-process-3">
                    <Link to="/guidebook/co-creation-process/3">
                        <span>{CO_CREATION_PROCESS[2].name}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="co-creation-process-4">
                    <Link to="/guidebook/co-creation-process/4">
                        <span className='break-white-space'>{CO_CREATION_PROCESS[3].name}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="co-creation-process-5">
                    <Link to="/guidebook/co-creation-process/5">
                        <span>{CO_CREATION_PROCESS[4].name}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="co-creation-process-6">
                    <Link to="/guidebook/co-creation-process/6">
                        <span className='break-white-space'>{CO_CREATION_PROCESS[5].name}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="co-creation-process-7">
                    <Link to="/guidebook/co-creation-process/7">
                        <span className='break-white-space'>{CO_CREATION_PROCESS[6].name}</span>
                    </Link>
                </Menu.Item>
            </MenuItemGroup>,

            <MenuItemGroup key="g3" title={<span><Icon type="api" /><span className='ml-8'>Resources</span></span>}>
                <Menu.Item key="resources-1">
                    <Link to="/guidebook/methods/overview">
                        <span>Methods</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="resources-2">
                    <Link to="/guidebook/case-studies">
                        <span>Case studies</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="resources-3">
                    <Link to="/guidebook/materials">
                        <span>Materials</span>
                    </Link>
                </Menu.Item>
            </MenuItemGroup>,

            <MenuItemGroup key="g4" title={<span><Icon type="tool" /><span className='ml-8'>Tools</span></span>}>
                {!isUserLoggedIn() && <Menu.Item key="tools-1">
                    <span style={{ display: 'block' }} onClick={() => { props && props.connectToPlatformModalRef && props.connectToPlatformModalRef.showModal() }}>Documentation Platform</span>
                </Menu.Item>}
                <Menu.Item key="tools-2">
                    <Link to="/guidebook/evaluation-framework">
                        <span>Evaluation Framework</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="tools-3">
                    <a href="https://platform.mobile-age.eu" target="_blank" rel="noopener noreferrer">
                        <span>MADE</span>
                    </a>
                </Menu.Item>
                <Menu.Item key="tools-4">
                    <Link to="/guidebook/introduction">
                        <span>Blog</span>
                    </Link>
                </Menu.Item>
            </MenuItemGroup>,

            <Divider key="sidebar-divider" />,
            <Menu.Item key="cider-download">
                <a href="/data/resources/CIDER.pdf" target="_blank" rel="noopener noreferrer">
                    <Icon type="download" />
                    <span>Guidebook PDF</span>
                </a>
            </Menu.Item>
        ]
    )
}

class GuidebookSideContent extends React.Component {
    render() {
        return (
            <div>
                <div className="app-sider-guidebook-content-title">
                    <span style={{ marginLeft: '5px' }}>Table of Contents</span>
                </div>
                <Menu
                    style={{ paddingBottom: '40px' }}
                    theme="light"
                    defaultSelectedKeys={[getDefaultSelectedKeys()]}
                    selectedKeys={[getDefaultSelectedKeys()]}
                    mode="inline">
                    {GudebookMenuItems({ connectToPlatformModalRef: this.connectToPlatformModalRef })}
                </Menu>
                <ConnectToPlatformModal ref={instance => this.connectToPlatformModalRef = instance} />
            </div >
        )
    }
}

export default GuidebookSideContent;
