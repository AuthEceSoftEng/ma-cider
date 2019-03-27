import React from 'react';
import { Button, Form, Input } from 'antd';

const FormItem = Form.Item
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

class FeedbackForm extends React.Component {

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmit(values);
            }
        });
    }

    clearValues = () => {
        this.props.form.setFieldsValue({
            name: '',
            email: '',
            feedback: ''
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this._handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="Name"
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            required: true, message: 'Please input your name!',
                        }],
                    })(
                        <Input placeholder='Your name' />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email', message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true, message: 'Please input your email!',
                            }],
                    })(
                        <Input placeholder='Your e-mail' />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Feedback"
                >
                    {getFieldDecorator('feedback', {
                        rules: [{
                            required: true, message: 'Please input your feedback!',
                        }],
                    })(
                        <Input.TextArea placeholder="Type your feedback..," autosize={{ minRows: 3, maxRows: 6 }} />
                    )}
                </FormItem>
                <FormItem wrapperCol={{ xs: 24, sm: { span: 24, offset: 0 }, lg: { span: 16, offset: 4 } }}>
                    <Button aria-label="Send Feedback" loading={this.props.loading} block type="primary" htmlType="submit">
                        Send Feedback
                </Button>
                </FormItem>
                <div style={{ textAlign: 'right', marginTop: '20px' }}>
                    <a href="https://ww3.unipark.de/uc/UniBremen_Breiter_Forschung/a3ad/" target="_blank" rel="noopener noreferrer">Take part in User Survey</a>
                </div>
            </Form >
        )
    }
}

export default Form.create()(FeedbackForm);