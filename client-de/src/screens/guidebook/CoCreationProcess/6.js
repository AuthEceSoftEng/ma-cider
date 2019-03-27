import React from 'react';
import { Row, Col, Table } from 'antd';
import {
    TilePdf,
    DividerHeader,
    ProcessStageCircles,
    StreamMethodsBox,
    ButtonNextPage
} from '../../../components/_index'

const CoCreationProcessStage6 = props => {
    const { CO_CREATION_PROCESS, MATERIALS } = props;
    const { color, imgSrc, substages, name, methods, relatedMaterials } = CO_CREATION_PROCESS[5];
    const nextName = CO_CREATION_PROCESS[6].name;
    const prevName = CO_CREATION_PROCESS[4].name;
    return (
        <div>
            <div className='my-resp-padding'>
                <div>
                    <ButtonNextPage to='/guidebook/co-creation-process/7' label={nextName} />
                    <ButtonNextPage backwards to='/guidebook/co-creation-process/5' label={prevName} />
                </div>
                <h1 className='color-primary'>{name}</h1>
                <h2 />
                <ProcessStageCircles
                    color={color}
                    imgSrc={imgSrc}
                    substages={substages}
                    colSpan={3}
                />
                <DividerHeader text='Introduction' />
                <p>The <strong>main objectives</strong> of this stream of activity are to: </p>
                <ul>
                    <li>Integrate planning and evaluation into your project from the start</li>
                    <li>Undertake continuous reflection and adaptation of co-creation activities using an action learning model</li>
                </ul>
                <p>An important early stream of activity is the planning of the evaluation of co-creation interventions. From the start of the project, the core team should define “what” will be evaluated (e.g. the process of doing the project, and the ‘product’ or outputs) and “how”. The evaluation is, of course, very much dependent on the context and domain in which your co-creation activities take place, and may be refined as the co-creation activities proceed.</p>
                <p>
                    Evaluation is often seen as the ‘not so nice’ part of co-creation projects, often because it is imposed onto a co-creation project by the funder or some external entity. The approach to evaluation outlined here is different. Firstly, this evaluation approach emerged from our co-creation projects with older adults—in other words it was designed as something meaningful from the start. Secondly, we believe that evaluation and impact creation has to be continuous, add value to all the stakeholders involved, and be proportionate. As such, we would suggest that traditional approaches to impact assessment do not lend themselves to reflexive and participatory approaches such as co-creation.  With this in mind, we suggest that all evaluation and impact creation activities—especially projects that involve older adults—are based on three principles:
                </p>
                <ul>
                    <li>It is done as an ongoing reflective practice through action learning (continuous) </li>
                    <li>It is a participatory process (add value to all stakeholders)</li>
                    <li>It is focused on the project’s spheres of control and influence (proportionate)</li>
                </ul>

                <p>
                    <i>(1) The evaluation process</i> is based on <strong>continuous</strong> reflective practice through action learning. Evaluation and impact creation activities, like this guidebook, can be seen as active opportunities for learning and innovation. This requires and action learning (or reflective practice) approach. Below we have a figure of such an approach—based on the Kolb learning cycle
                </p>

                <Row>
                    <Col lg={{ span: 10, offset: 7 }} className='mb-16' style={{ textAlign: 'center' }}>
                        <img alt='evaluation-circle' style={{ width: '90%', height: 'auto' }} src='assets/img/evaluation-circle.png' />
                    </Col>
                </Row>

                <p>
                    With this learning cycle in mind projects will, with every co-creation activity, do something, reflect on what they have done, deduce what they have learnt, and then plan to do certain things differently.  They will also do the same for the project as a whole. This distinction—between the project activities and the project as a whole—introduces the distinction between formative and summative evaluation. <strong>Formative evaluation</strong> is an ongoing evaluation process that is directed at the development or improvement of ongoing co-creation process and activities (as well as the documentation of lessons learnt for future projects). In contrast, <strong>summative evaluation</strong> of a project (or major phase of a project) is conducted after completion of the project or phase, both to capture lessons learnt and to evaluate outputs of the project. It also, most often, is done for the benefit of some external audience or decision‐makers. Thus, in using this guidebook and our evaluation approach it is important that both formative and summative evaluation is done within the context of continuous learning (Figure above).
                </p>
                <p>
                    <i>(2) The evaluation approach</i> outlined here is a <strong>participatory</strong> process that adds value to all stakeholders. Co-creation is a participatory process and because evaluation is seen as intrinsic to co-creation activities, evaluation is also co-created. As a participatory process—rooted in the co-creation methodology—the evaluation approach outlined here:
                </p>
                <ul>
                    <li>Involves, and is useful to, the project's end users.</li>
                    <li>Is context-specific, rooted in the concerns, interests, and problems of the project's end users</li>
                    <li>Respects and uses the knowledge and experience of all the key stakeholders.</li>
                    <li>Is not, and cannot be disinterested process</li>
                    <li>Favours collective and participatory methods of knowledge creation</li>
                    <li>Shares power with all the stakeholders</li>
                </ul>

                <DividerHeader text='Formative evaluation' />
                <p>
                    The <i>formative</i> evaluation of co-creation interventions is a continuous process throughout. Key to co-creation as a successful reflective practice, incorporating action learning, is the continuous evaluation of co-creation interventions both formally and informally, using a set of formative evaluation criteria. The evaluations feed into the development of activities as a project progresses, but the formal evaluations should also be documented using protocols and questions for each evaluative criteria. Questions to be considered for these types of documentation concern the aims of an intervention, their implementation and their outcomes; reflections on their effectiveness and appropriateness as well as corrective actions.
                </p>
                <p>
                    The focus is on the quality of the project process and interventions. The purpose is to look for improvements and corrections according to one’s own observations and feedback from participants. The formative assessment attends to the following dimensions:
                </p>
                <ol>
                    <li><strong>Openness and diversity</strong> of the co-creation process to a variety of stakeholders: The involvement of a broad range of different older adults (with regard to age, health, socio-economic status, education, skills, etc.);</li>
                    <li>Older adults' <strong>ability and possibility to participate</strong> in the co-creation process: The subjective experience of being able to participate actively in the process as well as the actual degree of involvement, responsibility and ownership;</li>
                    <li><strong>Involvement</strong> and <strong>ownership</strong>: Sharing control and responsibilities with participants;</li>
                    <li><strong>Transparency</strong> of the co-creation process to stakeholders: Understanding the purpose of the co-creation process and what can be achieved; sharing of relevant information about goals, plans and decisions made with participants and other stakeholders;</li>
                    <li><strong>Relevance</strong> of the co-creation process for participants: The relevance of the process (or aspects of it) in terms of participants’ needs, interests and motivations;</li>
                    <li><strong>Effectiveness</strong> of the co-creation process: The effectiveness of methods and the whole process with regard to the project goals and the concrete process goals;</li>
                    <li>Participants' <strong>learning</strong>: What participants learned throughout taking part in the co-creation process.</li>
                </ol>

                <DividerHeader text='Summative evaluation' />
                <p>
                    By contrast to the continuous and iterative nature of formative evaluation, <strong>summative</strong> evaluation is retrospective, it focusses on process and outputs. The first assessment of process uses an adapted set of evaluative criteria used for formative evaluation, that is, the criteria of The purpose here is to assess the quality of the outputs in order to learn for future co-creation interventions and to derive recommendations for others who plan similar processes. In contrast to formative evaluation, it is ore outward facing to external audiences and therefore uses externally validated standards and tests. The summative evaluation criteria to apply to the project processes are thus:
                </p>
                <ul>
                    <li>Sustainability</li>
                    <li>Effectiveness</li>
                    <li>Efficiency</li>
                    <li>Relevance (to identified problems or needs to be addressed); and</li>
                    <li>Key learnings.</li>
                </ul>
                <p>
                    The summative evaluation of product or the output assesses three different kinds of output with the following dimensions:
                </p>
                <ol>
                    <li><strong>Data</strong> (data collected in a database)
                    <ul>
                            <li>Availability and quality of data input</li>
                            <li>Quality of final datasets</li>
                        </ul>
                    </li>
                    <li><strong>App</strong> (app prodiving access to the data)
                    <ul>
                            <li>Usability</li>
                            <li>Functionality</li>
                            <li>Accessibility</li>
                        </ul>
                    </li>
                    <li><strong>Service</strong> (online service in which data and app are embedded, and that is offered by a service provider that maintains it)
                    <ul>
                            <li>Value for older adults</li>
                            <li>Value for intermediaries and service providers</li>
                            <li>Value for government</li>
                            <li>Uptake</li>
                        </ul>
                    </li>
                </ol>
                <p>
                    Service in the context of (3) above refers to social innovation in the form of a larger online portal that incorporates the software and data and provides it to the public, hosted by an organization according to a business model. The central point of reference for the evaluation is thus whether and to what extent the service meets the central value proposition of the service concept; broadly to provide better information to older adults about their district. “Better”, in this context, meant to be of high quality, more relevant and accessible for users, and more supportive for intermediaries, service providers, government and other stakeholders. These aspects can be assessed as they apply to prototypes or demonstrator apps, before a final summative assessment of digital output services.
                </p>

                <DividerHeader text='Relation to other streams' />
                <p>
                    This stream of activity runs in parallel with co-creation activities, and thus other streams. Formative evaluation should be undertaken throughout. Summative evaluation takes place periodically and can feed into interim reviews and reports. It should not take place until there is something to assess, i.e. until there is a co-created service concept and a prototype or some other output that can be tested.
                </p>

                <DividerHeader text='Practical recommendations' />
                <ul>
                    <li>Make sure that you evaluate each co-creation intervention as it takes place to make sure that learning is captured.</li>
                    <li>Involve all co-creators, including public/user participants and stakeholders where appropriate, to maximise learning.</li>
                </ul>

                <DividerHeader text='Results' />
                <p>
                    The results of this stream of activity are:
                </p>
                <ul>
                    <li>The incorporation of learning into subsequent co-creation activities, for constant improvement, in the case of formative evaluation.</li>
                    <li>The justification of activity and the formal demonstration of the quality and value of project outputs to participants and external audiences, in the case of summative evaluation.</li>
                </ul>

                <DividerHeader text='Good practice example' withGoodPracticeExampleIcon />
            </div>

            <div style={{ backgroundColor: 'white' }}>
                <div className='my-resp-padding' style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <h3><strong>Considering accessibility</strong></h3>
                    <p>
                        Below we list some questions to consider for the accessibility of the software product/outcome of the co-creation process. These have been developed specifically for the two pilot studies in South Lakeland and Bremen, and may also be helpful for other contexts
                        </p>
                    <Row>
                        <Col xs={{ span: 24 }} xl={{ span: 18, offset: 3 }}>
                            <Table columns={columns} dataSource={data} pagination={false} />
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='my-resp-padding'>
                {/* ~~~~~~~~~~~~~~~~~~~ */}
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

export default CoCreationProcessStage6;


const columns = [
    {
        title: 'Accessibility Dimension',
        dataIndex: 'accesibilityDimension',
        key: 'accesibilityDimension',
    },
    {
        title: 'Questions to consider for co-creators/designers',
        dataIndex: 'questions',
        key: 'questions',
    }];

const data = [
    {
        key: '1',
        accesibilityDimension: <strong>Infrastructure</strong>,
        questions: <ul>
            <li>Are there coverage issues in the area? Does design need to adapt to this, e.g. cached information, reducing bandwidth, reducing frequency of connections. </li>
            <li>How many people in the area have access to devices? Does the app work well across multiple types of devices including computers, smart phones and tablets</li>
        </ul>
    },
    {
        key: '2',
        accesibilityDimension: <strong>Design and content</strong>,
        questions: <ul>
            <li>Does your app follow accessibility guidelines such as WCAG 2.0 AA and is it compatible with common assistive technology? </li>
            <li>What testing and checking procedures are you putting into place? Has it been user tested to make sure it is straightforward and clear? </li>
            <li>Have you gained feedback from users throughout the design process and with prototypes?</li>
        </ul>
    },
    {
        key: '3',
        accesibilityDimension: <strong>Skills and support </strong>,
        questions: <ul>
            <li>Does it come with support features, e.g. online help resources or instruction videos? </li>
            <li>Are there features that make it easier for family members or intermediaries to provide support, e.g. remote log in? </li>
            <li>What systems are in place to provide training and support to use the app? Can partnerships be made with existing training programs or could local services provide training or support? </li>
        </ul>
    },
    {
        key: '4',
        accesibilityDimension: <strong>Meanings and motivations </strong>,
        questions: <ul>
            <li>What do people think would be most useful and relevant for them? How does the app respond to this? How is it relevant to people’s everyday lives?  </li>
            <li>What else is important (e.g. social connection, independence, fun?) to the people you work with? How does the app respond to this?</li>
        </ul>
    },
    {
        key: '5',
        accesibilityDimension: <strong>Attitudes and feelings </strong>,
        questions: <ul>
            <li>Do people have any concerns or fears about the technology? How have you addressed these?</li>
            <li>What is in place to help build trust?
                <ul>
                    <li>Who hosts site or app? </li>
                    <li>Security and privacy </li>
                    <li>How is this communicated? </li>
                </ul>
            </li>
            <li>Are there other attitudes (both positive and negative) that may affect use and experience? </li>
        </ul>
    },
    {
        key: '6',
        accesibilityDimension: <strong>Resources</strong>,
        questions: <ul>
            <li>Is there anyone that would find it difficult to use the app? What about people with vision impairments, hearing issues, coordination or mobility issues? Language issues? Can you respond to this?</li>
            <li>How can you make it relevant and useful for service providers or family members to help reach other people?</li>
            <li>What connections can be made to other programs/partnerships to help more people to access the application? </li>
            <li>How does it fit with policies for social inclusion, digital inclusion?</li>
        </ul>
    }
]