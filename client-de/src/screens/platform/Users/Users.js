// Only admin can access this
import React from 'react';
import { Table, Row, Col, Spin, Tag, message, Button, Modal, Avatar, Select, Icon, Switch } from 'antd'
import { getMyUser } from '../../../utilities/helpers'
import { getUsers } from '../../../api/users'
import { getProjects } from '../../../api/projects'
import { putUser } from '../../../api/admins';

const Option = Select.Option

class Users extends React.Component {

    state = {
        loading: true,
        users: undefined,
        projects: undefined,
        sortedInfo: null,
        filteredInfo: null,
        modalVisible: false,
        modalUser: undefined,
        modalProjectOptions: undefined,
        modalSelectedProject: undefined,
        modalSelectedPermission: undefined
    }

    componentDidMount() {
        this.myUser = getMyUser();
        this.role = this.myUser.role;
        if (this.role !== 'admin') {
            window.location.replace('/')
        } else {
            Promise.all([
                getUsers({ query: { populate: 'projectsPermissions.project' } }),
                getProjects()
            ])
                .then(([users, projects]) => {
                    this.setState({ users, projects })
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.setState({ loading: false })
                })
        }
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }

    handleTagClose = (_user, _project) => {
        const user = {
            ..._user,
            projectsPermissions: _user.projectsPermissions.map(({ project, permission }) => {
                if (_project._id === project._id) {
                    if (permission === 'r') {
                        return null;
                    } else {
                        return {
                            project,
                            permission: permission.replace('w', '')
                        }
                    }
                } else {
                    return {
                        project, permission
                    }
                }
            }).filter(v => v !== null)
        }
        this.applyPutUser(user);
    }

    handleAddWrite = (_user, _project) => {
        const user = {
            ..._user,
            projectsPermissions: _user.projectsPermissions.map(({ project, permission }) => {
                if (_project._id === project._id) {
                    return {
                        project,
                        permission: 'rw'
                    }

                } else {
                    return {
                        project, permission
                    }
                }
            }).filter(v => v !== null)
        }
        this.applyPutUser(user);
    }

    applyPutUser = (user) => {
        putUser(user._id, user)
            .then(__user => {
                this.setState({
                    users: this.state.users.map(u => u._id === __user._id ? __user : u)
                })
                message.success('User saved!', 3)
            })
            .catch(err => {

            })
            .finally(() => {
                this.hideModal()
            })
    }

    renderProjectPermissionTags = (arr, user) => {
        return arr.map(({ project, permission }, i) => {
            const permissions = permission.split('');
            return (
                <div key={i} style={{ marginTop: i !== 0 && '4px' }}>
                    <strong>{project.name}:</strong>
                    {
                        permissions.map((p, j) =>
                            <span key={String(i) + String(j)}>
                                <Tag
                                    onClose={(e) => { e.preventDefault(); this.handleTagClose(user, project) }}
                                    closable={p === 'w' || (p === 'r' && permissions.length === 1)}
                                    style={{ marginLeft: '3px' }}
                                    color={p === 'w' ? 'geekblue' : 'blue'}>
                                    {p === 'w' ? 'write' : 'read'}
                                </Tag>
                                {permissions.length === 1 &&
                                    <Tag
                                        onClick={(e) => { e.preventDefault(); this.handleAddWrite(user, project) }}
                                        style={{ marginLeft: '3px', borderStyle: 'dashed' }}>
                                        <Icon type='plus' /> add write
                                    </Tag>
                                }
                            </span>
                        )
                    }
                </div>
            )
        })
    }

    renderProjectPermissionTableCol = (projectsPermissions, user) => {
        return (
            <div>
                {user.role !== 'admin' &&
                    <div style={{ float: 'right' }}>
                        {/* <Tooltip trigger='hover' title='Add co-creation stream'> */}
                        <Button aria-label="plus" type="primary" shape="circle" icon="plus" size='small' onClick={() => { this.prepareModalData(user) }} />
                        {/* </Tooltip> */}
                    </div>
                }
                {
                    user.role === 'admin' || projectsPermissions.length === 0 ?
                        <span>-</span>
                        :
                        this.renderProjectPermissionTags(projectsPermissions, user)
                }

            </div>
        )

    }

    prepareModalData = user => {
        const userProjectIds = user.projectsPermissions.map(cp => cp.project._id);
        this.setState({
            modalUser: user,
            modalProjectOptions: this.state.projects.filter(st => !userProjectIds.includes(st._id)),
            modalSelectedProject: undefined,
            modalSelectedPermission: undefined
        }, () => {
            this.showModal();
        })
    }

