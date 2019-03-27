import React from 'react';
import { Icon } from 'antd';

const BannerArrow = props => {
    return (
        <div style={{ width: '100%', height: '20px', position: 'absolute', left: 0, bottom: 0, backgroundColor: '#00000026' }}>
            <Icon type='right' style={{ position: 'absolute', right: 0, justifyContent: 'center' }} />
        </div>
    )
}

export default BannerArrow;
