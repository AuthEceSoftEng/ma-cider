import React from 'react';
import { Row, Col, Card } from 'antd';
import {
    DividerHeader,
    ProcessStageCircles,
    StreamMethodsBox,
    ButtonNextPage,
    TilePdf
} from '../../../components/_index'


const CoCreationProcessStage2 = props => {
    const { CO_CREATION_PROCESS, MATERIALS } = props;
    const { color, imgSrc, substages, name, methods, relatedMaterials } = CO_CREATION_PROCESS[1];
    const nextName = CO_CREATION_PROCESS[2].name;
    const prevName = CO_CREATION_PROCESS[0].name;
    return (
        <div>
            <div className='my-resp-padding'>
                <div>
                    <ButtonNextPage to='/guidebook/co-creation-process/3' label={nextName} />
                    <ButtonNextPage backwards to='/guidebook/co-creation-process/1' label={prevName} />
                </div>
                <h1 className='color-primary'>{name}</h1>
                <h2 />
                <ProcessStageCircles
                    color={color}
                    imgSrc={imgSrc}
                    substages={substages}
                    colSpan={3}
                />
                <DividerHeader text='INTRODUCTION' />
                <div>
                    <p>
                        The basic credo of co-creation is that digital services co-created with prospective users are more relevant, have a larger outreach and therefore a greater impact and that they achieve the social objective to a higher degree. It is the objective of this stream to identify, recruit and engage people that represent the different sub-groups within the target audience as well as software developers, data owners and in particular in external projects organizations that may take over the service provision, technical hosting, editorial works etc.
                    </p>
                    <p>
                        A crucial assumption is that people participate as volunteers because of an intrinsic motivation and an interest in the subject, to prove that they have something of value to contribute. To recruit these volunteers is more difficult than to hire someone for a well-defined job. They have to integrate the co-creation activities and meetings in their individual time schedules.
                    </p>
                </div>

                <DividerHeader text='Define future users and target audience(s)' />
                <div>
                    <p>
                        Based on the preliminary problem focus, value proposition and target audience (as defined in the <a href="guidebook/methods/details/15" target="_blank" rel="noopener noreferrer">project management plan</a>) the next step is to become more precise with respect to the co-creators to be involved. Not all beneficiaries associated with the social objective may benefit equally from a service and may not become users themselves (e.g. because they lack digital skills, financial resources, infrastructure). In order to involve a representative group of co-creators it is important to understand the different ways in which people may benefit the service with respect to their life situation and everyday practices. The ISO Norm on usability (ISO 9241-11) requires system developers to classify users and to study their use contexts in order find out how the system may achieve the social objectives. Among others, access to digital devices and digital literacy among different target audience(s) have to be identified. This for example can be done via <a href="guidebook/methods/details/8" target="_blank" rel="noopener noreferrer">surveys</a>. Hence, intermediaries may be another relevant target audience who use the digital service to improve their primary service and should be engaged as co-creators as well. Therefore, a focus should be put on the organisations that provide support to the target audience.
                </p>
                </div>


                <DividerHeader text='Recruitment and Engagement Plan ' />
                <div>
                    <p>
                        Each of the target audiences (e.g. subgroups) have to be approached by considering their (potential) reasons for participation and the communication channels to contact them have to be selected (online and offline). The project board has to define the different tasks and roles that co-creators may assume. By considering the tasks, a list of capabilities and expertise can be compiled which co-creators need to contribute. The project board members needs to define which stakeholders/individuals should be included and how they can be approached, e.g. by attending events, contacting organisations, issuing releases or contacting local newspapers to present the project together with a call for participation, and holding <a href="guidebook/methods/details/13" target="_blank" rel="noreferrer noopener">information events</a>.
                    </p>
                    <p>
                        On any channel there is a need for precise and understandable <a href="guidebook/materials?downloadName=Inform Participants" target="_blank" rel="noopener noreferrer">participant information</a>, including
                    </p>
                    <ul>
                        <li>an outline of the project’s objectives and process, </li>
                        <li>reasons why the people approached are important,</li>
                        <li>what kind of contribution the project expects, </li>
                        <li>the time schedule, number and time and places of meetings, and</li>
                        <li>contributions expected in between.</li>
                    </ul>
                    <p>
                        Depending on the type of project, participants may be required to sign a consent form as well as a data protection agreement.
                    </p>
                    <p>
                        As mentioned, there is the option for participation in a permanent core group or of limited dedicated contributions. The process has to be continued until all required capabilities are covered.
                    </p>
                </div>

                <DividerHeader text='Continuous recruiting and engagement of additional contributors' />
                <div>
                    <p>
                        In many cases, the problem focus and tasks change during the project: New ideas may be developed that require additional tasks and capabilities, or some members may leave the project early. Therefore, it is important to recruit and engage groups or individuals that complement already involved knowledge and expertise as well as skills throughout the co-creation process. In order to do so we recommend identifying local groups of stakeholders that engage in activities related to the problem focus and objectives of the process (e.g. local computer courses for older adults).
                </p>
                </div>

                <DividerHeader text='Relation to other streams' />
                <div>
                    <p>
                        This stream is based on activities relating to <a href="guidebook/co-creation-process/1" target="_blank" rel="noopener noreferrer">managing a co-creation project</a>. The tasks and roles for which co-creators have to be recruited are defined in detail in the streams of <a href="guidebook/co-creation-process/3" target="_blank" rel="noopener noreferrer">developing a service concept</a>, <a href="guidebook/co-creation-process/4" target="_blank" rel="noopener noreferrer">working with data</a> and <a href="guidebook/co-creation-process/5" target="_blank" rel="noopener noreferrer">software development</a>.
                    </p>
                </div>



                <DividerHeader text='Practical recommendations' />
                <div>
                    <ul >
                        <li>Identify and consider different concerns of targeted user groups</li>
                        <li>Build a trustful relationship between the involved parties.</li>
                        <li>Consider who you reach with your recruitment strategy and who is excluded.</li>
                        <li>Create incentives for co-creators to stay on board.</li>
                        <li>Identify co-creators that may take over responsibility for the output of the process.</li>
                        <li>Choose the location for your activities carefully and make sure it is easy to reach and that participants feel comfortable, familiar and safe.</li>
                        <li>Consider to establish a communication forum amongst participants (this might foster their empowerment as a group and motivate them to take responsibility)</li>
                    </ul>
                </div>

                <DividerHeader text='Results' />
                <p>
                    The activities should result in a recruitment and engagement plan and lead to the establishment of co-creation group(s).
                </p>

                <DividerHeader text='Good practice example' withGoodPracticeExampleIcon />
            </div>

            <div style={{ backgroundColor: 'white' }}>
                <div className='my-resp-padding' style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <p>While participation in some co-creation initiatives is limited to co-design of the interface of an application, others also involve citizens in generating topics and contents. Depending on the streams of activity in which older citizens are involved, they can take different roles in the co-creation process. These roles may be: </p>
                    <ul>
                        <li><strong>Explorer:</strong> Identify problems to be solved.</li>
                        <li><strong>Idea former:</strong> Generate solutions to well defined problems.</li>
                        <li><strong>Data curator:</strong> Define, collect, create, validate and/or integrate relevant (open) data. </li>
                        <li><strong>Designer:</strong> Design and/or develop implementable solutions. </li>
                        <li><strong>Diffuser:</strong> Facilitate the adoption and diffusion of the developed solution. </li>
                    </ul>
                    <Row gutter={32} type='flex' style={{ justifyContent: 'center' }}>
                        <Col xs={24} lg={12} className='mb-16'>
                            <Card title={null} bordered style={{ height: '100%' }}>
                                <div>
                                    <div style={{ textAlign: 'center' }}>
                                        <img alt='explorer' src='assets/img/explorer-icon.png' style={{ width: '55px', height: 'auto' }} />
                                        <h3>
                                            <strong>Explorer:</strong> Identify problems to be solved
                                        </h3>
                                    </div>
                                    <p>
                                        According to our experiences it is difficult to recruit people for a process where the problem to be solved is not yet identified, it might be better to identify the problems with a group of people that are recruited for this particular task and not for the whole process. It is also important to consider the problems with different stakeholders. This may include intermediaries who have experience in working with older people. Further, attending to a wider group of older citizens other than just those that have agreed to co-create allows for a broader understanding of the problem domain. Exploring the problem situation with a wide group of stakeholders helps to better situate the project within the specific social/political/historical contexts of the problem domain.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} lg={12} className='mb-16'>
                            <Card title={null} bordered style={{ height: '100%' }}>
                                <div>
                                    <div style={{ textAlign: 'center' }}>
                                        <img alt='idea former' src='assets/img/idea-former-icon.png' style={{ width: '55px', height: 'auto' }} />
                                        <h3>
                                            <strong>Idea former:</strong> Generate solutions to well defined problems
                                        </h3>
                                    </div>
                                    <p>
                                        It is important to identify and discuss already existing services and technologies in order to give participants an idea about what the solution/ service might look like. However, this is a delicate balance between highlighting possibilities while one the other hand not influencing ideas unduly.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} lg={12} className='mb-16'>
                            <Card title={null} bordered style={{ height: '100%' }}>
                                <div>
                                    <div style={{ textAlign: 'center' }}>
                                        <img alt='data curator' src='assets/img/data-curator-icon.png' style={{ width: '55px', height: 'auto' }} />
                                        <h3>
                                            <strong>Data curator & editor:</strong> Identify, collect, create, validate, integrate and edit relevant open data.
                                        </h3>
                                    </div>
                                    <p>
                                        During the co-creation activities extensive work may have to be devoted to identifying existing open data as well as data validation, integration and, ultimately, also data creation. Depending on the problem domain, there is a high chance that only a small amount of the required data are available and even these may have to be validated for being up to date and complete.
    <br />
                                        Even if the data are available, co-creators may identify additional attributes that they deem relevant. Hence, supplementary data may have to be collected or created by participants and other experts. If a crowd-sourcing approach is chosen, the generated data may be partly inconsistent and, subsequently, may have to be checked and validated as well as harmonised further.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} lg={12} className='mb-16'>
                            <Card title={null} bordered style={{ height: '100%' }}>
                                <div>
                                    <div style={{ textAlign: 'center' }}>
                                        <img alt='designer' src='assets/img/designer-icon.png' style={{ width: '55px', height: 'auto' }} />
                                        <h3>
                                            <strong>Designer:</strong> Design and/or develop implementable solutions.
                                        </h3>
                                    </div>
                                    <p>
                                        Interface design and the development of a database are two tasks usually carried out by different experts. The communication of requirements on both issues could be more effective when formalised in an agile software development approach.
