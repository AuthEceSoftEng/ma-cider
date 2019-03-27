import React from 'react';
import {
    DividerHeader,
    ProcessStageCircles,
    StreamMethodsBox,
    TilePdf,
    ButtonNextPage
} from '../../../components/_index'
import { Row, Col } from 'antd';

const CoCreationProcessStage3 = props => {
    const { CO_CREATION_PROCESS, MATERIALS } = props;
    const { color, imgSrc, substages, name, methods, relatedMaterials } = CO_CREATION_PROCESS[2];
    const nextName = CO_CREATION_PROCESS[3].name;
    const prevName = CO_CREATION_PROCESS[1].name;
    return (
        <div>
            <div className='my-resp-padding'>
                <div>
                    <ButtonNextPage to='/guidebook/co-creation-process/4' label={nextName} />
                    <ButtonNextPage backwards to='/guidebook/co-creation-process/2' label={prevName} />
                </div>
                <h1 className='color-primary'>{name}</h1>
                <h2 />
                <ProcessStageCircles
                    color={color}
                    imgSrc={imgSrc}
                    substages={substages}
                    colSpan={3}
                />
                <DividerHeader text='OVERVIEW' />
                <p>
                    A digital public service is a permanent information, communication and/or transaction offer of public value to a target audience provided by a service provider. Frequently such services are provided via online portals and linked with other services, all of which have to comply with certain standards. For example, according to the General Data Protection Regulation (GDPR) there must be a responsible entity offering a digital service: Besides the front-office user interface, there is a back-office interface linking to different data sources and allowing the service provider to manage the data. There should be sufficient personal and financial resources to <a href="guidebook/co-creation-process/7" target="_blank" rel="noopener noreferrer">maintain and update the service sustainably</a>.
                </p>
                <p>
                    A concept for such a service therefore considers its technical implementation and provision, the creation and maintenance of its content, its organisation as well as financial and legal aspects. The initial tasks associated with the co-creation of a service concept include a preliminary survey and analysis of existing services in the chosen domain as well as the development of first ideas. The service to be developed is going to be defined in the co-creation process in several iterations. However, the following questions should be attended to from the beginning:
                </p>
                <ul>
                    <li>In what service domain is the service to be developed?</li>
                    <li>Shall it be an information service only or a communication and/ or transaction service as well?</li>
                    <li>What is the thematic space of the service (living, connecting, social/cultural activities, health, security, etc.)?</li>
                    <li>Who is the target user group and what other stakeholders are relevant?</li>
                    <li>What technological infrastructure is available in the specific area for delivery and use of the service (e.g. internet coverage as well as the supply of devices)?</li>
                </ul>
                <p>
                    Answers to each of these questions have implications on the scoping and required resources of a co-creation project.
                </p>
                <p>
                    Overall, this stream of activity can be viewed as an umbrella for the two other key co-creation streams <a href="guidebook/co-creation-process/4" target="_blank" rel="noopener noreferrer">“working with data”</a> and <a href="guidebook/co-creation-process/5" target="_blank" rel="noopener noreferrer">“co-creating software”</a>. Methods can vary greatly from <a href="guidebook/methods/details/7" target="_blank" rel="noopener noreferrer">scenario building</a>, design thinking and brainstorming in <a href="guidebook/methods/details/3" target="_blank" rel="noopener noreferrer">focus groups</a> and workshops to more innovative methods such as <a href="guidebook/methods/details/10" target="_blank" rel="noopener noreferrer">walking interviews/workshops</a> or <a href="guidebook/methods/details/1" target="_blank" rel="noopener noreferrer">cultural probes</a>. Those methods are appropriate for developing an understanding of the everyday activities (including communication practices and ICT-use) of a target group.
                </p>

                <DividerHeader text='Idea forming' />
                <p>In a first step, the service domain and problem focus are explored collaboratively in order to develop a joint understanding of a specific problem to be addressed. This can include the exploration of participants’ everyday practices and their visions and needs as well as the exploration of issues of concern for the provision of services by a public organisation. For the exploration of the everyday practices of the target user group as well as their visions and needs <a href="guidebook/methods/details/1" target="_blank" rel="noopener noreferrer">cultural probes</a> as well as <a href="guidebook/methods/details/4" target="_blank" rel="noopener noreferrer">interviews</a> are useful methods.</p>

                <DividerHeader text='Surveying existing services' />
                <p>In a second step, it is useful to survey existing services within the service domain, digital and in print. These can be presented to and discussed with co-creators in order to develop ideas for improvement.  A thorough survey of existing services will allow to formulate a value proposition (e.g. what may be the added value of the future digital services for the target user group(s)). If existing services are also digital, they may be useful examples for activities relating to the <a href="guidebook/co-creation-process/5" target="_blank" rel="noopener noreferrer">co-creation of software</a> -creation and may complement <a href="guidebook/methods/details/9" target="_blank" rel="noopener noreferrer">prototyping</a> exercises. </p>

                <DividerHeader text='Developing a rough service concept' />
                <p>At the beginning of this step, all co-creators should agree on a joint problem definition and/or a desired output. Upon this, a rough service concept is being developed. This includes the definition of information objects and their relevant attributes. This can for example be done in <a href="guidebook/methods/details/10" target="_blank" rel="noopener noreferrer">walking workshops</a> where participants are handed out a <a href="guidebook/materials?downloadName=Defining Attributes of Walks" target="_blank" rel="noopener noreferrer">template</a> where they can note what they are interested in when walking.  </p>

                <DividerHeader text='Detailing service concept' />
                <p>The rough service concept is refined in several iterations into a detailed service concept. Here, the attributes are defined in more detail (what does the target group want to know exactly) and the availability of data is checked. A common method for the detail definition of the attributes are <a href="guidebook/methods/details/3" target="_blank" rel="noopener noreferrer">focus groups</a></p>
                <p>The final step in this stream of activity is a document outlining the content as well as the organisational, legal and financial provision of service delivery on which commitments of the service provider may be sought. </p>

                <DividerHeader text='Relation to other co-creation streams' />
                <p>This stream of activity is tightly connected to the stream <strong><a href="guidebook/co-creation-process/4" target="_blank" rel="noopener noreferrer">“working with data”</a></strong>, since possible relevant data are defined based on the idea forming. The detailed concept then depends on the availability and usability of data.</p>
                <p>In order to check the feasibility and to refine the prototype continuously by testing it with participants the <strong><a href="guidebook/co-creation-process/5" target="_blank" rel="noopener noreferrer">co-creation of software</a></strong> has to begin before a detailed concept is defined and both activities run in parallel.</p>

                <DividerHeader text='Practical recommendations' />
                <ul>
                    <li>To plan activities in this stream start from the end: Who will provide the co-created service after the end of the project? How open is the prospective provider to the needs and proposals of the target audience and the co-creators? </li>
                    <li>When forming ideas, make clear to participants that not all ideas may be realised. </li>
                    <li>If concepts turn out not to be feasible and are discarded make decisions transparent and reasonable to participants. </li>
                    <li>Use examples on existing services and technologies to inspire creativity. </li>
                    <li>Consider when and how to introduce technology. Moving forward from abstract discussions to showing websites and apps, may be key in maintaining participant engagement and interest (i.e. relevance) and structure discussion.   </li>
                    <li>Depending on the problem focus and the service to be developed, define a “red thread” throughout the co-creation process and connect different activities. </li>
                    <li>Consider how the service could reach out to people who do not access the internet (e.g. printed information, SMS, landline). </li>
                    <li>Consider data security and trust issues. </li>
                    <li>Aim to get feedback on the detailed service concept from stakeholders outside the core-co-creator-group. </li>
                    <li>Do not underestimate the requirements for running and maintaining the service. Get frequent feedback from the prospective service provider during the refinement of the concept. </li>
                </ul>

                <DividerHeader text='Results' />
                <p>The result of this stream of activity is the delivery of a service. This is embedded in an existing service portfolio.</p>

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

export default CoCreationProcessStage3;


