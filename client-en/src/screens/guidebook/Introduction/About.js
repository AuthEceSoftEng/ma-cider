import React from 'react';
import { Row, Col } from 'antd'
import { ButtonNextPage } from '../../../components/_index'

const About = props => {
    return (
        <div className='my-resp-padding'>
            <ButtonNextPage backwards to='/guidebook/how-to-use' label='How to use' />
            <h1 className='color-primary'>About</h1>
            <p>
                This guidebook is based on experience with co-creation activities conducted within the EU-funded Mobile Age project (2016-2019). In four different field sites across Europe (South Lakeland, UK; Bremen, Germany; Thessaloniki, Greece and Zaragoza, Spain) we co-created digital public services for and with older adults. Besides the technical results, we focussed on the development and deployment of co-creation approaches and methodologies to engage with (senior) citizens, and intermediaries such as social care service providers, effectively. We carefully documented and assessed our activities in order to learn about co-creation and refine our approach. In this guidebook we provide the results of our learnings for future co-creation activities.
                 </p>
            <h2 className='color-primary'>Acknowledgements</h2>
            <p>The Institute for Information Management Bremen (ifib) from the University of Bremen is responsible for the content of this guidebook. All MobileAge partners have contributed to the guidebook. You can contact us at <a href="mailto:mobileage@ifib.de">mobileage@ifib.de</a>.</p>
            <Row type='flex' gutter={16} style={{ justifyContent: 'center', marginTop: '25px' }}>
                {['age.png',
                    'aristole-university.png',
                    'evangelis.jpg',
                    'gov2u.png',
                    'ifib.png',
                    'lancaster.png',
                    'macedonia.png',
                    'politecnica.png',
                    'tingtum.png',
                    'zaragoza.png'].map((image, i) =>
                        <Col key={i} xs={12} sm={5} lg={4} className='mb-16'>
                            <img alt={`partner ${i}`} src={`assets/img/partners-logos/${image}`} style={{ width: '75%' }} />
                        </Col>)
                }
            </Row>
        </div>
    )
}

export default About;
