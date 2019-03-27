import React from 'react';
import { Modal, message, Row, Col } from 'antd';
import { LoginForm, RegisterForm } from '../_index'
import { isUserLoggedIn } from '../../utilities/helpers'
import { loginAPI, registerAPI } from '../../api/users'

class ConnectToPlatformModal extends React.Component {

    state = {
        modalVisible: false,
        registerFormVisible: false,
        loading: false
    }

    showModal = () => {
        if (isUserLoggedIn()) {
            window.location.replace('/platform');
        } else {
            this.setState({
                modalVisible: true,
            });
        }
    }
    hideModal = () => {
        this.setState({
            modalVisible: false,
        });
    }

    login = values => {
        this.setState({ loading: true })
        // console.log('Received values of form: ', values);
        loginAPI(values.username, values.password)
            .then(({ user, token }) => {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);
                window.location.replace('platform/home');
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    register = values => {
        this.setState({ loading: true })
        // console.log('Received values of form: ', values);
        registerAPI(values.username, values.password)
            .then(({ user }) => {
                message.success('User created, please login.', 8)
                this.setState({ registerFormVisible: false })
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    render() {
        return (
            <Modal
                title="Connect to Documentation Platform"
                closable={!this.state.loading}
                visible={this.state.modalVisible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                footer={null}>
                <Row>
                    <Col xs={24} sm={{ span: 18, offset: 3 }} md={{ span: 20, offset: 2 }}>
                        {
                            this.state.registerFormVisible ?
                                <div>
                                    <RegisterForm handleSubmit={this.register} loading={this.state.loading} />
                                    <div style={{ textAlign: 'right' }}>
                                        Back to <a href="#" onClick={() => { this.setState({ registerFormVisible: false }) }}>login</a>
                                    </div>
                                </div>
                                :
                                <div>
                                    <LoginForm handleSubmit={this.login} loading={this.state.loading} />
                                    <div style={{ textAlign: 'right' }}>
                                        Or <a href="#" onClick={() => { this.setState({ registerFormVisible: true }) }}>create account</a>
                                    </div>
                                </div>

                        }
                    </Col >
                </Row >
            </Modal>
        )
    }
}

export default ConnectToPlatformModal;
