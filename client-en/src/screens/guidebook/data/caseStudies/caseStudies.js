import React from 'react';
import { Row, Col } from 'antd';
import { materialsArray } from '../materials/materials'
import { CASE_STUDIES_LABELS as LABELS } from '../labels/labels'

export const caseStudies = {
    'rcm': {
        site: 'rcm',
        siteLabel: 'Region of Central Macedonia',
        appLabel: 'Co-creating a Health App',
        appIcon: 'mobile',
        description: <div>
            <p>
                <strong>Problem focus.</strong><br />For senior citizens, it is particularly important to access health services. They use the public care system and interact with health providers. Even those with limited needs feel more secure when they understand and communicate with the services provided. In Greece, senior citizens living in a big city such as Thessaloniki are usually confused by the different procedures, requirements, service providers and basic information for primary health care.
            </p>
            <p>
                In addition to this, active aging and independent living are highly connected with the improvement of citizens’ quality of life, and are topics that need to be boosted in a general environment of declining living standards.
            </p>
            <p>
                <strong>Value Proposition.</strong><br />The value proposition was of co-creating a health app for and with older adults, to provide an age-friendly app suitable to the needs and expectations of older adults and citizens in general. The app will reduce the anxiety associated with finding the proper health provider, as advice on this exists as scattered information on the internet, or on platforms with a distinct topic, e.g. only on-call pharmacies, none of which are user-friendly to older adults who don’t have familiarity with computers.
            </p>
            <p>
                <strong>Limitations of existing services.</strong><br />The existing situation demands the use of phone calls for doctor’s and hospital appointments, which, in many cases, involves long waiting times or automatic machine answers, which confuse older adults and involve communication problems. The in-person appointment service causes queues, tiredness and exhaustion.
            </p>
            <p>
                <strong>Field site.</strong><br />The Region of Central Macedonia is the second most populated and largest region in Greece. The capital of the region and administrative centre of RCM, Thessaloniki, is the second biggest city in Greece, the economic, trade, transportation and cultural centre of Northern Greece, and a popular travel destination for Balkan tourists. Its population is up to 1,110,312 residents, and the whole area of RCM contains up to 1,880,058 residents (ELSTAT 2011). Statistically, residents aged 60+ years account for 25.36% of the population – 476,784 residents (ELSTAT 2011). Considering the increasing demographic problem of Greece, this is a large percentage in the overall structure of the social fabric.
            </p>
            <p>
                The district of Thessaloniki has 27 hospitals (private clinics and public hospitals), 8,600 doctors registered at the Medical Association working in the private or public sector, 1,192 pharmacists registered at the Pharmacists Association and a large number of other health professionals. The large number of health professionals seek to provide health services to citizens from all over the region, as well as to health tourists from other countries. However, due to cuts in the public health sector because of the economic crisis, a reduction in the provided services, and reduced opportunities for patients to use these services (e.g. more people cannot effort insurance), sufficient medical care is not available to everyone. Despite the good medical supply, citizens and especially older adults who have lower income, search for health services that are less expensive, easily found, and freely provided by the state. This particular need of older adults is targeted by the Mobile Age application provided by RCM. The co-created health service concentrates all the open-data for health services proposed by the older adults, through an age-friendly interface.
            </p>
        </div>,
        process: <div>
            <p>
                <strong>Stakeholders.</strong><br />The co-creation process was an ‘in-house’ project, which means that it was initiated by a public organisation that wants to add another service to their existing service portfolio. The key initiators and project managers, therefore, were different departments of the public administration of the region. Furthermore, a number of stakeholders were identified, based on the criterion of their key involvement in each step of the process:
            </p>
            <p>
                <u>Regional government – relevant directorates.</u>&nbsp;Three different departments from the Region of Central Macedonia were involved: the Department of European Programs and Synergies; the Department of Transparency and e-government; and the Department of Public Health. They all contributed in forming the idea, surveying existing services, managing the co-creative activities, serving as members of the core project group, providing data, running workshops and interviews, evaluating the results, and defining the data.
            </p>
            <p>
                <u>Aristoteles University of Thessaloniki (AUTH):</u>&nbsp;the software developers of the application participated actively at the workshops and interviews.
            </p>
            <p>
                <u>Open Care Centres (KAPI):</u>&nbsp;The staff of the Open Care Centres offered widely their experience in working with older adults, supported co-creation, and participated in the organization of the workshops and the focus groups.
            </p>
            <p>
                <u>Older adults:</u>&nbsp;The target group of the project and the key stakeholder group in this co-creation process. The participation of older adults reached an average number of 15-17 per workshop.
            </p>
            <p>
                <u>Data providers:</u>&nbsp;Several data providers, such as the Pharmacists Record of Thessaloniki, the Medical Association of Thessaloniki, and the National Organization of Health, with whom we managed to ensure co-operation after much effort.
            </p>
            <p>
                <strong>Process and interventions.</strong><br />
                When we realized that a major sector where senior citizens face problems was that of health, we had to explore possible ways in which we could find out their major concerns about their health, and then try to imagine as facilitators and data providers how certain needs could be addressed by a digital public service. We chose to focus on the area of Thessaloniki, which is the capital of RCM. Here we found a great diversity of different needs of senior citizens.
                <br /><br />
                We approached and engaged stakeholders that had been identified in the previous stages through various small and large-scale preparatory meetings.
                <br /><br />
                We prepared a questionnaire that contained a set of 31 questions. The first 3 questions were demographic, and the next 5 focused on the participants’ relation to mobile devices and access to internet. The rest asked about various aspects of their health-related needs.
                <br /><br />
                Two informational events were held, through which we made an analysis of the data collected from the questionnaires from both KAPI’s, which would lead us to focus on specific health-related issues. We realized that pathologists and cardiologists were the most popular specialists along with orthopedics. The participants found the option of getting information regarding air pollution rather interesting but not exactly vital, as the majority of them do not have breathing problems.
                <br /><br />
                We came up with initially three, and eventually two personas that we thought covered at least a subset of the senior citizens’ health-related features and tried to imagine some possible scenarios on health issues.
                <br /><br />
                In five co-creation workshops, we refined the service concept and co-designed the app together with our target group. Various options for the interface and the functionality of the application were demonstrated, and as the process proceeded, the current interface and functionality of the developed mobile application were discussed through mock-ups. The goal was also to complete some assigned user scenarios in order to evaluate accessibility and ease of use of the app's functionality. We performed this activity because the end-user might experience the app very differently from how the developer experiences it or thinks that the end-user will.
            </p>
        </div>,
        result: <div>
            <p>
                The co-created application is called HEALTH YES!&nbsp;<img alt='rcm logo' src='assets/img/case-study-results/rcm/healthyes.png' style={{ width: '26px', height: 'auto' }} />
            </p>
            <p>
                Using this app, older adults can easily receive information regarding the following services:
            </p>
            <ul>
                <li><strong>Hospitals service.</strong>&nbsp;Using the app, older adults are able to search for on-duty hospitals in their city of residence. </li>
                <li><strong>Doctor’s service.</strong>&nbsp;The app allows older adults to locate doctors of various specialities.</li>
                <li><strong>Pharmacies service.</strong>&nbsp;Using the app, a user is able to search for on-duty pharmacies, either by specifying a desired area/neighbourhood, or by using her current location.</li>
                <li><strong>Prescription service.</strong>&nbsp;The senior user is able to fill a prescription from an affiliated pharmacist, by scanning the corresponding barcode. Then, the pharmacist can confirm the drug availability, and notify the user that they can pick them up by visiting the pharmacy. </li>
                <li><strong>Panic button service.</strong>&nbsp;In our app, a senior user is able to tap a ‘panic button’ in order to make an emergency call.</li>
                <li><strong>Personalization settings.</strong>&nbsp;A senior user is able to personalize the app, by setting some preferences for the aforementioned services. Particularly, preferences can be adjusted for the pharmacy, panic button and prescription services.</li>
            </ul>
            <Row style={{ marginTop: '15px', marginBottom: '15px', justifyContent: 'center', alignItems: 'center' }} type='flex'>
                <Col xs={24} sm={{ span: 18, offset: 3 }} md={12} lg={{ span: 8, offset: 2 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='rcm app 1' src='assets/img/case-study-results/rcm/result1.png' style={{ width: '95%', height: 'auto' }} />
                </Col>
                <Col xs={24} sm={{ span: 18, offset: 3 }} md={12} lg={{ span: 10, offset: 4 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='rcm app 2' src='assets/img/case-study-results/rcm/result2.png' style={{ width: '95%', height: 'auto' }} />
                </Col>
            </Row>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'caseStudy' && t.labels.includes(LABELS['HEALTH_APP']))).map(m => m.id)
    },
    'bremen': {
        site: 'bremen',
        siteLabel: 'Bremen Hemelingen',
        appLabel: 'Co-Creating a Digital Walking Guide',
        appIcon: 'environment',
        description: <div>
            <p>
                <strong>Problem focus.</strong><br />One dimension of the World Health Organization’s age-friendly cities and communities guidelines is the provision of age-friendly outdoor spaces to allow older adults to spend more time outdoors. From a public health perspective this is particularly relevant, as spending more time outdoors improves people’s functional health and ensures Vitamin D take-up. Hence, one of the tasks of social care service providers is to organise joint outdoor activities in order to motivate older adults to exercise and to meet other people.
            </p>
            <p>
                <strong>Value Proposition.</strong><br />A digital information service around local walking tours allows for more detailed and up-to-date information as well as greater information richness to be provided, compared to printed guides. Walks and related locations can, for example, be presented by adding video clips of people conducting those walks, and voice recordings of recommendations by members of the target audience, which gives the information a lively and personal touch. We developed a digital service that provides relevant and appealing information to older adults, which activates and motivates joint walks in the different parts of the district, and supports service providers in organising and announcing these kinds of walks by exploiting the full potential of multimedia technologies.
            </p>
            <p>
                <strong>Limitations of existing services.</strong><br />Existing services (such as a printed pocket guide, a district website, flyers and posters in meeting places) are not comprehensive, appealing and motivating for outdoor and social activities of older adults. An existing printed pocket guide for the district informs about nice places and walks, but it lacks appealing information that has the potential to attract people to visit places they did not know before. Furthermore, certain features important for older adults, such as up-to-date information on benches and toilets, are missing.
            </p>
            <p>
                <strong>Field site.</strong><br />This pilot study was conducted in the district of Hemelingen in Bremen, Germany. Hemelingen is located in the east of Bremen, connected directly with the inner-urban area in its western part. Hemelingen is the second largest city district in Bremen. It is divided into five neighbourhoods, each of which is an important point of identification and reference for the residents. Some of the neighbourhoods have a rural character as they are situated on the outskirts of Bremen, whereas others link seamlessly into one of the most popular city districts and have an urban flair. The foreign population share in each of the neighbourhoods differs between 6.3 % and 23.6 %. This segregation manifests in people’s attitudes towards each other and ‘their’ neighbourhoods. One important aim of urban development processes in this district is therefore to overcome such divides and establish a sense of shared identity.
            </p>
        </div>,
        process: <div>
            <p>
                <strong>Stakeholders.</strong><br />The co-creation process was managed by a team of Mobile Age researchers from the Institute of Information Management Bremen (ifib) at the University of Bremen, and from the Research Institute on Technology and Disability (FTB) at the Evangelische Stiftung Volmarstein. Key local stakeholders were members of a <strong>network of social care service providers</strong> that became our gatekeepers and endorsed the process at local government level. A group of five members of this network became our project board with whom we met on a regular basis. They acted as champions of our project and endorsed the process during council meetings. They further acted as communicators by promoting the project in the local newspapers, their own communication material and the district fair. In addition, the project board served as data providers with data about their own services and resources.
            </p>
            <p>
                Forty-six older people participated in co-creating the service from the first idea to the final technical implementation. Since participants could engage according to their interests and skills, most of them only participated in one or two activities. Only a small group of five older adults formed our core group and participated throughout the whole process.
            </p>
            <p>
                <strong>Process and interventions.</strong><br />The problem focus in this case study was defined together with members of a network of local service providers in the district (on the project board). Involving these intermediary stakeholders allowed us to consider and target a broad range of older adults in the district, and not only those who were capable of and interested in participating. Based on the expertise of these network members, we identified two main issues for older adults in the district that could be targeted via online information provision:
            </p>
            <ul>
                <li>a lack of shared identity and mutual prejudices; and</li>
                <li>limited mobility.</li>
            </ul>
            <p>
                The lack of social cohesion in the district manifests in preconceptions and a spatial segregation among the inhabitants. This social and spatial division has its roots in the historical development of the city district and is therefore most pronounced among older adults. We learned that the mobility limitations and interests of the majority of (older) people in the district is also a social issue: socially disadvantaged people are more likely to have a narrower activity radius. Therefore, the service providers (and later on the participating older adults) considered it important to provide information on the district as a whole, and not just on separate neighbourhoods. This might stimulate interest in other neighbourhoods among citizens and widen their spatial and social radius.
            </p>
            <p>
                In total, we had six meetings with the project board. Initially we were concerned with the planning of the process and the recruitment of older adults for it. As we proceeded, we then discussed previous results and challenges and aligned the subsequent process accordingly. One important point here was to receive feedback from the project board’s members, in order to ensure the relevance of the service for a broader target audience.
            </p>
            <p>
                Walking workshops, focus groups and (digital) content creation workshops were at the core of the co-creation process and hence represent the main types of activity. Overall, we conducted six focus groups with different groups of older adults (e.g. residents of an elderly care home, customers of a mental health service). Here we developed a rough service concept of a digital walking guide. This rough concept was then refined in six walking workshops, where we investigated what our target users are interested in when going for a walk. On these walks, participants furthermore collected data and created content for the app. The creation and integration of multi-media content was part of content creation workshops: In 11 of such workshops, participants digitalized the collected and created material. We supported participants if necessary, depending on their technical skills. The participants wrote descriptions of the walks, created videos and slide shows, added audio recordings, and selected pictures. In these workshops, we also co-designed the front end of the application together with our technical partner from FTB.
            </p>
            <p>
                Cooperation meetings and dissemination events accompanied these core co-creation activities. We informed all interested parties about the project’s progress through our blog. We documented all interventions.
            </p>
        </div>,
        result: <div>
            <p>The result is a digital walking guide for older adults that provides appealing multi-media information on several walks in the different parts of the district. It is integrated in the official online portal of the city of Bremen [www.bremen.de/hemelingen/senioren] and will be maintained there after our project finishes. On top of the information about walks, the guide also provides general information about the district (e.g. meeting places, advisory services).</p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px' }}>
                <Col md={{ span: 6, offset: 2 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='bremen results 1' src='assets/img/case-study-results/bremen-1/1.jpg' style={{ width: '75%' }} />
                </Col>
                <Col md={{ span: 6, offset: 2 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='bremen results 2' src='assets/img/case-study-results/bremen-1/2.jpg' style={{ width: '75%' }} />
                </Col>
                <Col md={{ span: 6, offset: 2 }} style={{ textAlign: 'center' }}>
                    <img alt='bremen results 3' src='assets/img/case-study-results/bremen-1/3.jpg' style={{ width: '75%' }} />
                </Col>
            </Row>
            <p>Because many older adults do not yet use the internet the content of the digital district guide, has also been printed in a booklet featuring six walks. This was co-financed by the MobileAge project and the district council. The booklet isdistributed via local social care service providers and reaches out to older adults who do not use digital devices.</p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px' }}>
                <Col md={{ span: 8, offset: 8 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='bremen results 4' src='assets/img/case-study-results/bremen-1/4.png' style={{ width: '90%' }} />
                </Col>
                <Col md={{ span: 10, offset: 7 }} style={{ textAlign: 'center' }}>
                    <img alt='bremen results 5' src='assets/img/case-study-results/bremen-1/5.png' style={{ width: '90%' }} />
                </Col>
            </Row>
            <p>In addition, two senior citizen meeting places instigated tablet groups for older adults after the project was finished. Part of the reason was that a demand for such a service became apparent through our project. </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'caseStudy' && t.labels.includes(LABELS['DIGITAL_WALKING_GUIDE']))).map(m => m.id)
    },
    'southlakeland': {
        site: 'southlakeland',
        siteLabel: 'South Lakeland',
        appLabel: 'Co-Creating a Social Connectedness App',
        appIcon: 'share-alt',
        description: <div>
            <p>
                <strong>Problem focus.</strong><br />The starting point for this case study was the issue of ‘independent living’ by older adults in a rural area of the UK. However, early co-creation activities redefined the focus to ‘loneliness and social isolation’. Addressing these issues has social benefit – primarily through reducing health interventions. Facilitating social connectedness simultaneously addresses a number of key indicators in the Age-Friendly Environments in Europe (AFEE) framework:
            </p>
            <ul>
                <li>Social environment. Social participation, and Social inclusion & non-discrimination.</li>
                <li>Physical environment. Transport and mobility.</li>
                <li>Municipal Services. Communication and information.</li>
            </ul>
            <p>
                <strong>Value Proposition.</strong><br />In addressing these key indicators, we focussed on participation in the social environment by creating supportive environments for social exchange and providing opportunities for social contact in the community: more specifically, empowering older people to participate in activities, and increasing awareness of existing activities, by using existing open data infrastructures more effectively.
            </p>
            <p>
                Older adults want to participate in meaningful social interaction, through locally organised social events and activities, both as participants and as volunteers. However, such participation is difficult because of a number of factors. <strong>Information</strong> about events and activities are fragmented across many service providers who have multiple, often exclusive channels of communication; some paper based and located, some digital but not readily accessible. <strong>Transport</strong> to and from the events or activities is not readily available in the timeframe required. This is exacerbated by cuts to the provision of transport in rural areas. Other environmental information such as weather, physical accessibility, toilets, etc. is not readily available.
            </p>
            <p>
                In sum, the cognitive and logistical burdens of finding organised social activities, and organising resources (such as transport, cost, suitable clothing, etc.) to attend these events, are so high that it is extremely difficult for older adults to participate. Thus, non-participation becomes the default, and participation becomes exceptional. This inability to connect leads to social isolation and loneliness. This makes future participation less likely, in a self-fulfilling cycle. The co-creation process thus focused on creating a social connectedness app (or apps) in a secure and trusted environment. The value proposition adopted was:
            </p>
            <p>
                “To provide a practically relevant solution that will reduce the cognitive and logistical burden on older adults required to find relevant and meaningful opportunities for social engagement, using existing open data sources.”
            </p>
            <p>
                <strong>Limitations of existing services.</strong><br />Existing services and information on them are fragmented and diffused throughout the social environment. Our major local authority stakeholder had identified that access to existing services such as learning, care, leisure, health, warm and secure housing, social interaction etc., would require finding over 100 paper leaflets and websites from 29 agencies providing 133 unique services. This complexity and cognitive burden could be significantly reduced by drawing together available information and older people’s needs through a digital ‘one stop shop’ service. The Mobile Age project focussed on social interaction events and services.
            </p>
            <p>
                <strong>Field site.</strong><br />The study was based in and around the market town of Kendal in the administrative district of South Lakeland. South Lakeland sits in the south east of the county of Cumbria and contains some of the UK’s finest natural environments; including some of the most well-known tourism areas of the Lake District National Park and parts of the Yorkshire Dales National Park. With a geographical area of 1,534 km<sup>2</sup>, South Lakeland is the second largest district in the county. Kendal is the largest town and administrative centre, Ulverston in the west of the district being the second largest, and several other towns spread across the district include Windermere, Ambleside, Grange-Over-Sands, Milnthorpe, Kirkby Lonsdale and Sedbergh.
            </p>
            <p>
                South Lakeland is a very rural region meaning that (public) transport and communication infrastructure (especially broadband internet) is not readily available and is expensive. The district is disproportionately older: children below 14 years old are 14% of the population whereas residents aged 65+ years account for 25.5%. This is the highest proportion in the county and well above the national average of 17%. This proportion of an ageing population is increasing.
            </p>
        </div>,
        process: <div>
            <p>
                <strong>Stakeholders.</strong><br />The co-creation process was managed by Mobile Age researchers from the Department of Organisation, Work & Technology, in Lancaster University Management School. Key local stakeholders were the local branch of the national NGO for older people in the UK, Age UK South Lakeland, and the local authority based in Kendal – South Lakeland District Council. Other stakeholders included IT training groups, a local sheltered housing organisation, and a waste group. A total of 10 formal meetings and events were held with the two main stakeholders and others involved the broader network of stakeholders. We worked with 94 individual people: 49 older adults, 5 intermediaries, 13 local government staff, 15 service providers & 11 facilitators. A core group of seven older adults have co-created the app from beginning to end.
            </p>
            <p>
                <strong>Process and interventions.</strong><br />The problem focus was defined in early co-creation events with the major stakeholders and public participants, and as it developed, attempts were made to ensure that those who are not engaged with digital technology or face other problems of access to both ICT and social connectedness events and services could be aided by project outputs.
            </p>
            <p>
                Phase 1 sought to understand the practices of older adults as they seek to, or do access technology and services relating to social connectedness. A prototype app was developed, based on open data, at the end of phase one. Phase 2 built upon the insights and lessons that were garnered in phase one, specifically in relation to the low level of technology adoption amongst older adults and the sparse broadband infrastructure. To address this, phase two also sought to work with intermediaries such as family, NGO and government staff and volunteers, who might use the app with/for an older adult. The key point that guided the co-creation of the technological solutions was to follow existing practices, maintaining their meaning to older adults but providing new ways to perform them.
            </p>
            <p>
                Co-creation workshops, focus groups before workshops or meetings with stakeholders and participants, and app co-design workshops were at the core of the co-creation process, and hence represent the main types of activity. Overall, we conducted 53 interventions, 13 of which were meetings and 26 of which were co-creation workshops of one form or another. Other interventions were attendance at different existing groups for recruitment and background research, talking to and working with ‘intermediaries’ such as carers, public events, and dissemination activities.
            </p>
        </div>,
        result: <div>
            <p>
                The main output of the project is a digital service: a mobile app that allows access to open data held in a database, via a series of embedded apps that also include a user profile and the potential for uploading images to share information that is not digitised (see image below). The Social Connectedness app reduces the need for several individual searches to access, for example, events listings, travel options, weather conditions and routes. By using the Older Adult User Profile and the search functions in the app, the user has access to data that is relevant to their preferences, without having to search through a large number of entries, thus reducing the cognitive and logistic burden of accessing information that enables older adults to take part in events.
            </p>
            <Row style={{ marginTop: '15px', marginBottom: '15px', justifyContent: 'center', alignItems: 'center' }} type='flex'>
                <Col xs={24} sm={{ span: 18, offset: 3 }} md={12} lg={{ span: 8, offset: 2 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='southlakeland app result' src='assets/img/case-study-results/southlakeland/result.png' style={{ width: '85%', height: 'auto' }} />
                </Col>
                <Col xs={24} sm={{ span: 18, offset: 3 }} md={12} lg={{ span: 10, offset: 4 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='southlakeland app result' src='assets/img/case-study-results/southlakeland/result2.png' style={{ width: '85%', height: 'auto' }} />
                </Col>
            </Row>
            <p>
                The specific apps linked in the Mobile Age Social Connected App are the app launcher, user profile manager, events app, services app, volunteering app, and ‘contribute poster’ app. An information sheet advertising the app is reproduced below.
            </p>
            <p>
                The fully functioning Social Connectedness demonstrator app was finalised during phase 2. It starts with the premise that what older adults seek to do is to have opportunities for meaningful face-to-face social connectedness in the form of events and volunteering activities. It then opens up and joins up information relating to the enabling links such as transport, public car parks, benches, bus stops, toilets and weather. This joined up information helps older adults and intermediaries to plan their social connectedness, as an enjoyable and reaffirming activity in itself. It also acknowledges that by joining up data from differing App Programming Interfaces (APIs) it reduces the cognitive burden on older adults seeking out information from many different websites. It draws on open data about events, volunteering and services provided by local government and third sector organisations. It draws on private sector rail and bus transport providers’ data. Personalisation through a user profile also reduces the cognitive burden. A user profile permits an older adult to select their preferences relating to transportation, how far and for how long they want to travel, and sets a limit to the costs of events. A user can request to view transportation options and routes to the event on an age-friendly map (including the location of nearby toilets and benches). A calendar allows the user to organise their schedule. Importantly, the app can also be accessed by an intermediary, who can search on behalf of the older adult, and review their user profile. If required, the intermediary can then print out their calendar and activities for the week ahead. This takes away the necessity for the older adult themselves to be the user and/or have internet access themselves. To recognize that much information remains printed in hard copy around the district (e.g. posters on notice boards in doctors’ surgeries or post offices), we have also developed an app called ‘Contribute a Poster’, that allows users to upload images of posters about local events (photographs or scans) that might not be listed in digital format.
            </p>
            <p>
                The app has been pre-loaded onto a number of Amazon Fire tablets and trialled with members of the public, and Age UK have said they will upload the app to their tablets. The digital service and database are hosted by the University but will transfer to South Lakeland District Council subject to final agreements/confirmation. Their Customer Connect service should also be utilised to roll out the app.
            </p>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'caseStudy' && t.labels.includes(LABELS['SOCIAL_CONNECTEDNESS_APP']))).map(m => m.id)
    },
    'zaragoza1': {
        site: 'zaragoza1',
        siteLabel: 'Zaragoza 1',
        appLabel: 'Co-Creating Age-Friendly Routes',
        appIcon: 'compass',
        description: <div>
            <p>
                <strong>Problem focus.</strong><br />
                Physical accessibility, as well as sensory access, are important elements to configure the improvement of the friendliness of urban environments, for all citizens, but especially for older adults.  The possibility of moving and enjoying the city in a safe and accessible way represents another way to promote equality, ultimately avoiding the inequalities that the environment can generate for older citizens.
            </p>
            <p>
                In Zaragoza, different participatory processes aiming at the improvement of older citizens lives have been conducted by the city administration. In these processes, older people have expressed their demand for safe and well-equipped spaces for strolling and moving around that encourage physical activity and the enjoyment of the city.
            </p>
            <p>
                <strong>Value Proposition.</strong><br />
                The co-created service provides all relevant information on the facilities that need to be improved or added, to support the mobility and social connection of older adults in the district and improve access to all types of services. This is a new service that did not exist previously, as it combines the possibility of creating friendly routes to walk calmly and safely through the city, with the possibility of making demands to improve them according to the needs of the people who use them. As an online service, it is more relevant and comprehensive, exploits the full potential of digital media technology, optimizes usability for older adults, and is easily accessible and continuously updated.
            </p>
            <p>
                <strong>Limitations of existing services.</strong><br />
                There are already quite a number of printed information resources for older citizens in all districts of the city. They deal with different things and provide information in different degrees of detail. Most of them have been compiled and designed for senior adults, but not with them. Many older adults complained about the shortcomings of some areas with regard to the equipment they felt they needed to have. We were informed that it was a very arduous job for older people to report incidents as there was no clear way to identify where the problem was, how to report it to the municipality and, finally, how to get it resolved.
            </p>
            <p>
                <strong>Field site.</strong><br />This pilot study was conducted in three districts of Zaragoza, Spain.
            </p>
            <p>
                <u>Central district:</u> With 53,411 inhabitants, of which 27.27% are over 65 years old. Corresponds to a municipal district of high economic level (average net income €17,846.86), where the senior centres are located. It has an average number of inhabitants and its geographic location corresponds to the downtown area of ​​the city, with numerous urban commercial spaces.
            </p>
            <p>
                <u>District of Delicias:</u> This is the district with the highest population density, with many old housing areas and a total population of 106,371 inhabitants, of whom 23.05% are over 65 years old. It has a low to average level of income (average net income €10,282.8) and has three Senior Centres. Older people make up a large proportion of the districts population including especially emigrants from other cities and towns in Spain.
            </p>
            <p>
                <u>District of Almozara:</u> Located near the Historic Quarter of the City, this is a geographically delimited neighbourhood with a population of 29,229 inhabitants including 18.65% over 65 years of age. It has an average level of income (average net income €11,717.25), and it is one of the neighbourhoods that had more social and urban transformation in the last decades.
            </p>
        </div>,
        process: <div>
            <p>
                <strong>Stakeholders.</strong><br />
                The main partners and the initiators of the process were local government from the City Council of Zaragoza. Two departments were involved in the process:
            </p>
            <ul>
                <li>The Senior Citizens Department</li>
                <li>The Participation, Transparency and Open Government Department.</li>
            </ul>
            <p>
                A core-group of <strong>6 older adults</strong> participated in each district co-creation process, consisting of half males and half females aged 65-80. They were comparably well educated, physically and psychologically healthy (one had a leg mobility problem) and all lived independently. None lived in an institutional setting. Overall, the participants were familiar with digital technologies. Only one participant had never used a computer. Almost half of the participants engaged actively in political and volunteering work in the district. With regard to social inclusion, they can be considered as already quite well included.
            </p>
            <p>
                <strong>Process and interventions</strong><br />
                We can define a <strong>friendly route</strong> as one that:
            </p>
            <ul>
                <li>Is a useful and frequent route: it is a habitual route that older people use in their daily life in the neighbourhood. The Senior Centre of the district will be taken as a reference point. </li>
                <li>One can walk in a safe and accessible way. This implies that older people will have previously studied the existence or not of a series of important needs for this group. </li>
                <li>It is developed through the participation and consensus of a team of older people.</li>
            </ul>
            <p>
                The co-creation process was carried out in three distinct districts of Zaragoza in three phases. The districts were chosen upon recommendation of the Department of Elderly Care, based on previous good working relations. In addition, in all districts there existed groups of older people engaged in walking clubs and familiar with using GPS. The districts have a different socio-economic structure than the other two selected.
            </p>
            <p>
                The initial steps for the co-creation planning stage are the exploring and scoping of the project and the setting up of the project organisation, i.e.:
            </p>
            <ul>
                <li>define the target audience;</li>
                <li>sharpen the problem focus;</li>
                <li>identify relevant stakeholders;</li>
                <li>establish project governance;</li>
                <li>identify and evaluate existing information about the neighbourhood; and</li>
                <li>define the value proposition and expected impact.</li>
            </ul>
            <p>
                It was necessary to define the time needed for each of the sessions, in addition to the number of sessions to be developed. We started from a process with a methodology that had to be adapted both to the needs and objectives of the project, and to the characteristics of the group.
            </p>
            <p>
                The steering group - made up of technical staff of the Zaragoza City Council (Municipal website staff, Technical Office for Participation, Transparency and Open Government (open data provider), technical office for the elderly and directors of municipal senior centres) and the facilitators - developed and clearly exposed the most important concepts of the project, ensuring their understanding by the teams.
            </p>
            <p>
                The teams of older adults (5-8 people per team) were selected with regard to diversity in age, physical condition (especially mobility), ICT skills and experience (at least one advanced and two intermediate level), and knowledge and experience in physical activities (hiking groups).
            </p>
            <p>
                In order to design two age-friendly routes in each district, a selection of the most popular destinations in the district had to be planned, agreed by consensus in each team. In the case of more than two being chosen, an order of priority had to be established.
            </p>
            <p>
                The inclusion of the age-friendly routes in the Open Government Web was accomplished by using the collaborative maps application.
            </p>
            <p>
                The facilitators designed and prepared documents to work with the teams of older people, collecting at least the following points:
            </p>
            <ul>
                <li>Information about the participants.</li>
                <li>Information about the most frequented destinations.</li>
                <li>Proposals for improvements according to the following criteria: benches, traffic lights with timing counter, curb recess, difficulty of access at bus stops, points of interest (public toilets...), and any other aspect that the senior team considers appropriate.</li>
            </ul>
            <p>
                In order to carry out the design of a route and establish the improvements to meet the requirements that define it as a friendly route, a process based on participation and agreement was developed. This process had a methodology that promotes collective intelligence through the intellectual consensus of a group, looking for the sum of criteria when establishing the improvements, to be able to define the friendly routes.
            </p>
        </div>,
        result: <div>
            <p>
                The result is a service better than the existing ones in several respects:
            </p>
            <ul>
                <li><strong>Comprehensive and relevant information supporting the planning of activities</strong> (accessibility of buildings and routes, information about toilets and benches);</li>
                <li><strong>Usable and accessible technical design for older adults.</strong> Relevant and up-to-date information facilitating the social participation of older people in the city of Zaragoza. Information may be searched via a map that is optimised for older people and via listings. All information is provided by a responsive application, which can be accessed from desktop PCs, tablets and smartphones, with particular emphasis on accessibility;</li>
                <li>In addition, the service <strong>>is based on open data</strong> (up to date, accessible via API, machine readable) and co-created data, relevant to the citizens’ needs. As the service is linked to open data the respective data providers are responsible for updates and the service provider is relieved from this job. </li>
            </ul>
            <p>
                Links:<br />
                <a href="https://www.zaragoza.es/sede/servicio/mapa-colaborativo/579" target="_blank" rel="noopener noreferrer" >https://www.zaragoza.es/sede/servicio/mapa-colaborativo/579</a>
            </p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px', justifyContent: 'center', alignItems: 'center' }}>
                <Col md={{ span: 12 }} lg={{ span: 8, offset: 3 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='zaragoza results 1' src='assets/img/case-study-results/zaragoza/1.png' style={{ width: '85%' }} />
                </Col>
                <Col md={{ span: 12 }} lg={{ span: 8, offset: 3 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='zaragoza results 2' src='assets/img/case-study-results/zaragoza/2.png' style={{ width: '85%' }} />
                </Col>
            </Row>
            <p>
                <a href="https://www.zaragoza.es/sede/servicio/mapa-colaborativo/558" target="_blank" rel="noopener noreferrer" >https://www.zaragoza.es/sede/servicio/mapa-colaborativo/558</a>
            </p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px', justifyContent: 'center', alignItems: 'center' }}>
                <Col md={{ span: 12 }} lg={{ span: 8, offset: 3 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='zaragoza results 3' src='assets/img/case-study-results/zaragoza/3.png' style={{ width: '85%' }} />
                </Col>
            </Row>
            <p>
                <a href="https://www.zaragoza.es/sede/servicio/mapa-colaborativo/579" target="_blank" rel="noopener noreferrer" >https://www.zaragoza.es/sede/servicio/mapa-colaborativo/579</a>
            </p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px', justifyContent: 'center', alignItems: 'center' }}>
                <Col lg={{ span: 12, }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='zaragoza results 1' src='assets/img/case-study-results/zaragoza/4.png' style={{ width: '85%' }} />
                </Col>
                <Col lg={{ span: 12 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='zaragoza results 2' src='assets/img/case-study-results/zaragoza/5.png' style={{ width: '85%' }} />
                </Col>
            </Row>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'caseStudy' && t.labels.includes(LABELS['AGE_FRIENDLY_ROUTES']))).map(m => m.id)
    },
    'zaragoza2': {
        site: 'zaragoza2',
        siteLabel: 'Zaragoza 2',
        appLabel: 'Co-Creating an Age-Friendly Council Website',
        appIcon: 'desktop',
        description: <div>
            <p>
                <strong>Problem focus.</strong><br />
                By the age of 65, half of the population have some type of disability, regardless of its severity. When designing websites for seniors it is necessary to take into account that many will have some of these disabilities. This affects how some aspects of the website should be designed to try to compensate for this difficulty in accessing information. </p>
            <p>
                On the other hand, the ‘web’ is young: it is only about 25 years old being popularized in the 90s. Therefore, people who were born with familiarity are the ones who handle it with greater ease and fluency. Older people did not grow up with it during their childhood or youth. This is why, for them, some current terms such as ‘web’, Facebook, or other related technologies such as smartphones, tablets, etc. can be complicated to understand and apply.
            </p>
            <p>
                The Internet is a practically universal tool among people under 45 years of age. By contrast, among people over 65, the percentage of users decreases to 20.6%; less than 24.6% of computer users. However, we can make two qualifications. In the first place, this gap is closing with time, given that in successive research it increased five percentage points. Also, the increase has been remarkable in just one year: starting from the previous 17.1%, a growth higher than we could observe in relation to the use of the computer.
            </p>
            <p>
                <strong>Value Proposition.</strong><br />
                Evaluation of the municipal website for older adults, through the technique of focus groups, in order to gain knowledge of the opinions and assessments of older people on different aspects of the web page, and to prepare proposals for improvements based on the contributions made by the participants.
            </p>
            <p>
                <strong>Limitations of existing services.</strong><br />
                The municipal website for older adults was developed many years ago without considering their needs or what information they felt should be highlighted on the main page.
            </p>
            <p>
                <strong>Field site.</strong><br />To carry out this evaluation, unique 2-hour sessions were organised with each of the groups, trying to adapt to each type:
            </p>
            <ul>
                <li>4 focus groups of people with no previous experience in the use of web pages;</li>
                <li>2 focus groups of people with some knowledge in the use of web pages;</li>
                <li>2 focus groups of people with enough experience in new technologies and, in addition, volunteers who help other elderly people.</li>
            </ul>
            <p>
                The ‘items’ were grouped in the 5 areas to be evaluated (accessibility, identity, information architecture and content), in a single set of questions, adapting the language to each level, so that the analysis was uniform in all groups. Thus, it was intended to evaluate answers to the same questions for comparability.
            </p>
            <p>
                In the 4 groups of elderly people with little or no experience in the field of new technologies, and in the 2 groups of people with some knowledge, part of the session was dedicated to offer them the necessary information to use the web page. That is, they were trained in use of the mouse and scroll bar (side scroll bar), explanation of what a web page is, and how to use it. This took from 30m to an hour depending on the level of the participants. The rest of the session was used to ask the most basic questions of the sections to analyse (accessibility, identity, information architecture, navigation and content).
            </p>
        </div>,
        process: <div>
            <p><strong>Stakeholders.</strong><br />
                The main partners and initiators of the process were local government from the City Council of Zaragoza. Two departments were involved in the process:
            </p>
            <ul>
                <li>The Senior Citizens Department</li>
                <li>The Participation, Transparency and Open Government Department.</li>
            </ul>
            <p>
                Seventy-eight people in total participated, half of them were women, 34% were between 65-70 years of age, 29% between 71 and 75, 13% were under 65, and the rest were older than 75 years old.
            </p>
            <p>
                Forty-two percent of the participants finished primary education, 26% have secondary education, 13% have studied at lower university level, and 15% at higher university levels.
            </p>
            <p>
                Seventy-six percent have no disabilities, while 15% say they have some kind of limitation and 8% have indicated that they do have limitations. Regarding the use of new technologies, 25% say they use the tablet and the mobile phone, 34% use a tablet, computer and mobile phone, and 40% say they only use their mobile phones.
            </p>
            <p><strong>Process and interventions.</strong><br />
                The City Council of Zaragoza decided to take into account the opinions of its senior citizens to evaluate the website specifically designed for them through the technique of focus groups, in order to:
            </p>
            <p>
                Gain knowledge of the opinions and assessments of older people on different aspects of the web page for senior citizens, using the criteria of usability, accessibility, identity, navigation, and content.
            <br />
                Prepare proposals for improvements to the web page, based on the contributions made by the participants.
            </p>
            <p>
                On the web, usability is a necessary condition for the success of the sites, since navigators leave the website if it is difficult to use. The City Council of Zaragoza, aware of this reality, thus decided to conduct a usability evaluation of the web page, based on the opinions of the participants.
            </p>
            <p>
                It is important to note that all the focus groups agreed with the following statement:
            </p>
            <p>
                "The web page for elderly people of the City of Zaragoza is an accessible, clear and easy to understand and use". They are generally satisfied, both with its design and its contents. However, some improvements were proposed for its usability.
            </p>
            <p>
                <strong>Accessibility</strong>. The text was valued as simple, direct, brief, visible and legible. Maintaining these characteristics, the following aspects should be improved:
            </p>
            <ul className='check'>
                <li>Increase the font size in link pages.</li>
                <li>Improve the contrast of the texts in the link pages.</li>
                <li>Facilitate the increase in the size of the text, by means of a visible icon.</li>
                <li>Increase the space between lines, facilitating the readability of the text.</li>
                <li>Highlight the visibility of the buttons by increased size and contrast.</li>
            </ul>
            <p><strong>Identity:</strong> The following aspects have been improved:</p>
            <ul className='check'>
                <li>Reinforce the identity image of the Zaragoza City Council.</li>
                <li>Introduce more elements that identify the page with the City of Zaragoza, as the logo is not enough. Use corporate colours, texts, and images of municipal identity buildings.</li>
            </ul>
            <p><strong>Navigation:</strong> The following aspects have been improved:</p>
            <ul className='check'>
                <li>Improve access to and use of drop-down menus, by using the status change attribute when moving the mouse to help identify the links.</li>
                <li>Identify the header as a way to return to the home page.</li>
                <li>What older users do not see expressly (e.g the existence of a hidden submenu) is difficult for them to imagine.</li>
            </ul>
            <p><strong>Content:</strong> The following aspects have been improved:</p>
            <ul className='check'>
                <li>Improve content to be introduced on the homepage, providing links to information such as:
                <ul>
                        <li>Urgent service phone numbers.</li>
                        <li>Memory games.</li>
                        <li>Links to others pages of elderly people (e.g IMSERSO)</li>
                        <li>Appointment ID.</li>
                        <li>Doctor’s appointment.</li>
                    </ul>
                </li>
                <li>
                    Link with the offer of cultural activities of the City Council.
                </li>
                <li>List of excursions and trips in all centres.</li>
                <li>Improve access from the home page to the list of courses/workshops in all centres.</li>
                <li>Include link with bus lines.</li>
            </ul>
        </div>,
        result: <div>
            <p>
                The result is a new website that contains all information they need and is accessible and usable.
                <br />
                <a href="https://www.zaragoza.es/sede/portal/sectores/personas-mayores/" target="_blank" rel="noopener noreferrer" >https://www.zaragoza.es/sede/portal/sectores/personas-mayores/</a>
            </p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px' }}>
                <Col md={{ lg: 18, offset: 1 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='zaragoza-2 results' src='assets/img/case-study-results/zaragoza-2/1.png' style={{ width: '85%' }} />
                </Col>
            </Row>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'caseStudy' && t.labels.includes(LABELS['AGE_FRIENDLY_COUNCIL_WEBSITE']))).map(m => m.id)
    },
    'bremenosterholz': {
        site: 'bremenosterholz',
        siteLabel: 'Bremen Osterholz',
        appLabel: 'Co-Creating a Digital Neighbourhood Guide',
        appIcon: 'tag',
        description: <div>
            <p>
                <strong>Problem focus.</strong><br />
                The broad problem focus of this case study is on social inclusion of older adults. Since older people often depend on the availability of resources in their direct physical environment, neighbourhoods play a very important role for their social inclusion. Social connections, cultural participation, support, infrastructure (i.e. shopping opportunities, doctors) as well as opportunities for outdoor activities, are crucial for the well-being of older adults. However, even if these resources exist in a neighbourhood they need to be findable and accessible to a broad range of older adults. In this case study, we identified a gap between existing resources that can support older adults’ social inclusion in the neighbourhood on the one hand, and the knowledge and awareness about these resources on the other hand.
            </p>
            <p>
                <strong>Value proposition.</strong><br />
                Enabling older adults to remain in their communities and neighbourhoods allows them the opportunity to connect and interact with other locals and to be part of a network of people looking after each other. The value proposed in this case study is better to inform older adults – regardless of their social status – about resources that facilitate their everyday lives, and thereby to help them to stay independent, socially included, active and healthy. An easy to find and usable digital district guide can support this because it is comprehensive and up-to-date. Besides the value for older adults, we propose that such a service can also support the work of intermediaries working with older adults, in that their offers are more easily found by their target group. Together with stakeholders and the target user group, we identified that besides a comprehensive information service of all institutions relevant to older adults, the particular value proposition of our service is to provide information on nice outdoor places that will facilitate outdoor activities, and represent the district in a positive and welcoming way.
            </p>
            <p>
                <strong>Limitations of existing services.</strong><br />
                There are several services that support community building and location-based neighbourhood information. In any district office, one can find dozens of flyers of a broad range of services for older adults provided by government units, welfare organisations and other NGOs. Departments of elderly care issue catalogues with information about relevant institutions and services, and there exist different kinds of district or neighbourhood guides: some with more commercial background (where to shop and spend money); others with a focus on social support. However, the advantages of e.g. searchability and findability at the same time prove disadvantageous, as they require particular mental skills and digital literacy compared to using print media. In addition, there is a need for technical devices and infrastructure which require additional technical skills and investment.
            </p>
            <p>
                <strong>Field site.</strong><br />
                The case study was conducted in the Bremen city district of Osterholz. The district is located in a suburban area and consists of six neighbourhoods, some of which were separate villages in the Middle Ages. The neighbourhoods differ highly with regard to the social status of their residents as well as in infrastructure and architecture. Whereas some neighbourhoods are known as socially deprived, and have high unemployment rates and a high proportion of migrants and their families, others can be characterised as well-off middle-class neighbourhoods. The image of the district in the rest of the city however is characterised by its reputation as socially problematic. It is the wish of many residents to improve this image.
            </p>
        </div>,
        process: <div>
            <p>
                <strong>Stakeholders.</strong><br />
                The co-creation process was managed by a team of Mobile Age researchers from the Institute of Information Management Bremen (ifib) at the University of Bremen and from the Research Institute on Technology and Disability (FTB) at the Evangelische Stiftung Volmarstein. The key local stakeholders were a team of people running a senior citizen online web blog. They worked as gatekeepers for us and in particular supported the recruitment of target users for the co-creation process. Additionally, a number of local/regional government partners participated in the process. These included:
            </p>
            <ul>
                <li>the head of local district government;</li>
                <li>three neighbourhood managers/social workers employed by the city who are responsible for the most vulnerable parts of the district;</li>
                <li>the Department for Elderly Care in the State Ministry of Social Affairs who provided data on public services (e.g. service centres, different forms of living) and further relevant data on the district; and</li>
                <li>the editorial staff of the city information provider, where the service is integrated currently.</li>
            </ul>
            <p>Most of these stakeholders were involved in order to identify other local stakeholders, support recruitment, and provide data about the district. In addition, we collaborated with social welfare organisations and other social services in order to acquire information about the district. Other organisations and individuals supported the project mainly through sharing their knowledge and thereby providing information. The editor of printed district maps for older citizens supported data collection by providing us with a template for collecting information on points of interest. In addition, the Council on Elderly People provided us the opportunity to present the project to all relevant stakeholders/intermediaries in the district and to instigate co-operation. Finally, a core-group of 11 older adults consisting of 7 females and 5 males aged 55-80 participated in the Bremen Osterholz co-creation process from June 2016 until March 2017.</p>
            <p>
                <strong>Process and interventions.</strong><br />
                We started this process with five stakeholder meetings with the different stakeholders mentioned above. In these meetings, we firstly learned about ageing in the district. This helped us to narrow down the problem focus and to gain access to our target group. With the support of these stakeholders as well as the press, we organised an information event for older adults in order to inform about the project and to recruit older adults for the process. We engaged 11 older adults who formed a core co-creation group that met regularly for a period of 9 months.
            </p>
            <p>
                As one of our first interventions, we invited our participants to document (and self-report on) their movements and their primary social networks in the district, through cultural probes. For example, participants marked their tracks/paths in the district over 7 days on seven neighbourhood maps. In addition, they completed a neighbourhood map in which they marked their own location, the locations of friends and family, the locations of important places and venues, and areas they particularly liked or disliked. Many participants were surprised by their own accounts, as they revealed that they were often less mobile than they themselves thought they were, they used their cars more often than they thought they would (instead of walking or cycling), and some realised that they travelled less distance from their home than they thought they would. On the other hand, the documentation material (in the form of diaries) and the verbal accounts of participants in interviews stressed the importance of their neighbourhood and community life for their own identity and for active participation in social life: in the form of involvement with charity work, clubs and associations.
            </p>
            <p>
                In total, we conducted 12 workshops where we defined the service concept, and worked on content, data and interface design. Together we co-created a digital neighbourhood guide that provides information about relevant and interesting items. In Bremen-Osterholz, participants were very interested in nice places and walks, informal meeting facilities, and institutions and services in the field of culture, consultancy and advice, and sports. Beyond the mere listing of objects of interest, the co-creation efforts focused on determining what kind of information about these objects was relevant and useful (‘attributes’). For example, age-related requirements such as older adults’ physical and mental capabilities (e.g. incontinence, fatigue, memory constraints) needed to be taken into account. The availability of benches and toilets as well as information about the cleanliness, accessibility and safety of places was agreed to be relevant. Information about such aspects increased participants’ confidence about ‘knowing what to expect’ and ‘planning a trip to an unknown place’. Learning about places that participants did not know beforehand also increased their positive image of the district, and strengthened the bonds with Bremen-Osterholz, as was reported during our process evaluation.
            </p>
            <p>
                Much of the data required for providing information in the neighbourhood guide was not available or not openly available. Hence, we placed much of the co-creation effort on the creation of data and its validation across multiple sources. Participants and other local stakeholders reviewed data, provided descriptions and/or pictures. The complexity and work effort required for this aspect of co-creation was what we underestimated most. For example, we engaged additional older adults in focus groups that complemented the data collection of our core-group participants. In these focus groups a total of 80 older adults that were not engaged in the core-process contributed their knowledge about the district. They thereby helped to complete the data sets about institutions in the areas of socializing, culture, counselling and sports, as well creating and/or completing textual descriptions, pictures and further information on nice places in the district. In the design phase, we held workshops with the core group where we worked with digital and paper prototyping. These workshops were mainly led by our technical partner from FTB. During the co-creation process, we held meetings with stakeholders where we validated data and discussed the progress of the service as well as questions of maintenance. Finally, we tested the prototype of the app with users before it was transferred to the city’s online portal, where it is integrated now.
            </p>
        </div>,
        result: <div>
            <p>
                The result is a digital district guide for older adults that provides information on all points of interest in the district relevant for senior inhabitants. It includes 17 ‘nice places’ and 75 organisations relevant for senior citizens. It is integrated in the official online portal of the city of Bremen [www.bremen.de/osterholz/senioren] and will be maintained there after our project finishes.
            </p>
            <p>
                Because many older adults do not yet use the internet, the content of the digital district guide has also been printed in a brochure featuring the textual and visual descriptions of the 17 nice places in the district. The booklet is distributed via the local government and local social care service providers, and reaches out to older adults who do not use digital devices.
            </p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px' }}>
                <Col md={{ span: 6, offset: 2 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='bremen-osterholz results 1' src='assets/img/case-study-results/bremen-osterholz/1.jpg' style={{ width: '75%' }} />
                </Col>
                <Col md={{ span: 6, offset: 2 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='bremen-osterholz results 2' src='assets/img/case-study-results/bremen-osterholz/2.jpg' style={{ width: '75%' }} />
                </Col>
                <Col md={{ span: 6, offset: 2 }} style={{ textAlign: 'center' }}>
                    <img alt='bremen-osterholz results 3' src='assets/img/case-study-results/bremen-osterholz/3.jpg' style={{ width: '75%' }} />
                </Col>
            </Row>
            <p>
                Because many older adults do not yet use the internet the content of the digital district guide, has also been printed in a brochure featuring the textual and visual descriptions of the 17 nice places in the district. The booklet is distributed via the local government, local social care service providers and reaches out to older adults who do not use digital devices.
            </p>
            <Row gutter={50} type='flex' style={{ marginTop: '15px', marginBottom: '15px' }}>
                <Col md={{ span: 10, offset: 7 }} className='mb-16' style={{ textAlign: 'center' }}>
                    <img alt='bremen-osterholz results 1' src='assets/img/case-study-results/bremen-osterholz/digital-service.png' style={{ width: '75%' }} />
                </Col>
            </Row>
        </div>,
        relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'caseStudy' && t.labels.includes(LABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']))).map(m => m.id)
    }
}

export const caseStudiesArray = Object.keys(caseStudies).map(function (_) { return caseStudies[_]; })
