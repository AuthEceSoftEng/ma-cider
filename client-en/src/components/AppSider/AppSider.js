import React, { Component } from 'react';
import { Layout } from 'antd';
import { isUserLoggedIn } from '../../utilities/helpers';
import GuidebookSideContent from './GuidebookSideContent';
import AuthSideContent from './AuthSideContent';
import { withRouter } from 'react-router-dom'
import './styles.css';
const { Sider } = Layout;

class AppSider extends Component {

    renderSideContent() {
        if (!isUserLoggedIn()) {
            return <GuidebookSideContent />
        } else {
            return <AuthSideContent />;
        }
    }

    render() {
        return (
            <Sider
                width={this.props.width}
                collapsible
                collapsed={this.props.sidebarCollapsed}
                className="app-sider"
                theme="light"
                collapsedWidth={0}
                trigger={null}
                style={{ zIndex: 5 }}
            >
                {this.renderSideContent()}
            </Sider>
        )
    }
}

export default withRouter(AppSider);
