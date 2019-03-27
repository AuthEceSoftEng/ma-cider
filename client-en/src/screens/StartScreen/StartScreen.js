import React from 'react';
import { Row, Col } from 'antd'
import { DividerHeader, TileIcon, Footer, ConnectToPlatformModal, Logo, GuidebookExtraSpecialModal } from '../../components/_index'
import './styles.css'
import CO_CREATION_PROCESS from '../../screens/guidebook/data/coCreationProcess/coCreationProcessBasic'

class StartScreen extends React.Component {

    componentDidMount() {
        if (localStorage.getItem('hasShownGuidebookExtraSpecialModal') === null) {
            this.guidebookExtraSpecialModalRef.showModal();
            localStorage.setItem('hasShownGuidebookExtraSpecialModal', 'yeap')
        }
    }

    pushHistory = path => {
        this.props.history.push({ pathname: path })
    }

    render() {
        return (
            <div>
                <h1></h1>

                <section className='my-resp-padding'>

                    <Logo />

                    {/* Introduction */}
                    <DividerHeader text='INTRODUCTION' strong />
                    <p style={{ textAlign: 'center' }}>
                        Co-creation is an approach adopted on the assumption that a participatory process will lead to services becoming more relevant and usable. This guidebook offers good practice examples, materials and tools to practitioners in local and regional government, as well as NGOS, who provide services to citizens and who intend to collaborate with them to co-create digital solutions that improve their service delivery. While our own experiences and lessons learned are based on six co-creation projects with older adults, the guidebook also provides useful recommendations for co-creation projects with other target audiences.
                    </p>
                    <Row gutter={48} style={{ marginTop: '45px' }}>
                        <Col xs={24} md={8} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'question' }}
                                onClick={() => { this.pushHistory('/guidebook/why-what-who') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center' }}>
                                    <span style={{ color: 'black' }}>CO-CREATION</span><br />
                                    <span style={{ fontWeight: 'bold' }}>WHY-WHAT-WHO?</span>
                                </h2 >
                            </TileIcon>
                        </Col>
                        <Col xs={24} md={8} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'setting' }}
                                onClick={() => { this.pushHistory('/guidebook/how-to-use') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center' }}>
                                    <span style={{ color: 'black' }}>GUIDEBOOK</span><br />
                                    <span style={{ fontWeight: 'bold' }}>HOW TO USE</span>
                                </h2 >
                            </TileIcon>
                        </Col>
                        <Col xs={24} md={8} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'info' }}
                                onClick={() => { this.pushHistory('/guidebook/about') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    ABOUT
                            </h2 >
                            </TileIcon>
                        </Col>
                    </Row>

                    {/* Co creation Process */}
                    <DividerHeader text='THE CO-CREATION PROCESS' strong />
                    <p style={{ textAlign: 'center' }}>
                        Co-creating a digital public service requires different types of activities, such as recruiting participants, developing software, and collecting data or planning for sustainability. These activities often run in parallel and inform each other. We have developed a co-creation model that distinguishes seven streams of activities. While this model is generic and may be applied in different co-creation settings, our examples are derived from co-creating with older adults and relevant stakeholders.
                    </p>
                    <Row gutter={48} type='flex' style={{ marginTop: '45px' }}>
                        <Col xs={24} lg={16} className='mb-45'>
                            <TileIcon
                                bgColor={CO_CREATION_PROCESS[0].color}
                                image={{ src: CO_CREATION_PROCESS[0].imgSrc }}
                                onClick={() => { this.pushHistory('/guidebook/co-creation-process/1') }}
                            >
                                <div>
                                    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                        {CO_CREATION_PROCESS[0].name}
                                    </h2 >
                                    <p style={{ color: 'white' }}>
                                        In co-creation projects, each stream of activity requires different skills, cooperation partners, technical and financial resources. It is a complex and demanding process for all stakeholders and requires careful planning and managing. This includes considerations about the pre-conditions of a co-creation project, its scoping, the planning of resources and the decision-making process.
                                  </p>
                                </div>
                            </TileIcon>
                        </Col>
                        <Col xs={24} lg={8} className='mb-45'>
                            <TileIcon
                                bgColor={CO_CREATION_PROCESS[1].color}
                                image={{ src: CO_CREATION_PROCESS[1].imgSrc }}
                                onClick={() => { this.pushHistory('/guidebook/co-creation-process/2') }}
                            >
                                <div >
                                    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                        {CO_CREATION_PROCESS[1].name}
                                    </h2 >
                                    <p style={{ color: 'white' }}>
                                        At the beginning of a co-creation project, the target audience needs to be defined. This may include particular groups of (older) citizens as well as intermediaries that work with and for them. The biggest challenge is to engage knowledgeable and motivated people who represent the target audience and can therefore contribute to improving a service that benefits the entire target group.
                                    </p>
                                </div>
                            </TileIcon>
                        </Col>
                        <Col xs={24} lg={8} className='mb-45'>
                            <TileIcon
                                bgColor={CO_CREATION_PROCESS[2].color}
                                image={{ src: CO_CREATION_PROCESS[2].imgSrc }}
                                onClick={() => { this.pushHistory('/guidebook/co-creation-process/3') }}
                            >
                                <div >
                                    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                        {CO_CREATION_PROCESS[2].name}
                                    </h2 >
                                    <p style={{ color: 'white' }}>
                                        A digital public service is more than an app: it includes an institutional arrangement in which an organisation takes responsibility for the delivery of the service, and sustainable provision of the personnel and financial resources for this delivery, including support to users, quality control and more. Based on a survey of existing services related to the problem focus of a co-creation project, ideas for a service solution have to be generated and refined in this stream.
                                </p>
                                </div>
                            </TileIcon>
                        </Col>
                        <Col xs={24} lg={8} className='mb-45'>
                            <TileIcon
                                bgColor={CO_CREATION_PROCESS[3].color}
                                image={{ src: CO_CREATION_PROCESS[3].imgSrc }}
                                onClick={() => { this.pushHistory('/guidebook/co-creation-process/4') }}
                            >
                                <div >
                                    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                        {CO_CREATION_PROCESS[3].name}
                                    </h2 >
                                    <p style={{ color: 'white' }}>
                                        A digital public service provides information based on data, which are already available or have to be collected during the co-creation process. Therefore, the necessary data have to be identified and their availability has to be confirmed. There may be a gap between the information needs of the co-creators and the (open) data available. In addition, data may be provided by different providers and may have to be validated, integrated and potentially updated.
                                    </p>
                                </div>
                            </TileIcon>
                        </Col>
                        <Col xs={24} lg={8} className='mb-45'>
                            <TileIcon
                                bgColor={CO_CREATION_PROCESS[4].color}
                                image={{ src: CO_CREATION_PROCESS[4].imgSrc }}
                                onClick={() => { this.pushHistory('/guidebook/co-creation-process/5') }}
                            >
                                <div >
                                    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                        {CO_CREATION_PROCESS[4].name}
                                    </h2 >
                                    <p style={{ color: 'white' }}>
                                        The app through which a digital public service is accessed consists of a user interface, certain functionalities of data processing, and interfaces to data providers and for data entry. In a participatory co-design approach the implementation, prototyping and testing of software is an iterative process, which is best conducted through an agile software development approach. When the service is to be integrated in an existing service portal, its requirements and standards frame the scope of possible designs.
                                    </p>
                                </div>
                            </TileIcon>
                        </Col>
                        <Col xs={24} lg={8} className='mb-45'>
                            <TileIcon
                                bgColor={CO_CREATION_PROCESS[5].color}
                                image={{ src: CO_CREATION_PROCESS[5].imgSrc }}
                                onClick={() => { this.pushHistory('/guidebook/co-creation-process/6') }}
                            >
                                <div >
                                    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                        {CO_CREATION_PROCESS[5].name}
                                    </h2 >
                                    <p style={{ color: 'white' }}>
                                        In a co-creation project, user evaluation and testing of the technical outputs are fundamental and should become part of the co-creation process in iterative feedback cycles. Different methods should be applied for formative and summative evaluation. Participants and other stakeholders may be assigned particular tasks and roles in the evaluation both of the product but also of the co-creation process itself.
                                </p>
                                </div>
                            </TileIcon>
                        </Col>
                        <Col xs={24} lg={16} className='mb-45'>
                            <TileIcon
                                bgColor={CO_CREATION_PROCESS[6].color}
                                image={{ src: CO_CREATION_PROCESS[6].imgSrc }}
                                onClick={() => { this.pushHistory('/guidebook/co-creation-process/7') }}
                            >
                                <div>
                                    <h2 style={{ color: 'white', fontWeight: 'bold' }}>
                                        {CO_CREATION_PROCESS[6].name}
                                    </h2 >
                                    <p style={{ color: 'white' }}>
                                        The involvement and engagement of citizens and intermediaries as co-creators usually concentrates on the usability of software and relevance of data. They expect that arrangements will be made for maintaining a service as well as for personnel and financial sustainability. In most cases, a government organisation or NGO will assumd responsibility for a sustainable service provision, maintenance of data, and software updates. Operational procedures may be carried out in cooperation with other local stakeholders.
                                    </p>
                                </div>
                            </TileIcon>
                        </Col>
                    </Row>

                    {/* Resources */}
                    <DividerHeader text='RESOURCES' strong />
                    <p style={{ textAlign: 'center' }}>
                        This section includes six case studies of successful co-creation projects, presents some of the methods they have employed and offers related materials that were created in the course of these projects.
                    </p>
                    <Row gutter={48} style={{ marginTop: '45px' }}>
                        <Col xs={24} md={8} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'retweet' }}
                                onClick={() => { this.pushHistory('/guidebook/methods/overview') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    METHODS
                            </h2 >
                            </TileIcon>
                        </Col>
                        <Col xs={24} md={8} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'form' }}
                                onClick={() => { this.pushHistory('/guidebook/case-studies') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    CASE STUDIES
                                </h2>
                            </TileIcon>
                        </Col>
                        <Col xs={24} md={8} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'appstore' }}
                                onClick={() => { this.pushHistory('/guidebook/materials') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    MATERIALS
                                </h2>
                            </TileIcon>
                        </Col>
                    </Row>

                    {/* Tools */}
                    <DividerHeader text='TOOLS' strong />
                    <p style={{ textAlign: 'center' }}>
                        This section provides a range of digital tools to facilitate and support co-creation projects.
                            </p>
                    <Row gutter={48} style={{ marginTop: '45px', marginLeft: '0px', marginRight: '0px' }}>
                        <Col xs={24} md={6} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'book', }}
                                onClick={() => { this.connectToPlatformModalRef.showModal() }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    Documentation
                                    </h2 >
                            </TileIcon>
                        </Col>
                        <Col xs={24} md={6} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'schedule', }}
                                onClick={() => { this.pushHistory('/guidebook/evaluation-framework') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    Evaluation Framework
                                        </h2 >
                            </TileIcon>
                        </Col>
                        <Col xs={24} md={6} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'cloud', }}
                                onClick={() => { window.open('https://platform.mobile-age.eu', '_blank') }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    MADE
                                </h2 >
                            </TileIcon>
                        </Col>
                        <Col xs={24} md={6} className='mb-45'>
                            <TileIcon
                                icon={{ type: 'profile', }}
                                onClick={() => { window.open('https://mobileage.ftb-esv.de/blog/', '_blank'); }}
                                containerStyle={{ minHeight: '235px', alignItems: 'center' }}
                            >
                                <h2 className='color-primary' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                                    Blog
                                    </h2 >
                            </TileIcon>
                        </Col>
                    </Row>

                </section>

                <Footer />

                <ConnectToPlatformModal ref={instance => this.connectToPlatformModalRef = instance} />
                <GuidebookExtraSpecialModal ref={instance => this.guidebookExtraSpecialModalRef = instance} />
            </div >
        )
    }
}

export default StartScreen;
