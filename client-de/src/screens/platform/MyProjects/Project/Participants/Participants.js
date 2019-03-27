import React from 'react';
import { getProjectById } from '../../../../../api/projects'
import { getParticipants, deleteParticipant } from '../../../../../api/participants'
import { getActivities } from '../../../../../api/activities'
import { paramArrayToQuery, flattenArray, removeBaseHref } from '../../../../../utilities/helpers'
import { Spin, Table, Tag, Col, Row, Button, Tooltip, Modal, message } from 'antd';
import { ButtonNextPage } from '../../../../../components/_index'

const confirm = Modal.confirm;

class Participants extends React.Component {

    state = {
        loading: true,
        project: undefined,
        participants: undefined,
        filteredInfo: null,
        sortedInfo: null,
    }

    constructor(props) {
        super(props);
        this.projectId = props.match.params.projectId;
        this.handleTableChange = this.handleTableChange.bind(this);
    }

    componentDidMount() {
        Promise.all([
            getProjectById(this.projectId),
            getActivities({ query: { relatedProject: this.projectId } }),
        ])
            .then(([project, activities]) => {
                this.setState({ project })
                if (activities.length > 0) {
                    // Get participants of those activities
                    return getParticipants({ query: paramArrayToQuery('_id', Array.from(new Set(flattenArray(activities.map(a => a.relatedParticipants))))) })
                } else {
                    return Promise.resolve([]);
                }
            })
            .then(participants => {
                this.setState({
                    loading: false,
                    participants
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }

    _deleteParticipant = id => {
        confirm({
            title: 'Are you sure you want to delete this participant?',
            content: 'The participant is also going to be removed from any activities involved.',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            maskClosable: true,
            iconType: 'exclamation-circle',
            onOk: () => {
                deleteParticipant(id)
                    .then(delParticipant => {
                        message.success('Participant deleted!', 4);
                        const index = this.state.participants.findIndex(p => p._id === delParticipant._id);
                        this.setState({ participants: this.state.participants.filter((_, i) => i !== index) })
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
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const tableColumns = [
            // {
            //     title: 'id',
            //     dataIndex: 'id',
            //     key: 'id',
            //     sorter: (a, b) => a['id'] - b['id'],
            //     sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order
            // },
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                fixed: 'left',
                width: 150,
                sorter: (a, b) => a['name'].localeCompare(b['name']),
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                render: (type) => <span>{type.map((t, j) => <Tag key={j} color='blue'>{t}</Tag>)}</span>,
                filters: this.state.participants ? Array.from(new Set(this.state.participants.map(st => st.type.join(', ')))).map(v => ({ text: v, value: v })) : [],
                filteredValue: filteredInfo['type'] || null,
                onFilter: (value, record) => String(value) === String(record['type'].join(', ')),
                sorter: (a, b) => a['type'].join(', ').localeCompare(b['type'].join(',')),
                sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order
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
                filteredValue: filteredInfo['dataOwner'] || null,
                onFilter: (value, record) => String(value) === String(record['dataOwner']),
                sorter: (a, b) => String(a['dataOwner']).localeCompare(String(b['dataOwner'])),
                sortOrder: sortedInfo.columnKey === 'dataOwner' && sortedInfo.order
            },
            {
                title: 'Organization',
                dataIndex: 'organization',
                key: 'organization',
                sorter: (a, b) => a['organization'].localeCompare(b['organization']),
                sortOrder: sortedInfo.columnKey === 'organization' && sortedInfo.order
            },
            {
                title: 'Explanation',
                dataIndex: 'explanation',
                key: 'explanation',
                sorter: (a, b) => a['explanation'].localeCompare(b['explanation']),
                sortOrder: sortedInfo.columnKey === 'explanation' && sortedInfo.order
            },
            {
                title: 'Actions',
                key: 'operation',
                fixed: 'right',
                width: 90,
                render: (record) => <div>
                    <Tooltip title='Edit'>
                        <Button aria-label="Edit" icon='edit' size='small' shape='circle-outline' type='primary' style={{ float: 'left' }} onClick={() => { this.props.history.push({ pathname: '/platform/edit/participant/' + record._id }) }}></Button>
                    </Tooltip>
                    <Tooltip title='Delete'>
                        <Button aria-label="Delete" onClick={() => { this._deleteParticipant(record._id) }} icon='delete' size='small' shape='circle-outline' type='danger' style={{ float: 'right' }}></Button>
                    </Tooltip>
                </div>,
            },
        ]
        return (
            <div id='co-creation-project-participants' className='my-resp-padding'>
                <Spin spinning={this.state.loading} size='large'>
                    {
                        this.state.project && this.state.participants &&
                        <div>
                            <ButtonNextPage to={removeBaseHref(window.location.pathname.split('/').slice(0, -1).join('/'))} label='BACK TO OVERVIEW' backwards />
                            <h1 style={{ color: '#2e4050' }}>
                                <strong>{`${this.state.project.name} | `}</strong>
                                PARTICIPANTS
                            </h1>
                            <hr style={{ fontWeight: 'bold' }} />
                            <br />
                            <Row>
                                <Col xs={24}>
                                    <Table
                                        rowKey='_id'
                                        scroll={{ x: 1300 }}
                                        dataSource={this.state.participants}
                                        columns={tableColumns}
                                        onChange={this.handleTableChange}
                                    />
                                </Col>
                            </Row>
                        </div>
                    }
                </Spin>
            </div>
        )
    }

}

export default Participants;
