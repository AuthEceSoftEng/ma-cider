import React from 'react';
import { TilePdf, ButtonNextPage } from '../../../components/_index'
import { Icon, Row, Col, Select, Button, Spin } from 'antd';
import { tagIcons } from '../../../components/MyTagLabels/MyTagLabels'
import { queryToJson } from '../../../utilities/helpers'
import { downloadResourceFile } from '../../../api/files'
const Option = Select.Option;

class Materials extends React.Component {

    state = {
        loading: true,
        tags: {
            method: [],
            stream: [],
            caseStudy: [],
            language: []
        }
    }

    resetTagLabels = materials => {
        return materials.map(m => ({ ...m, tags: m.tags.map(t => ({ ...t, labels: t.labels.map(l => ({ label: l, checked: false })) })) }))
    }

    calcTagLabels = (materials, tagName, value) => {
        return materials.map(m => ({ ...m, tags: m.tags.map(t => ({ ...t, labels: t.labels.map(l => ({ ...l, ...(tagName === t.tag ? { checked: value.includes(l.label) } : {}) })) })) }))
    }

    componentDidMount() {
        import('../data/materials/materials')
            .then(({ materials, materialsTagsLabels }) => {
                this.__MATERIALS = materials;
                this._MATERIALS = Object.keys(this.__MATERIALS).map(_ => ({ id: _, ...this.__MATERIALS[_] }));
                this.MATERIALS = this.resetTagLabels(this._MATERIALS);
                this.materialsTagsLabels = materialsTagsLabels;
                this.setState({
                    materials: this.MATERIALS,
                    loading: false
                })
                if (this.props.location.search && this.props.location.search) {
                    const query = queryToJson(this.props.location.search);
                    if (query.downloadName) {
                        const m = this._MATERIALS.find(m => m.name === query.downloadName)
                        if (m) {
                            downloadResourceFile(m.id).then(() => { }).catch(() => { })
                        }
                    }
                }
            })
            .catch(err => {
                console.log(err);
            })
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
            this.MATERIALS = this.calcTagLabels(this.MATERIALS, tagName, value);
            this.setState({
                materials: this.MATERIALS.filter(m => {
                    let boolArr = [];
                    ['method', 'stream', 'caseStudy', 'language'].forEach(mm => {
                        const demLabels = (m.tags.find(t => t.tag === mm)).labels.map(l => l.label);
                        if (this.state.tags[mm].length === 0) {
                            boolArr.push(true);
                        } else {
                            boolArr.push(this.state.tags[mm].some(v => demLabels.includes(v)))
                        }
                    })
                    return boolArr[0] && boolArr[1] && boolArr[2] && boolArr[3]
                })
            })
        })
    }

    renderMultipleSelect(tagName) {
        return <div>
            <label for="material-filter-select" style={{ textTransform: 'capitalize' }}>
                <Icon type={tagIcons[tagName]} style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                {tagName}:
            </label>
            <Select
                id="material-filter-select"
                style={{ width: '100%' }}
                mode="multiple"
                placeholder={`Filter by ${tagName}`}
                onChange={value => { this.handleChange(tagName, value) }}
                value={this.state.tags[tagName]}
            >
                {this.materialsTagsLabels[tagName].map((label, i) => <Option key={i} value={label} >{label}</Option>)}
            </Select>
        </div>
    }

    resetFilters = () => {
        this.MATERIALS = this.resetTagLabels(this._MATERIALS);
        this.setState({
            materials: this.MATERIALS,
            tags: {
                method: [],
                stream: [],
                caseStudy: [],
                language: []
            }
        })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className='my-resp-padding'>
                <Spin size='large' spinning={loading}>
                    {!loading &&
                        <div>
                            <ButtonNextPage backwards label="Case studies" to='/guidebook/case-studies' />
                            <h1 className='color-primary'><Icon type="appstore" />Materials</h1>
                            <h2 />
                            <p style={{ margin: '20px' }}>
                                The materials listed in this section where produced during MobileAge. They
                                are examples you might want to consider when co-creating. You can filter the
                                materials according to <strong>1)</strong> the method &nbsp;<Icon type={tagIcons['caseStudy']} />&nbsp; through which the material was produced (e.g. interview guideline), <strong>2)</strong> the associated stream &nbsp;<Icon type={tagIcons['stream']} />&nbsp; of activity in which the material is useful, <strong>3)</strong> the case study &nbsp;<Icon type={tagIcons['caseStudy']} />&nbsp; in which the material was produced
                                and <strong>4)</strong> the language &nbsp;<Icon type={tagIcons['language']} />&nbsp; of the material.
                            </p>
                            <Row>
                                <Col xs={24} sm={12} lg={{ span: 10, offset: 1 }} className='mb-16'>
                                    {this.renderMultipleSelect('method')}
                                </Col>
                                <Col xs={24} sm={12} lg={{ span: 10, offset: 1 }} className='mb-16'>
                                    {this.renderMultipleSelect('stream')}
                                </Col>
                                <Col xs={24} sm={12} lg={{ span: 10, offset: 1 }} className='mb-16'>
                                    {this.renderMultipleSelect('caseStudy')}
                                </Col>
                                <Col xs={24} sm={12} lg={{ span: 10, offset: 1 }} className='mb-16'>
                                    {this.renderMultipleSelect('language')}
                                </Col>
                            </Row>
                            <div style={{ textAlign: 'center' }}>
                                <Button aria-label="Reset filters" onClick={this.resetFilters}>Reset Filters</Button>
                            </div>
                            <Row type='flex' gutter={24} style={{ marginTop: '30px' }}>
                                {this.state.materials.map((material, i) =>
                                    <Col key={i} xs={24} sm={12} lg={8} className='mb-16'>
                                        <TilePdf
                                            header={material.name}
                                            subHeader={material.text}
                                            tags={material.tags}
                                            fileId={material.id}
                                            onTagLabelClick={this.onTagLabelClick}
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

export default Materials;

