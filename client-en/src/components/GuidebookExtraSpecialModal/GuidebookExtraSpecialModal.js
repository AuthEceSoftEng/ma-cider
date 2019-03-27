import React from 'react';
import { Modal, Row, Col, Button } from 'antd';
import logoShape from '../../assets/logoshape.png'

class GuidebookExtraSpecialModal extends React.Component {

    state = {
        modalVisible: false,
    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        })
    }
    hideModal = () => {
        this.setState({
            modalVisible: false,
        });
    }

    render() {
        return (
            <Modal
                width="850px"
                centered
                title={null}
                closable={false}
                visible={this.state.modalVisible}
                onOk={this.hideModal}
                onCancel={this.hideModal}
                footer={null}
                bodyStyle={{ padding: '6px' }}>
                <div className='guidebook-extra-special-modal-container'>
                    <Row gutter={0} type='flex' style={{ alignItems: 'center' }}>
                        <Col xs={0} sm={8} style={{ backgroundColor: '#80808059', paddingBottom: '50px', paddingTop: '50px' }}>
                            <div style={{ display: 'flex', height: '100%', flexDirection: 'row-reverse' }}>
                                <div>
                                    <img alt='logo-shape' src={logoShape} style={{ width: '100%' }} />
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={16} style={{ padding: '0 35px' }}>
                            <div style={{ display: 'flex', height: '100%' }}>
                                <div>
                                    <h1 style={{ color: '#00a2c7', fontWeight: 'bold' }}>We are making this Guidebook extra special!</h1>
                                    <h2 style={{ fontSize: '16px' }}>
                                        Currently we are collecting feedback for this interim version of "A Guide to Co-Creating Digital Public Services."
                                    </h2>
                                    <br />
                                    <h3 style={{ fontWeight: 'bold' }}>
                                        The final version will be available at the end of January, 2019
                                    </h3>
                                    <br />
                                    <h3 style={{ fontStyle: 'italic' }}>
                                        Thank your for checking it out and sending us your feedback!
                                    </h3>
                                    <div style={{ textAlign: 'center' }}>
                                        <Button aria-label="Go to guidebook" style={{ backgroundColor: '#00819f', color: 'white', fontWeight: 'bold', marginTop: '25px' }} size='large' onClick={this.hideModal}>Go to Guidebook</Button>
                                    </div>
                                </div>
                            </div>
                            {/* */}
                        </Col>
                    </Row >
                </div>
            </Modal>
        )
    }
}

export default GuidebookExtraSpecialModal;
