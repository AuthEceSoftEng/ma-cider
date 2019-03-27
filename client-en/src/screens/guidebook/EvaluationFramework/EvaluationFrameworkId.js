import React from 'react';
import { DividerHeader, BreadcrumbRouter, ButtonNextPage, StreamMethodsBox, TilePdf } from '../../../components/_index'
import { Row, Col, Card, Spin } from 'antd';
import { removeBaseHref } from '../../../utilities/helpers'

class EvaluationFrameworkId extends React.Component {

    state = {
        loading: true,
        evaluation: {}
    }

    componentDidMount() {
        Promise.all([
            import('../data/evaluationFramework/evaluationFramework'),
            import('../data/materials/materials')
        ])
            .then(([evaluationFramework, materials]) => {
                this.EVALUATION_FRAMEWORK = evaluationFramework.default;
                this.MATERIALS = materials.materials;
                this.setEvaluationState(() => {
                    this.setState({ loading: false })
                });

            })
            .catch(err => {
                console.log(err)
            })
    }

    setEvaluationState = callback => {
        const indx = this.EVALUATION_FRAMEWORK.findIndex(v => v.evaluation === this.props.match.params.evaluation)
        this.setState({
            evaluationIndex: indx,
            evaluation: this.EVALUATION_FRAMEWORK[indx],
            evaluationStages: this.EVALUATION_FRAMEWORK[indx].stages
        }, () => {
            if (callback) {
                callback();
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setEvaluationState()
        }
    }

    renderNextAndPrevButtons() {
        let ret = [];
        const { evaluationIndex } = this.state;
        if (evaluationIndex < this.EVALUATION_FRAMEWORK.length - 1) {
            ret.push(
                <ButtonNextPage
                    style={{ marginLeft: '10px' }}
                    key='front'
                    to={`/guidebook/evaluation-framework/${this.EVALUATION_FRAMEWORK[evaluationIndex + 1].evaluation}`}
                    label={this.EVALUATION_FRAMEWORK[evaluationIndex + 1].evaluation} />
            )
        }
        if (evaluationIndex > 0) {
            ret.push(
                <ButtonNextPage
                    key='back'
                    backwards
                    to={`/guidebook/evaluation-framework/${this.EVALUATION_FRAMEWORK[evaluationIndex - 1].evaluation}`}
                    label={this.EVALUATION_FRAMEWORK[evaluationIndex - 1].evaluation} />
            )
        }
        return ret;
    }

    render() {
        const { evaluation, evaluationStages, loading } = this.state;
        const { introduction, methods, relatedMaterials } = evaluation;
        return (
            <div className='my-resp-padding'>
                <Spin size='large' spinning={loading}>
                    {!loading &&
                        <div>
                            {this.renderNextAndPrevButtons()}
                            <BreadcrumbRouter base="guidebook/evaluation-framework" items={[{ title: "Evaluation Framework", icon: "schedule" }, { title: evaluation.evaluation }]} />
                            <br />
                            <h1 className='color-primary'>{evaluation.evaluation}</h1>
                            <DividerHeader text='Introduction' />
                            <div>
                                {introduction}
                            </div>
                            <Row gutter={48} type='flex' style={{ marginTop: '50px' }}>
                                {evaluationStages.map(({ name }, i) =>
                                    <Col xs={24} sm={8} lg={{ span: 6 }} key={i} className='mb-16'>
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
                                            onClick={() => { this.props.history.push(removeBaseHref(`${window.location.pathname}/${name}`)) }}
                                        >
                                            <h2 style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                                                {name}
                                            </h2>
                                        </Card>
                                    </Col>)}
                            </Row>
                            <DividerHeader text='Methods' />
                            <StreamMethodsBox
                                methods={methods}
                            />
                            <DividerHeader text='Related Materials' />
                            <Row type='flex' gutter={48} style={{ marginTop: '35px' }}>
                                {relatedMaterials.map((m, i) =>
                                    <Col key={i} xs={24} lg={8} className='mb-45'>
                                        <TilePdf
                                            header={this.MATERIALS[m].name}
                                            subHeader={this.MATERIALS[m].text}
                                            tags={[]}
                                            fileId={m}
                                            filterable={false}
                                        />
                                    </Col>
                                )}
                            </Row>
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default EvaluationFrameworkId;
