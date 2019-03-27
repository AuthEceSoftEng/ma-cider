import React from 'react';
import { Row, Col, Spin } from 'antd';
import { BreadcrumbRouter, ButtonNextPage, DividerHeader, TilePdf } from '../../../components/_index'

class CaseStudiesFieldSite extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            site: props.match.params.site,
        }
    }

    componentDidMount() {
        Promise.all([
            import('../data/caseStudies/caseStudies'),
            import('../data/materials/materials')
        ])
            .then(([caseStudies, materials]) => {
                this.caseStudies = caseStudies.caseStudies;
                this.caseStudiesArray = caseStudies.caseStudiesArray;
                this.materials = materials.materials
                this.setState({
                    loading: false,
                    caseStudy: this.caseStudies[this.props.match.params.site]
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.setState({
                site: this.props.match.params.site,
                caseStudy: this.caseStudies[this.props.match.params.site]
            })
        }
    }

    renderNextPageButton = () => {
        const { site } = this.state;
        const index = this.caseStudiesArray.findIndex(c => c.site === site);
        let ret = [];
        if (index < this.caseStudiesArray.length - 1) {
            ret.push(
                <ButtonNextPage
                    key='back-b'
                    label={this.caseStudiesArray[index + 1].siteLabel}
                    to={`/guidebook/case-studies/${this.caseStudiesArray[index + 1].site}`} />
            )
        }
        if (index > 0) {
            ret.push(
                <ButtonNextPage
                    key='back-a'
                    backwards
                    label={this.caseStudiesArray[index - 1].siteLabel}
                    to={`/guidebook/case-studies/${this.caseStudiesArray[index - 1].site}`} />
            )
        }
        return ret;
    }

    render() {
        const { caseStudy, loading } = this.state;
        return (
            <div className='my-resp-padding'>
                <Spin spinning={loading} size='large'>
                    {!loading &&
                        <div>
                            {this.renderNextPageButton()}
                            <BreadcrumbRouter
                                base="guidebook/case-studies"
                                items={[
                                    { title: "Case Studies", icon: "file-text" },
                                    { title: caseStudy.siteLabel }
                                ]} />
                            <br />
                            <div>
                                <h1 className='color-primary'>{`${caseStudy.appLabel} - ${caseStudy.siteLabel}`}</h1>
                                <h2 />
                                <DividerHeader text='Description' />
                                {caseStudy.description}
                                <DividerHeader text='Process' />
                                {caseStudy.process}
                                <DividerHeader text='Results/app' />
                                {caseStudy.result}
                                <DividerHeader text='Related Materials' />
                                <Row gutter={48} type='flex'>
                                    {caseStudy.relatedMaterials.map((m, i) =>
                                        <Col key={i} xs={24} lg={8} className='mb-45'>
                                            <TilePdf
                                                header={this.materials[m].name}
                                                subHeader={this.materials[m].text}
                                                tags={[]}
                                                fileId={m}
                                                filterable={false}
                                            />
                                        </Col>)}
                                </Row>
                                <br />
                            </div>
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default CaseStudiesFieldSite;
