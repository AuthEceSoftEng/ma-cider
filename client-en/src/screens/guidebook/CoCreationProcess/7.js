import React from 'react';
import {
    DividerHeader,
    ProcessStageCircles,
    StreamMethodsBox,
    ButtonNextPage,
    TilePdf
} from '../../../components/_index'
import { Row, Col } from 'antd';

const CoCreationProcessStage7 = props => {
    const { CO_CREATION_PROCESS, MATERIALS } = props;
    const { color, imgSrc, substages, name, methods, relatedMaterials } = CO_CREATION_PROCESS[6];
    const prevName = CO_CREATION_PROCESS[5].name;
    return (
        <div className='my-resp-padding'>
            <ButtonNextPage backwards to='/guidebook/co-creation-process/6' label={prevName} />
            <h1 className='color-primary'>{name}</h1>
            <h2 />
            <ProcessStageCircles
                color={color}
                imgSrc={imgSrc}
                substages={substages}
                colSpan={3}
            />
            <DividerHeader text='Introduction' />
            <div>
                <p>
                    The main objective of this stream is to establish the permanent provision of a co-created service. This covers three aspects:
                </p>
                <ul>
                    <li>legal and economic responsibility;</li>
                    <li>hosting of the app and back-office functions; and</li>
                    <li>editorial work; update and maintenance of data.</li>
                </ul>
                <p>
                    The concrete activities differ for in-house projects and external projects (see description of <a href="guidebook/co-creation-process/1" target="_blank" rel="noopener noreferrer">managing a co-creation project</a>). External projects should try to involve potential service providers from the beginning via the project board and work out a business plan. For in-house projects, it is necessary to ensure that the additional resources required for a permanent service provision are acknowledged in the organisation’s budget and that responsibilities are assigned.
                </p>
            </div>


            <DividerHeader text='Plan for transfer' />
            <div>
                <p>
                    Plan the transfer of a prototype to a permanent service provision. Potential service providers that may take over the co-created prototype should be identified and involved right from the start. Criteria to compare alternative options may involve:
                </p>
                <ul>
                    <li>outreach to the target audience with similar and complementary services;</li>
                    <li>technical interoperability and required interoperability standards and interfaces;</li>
                    <li>intellectual property rights issues; and,</li>
                    <li>costs related to transfer and migration.</li>
                </ul>
            </div>


            <DividerHeader text='Requirements for later service provision' />
            <div>
                <p>
                    In order to avoid complicated and costly adaptaion when migrating the app and integrating it into an existing portal, technical standards, data formats, map designs, search functions etc. should be checked for compatibility as early as possible and be adhered to when <a href="guidebook/co-creation-process/5" target="_blank" rel="noopener noreferrer">co-creating software</a>.
                </p>
                <p>
                    If data is transferred at the end of the co-creation process, property rights/licensing models should be clear. When data are to be collected from other sources within the project and property rights have been given for the prototype, these rights should also cover the period post-transfer.
                </p>
            </div>

            <DividerHeader text='Business and Revenueplan' />
            <div>
                <p>
                    Data collection and data maintenance will have been financed within the project budget during the project. A later service provider will face costs for maintaining and updating the data. Therefore, a business and revenue plan should be developed that identifies possible revenue streams to cover these costs.
                </p>
                <p>
                    For an internal project within government, an organizational assignment should be found instead.
                </p>
            </div>


            <DividerHeader text='Relation to other streams' />
            <div>
                <p>
                    This stream relates to all other streams. Maintenance and sustainability should be considered at all times (e.g. when considering the feasibility of proposed solutions or co-creating data).
                </p>
            </div>

            <DividerHeader text='Practical recommendations' />
            <ul>
                <li>Disseminate your activities continuously throughout the process (newspaper, social media, etc.).</li>
                <li>Make sure all necessary Intellectual Property Rights are available.</li>
                <li>Get feedback from stakeholders on service concepts.</li>
                <li>Publicly launch the product when finished:  <ul><li>Invite involved stakeholders and the local press. </li></ul></li>
                <li>Integrate/migrate the system into existing processes.</li>
                <li>Explore and if possible research the benefits for the customer segments, to allow for a quantifiable estimate and measurement of project effects.</li>
                <li>Gather input on what would be natural to pay for a comparable service (value) and on possible ways to distinguish between a free service and a premium service. </li>
                <li>Agree on how to determine costs and benefits for the customers </li>
            </ul>

            <DividerHeader text='Results' />
            <div>
                <p>
                    This stream of activity results in a business plan. Agreements on who will take responsibility in legal terms, and maintain the service, are finalised.
                </p>
            </div>

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
    )
}

export default CoCreationProcessStage7;
