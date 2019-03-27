import React from 'react';
import {
    DividerHeader,
    ProcessStageCircles,
    StreamMethodsBox,
    ButtonNextPage,
    TilePdf
} from '../../../components/_index'
import { Row, Col } from 'antd'

const CoCreationProcessStage1 = props => {
    const { CO_CREATION_PROCESS, MATERIALS } = props;
    const { color, imgSrc, substages, name, methods, relatedMaterials } = CO_CREATION_PROCESS[0];
    const nextName = CO_CREATION_PROCESS[1].name;
    return (
        <div>
            <div className='my-resp-padding'>
                <ButtonNextPage to='/guidebook/co-creation-process/2' label={nextName} />
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
                        Co-creating a digital public service with older adults or any other target audience requires good management. The British Standards Institute (BSI) defines a project as a ”unique process, consisting of a set of coordinated and controlled activities with start and finish dates to achieve an objective conforming to specific requirements, including the constraints of time, cost and resources” (BS 6079-1 2002, p.2). According to this standard, project management includes seven different processes: scope, human resource, procurement, time, quality, risk and integration management. Each process has to be planned, organised and controlled. For different topics and contexts of projects, the focus of the sub-processes has to be adapted. For the co-creation of digital public services, we have defined six streams in our model in addition to the general project management.
                </p>
                    <p>
                        The management of a co-creation project differs depending on whether it is conducted “in-house” or run by external organisations:
                </p>
                    <ul>
                        <li>In in-house projects, a public organisation wants to improve an existing service or add another one to their existing service portfolio.</li>
                        <li>In external projects a public organisations, NGO or citizen’s initiative demonstrates how a citizen-centred digital service should look like and offers a prototype to a government agency for adoption. </li>
                    </ul>
                    <p>
                        However, the basic steps and issues of project management are quite similar. Every project starts by assigning a project leader, who has to set up the project organisation.
                </p>
                </div>
                <DividerHeader text='Setting up a project management structure' />
                <div>
                    <p>
                        At the heart of co-creation lie considerations about power, participation and decision-making processes. We propose that decision-making in co-creation has two dimensions:
                </p>
                    <ul>
                        <li><strong>Strategic issues</strong> such as the overall objective, resources, transfer of results should be planned and controlled with stakeholders within a project board or steering group. </li>
                        <li><strong>Service design issues</strong>such as defining information needs, data collection, software development should be assigned to co-creators, representing the target audience and different kinds of skills, expertise and situated knowledges that are required for developing user-centred service.</li>
                    </ul>
                    <p>
                        Usually the same team runs a project from the start to the end. In the case of co-creation, volunteers are engaged and it is unlikely that—considering the different capabilities required—all of them will participate in the whole process. Some citizens have broad local knowledge but no technical background and no interest in co-design. Furthermore, many people do not want to commit themselves to participate in a process that may take between three and six months (or even longer). Therefore, there are two organisational options:
                </p>
                    <ul>
                        <li>There may be <strong>one core group covering all aspects</strong> of defining a service concept, working with data and co-creating software during the whole project, and two or more supplementary groups for specific tasks and aspects. Where specific skills are missing additional  contributors are co-opted for the respective aspect at a certain point of time.</li>
                        <li><strong>Separate sub-groups</strong> are established for developing the service concept, working with data and software co-creation, linked via the project manager and with occasional joined meetings.</li>
                    </ul>
                </div>

                <DividerHeader text='Problem focus, target audience and other stakeholders' />
                <div>
                    <p>
                        Public services are not offered for commercial reasons. Government agencies and public organisations, e.g. welfare organisations and associations, provide them as means to achieve social objectives and social impact (in Mobile Age to reduce loneliness, support social inclusion, improve the accessibility of <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">walking routes for older citizens </a>or to improve access to health care services for older adults). In order to recruit members of the project board and co-creators, the objective and scope of the project, the problem focus and the target audience(s) have to be determined. We assume that, as was the case in the Mobile Age project, a broad problem focus and social innovation objective has to be defined prior to the start of the project. However, to allow for co-creation and a participatory and inclusive decision-making process to take place, this definition needs to leave sufficient scope for action to co-creators to jointly develop a detailed problem definition, a solution to this problem and a detailed service concept (e.g. content, functionality, information objects and attributes).
                    </p>
                    <p>
                        The problem focus of a co-creation process has to be defined in collaboration with different stakeholders, in particular the prospective beneficiaries. However, in order to recruit prospective co-creators, the project manager/project board has to communicate what co-creators are expected to engage in. From the experience in Mobile Age, we recommend that the project manager starts with the recruitment of “strategic” stakeholders that represent the target audience and other interested or relevant organisations. They should be involved in defining the problem focus, the social innovation objective and the beneficiaries as well as the target audience of the service. In addition, members of the project board may support the recruitment of members of the target audience for further co-creation activities.
                    </p>
                </div>

                <DividerHeader text='Stakeholder Analysis' />
                <div>
                    <p>Stakeholders are people, groups of people or organisations that have a stake in a process and the results of a project. For co-creating a digital public service, the most relevant stakeholder group is the target audience. That is primarily the later users of the co-created service as well as other “indirect” users or intermediaries.  For example, when the prospective service targets older adults it may also support providers of services for older adults or caregivers.</p>
                    <p>A stakeholder analysis is the process of scanning and identifying possible stakeholders and classifying and ranking them. Stakeholders may be identified along the development process, starting with required inputs via the development process to the target audience and other beneficiaries and people or organizations affected:</p>
                    <ul>
                        <li>Beneficiaries of the service with respect to the social objective (in the Mobile Age project older adults in their “third age”, socially excluded people, people with handicaps, healthcare patients)</li>
                        <li>Prospective users, members of these beneficiaries themselves, relatives and intermediaries</li>
                        <li>Providers of existing service as cooperation partners or affected competitors</li>
                        <li>Possible providers for takeover of the prototype </li>
                        <li>Professional software developer </li>
                        <li>Government agencies responsible for the subject area addressed by the social objective</li>
                        <li>Data owners</li>
                    </ul>
                    <p>
                        For each type of stakeholder, relevant people and organisations in the community have to be identified and it has to be assessed to what extent they may be able to contribute directly or indirectly to achieving the social innovation objective via a digital public service. The project manager assigns suitable candidates to the project board or the co-creating core group or as co-creators that shall be invited for specific and limited contributions.
               </p>
                    <p>
                        The project manager may follow an incremental approach and contact relevant stakeholders individually or assemble a stakeholder conference. They should present different options of how the output of the project might look like, what kind of improvements are possible and what kinds of contributions are required. At this stage, it is not possible nor desired to provide a specification of a service to be developed. This development needs several iterations, rather the objective at this stage is to define a broad problem focus that a larger number of stakeholders considers to be relevant and for which a sufficient number and diversity of stakeholders may be engaged as co-creators.
               </p>
                </div>

                <DividerHeader text='Project board' />
                <div>
                    <p>
                        As a result of the recruitment process a project board is established with five to eight members, representing the different stakeholder groups. They should elect a speaker and agree on a joint mission and organisation of work (for example with respect to regular meetings, range of tasks and responsibilities). The members of the project board support the co-creation process as experts of a particular aspect of the problem focus and further facilitate the recruitment and engagement of co-creators. Each representative may have its own interest for participating and contributing. It is the task of the project manager to learn about these individual interests and to conduct the project in a way that these interests are met and the board members show continuous support of the project.
                    </p>
                </div>

                <DividerHeader text='Management plan' />
                <div>
                    <p>
                        Once the problem focus and the social objective have been defined, it is the task of the project manager to develop a time plan, a resource plan and a cost or budget plan. The most relevant issue with regard to costs is the software development. In an in-house project, this has to be negotiated with the IT-department. In external projects, it is very unlikely that volunteers can be engaged for the complete software development. Rather professional software developers have to be hired and paid. Usually a compromise has to be made between a rather broad problem focus and limited financial resources. Therefore, the most relevant aspects that can be realised within the available budget have to be prioritised. A draft project management plan is submitted and discussed with the project board.
                    </p>
                </div>

                <DividerHeader text='Documentation and Reporting' />
                <div>
                    <p>
                        There are at least four different recipients of targeted reports:
                    </p>
                    <ul>
                        <li>Funders want regular reports on the achievements and progress of the project and the spending.</li>
                        <li>The project board should receive regular updates on the different activities and be consulted on decisions relating to planning (e.g. interim outputs).</li>
                        <li>Co-creators have to receive minutes of decisions taken, as not all members will be present at each meeting.</li>
                        <li>Finally, co-creating a public service is an issue of public interest and for certain milestones reports to the public should be issued.</li>
                    </ul>
                </div>

                <DividerHeader text='Relation to other streams' />
                <div>
                    <p>
                        After identifying the problem focus and the social objectives the target audience as well as all other co-creators have to be defined and candidates to join the co-creation process have to be selected, approached, and recruited for different roles as defined in the project management plan. This is the subject of <a href="guidebook/co-creation-process/2" target="_blank" rel="noopener noreferrer">engaging stakeholders and other co-creators</a>.
                    </p>
                    <p>
                        In most cases, external projects will develop a prototype of a user-centred service that will not be run and offered by the co-creators. Therefore, government units and/or public organisations that are candidates for taking over the prototype should be involved right from the beginning, in order to ensure the integration of a prototype as service in their service portal. Different options and specific requirements should be considered from the start. These are subject of the <a href="guidebook/co-creation-process/7" target="_blank" rel="noopener noreferrer">service provision and maintenance</a> stream.
                    </p>
                    <p>
                        In order to learn for future projects and for reasons of accountability an appropriate kind of evaluation of the process and the achievement of objectives should be carried out. This is subject of the <a href="guidebook/co-creation-process/6" target="_blank" rel="noopener noreferrer">evaluation stream.</a>
                    </p>
                </div>

                <DividerHeader text='Practical recommendations' />
                <ul>
                    <li>Start with your own project management plan and adapt it during the following steps in cooperation with the project board.</li>
                    <li>Develop a time frame for the process.</li>
                    <li>Define roles and tasks for the different stakeholder groups.</li>
                    <li>Define the benefits of the project for the different stakeholder groups in order to motivate their participation. </li>
                    <li>For any step, consider the end of the project, the transfer of the output and the achievement of the social objective.</li>
                    <li>Get consensus about evaluation criteria and methods with funding providers and relevant stakeholders in the early stage of each stream and use them for monitoring progress.</li>
                </ul>

                <DividerHeader text='Results' />
                <div>
                    <p>The results are a project management plan (incl. time plan and resource plan) which is updated on a continuous basis, a stakeholder analysis and a project board.</p>
                </div>

                <DividerHeader text='Good practice examples' withGoodPracticeExampleIcon />
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <div className='my-resp-padding' style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <p>In the case of <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">co-creating a digital walking guide</a> – an external project - we aimed to engage different stakeholder groups to support the co-creation process in different ways from the beginning. In order to form a project board of local stakeholders we therefore initially identified a group of people that firstly would have an interest in the service and secondly would support its maintenance. This was a network of elderly care service providers. The network turned out to be the appropriate stakeholder group to involve in the project management. On the one hand, they could support us with their expertise, access to the target user group, facilities, connections, data creation and maintenance. One the other hand, we identified as possible advantage for them also: Firstly, the co-created outcome might inform about their services and thereby help them to reach their target audience. Secondly, the digital walking guide that we developed helps them conduct and organise public walks themselves (which is part of their service portfolio). Lastly, all of them had a great interest in improving the image of the district and to facilitate social connections across the neighbourhood borders and they expected the co-creation process itself as well as a walking guide for older adults to facilitate these processes. We attended one of the regular meetings of this group and presented the project and our request. From the whole network seven members committed themselves to be part of the project board that would recruit different groups of older adults for the co-creation process and that would accompany and support the whole process.</p>
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
        </div>
    )
}

export default CoCreationProcessStage1;
