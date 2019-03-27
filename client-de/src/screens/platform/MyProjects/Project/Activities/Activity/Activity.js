import React from 'react';
import { getProjectById } from '../../../../../../api/projects'
import { getActivities, deleteActivity, editActivity } from '../../../../../../api/activities'
import { getParticipants } from '../../../../../../api/participants'
import { downloadFile } from '../../../../../../api/files'
import { paramArrayToQuery, removeBaseHref } from '../../../../../../utilities/helpers'
import { Spin, Card, Tag, Col, Row, Table, Collapse, Button, Tooltip, Icon, Modal, message } from 'antd';
import { Link } from 'react-router-dom'
import { ButtonNextPage } from '../../../../../../components/_index'
import './Activity.css'

const Panel = Collapse.Panel;
const confirm = Modal.confirm;

class Activity extends React.Component {

    state = {
        loading: true,
        activities: undefined,
        activity: undefined,
        participants: undefined,
        filteredParticipants: null,
        sortedParticipants: null,
    }

    constructor(props) {
        super(props);
        this.projectId = props.match.params.projectId;
        this.activityId = props.match.params.activityId;
    }

    componentDidMount() {
        Promise.all(([
            getProjectById(this.projectId),
            getActivities({ query: { relatedProject: this.projectId } })
        ]))
            .then(([project, activities]) => {
                this.setState({ project, activities });
                return this.setActivityTree(activities.find(v => String(v._id) === String(this.activityId)))
            })
            .catch(err => {
                console.log(err)
            })
    }

