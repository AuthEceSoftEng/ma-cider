import React from 'react';
import { DividerHeader, BreadcrumbRouter, ButtonNextPage, StreamMethodsBox, TilePdf, TileIcon } from '../../../components/_index'
import { Row, Col, Spin } from 'antd';

class EvaluationFrameworkIdDetails extends React.Component {

    state = {
        loading: true,
        evaluationStageDetails: {}
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
                    this.setState({
                        loading: false
                    })
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    setEvaluationState = callback => {
        const evaluationIndex = this.EVALUATION_FRAMEWORK.findIndex(v => v.evaluation === this.props.match.params.evaluation);
        const evaluationStageIndex = this.EVALUATION_FRAMEWORK[evaluationIndex].stages.findIndex(v => v.name === this.props.match.params.evaluationStage);
        this.setState({
            evaluationIndex,
            evaluationStageIndex,
            evaluation: this.EVALUATION_FRAMEWORK[evaluationIndex],
            evaluationStageDetails: this.EVALUATION_FRAMEWORK[evaluationIndex].stages[evaluationStageIndex]
        }, () => {
            if (callback) {
                callback()
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
        const { evaluationIndex, evaluationStageIndex } = this.state;
        if (evaluationStageIndex < this.EVALUATION_FRAMEWORK[evaluationIndex].stages.length - 1) {
            ret.push(
                <ButtonNextPage
                    style={{ marginLeft: '10px' }}
                    key='front'
                    to={`/guidebook/evaluation-framework/${this.EVALUATION_FRAMEWORK[evaluationIndex].evaluation}/${this.EVALUATION_FRAMEWORK[evaluationIndex].stages[evaluationStageIndex + 1].name}`}
                    label={this.EVALUATION_FRAMEWORK[evaluationIndex].stages[evaluationStageIndex + 1].name} />
            )
        }
        if (evaluationStageIndex > 0) {
            ret.push(
                <ButtonNextPage
                    key='back'
                    backwards
                    to={`/guidebook/evaluation-framework/${this.EVALUATION_FRAMEWORK[evaluationIndex].evaluation}/${this.EVALUATION_FRAMEWORK[evaluationIndex].stages[evaluationStageIndex - 1].name}`}
                    label={this.EVALUATION_FRAMEWORK[evaluationIndex].stages[evaluationStageIndex - 1].name} />
            )
        }
        return ret;
    }

    render() {
        const { evaluation, evaluationStageDetails, loading } = this.state;
        const { description, sources, when, protocols, methods, relatedMaterials } = evaluationStageDetails
        return (
            <div className='my-resp-padding'>
                <Spin spinning={loading} size='large'>
                    {!loading &&
                        <div>
                            {this.renderNextAndPrevButtons()}
                            <BreadcrumbRouter base="guidebook/evaluation-framework"
                                items={[
                                    { title: "Evaluation Framework", icon: "schedule" },
                                    { title: evaluation.evaluation },
                                    { title: evaluationStageDetails.name }
                                ]} removeBaseHref />
                            <br />
                            <h1 className='color-primary'>{evaluationStageDetails.name}</h1>
                            <h2 />
                            <DividerHeader text='Criterion Details' />
                            <Row type='flex' gutter={42} style={{ marginTop: '35px' }}>
                                {[
                                    { label: 'Description', icon: 'credit-card', data: description },
                                    { label: 'Sources', icon: 'bars', data: sources },
                                    { label: 'When', icon: 'calendar', data: when }
                                ].map(({ label, icon, data }, i) =>
                                    <Col key={i} xs={24} md={12} xl={8} className='mb-16'>
                                        <TileIcon
                                            icon={{ type: icon }}
                                            containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                                        >
                                            <div>
                                                <h3 className='color-primary' style={{ fontWeight: 'bold' }}>
                                                    {label}
                                                </h3>
                                                <div>
                                                    {data}
                                                </div>
                                            </div>
                                        </TileIcon>
                                    </Col>)
                                }
                            </Row>

                            <DividerHeader text='protocols' />
                            {protocols}
                            {methods &&
                                <div>
                                    <DividerHeader text='Methods' />
                                    <StreamMethodsBox
                                        methods={methods}
                                    />
                                </div>
                            }
                            {relatedMaterials &&
                                <div>
                                    <DividerHeader text='Related Materials' />
                                    <Row type='flex' gutter={42} style={{ marginTop: '35px' }}>
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
                                </div>}
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default EvaluationFrameworkIdDetails;
