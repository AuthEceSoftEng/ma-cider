import React from 'react';
import apple from '../../assets/icons/apple.png'
import { Layout, Icon } from 'antd';
import './styles.css';

const { Header } = Layout;

const brand =
    <span className="app-header-brand">
        <span className="app-header-brand-title">CIDER</span>
        <img alt="cider logo" src={apple} className="app-header-brand-logo slideDown" />
    </span >

class AppHeader extends React.Component {

    render() {
        return (
            <Header className="app-header">
                <div className="app-header-content">
                    <Icon
                        className="trigger"
                        type={this.props.sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
                        style={{
                            marginTop: '19px',
                            color: 'white',
                            position: 'absolute',
                            left: '43px',
                            fontSize: '30px',
                            cursor: 'pointer'
                        }}
                        onClick={() => { this.props.toggleSidebarCollapse() }}
                    />
                    <a href="" className="no-decoration">
                        {brand}
                    </a>
                </div>
            </Header>
        )
    }
}

export default AppHeader
