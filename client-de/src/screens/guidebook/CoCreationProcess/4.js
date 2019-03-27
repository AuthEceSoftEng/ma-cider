import React from 'react';
import {
    DividerHeader,
    ProcessStageCircles,
    StreamMethodsBox,
    ButtonNextPage,
    TilePdf
} from '../../../components/_index'
import { Row, Col } from 'antd';

const CoCreationProcessStage4 = props => {
    const { CO_CREATION_PROCESS, MATERIALS } = props;
    const { color, imgSrc, substages, name, methods, relatedMaterials } = CO_CREATION_PROCESS[3];
    const nextName = CO_CREATION_PROCESS[4].name;
    const prevName = CO_CREATION_PROCESS[2].name;
    return (
        <div>
            <div className='my-resp-padding'>
                <div>
                    <ButtonNextPage to='/guidebook/co-creation-process/5' label={nextName} />
                    <ButtonNextPage backwards to='/guidebook/co-creation-process/3' label={prevName} />
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
                <div>
                    <p>
                        The basis of any digital public service are information, represented by data, text, pictures, audio or video files. Most recently there is particular emphasis on data and in particular Open Data. Such data are structured information that is “machine-readable” and can be further processed by software. Open data are data sets published under an open license to be used, re-used and re-distributed by any one.  For the co-creation of digital public services, open government data—that is data owned and published by public sector organisations—are an important resource. There are two ways to develop a service based on (open) data:
                    </p>
                    <ul>
                        <li>To identify available open data sets and to develop a service concept based on these data: <strong>data-driven service development.</strong></li>
                        <li>To develop a service concept with users first and then to check the availability of relevant data. If the data are not available, they need to be created: <strong>user-driven service development.</strong></li>
                    </ul>
                    <p>
                        As described in the <a href="guidebook/co-creation-process/3" target="_blank" rel="noopener noreferrer">service concept stream</a>, we recommend to start developing a broad service concept prior to and initially independently from existing data. This allows for the service to be developed on the needs of the target user group (user-driven approach) and not depending on available data (data-driven approach). An important task in this stream is to identify existing relevant open or other data sets while refining your service concept.
                    </p>
                    <p>
                        In addition to structured data, content that is not machine-readable but accessible to human users may be even more important. Multi-media content (e.g. pictures, audio comments and videos) can make a service more appealing and relevant. Since a variety of different actors, all with their specific knowledge and skills are involved in a co-creation process, there is great potential for the co-creation of missing data and multi-media content.
                    </p>
                    <p>
                        The ultimate aim of this stream of activity is the provision of complete data sets and other content for the service. This includes data in machine-readable formats, explanatory texts, audio files, pictures and videos as the content itself or as a guide how to use the service.
                    </p>
                </div>

                <DividerHeader text='Data availability check' />
                <div>
                    <p>
                        As first ideas for a service concept emerge, a feasibility study on the availability and quality of data identified as relevant needs to be conducted. The first step in this stream is to survey available datasets (open and not-yet-open data) within the proposed (service) domain (e.g. health) in order to
                    </p>
                    <ul>
                        <li>identify and examine relevant open data repositories</li>
                        <li>identify proprietary data that may relevant to the proposed services (availability, accessibility, license, validity, technical format, maintenance)</li>
                        <li>identify missing data to be collected or created</li>
                    </ul>
                    <p>
                        All involved stakeholders and co-creators may be engaged in this step. In addition to the open government data sets to be found on public open data portals, there are other data sources that may be integrated via links (linked open data), e.g. maps (google maps or open street map, public transport connections, data on accessibility) and there may be proprietary data that most likely can be identified by local stakeholders who might be data owners themselves and can provide data or can work as intermediaries to other data owners. The data owners need to be approached and the data have to be checked for availability, accessibility, license, validity, technical format and maintenance. In the end of this sub-stage - and as the service concept is refined - a stock of existing and available data is identified and listed. Any missing data are identified.
                    </p>
                </div>

                <DividerHeader text='Collecting, validating & quality checking data' />
                <div>
                    <p>
                        In a subsequent step, it needs to be decided on whether and how missing data are going to be co-created and by whom. This also includes editorial work. If additional data needs to be collected and validated, relevant stakeholders (e.g. knowledgeable local individuals or intermediaries) have to be identified and enrolled. The outcome of this task affects the further refinement of the service concept (e.g. if data are not available, the service idea may have to be refined or data have to be created as explained in the next step). All data (open or proprietary) then needs to be thoroughly quality checked. For this purpose <a href="guidebook/methods/details/2" target="_blank" rel="noreferrer noopener">data tables</a> might be used. This possibly requires some investigation such as phone calls, visits, online research etc.  The same applies to photos that may be provided by stakeholders. Audio and video files may also be  created by participants, perhaps with some professional help, e.g. in <a href="guidebook/methods/details/0" target="_blank" rel="noreferrer noopener">content creation workshops</a>. For such content it is important to consider the license under which it can be published.
                 </p>
                </div>

                <DividerHeader text='Creating & integrating open data' />
                <div>
                    <p>
                        If the information are not in a digital format, you may consider digitising it. If the data are not in a format that is easy to be published and integrated, transform it, for example, to RDF. Furthermore, you may have to identify external data sources to be integrated/linked with. Lastly, if data are not available at all, but relevant to the service, you may have to consider creating it. This can be done in co-creation with stakeholders. The methods vary depending on the kind of data to be created. <a href="guidebook/methods/details/3" target="_blank" rel="noopener noreferrer">Focus groups</a> with knowledgeable local stakeholders are one useful method for the collection of data on places or insitutions. For multi-media content <a href="guidebook/methods/details/0" target="_blank" rel="noopener noreferrer">content creation workshops</a> can be conducted. Be aware that particularly for co-created data, you have to consider the data’s sustainability and maintenance early on and arrange with local stakeholders.
                    </p>
                </div>

                <DividerHeader text='Editorial work' />
                <div>
                    <p>
                        The data integrated into databases or content management systems (back-office) is different from how the content of the service is presented to the users. For example, information of a city or district guide can be presented on a map or as a list, with thumbnail photos, short descriptions and links to more extensive information. An event calendar may be presented by categories or by calendar dates. Here the way, different target audiences’ look for information and how they understand information is important for the <a href="guidebook/co-creation-process/5" target="_blank" rel="noopener noreferrer">co-creation of software</a>. Another requirement is the maintenance of accessibility according to the WCAG2.0. For any visual media content a describing textual or audible alternative  has to be created, as the content cannot be recognised by screen readers of blind people. Same applies to audible content, where a textual alternative, e.g. captions must be provided.
                     </p>
                </div>

                <DividerHeader text='Relation to other streams' />
                <div>
                    <p>
                        Overall, this stage is tightly connected with the stream <a href="guidebook/co-creation-process/3" target="_blank" rel="noopener noreferrer">co-creating a service concept</a>; as open data is identified and validated, it opens possibilities for potential services or closes certain avenues (e.g. if no data is available and cannot be collected). As data collection and creation progresses, the service concept can become more detailed. Depending on data availability and quality, certain prioritisations with respect to potential services will be made. Also, the stream is related to <a href="guidebook/co-creation-process/2" target="_blank" rel="noopener noreferrer">Engaging co-creators and other stakeholders</a>, since specific stakeholders with domain knowledge for data collection or skills of making photos and videos might need to be engaged. <a href="guidebook/co-creation-process/7" target="_blank" rel="noopener noreferrer">Provision and maintenance</a> is also related to the data work, in terms of property rights/licensing models after transferring a prototype as well as with regard to the responsibilities for maintaining the data. Also <a href="guidebook/co-creation-process/5" target="_blank" rel="noopener noreferrer">Co-creating software</a> is related as the software to be developed is influenced heavily by the data used and, if data is created, additional back-office systems may have to be implemented.
                    </p>
                </div>

                <DividerHeader text='Practical recommendations' />
                <div>
                    <ul>
                        <li>Take into account that information identified as relevant may not be available as open data. Plan ahead to collaborate with various data owners (e.g. service providers) and allow sufficient time for data creation during the co-creation process. Offer a user-friendly backend for inputting data to participants.</li>
                        <li>Less is more. Concentrate on a few categories of objects. Agree on specific objects to be explored in more detail.</li>
                        <li>Consider methods for “snowball” data collection. Use methods that allow a variety of older adults to contribute to the data collection.</li>
                    </ul>
                </div>

                <DividerHeader text='Results' />
                <div>
                    <p>The result of this stream of activity is the provision of complete and validated data sets of all required data as well as other content to be implemented in the service.</p>
                </div>

                <DividerHeader text='Good practice example' withGoodPracticeExampleIcon />
            </div>

            <div style={{ backgroundColor: 'white' }}>
                <div className='my-resp-padding' style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <p>
                        In all Mobile Age case studies, the identification of relevant data was a major task. However, in two case studies, <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">co-creating a digital district guide</a> and <a href="guidebook/case-studies/bremenosterholz" target="_blank" rel="noopener noreferrer"> co-creating a digital neighbourhood guide</a>, we had to realise that a large part of the data that was required in order to deliver a useful service did not exist or existed in insufficient form. In these cases, older adults became data and content co-creators.
                  </p>
                    <p>
                        In the case of co-creating a digital district guide, we had co-created a concept for a service that informs about to different kinds of objects, with differing attributes:
                  </p>
                    <ul>
                        <li>Nice places with descriptions about what was considered particularly nice, and information about the availability of benches and toilets nearby as well as supplementary information such as possibilities for exercising and for having BBQs.</li>
                        <li>Informal meeting facilities, institutions and services in the field of culture, consultancy and advice as well as sports with data on the individual services and facilities, events, contact persons etc. </li>
                    </ul>
                    <p>
                        We conducted <a href="guidebook/methods/details/3" target="_blank" rel="noopener noreferrer">focus groups</a> with older adults in order to collect the <a href="guidebook/materials?downloadName=Guiding a Focus Group for Data Collection" target="_blank" rel="noopener noreferrer">relevant objects for all categories</a>. The participants in the focus groups named nice places and institutions that they knew and that they deemed relevant and started describing them. The result was a stock of relevant objects in all categories.
                  </p>
                    <p>
                        We then created a <a href="guidebook/methods/details/2" target="_blank" rel="noopener noreferrer">data table</a> with a line for each object and several columns for the different attributes. These two <a href="guidebook/materials?downloadName=Completing, Validating and Quality Checking Data" target="_blank" rel="noopener noreferrer">data tables</a> became the central working tool for the data collection and co-creation process with two objectives:
                  </p>
                    <ul>
                        <li>Completeness, e.g. identify all the relevant objects in Osterholz for each category.</li>
                        <li>Richness of relevant details, e.g. to collect data on as many aspects as possible for each object. </li>
                    </ul>
                    <p>
                        We included all available existing data in the tables and checked their validity. The information was corrected and we completed the empty fields where information was missing. In this way by and by we completed the data sets, which then delivered structure and input for the data base of the service/prototype.
                  </p>
                </div>
            </div>


            <div className='my-resp-padding'>
                <DividerHeader text='METHODS' />
                <StreamMethodsBox
                    methods={methods}
                />
                <DividerHeader text='MATERIALS' />
                <Row gutter={48} type='flex'>
                    {relatedMaterials.map((m, i) =>
                        <Col key={i} xs={24} lg={8} className='mb-45'>
                            <TilePdf
                                header={MATERIALS[m].name}
                                subHeader={MATERIALS[m].text}
                                tags={[]}
                                fileId={m}
                                filterable={false}
                            />
                        </Col>)}
                </Row>
            </div>

        </div>
    )
}

export default CoCreationProcessStage4;
