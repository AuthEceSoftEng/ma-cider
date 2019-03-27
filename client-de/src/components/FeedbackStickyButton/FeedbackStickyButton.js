import React from 'react';
import { Button, Icon } from 'antd';
import './index.css'
const FeedbackStickyButton = props => {
    return (
        <div id="feedback-sticky-button" className='feedback-sticky-button-container'>
            <Button aria-label="Open feedback window" style={{
                backgroundColor: '#00819f',
                color: 'white',
                fontWeight: 'bold',
                borderColor: 'transparent',
                height: '45px'
            }}
                onClick={props.onClick}
            >
                <Icon type="customer-service" />
                <span className='hide-on-mobile'>Do you have feedback to report?</span>
            </Button>
            <span className='hide-on-mobile' style={{ cursor: 'pointer', position: 'absolute', marginLeft: '2px' }} onClick={() => { document.getElementById('feedback-sticky-button').style.display = 'none'; }}>
                <Icon
                    type='close-circle'
                />
            </span>
        </div>
    )
}

export default FeedbackStickyButton;
