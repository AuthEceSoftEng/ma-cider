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
                        Co-creating a digital public service with older adults or any other target audience requires good management. The British Standards Institute (BSI) defines a project as a ”unique process, consisting of a set of coordinated and controlled activities with start and finish dates to achieve an objective conforming to specific requirements, including the constraints of time, cost and resources” (BS 6079-1 2002, p.2). According to this standard, project management includes seven different processes: scope, human resource management, procurement, time management, quality control, risk, and integration management. Each process has to be planned, organised and controlled. The focus of the sub-processes has to be adapted for the different topics and contexts of projects. For the co-creation of digital public services, we have defined six streams in our model in addition to the general project management.
                    </p>
                    <p>
                        The management of a co-creation project differs depending on whether it is conducted ‘in-house’ or run by external organisations:
                    </p>
                    <ul>
                        <li>In in-house projects, a public organisation wants to improve an existing service or add another to their existing service portfolio.</li>
                        <li>In external projects a public organisation, NGO or citizen’s initiative demonstrates how a citizen-centred digital service should look and offers a prototype to a government agency for adoption.</li>
                    </ul>
                    <p>
                        However, the basic steps and issues of project management are quite similar in each case. Every project starts by assigning a project manager, who has to set up project organisation.
                    </p>
                </div>
                <DividerHeader text='Setting up a project management structure' />
                <div>
                    <p>
                        At the heart of co-creation lie considerations about power, participation and decision-making processes. We propose that decision-making in co-creation has two dimensions:
                    </p>
                    <ul>
                        <li><strong>Strategic issues,</strong> such as the overall objectives, resources, and transfer of results should be planned with, and controlled by stakeholders, within a project board or steering group. </li>
                        <li><strong>Service design issues,</strong>such as defining information needs, data collection, and software development, should be assigned to co-creators, representing the target audience and the different kinds of skills, expertise and situated knowledges that are required for developing user-centred services.</li>
                    </ul>
                    <p>
                        Usually the same team runs a project from beginning to end. In the case of co-creation, citizen participants are volunteers and, considering the different capabilities required, it is unlikely that all of them will participate throughout the whole process. Some citizens have broad local knowledge but no technical background and no interest in co-design. Furthermore, many people do not want to commit themselves to participate in a process that may take between three and six months (or even longer). Therefore, there are two organisational options:
                    </p>
                    <ul>
                        <li>There may be <strong>one core group covering all aspects</strong>  of defining a service concept, working with data, and co-creating software during the whole project, and two or more supplementary groups for specific tasks and aspects. Where specific skills are missing for a specific task, additional contributors can be co-opted to contribute.</li>
                        <li><strong>Separate sub-groups</strong> are established for developing the service concept, working with data, and software co-creation, linked via the project manager and with occasional joined meetings.</li>
                    </ul>
                </div>

                <DividerHeader text='Problem focus, target audience, and other stakeholders' />
                <div>
                    <p>
                        Public services are not offered for commercial reasons. Government agencies and public organisations, e.g. welfare organisations and associations, provide them as means to achieve social objectives and social impact. In the Mobile-Age project, these were to reduce loneliness, support social inclusion, improve the accessibility of <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">walking routes</a>or improve access to health care services for older adults. In order to recruit members of the project board and co-creators, the objectives and scope of the project, the problem focus, and the target audience(s) have to be determined. We assume that, as was the case in the Mobile-Age project, a co-creation project has to define a broad problem focus and social innovation objective prior to its start. However, to allow for co-creation and a participatory and inclusive decision-making process to take place, this definition needs to leave sufficient scope for action to the co-creators to jointly develop a detailed problem definition, a solution to this problem and a detailed service concept (e.g. description of service concept, functionality and content).
                    </p>
                    <p>
                        A project should define the problem focus of a co-creation process  in collaboration with different stakeholders; in particular, the prospective beneficiaries. However, in order to recruit prospective co-creators, the project manager/project board has to communicate the activities with which they expect co-creators to engage. From experience with Mobile Age, we recommend that the project manager start with the recruitment of ‘strategic’ stakeholders that represent the target audience and other interested or relevant organisations. They should be involved in defining the problem focus, the social innovation objective and the beneficiaries, as well as the target audience of the service. In addition, members of the project board may support the recruitment of members of the target audience for further co-creation activities.
                    </p>
                </div>

                <DividerHeader text='Stakeholder Analysis' />
                <div>
                    <p>Stakeholders are people, groups of people or organisations that have a stake in a process and the results of a project. For co-creating a digital public service, the most relevant stakeholder group is the target audience. That is primarily the intended eventual users of the co-created service as well as other ‘indirect’ users or intermediaries. For example, if the prospective service targets older adults it may also support providers of services for older adults, or caregivers.</p>
                    <p>A stakeholder analysis is the process of scanning and identifying possible stakeholders and classifying and ranking them. Stakeholders can be identified throughout the development process, starting with required inputs, continuing through the development process, to the target audience and other beneficiaries, people, or organizations who will be impacted:</p>
                    <ul>
                        <li>Beneficiaries of the service with respect to the social objective (in the Mobile Age project older adults in their ‘third age’, socially excluded people, people with handicaps, healthcare patients)</li>
                        <li>Prospective future users, relatives and intermediaries</li>
                        <li>Providers of existing services, as cooperation partners or affected competitors</li>
                        <li>Possible providers for takeover of developed prototypes</li>
                        <li>Professional software developers</li>
                        <li>Government agencies responsible for the subject area addressed by the social objective</li>
                        <li>Data owners</li>
                    </ul>
                    <p>
                        For each type of stakeholder, relevant people and organisations in the community should be identified, and the extent to which they can contribute, directly or indirectly, to achieving the social innovation objective via a digital public service has to be assessed. The project manager should assign suitable candidates to the project board or the co-creating core group, or as co-creators to be invited for specific and limited contributions.
                    </p>
                    <p>
                        The project manager may follow an incremental approach and contact relevant stakeholders individually, or assemble a stakeholder conference. They should present different options of how the output(s) of the project might look, what kind of improvements are possible, and what kinds of contributions are required. At this stage, it is not possible nor desirable to provide a specification of a service to be developed. This evolving specification needs several iterations. Instead, the objective at this stage is to define a broad problem focus that a large number of stakeholders considers relevant and for which a sufficient number and diversity of stakeholders may be engaged as co-creators.
                    </p>
                </div>

                <DividerHeader text='Project board' />
                <div>
                    <p>
                        As a result of the recruitment process a project board should be established, with five to eight members, representing the different stakeholder groups. They should elect a speaker and agree on a joint mission and a programme of work (for example with respect to regular meetings, the range of tasks and responsibilities). The members of the project board support the co-creation process as experts on a particular aspect of the problem focus, and further facilitate the recruitment and engagement of co-creators. Each representative may have his or her own interest in participating and contributing. It is the task of the project manager to learn about these individual interests and to conduct the project in such a way as to meet them, so that the board members maintain their support for the project.
                   </p>
                </div>

                <DividerHeader text='Management plan' />
                <div>
                    <p>
                        Once the problem focus and the social objective have been defined, it is the task of the project manager to develop a time plan, a resource plan, and a cost or budget plan. The most relevant issue with regard to costs is software development. In an in-house project, this has to be negotiated with the IT department. In external projects, it is very unlikely that volunteers will be skilled in software development. Instead, professional software developers should be hired. Usually, a compromise has to be made between a rather broad problem focus and limited financial resources. Therefore, the most relevant aspects that can be realised within the available budget should be prioritised. A draft project management plan can then be submitted and discussed with the project board.
                    </p>
                </div>

                <DividerHeader text='Documentation and Reporting' />
                <div>
                    <p>
                        There are at least four different recipients of targeted reports:
                    </p>
                    <ul>
                        <li><i>Funders</i> want regular reports on the achievements and progress of the project and spending.</li>
                        <li>The <i>project board</i> should receive regular updates on the different activities and be consulted on decisions relating to planning (e.g. interim outputs).</li>
                        <li><i>Co-creators</i> have to receive minutes of decisions taken, as not all members will be present at each meeting.</li>
                        <li>Finally, co-creating a public service is an issue of public interest and for certain milestones reports to the <i>public</i> should be issued.</li>
                    </ul>
                </div>

                <DividerHeader text='Relation to other streams' />
                <div>
                    <p>
                        After identifying the problem focus and the social objectives, you should use the project management plan to define the target audience, and to select, approach, and recruit all as well as all other co-creators have to be defined and candidates to join the co-creation process have to be selected, approached, and recruitedrequired for different roles as defined in the project management plan. This is the subject of the <a href="guidebook/co-creation-process/2" target="_blank" rel="noopener noreferrer">engaging stakeholders and other co-creators</a> stream.
                    </p>
                    <p>
                        In most cases, external projects will co-create and develop a prototype of a user-centred service, but will not then maintain it themselves. Therefore, government bodies and/or public organisations who might take over running of the service after the prototype is developed, should be involved from the beginning, in order to ensure the integration of the prototype as a service in their portfolio. Different options and specific requirements should be considered from the beginning. These actions are the <a href="guidebook/co-creation-process/7" target="_blank" rel="noopener noreferrer">service provision and maintenance</a> stream.
                    </p>
                    <p>
                        In order for learning to be transferred to future projects, and for reasons of accountability, an appropriate evaluation of the co-creation process and its achievements of objectives should be carried out. These are the subjects of the <a href="guidebook/co-creation-process/6" target="_blank" rel="noopener noreferrer">evaluation stream.</a>
                    </p>
                </div>

                <DividerHeader text='Practical recommendations' />
                <ul>
                    <li>Start with your own project management plan and adapt it during the following steps in cooperation with the project board.</li>
                    <li>Develop a time frame for the process.</li>
                    <li>Define roles and tasks for the different stakeholder groups.</li>
                    <li>Define the benefits of the project for the different stakeholder groups in order to motivate their participation. </li>
                    <li>For any step, consider the end of the project, the transfer of the output and the achievement of the social objective(s).</li>
                    <li>Get consensus about evaluation criteria and methods with funding providers and relevant stakeholders in the early stage of each stream, and use them for monitoring progress.</li>
                </ul>

                <DividerHeader text='Results' />
                <div>
                    <p>The results are a project management plan (including time and resource plans) updated on a continuous basis, a stakeholder analysis, and a project board.</p>
                </div>

                <DividerHeader text='Good practice examples' withGoodPracticeExampleIcon />
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <div className='my-resp-padding' style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <p>In the case of <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">co-creating a digital walking guide</a> - an external project - we aimed to engage different stakeholder groups from the beginning to support the co-creation process in different ways. In order to form a project board of local stakeholders we therefore initially identified a group of people that firstly, would have an interest in the service, and secondly, would support its maintenance. This was a network of elderly care service providers. The network also turned out to be the appropriate stakeholder group to involve in project management. On the one hand, they could support us with their expertise, access to the target user group, facilities, connections, data creation and maintenance. One the other hand, we also identified possible advantages for them. Firstly, the co-created outcome might help inform people about their services, and thereby help them to reach their target audience. Secondly, the digital walking guide that we developed helps them conduct and organise public walks themselves (which is part of their service portfolio). Lastly, they had a great interest in improving the image of the district and facilitating social connections across neighbourhood borders, and they expected the co-creation process to facilitate these processes as well as producing a walking guide for older adults. We attended one of the regular meetings of this group and presented the project and our request. Seven members of the network committed themselves to be part of the project board that would recruit different groups of older adults for the co-creation process, and that would accompany and support the whole process.</p>
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
