import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectById, deleteProject } from '../../../../api/projects'
import { getApps } from '../../../../api/apps'
import { Spin, Col, Popover, Row, Button, Modal, message } from 'antd';
import { ButtonNextPage } from '../../../../components/_index'
import { removeBaseHref } from '../../../../utilities/helpers';

const confirm = Modal.confirm;

class Project extends React.Component {

    state = {
        loading: true,
        project: undefined,
        app: undefined
    }

    constructor(props) {
        super(props);
        this.projectId = props.match.params.projectId;
    }

    componentDidMount() {
        Promise.all([
            getProjectById(this.projectId),
            getApps({ query: { relatedProject: this.projectId } })
        ])
            .then(([project, apps]) => {
                this.setState({
                    loading: false,
                    project,
                    app: apps && apps.length > 0 ? apps[0] : {}
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    _deleteProject = id => {
        confirm({
            title: 'Are you sure you want to delete this project?',
            content: 'All the activities and all their materials will also be deleted.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            maskClosable: true,
            iconType: 'exclamation-circle',
            onOk: () => {
                deleteProject(id)
                    .then(delProject => {
                        message.success('Project deleted!', 4);
                        this.props.history.push('/platform/my-projects');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },
            onCancel: () => {
                return;
            },
        });
    }

    render() {
        return (
            <div className='my-resp-padding'>
                <Spin size="large" spinning={this.state.loading}>
                    {
                        this.state.project &&
                        <div>
                            <div style={{ float: 'right', marginLeft: '15px' }}>
                                <Link to={`/platform/edit/project/${this.projectId}`}>
                                    <Button aria-label="Edit" type='primary' icon="edit">EDIT PROJECT</Button>
                                </Link>
                                <Button aria-label="Delete" onClick={() => { this._deleteProject(this.projectId) }} type='danger' style={{ float: 'right', marginLeft: '5px' }} icon='delete'>DELETE PROJECT</Button>
                            </div>
                            <ButtonNextPage to='/platform/my-projects' label='BACK TO PROJECTS' backwards />
                            <h1 style={{ color: '#2e4050' }}>
                                <strong>{`${this.state.project.name} | `}</strong>
                                PROJECT
                            </h1>
                            <hr style={{ fontWeight: 'bold' }} />
                            <Row type='flex' style={{ marginTop: '20px', justifyContent: 'center' }}>
                                <Col xs={24} md={24} xl={18} style={{ backgroundColor: '#2e4050' }}>
                                    <h2 style={{
                                        margin: 0,
                                        padding: '10px 65px',
                                        color: 'white',
                                        textAlign: 'center'
                                    }}>
                                        PROJECT
                                    </h2>
                                </Col>
                            </Row>
                            <Row type='flex' style={{ justifyContent: 'center' }}>
                                <Col xs={24} lg={24} xl={7} style={{ padding: '20px', paddingBottom: '20px', backgroundColor: 'white' }}>
                                    <img alt="project people" src={this.state.project.poster} style={{ width: '100%' }} />
                                </Col>
                                <Col xs={24} lg={24} xl={11} style={{ padding: '20px', paddingBottom: '20px', backgroundColor: 'white' }}>
                                    <p>{this.state.project.description}</p>
                                    <br />
                                    <div>
                                        <h2 style={{
                                            backgroundColor: '#2e4050',
                                            color: 'white',
                                            textAlign: 'center',
                                            padding: '3px 8px'
                                        }}>APP DESCRIPTION</h2>
                                        <p>
                                            {this.state.app.description}
                                        </p>
                                        {this.state.app && this.state.app._id &&
                                            <div>
                                                <Popover
                                                    trigger='click'
                                                    content={
                                                        <div>
                                                            <strong style={{ fontStyle: 'italic' }}>{this.state.app.name}</strong>
                                                            <br />
                                                            <a href={this.state.app.link} target='blank'>{this.state.app.link}</a>
                                                            {/* <br />
                                                    <div style={{ maxWidth: '280px' }}>
                                                        {this.state.app.description}
                                                    </div> */}
                                                        </div>}
                                                    title={
                                                        <div>
                                                            <Link to={`/platform/edit/app/` + this.state.app._id}>
                                                                <Button aria-label="Edit" icon='edit' size='small' style={{ float: 'right' }}>Edit</Button>
                                                            </Link>
                                                            <span>App info</span>
                                                        </div>}>
                                                    <Button aria-label="See the app" type='primary' >SEE THE APP</Button>
                                                </Popover>
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Row type='flex' style={{ marginTop: '20px', justifyContent: 'center' }}>
                                <Col xs={24} md={24} xl={18}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <Link to={removeBaseHref(window.location.pathname + '/activities')}>
                                            <Button aria-label="List activities" type='primary' style={{ marginRight: '15px' }}>LIST ALL ACTIVITIES</Button>
                                        </Link>
                                        <Link to={`/platform/create/activity?relatedProject=${this.projectId}`}>
                                            <Button aria-label="Create new activity" size='small' type='default' icon='plus'>create new</Button>
                                        </Link>
                                    </div>
                                    <div style={{ marginBottom: '20px' }}>
                                        <Link to={removeBaseHref(window.location.pathname + '/participants')}>
                                            <Button aria-label="List all participants" type='primary' style={{ marginRight: '15px' }}>LIST ALL PARTICIPANTS</Button>
                                        </Link>
                                        <Link to='/platform/create/participant'>
                                            <Button aria-label="Create new participant" size='small' type='default' icon='plus'>create new</Button>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default Project;