    submitModal = () => {
        this.applyPutUser({
            ...this.state.modalUser,
            projectsPermissions: this.state.modalUser.projectsPermissions.concat([{
                project: this.state.modalSelectedProject,
                permission: this.state.modalSelectedPermission
            }])
        })
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

    setAdminUser = (checkedAdmin, user) => {
        this.applyPutUser({
            ...user,
            role: checkedAdmin ? 'admin' : 'user'
        })
    }

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const dataSource = [
            {
                title: 'Username',
                dataIndex: 'username',
                key: 'username',
                sorter: (a, b) => a['username'].localeCompare(b['username']),
                sortOrder: sortedInfo.columnKey === 'username' && sortedInfo.order
            },
            {
                title: 'Role',
                dataIndex: 'role',
                key: 'role',
                filters: [
                    { text: 'Admin', value: 'admin' },
                    { text: 'User', value: 'user' }
                ],
                filteredValue: filteredInfo['role'],
                onFilter: (value, record) => value === String(record['role']),
                render: (role, user) => <Switch
                    disabled={this.myUser._id === user._id}
                    checkedChildren="admin"
                    unCheckedChildren="user"
                    checked={role === 'admin'}
                    onChange={(checked) => { this.setAdminUser(checked, user) }}
                />,
                sorter: (a, b) => a['role'].localeCompare(b['role']),
                sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order
            },
            {
                title: 'Date Registered',
                dataIndex: 'date',
                key: 'date',
                render: (date) => <span>{new Date(date).toDateString()}</span>,
                sorter: (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime(),
                sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order
            },
            {
                title: 'Projects Permissions',
                dataIndex: 'projectsPermissions',
                key: 'projectsPermissions._id',
                render: (arr, user) => this.renderProjectPermissionTableCol(arr, user)
                // sorter: (a, b) => a['role'].localeCompare(b['role']),
                // sortOrder: sortedInfo.columnKey === 'role' && sortedInfo.order
            },
        ]
        return (
            <div className='my-resp-padding'>
                <h1>Platform's Users</h1>
                <Spin spinning={this.state.loading} size='large'>
                    {
                        this.state.users &&
                        <Row>
                            <Col xs={24} lg={{ span: 16, offset: 4 }}>
                                <Table
                                    bordered
                                    columns={dataSource}
                                    dataSource={this.state.users}
                                    pagination={false}
                                    rowKey='_id'
                                    onChange={this.handleTableChange} />
                            </Col>
                        </Row>
                    }
                </Spin>
                <Modal
                    closable
                    title="Assign project to user"
                    visible={this.state.modalVisible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    footer={null}>
                    {this.state.modalUser &&
                        <div>
                            <Row>
                                <Col xs={24} md={3} style={{ alignItems: 'center' }}>
                                    <Avatar size='default' icon="user" />
                                    <strong style={{ fontStyle: 'italic' }}>{this.state.modalUser.username}</strong>
                                </Col>
                                <Col xs={24} md={{ span: 18, offset: 3 }} >
                                    <h3 >Set project and permissions:</h3>
                                    <div>
                                        <div>
                                            <Select
                                                value={this.state.modalSelectedProject}
                                                style={{ width: '100%' }}
                                                showSearch
                                                optionFilterProp="children"
                                                placeholder="Select a project"
                                                onChange={(value) => { this.setState({ modalSelectedProject: value }) }}
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                {this.state.modalProjectOptions.map((st, i) =>
                                                    <Option key={i} value={st._id}>{st.name}</Option>
                                                )}
                                            </Select>
                                        </div>
                                        <br />
                                        {this.state.modalSelectedProject &&
                                            <div>
                                                <Select
                                                    value={this.state.modalSelectedPermission}
                                                    style={{ width: '100%' }}
                                                    placeholder="Set permissions"
                                                    onChange={(value) => { this.setState({ modalSelectedPermission: value }) }}
                                                >
                                                    <Option value="r">Read only</Option>
                                                    <Option value="rw">Read & write</Option>
                                                </Select>
                                            </div>
                                        }
                                    </div>
                                </Col>
                            </Row>
                            {this.state.modalSelectedProject && this.state.modalSelectedPermission &&
                                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                    <Button aria-label="Submit" type='primary' onClick={this.submitModal}>Submit</Button>
                                </div>
                            }
                        </div>
                    }
                </Modal>
            </div>
        )
    }
}

export default Users;


