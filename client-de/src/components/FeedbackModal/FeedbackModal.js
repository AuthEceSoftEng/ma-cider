import React from 'react';
import { Modal, message, Row, Col, } from 'antd';
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import { createFeedback } from '../../api/feedback'

class FeedbackModal extends React.Component {

    state = {
        modalVisible: false,
        loading: false
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    }
    hideModal = () => {
        this.setState({
            modalVisible: false,
        });
    }

    submit = values => {
        this.setState({ loading: true })
        // console.log('Received values of form: ', values);
        createFeedback({ name: values.name, email: values.email, feedback: values.feedback })
            .then(({ user }) => {
                message.success('Thanks for your feedback! 😀', 8);
                this.hideModal();
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
                title="Send us your feedback!"
                closable={!this.state.loading}
                visible={this.state.modalVisible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                footer={null}
                destroyOnClose={true}
            >
                <Row>
                    <Col xs={24} sm={{ span: 18, offset: 3 }} md={{ span: 20, offset: 2 }}>
                        <FeedbackForm
                            handleSubmit={this.submit} />
                    </Col >
                </Row >
            </Modal>
        )
    }
}

export default FeedbackModal;
