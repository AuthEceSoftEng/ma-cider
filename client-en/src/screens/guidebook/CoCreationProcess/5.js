import React from 'react';
import { Row, Col } from 'antd';
import {
    DividerHeader,
    ProcessStageCircles,
    StreamMethodsBox,
    ButtonNextPage,
    TilePdf
} from '../../../components/_index'


const CoCreationProcessStage5 = props => {
    const { CO_CREATION_PROCESS, MATERIALS } = props;
    const { color, imgSrc, substages, name, methods, relatedMaterials } = CO_CREATION_PROCESS[4];
    const nextName = CO_CREATION_PROCESS[5].name;
    const prevName = CO_CREATION_PROCESS[3].name;
    return (
        <div>
            <div className='my-resp-padding'>
                <div>
                    <ButtonNextPage to='/guidebook/co-creation-process/6' label={nextName} />
                    <ButtonNextPage backwards to='/guidebook/co-creation-process/4' label={prevName} />
                </div>
                <h1 className='color-primary'>{name}</h1>
                <h2 />
                <ProcessStageCircles
                    color={color}
                    imgSrc={imgSrc}
                    substages={substages}
                    colSpan={3}
                />
                <DividerHeader text='introduction' />
                <div>
                    <p>
                        The development of software within a co-creation process takes the rough service concept previously co-created in the ‘Co-creating service concept’ stream as an initial input. The software developers should already be involved in service conception to consult in terms of feasibility. The stream has the following rough steps:
                    </p>
                    <ul>
                        <li>Identify desired functionality</li>
                        <li>Agree on functionality to be implemented</li>
                        <li>Prototyping and implementation</li>
                        <li>Testing and evaluate functionality</li>
                    </ul>
                    <p>
                        A first step for co-creating software is the gathering of initial requirements. Therefore, the concept and the global vision of the app must be refined, and functionalities that are required must be identified. Those become more refined as the service co-creation stream proceeds and relevant data sets are identified (and potentially created).
                        <br />
                        To facilitate such a refinement, software development should be done iteratively. Using <a href="guidebook/methods/details/12" target="_blank" rel="noopener noreferrer">Scrum</a> is heavily recommended, as its methodology of using iterative development-sprints is very similar to the overall process of co-creation and a <a href="guidebook/methods/details/11" target="_blank" rel="noopener noreferrer">Kanban-Board</a> is a perfect means to visualize the process of development.
                </p>
                    <p>
                        The workflow, embedded in the co-creation process, is depicted below.
                </p>
                    <Row gutter={24} type='flex' style={{ alignItems: 'center' }}>
                        <Col lg={12}>
                            <div>
                                <img alt='software planning' src='assets/img/co-creating-software/planning.png' style={{ width: '95%' }} />
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div>
                                <p>
                                    Software developers should already be involved in service conception to consult regarding feasibility (1). When a rough service concept is developed and the first requirements are gathered (2), they must be converted to single, atomic functionalities / tasks. These tasks must be prioritized (3) with respect to the resources available resulting in a product backlog consisting of all functionalities needed to build the fully functional software. During the sprint planning sessions (4), the functionalities to be implemented during the next sprint are selected and specified as far as possible. The specification feeds into the development sprint (5), which consists of several (internal development) daily sprints and should result in a version of the functionality, which is internally tested and ready to be reviewed (6). In the beginning of the next stakeholder meeting the implementation is reviewed and if considered sufficient, confirmed as done (7). Otherwise the specification and the implementation will be refined during the next sprint.
                                <br />
                                    This process (4-7) is repeated until all tasks are done, or in the worst case, no resources are left for further development. Finally, the resulting product is evaluated (8).
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>

                <DividerHeader text='IDENTIFY INDEPENDENT AREAS OF DESIRED FUNCTIONALITY' />
                <div>
                    <p>
                        In order to gather requirements, you should
                    </p>
                    <ul>
                        <li>build a common vision of the software to be developed.</li>
                        <li>collaboratively develop <a className='more-contrast' href="/guidebook/methods/details/7" target="_blank" rel="noopener noreferrer">scenarios</a> or user stories based on <a className='more-contrast' href="/guidebook/methods/details/6" target="_blank" rel="noopener noreferrer">personas</a>.</li>
                        <li>capture functional and non-functional requirements.</li>
                    </ul>
                    <p>
                        Taking the common vision of the software to be developed as input, the functional requirements must be identified and converted to development tasks. Those should be as discrete as possible. Some of the requirements may describe complex interactions between different functionalities. In that case, the developers must split those functionalities into smaller chunks of work, and explain why this must be done.
                   </p>
                </div>

                <DividerHeader text='Agree on functionality to be implemented' />
                <div>
                    <p>
                        After the initial requirement gathering, you will have generated a loose list of desired functionalities. In the next step, these have to be selected and prioritized. Therefore, the developers must estimate the costs in terms of existing time-resources, including a buffer for unforeseen issues. The core project team has to communicate the development and project limitations clearly. In order to communicate the restricted resources transparently, some kind of ‘Resource-O-Meter’ should be used and maintained.
                  </p>
                    <Row gutter={24} type='flex' style={{ alignItems: 'center' }}>
                        <Col lg={{ span: 16, offset: 4 }} className='mb-16'>
                            <div>
                                <img alt='functionality' src='assets/img/co-creating-software/fuctionality.png' style={{ width: '100%' }} />
                            </div>
                        </Col>
                        <Col lg={16} className='mb-16'>
                            <div>
                                <p>
                                    This way, each collected functionality is assessed and will be added in an ordered backlog of development tasks. During this activity, the developers have to assist and explain that some functionalities may depend on others that have to be implemented first. In addition, consider the possible need for back-office functionality for government organisations, NGOs, and software administrators.
                                <br />Another method for visualisation of the resources needed is using different sizes of paper, e.g. 10cm height for each estimated development week, and to align the backlog tasks to a timeline scale.
                            </p>
                            </div>
                        </Col>
                        <Col lg={8} className='mb-16'>
                            <div style={{ textAlign: 'center' }}>
                                <img alt='functionality' src='assets/img/co-creating-software/backlog.png' style={{ width: '80%' }} />
                            </div>
                        </Col>
                    </Row>
                </div>

                <DividerHeader text='PROTOTYPING AND IMPLEMENTATION' />
                <div>
                    <h2>Development Cycles</h2>
                    <p>
                        Each development cycle consists of three kinds of activities. Two of them happen during meetings with the stakeholders. The first is the planning of the upcoming sprint in order to specify the further development. The second is to review the results of the last cycle. Between those activities, the functionalities specified are implemented.
                    </p>
                    <p>
                        <strong>Prototyping - Sprint planning</strong><br />
                        In each development cycle, first plan the upcoming sprint and the functionalities to be implemented therein, is planned with the stakeholders. This step includes co-design activities and the creation of <a href="guidebook/materials?downloadName=Co-Designing a Map Interface" target="_blank" rel="noopener noreferrer">mock-ups</a>. Developers should aim to get a full specification in terms of look, feel and behaviour, of the functionality to be implemented. Sometimes it may be necessary to design different prototypes for different approaches, in order to be able to discuss which is best. During these meetings, important decisions may be taken, so it is important to keep a <a href="guidebook/materials?downloadName=Technical Decision Template" target="_blank" rel="noopener noreferrer">technical decision log</a> in order to ensure the transparency of the process. These decisions might include the management of participants’ expectations, the (re)allocation of resources, and dropping some functionalities in preference for others. Therefore, the Resource-O-Meter must be maintained also.
                    </p>
                    <p>Potential methods include <a href="guidebook/methods/details/9" target="_blank" rel="noopener noreferrer">paper prototyping</a>, and rapid mockup creation tools (e.g. Balsamiq, draw.io).</p>
                    <p>
                        <strong>Implementation - Development Sprint</strong><br />
                        Unless participants are directly involved in software development, this step is internal to the developers. In daily meetings, they should discuss the state of work and ideas and implement the functionalities planned for that sprint. In addition, the materials used for the next sprint planning, such as mock-ups, should be created. If a functionality is successfully tested internally (both automatically and manually), the developers set it to “Ready for Review” on the <a href="guidebook/methods/details/11" target="_blank" rel="noopener noreferrer">Kanban-Board</a>. If questions arise that need input from the stakeholders, they can be clarified online or remembered until the next meeting.
                    </p>
                </div>

                <DividerHeader text='TESTING & REVIEW FUNCTIONALITY' />
                <div>
                    <p>
                        <strong>Bug tracking</strong><br />
                        It can be useful to provide means for reporting and tracking bugs as and when the co-creation group and others are invited to use the finished functionalities, depending of course on the computer literacy of the co-creation group.
                    </p>
                    <p>
                        <strong>Regular review</strong><br />
                        At the beginning of the stakeholder meeting following a development sprint, the developer should present the ‘ready for review’ functionalities to the stakeholders to be discussed. In addition, questions can be clarified. If the majority considers the functionality good, it can be marked as ‘done’ on the <a href="guidebook/methods/details/11" target="_blank" rel="noopener noreferrer">Kanban-Board</a> (or similar). Otherwise, it will be set back to ‘work in progress’ status for refinement. Those refinements must be reassessed in terms of resources required, and considered in the next sprint planning.
                    </p>
                    <p>
                        <strong>Final evaluation</strong><br />
                        When the application is finalized, e.g. because all tasks are done or the resources run out, it should be finally tested by experts for performance and accessibility, and with a broader user audience for usability. The results should be captured through <a href="guidebook/methods/details/8" target="_blank" rel="noopener noreferrer">questionnaires</a> and be used for further refinements. These activities are part of the <a href="guidebook/co-creation-process/6" target="_blank" rel="noopener noreferrer">summative evaluation</a>.
                    </p>
                </div>

                <DividerHeader text='RELATION TO OTHER CO-CREATION STREAMS' />
                <div>
                    <p>
                        This stream of activity is tightly connected to <a href="guidebook/co-creation-process/2" target="_blank" rel="noopener noreferrer">stakeholder engagement</a>, as stakeholders are required when gathering requirements, and are also required to remain involved in co-design activities and feedback throughout development.
                    <br />
                        Similarly, software development connects to the <a href="guidebook/co-creation-process/3" target="_blank" rel="noopener noreferrer">service concept development stream</a>, as concepts may need to consider technical and resource limitations.
                    <br />
                        This activity also relates to the <a href="guidebook/co-creation-process/4" target="_blank" rel="noopener noreferrer">data work</a>, since co-creation activities might identify an opportunity to create open data. This may include specific requirements and development for data collection.
                    </p>
                </div>

                <DividerHeader text='Practical Recommendations' />
                <div>
                    <ul>
                        <li>Prepare participants for <a className='more-contrast' href="/guidebook/methods/details/9" target="_blank" rel="noopener noreferrer">prototyping</a>; consider including one extra workshop to train less experienced users on general (mobile) user interface concepts</li>
                        <li>Consider the technological skills and experience of your participants in order to choose if, how, and to what degree you involve them in the prototyping; less experienced participants could focus on usability testing, very experienced participants could be involved in development.</li>
                        <li>Provide devices if required (e.g. tablets) – introduce and set up the devices together with participants (consider introducing the devices early in the process).</li>
                        <li>Provide alternative options on designs, and name the respective pros and cons.</li>
                        <li>Make sure the software is robust – when sharing or demonstrating the software, if the participants experience unexpected behaviour (bugs), their trust in the technology or the solution might diminish.</li>
                        <li>User-friendliness is important – even with mid-development prototypes, if the participants do not find it user-friendly, their trust in the technology might diminish; this can be achieved avoided by ensuring adequate non-functional requirements are captured and fulfilled.</li>
                        <li>Specification, prototyping, implementation and testing is an iterative process -- these are strongly interconnected and should not be planned in a linear fashion. As you get feedback or testing for a prototype iteration, it is plausible that the requirements and functionality may change. This will impact on subsequent prototyping, testing and evaluating iterations.</li>
                        <li>Agile development methods are good for iterative design and implementation phases.</li>
                        <li>The transparent management of tasks is important to development teams as well as stakeholders. <a className='more-contrast' href="/guidebook/methods/details/11" target="_blank" rel="noopener noreferrer">Kanban-Boards</a> are a useful tool for transparent maintenance of tasks (functionalities to be implemented).</li>
                    </ul>
                </div>

                <DividerHeader text='Results' />
                <div>
                    <p>The result of this stream of activity is a prototype of the software, or the software itself, used in delivery of a service.</p>
                </div>


                <DividerHeader text='Good practice example' withGoodPracticeExampleIcon />
            </div>

            <div style={{ backgroundColor: 'white' }}>
                <div className='my-resp-padding' style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <p>
                        <strong>Co-designing by example</strong><br />
                        If design or concept decisions are pending, participants appreciated the presentation of different already existing approaches during the co-creation workshops to develop a <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">digital neighbourhood guide</a>. This was an opportunity for participants to experience different approaches first hand and discuss the pros and cons of different aspects - from their point of view, but also from the view of the predefined <a href="guidebook/materials?downloadName=Representing Older Adults in an Urban Neighbourhood" target="_blank" rel="noopener noreferrer">personas</a>. <a href="guidebook/methods/details/6" target="_blank" rel="noopener noreferrer">Personas</a> are imagined users and non-users of the app, whose perspectives could be imagined to incorporate them in design decisions.
                        </p>
                    <p>
                        In Bremen, we had to make decisions concerning the design and content of the map used for the Bremen app. We presented map applications from Google, Microsoft Bing and OpenStreetMap to the workshop participants. We asked participants to use them, following the instructions of a pre-defined task. This was an ideal way for participants to experience a variety of existing services.
                    </p>
                    <p>
                        After the hands-on exercise, we discussed the different aspects of the maps, such as contrasts, content density and content presentation. The participants were told not to argue just from their perspective but also from the perspective of the predefined <a href="guidebook/materials?downloadName=Representing Older Adults in an Urban Neighbourhood" target="_blank" rel="noopener noreferrer">personas</a>.
                    </p>
                    <p>
                        In this case it was very important to remember that the discussion was not about which map was the ‘prettiest’. The <a href="guidebook/materials?downloadName=Representing Older Adults in an Urban Neighbourhood" target="_blank" rel="noopener noreferrer">personas</a> helped the participants to focus on practical decisions. The participants found the following aspects positive, in particular with respect to orientation:
                        </p>
                    <ul>
                        <li>Outlines of all buildings should be shown, as on OpenStreetMap: Google maps does not show all buildings and uses a very low contrast (1.1:1); Bing maps does not show any buildings).</li>
                        <li>House numbers of the buildings should be shown as on OpenStreetMap: Google maps and Bing maps don’t show house numbers.</li>
                        <li>Landmarks such as bus stops, pharmacies, or other well-known locations that support orientation, should be shown and tagged.</li>
                    </ul>
                    <p>
                        Subsequently Mobile Age developers presented a demonstration of the map they had developed which was based on their previous experience working with older citizens and physically impaired people. The map was characterised by using high contrast for textual information such as street names and the names of districts, as well as for street and building outlines. The further development and refinement of the Bremen app continued by integrating the insights from this demonstration exercise.
                    </p>
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

export default CoCreationProcessStage5;
