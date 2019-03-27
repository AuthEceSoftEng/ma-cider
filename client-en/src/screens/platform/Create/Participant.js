import React from 'react';
import { hasErrors, isRequiredField } from '../../../utilities/helpers';
import { PARTICIPANT_TYPES } from '../../../utilities/data'
import { createParticipant } from '../../../api/participants'
import { Input, Button, Row, Col, message, Select, Checkbox, Form } from 'antd';

const TextArea = Input.TextArea;

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

class Participant extends React.Component {

    state = {
        loading: false
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true })
                createParticipant({ ...values, ...values.dataOwner ? { dataOwner: values.dataOwner } : { dataOwner: false } })
                    .then(app => {
                        message.success('Participant created!', 6);
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
        const typeError = isFieldTouched('type') && getFieldError('type');
        const organizationError = isFieldTouched('organization') && getFieldError('organization');
        const explanationError = isFieldTouched('explanation') && getFieldError('explanation');

        return (
            <div>
                <h1 style={{ color: '#2e4050' }}>Create a <strong>Participant</strong></h1>
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
                                    rules: [{ required: isRequiredField('participant', 'name'), message: 'Please input a name for the participant!', whitespace: true }],
                                })(
                                    <Input placeholder="Participant name" />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Type:'
                                validateStatus={typeError ? 'error' : ''}
                                help={typeError || ''}
                            >
                                {getFieldDecorator('type', {
                                    rules: [{ required: isRequiredField('participant', 'type'), message: 'Please select type of participant!' }],
                                })(
                                    <Select placeholder='Select participant type'>
                                        {PARTICIPANT_TYPES.map((type, i) => {
                                            return (
                                                <Select.Option key={i} value={type}>{type}</Select.Option>
                                            )
                                        })}
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Explanation:'
                                validateStatus={explanationError ? 'error' : ''}
                                help={explanationError || ''}
                            >
                                {getFieldDecorator('explanation', {
                                    rules: [{ required: isRequiredField('participant', 'explanation'), message: 'Please input an explanation for the participant!', whitespace: true }],
                                })(
                                    <TextArea autosize={{ minRows: 2, maxRows: 6 }} placeholder="Participant explanation" />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Organization:'
                                validateStatus={organizationError ? 'error' : ''}
                                help={organizationError || ''}
                            >
                                {getFieldDecorator('organization', {
                                    rules: [{ required: isRequiredField('participant', 'organization'), message: 'Please input an organization for the participant!', whitespace: true }],
                                })(
                                    <Input placeholder="Participant organization" />
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('dataOwner', {
                                    valuePropName: 'checked'
                                })(
                                    <Checkbox>Is data owner?</Checkbox>
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

export default Form.create()(Participant);