<br />
                                        One of the most challenging roles for older adults is that of a designer. During our co-creation activities, many participants experienced the prototyping, in particular paper prototyping, as tedious and annoying. It may be required to provide more guidance to inexperienced participants or recruit other participants for these tasks. In addition, an ICT helpdesk for participants throughout the process may be an effective way for receiving informed feedback.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Card title={null} bordered style={{ height: '100%' }}>
                                <div>
                                    <div style={{ textAlign: 'center' }}>
                                        <img alt='diffuser' src='assets/img/diffuser-icon.png' style={{ width: '55px', height: 'auto' }} />
                                        <h3>
                                            <strong>Diffuser:</strong> Facilitate the adoption and diffusion of the developed solution.
                                        </h3>
                                    </div>
                                    <p>
                                        Key to sustainability considerations are local stakeholders that will maintain the service and keep the data up-to-date after the co-creation project terminates. In addition, local stakeholders are key for the diffusion and dissemination of the service, and can hence contribute to sustainable up-take.
                                    </p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='my-resp-padding'>
                <DividerHeader text='Methods' />
                <StreamMethodsBox
                    methods={methods}
                />
                <DividerHeader text='Materials' />
                <Row gutter={48} type='flex'>
                    {relatedMaterials.map((m, i) =>
                        <Col key={i} xs={24} lg={8} className='mb-16'>
                            <TilePdf
                                header={MATERIALS[m].name}
                                subHeader={MATERIALS[m].text}
                                tags={[]}
                                fileId={m}
                                filterable={false}
                            />
                        </Col>
                    )}
                </Row>
            </div>
        </div >
    )
}

export default CoCreationProcessStage2;
