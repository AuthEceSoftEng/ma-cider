import React from 'react';
import { Row, Col, Spin } from 'antd';
import { ButtonNextPage, DividerHeader, TileIcon, TilePdf, BreadcrumbRouter } from '../../../components/_index'

class MethodsDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            methodIndex: Number(props.match.params.method_num)
        }
    }

    componentDidMount() {
        Promise.all([
            import('../data/methods/methods'),
            import('../data/materials/materials')
        ])
            .then(([methods, materials]) => {
                this.METHODS = methods.methods;
                this.MATERIALS = materials.materials;
                this.setState({
                    loading: false,
                    method: this.METHODS[Number(this.props.match.params.method_num)]
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({
                methodIndex: Number(this.props.match.params.method_num),
                method: this.METHODS[Number(this.props.match.params.method_num)]
            })
        }
    }

    renderNextAndPrevButtons() {
        let ret = [];
        const { methodIndex } = this.state;
        if (methodIndex < this.METHODS.length - 1) {
            ret.push(
                <ButtonNextPage style={{ marginLeft: '10px' }} key='front' to={`/guidebook/methods/details/${methodIndex + 1}`} label={this.METHODS[methodIndex + 1].name} />
            )
        }
        if (methodIndex > 0) {
            ret.push(
                <ButtonNextPage key='back' backwards to={`/guidebook/methods/details/${methodIndex - 1}`} label={this.METHODS[methodIndex - 1].name} />
            )
        }
        return ret;
    }

    renderMethodDetails({ description, purpose, task }) {
        return (
            <div>
                <DividerHeader text='METHOD DETAILS' />
                <Row type='flex' gutter={42} style={{ marginTop: '35px' }}>
                    <Col xs={24} md={12} xl={8} className='mb-16'>
                        <TileIcon
                            icon={{ type: 'credit-card' }}
                            containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                        >
                            <div>
                                <h3 className='color-primary' style={{ fontWeight: 'bold' }}>
                                    Description
                                </h3>
                                <div>
                                    {description}
                                </div>
                            </div>
                        </TileIcon>
                    </Col>
                    <Col xs={24} md={12} xl={8} className='mb-16'>
                        <TileIcon
                            icon={{ type: 'bulb' }}
                            containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                        >
                            <div>
                                <h3 className='color-primary' style={{ fontWeight: 'bold' }}>
                                    Purpose/objective
                                </h3>
                                <div>
                                    {purpose}
                                </div>
                            </div>
                        </TileIcon>
                    </Col>
                    <Col xs={24} md={12} xl={8} className='mb-16'>
                        <TileIcon
                            icon={{ type: 'solution' }}
                            containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                        >
                            <div>
                                <h3 className='color-primary' style={{ fontWeight: 'bold' }}>
                                    Task of facilitator
                                </h3>
                                <div>
                                    {task}
                                </div>
                            </div>
                        </TileIcon>
                    </Col>
                </Row>
            </div>

        )
    }

    renderUseCases(useCases) {
        return (
            <div>
                <DividerHeader text='USE CASES' />
                {useCases}
            </div>
        )
    }

    renderRelatedMaterials(relatedMaterials) {
        return (
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
            </div>
        )
    }

    renderLearnMore(learnMore) {
        return (
            <div>
                <DividerHeader text='LEARN MORE' />
                {learnMore}
            </div>
        )
    }

    render() {
        const { method, loading } = this.state;
        return (
            <div className='my-resp-padding'>
                <Spin spinning={loading} size='large'>
                    {!loading &&
                        <div>
                            {this.renderNextAndPrevButtons()}
                            <BreadcrumbRouter base="guidebook/methods/overview" items={[{ title: "Methods Overview", icon: "retweet" }, { title: method.name }]} />
                            <br />

                            <h1 className='color-primary'>{method.name}</h1>
                            <h2 />

                            {/* Method Details */}
                            {this.renderMethodDetails(method)}

                            {/* Use cases */}
                            {this.renderUseCases(method.useCases)}

                            {/* Related Materials */}
                            {this.renderRelatedMaterials(method.relatedMaterials)}

                            {/* Render Learn More */}
                            {method.learnMore && this.renderLearnMore(method.learnMore)}
                            <br />
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default MethodsDetails;
