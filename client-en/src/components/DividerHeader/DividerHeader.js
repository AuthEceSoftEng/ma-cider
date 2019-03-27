import React from 'react';
import { Divider } from 'antd'
import { GoodPracticeExampleLikeIcon } from '../_index'
import './DividerHeader.css'

/**
 * 
 * @param {object} props
 * @param {string} props.text 
 * @param {boolean} props.strong
 * @param {string} props.color
 * @param {boolean} props.withGoodPracticeExampleIcon
 */
const DividerHeader = props => {
    const { text, strong, color, withGoodPracticeExampleIcon } = props;
    return (
        <div className={color === 'white' ? 'divider-header-white' : 'divider-header'} style={{ marginTop: '25px', marginBottom: '25px' }}>
            <Divider>
                {withGoodPracticeExampleIcon && <GoodPracticeExampleLikeIcon />}
                <span style={{
                    color: color ? color : '#2c3e50',
                    fontSize: '20px',
                    fontWeight: strong ? 'bold' : 'normal',
                    textTransform: 'uppercase'
                }}>
                    {text}
                </span>
            </Divider>
        </div>
    )
}

export default DividerHeader;
