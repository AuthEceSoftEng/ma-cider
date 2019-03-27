import React from 'react';
import { Row, Card, Col, Spin } from 'antd';
import { getProjectById } from '../../../../../api/projects'
import { BreadcrumbRouter } from '../../../../../components/_index'

class Graphs extends React.Component {

    state = {
        loading: true,
        project: undefined,
    }

    componentDidMount() {
        getProjectById(this.props.match.params.projectId)
            .then(project => {
                this.setState({
                    project
                })
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    renderQueryColCards = queries =>
        queries.map((query, i) =>
            <Col xs={24} className="mb-16" key={i}>
                <Card
                    bordered={true}
                    style={{ height: '100%' }}
                    hoverable
                    onClick={() => {
                        this.props.history.push({
                            pathname: this.props.location.pathname + `/${i + 1}`
                        })
                    }}>
                    <h3>{query.label}</h3>
                    <div>{query.subText}</div>
                </Card>
            </Col>
        )

    render() {
        const { project, loading } = this.state;
        return (
            <div className='my-resp-padding'>
                <Spin size="large" spinning={loading}>
                    {
                        project &&
                        <div>
                            <BreadcrumbRouter base="platform/my-projects"
                                items={[{ title: "My Projects" }, { title: project.name, icon: 'line-chart' }]} />
                            <br />
                            <h1><strong>{project.name}</strong> | Graph Reports</h1>
                            <h2 style={{ fontStyle: 'italic' }}>Choose a query below to see the associated graph</h2>
                            <div>
                                <div style={{ background: 'transparent', marginTop: '20px' }}>
                                    <Row gutter={16} className="row-eq-height" type='flex'>
                                        {this.renderQueryColCards([
                                            { label: 'Query: 1 - Number of people involved per participant type for the entire project', subText: loremIpsumProcess },
                                            { label: 'Query: 2 - Participant engagement per type of activity for the project', subText: loremIpsumProcess },
                                            { label: 'Query: 3 - Number of type of activities for the project', subText: loremIpsumProcess },
                                            { label: 'Query: 4 - Number of substages of activities for the project', subText: loremIpsumProcess },
                                            { label: 'Query: 5 - Number of participants per activity', subText: loremIpsumProcess },
                                            { label: 'Query: 6 - Who participated in what activities sub stage', subText: loremIpsumProcess },
                                            // { label: 'Query: 7 - List of participants for each of activities', subText: loremIpsumProcess },
                                        ])}
                                    </Row>
                                </div>
                            </div>
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default Graphs;

const loremIpsumProcess = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus mauris eget quam pharetra, nec consequat felis posuere. Sed nec libero facilisis</p>