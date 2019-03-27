import React from 'react';
import { DividerHeader } from '../../../components/_index'
import { Row, Col, Card, Icon, Spin } from 'antd';
import { removeBaseHref } from '../../../utilities/helpers'

class EvaluationFramework extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        import('../data/evaluationFramework/evaluationFramework')
            .then(evaluationFramework => {
                this.evaluationFramework = evaluationFramework.default;
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { loading } = this.state
        return (
            <div className='my-resp-padding'>
                <Spin spinning={loading} size='large'>
                    {!loading &&
                        <div>
                            <h1 className='color-primary'><Icon type='schedule' />Evaluation Framework</h1>
                            <DividerHeader text='Introduction' />
                            <p style={{ textAlign: 'center' }}>
                                Evaluation is often seen as the ‘not so nice’ part of co-creation projects, often because it is imposed onto a co-creation project by the funder or some external entity. The approach to evaluation outlined here is different. Firstly, this evaluation approach emerged from our co-creation projects with older adults—in other words it was designed as something meaningful from the start. Secondly, we believe that evaluation has to be continuous, add value to all the stakeholders involved, and be proportionate. As such, we would suggest that traditional approaches to impact assessment do not lend themselves to reflexive and participatory approaches such as co-creation.  With this in mind, we suggest that all evaluation and impact creation activities—especially projects that involve older adults—are based on three principles:
                            </p>
                            <ul>
                                <li>It is done as an ongoing reflective practice through action learning (continuous) </li>
                                <li>It is a participatory process (add value to all stakeholders)</li>
                                <li>It is focused on the project’s spheres of control and influence (proportionate)</li>
                            </ul>
                            <Row gutter={48} type='flex' style={{ marginTop: '50px', justifyContent: 'center' }}>
                                {this.evaluationFramework.map(({ evaluation }, i) =>
                                    <Col xs={24} sm={8} lg={{ span: 6, offset: 1 }} key={i} className='mb-16'>
                                        <Card
                                            title={null}
                                            hoverable
                                            className='bg-color-primary'
                                            style={{
                                                minHeight: '200px',
                                                display: 'flex',
                                                flexDirection: ' column',
                                                justifyContent: 'center'
                                            }}
                                            onClick={() => { this.props.history.push(removeBaseHref(`${window.location.pathname}/${evaluation}`)) }}
                                        >
                                            <h2 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                                                {evaluation}
                                            </h2>
                                        </Card>
                                    </Col>)}
                            </Row>
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default EvaluationFramework;
