import React from 'react';
import { METHODS_LABELS as MLABELS } from '../labels/labels'
import { methods } from '../methods/methods'

const evaluationFramework = [
    {
        // Formative Evaluation
        evaluation: "Formative evaluation",
        introduction: <div>
            <p>
                Formative evaluation continuously evaluates the co-creation process to ensure that it is adding value to all the stakeholders and achieving what the process is supposed to achieve – that is, active and meaningful participation by all the relevant co-creators. For formative evaluation there are two interconnected aspects to consider. First there is the accessibility of the co-creation process—when setting up and planning the project: in other words getting appropriate citizens (e.g. older adults) to see themselves as relevant co-creators and participants in the project. Second, it involves ensuring that the co-creation process functions as an ongoing relevant and meaningful activity for all the stakeholders involved.
            </p>
            <p>Our research has shown that:</p>
            <ul>
                <li>Older adults often exclude themselves from the co-creation process, a priori. This might be for a number of reasons such as a lack the confidence to participate in the process, a lack of appropriate resources, and so forth. </li>
                <li>Older adults often have limited experience of being involved in creating services for themselves and therefore do not see or appreciate the relevance or potential of such approaches. </li>
                <li>The co-creation process can be time-consuming and make significant demands on older adults. They would tend to see this in terms of opportunity cost and opt to get involved in activities that are immediately relevant to them.</li>
            </ul>
            <p>
                Thus it is important to make sure that the co-creation project is relevant, meaningful and accessible to older adults (as, and while it is being planned). We suggest in this planning that a number of issues be considered, as outlined below. For formative evaluation of the co-creation process itself we recommend the following criteria (based on inclusive design) to be considered.
            </p>
            <p>
                We suggest that the formative evaluation is undertaken based on the reflective practice learning cycle, which leads to the following steps:
            </p>
            <ol>
                <li><strong>Plan</strong> the co-creation activities (as outlined in the co-creation streams in this guide). For this we provide a <a className="more-contrast" href="guidebook/materials?downloadName=Co-creation Intervention Planning Template" target="_blank" rel="noopener noreferrer">template</a> to help prompt you on what to think about in this planning process. If this is not the first activity, look at lessons learnt from previous intervention activities to make sure that the planning reflects the lessons learnt. This planning is best co-created with the stakeholders (but minimally within the team).</li>
                <li>You then <strong>do</strong> the co-creation activity. It is important that somebody is designated to take on the role of recording what happens. Not just what went well but also what did not really work, or go as well as one would have expected.</li>
                <li>Record the co-creation activities (afterwards) using notes and input from all the stakeholders and <strong>reflect</strong> on the outcomes. For this we provide a <a className="more-contrast" href="guidebook/materials?downloadName=Co-creation Intervention Record and Reflection Template" target="_blank" rel="noopener noreferrer">template</a> to help prompt you on what to think about in this reflection process. This reflection process is best co-created with the stakeholders (but minimally within the team)</li>
                <li>Create a record in a project reflection journal of what lessons were learnt and what you would <strong>do differently</strong> next time. A template is provided for this purpose [LINK TO TEMPLATE IV]</li>
            </ol>
        </div>,
        methods: [
            MLABELS['INTERVIEWS'],
            MLABELS['FOCUS_GROUPS'],
            MLABELS['SURVEYS_AND_QUESTIONNAIRES'],
            MLABELS['REFLECTIVE_PRACTICE'],
        ]
            .map(l => {
                const method = methods.find(m => m.label === l);
                return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
            }),
        relatedMaterials: [31, 32, 33],
        stages: [
            {
                name: 'Openness and diversity',
                description: <div>
                    <p>The involvement of a broad range of different older adults (with regards to age, health, socio-economic status, education, skills etc.)</p>
                </div>,
                sources: <div><ul>
                    <li>Participants</li>
                    <li>Stakeholders</li>
                    <li>Facilitators</li>
                </ul></div>,
                when: <div>
                    <p>During co-creation process, interim and final reports</p>
                </div>,
                protocols: <div>
                    <p>
                        Questions about the types of participants in the co-creation process (suggestions for demographics survey: age, sex, location, ethnicity, education, occupation, health and disability status, spcio-economic status, level of IT skills). Questions about measures taken to ensure all that were interested could take part, i.e. ensuring there were no physical barriers to access and that recruitment sought different groups of people. Explanation if there were groups that were not recruited/included.
                    </p>
                    <p><strong>Guiding questions.</strong></p>
                    <ul>
                        <li>Who was addressed by the recruitment? Who was not addressed? </li>
                        <li>Who participated in the process? </li>
                        <li>Were a broad range of people from different backgrounds and different abilities involved in the process? </li>
                        <li>How representative was the sample? Who was missing?</li>
                        <li>Were the activities of the process physically accessible?</li>
                        <li>Were there any activities to improve diversity during the process?</li>
                    </ul>
                </div>,
            },
            {
                name: 'Ability to participate',
                description: <div>
                    <p>The subjective experience of being able to participate actively in the process</p>
                </div>,
                sources: <div><ul>
                    <li>Participants</li>
                    <li>Facilitators</li>
                </ul></div>,
                when: <div>
                    <p>During co-creation process, interim and final reports</p>
                </div>,
                protocols: <div>
                    <p>Questions to assess if participants felt they could contribute and that the activities and materials used in the co-creation were adequate to the level of ability of the participants.</p>
                    <p><strong>Guiding questions.</strong></p>
                    <ul>
                        <li>Did all participants actively participate in the co-creation process?</li>
                        <li>Did participants feel listened to and valued?</li>
                        <li>Did participants feel their concerns taken seriously?</li>
                        <li>To what extent did participants have a sense of control over the co-creation process?</li>
                        <li>To what extent did participants have a sense of ownership over the product/outputs being developed? </li>
                        <li>Through what actions and methods did they feel enabled to contribute their expertise?</li>
                        <li>Were all participants involved in the decision making and was the decision making appropriate? </li>
                    </ul>
                </div>
            },
            {
                name: 'Transparency of the co-creation process',
                description: <div>
                    <p>Understanding the purpose of the co-creation process and what can be achieved</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Participants</li>
                        <li>Stakeholders</li>
                        <li>Facilitators</li>
                    </ul>
                </div>,
                when: <div><p>During co-creation process, interim and final reports</p></div>,
                protocols: <div>
                    <p>Questions about how the process was explained to the participants. Questions about how participants understood their role in the co-creation process. Facilitators’ explanations about measures taken to show the participants how their input and decisions made in the workshops were used in the development of the apps and service.</p>
                    <p><strong>Guiding questions.</strong></p>
                    <ul>
                        <li>Were the aims of the project and the expectations  of the facilitators / researchers  provided in writing and  well  understood by all participants? Was it clear what would happen with the output after the project would be finished?</li>
                        <li>Was it clear how decisions were made and was this communi- cated effectively with all participants?  Were decisions logged and fixed in protocols, which were accessible and written in the language of the participants.</li>
                        <li>Did the co-creation process enable the establishment of trust between participants and researchers?</li>
                        <li>Was the process transparent to other stakeholders ?</li>
                        <li>What could be done in order to improve transparency and trust building?</li>
                    </ul>
                </div>,
            },
            {
                name: 'Involvement and ownership',
                description: <div>
                    <p>Sharing control and responsibility with participants</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Participants</li>
                        <li>Facilitators</li>
                    </ul>
                </div>,
                when: <div><p>During co-creation process, interim and final reports</p></div>,
                protocols: <div><p>Questions about how participants felt as active co-creators with equal say in the process as the facilitators, and where their opinions and ideas were taken seriously and influence outputs. Also if they felt ownership pf the outputs being created.</p></div>,
            },
            {
                name: 'Relevance of the process for participants',
                description: <div>
                    <p>Working with participants needs, interests, and motivations</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Participants</li>
                        <li>Stakeholders</li>
                        <li>Facilitators</li>
                    </ul>
                </div>,
                when: <div><p>During co-creation process, interim and final reports</p></div>,
                protocols: <div>
                    <p>Questions to assess what motivated the participants to take part, how relevant they thought the process was to tackling their issues and addressing their needs. How much importance they gave to the co-creation process.</p>
                    <p><strong>Guiding questions.</strong></p>
                    <ul>
                        <li>What were the needs and interests that motivated participants to join and stay in the process?</li>
                        <li>To which extent and how did the co-creation process address these needs, interests and motivations?</li>
                        <li>How relevant, interesting and useful were the sessions and methods used?</li>
                        <li>Did the process have any relevance beyond the participating older adults?</li>
                    </ul>
                </div>
            },
            {
                name: 'Effectiveness of the process',
                description: <div>
                    <p>The effectiveness of methods and interventions with regard to the project goals</p>
                </div>,
                sources: <div>
                    <ul><li>Facilitators</li></ul>
                </div>,
                when: <div><p>During co-creation process, interim and final reports</p></div>,
                protocols: <div>
                    <p>Facilitators’ reflection on how effective they found the methods and co-creation activities in achieving objectives set out before each workshop. Should be based on reflection and action learning. Does the process  comply with ISO 9241-210 (Human-Centred Design for Interactive Systems)?</p>
                    <p><strong>Guiding questions.</strong></p>
                    <ul>
                        <li>To what extent did the co-creation process achieve the goals of the project? </li>
                        <li>To what extent did the co-creation insights inform the technical innovations? </li>
                        <li>How well did the co-creation process meet the value proposition?</li>
                        <li>Were all methods effective with regard to the process goals and was the process efficient? </li>
                        <li>Could the output have been reached with less input?</li>
                    </ul>
                </div>
            },
            {
                name: 'Participant\'s learning',
                description: <div>
                    <p>What participants learnt through taking part in the co-creation process</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Participants</li>
                        <li>Facilitators</li>
                    </ul>
                </div>,
                when: <div><p>During co-creation process, interim and final reports</p></div>,
                protocols: <div><p>Questions about what participants felt they learned by taking part in the co-creation workshops and the project.</p></div>
            },
            {
                name: 'Participant\'s feedback on output design',
                description: <div>
                    <p>Participants’ views on the outputs being created</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Participants</li>
                        <li>Facilitators</li>
                    </ul>
                </div>,
                when: <div><p>During co-creation process, interim and final reports</p></div>,
                protocols: <div><p>Questions about participants’ views on the outputs being created. Questions about usability, accessibility and style.</p></div>
            }
        ]
    },

    // Summative evaluation
    {
        evaluation: "Summative evaluation",
        introduction: <div>
            <p>
                Summative evaluations can be undertaken either at intervals or towards the end of co-creation activities. Summative evaluation aims at assessing the quality of the outputs, rather than the process, of a co-creation project. In contrast to formative evaluation, it is more outwardly directed – it does not address an internal audience of a project’s participants and stakeholders but intends to demonstrate that the outputs of the process are of a sufficient quality, to a (possibly only potential) external audience. Summative evaluations enable reflection and can input into periodic project reports.
            </p>
            <p>
                Regarding access to <strong>digital solutions</strong>, older adults can be placed on spectrums both of different degrees of ownership of, or access to mobile devices, and of skill and competences in using them. As potential and actual users, project participants (older adults themselves and/or intermediaries and other stakeholders) are experts in how to design the project outputs to be properly accessible to their intended beneficiaries.
            </p>
            <p>This is why the evaluative criteria for summative evaluation focus on three sorts of outputs/outcomes – apps, data, and the digital service – using the following five criteria.</p>
        </div>,
        methods: [
            MLABELS['INTERVIEWS'],
            MLABELS['FOCUS_GROUPS'],
            MLABELS['SURVEYS_AND_QUESTIONNAIRES'],
            MLABELS['USER_TESTING'],
            MLABELS['ACCESSIBILITY_TESTING'],
            MLABELS['FUNCTIONALITY_TESTING']
        ]
            .map(l => {
                const method = methods.find(m => m.label === l);
                return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
            }),
        relatedMaterials: [34, 35, 36],
        stages: [
            // {
            //     name: 'Facilitator\'s learning through the co-creation process',
            //     description: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
            //     sources: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
            //     when: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
            //     protocols: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>
            // },
            {
                name: 'Usability of the apps',
                description: <div>
                    <p>The usability of design and content of the app</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Stakeholders</li>
                        <li>Facilitators</li>
                        <li>Developers</li>
                        <li>Other older adults</li>
                    </ul>
                </div>,
                when: <div>
                    <p>Full user testing after the co-creation process</p>
                </div>,
                protocols: <div>
                    <p>Evaluating this criteria can involve participants, stakeholders, developers, and facilitators. User testing can establish if the co-created apps:</p>
                    <ul>
                        <li>are suitable to the task;</li>
                        <li>are self-descriptive;</li>
                        <li>are easy to understand;</li>
                        <li>are easy to learn;</li>
                        <li>are easy to control; and</li>
                        <li>conform with user expectations, being;
                            <ul>
                                <li>suitable for individualisation;</li>
                                <li>error tolerant;</li>
                                <li>easy to read regarding the interface elements (size and contrast; easy to use (regarding navigation); and working with accessibility functions (large text and displays, read-over).</li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        These criteria are taken from the process-oriented standard ISO 9241-110’s definitions of ‘usability’ as the “extent to which a product can be used by specified goals with effectiveness, efficiency and satisfaction in a specified context of use.” This standard has now been superceded by <a className="more-contrast" href="https://www.iso.org/standard/35733.html" target="_blank" rel="noopener noreferrer">ISO/IEC 25010:2011</a>, and by the 2018 standard <a className="more-contrast" href="https://www.iso.org/obp/ui/#iso:std:iso:9241:-11:ed-2:v1:en" target="_blank" rel="noopener noreferrer">ISO 9241-11</a> and all of these criteria, or others based on <a className="more-contrast" href="https://pdfs.semanticscholar.org/0869/ddf2b666e5d72878bb626073672ad32e4f67.pdf" target="_blank" rel="noopener noreferrer">them</a>, can be tested through standard <a className="more-contrast" href="https://jalt-publications.org/files/pdf-article/jalt2013_001.pdf" target="_blank" rel="noopener noreferrer">Likert</a> questionnaires given to users after testing.
                    </p>
                    <p><strong>Guiding questions.</strong></p>
                    <ul>
                        <li>Do the products/outputs comply to recognized Dialogue Principles standards (ISO 9421-110)?</li>
                        <li>Is the interface/content easy to use for older adults, intermediaries and service providers in terms of suitability, understandability, learnability, controllability, conformity to expectations, customizability and error tolerance?</li>
                    </ul>
                </div>
            },
            {
                name: 'Functionality of the apps',
                description: <div>
                    <p>Apps should be free of errors and safe to use. The functionality of elements and features of the app</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Developers</li>
                    </ul>
                </div>,
                when: <div><p>Full functionality testing after the co-creation process</p></div>,
                protocols: <div>
                    <p>More simple to assess, the apps under development can be constantly tested by the developers, and again in a summative manner, to ensure that: no errors occur caused by programming code or the unavailability of data; the apps work on different devices (desktop, tablet, cell phone); and there is a mechanism to maintain, update and retrieve up to date data.</p>
                    <p><strong>Guiding questions.</strong></p>
                    <ul>
                        <li>Does the app provide all the features that were required in the specification?</li>
                        <li>Are all the features working well on different devices (responsiveness)?</li>
                        <li>Are links to external data sources working?</li>
                        <li>Are there features for regular updates of data?</li>
                    </ul>
                </div>,
                methods: [
                    MLABELS['FUNCTIONALITY_TESTING']
                ]
                    .map(l => {
                        const method = methods.find(m => m.label === l);
                        return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                    }),
                relatedMaterials: [34]
            },
            {
                name: 'Accesibility of the apps',
                description: <div>
                    <p>Apps should be developed taking into consideration the target audience’s needs and be accessible to them</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Developers</li>
                    </ul>
                </div>,
                when: <div>
                    <p>Full accessibility testing after the co-creation process</p>
                </div>,
                protocols: <div>
                    <p>In order for the apps a project develops to be available to as many older people as possible, it needs to be accessible, and this should be assessed by the developers. Accessibility (in the digital sphere) is defined by European standard EN 301 549 <a className="more-contrast" href="https://www.etsi.org/deliver/etsi_en/301500_301599/301549/01.01.02_60/en_301549v010102p.pdf" target="_blank" rel="noopener noreferrer">"Accessibility requirements suitable for public procurement of ICT products and services in Europe"</a> which requires compliance with <a className="more-contrast" href="https://www.w3.org/TR/WCAG20/" target="_blank" rel="noopener noreferrer">WCAG2.0</a> at level AA. This can be done in tandem with using the German <a className="more-contrast" href="http://www.bitvtest.eu/bitv_test/intro/final.html" target="_blank" rel="noopener noreferrer">BITV-test</a>, and then reported using the <a className="more-contrast" href="https://www.w3.org/WAI/eval/report-tool" target="_blank" rel="noopener noreferrer">Web Accessibility Initiative (WAI) tool</a> and/or the <a className="more-contrast" href="https://www.ssa.gov/accessibility/andi/help/install.html" target="_blank" rel="noopener noreferrer">ANDI</a> browser add-on or bookmarklet. A <a className="more-contrast" href="https://webaim.org/standards/wcag/checklist" target="_blank" rel="noopener noreferrer">checklist</a> for WCAG2.0 provided by WebAim will help a project document compliance.</p>
                    <p><strong>Guiding question.</strong></p>
                    <ul>
                        <li>Are the design and content of the mobile apps developed accessible to older adults, intermediaries and service providers in terms of compliance to WCAG2.0 at level AA?</li>
                    </ul>
                </div>,
                methods: [
                    MLABELS['ACCESSIBILITY_TESTING'],
                ]
                    .map(l => {
                        const method = methods.find(m => m.label === l);
                        return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                    }),
                relatedMaterials: [35, 36]
            },
            {
                name: 'Availability of open data',
                description: <div>
                    <p>Quality of open data used in the project</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Stakeholders</li>
                        <li>Facilitators</li>
                        <li>Developers</li>
                    </ul>
                </div>,
                when: <div><p>During and after co-creation process</p></div>,
                protocols: <div>
                    <p>The apps that a project co-creates will not be not be of much use, and will not enable project outputs and outcomes to transform into impact, unless the open data they require is available. Checking the availability of open data can be done at interim stages to answer the following questions:</p>
                    <p>Is the data:</p>
                    <ul>
                        <li>Machine readable?</li>
                        <li>Available in bulk?</li>
                        <li>Provided on a timely and up to date basis?</li>
                        <li>In digital form?</li>
                        <li>Complete?</li>
                        <li>Consistent?</li>
                        <li>Openly licensed?</li>
                        <li>Publicly available</li>
                        <li>Available online?</li>
                    </ul>
                    <p>This can be followed by the recording of measures taken, and to be taken, to improve the availability and/or quality of data.</p>
                </div>
            },
            {
                name: 'Comprehensiveness of data',
                description: <div>
                    <p>Open data available is enough to provide the unique selling point (USP) of the field site</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Participants</li>
                        <li>Stakeholders</li>
                        <li>Facilitators</li>
                        <li>Developers</li>
                        <li>Other older adults</li>
                    </ul>
                </div>,
                when: <div>
                    <p>During and after co-creation process</p>
                </div>,
                protocols: <div>
                    <p>
                        Strongly linked to the criteria of availability, you can assess:
                    </p>
                    <ul>
                        <li>whether the open data available is enough to provide the unique selling point (USP) of the outputs that your project is co-creating;</li>
                        <li>if all the data that is necessary is available; and</li>
                        <li>where more sources of data are needed.</li>
                    </ul>
                    <p>
                        This is a task that participants, stakeholders, facilitators, developers, and other older adults can all engage in, throughout the co-creation activities; but also it should be assessed formally at interim stages. If the open data available is not comprehensive for the aims of the project, then decisions need to be made about purchasing data, or partnering with organisations that can make such data available.
                    </p>
                </div>
            },
            {
                name: 'Effectiveness of the service',
                description: <div>
                    <p>How the outputs created helped deliver each project’s USP</p>
                </div>,
                sources: <div>
                    <ul>
                        <li>Participants</li>
                        <li>Stakeholders</li>
                        <li>Facilitators</li>
                        <li>Developers</li>
                        <li>Other older adults</li>
                    </ul>
                </div>,
                when: <div><p>After co-creation process</p></div>,
                protocols: <div>
                    <p>The ‘service’ here means the online service in which data and apps are embedded, and that is offered by a service provider that maintains it. A co-creation project periodically or in conclusion evaluates whether the service provides value for older adults, intermediaries and service providers, and the relevant governmental actors, and furthermore that it is suitable to facilitate broader uptake (the desired outcome of your project).</p>
                    <p>This evaluation thus assesses whether the project’s outputs help deliver your project’s value proposition, and can ask if the service developed addresses the needs identified and established by the co-creation process. For example, does the app provide the right information/service to the users? This can be tested subjectively through user satisfaction surveys.</p>
                    <p>Questions to assess if the service developed by the apps is addressing the needs established by the co-creation process. Does the app provide the right information/service to the users? Does the app comply with IS_ 9241-11 (Usability, Definition and Concepts)?</p>
                </div>
            }
        ]
    },

    // Creating pathways of impact
    // {
    //     evaluation: "Creating pathways of impact",
    //     stages: [
    //         {
    //             name: 'Use uptake',
    //             criteria: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             sources: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             when: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             protocols: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             methods: [{ name: 'Meetings' },
    //             { name: 'Interviews', id: 4 },
    //             { name: 'Focus groups', id: 3 },
    //             { name: 'Survey', id: 8 },
    //             { name: 'Information events' },
    //             { name: 'Cooperation agreements' }],
    //             relatedMaterials: [1, 2, 3]
    //         },
    //         {
    //             name: 'Sustainability',
    //             criteria: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             sources: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             when: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             protocols: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             methods: [{ name: 'Meetings' },
    //             { name: 'Interviews', id: 4 },
    //             { name: 'Focus groups', id: 3 },
    //             { name: 'Survey', id: 8 },
    //             { name: 'Information events' },
    //             { name: 'Cooperation agreements' }],
    //             relatedMaterials: [1, 2, 3]
    //         },
    //         {
    //             name: 'Impact of process for participants',
    //             criteria: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             sources: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             when: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             protocols: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             methods: [{ name: 'Meetings' },
    //             { name: 'Interviews', id: 4 },
    //             { name: 'Focus groups', id: 3 },
    //             { name: 'Survey', id: 8 },
    //             { name: 'Information events' },
    //             { name: 'Cooperation agreements' }],
    //             relatedMaterials: [1, 2, 3]
    //         },
    //         {
    //             name: 'Impact of outputs for the field site',
    //             criteria: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             sources: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             when: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             protocols: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             methods: [{ name: 'Meetings' },
    //             { name: 'Interviews', id: 4 },
    //             { name: 'Focus groups', id: 3 },
    //             { name: 'Survey', id: 8 },
    //             { name: 'Information events' },
    //             { name: 'Cooperation agreements' }],
    //             relatedMaterials: [1, 2, 3]
    //         },
    //         {
    //             name: 'Impact of Mobile Age Project',
    //             criteria: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             sources: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             when: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             protocols: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat est vitae mauris ultrices, ac pretium ante luctus. Nulla sed consectetur purus, vitae pellentesque nisl. Integer molestie, urna sit amet mattis tristique, sem leo sagittis dui, eget ornare ante sem vitae enim.</p>,
    //             methods: [{ name: 'Meetings' },
    //             { name: 'Interviews', id: 4 },
    //             { name: 'Focus groups', id: 3 },
    //             { name: 'Survey', id: 8 },
    //             { name: 'Information events' },
    //             { name: 'Cooperation agreements' }],
    //             relatedMaterials: [1, 2, 3]
    //         }
    //     ]
    // }
]

export default evaluationFramework;
