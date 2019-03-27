import React from 'react';
import { getProjectById } from '../../../../../api/projects'
import { getActivities } from '../../../../../api/activities'
import { Spin, Table, Checkbox, Tag, Col, Row } from 'antd';
import { ButtonNextPage } from '../../../../../components/_index'
import { makeFilterOptionsForActivities, removeBaseHref } from '../../../../../utilities/helpers'

class Activities extends React.Component {

    state = {
        loading: true,
        project: undefined,
        activities: undefined,
        activitiesCopy: undefined,
        sortedInfo: null,
        filteredInfo: null,
        checkboxes: {
            'all': true,
            'planned': false,
            'conducted': false,
            'documented': false
        }
    }

    constructor(props) {
        super(props);
        this.projectId = props.match.params.projectId;
        this.handleTableChange = this.handleTableChange.bind(this);
    }

    componentDidMount() {
        Promise.all([
            getProjectById(this.projectId),
            getActivities({ query: { relatedProject: this.projectId } })
        ])
            .then(([project, activities]) => {
                const obj = makeFilterOptionsForActivities(activities);
                this.typeFilters = obj.typeFilters; this.locationFilters = obj.locationFilters; this.substageFilters = obj.substageFilters;
                this.setState({
                    loading: false,
                    project,
                    activities: activities,
                    activitiesCopy: activities
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

    checkboxChanged(event, label) {
        let checkboxes = this.state.checkboxes;
        checkboxes[label] = event.target.checked;
        if (label !== 'all') {
            checkboxes['all'] = false;
        } else {
            if (event.target.checked) {
                checkboxes = { ...checkboxes, conducted: false, documented: false, planned: false }
                this.setState({ activities: this.state.activitiesCopy, checkboxes })
                return;
            }
        }
        let tmp = this.state.activitiesCopy;
        tmp = tmp.filter(int => int[label] === event.target.checked)
        this.setState({ activities: tmp, checkboxes })
    }

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const tableColumns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                sorter: (a, b) => a['name'].localeCompare(b['name']),
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
                render: type => <span><Tag color='blue'>{type}</Tag></span>,
                sorter: (a, b) => a['type'].localeCompare(b['type']),
                sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
                filters: this.typeFilters,
                filteredValue: filteredInfo['type'] || null,
                onFilter: (value, record) => String(value) === String(record['type']),
            },
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
                render: date => <div><span>{`${new Date(date.start).toDateString()} ~ `}</span><br /><span>{`${new Date(date.end).toDateString()}`}</span></div>,
                sorter: (a, b) => (new Date(a.date.start)).getTime() - (new Date(b.date.start)).getTime(),
                sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
                width: 160,
            },
            {
                title: 'Location',
                dataIndex: 'location',
                key: 'location',
                sorter: (a, b) => a['location'].localeCompare(b['location']),
                sortOrder: sortedInfo.columnKey === 'location' && sortedInfo.order,
                filters: this.locationFilters,
                filteredValue: filteredInfo['location'] || null,
                onFilter: (value, record) => String(value) === String(record['location']),
            },
            {
                title: 'Substages',
                dataIndex: 'substage',
                key: 'substage',
                render: substage => substage.map((sb, i) => <span key={i}><Tag style={{ marginBottom: '5px' }} color='geekblue'>{sb}</Tag></span>),
                width: 300,
                filters: this.substageFilters,
                filteredValue: filteredInfo['substage'] || null,
                onFilter: (value, record) => record['substage'].includes(value),
            },
        ]
        return (
            <div id='co-creation-project-activities' className='my-resp-padding'>
                <Spin spinning={this.state.loading} size='large'>
                    {
                        this.state.project && this.state.activities &&
                        <div>
                            <ButtonNextPage to={removeBaseHref(window.location.pathname.split('/').slice(0, -1).join('/'))} label='BACK TO OVERVIEW' backwards />
                            <h1 style={{ color: '#2e4050' }}>
                                <strong>{`${this.state.project.name} | `}</strong>
                                ACTIVITIES
                            </h1>
                            <hr style={{ fontWeight: 'bold' }} />
                            <Row>
                                <Col xs={24} xl={{ span: 18, offset: 3 }}>
                                    <h3>Filter Activities:
                                    <span style={{ marginLeft: '20px' }}>
                                            <Checkbox checked={this.state.checkboxes['all']} onChange={(e) => { this.checkboxChanged(e, 'all') }}>All</Checkbox>
                                            <Checkbox checked={this.state.checkboxes['planned']} onChange={(e) => { this.checkboxChanged(e, 'planned') }}>Planned</Checkbox>
                                            <Checkbox checked={this.state.checkboxes['conducted']} onChange={(e) => { this.checkboxChanged(e, 'conducted') }}>Conducted</Checkbox>
                                            <Checkbox checked={this.state.checkboxes['documented']} onChange={(e) => { this.checkboxChanged(e, 'documented') }}>Documented</Checkbox>
                                        </span>
                                    </h3>
                                    <Table
                                        rowKey='_id'
                                        rowClassName='cursor-pointer'
                                        onRow={(record) => ({
                                            onClick: () => { this.props.history.push({ pathname: removeBaseHref(`${window.location.pathname}/${record._id}`) }) }
                                        })}
                                        dataSource={this.state.activities || []}
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

export default Activities;
