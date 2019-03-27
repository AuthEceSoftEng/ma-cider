import React from 'react';
import { materialsArray } from '../materials/materials';
import {
    METHODS_LABELS as LABELS,
    CO_CREATION_PROCESS_LABELS as CLABELS,
    CASE_STUDIES_LABELS as SLABELS
} from '../labels/labels'
import { flattenArray } from '../../../../utilities/helpers'

export const methods = [
    {
        id: 0,
        name: 'Content Creation Workshop',
        label: LABELS['CONTENT_CREATION_WORKSHOP'],
        tags: [
            { tag: 'stream', labels: [CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
        ],
        description: <div><p>In content-creation workshops participants and facilitators produce digital content and integrate it into the service. This might be a collection of information from different sources or the creation of content such as text, pictures or videos. </p></div>,
        purpose: <div><p>The objective is to create content and/or data for the service.</p></div>,
        task: <div><p>The facilitators need to have an idea on what kind of content is needed and give the instruction. When working with digital technologies such as tablets and related apps, the main task of the researcher is to explain and support the use of these technologies. </p></div>,
        useCases: <div>
            <p>In the case of <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">co-creating a digital walking guide</a>, we ran a series of eleven content creation workshops. These content creation workshops were supported by accompanying tablet support groups for those older adults who were not familiar with digital technologies. In those workshops, participants described walks according to the attributes/templates defined under the service concept.  Participants had access to a tailor-made back-end in order to provide these descriptions and information directly to the system. A content management system (CMS) handled the data co-creation of the participants. CMS “Kirby”1 was chosen. Kirby is very lightweight, user friendly and highly flexible. It works without an external database and stores all data in the file system, so the system requirements are quite low.2</p>
            <p>A location database was manually initialised with the data provided by the printed “Stadtteilplan für ältere Menschen – Hemelingen” and then maintained and improved by the participants of the co-creation workshops. In addition, participants produced short videos about the walks in order to raise interest in the walks. Originally, we had thought that the information gathered on the walks and from participants could easily be used for video and audio clips associated to each walk. However, participants found it difficult to do so from a user-perspective. In order to enable participants to shift their perspective from reporting their own experience to creating motivating videos that make other people feel like wanting to experience the walks, we recognized the need to develop scripts for multimedia screenplays, storylines of what the highlights of the walks are, and a corresponding video sequence and  comments on the voice track. This did not only require a new conceptual perspective but also different software tools for slide show creation. We used a video editing app on the tablets.  Most videos are slideshows of photographs and include a spoken text by participants. Not all participants felt comfortable and competent to write. Others did not feel competent to create slide shows on the tablets. Here the different participants with their respective skills could take different roles and complete different tasks according to their competencies and interests. This was considered a more inclusive practice. For those parts of the descriptions, for which we did not have written text, we used transcripts of the videos. </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['CONTENT_CREATION_WORKSHOP']))).map(m => m.id),
        learnMore: null
    },
    {
        id: 1,
        name: 'Cultural Probes',
        label: LABELS['CULTURAL_PROBES'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
        ],
        description: <div><p>Cultural Probes consist of tools including descriptive and exploratory tasks that are (typically) based on self-reporting. These are handed over to the participants. Participants collect data on themselves, their lives and everyday culture. Briefing and follow-up interviews are conducted to prepare and accompany the process and a de-briefing session to supplement, validate and explore the data further.</p></div>,
        purpose: <div><p>Cultural probes are used to collect data about prospective users and stakeholders and their daily contexts, sensitizing the participants to observe, reflect upon and report their experiences, stimulate imagination of the co-creators.</p></div>,
        task: <div><p>Be creative! Provide proper tools, brief the participants and organize follow-up interviews</p></div>,
        useCases: <div>
            <p>In MobileAge we used probes in two case studies in order to understand the everyday practices and contexts of the future users of our services in order to develop a service concept that responds to their needs and that relates to their every day practices. Depending on the problem focus different foci were chosen. In the case of <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">co-creating a digital neighbourhood guide</a>, we wanted to understand the socio-spatial networks of our participants. In the case of <a href="guidebook/case-studies/southlakeland" target="_blank" rel="noopener noreferrer">co-creating a social connectedness app</a>, we wanted to learn something about social activities of our target group.  </p>
            <p>When using cultural probes for the <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">co-creation of a digital neighbourhood guide</a> we learned that besides the data collection, the materials helped to establish a trusting relationship with the participants. They helped to convey the participants that their knowledge of the district and their experience of becoming older was of central value to us. What was particularly helpful with probes throughout the process was their ability to prompt participants to reflect about their everyday life. In subsequent interviews and focus groups, participants were much better prepared to give an account about for example their mobility and socio-spatial inclusion within the district. Cultural probes sensitised participants about certain aspects of their everyday practices and were hence helpful in identifying needs and resources.</p>
            <p>When <a href="guidebook/case-studies/southlakeland" target="_blank" rel="noopener noreferrer">co-creating a social connectedness app</a> the cultural probes provided better understanding of everyday living of older citizens and their challenges in attaining what they see as ideal, e.g. activities in a week or events they wish to attend or services they want to access. This gap between the actual and the ideal has revealed potential avenues for researchers for designing technologies that can make access to e.g. events easier. Probes also demonstrated technological possibilities that have dispelled fears about the complicated nature of technology amongst our participants. </p>
            <p>In these use cases, cultural probes were useful for understanding a well-defined aspect of our participants’ lives. However, beyond the specific problem focus of a particular group they are not suited to generate general results. Furthermore, the analysis poses a challenge, since one cannot derive concrete requirements from them. Rather they sensitize researchers or designers to develop service concepts that relate to the everyday life of the target audience. We recommend to conduct interviews with participants in order to understand and reflect the probes. In addition, it is recommended to plan sufficient resources for the development of probes (and possibly a first trial period before handing them out to participants). </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['CULTURAL_PROBES']))).map(m => m.id),
        learnMore: <div>
            <p>Boehner, K., Gaver, B., & Boucher, A. (2012). Probes. In C. Lury & N. Wakeford (Eds.), Inventive methods: the happening of the social (pp. 185–201). London: Routledge.</p>
            <p>Boehner, K., Vertesi, J., Sengers, P., & Dourish, P. (2007). How HCI Interprets the Probes. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (pp. 1077–1086). New York, NY, USA: ACM. <a href="https://doi.org/10.1145/1240624.1240789" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/1240624.1240789</a> </p>
            <p>Gaver, B., Dunne, T., & Pacenti, E. (1999). Design: Cultural Probes. Interactions, 6(1), 21–29. <a href="https://doi.org/10.1145/291224.291235" target="_blank" rel="noopener noreferrer">https://doi.org/10.1145/291224.291235</a></p>
            <p>Jarke, J. & Gerhard, U. (2018): Using Probes for Sharing (Tacit) Knowing in Participatory Design: Facilitating Perspective Making and Perspective Taking in: i-com, 17(2), 137-152. <a href="https://doi.org/10.1515/icom-2018-0014" target="_blank" rel="noopener noreferrer">https://doi.org/10.1515/icom-2018-0014</a></p>
            <p>Mattelmäki, T. (2005). Applying probes–from inspirational notes to collaborative insights. CoDesign, 1(2), 83–102.</p>
            <p>Mattelmäki, T. (2006). Design probes. Aalto University. Retrieved from <a href="https://aaltodoc.aalto.fi:443/handle/123456789/11829" target="_blank" rel="noopener noreferrer">https://aaltodoc.aalto.fi:443/handle/123456789/11829</a> </p>
            <p>Further links:<br />
                <a href="https://infodesign.com.au/usabilityresources/culturalprobes/" target="_blank" rel="noopener noreferrer">https://infodesign.com.au/usabilityresources/culturalprobes/</a>
                <br />
                <a href="http://designresearchtechniques.com/casestudies/cultural-probes/" target="_blank" rel="noopener noreferrer">http://designresearchtechniques.com/casestudies/cultural-probes/</a>
            </p>
        </div>
    },
    {
        id: 2,
        name: 'Data Tables',
        label: LABELS['DATA_TABLES'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
        ],
        description: <div><p>Data tables are templates displaying the data structure of the content of an app. In particular they are useful when data is co-created together with participants. For each object to be described, a series of attributes need to be defined. The data table consists of a matrix with a line for each object and several columns for the different attributes. Initially the co-creation participants insert all available information in the tables (e.g. from existing databases and printed material). Where details are missing and cells are empty, the participants subsequently create data by researching the missing information. Data tables can be used in paper versions or in form of digital data bases.</p></div>,
        purpose: <div><p>To complete the data tables and thereby collect, complement, validate and/or quality check data.</p></div>,
        task: <div><p>Create a data table (paper or digital) by transferring the jointly defined objects and attributes in a template and thereby standardising the data. Identify existing data sources, procure and enter them in the data table. </p></div>,
        useCases: <div>
            <p>
                In the case study <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">co-creating a digital neighbourhood guide</a> we started by selecting categories of objects to be displayed on a map as well as relevant attributes for each of these categories. According to the selection of categories and attributes, we decided to differentiate between two main kinds of objects, with differing attributes:
            </p>
            <ul>
                <li><strong>Nice places and walks</strong>, with descriptions about what was considered to be particularly nice, and information about the availability of benches and toilets nearby as well as supplementary information on possibilities for exercising and BBQ.</li>
                <li><strong>Informal meeting facilities, institutions and services</strong> in the field of <strong>culture, consultancy and advice as well as sports</strong> with data on the individual services and facilities, events, contact person etc.</li>
            </ul>
            <p>
                For each object, we created a matrix with a line for each object and several columns for the different attributes. These <strong>two data tables became the central working tool for the data collection and co-creation process</strong> with two objectives:
            </p>
            <ul>
                <li><strong>Completeness,</strong> e.g. identify all the relevant objects in Osterholz for each category.</li>
                <li><strong>Richness of relevant details</strong>, e.g. to collect data on as many aspects as possible for each object. </li>
            </ul>
            <p>
                Altogether, 19 nice places and walks and more than 70 institutions and services were identified, but there was little precision on attributes. We conducted 12 focus groups with knowledgeable older adults where the participants named places they considered to be nice and places where they meet other people as well as institutions offering different kinds of services relevant to them. Important materials to facilitate the focus groups were older citizen neighbourhood guides of other districts, a map of the neighbourhood to be discussed as well as a template table in which information about the neighbourhood is noted. In meetings with local stakeholders we then presented our data tables and received input on specific categories/objects. This complementary task was important as it was relatively easy to get people to name nice places and give a few keywords to describe it. It was however, harder to get information on a pre-defined set of attributes, and even more difficult to get this completed for all the points. A major challenge was to find people who could take over editorial tasks and write clear and relevant texts based on the initial sets of keywords collected through the focus group (as described above). Yet this was important for future users of our Mobile Age neighbourhood guide. Finally, the largely completed tables were transformed into digital data tables that then served as data base for the app.
            </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['DATA_TABLES']))).map(m => m.id),
        learnMore: null
    },
    {
        id: 3,
        name: 'Focus Groups',
        label: LABELS['FOCUS_GROUPS'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['HEALTH_APP'], SLABELS['AGE_FRIENDLY_ROUTES']] },
        ],
        description: <div><p>A focus group is a focused discussion with several participants led by a moderator initiated by one initial opening question or through a set of questions on a specific topic. The interaction of the participants is important, and insights come from the debates and negotiation on their views and opinions. Focus groups can be newly created groups or pre-existing groups consisting of 6-12 persons who share a common interest.</p></div>,
        purpose: <div><p>To collect data about prospective services, users and stakeholder, co-creating data, identify needs, visions, expectations, (design-) problems through stimulating statements through the interaction in the group.</p></div>,
        task: <div><p>Prepare a guideline with questions, create a natural and comfortable environment, moderate the discussion, audio record the discussion, if necessary transcribe the audiorecords.</p></div>,
        useCases: <div>
            <p>
                In MobileAge, focus groups were conducted either with older adults or with local stakeholders. Focus groups allowed us to gain a great amount of insights, especially when its findings were complemented and compared with individual interviews. We used focus groups in all case studies in order to identify needs and priorities for older adults and allowed them to shape the proposition for the service concept and apps. In the case of <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">co-creating a digital neighbourhood guide</a> we conducted focus groups in order to collect data for the service.
            </p>
            <p>One challenge when using focus groups is to steer the discussion. We experienced that in particular older adults when asked about their district or their neighbourhood tend to digress from the questions. Furthermore, a general challenge is that often few participants dominate the discussion and cautious group members might not get heard.</p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['FOCUS_GROUPS']))).map(m => m.id),
        learnMore: <div>
            <p>Kamberelis, G., & Dimitriadis, G. (2013). Focus Groups - From structured interviews to collective conversations. London: Routledge.</p>
            <p>
                Rodriguez, K. L., Schwartz, J. L., Lahman, M. K. E., & Geist, M. R. (2011). Culturally Responsive Focus Groups: Reframing the Research Experience to Focus on Participants. International Journal of Qualitative Methods, 10(4), 400–417.
            </p>
            <p>
                Stahl, B., Chiarini Tremblay, M., & LeRouge, C. M. (2011). Focus groups and critical social IS research: how the choice of method can promote emancipation of respondents and researchers. European Journal of Information Systems, 18(2), 378 – 394.
            </p>
        </div>
    },
    {
        id: 4,
        name: 'Interviews',
        label: LABELS['INTERVIEWS'],
        tags: [
            { tag: 'stream', labels: [CLABELS['ENGAGING_CO_CREATORS'], CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['HEALTH_APP'], SLABELS['AGE_FRIENDLY_ROUTES']] },
        ],
        description: <div><p>An interview is a partly structured conversation between an interviewer and a respondent, where the researcher guides the conversation according to her or his question but at the same time is open to unexpected topics that might be of interest. The guideline might be based on the cultural probes that the respondent has filled out.</p></div>,
        purpose: <div><p>To collect data about prospective services, users and other stakeholders, co-creating knowledge, identify needs, visions, expectations, (design-) problems through a confidential conversation between researcher and respondent. Often personas are based on interviews.</p></div>,
        task: <div><p>Prepare guidelines and create a natural and comfortable environment, audio record the interview, if necessary transcribe the audiorecords.</p></div>,
        useCases: <div>
            <p>Interviews were conducted in all case studies mostly with intermediaries, but also with older adults (e.g. in  the case study “co-creating a digital neighbourhood guide”. Interviews were very useful in understanding the main concerns and needs of the participants early in the co-creation process. Interviews also provided descriptions of participants’ practices on using technology, services and attending social activities.</p>
            <p>In the case of <a href="guidebook/case-studies/southlakeland" target="_blank" rel="noopener noreferrer">co-creating a social connectedness app</a> interviews were conducted with experts (in this case local government and an NGO working with older adults) in order to understand the issue of idependent living and to define the problem focus. We provided a guideline that covered the aspects we were interested in. Leaving the conversation open to unexpected things we did not expect, allowed us refine our problem beyond the things that we knew already. This helped us to detect “social isolation” as the main issue of older adults in the (rural) area where the case study was conducted. For the co-creation of a digital neighbourhood guide we used interviews to understand the cultural probes. We conducted single interview with each participant that had filled out the probes. The guidelines were prepared on the basis of the filled out material and hence followed the same structure but differed with their focus. The interviews allowed us to round up the knowledge gained through the probes and they gave the participants the opportunity to explain the content of the probes as well as to reflect on them and thereby help the researchers to analyse and understand their content. Furthermore, we used interviews in different use cases to evaluate the co-created service as well as the process. Intermediaries were asked to give an assessment of the process and the service.  </p>
            <p>Interviews turned out to be an important method for co-creation. However,, the focus has to be clear; we found that if we tried to leave the conversation very open the participants did not see its purpose and were reluctant to answer. If the purpose of the interview was clear, most of them replied willingly. However, people are very different and not everyone likes to talk a lot. Experts asked to talk about their work are often much more likely to talk freely than a private person who is asked about his or her personal life is. In any case, the purpose of the interview and the topics to be discussed should be explained beforehand and (written) consent is required prior to the interview. </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['INTERVIEWS']))).map(m => m.id),
        learnMore: <div>
            <p>Bogner, A., Littig, B., & Menz, W. (Eds.). (2009). Interviewing Experts. London: Palgrave Macmillan.</p>
            <p>Flick, U. (2014). An introduction to qualitative research. London: Sage.</p>
            <p>Myers, M. D., & Newman, M. (2007). The qualitative interview in IS research: Examining the craft. Information and Organization, 17(1), 2–26. <a href="" target="_blank" rel="noopener noreferrer">http://doi.org/10.1016/j.infoandorg.2006.11.001</a></p>
            <p>Thorpe, R., & Holt, R. (Eds.). (2008). The Sage dictionary of qualitative management research. London: SAGE.</p>
        </div>
    },
    {
        id: 5,
        name: 'Participant observation',
        label: LABELS['PARTICIPANT_OBSERVATION'],
        tags: [
            { tag: 'stream', labels: [CLABELS['ENGAGING_CO_CREATORS'], CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE']] },
        ],
        description: <div><p>An observation means to carefully observe peoples activities and interaction. The observations are recorded (mostly by writing them down by hand while or directly after the observation) and analysed. Participant observation involves active engagement in activities in contrast to observation where researchers simply observe without interacting with people.</p></div>,
        purpose: <div><p>To collect information on people’s activities and interactions and thereby get insights in the behaviour of people and their interactions in a group or with a technology. Observations can also be used to learn about collaborative design activities, to learn about resources and obstacles for participatory design. In contrast to interviews observations are very suitable to detect unconscious patterns of behaviour that cannot be verbalized easily. </p></div>,
        task: <div><p>In participant observation the task is to observe attentively while being involved in the activities and interactions and to take notes while or after the activities.</p></div>,
        useCases: <div>
            <p>In MobileAge we used observation for different purposes. In the case study <a href="guidebook/case-studies/southlakeland" target="_blank" rel="noopener noreferrer">co-creating a social connectedness app</a> facilitators took part in events frequented by older adults at the beginning of the co-creation process. Those were opportunities to hold informal chats, but also to observe who was taking part, the details about the settings and how older adults interacted amongst themselves for the events. In phase two, this was used as a strategy to identify intermediaries that were volunteering/working with older adults and engage them in the research. This method was furthermore used in workshops, where participants were given tasks and facilitators observe how they respond to or complete those tasks. Information is gained through their responses as well as their performance on the tasks. This type of method was used twice on the co-creation workshops. First when we asked the participants to perform searches using different websites and later when we asked them to test one of the versions of the first working, but not yet complete, versions of the social connectedness apps.</p>
            <p>In the case of <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">co-creating a digital neighbourhood guide</a> and a walking guide we used observations for the evaluation of our application. We conducted user tests, in the first case inside on PCs and tablets and in the second case outside while walking. Observing participants in using the co-created app allowed us to detect use problems and bugs.</p>
            <p>The challenge of this method is that the researcher is part of the object of study and influences the situation. Participants may act differently than they would have without the presence of the observers.  </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['PARTICIPANT_OBSERVATION']))).map(m => m.id),
        learnMore: <div>
            <p>Adler, P. A., & Adler, P. (1994). Observation techniques. In Handbook of qualitative research (pp. 377–392). Thousand Oaks, CA: Sage.</p>
            <p>DeWalt, K. M., & DeWalt, B. R. (2002). Participant observation: a guide for fieldworkers. Walnut Creek, CA: Rowman Altamira Press.</p>
            <p>Tang, J. C., & Leifer, L. J. (1991). An Observational Methodology for Studying Group Design  Activity. Research in Engineering Design, 2(4), 209–219.</p>
        </div>
    },
    {
        id: 6,
        name: 'Personas',
        label: LABELS['PERSONAS'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
        ],
        description: <div>
            <p>A persona is a representation of a fictitious user that includes a concise summary of characteristics of the user, their experience, goals and tasks, pain points, and environmental conditions. Personas describe the target users of a tool, site, product or application, giving a clear picture of how they are likely to use the system, and what they expect from it. Personas are user models developed on the basis of qualitative research data and/or the expertise of involved stakeholders. Personas differ may by:</p>
            <ul>
                <li>practical and personal goals</li>
                <li>activities</li>
                <li>settings</li>
                <li>skills, knowledge, experience</li>
            </ul>
        </div>,
        purpose: <div><p>A persona allows designers and developers to communicate the needs, wants, expectations etc. of wider user groups, without involving them directly in the design process. They can answer questions such as: For whom do we develop? Who has to be able to deal with it? What can we take for granted? Personas should become vividly imaginable. Then its not "the user," but: Jim and Rosie! By drawing attention to potential users the creation of a common understanding of the users and typical everyday situations is supported and designers are engaged to implement this understanding in their design decisions.</p></div>,
        task: <div><p>Personas simplify, they are often stereotypical; it is hence important that they are credible/anchored in reality. This means that the designers have to identify significant and meaningful patterns in user characteristics, contexts and behaviour based on research data. </p></div>,
        useCases: <div>
            <p>In the case of <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">co-creating a digital neighbourhood guide</a> personas helped to anticipate future users and to tease out the defining characteristics (socio-economic, social relations, general health & mobility, attitude towards technology) of older adults. Personas were developed based on the participants’ characteristics and complemented with statistical information. They enabled participants to discuss matters of concern not only from their perspectives but also by taking other people’s perspective into account. In particular, with respect to sensitive aspects such as financial constraints or limited mobility, personas helped participants to articulate needs without feeling intimidated to speak about themselves. The personas were subsequently used to develop use case scenarios and facilitated communication in the concept developing, co-design and evaluation stages. Personas and scenarios also served as a red thread throughout the co-creation process, connecting different activities (such as identifying information needs to, map design).</p>
            <p>In the case of <a href="guidebook/case-studies/southlakeland" target="_blank" rel="noopener noreferrer">co-creating a social connectedness app</a>, we created our personas mainly on three representative categories based on our participants’ use of technology, namely tech-savvy, non-user of technology and intermediary-assisted user. Our personas have helped us make important decisions in the design of our app. Particularly in instances where we cannot reach out to the relevant group of older citizens (e.g. in a rural setting cut off by difficult transport access) personas help us by understanding their needs revealed to us by their friends and acquaintances through interviews or probes (e.g. <a href="guidebook/materials?downloadName=Understanding social connectedness" target="_blank" rel="noopener noreferrer">calendar exercise</a>). </p>
            <p>We found that it was important to develop and/or discuss the personas with members of the group that they represent. If they are just based on what researchers or designers assume about their target group, they are likely to represent generalisations and stereotypes that do not represent real people at all. </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['PERSONAS']))).map(m => m.id),
        learnMore: <div>
            <p>Brandt, E., Binder, T., Sanders, E. (2013): Tools and techniques: ways to engage telling, making and enacting. In: Robertson, T.; Simonsen, J. (Hrsg.): Routledge International Handbook of Participatory Design, London & New York: Routledge, S. 145-181</p>
            <p>Cooper, A. (1999). The Inmates Are Running the Asylum. Indianapolis, IN, USA: Macmillan Publishing Co.</p>
            <p>Cooper, A., Reimann, R., & Cronin, D. (2007). About Face 3: The Essentials of Interaction Design. Indianapolis: Wiley Publishing</p>
        </div>
    },
    {
        id: 7,
        name: 'Scenarios',
        label: LABELS['SCENARIOS'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
        ],
        description: <div>
            <p>Scenarios are textual stories that exemplify a certain use case for the service. Scenarios can also be developed on the basis of user interviews and might represent a typical everyday situation where the service is used. Scenarios need to be concrete and are described informal and open. They illuminate special cases and individual situations. They do not make general statements. Scenarios may include information on actors (e.g. personas); background information on actors; environment, situation, objects, tools; goals / intentions of the actors; processes of actions and events - in the form of texts, images, sketches, storyboards, video sequences.</p>
            <p>There are different types of scenarios: problem scenarios, activity scenarios, information design scenarios and interaction-design scenarios. </p>
        </div>,
        purpose: <div><p>To exemplify situation where the software to be developed is used in order to develop easy-to-use software.</p></div>,
        task: <div><p>Developers formulate scenarios based on surveys or interviews with the target users. This is how they describe their acquired understanding. The scenarios can be further developed in discussions with the target users/participants.</p></div>,
        useCases: <div><p>In the case of <a href="guidebook/case-studies/bremen-osterholz" target="_blank" rel="noopener noreferrer">co-creating a digital neighbourhood guide</a> we developed scenarios around the personas in order to illustrate possible use cases and thereby to facilitate participants design decisions. We used the scenarios during the paper prototyping; the participants were asked to cut and glue buttons, icons and the like on paper mock-ups. Thereby they the screens in a way that it is best useable in the described use scenarios. </p></div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['SCENARIOS']))).map(m => m.id),
        learnMore: <div>
            <p>Alexander, I. & Maiden, N (2004): Scenarios, Stories, Use Cases. Through the Systems Development Life-Cycle. Wiley, Chichester, England.</p>
            <p>McGraw K. & Harbison, K (1997): User-Centered Requirements: The Scenario based Engineering Process. Lawrence Erlbaum, Mahwah, N.J., 1997.</p>
            <p>Rosson M.B. & Carroll, J.M. (2002): Scenario-Based Design. In: J. Jacko, A. Sears (Eds.): The Human-Computer Interaction Handbook: Fundamentals, Evolving Technologies and Emerging Applications. Erlbaum, (pp. 1032-1050).</p>
        </div>
    },
    {
        id: 8,
        name: 'Surveys and Questionnaires',
        label: LABELS['SURVEYS_AND_QUESTIONNAIRES'],
        tags: [
            { tag: 'stream', labels: [CLABELS['ENGAGING_CO_CREATORS'], CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['HEALTH_APP'], SLABELS['AGE_FRIENDLY_ROUTES']] },
        ],
        description: <div><p>Questionnaires are a standardized tool to conduct surveys. Participants are provided with a set of (mostly closed) questions. In contrast to interviews, they are a descriptive method with which you can measure well-defined indicators such as socio-demographic characteristics of a certain group. They can be paper based or available online. </p></div>,
        purpose: <div><p>To gather standardised (and limited amounts of qualitative) data from participants. You cannot explore or explain unexpected things with questionnaires but you can collect data on a larger number of people.</p></div>,
        task: <div><p>To define indicators for the questions you want to answer and to translate your interest in a set of concrete standardized questions. Furthermore, you need to analyze your data e.g. by using excel sheets to detect frequencies or are specialized software.</p></div>,
        useCases: <div>
            <p>Surveys were used in all case studies. As method, it was useful in collecting data such as demographics quickly during interventions, and leaving more time to focus on discussing  other issues in-depth. One of the shortcomings of this method when collecting qualitative data is the lack of follow up questions to elucidate any doubts about meaning. In MobileAge, surveys and questionnaire were used in conjunction with discussions, interviews and focus groups.</p>
            <p>We also used questionnaires to confirm insights from interviews with a larger number of people. Furthermore, we used standardized questionnaires in order to evaluate the outcome and impact of our co-creation processes. We asked participants on feedback after the test use and we asked intermediaries about the relevance of the outcome.</p>
            <p>One challenge was that in some cases the questionnaires were perceived as unreasonable task by the older adults participating. In particular, the provision of personal information was sometimes met with discontent by older participants. </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['SURVEYS_AND_QUESTIONNAIRES']))).map(m => m.id),
        learnMore: null
    },
    {
        id: 9,
        name: 'Prototyping (paper and digital)',
        label: LABELS['PROTOTYPING_PAPER_AND_DIGITAL'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
        ],
        description: <div>
            <p>
                Creating user interface prototypes either digitally or on paper by drawing or by combining given printed elements.
            </p>
        </div>,
        purpose: <div><p>Creating user interface prototypes either digitally or on paper by drawing or by combining given printed elements. </p></div>,
        task: <div><p>Prepare materials such as paper, pencils or templates. Consult on common usability concepts.</p></div>,
        useCases: <div><p>Once a common vision of the functionalities exists the screens of the applications must be specified. The developers make suggestions based on common user experience design patterns for global functionalities such as navigation, which are discussed in terms of applicability, sufficiency and acceptance. The co-creators decide the way to go. The different screens identified are specified in detail utilizing the paper-based or digital user interface components.</p></div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['PROTOTYPING_PAPER_AND_DIGITAL']))).map(m => m.id),
        learnMore: null
    },
    {
        id: 10,
        name: 'Walking Workshops',
        label: LABELS['WALKING_WORKSHOPS'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['AGE_FRIENDLY_ROUTES']] },
        ],
        description: <div>
            <p>Walking workshops are joint walks of facilitators and participants where the participants are given the opportunity to actively conceive and jointly reflect on the physical environment. It furthermore stimulates talks around the environment as well as it stimulates to talks about stories and memories. Participants are given a certain task on the walks (e.g. what are interesting places on the route, name then and tell us what is interesting about them). Records of the walks might help to refine a service concept or to gather data and/or content. </p>
        </div>,
        purpose: <div><p>The purpose of walking workshops can be to refine a service concept, e.g. if the problem focus is related to the physical environment walking workshops can help to define or refine the service concept. Furthermore walking workshops can be used in order to co-create content and/or data.</p></div>,
        task: <div><p>Define an objective and related tasks, define a route (e.g. together with stakeholders it should respond to their interests and needs), prepare materials (e.g. questionnaires), organize recording tools, guide the walk</p></div>,
        useCases: <div>
            <p>
                We used walking workshops in two of the case studies. In the case of <a href="guidebook/case-studies/zaragoza" target="_blank" rel="noopener noreferrer">co-creating age-friendly routes</a> the walking workshops were used to define age-friendly routes, routes which are accessible to older adults. To do so, older adults had to walk those routes and suggest improvements. Zaragoza used their already existing collaborative map service to digitise the information. The participants defined two routes, which were important in their district (one long and one short) and what kinds of elements need to be analysed. During the walks, the group observed the different elements in order to improve the route. The walks were carried out in groups, although the observation was individual. The participants took photographs and coordinates (GPS), they observed, analysed and noted ideas for improvements. In this way, whenever a member of the group detected a possible improvement proposal, the group evaluated ​​it, and in cases where it was considered that their discussion and subsequent inclusion might be interesting as a proposal for improvement, a photograph and location references were taken. From the collected information improvements were discussed, agreed on and proposed in a follow-up group discussion.
            </p>
            <p>
                For <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">co-creating a digital walking guide</a> our aim was firstly to define the data model for describing the walks (what do people want to know about a walk?). Then we used this method to gather data and create content on the defined attributes. We handed out questionnaires, used audio recordings and cameras. The walking workshops in this case were very helpful for the content co-creation (e.g. photos, descriptions, videos) and the identification of relevant data. However, since people are enjoying themselves and talking, the systematic data collection did not work well.
            </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['WALKING_WORKSHOPS']))).map(m => m.id),
        learnMore: <div>
            <p>Kanstrup, A. M., Bertelsen, P., & Østergaard Madsen, J. (2014). Design with the feet: walking methods and participatory design. In PDC ’14 Proceedings of the 13th Participatory Design Conference: Research Papers - Volume 1 (Vol. 1, pp. 51–60). New York, NY, USA: ACM.</p>
            <p>Wieringa, M., & van Es, K. (2018). Walking as method in data studies. Working Paper. Retrieved from https://datafiedsociety.nl/working-paper-walking-as-method-in-data-studies/</p>
        </div>
    },
    {
        id: 11,
        name: 'Kanban-Board',
        label: LABELS['KANBAN_BOARD'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE']] },
        ],
        description: <div>
            <p>A Kanban-Board is a method to visualize the workflow within agile software development. It consists of cards containing tasks and their estimated effort which are pinned on swimlanes to show their status (usually: backlog, planned, work in progress, testing, done).
            </p>
        </div>,
        purpose: <div>
            <p>To provide a common understanding of tasks during development by visualizing them on the board, to limit tasks worked on concurrently and to measure and manage workflow to make informed decisions and visualise consequences. Thereby support transparency in agile development to ensure that all relevant stakeholders are at all times informed about the status of the work and resource allocation.</p>
        </div>,
        task: <div>
            <p>
                Prepare the board, either on paper, a whiteboard or digitally. Take care on the size needed for proper readability. Maintain it thoroughly during co-creation meetings and development cycles and provide realistic time effort estimations.
            </p>
        </div>,
        useCases: <div>
            <p>
                Any software development can and should be be broken down to tasks. The tasks collected during requirement gathering start in the backlog of the board and proceed through the states “Work in progress”, “Ready for Review” and “Done”. If the review of a task is not successful, it may also get back into “Work in progress” to be refined and reviewed again.
            <br />
                In the co-creation meetings it is agreed on the functionalities to be next developed and the corresponding tasks are put to “Work in progress”. The developers implement and test the functionality internally and set it to “Ready for review”, if the tests succeed and the functionality meets the specification.
            <br />
                In the beginning of the next co-creation meeting that functionality is reviewed and if considered sufficient, set to “Done”. Otherwise the specification may be refined and the tasks are put back to “Work in progress”. Depending on the estimated time for refinement of the implementation, additional tasks from the backlog may be added to “Work in progress”.
            </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['KANBAN_BOARD']))).map(m => m.id),
        learnMore: <div>
            <p>
                <a href="https://kanboard.org/" target="_blank" rel="noopener noreferrer">https://kanboard.org/</a>
                <br />
                <a href="https://github.com/wekan/wekan/wiki" target="_blank" rel="noopener noreferrer">https://github.com/wekan/wekan/wiki</a>
                <br />
                <a href="https://restya.com/board/" target="_blank" rel="noopener noreferrer">https://restya.com/board/</a>
            </p>
        </div>
    },
    {
        id: 12,
        name: 'Scrum',
        label: LABELS['SCRUM'],
        tags: [
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE']] },
        ],
        description: <div>
            <p>
                The Scrum-Methodology is a framework for the process of iterative software development. It defines roles of persons involved as well as events happening in software development.
            </p>
        </div>,
        purpose: <div>
            <p>
                Provision of clearly defined roles and process events to facilitate efficient agile software development.
            </p>
        </div>,
        task: <div>
            <p>
                Prepare materials for sprint planning and consult on feasibility. Implement and test functionalities and maintain the Kanban-Board.
            </p></div>,
        useCases: <div>
            <p>Software developers consult during backlog preparation in terms of task priority and resources available. Optionally, materials are prepared for upcoming sprint planning sessions. During those, the developers consult in specification and amount of functionalities to be implemented during the next sprint. This specification is taken as input for development and implemented. In the beginning of the next stakeholder meeting the implementation is reviewed and if considered sufficient, confirmed as done. Otherwise the specification and the implementation will be refined during the next sprint.</p>
            <br />
            This process is repeated until all tasks are done or no resources are left for further development.
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['SCRUM']))).map(m => m.id),
        learnMore: null
    },
    {
        id: 13,
        name: 'Information event',
        label: LABELS['INFORMATION_EVENT'],
        tags: [
            { tag: 'stream', labels: [CLABELS['ENGAGING_CO_CREATORS']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
        ],
        description: <div>
            <p>
                In information events potential participants of the co-creation process are invited to get informed about the process and to be engaged as co-creators of the service.
            </p>
        </div>,
        purpose: <div>
            <p>
                The objective is to engage the target user group as co-creators.
            </p>
        </div>,
        task: <div>
            <p>
                The task of the facilitators is to disseminate the event broadly in order to reach a broad target audience. This can be done for example via newspaper articles. It is recommended to involve local champions in order to raise trust among the target group. Furthermore, a location has to be found that is easily reachable and accessible for the participants. Engaging methods such as <a href="guidebook/materials?downloadName=Get to Know Participants and the District" target="_blank" rel="noopener noreferrer">Card Games</a> and an <a href="guidebook/materials?downloadName=Inform Participants" target="_blank" rel="noopener noreferrer">Information Sheet</a> need to be prepared.
            </p>
        </div>,
        useCases: <div>
            <p>
                In the case of <a href="guidebook/case-studies/bremenosterholz" target="_blank" rel="noopener noreferrer">co-creating a digital district guide</a>, we conducted an information event in order to recruit participants for the co-creation of a digital district guide for older adults. In a press meeting we had informed a journalist about the event together with a local champion (a member of the local advisory council) that supports and promotes the project. In a news paper article the event then was announced. The event was hold in the office of the local administration. We firstly introduced ourselves and the project and handed out an <a href="guidebook/materials?downloadName=Inform Participants" target="_blank" rel="noopener noreferrer">Information Sheet</a> to the participants. We then handed out a <a href="guidebook/materials?downloadName=Get to Know Participants and the District" target="_blank" rel="noopener noreferrer">Card Game</a> on the district. The participants were asked to fill out the gaps on the cards. In doing so, they not only shared their knowledge about the district (e.g. what is beautiful in Osterholz) but also considered questions that could be relevant to them or others in the district. In a subsequent worksop we had prepared a proper card game (with pictures) based on the participants’ input. Their task at this workshop was to evaluate each other’s input via blue and green points (for relevance) and leave remarks.
            </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['INFORMATION_EVENT']))).map(m => m.id),
        learnMore: null
    },
    {
        id: 14,
        name: 'Stakeholder Analysis',
        label: LABELS['STAKEHOLDER_ANALYSIS'],
        tags: [
            { tag: 'stream', labels: [CLABELS['MANAGING_A_CO_CREATION_PROJECT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE']] },
        ],
        description: <div>
            <p>
                Stakeholders are people, groups of people or organizations that have a stake in a process and the results of a project. For co-creating a digital public service the most relevant stakeholder group is the target audience. That is primarily the later users of the co-created service but furthermore might include other “indirect” users (e.g. when the service targets older adults it should also support intermediaries such as providers of services for older adults or caregivers). These stakeholder groups are to represent the different subgroups within the target audience.  In addition and in particular in external projects stakeholders are people or groups that may take over the service provision, technical hosting, editorial works etc.
            </p>
        </div>,
        purpose: <div>
            <p>
                Stakeholders are involved in order to contribute their local or them-related knowledge and expertise
            </p>
            <ul>
                <li>Provide resources or organizational support</li>
                <li>Take care of the sustainability of the product, maintain it and exploit it.</li>
            </ul>
        </div>,
        task: <div>
            <p>
                Think from the end, the sustainable service provision (outcome) and look for the inputs, that are necessary in order to co-create this service. Consider who to invite to the project board and who to involve occasionally when particular input is needed.
            </p>
        </div>,
        useCases: <div>
            <p>
                In the case of <a href="guidebook/case-studies/bremen" target="_blank" rel="noopener noreferrer">“co-creating a digital walking guide”</a> – an external project - we aimed to engage different stakeholder groups to support the co-creation process in different ways from the beginning. In order to form a project board of local stakeholders we therefore initially identified a group of people that firstly would have an interest in the service and secondly would support its maintenance. This was a network of elderly care service providers. We attended one of the regular meetings of this group and presented the project and our request. From the whole network seven members committed themselves to be part of the project board that would recruit different groups of older adults for the co-creation process and that would accompany and support the whole process.
            </p>
            <p>
                In addition we involved the head of district government to hold a press conference at the start of the project in order to recruit citizens also co-creators and to support our application for funding a  printed version of the content.
            </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['STAKEHOLDER_ANALYSIS']))).map(m => m.id),
        learnMore: <div>
            <p>
                <a href="https://en.wikipedia.org/wiki/Stakeholder_analysis" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Stakeholder_analysis</a>
                <br />
                <a href="http://www.mspguide.org/tool/stakeholder-analysis-importanceinfluence-matrix" target="_blank" rel="noopener noreferrer">http://www.mspguide.org/tool/stakeholder-analysis-importanceinfluence-matrix</a>
            </p>
        </div>
    },
    {
        id: 15,
        name: 'Project Management Plan',
        label: LABELS['PROJECT_MANAGEMENT_PLAN'],
        tags: [
            { tag: 'stream', labels: [CLABELS['MANAGING_A_CO_CREATION_PROJECT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['DIGITAL_WALKING_GUIDE']] },
        ],
        description: <div>
            <p>
                The British Standards Institute (BSI) defines a project as a ”unique process, consisting of a set of coordinated and controlled activities with start and finish dates to achieve an objective conforming to specific requirements, including the constraints of time, cost and resources” (BS 6079-1 2002, p.2). According to this standard, project management includes seven different processes: scope, human resource, procurement, time, quality, risk and integration management. Each process has to be planned, organised and controlled.
            </p>
            <p>
                Once the problem focus and the social objective have been defined, it is the task of the project manager to develop at least a time plan, a resource plan and a cost or budget plan.
            </p>
        </div>,
        purpose: <div>
            <p>To control the project activities with regard to cost and time</p>
        </div>,
        task: <div>
            <p>
                The most relevant issue with regard to costs is the software development. In an in-house project, this has to be negotiated with the IT-department. In external projects, it is very unlikely that volunteers can be engaged for the complete software development. Rather professional software developers have to be hired and paid. Usually a compromise has to be made between a rather broad problem focus and limited financial resources. Therefore, the most relevant aspects that can be realised within the available budget have to be prioritised. A draft project management plan is submitted and discussed with the project board.
            </p>
        </div>,
        useCases: <div>
            <p></p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['PROJECT_MANAGEMENT_PLAN']))).map(m => m.id),
        learnMore: <div>
            <p>
                <a href="https://shop.bsigroup.com/ProductDetail/?pid=000000000030170007" target="_blank" rel="noopener noreferrer">https://shop.bsigroup.com/ProductDetail/?pid=000000000030170007</a>
                <br />
                <a href="http://www.mspguide.org/tool/stakeholder-analysis-importanceinfluence-matrix" target="_blank" rel="noopener noreferrer">http://www.mspguide.org/tool/stakeholder-analysis-importanceinfluence-matrix</a>
            </p>
        </div>
    },
    {
        id: 16,
        name: 'Business Model Canvas',
        label: LABELS['BUSINESS_MODEL_CANVAS'],
        tags: [
            { tag: 'stream', labels: [CLABELS['MANAGING_A_CO_CREATION_PROJECT'], CLABELS['PROVISION_AND_MAINTENANCE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
        ],
        description: <div>
            <p>
                The original BMC template consist of nine basic building blocks
            </p>
            <ol>
                <li>the customer segments</li>
                <li>value propositions for each segment</li>
                <li>channels to reach customers</li>
                <li>customer relationships established</li>
                <li>revenue streams generated</li>
                <li>key resources </li>
                <li>key activities to create value</li>
                <li>key partners</li>
                <li>cost structure</li>
            </ol>
            <p>The graphical layout of the BMC canvas is shown below:</p>
            <img alt='business model 1' src='assets/img/business_model.png' style={{ width: '90%' }} />
            <p>
                The building blocks of the left section of the BMC is the Infrastructure section and comprises three key areas:
            </p>
            <ul>
                <li>Key Activities: The essential activities to create the value proposition for the customer.</li>
                <li>Key Resources: The resources that are necessary to create value for the customer. </li>
                <li>Key partners: Organisation usually cultivates buyer-supplier relationships so they can focus on the core activity. </li>
            </ul>
            <p>The middle section of the canvas describes the business offering and is the value proposition delivered to different customer segments.</p>
            <ul>
                <li>Value Propositions: The collection of products and services a business offers to meet the needs of its customers. How does an organisation distinguish itself from the competition?</li>
            </ul>
            <p>The right side of the Business Model Canvas describes the customers, the channels through which you deliver services and the relationships you have with your customers.</p>
            <ul>
                <li>Customer Segments: Which customers are tried to serve. Often services are provided to more than one customer group, it is sensible to divide them into customer segments.</li>
                <li>Channels: How customers are reached to deliver the value proposition.</li>
                <li>Customer Relationships: The way to interact with the customer segments.</li>
            </ul>
            <p>The bottom section of the canvas describes the finances.</p>
            <ul>
                <li>Cost Structure: The costs and expenses incurred while operating the business model.</li>
                <li>Revenue Streams: The way to make income from each customer segment.</li>
            </ul>
        </div>,
        purpose: <div>
            <p>The Business Model Canvas (BMC) is used in order to structure the dissemination and exploitation activities of a co-creation project. The BMC is a hands-on tool to foster understanding, discussion, creativity, and analysis of new products or services, in particular for start ups which often have no economic training. It is not a detailed standardized tool but rather a concept for developing individual business model.</p>
        </div>,
        task: <div>
            <p>
                It is the task of the Project Manager not only to fill the boxes but also to adapt the categories according to the objectives and the context of a project. He will not be able to provide valid information to all questions, in particular when they go beyond the end of the project. Therefore, he should draft a plan and discuss it with the project board and other stakeholders.
            </p>
        </div>,
        useCases: <div>
            <p>Below is depicted the adapted BMC for the MobileAge Co-creation project:</p>
            <div style={{ textAlign: 'center' }}>
                <img alt='business model 2' src='assets/img/business_model_2.jpg' style={{ width: '70%' }} />
            </div>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['BUSINESS_MODEL_CANVAS']))).map(m => m.id),
        learnMore: <div>
            <p>
                The triple layered business model canvas: A tool to design more sustainable business models
                <br />
                <a href="https://www.researchgate.net/profile/Raymond_Paquin/publication/304026101_The_triple_layered_business_model_canvas_A_tool_to_design_more_sustainable_business_models/links/5a072299a6fdcc65eab3a65c/The-triple-layered-business-model-canvas-A-tool-to-design-more-sustainable-business-models.pdf" target="_blank" rel="noopener noreferrer">Alexandre Joyce and Raymond L. Paquin</a>
                <br />
                <a href="https://en.wikipedia.org/wiki/Business_Model_Canvas" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/Business_Model_Canvas</a>
                <br />
                <a href="https://strategyzer.com/canvas/business-model-canvas" target="_blank" rel="noopener noreferrer">https://strategyzer.com/canvas/business-model-canvas</a>
                <br />
                <a href="https://canvanizer.com/new/business-model-canvas" target="_blank" rel="noopener noreferrer">https://canvanizer.com/new/business-model-canvas</a>
            </p>
        </div>
    },
    {
        id: 17,
        name: 'Reflective practice',
        label: LABELS['REFLECTIVE_PRACTICE'],
        tags: [
            { tag: 'stream', labels: [...Object.keys(CLABELS).map(k => CLABELS[k])] },
            { tag: 'caseStudy', labels: [...Object.keys(SLABELS).map(k => SLABELS[k])] },
        ],
        description: <div>
            <p>
                Reflective practice is an approach that advocates the idea that we learn from our doing. That is that we reflect on our practices and that we consciously learn whilst and after doing it.  The approach, which is also sometimes referred to as action learning, typically consists of four stages or steps:
           </p>
            <ul>
                <li><u>Plan</u> and activity or intervention (based on previous experience)</li>
                <li><u>Implement</u> activity or intervention</li>
                <li><u>Observe</u> activity or intervention (noting what works and what not)</li>
                <li><u>Reflect</u> on activity or intervention (record what was learnt and what it might mean for future interventions)</li>
            </ul>
        </div>,
        purpose: <div>
            <p>The purpose of the reflective approach is to learn from our experience (successes and mistakes) in order to become more competent and effective in doing it.  </p>
        </div>,
        task: <div>
            <p>
                To take into account previous learning or experience when planning (for example workshops). To make sure that somebody is designated to take notes and record observations during the activity. To ensure that post-activity reflection takes place and learnings are recorded and implications for future activities are considered.
            </p>
        </div>,
        useCases: <div>
            <p>
                Reflective practice was central to all the activities and interventions of MobileAge.  For example, when we conducted workshops we followed the reflective practice approach. This means that ongoing formative evaluation was built into all activities.  As we used this approach a number of good practice guidelines emerged.  The most important of these is to have an explicit and structured process to record observation to allow for effective post-activity reflection.  For example, we developed an intervention planning template and an intervention record and reflection template that were used for all workshop activities.
           </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['REFLECTIVE_PRACTICE']))).map(m => m.id),
        learnMore: <div>
            <p>
                <a href="http://www.participatorymethods.org/method/reflective-practice" target="_blank" rel="noopener noreferrer">Reflective Practice.</a>
                <br />
                Reynolds M (2011) Reflective practice: origins and interpretations. Action Learning: Research and Practice 8(1): 5–13.
                <br />
                Vince R (2002) Organizing Reflection. Management Learning 33(1): 63–78.
            </p>
        </div>
    },
    {
        id: 18,
        name: 'Workshop',
        label: LABELS['WORKSHOP'],
        tags: [
            { tag: 'stream', labels: [...Object.keys(CLABELS).map(k => CLABELS[k])] },
            { tag: 'caseStudy', labels: [...Object.keys(SLABELS).map(k => SLABELS[k])] },
        ],
        description: <div>
            <p>
                Workshops are collaborative meetings that aim to get the participants fully involved in a creation, design, or learning process. It usually consists of discussions, activities, exercises, and so forth. Different methods such as <a href="guidebook/methods/details/6" target="_blank" rel="noreferrer noopener">Personas & Scenarios</a> and <a href="guidebook/methods/details/9" target="_blank" rel="noreferrer noopener">Prototyping</a> can be applied in workshops.  Good workshops have a clear objective, is well structured, and ensures the full and equal participation of all the participants. Depending on the objective of a workshop, different workshop formats such as <a href="guidebook/methods/details/0" target="_blank" rel="noreferrer noopener">content creation workshops</a> or <a href="guidebook/methods/details/13" target="_blank" rel="noreferrer noopener">information events</a> can be applied.
           </p>
        </div>,
        purpose: <div>
            <p>Workshops in co-creation usually have a very clear design or outcome objective. Workshops are used as a collaborative process to provide maximum opportunity for all participants to participate and achieve the workshop objectives.   </p>
        </div>,
        task: <div>
            <p>
                Preparation is key.  Think carefully about the process. What is the objective of the workshop? How will you make the workshop process inclusive, accessible, and appropriate for older adults? What materials will you be using? Are they appropriate for older adults? What is your plan B if things don’t go as planned?
            </p>
        </div>,
        useCases: <div>
            <p>
                In MobileAge we have used workshops extensively. From our experience we can say that there is no one correct way to do workshops. In our workshops we saw big variety in terms of objectives and how it was organised.  However, a few ‘best practices’ emerged as we learned how to do co-creation with older adults.  Here is some guidance.
           </p>
            <p>
                <u>Planning</u> – Careful planning is very important. Be clear about the objective (or objectives) of the workshop. Sometimes it is to work with specific cultural probes in order to explore practices, sometimes it is to get feedback on a prototype, sometimes it is more open-ended, such as to share experiences. It is important to have a clear objective but it is also important to be flexible. For example, it is possible that some of the co-creators not turn up (due to bad weather, etc.) and the activities you have planned might not be feasible anymore. Having a set of alternative plans (with relevant materials) would then be important as one would not want to deter those that have turned up by wasting their time.  It is also good to have a set of general materials that you always take to your workshops such as coloured pens and pencils, differently coloured sticky notes, flipcharts, notebooks,  sticking tack (or masking tape), and so forth.  When planning the venue for the workshop it is important to be mindful of the challenges that older adults face in terms of getting to the venue (transport and cost to get to the venue), the facilities (especially easily accessible toilets), the duration (consider duration and breaks), refreshments (water, tea/coffee and something to eat), and so forth.
           </p>
            <p>
                <u>Conducting</u> – when conducting the workshop it is important to be mindful of the audience. The pace must be appropriate (ask older adults to give you feedback if the pace is not right).  It is important that the process is relevant to participants (their needs, interests and motivations). Also, what will you do to ensure that you engage participants with different backgrounds and different abilities in the process?  How are you going to ensure active participation by all the co-creators?  How will you ensure that all the participants are involved in the decision making activities (that all the voices are heard)? How are you going to ensure that the workshop and co-creation process is transparent and understood by all participants?  How will you develop trust?  These are some of the things we typically considered when planning and conducting our workshops.
           </p>
            <p>
                <u>Reflecting</u> - We found it very helpful and important to have post-workshop reflections on what worked, what did not work and how we can improve what we are doing in the future workshops. Sometimes we also involved our co-creators in this post workshop reflection. We tended to give them feedback on this at the start of the next workshop.
           </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'method' && t.labels.includes(LABELS['WORKSHOP']))).map(m => m.id),
        learnMore: <div>
            <p>
                <a href="https://gds.blog.gov.uk/2017/12/18/ten-tips-for-getting-the-best-from-workshops/" target="_blank" rel="noopener noreferrer">Ten tips for getting the best from workshops</a>
                <br />
                <a href="https://www.ebgconsulting.com/Goodies/Assets/WrkshpGroundRules.pdf " target="_blank" rel="noopener noreferrer">Example Workshop Ground Rules</a>
                <br />
                <a href="https://therightquestions.co/the-world-cafe-workshop-facilitation-method/" target="_blank" rel="noopener noreferrer">The World Cafe: Workshop Facilitation Method, Principles and Etiquette</a>
            </p>
        </div>
    },
]

export const methodsTagsLabels = {
    stream: Array.from(new Set(flattenArray(methods.map(m => m.tags.find(t => t.tag === 'stream')).map(m => m.labels)))),
    caseStudy: Array.from(new Set(flattenArray(methods.map(m => m.tags.find(t => t.tag === 'caseStudy')).map(m => m.labels)))),
}