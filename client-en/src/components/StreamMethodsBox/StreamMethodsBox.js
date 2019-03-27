import React from 'react';
import { Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom'

/**
 * 
 * @param {object} props
 * @param {string} props.title
 * @param {object[]} props.methods
 * @param {string} props.methods[].text
 * @param {string} props.methods[].link 
 */
const StreamMethodsBox = props => {
    const { methods } = props;
    return (
        <div style={{
            backgroundColor: 'white',
            marginTop: '15px',
            marginBottom: '15px',
            padding: '15px'
        }}>
            <Row gutter={48} type='flex'>
                <Col xs={24} md={6} style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon type='api' style={{
                        fontSize: '60px',
                        border: '1px solid transparent',
                        /* padding: 10px; */
                        backgroundColor: '#f0f1f4',
                        borderRadius: '100px',
                        /* position: absolute; */
                    }} />
                </Col>
                <Col xs={24} md={18} style={{ display: 'flex' }}>
                    <div style={{ alignSelf: 'center' }}>
                        {/* <h2 className='color-primary'>{title || 'Methods'}</h2> */}
                        {methods.map((method, i) =>
                            <span key={i}>
                                {method.link ?
                                    <Link className='more-contrast' to={method.link} style={{ fontSize: '19px' }}>
                                        {method.text}
                                    </Link>
                                    :
                                    <span style={{ fontSize: '19px' }}>
                                        {method.text}
                                    </span>}
                                {i !== methods.length - 1 && <span style={{ marginLeft: '10px', marginRight: '10px' }}>|</span>}
                            </span>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default StreamMethodsBox;
