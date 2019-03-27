import React from 'react';
import { getProjects } from '../../../api/projects'
import { getApps } from '../../../api/apps'
import { Spin, Col, Card, Row, Button, Icon, Popover } from 'antd';
import { Link } from 'react-router-dom'
import { removeBaseHref } from '../../../utilities/helpers'

class MyProjects extends React.Component {

    state = {
        projects: [],
        loading: true,
        apps: undefined
    }

    componentDidMount() {
        Promise.all([
            getProjects(),
            getApps()
        ])
            .then(([projects, apps]) => {
                this.setState({ projects, apps })
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    renderProjectColCard(project, index) {
        let app;
        if (this.state.apps && this.state.apps.length > 0) {
            app = this.state.apps.find(a => a.relatedProject === project._id);
        }
        return (
            <Col key={index} xs={24}>
                <Card headStyle={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#2890fe',
                }}
                    bodyStyle={{ ...(index % 2 !== 0 ? { backgroundColor: 'rgba(24, 144, 255, 0.13)' } : {}) }}
                    bordered={true}>
                    <Row gutter={16}>
                        <Col xs={24} md={12} lg={10} xl={7}>
                            <h2 style={{
                                textAlign: 'center',
                                marginBottom: 0,
                                padding: '0px 5px',
                                background: 'linear-gradient(90deg, rgba(115,30,31,1) 0%, rgba(198,56,59,1) 100%)',
                                border: '1px solid black',
                                borderTopRightRadius: '13px',
                                borderTopLeftRadius: '13px',
                                color: 'white'
                            }}><strong>{project.name}</strong></h2>
                            <Link to={removeBaseHref(`${window.location.pathname}/${project._id}`)}>
                                <img alt="project people" src={project.poster} style={{ width: '100%' }} />
                            </Link>
                        </Col>
                        <Col xs={24} md={12} lg={14} xl={12}>
                            {project.description}
                            <br />
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={{ offset: 0 }} md={{ offset: 12 }} lg={{ offset: 10 }} xl={{ offset: 7 }}>
                            <div>
                                <Link to={removeBaseHref(`${window.location.pathname}/${project._id}`)}>
                                    <Button aria-label="See More" type='default' style={{ fontWeight: 'bold', marginRight: '15px' }}>
                                        <span>
                                            SEE MORE<Icon type="double-right" theme="outlined" />
                                        </span>
                                    </Button>
                                </Link>
                                {/* {app && <Popover
                                    trigger='click'
                                    content={
                                        <div>
                                            <strong style={{ fontStyle: 'italic' }}>{app.name}</strong>
                                            <br />
                                            <a href={app.link} target='blank'>{app.link}</a>
                                            <br />
                                            <div style={{ maxWidth: '280px' }}>
                                                {app.description}
                                            </div>
                                        </div>}
                                    title={
                                        <div>
                                            <Link to={`/platform/edit/app/` + app._id}>
                                                <Button aria-label="Edit" icon='edit' size='small' style={{ float: 'right' }}>Edit</Button>
                                            </Link>
                                            <span>App info</span>
                                        </div>}>
                                    <Button aria-label="See the app" type='dashed' style={{ marginRight: '16px', fontWeight: 'bold' }}>SEE THE APP</Button>
                                </Popover>} */}
                                <Link to={removeBaseHref(`${window.location.pathname}/${project._id}/graphs`)}>
                                    <Button aria-label="See Graph Reports" type='primary' style={{ fontWeight: 'bold', marginRight: '15px' }}>
                                        <span>
                                            GRAPH REPORTS&nbsp;<Icon type="line-chart" theme="outlined" />
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col >
        )
    }

    render() {
        return (
            <div className='my-resp-padding'>
                <h1 style={{ color: '#2e4050', fontWeight: 'bold' }}>WELCOME to projects</h1>
                <hr style={{ fontWeight: 'bold' }} />
                <div>
                    <Spin spinning={this.state.loading} size='large'>
                        <Row gutter={16} >
                            {this.state.projects.map((project, i) =>
                                this.renderProjectColCard(project, i)
                            )}
                        </Row>
                    </Spin>
                </div>
            </div>
        )
    }
}

export default MyProjects;
