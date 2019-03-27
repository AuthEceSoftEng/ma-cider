import React from 'react';
import { Row, Col } from 'antd'

const Footer = props => {
    return (
        <div style={{
            backgroundColor: '#232323f2',
            paddingTop: '20px',
            paddingBottom: '15px',
            borderTop: '1px solid white'
        }}>
            <Row gutter={48} style={{ marginLeft: '0px', marginRight: '0px' }}>
                <Col xs={24} md={20}>
                    <p style={{ color: 'white' }}>
                        <img alt='flag-eu' src='assets/img/flag_eu.jpg' align="left" valign="middle" vspace="2" hspace="15" width="50" height="auto" />
                        This project has received funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement No 693319
                        Disclaimer: This website reflects only the author's view and the Research Executive Agency (REA) is not responsible for any use that may be made of the information it contains.
                    </p>
                </Col>
                <Col xs={24} md={4}>
                    <a href="mailto:mobileage@ifib.de" style={{ color: 'white', textDecoration: 'underline' }}>Contact</a><span style={{ color: 'white' }}>&nbsp;|&nbsp;</span>
                    <a href="#" style={{ color: 'white', textDecoration: 'underline' }}>Disclosure policies</a>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;
