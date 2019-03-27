import React from 'react';
import { Form, Input, Button, Row, Col, message, Select, Spin, Upload, Icon, Checkbox, DatePicker } from 'antd';
import { hasErrors, isRequiredField, queryToJson, getMyToken } from '../../../utilities/helpers';
import { ACTIVITY_SUBSTAGES, ACTIVITY_TYPES } from '../../../utilities/data';
import { createActivity } from '../../../api/activities';
import { getProjects } from '../../../api/projects';
import { getParticipants } from '../../../api/participants';

const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker

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

class Activity extends React.Component {

    state = {
        loading: false,
        fetching: true,
        projects: undefined,
        participants: undefined,
        pictureFileList: [],
        supportingMaterialList: []
    }

    constructor() {
        super();
        this.myToken = getMyToken();
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
        Promise.all([getProjects(), getParticipants()])
            .then(([projects, participants]) => {
                this.setState({
                    fetching: false,
                    projects,
                    participants
                }, () => {
                    if (this.props.location.search) {
                        const query = queryToJson(this.props.location.search);
                        if (query.relatedProject) {
                            this.props.form.setFieldsValue({ relatedProject: query.relatedProject })
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true })
                createActivity({
                    ...values,
                    picture_form: undefined,
                    supportingMaterial_form: undefined,
                    date: { start: values.date[0], end: values.date[1] },
                    supportingMaterial: this.state.supportingMaterialList ? this.state.supportingMaterialList.map(v => v.response.uri) : [],
                    ...(this.state.pictureFileList.length > 0 ? { picture: this.state.pictureFileList[0].response.uri } : {})
                })
                    .then(activity => {
                        message.success('Activity created!', 6);
                        this.props.history.push({ pathname: '/platform/my-projects' })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        });
    }

    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const relatedProjectError = isFieldTouched('relatedProject') && getFieldError('relatedProject');
        const nameError = isFieldTouched('name') && getFieldError('name');
        const typeError = isFieldTouched('type') && getFieldError('type');
        const substageError = isFieldTouched('substage') && getFieldError('substage');
        const relatedParticipantsError = isFieldTouched('relatedParticipants') && getFieldError('relatedParticipants');
        const dateError = isFieldTouched('date') && getFieldError('date');
        const locationError = isFieldTouched('location') && getFieldError('location');
        const totalHoursError = isFieldTouched('totalHours') && getFieldError('totalHours');
        const objectiveError = isFieldTouched('objective') && getFieldError('objective');
        const intendedGoalError = isFieldTouched('intendedGoal') && getFieldError('intendedGoal');
        const resultError = isFieldTouched('result') && getFieldError('result');
        const reflectionError = isFieldTouched('reflection') && getFieldError('reflection');
        const supportingMaterialError = isFieldTouched('supportingMaterial') && getFieldError('supportingMaterial');
        const pictureError = isFieldTouched('picture') && getFieldError('picture');

        return (
            <div>
                <h1 style={{ color: '#2e4050' }}>Create an <strong>Activity</strong></h1>
                <hr style={{ color: '#2e4050' }} />
                <Row>
                    <Col xs={24} xl={{ span: 12, offset: 5 }}>
                        <Form layout="vertical" onSubmit={this.handleSubmit} >
                            <Spin spinning={this.state.fetching} size='large'>
                                <FormItem
                                    {...formItemLayout}
                                    label='Related project:'
                                    validateStatus={relatedProjectError ? 'error' : ''}
                                    help={relatedProjectError || ''}
                                >
                                    {getFieldDecorator('relatedProject', {
                                        rules: [{ required: isRequiredField('activity', 'relatedProject'), message: 'Please select the project related to this activity!' }],
                                    })(
                                        <Select placeholder='Select related project'>
                                            {this.state.projects && this.state.projects.length > 0 && this.state.projects.map((project, i) => {
                                                return (
                                                    <Option key={i} value={project._id}>{project.name}</Option>
                                                )
                                            })}
                                        </Select>
                                    )}
                                </FormItem>
                            </Spin>
                            <FormItem
                                {...formItemLayout}
                                label='Name:'
                                validateStatus={nameError ? 'error' : ''}
                                help={nameError || ''}>
                                {getFieldDecorator('name', {
                                    rules: [{ required: isRequiredField('activity', 'name'), message: 'Please input a name for the activity!', whitespace: true }],
                                })(
                                    <Input placeholder="Activity name" />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Type:'
                                validateStatus={typeError ? 'error' : ''}
                                help={typeError || ''}
                            >
                                {getFieldDecorator('type', {
                                    rules: [{ required: isRequiredField('activity', 'type'), message: 'Please select a type for this activity!' }],
                                })(
                                    <Select placeholder='Select activity type'>
                                        {ACTIVITY_TYPES.map((type, i) => {
                                            return (
                                                <Select.Option key={i} value={type}>{type}</Select.Option>
                                            )
                                        })}
                                    </Select>
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Substage [multiple]:'
                                validateStatus={substageError ? 'error' : ''}
                                help={substageError || ''}
                            >
                                {getFieldDecorator('substage', {
                                    rules: [{ required: isRequiredField('activity', 'substage'), message: 'Please input at least one substage for this activity!', }],
                                })(
                                    <Select mode='multiple' placeholder='Select activity substages'>
                                        {ACTIVITY_SUBSTAGES.map((sub, i) => {
                                            return (
                                                <Select.Option key={i} value={sub}>{sub}</Select.Option>
                                            )
                                        })}
                                    </Select>
                                )}
                            </FormItem>
                            <Spin spinning={this.state.fetching} size='large'>
                                <FormItem
                                    {...formItemLayout}
                                    label='Related participants:'
                                    validateStatus={relatedParticipantsError ? 'error' : ''}
                                    help={relatedParticipantsError || ''}
                                >
                                    {getFieldDecorator('relatedParticipants', {
                                        rules: [{ required: isRequiredField('activity', 'relatedParticipants'), message: 'Please select the participants related to this activity!' }],
                                    })(
                                        <Select mode='multiple' placeholder='Select related participants' filterOption={(inputValue, option) => option.props.children.toLowerCase().includes(inputValue.toLowerCase())}>
                                            {this.state.participants && this.state.participants.length > 0 && this.state.participants.map((st, i) => {
                                                return (
                                                    <Option key={i} value={st._id}>{st.name}</Option>
                                                )
                                            })}
                                        </Select>
                                    )}
                                </FormItem>
                            </Spin>
                            <FormItem
                                {...formItemLayout}
                                label='Date:'
                                validateStatus={dateError ? 'error' : ''}
                                help={dateError || ''}
                            >
                                {getFieldDecorator('date', {
                                    rules: [{ required: isRequiredField('activity', 'date'), message: 'Please set the date of this activity!' }],
                                })(
                                    <RangePicker />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Location:'
                                validateStatus={locationError ? 'error' : ''}
                                help={locationError || ''}
                            >
                                {getFieldDecorator('location', {
                                    rules: [{ required: isRequiredField('activity', 'location'), message: 'Please input the location of your activity!', whitespace: true }],
                                })(
                                    <Input placeholder="Activity location" />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Total hours:'
                                validateStatus={totalHoursError ? 'error' : ''}
                                help={totalHoursError || ''}
                            >
                                {getFieldDecorator('totalHours', {
                                    rules: [{ required: isRequiredField('activity', 'totalHours'), message: 'Please input the total hours for your activity!', whitespace: true }],
                                })(
                                    <Input.TextArea placeholder="Activity total hours" autosize={{ minRows: 2, maxRows: 6 }} />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Objective:'
                                validateStatus={objectiveError ? 'error' : ''}
                                help={objectiveError || ''}
                            >
                                {getFieldDecorator('objective', {
                                    rules: [{ required: isRequiredField('activity', 'objective'), message: 'Please input the objective for your activity!', whitespace: true }],
                                })(
                                    <Input.TextArea placeholder="Activity objective" autosize={{ minRows: 2, maxRows: 6 }} />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Intended goal:'
                                validateStatus={intendedGoalError ? 'error' : ''}
                                help={intendedGoalError || ''}
                            >
                                {getFieldDecorator('intendedGoal', {
                                    rules: [{ required: isRequiredField('activity', 'intendedGoal'), message: 'Please input an intended goal for your activity!', whitespace: true }],
                                })(
                                    <Input.TextArea placeholder="Activity intended goal" autosize={{ minRows: 2, maxRows: 6 }} />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Result:'
                                validateStatus={resultError ? 'error' : ''}
                                help={resultError || ''}
                            >
                                {getFieldDecorator('result', {
                                    rules: [{ required: isRequiredField('activity', 'result'), message: 'Please input a result for your activity!', whitespace: true }],
                                })(
                                    <Input.TextArea placeholder="Activity result" autosize={{ minRows: 2, maxRows: 6 }} />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label='Reflection:'
                                validateStatus={reflectionError ? 'error' : ''}
                                help={reflectionError || ''}
                            >
                                {getFieldDecorator('reflection', {
                                    rules: [{ required: isRequiredField('activity', 'reflection'), message: 'Please input a reflection for your activity!', whitespace: true }],
                                })(
                                    <Input.TextArea placeholder="Activity reflection" autosize={{ minRows: 2, maxRows: 6 }} />
                                )}
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="Supporting material:"
                                validateStatus={supportingMaterialError ? 'error' : ''}
                                help={supportingMaterialError || ''}
                            >
                                <div className="dropbox">
                                    {getFieldDecorator('supportingMaterial_form', {
                                        valuePropName: 'fileList',
                                        getValueFromEvent: this.normFile,
                                    })(
                                        <Upload.Dragger
                                            multiple={true}
                                            name="supportingMaterial"
                                            action={`/api/files/upload?fileName=supportingMaterial&token=${this.myToken}`}
                                            fileList={this.state.supportingMaterialList}
                                            onChange={({ file, fileList, event }) => {
                                                if (file.status === 'done') {
                                                    this.setState({
                                                        supportingMaterialList: this.state.supportingMaterialList.concat([file])
                                                    })
                                                }
                                            }}
                                            onRemove={file => {
                                                const index = this.state.supportingMaterialList.findIndex(v => v.response.uri === file.response.uri);
                                                if (index !== -1) {
                                                    const tmp = this.state.supportingMaterialList;
                                                    tmp.splice(index, 1)
                                                    this.setState({
                                                        supportingMaterialList: [...tmp]
                                                    })
                                                }
                                            }}
                                        >
                                            <p className="ant-upload-drag-icon">
                                                <Icon type="inbox" />
                                            </p>
                                            <p className="ant-upload-text">Click or drag files to this area to upload</p>
                                            <p className="ant-upload-hint">You can upload multiple files</p>
                                        </Upload.Dragger>
                                    )}
                                </div>
                            </FormItem>
                            <FormItem
                                {...formItemLayout}
                                label="Picture"
                                validateStatus={pictureError ? 'error' : ''}
                                help={pictureError || ''}
                                extra="This can be a picture or diagram depicting the activity"
                            >
                                {getFieldDecorator('picture_form', {
                                    rules: [{ required: isRequiredField('activity', 'picture'), message: 'Please upload a picture from your activity!' }]
                                })(
                                    <Upload
                                        multiple={false}
                                        name='picture'
                                        action={`/api/files/upload?fileName=picture&token=${this.myToken}`}
                                        listType="picture"
                                        accept='image/*'
                                        fileList={this.state.pictureFileList}
                                        onChange={({ file, fileList, event }) => {
                                            this.setState({
                                                pictureFileList: [file]
                                            })
                                        }}
                                        onRemove={file => {
                                            this.setState({
                                                pictureFileList: [],
                                            })
                                        }}
                                    >
                                        <Button aria-label="Upload">
                                            <Icon type="upload" /> Click to upload
                                         </Button>
                                    </Upload>
                                )}
                            </FormItem>
                            <FormItem {...formItemLayout}>
                                {getFieldDecorator('isDocumented', {
                                    valuePropName: 'checked'
                                })(
                                    <Checkbox>Is documented?</Checkbox>
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
                {/* </Spin> */}
            </div>
        )
    }
}

export default Form.create()(Activity);