    setActivityTree(activity) {
        return getParticipants({ query: paramArrayToQuery('_id', activity.relatedParticipants) })
            .then(participants => {
                this.setState({
                    loading: false,
                    activity,
                    participants: participants ? participants : []
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match && this.props.match && prevProps.match.params.activityId !== this.props.match.params.activityId) {
            this.activityId = this.props.match.params.activityId;
            this.setState({ loading: true }, () => {
                this.setActivityTree(this.state.activities.find(v => String(v._id) === String(this.activityId)))
            })
        }

    }

    handleParticipantsTableChange = (pagination, filters, sorter) => {
        this.setState({
            filteredParticipants: filters,
            sortedParticipants: sorter,
        });
    }

    _deleteActivity = id => {
        confirm({
            title: 'Are you sure you want to delete this activity?',
            content: 'All the supporting material and pictures of this activity will also be deleted.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            maskClosable: true,
            iconType: 'exclamation-circle',
            onOk: () => {
                deleteActivity(id)
                    .then(delActivity => {
                        message.success('Activity deleted!', 4);
                        this.props.history.goBack();
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

    _removeParticipant = participantId => {
        confirm({
            title: 'Are you sure you want to remove this participant?',
            content: 'The participant is going to be removed from this activity.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            maskClosable: true,
            iconType: 'exclamation-circle',
            onOk: () => {
                editActivity(this.state.activity._id, {
                    ...this.state.activity,
                    relatedParticipants: this.state.activity.relatedParticipants.filter((pId => pId !== participantId))
                })
                    .then(activity => {
                        message.success('Participant removed!', 4);
                        this.setState({ participants: this.state.participants.filter((_p) => _p._id !== participantId) })
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

    _downloadFile = fileName => {
        downloadFile(fileName)
            .then(() => {

            })
            .catch(err => {

            })
    }

    render() {
        //  Get Activity
        const { activity } = this.state;
        let activityIndex;
        if (activity && this.state.activities) {
            activityIndex = this.state.activities.findIndex(v => v._id === activity._id)
        }

        // Participants table stuff
        let { sortedParticipants, filteredParticipants } = this.state;
        sortedParticipants = sortedParticipants || {};
        filteredParticipants = filteredParticipants || {};
        const participantsTableColumns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                fixed: 'left',
                width: 150,
                sorter: (a, b) => a['name'].localeCompare(b['name']),
                sortOrder: sortedParticipants.columnKey === 'name' && sortedParticipants.order
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                render: (type) => <span>{type.map((t, j) => <Tag key={j} color='blue'>{t}</Tag>)}</span>,
                filters: this.state.participants ? Array.from(new Set(this.state.participants.map(st => st.type.join(', ')))).map(v => ({ text: v, value: v })) : [],
                filteredValue: filteredParticipants['type'] || null,
                onFilter: (value, record) => String(value) === String(record['type'].join(', ')),
                sorter: (a, b) => a['type'].join(', ').localeCompare(b['type'].join(',')),
                sortOrder: sortedParticipants.columnKey === 'type' && sortedParticipants.order
            },
            {
                title: 'Data owner',
                dataIndex: 'dataOwner',
                key: 'dataOwner',
                render: (bool) => <span>{String(bool)}</span>,
                filters: [
                    { text: 'True', value: true },
                    { text: 'False', value: false }
                ],
                filteredValue: filteredParticipants['dataOwner'] || null,
                onFilter: (value, record) => String(value) === String(record['dataOwner']),
                sorter: (a, b) => String(a['dataOwner']).localeCompare(String(b['dataOwner'])),
                sortOrder: sortedParticipants.columnKey === 'dataOwner' && sortedParticipants.order
            },
            {
                title: 'Organization',
                dataIndex: 'organization',
                key: 'organization',
                sorter: (a, b) => a['organization'].localeCompare(b['organization']),
                sortOrder: sortedParticipants.columnKey === 'organization' && sortedParticipants.order
            },
            {
                title: 'Explanation',
                dataIndex: 'explanation',
                key: 'explanation',
                sorter: (a, b) => a['explanation'].localeCompare(b['explanation']),
                sortOrder: sortedParticipants.columnKey === 'explanation' && sortedParticipants.order
            },
            {
                title: 'Actions',
                key: 'operation',
                fixed: 'right',
                width: 90,
                render: (record) => <div>
                    <Tooltip title='Edit participant'>
                        <Button aria-label="Edit" icon='edit' size='small' shape='circle-outline' type='primary' style={{ float: 'left' }} onClick={() => { this.props.history.push({ pathname: '/platform/edit/participant/' + record._id }) }}></Button>
                    </Tooltip>
                    <Tooltip title='Remove from activity'>
                        <Button aria-label="Delete" icon='delete' size='small' shape='circle-outline' type='danger' style={{ float: 'right' }} onClick={() => { this._removeParticipant(record._id) }}></Button>
                    </Tooltip>
                </div>,
            }
        ]

        return (
            <div className='my-resp-padding'>
                <Spin spinning={this.state.loading} size='large'>
                    {
                        activity &&
                        <div>
                            <ButtonNextPage to={removeBaseHref(window.location.pathname.split('/').slice(0, -1).join('/'))} label='BACK TO LIST' backwards />
                            <h1 style={{ color: '#2e4050' }}>
                                <strong>{`${this.state.project.name} | `}</strong>
                                {activity.name}
                            </h1>
                            <hr style={{ fontWeight: 'bold' }} />
                            <Row gutter={16}>
                                <Col xs={24} xl={{ span: 6, push: 18 }} style={{ marginBottom: '10px' }}>
                                    <Row gutter={40}>
                                        {activityIndex > 0 &&
                                            <Col xl={24} style={{ textAlign: 'right' }}>
                                                <ButtonNextPage style={{ float: 'none', marginBottom: '15px' }} type='primary' to={removeBaseHref(window.location.pathname.split('/').slice(0, -1).concat(`${this.state.activities[activityIndex - 1]._id}`).join('/'))} label='PREVIOUS ACTIVITY' backwards />
                                            </Col>
                                        }
                                        {activityIndex < this.state.activities.length - 1 &&
                                            <Col xl={24} style={{ textAlign: 'right' }}>
                                                <ButtonNextPage style={{ float: 'none' }} type='primary' to={removeBaseHref(window.location.pathname.split('/').slice(0, -1).concat(`${this.state.activities[activityIndex + 1]._id}`).join('/'))} label='NEXT ACTIVITY' />
                                            </Col>
                                        }
                                    </Row>
                                </Col>

                                <Col xs={24} xl={{ span: 18, pull: 6 }}>
                                    <Card title={<h2 style={{ color: '#2e4050', whiteSpace: 'initial' }}>
                                        Activity
                                        <Button aria-label="Delete" onClick={() => { this._deleteActivity(this.activityId) }} type='danger' style={{ float: 'right', marginLeft: '5px' }} icon='delete'>Delete</Button>
                                        <Link to={`/platform/edit/activity/${this.activityId}`}>
                                            <Button aria-label="Edit" type='primary' style={{ float: 'right' }} icon='edit'>Edit</Button>
                                        </Link>
                                    </h2>}>
                                        <Row gutter={16}>
                                            {activity.picture && <Col xs={24} lg={{ push: 18, span: 6 }} className='mb-16'>
                                                <div>
                                                    <img alt='activity' src={activity.picture} style={{ width: '100%' }} />
                                                </div>
                                            </Col>}
                                            <Col xs={24} lg={activity.picture ? { pull: 6, span: 18 } : { span: 24 }}>
                                                <Row gutter={16}>
                                                    <Col xs={24} lg={8} className='mb-16'>
                                                        <div>
                                                            <span>
                                                                <strong>Date started: </strong>
                                                                <span>{(new Date(activity.date.start)).toDateString()}</span>
                                                            </span>
                                                            <br />
                                                            <span>
                                                                <strong>Date ended: </strong>
                                                                <span>{(new Date(activity.date.end)).toDateString()}</span>
                                                            </span>
                                                        </div>
                                                    </Col>
                                                    <Col xs={24} lg={8}>
                                                        <span>
                                                            <strong>Location: </strong>
                                                            <span>{activity.location}</span>
                                                        </span>
                                                    </Col>
                                                    <Col xs={24} lg={8} className='mb-16'>
                                                        <span>
                                                            <strong>Type: </strong>
                                                            <span style={{ marginLeft: '5px' }}><Tag color='blue'>{activity.type}</Tag></span>
                                                        </span>
                                                    </Col>
                                                    <Col xs={24} className='mb-16'>
                                                        <span>
                                                            <strong>Substage: </strong>
                                                            {activity.substage.map((sb, i) => <span key={i}><Tag style={{ marginBottom: '5px' }} color='geekblue'>{sb}</Tag></span>)}
                                                        </span>
                                                    </Col>
                                                    <Col xs={24} lg={16} className='mb-16'>
                                                        <span>
                                                            <strong>Objective: </strong>
                                                            <span>{activity.objective}</span>
                                                        </span>
                                                    </Col>

                                                    {activity.totalHours && <Col xs={24} lg={8} className='mb-16'>
                                                        <span>
                                                            <strong>Total hours: </strong>
                                                            <span>{activity.totalHours}</span>
                                                        </span>
                                                    </Col>}

                                                    {/* Non-required fields */}
                                                    {(activity.intendedGoal || activity.result || activity.reflection) && <Col xs={24}>
                                                        <Collapse>
                                                            <Panel header="Other information" key="panel-1">
                                                                <p>
                                                                    {activity.intendedGoal &&
                                                                        <div>
                                                                            <strong>Intended goal: </strong>
                                                                            <span>{activity.intendedGoal}</span>
                                                                        </div>}
                                                                    {activity.result &&
                                                                        <div>
                                                                            <strong>Result: </strong>
                                                                            <span>{activity.result}</span>
                                                                        </div>}
                                                                    {activity.reflection &&
                                                                        <div>
                                                                            <strong>Reflection: </strong>
                                                                            <span>{activity.reflection}</span>
                                                                        </div>}
                                                                </p>
                                                            </Panel>
                                                        </Collapse>
                                                    </Col>}
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Card
                                            style={{ marginTop: '20px' }}
                                            headStyle={{ backgroundColor: '#2e4050' }}
                                            type="inner"
                                            title={
                                                <h3 style={{ color: 'white', whiteSpace: 'initial', textAlign: 'center' }}>
                                                    <Icon type='team' /> &nbsp;Participants
                                                </h3>
                                            }>
                                            <Row>
                                                <Col xs={24}>
                                                    <Table
                                                        rowKey='_id'
                                                        dataSource={this.state.participants}
                                                        columns={participantsTableColumns}
                                                        pagination={{ pageSize: 10 }}
                                                        scroll={{ y: 240, x: 1300 }}
                                                        onChange={this.handleParticipantsTableChange}
                                                    />
                                                </Col>
                                            </Row>
                                        </Card>

                                        {/* Supporting material files */}
                                        {activity.supportingMaterial && activity.supportingMaterial.length > 0 && <Card
                                            style={{ marginTop: '20px' }}
                                            headStyle={{ backgroundColor: '#2e4050' }}
                                            type="inner"
                                            title={
                                                <h3 style={{ color: 'white', whiteSpace: 'initial', textAlign: 'center' }}>
                                                    <Icon type='file' /> &nbsp;Supporting material
                                                </h3>
                                            }>
                                            <Row type='flex' gutter={24}>
                                                {activity.supportingMaterial.map((material, i) =>
                                                    <Col xs={24} md={6} key={i} className='mb-16'>
                                                        <Card hoverable bordered
                                                            style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
                                                            onClick={() => this._downloadFile(material.split('/').slice(-1)[0])}>
                                                            <Icon type='download' style={{ fontSize: '25px' }} />
                                                            <br />
                                                            <span className='color-primary' style={{ wordWrap: 'break-word' }}>{material}</span>
                                                        </Card>
                                                    </Col>
                                                )}
                                            </Row>
                                        </Card>}
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default Activity;


