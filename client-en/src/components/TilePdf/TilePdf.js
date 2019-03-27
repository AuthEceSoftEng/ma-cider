import React from 'react';
import { MyTagLabels } from './../_index'
import { downloadResourceFile } from '../../api/files'
import { Card, Icon } from 'antd';

/**
 * 
 * @param {object} props
 * @param {string} props.fileId
 * @param {string} props.header
 * @param {string} props.subHeader
 * @param {object[]} props.tags
 * @param {boolean} props.filterable - default true
 * @param {function} props.onTagLabelClick
 */
const TilePdf = props => {
    const { fileId, header, subHeader, tags, filterable, onTagLabelClick } = props;
    return (
        <Card
            style={{ height: '100%' }}>
            <div>
                <h3 style={{ fontWeight: 'bold' }}>{header}</h3>
                <p>{subHeader}</p>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Icon
                        color='#2c3e50'
                        type='file-pdf'
                        style={{
                            fontSize: '60px', border: '15px solid #eff2f4',
                            borderRadius: '54px',
                            backgroundcolor: 'white',
                            padding: '5px',
                            color: '#2c3e50',
                            cursor: 'pointer'
                        }}
                        onClick={() => { downloadResourceFile(header) }} />
                </div>
                <div style={{ marginTop: '35px', marginBottom: '20px' }}>
                    {tags.map((t, j) => <MyTagLabels onTagLabelClick={onTagLabelClick} filterable={filterable !== undefined ? filterable : true} key={j} tag={t} color='#2c3e50' />)}
                </div>
            </div>
        </Card>
    )
}

export default TilePdf;
