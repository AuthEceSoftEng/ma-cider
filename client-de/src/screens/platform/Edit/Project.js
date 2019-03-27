import React from 'react';
import { Form, Icon, Input, Button, Row, Col, message, Spin, Upload } from 'antd';
import { ButtonNextPage } from '../../../components/_index'
import { hasErrors, isRequiredField, containsFileUri, getMyToken } from '../../../utilities/helpers';
import { getProjectById, editProject } from '../../../api/projects';

const FormItem = Form.Item;

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

class Project extends React.Component {

    state = {
        loading: false,
        fetching: true,
        posterFileList: []
    }

    constructor() {
        super();
        this.myToken = getMyToken();
    }

    componentDidMount() {
        getProjectById(this.props.match.params.fieldId)
            .then(project => {
                this.props.form.setFieldsValue({
                    ...project
                })
                this.setState({
                    fetching: false,
                    posterFileList: [{
                        uid: '-1',
                        name: 'poster.png',
                        status: 'done',
                        url: project.poster,
                    }]
                })
            })
            .catch(err => {
                console.log(err);
            })
        // this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({ loading: true })
                editProject(this.props.match.params.fieldId,
                    {
                        ...values,
                        ...(containsFileUri(values.poster) ? { poster: values.poster.file.response.uri } : {})
                    })
                    .then(project => {
                        message.success('Project Edited!', 6);
                        this.props.history.push({ pathname: `/platform/my-projects/${this.props.match.params.fieldId}` })
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
        const posterError = isFieldTouched('poster') && getFieldError('poster');

        return (
            <div>
                <ButtonNextPage to={`/platform/my-projects/${this.props.match.params.fieldId}`} label='BACK TO PROJECT' backwards />
                <h1 style={{ color: '#2e4050' }}>Edit<strong> Project</strong></h1>
                <hr style={{ color: '#2e4050' }} />
                <Spin spinning={this.state.fetching} size='large'>
                    <Row>
                        <Col xs={24} xl={{ span: 12, offset: 5 }}>
                            <Form layout="vertical" onSubmit={this.handleSubmit} >
                                <FormItem
                                    {...formItemLayout}
                                    label='Name:'
                                    validateStatus={nameError ? 'error' : ''}
                                    help={nameError || ''}>
                                    {getFieldDecorator('name', {
                                        rules: [{ required: isRequiredField('project', 'name'), message: 'Please input a name for the project!', whitespace: true }],
                                    })(
                                        <Input placeholder="Project name" />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label='Description:'
                                    validateStatus={descriptionError ? 'error' : ''}
                                    help={descriptionError || ''}
                                >
                                    {getFieldDecorator('description', {
                                        rules: [{ required: isRequiredField('project', 'description'), message: 'Please input a description for your project!', whitespace: true }],
                                    })(
                                        <Input.TextArea placeholder="Project description" autosize={{ minRows: 2, maxRows: 6 }} />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="Poster"
                                    validateStatus={posterError ? 'error' : ''}
                                    help={posterError || ''}
                                    extra="This can be a photo taken from the project"
                                >
                                    {getFieldDecorator('poster', {
                                        rules: [{ required: isRequiredField('project', 'poster'), message: 'Please upload a poster for your project!' }]
                                    })(
                                        <Upload
                                            multiple={false}
                                            name='poster'
                                            action={`/api/files/upload?fileName=poster&token=${this.myToken}`}
                                            listType="picture"
                                            accept='image/*'
                                            fileList={this.state.posterFileList}
                                            onChange={({ file, fileList, event }) => {
                                                this.setState({ posterFileList: [file] });
                                            }}
                                            onRemove={file => {
                                                this.setState({
                                                    posterFileList: [],
                                                })
                                            }}
                                        >
                                            <Button aria-label="Upload">
                                                <Icon type="upload" /> Click to change poster
                                         </Button>
                                        </Upload>
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
                </Spin>
            </div>
        )
    }
}

export default Form.create()(Project);
