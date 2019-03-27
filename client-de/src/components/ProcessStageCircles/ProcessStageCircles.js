import React from 'react';
import { Row, Col } from 'antd'
import './ProcessStageCircles.css'

/**
 * 
 * @param {object} props
 * @param {number} props.colSpan
 * @param {string} props.imgSrc
 * @param {string} props.color
 * @param {string[]} props.substages
 */
const ProcessStageCircles = props => {
    const { colSpan, imgSrc, color, substages } = props;
    return (
        <Row gutter={16} type='flex'>
            <Col xs={24} lg={colSpan} className='mb-45' style={{ textAlign: 'center' }}>
                <img alt='circle-img' src={imgSrc} className='circle-img' />
            </Col>
            <Col xs={24} lg={1} className='mb-45' style={{ textAlign: 'center' }}>
                <div style={{ height: '100%', display: 'flex' }}>
                    <div className='_arrow-right' style={{ borderRightColor: color, borderBottomColor: color }}></div>
                </div>
            </Col>
            {substages.map((substage, i) =>
                [<Col key={i} xs={24} lg={colSpan} className='mb-45' style={{ textAlign: 'center' }}>
                    <div className='circle-div' style={{ backgroundColor: color }}>
                        <h3 className='circle-div-content' style={{ fontSize: '14px' }}>{substage}</h3>
                    </div>
                </Col>,
                <Col key={`${i}a`} xs={24} lg={1} className='mb-45' style={{ textAlign: 'center', display: i === substages.length - 1 ? 'none' : 'block' }}>
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className='_arrow-right' style={{ borderRightColor: color, borderBottomColor: color }}></div>
                    </div>
                </Col>]
            )}
        </Row>
    )
}

export default ProcessStageCircles;
