import React from 'react';
import { Row, Col, Icon, Spin } from 'antd'
import { ButtonNextPage, DividerHeader, TileIcon } from '../../../components/_index'

class CaseStudies extends React.Component {

    state = {
        loading: true
    }

    componentDidMount() {
        import('../data/caseStudies/caseStudies')
            .then(caseStudies => {
                this.casetStudiesArray = caseStudies.caseStudiesArray
                this.setState({
                    loading: false
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className='my-resp-padding'>
                <div>
                    <ButtonNextPage style={{ marginLeft: '10px' }} label="Materials" to='/guidebook/materials' />
                    <ButtonNextPage backwards label="Methods" to='/guidebook/methods/overview' />
                </div>
                <h1 className='color-primary'><Icon type="form" />Case Studies</h1>
                <h2 />
                <p>
                    As part of the Mobile Age project six co-creation case studies were conducted in four different cities and regions across Europe. Their main target audiences were older adults. In each case study, older adults co-created a digital public service in collaboration with local or regional governments, social care service providers, research institutes, SMEs and/or intermediaries.
                </p>
                <Spin spinning={loading}>
                    {!loading &&
                        <div style={{ background: 'transparent', marginTop: '20px' }}>
                            <Row gutter={96} type='flex'>
                                {this.casetStudiesArray.map(({ site, siteLabel, appLabel, appIcon }, i) =>
                                    <Col key={i} xs={24} md={12} xl={8} className="mb-45">
                                        <TileIcon
                                            icon={{ type: appIcon, style: { top: 'unset', position: 'unset' } }}
                                            onClick={() => { this.props.history.push((`${this.props.location.pathname}/${site}`)) }}
                                            containerStyle={{ minHeight: '235px', alignItems: 'center', flexDirection: 'column', paddingTop: '20px', paddingBottom: '20px' }}
                                            contentStyle={{ marginTop: '20px', }}
                                        >
                                            <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                                <span>{siteLabel}</span><br />
                                                <span className='color-primary'>{appLabel}</span>
                                            </h2>
                                        </TileIcon>
                                    </Col>)
                                }
                            </Row>
                        </div>
                    }
                </Spin>
            </div>
        )
    }
}

export default CaseStudies;
