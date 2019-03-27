import React from 'react';
import { Row, Col, Spin, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { getProjectById } from '../../../../../api/projects'
import { ButtonNextPage } from '../../../../../components/_index'
import { getGraph } from '../../../../../api/graphs'

const Plot = React.lazy(() => import('react-plotly.js'));

const graphLabels = [
    '1 - Number of people involved per participant type for the entire project',
    '2 - Participant engagement per type of activity for the project',
    '3 - Number of type of activities for the project',
    '4 - Number of substages of activities for the project',
    '5 - Number of participants per activity',
    '6 - Who participated in what activities sub stage',
    // '7 - List of participants for each of activities',
]

const plotlyLayout_default = {
    margin: {
        l: 50,
        r: 50,
        b: 50,
        t: 10,
        pad: 4
    } // some defaults
}

class Graph extends React.Component {

    state = {
        loading: true,
        project: undefined,
        // plotlyData
        // plotlyLayout
    }

    constructor(props) {
        super(props);
        this.projectId = props.match.params.projectId;
        this.graphNum = props.match.params.graphNum;
        this.onResize = this.onResize.bind(this);
        window.addEventListener('resize', this.onResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize)
    }

    componentDidMount() {
        Promise.all([
            getProjectById(this.projectId),
            getGraph(this.projectId, this.graphNum)
        ])
            .then(([project, graphData]) => {
                this.setState({ project }, () => {
                    this.doPlotly(graphData)
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({ loading: true })
            import('plotly.js/dist/plotly')
                .then(Plotly => {
                    Plotly.purge('plotly-graph-div');
                    this.graphNum = this.props.match.params.graphNum;
                    return getGraph(this.projectId, this.graphNum)
                })
                .then(graphData => {
                    this.doPlotly(graphData);
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    doPlotly(graphData) {
        let offsetHeight = document.getElementById('query-h2-label').getBoundingClientRect().y
        let l = {
            ...plotlyLayout_default,
            ...graphData.plotlyLayout,
            height: window.innerHeight - (offsetHeight + 75),
            width: document.getElementById('plotly-parent').getBoundingClientRect().width
        };
        setTimeout(() => {
            this.setState({
                plotlyData: graphData.plotlyData,
                plotlyLayout: l,
                loading: false
            })
        }, 150)
    }

    onResize() {
        setTimeout(() => {
            let offsetHeight = document.getElementById('query-h2-label').getBoundingClientRect().y
            let width = document.getElementById('plotly-parent').getBoundingClientRect().width;
            let l = {
                ...this.state.plotlyLayout,
                height: window.innerHeight - (offsetHeight + 75),
                width
            };
            this.setState({ plotlyLayout: l })
        }, 200) // because sidebar messes up width
    }

    decidePreviousButtonPage() {
        let current = Number(this.graphNum);
        if (current && current > 1) {
            return <ButtonNextPage
                to={`/platform/my-projects/${this.projectId}/graphs/${current - 1}`}
                backwards
                label='Previous'
                style={{ marginRight: '12px' }} />
        }
    }

    decideNextButtonPage() {
        let current = Number(this.graphNum);
        if (current && current < graphLabels.length) {
            return <ButtonNextPage
                to={`/platform/my-projects/${this.projectId}/graphs/${current + 1}`}
                label='Next' />
        }
    }

    render() {
        const { project, plotlyData, plotlyLayout, loading } = this.state;
        const projectName = project ? project.name : '';
        return (
            <div className='my-resp-padding'>
                {/* <Spin size='large' spinning={project === undefined}> */}
                <div>
                    {this.decideNextButtonPage()}
                    {this.decidePreviousButtonPage()}
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to={'/platform/my-projects'} style={{ color: '#0096fa' }}><span>My Projects</span></Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to={`/platform/my-projects/${this.projectId}/graphs`} style={{ color: '#0096fa' }}>
                                <Icon type={'line-chart'} style={{ marginRight: '4px' }} />
                                <span>{projectName}</span>
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <span>{graphLabels[this.graphNum - 1]}</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <br />
                    <h2 id="query-h2-label">Query: {graphLabels[this.graphNum - 1]}</h2>
                    <div style={{ marginTop: '20px' }}>
                        <Spin size='large' spinning={loading} tip='Loading...'>
                            <Row>
                                <Col span={22} offset={1} id="plotly-parent">
                                    <React.Suspense fallback={<div>Loading plot...</div>}>
                                        <Plot
                                            divId="plotly-graph-div"
                                            data={plotlyData}
                                            layout={plotlyLayout}
                                        />
                                    </React.Suspense>
                                </Col>
                            </Row>
                        </Spin>
                    </div>
                </div>
                {/* </Spin> */}
            </div>
        )
    }
}

export default Graph;
