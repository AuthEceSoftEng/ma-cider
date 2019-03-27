import React from 'react';
import { Icon, Tag } from 'antd';


/**
 * 
 * @param {object} props
 * @param {string} props.color 
 * @param {object} props.tag
 * @param {string} props.tag.tag
 * @param {object[]} props.tag.labels 
 * @param {string} props.tags.labels[].label
 * @param {boolean} props.tags.labels[].checked
 * @param {boolean} props.filterable
 * @param {function} props.onTagLabelClick 
 */
const MyTagLabels = props => {
    const { color, filterable, onTagLabelClick } = props;
    const { tag, labels } = props.tag
    return (
        <span style={{ marginBottom: '5px', display: 'inline-block' }}>
            <Icon type={tagIcons[tag]} color={color ? color : ''} style={{ verticalAlign: 'middle', marginRight: '5px', fontSize: '17px' }} />
            {filterable === undefined || filterable === true ?
                labels.map(({ label, checked }, i) => <Tag onClick={() => { onTagLabelClick(tag, { label, checked }) }} key={i} color={checked ? '#2c3e50' : ''} style={{ marginBottom: '5px' }}>{label}</Tag>)
                :
                labels.map((label, i) => <Tag key={i} color={color ? color : ''} style={{ marginBottom: '5px' }}>{label}</Tag>)
            }
        </span>
    )
}

export default MyTagLabels;

export const tagIcons = {
    'method': 'retweet',
    'caseStudy': 'form',
    'language': 'global',
    'stream': 'line-chart'
}