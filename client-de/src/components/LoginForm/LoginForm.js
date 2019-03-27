import React from 'react';
import Button from 'antd/lib/button'
import Form from 'antd/lib/form';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';

const FormItem = Form.Item;

/**
 * @param {object} this.props
 * @param {function} this.props.handleSubmit
 * @param {boolean} this.props.loading
 */
class LoginForm extends React.Component {

    _handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.handleSubmit(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h3>Login to platform</h3>
                <Form onSubmit={this._handleSubmit} className="login-form" style={{}}>
                    <FormItem wrapperCol={{ xs: 24, sm: { span: 24, offset: 0 }, lg: { span: 16, offset: 4 } }}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                    <FormItem wrapperCol={{ xs: 24, sm: { span: 24, offset: 0 }, lg: { span: 16, offset: 4 } }}>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </FormItem>
                    <FormItem wrapperCol={{ xs: 24, sm: { span: 24, offset: 0 }, lg: { span: 16, offset: 4 } }}>
                        <Button aria-label="Log in" loading={this.props.loading} block type="primary" htmlType="submit" className="login-form-button">
                            Log in
                    </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export default Form.create()(LoginForm);
// export default LoginForm;
