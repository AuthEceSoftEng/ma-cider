import React from 'react';
import { ButtonNextPage, MyTagLabels } from '../../../components/_index'
import { tagIcons } from '../../../components/MyTagLabels/MyTagLabels'
import { Icon, Row, Col, Card, Divider, Select, Button, Spin } from 'antd';
import { Link } from 'react-router-dom'
import { downloadResourceFile } from '../../../api/files'

const Option = Select.Option;

class MethodsOverview extends React.Component {

    state = {
        loading: true,
        tags: {
            stream: [],
            caseStudy: [],
        }
    }

    componentDidMount() {
        Promise.all([
            import('../data/methods/methods'),
            import('../data/materials/materials')
        ])
            .then(([methods, materials]) => {
                this._METHODS = methods.methods;
                this.methodsTagsLabels = methods.methodsTagsLabels
                this.materials = materials.materials;
                this.METHODS = this.resetTagLabels(this._METHODS);
                this.setState({
                    methods: this.METHODS,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    resetTagLabels = methods => {
        return methods.map(m => ({ ...m, tags: m.tags.map(t => ({ ...t, labels: t.labels.map(l => ({ label: l, checked: false })) })) }))
    }

    calcTagLabels = (methods, tagName, value) => {
        return methods.map(m => ({ ...m, tags: m.tags.map(t => ({ ...t, labels: t.labels.map(l => ({ ...l, ...(tagName === t.tag ? { checked: value.includes(l.label) } : {}) })) })) }))
    }

    onTagLabelClick = (tagName, label) => {
        let values = [...this.state.tags[tagName]];
        if (!label.checked) {
            values.push(label.label);
        } else {
            values = values.filter(v => v !== label.label);
        }
        this.handleChange(tagName, values);
    }

    handleChange = (tagName, value) => {
        this.setState({
            tags: {
                ...this.state.tags,
                [tagName]: value
            }
        }, () => {
            this.METHODS = this.calcTagLabels(this.METHODS, tagName, value);
            this.setState({
                methods: this.METHODS.filter(m => {
                    let boolArr = [];
                    ['stream', 'caseStudy'].forEach(mm => {
                        const demLabels = (m.tags.find(t => t.tag === mm)).labels.map(l => l.label);
                        if (this.state.tags[mm].length === 0) {
                            boolArr.push(true);
                        } else {
                            boolArr.push(this.state.tags[mm].some(v => demLabels.includes(v)))
                        }
                    })
                    return boolArr[0] && boolArr[1];
                })
            })
        })
    }

    renderMultipleSelect(tagName) {
        return <div>
            <label for='method-stream-filter' style={{ textTransform: 'capitalize' }}>
                <Icon type={tagIcons[tagName]} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                {tagName}:
            </label>
            <Select
                id='method-stream-filter'
                style={{ width: '100%' }}
                mode="multiple"
                placeholder={`Filter by ${tagName}`}
                onChange={value => { this.handleChange(tagName, value) }}
                value={this.state.tags[tagName]}
            >
                {this.methodsTagsLabels[tagName].map((label, i) => <Option key={i} value={label} >{label}</Option>)}
            </Select>
        </div>
    }

    resetFilters = () => {
        this.METHODS = this.resetTagLabels(this._METHODS);
        this.setState({
            methods: this.METHODS,
            tags: {
                stream: [],
                caseStudy: []
            }
        })
    }

    _downloadResource = fileId => {
        downloadResourceFile(fileId).then(() => { }).catch(() => { })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className='my-resp-padding'>
                <Spin spinning={loading} size='large' >
                    {!loading &&
                        <div>
                            <ButtonNextPage to='/guidebook/case-studies' label='Case studies' />
                            <h1 className='color-primary'><Icon type="retweet" />Methods - Overview</h1>
                            <h2 />
                            <p style={{ margin: '20px' }}>
                                In this section, we provide descriptions of methods that we have used and
                                adapted in the MobileAge project. For each method we provide a general
                                description, the role of a co-creation facilitator as well as a reflection
                                on how we have use it. In addition, we provide materials for each of the
                                methods that we have produced in the course of our co-creation projects. You
                                can filter the methods according <strong>1)</strong> the streams &nbsp;<Icon type={tagIcons['stream']} />&nbsp; of activity in which they are most relevant
                                and <strong>2)</strong> the case study &nbsp;<Icon type={tagIcons['caseStudy']} />&nbsp; in which the method was used.
                            </p>
                            <Row>
                                <Col xs={24} sm={12} lg={{ span: 10, offset: 1 }} className='mb-16'>
                                    {this.renderMultipleSelect('stream')}
                                </Col>
                                <Col xs={24} sm={12} lg={{ span: 10, offset: 1 }} className='mb-16'>
                                    {this.renderMultipleSelect('caseStudy')}
                                </Col>
                            </Row>
                            <div style={{ textAlign: 'center' }}>
                                <Button aria-label="Reset filters" onClick={this.resetFilters}>Reset Filters</Button>
                            </div>
                            <Row type='flex' gutter={24} style={{ marginTop: '30px' }}>
                                {this.state.methods.map((method, i) =>
                                    <Col key={i} xs={24} sm={12} lg={8} className='mb-16'>
                                        <Card
                                            title={<h3 style={{ 'fontWeight': 'bold' }}>{method.name}</h3>}
                                            style={{ height: '100%' }}
                                            extra={<Link aria-label="More about this method" className='more-contrast' to={`/guidebook/methods/details/${method.id}`}>More</Link>}
                                        >
                                            <div>
                                                <div style={{ textAlign: 'center' }}>
                                                    <Icon type='api' style={{ fontSize: '45px' }} />
                                                </div>
                                                <div style={{ marginTop: '15px', marginBottom: '15px', textAlign: 'center' }}>
                                                    {method.tags.map((t, j) => <MyTagLabels onTagLabelClick={this.onTagLabelClick} key={j} tag={t} />)}
                                                </div>
                                                <Divider />
                                                <div>
                                                    {method.relatedMaterials.map((rlId, k) =>
                                                        <span
                                                            key={k}
                                                            onClick={() => { this._downloadResource(rlId) }}
                                                            style={{ display: 'inline-block', cursor: 'pointer', color: '#0079d2', marginRight: '5px' }}><Icon type='file-pdf' />&nbsp;{this.materials[rlId].name}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>
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

export default MethodsOverview;

