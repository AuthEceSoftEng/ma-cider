import React from 'react';
import { Form, Input, Button, Row, Col, message, Spin, Select } from 'antd';
import { hasErrors, isRequiredField } from '../../../utilities/helpers';
import { createApp } from '../../../api/apps'
import { getProjects } from '../../../api/projects'

const Option = Select.Option
const FormItem = Form.Item
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        md: { span: 6 },
        xl: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        md: { span: 18 },
        xl: { span: 18 }
    }
}

class App extends React.Component {

    state = {
        loading: false,
        fetching: true,
        projects: undefined
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
        getProjects()
            .then(projects => {
                this.setState({ projects, fetching: false })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true })
                createApp(values)
                    .then(app => {
                        message.success('App created!', 6);
                        this.props.history.push({ pathname: '/platform/my-projects' })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const nameError = isFieldTouched('name') && getFieldError('name');
        const descriptionError = isFieldTouched('description') && getFieldError('description');
        const linkError = isFieldTouched('link') && getFieldError('link');
        const relatedProjectError = isFieldTouched('relatedProjectError') && getFieldError('relatedProjectError');

        return (
            <div>
                <h1 style={{ color: '#2e4050' }}>Create an <strong>App</strong></h1>
                <hr style={{ color: '#2e4050' }} />
                <Row>
                    <Col xs={24} xl={{ span: 12, offset: 5 }}>
                        <Form layout="vertical" onSubmit={this.handleSubmit} >
                            <FormItem
                                {...formItemLayout}
                                label='Name:'
                                validateStatus={nameError ? 'error' : ''}
                                help={nameError || ''}
                            >
                                {getFieldDecorator('name', {
                                    rules: [{ required: isRequiredField('app', 'name'), message: 'Please input a name for the app!', whitespace: true }],
                                })(
                                    <Input placeholder="App name" />
                                )}
                            </FormItem>
                            <Spin spinning={this.state.fetching} size='large'>
                                <FormItem
                                    {...formItemLayout}
                                    label='Related project:'
                                    validateStatus={relatedProjectError ? 'error' : ''}
                                    help={relatedProjectError || ''}
                                >
                                    {getFieldDecorator('relatedProject', {
                                        rules: [{ required: isRequiredField('app', 'relatedProject'), message: 'Please select the project related to this app!' }],
                                    })(
                                        <Select placeholder='Select related project'>
                                            {this.state.projects && this.state.projects.length > 0 && this.state.projects.map((proj, i) => {
                                                return (
                                                    <Option key={i} value={proj._id}>{proj.name}</Option>
                                                )
                                            })}
                                        </Select>
                                    )}
                                </FormItem>
                            </Spin>
                            <FormItem
                                {...formItemLayout}
                                label='Description:'
                                validateStatus={descriptionError ? 'error' : ''}
                                help={descriptionError || ''}
                            >
                                {getFieldDecorator('description', {
                                    rules: [{ required: isRequiredField('app', 'description'), message: 'Please input a description for your app!', whitespace: true }],
                                })(
                                    <Input.TextArea placeholder="App description" autosize={{ minRows: 2, maxRows: 6 }} />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Link:'
                                validateStatus={linkError ? 'error' : ''}
                                help={linkError || ''}
                            >
                                {getFieldDecorator('link', {
                                    rules: [{ required: isRequiredField('app', 'link'), message: 'Please input a link for your app!', whitespace: true }],
                                })(
                                    <Input placeholder="App link" />
                                )}
                            </FormItem>
                            <FormItem wrapperCol={{ span: 24 }} >
                                <div style={{ textAlign: 'center' }}>
                                    <Button
                                        aria-label="Submit"
                                        type="primary"
                                        htmlType="submit"
                                        disabled={hasErrors(getFieldsError())}>
                                        Submit
                                    </Button>
                                </div>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default Form.create()(App);
