/**
 * 
 * Manolis Falelakis
 * Anastasios kakouris
 * Juliane Jarke
 * Ulrike Gerhard
 * Herbert Kubicek
 * Dora Spyropoulou
 * Kallitsa Pantazi
 * Frank Berker
 * 
 * ~~~~~~NEW BELOW HERE~~~~
 * Freddy Priyatna UPM
 * Christopher Bull SCC
 * Laura Fernando ZGZ
 * Ophelie Durard AGE
 * Anindita Banerjee CSTO
 */

require('dotenv').config();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
const { Project, Participant, Activity } = require('../server/models');

const juliane = 'Juliane Jarke'
const falelakis = 'Manolis Falelakis'
const kakouris = 'Anastasios Kakouris'
const ulrike = 'Ulrike Gerhard'
const herbert = 'Herbert Kubicek'
const dora = 'Dora Spyropoulou'
const kallitsa = 'Kallitsa Pantazi'
const frank = 'Frank Berker'
const freddy = 'Freddy Priyatna'
const christopher = 'Christopher Bull'
const laura = 'Laura Fernando'
const ophelie = 'Ophelie Durand'
const anindita = 'Anindita Banerjee'
const michalis = 'Michalis Papamichail'
const asymeon = 'Andreas Symeonidis'
const ouzounidis = 'Ilias Ouzounidis'
const iliana = 'Iliana Mousoudaki'
const vasiliki = 'Vasiliki Zalavra'

const ALL = [juliane, falelakis, ulrike, herbert, dora, kallitsa, frank, freddy, christopher, laura, ophelie, anindita]


let PARTICIPANTS;
const getParticipantsIds = names => names.map(n => PARTICIPANTS.find(p => p.name === n)._id);

Promise.all([
    Participant.find({
        name: {
            $in: [juliane, falelakis, kakouris, ulrike, herbert, dora, kallitsa, frank, freddy, christopher, laura, ophelie, anindita, michalis, asymeon, ouzounidis, iliana, vasiliki]
        }
    }),
    Project.findOne({ name: 'Guidebook Co-Creation' })
])
    .then(([participants, project]) => {
        PARTICIPANTS = participants;
        const projectId = project._id;

        const newActivities =
            [
                {
                    relatedProject: projectId,
                    name: 'Initial Co-Creation Practice Guidebook (D1.3)',
                    type: 'Preparatory meeting',
                    substage: ['Prototyping & implementation', 'Detailing service concept'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane, kallitsa, freddy, christopher, laura]),
                    date: {
                        start: new Date('2017-01-25').toISOString(),
                        end: new Date('2017-01-25').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Initial discussion on co-creation practice guidebook'
                },
                {
                    relatedProject: projectId,
                    name: 'Technical input for Co-Creation Good Practice Guidebook (D1.3)',
                    type: 'Preparatory meeting',
                    substage: ['Prototyping & implementation', 'Detailing service concept'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane, kallitsa, freddy, christopher, laura]),
                    date: {
                        start: new Date('2017-02-08').toISOString(),
                        end: new Date('2017-02-08').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Discussion on technical input for Co-Creation Good Practice Guidebook (D1.3)'
                },
                {
                    relatedProject: projectId,
                    name: 'Structure for Co-Creation Good Practice Guidebook (D1.3)',
                    type: 'Co-creation event',
                    substage: ['Prototyping & implementation', 'Detailing service concept', 'Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane, kallitsa, freddy, christopher, laura, anindita, frank]),
                    date: {
                        start: new Date('2017-02-22').toISOString(),
                        end: new Date('2017-02-22').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Discussion on structure for Co-Creation Good Practice Guidebook (D1.3)'
                },
                {
                    relatedProject: projectId,
                    name: 'Discussion of Co-Creation Good Practice Guidebook',
                    type: 'Co-creation event',
                    substage: ['Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane, kallitsa, freddy, christopher, laura, anindita, frank]),
                    date: {
                        start: new Date('2017-03-08').toISOString(),
                        end: new Date('2017-03-08').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss the Co-Creation Good Practice Guidebook'
                },
                {
                    relatedProject: projectId,
                    name: 'Discussion of Co-Creation Good Practice Guidebook',
                    type: 'Co-creation event',
                    substage: ['Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane, kallitsa, freddy, christopher, laura, anindita]),
                    date: {
                        start: new Date('2017-04-05').toISOString(),
                        end: new Date('2017-04-05').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss the Co-Creation Good Practice Guidebook'
                },
                {
                    relatedProject: projectId,
                    name: 'Planning for meeting/co-creation workshop in Thessaloniki',
                    type: 'Co-creation event',
                    substage: ['Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane, kallitsa, freddy, christopher, laura, anindita]),
                    date: {
                        start: new Date('2017-05-03').toISOString(),
                        end: new Date('2017-05-03').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To plan the meeting/co-creation workshop in Thessaloniki'
                },
                {
                    relatedProject: projectId,
                    name: 'Initial data model discussion.',
                    type: 'Co-creation event',
                    substage: ['Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane]),
                    date: {
                        start: new Date('2017-09-14').toISOString(),
                        end: new Date('2017-09-14').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss the data model of CIDER'
                },
                {
                    relatedProject: projectId,
                    name: 'Data model revisions.',
                    type: 'Co-creation event',
                    substage: ['Agreeing on functionality to be implemented', 'Idea forming'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane]),
                    date: {
                        start: new Date('2017-09-18').toISOString(),
                        end: new Date('2017-09-18').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To revise and improve the data model of CIDER'
                },
                {
                    relatedProject: projectId,
                    name: 'Mock ups discussion. Data model revisions.',
                    type: 'Co-creation event',
                    substage: ['Agreeing on functionality to be implemented', 'Idea forming'],
                    relatedParticipants: getParticipantsIds([falelakis, juliane]),
                    date: {
                        start: new Date('2017-09-21').toISOString(),
                        end: new Date('2017-09-21').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss mock ups and revise data model of CIDER.'
                },
                {
                    relatedProject: projectId,
                    name: 'Collection of feedback on the data model from the field sites',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2017-10-04').toISOString(),
                        end: new Date('2017-10-04').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To collect feedback on the data model'
                },
                {
                    relatedProject: projectId,
                    name: 'Demonstration of a partial implementation. FTB agrees to undertake the task of developing a more user-friendly UI.',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2017-10-18').toISOString(),
                        end: new Date('2017-10-18').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Demonstration of implementation'
                },
                {
                    relatedProject: projectId,
                    name: 'Demonstration of implementation using the full data model. Q&A on the model. Field sites agree to capture their data according to the model.',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2017-11-01').toISOString(),
                        end: new Date('2017-11-01').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To demonstrate and q&a the implementation using the full data model'
                },
                {
                    relatedProject: projectId,
                    name: 'Data model and mock up revisions',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([juliane, falelakis]),
                    date: {
                        start: new Date('2017-11-01').toISOString(),
                        end: new Date('2017-11-01').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To revise the datamodel and mockups'
                },
                {
                    relatedProject: projectId,
                    name: 'Definition of example queries for analysis',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([juliane, falelakis]),
                    date: {
                        start: new Date('2017-11-07').toISOString(),
                        end: new Date('2017-11-07').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Definition of example queries for analysis'
                },
                {
                    relatedProject: projectId,
                    name: 'Discussion on the User Interface',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([juliane, falelakis, frank]),
                    date: {
                        start: new Date('2017-11-07').toISOString(),
                        end: new Date('2017-11-07').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss the user interface of CIDER'
                },
                {
                    relatedProject: projectId,
                    name: 'User Interface discussion and feedback.',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([falelakis, frank]),
                    date: {
                        start: new Date('2017-11-09').toISOString(),
                        end: new Date('2017-11-09').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss the user interface'
                },
                {
                    relatedProject: projectId,
                    name: 'User Interface discussion and feedback.',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([falelakis, frank, michalis, juliane]),
                    date: {
                        start: new Date('2017-11-13').toISOString(),
                        end: new Date('2017-11-13').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss the user interface'
                },
                {
                    relatedProject: projectId,
                    name: 'CIDER to support field site reporting and comparison across field sites.',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2017-11-15').toISOString(),
                        end: new Date('2017-11-15').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Data from Bremen and Thessaloniki has been incorporated. Lancaster and Zaragoza data soon to be. Discussion on user data protection. '
                },
                {
                    relatedProject: projectId,
                    name: 'Platform presentation, including demonstration',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2017-11-22').toISOString(),
                        end: new Date('2017-11-22').toISOString()
                    },
                    location: 'Madrid',
                    objective: 'Co-creation platform Session.Platform presentation, including demonstration. Feedback from all partners.'
                },
                {
                    relatedProject: projectId,
                    name: 'Demonstration of the web interface and repositories.',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([falelakis, michalis, frank]),
                    date: {
                        start: new Date('2017-11-27').toISOString(),
                        end: new Date('2017-11-27').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss and demonstrate the web interface and repositories.'
                },
                {
                    relatedProject: projectId,
                    name: 'Demonstration of the web interface and discussion of next steps.',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([falelakis, michalis, frank]),
                    date: {
                        start: new Date('2017-12-04').toISOString(),
                        end: new Date('2017-12-04').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss and demonstrate the web interface and next steps.'
                },
                {
                    relatedProject: projectId,
                    name: 'Demonstration of the web interface and discussion of next steps. (II)',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2017-12-13').toISOString(),
                        end: new Date('2017-12-13').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss and demonstrate the web interface and next steps.'
                },
                {
                    relatedProject: projectId,
                    name: 'Presented CIDER front-end design',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds([juliane, falelakis, frank]),
                    date: {
                        start: new Date('2018-04-11').toISOString(),
                        end: new Date('2018-04-11').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To present CIDER Front-end Design'
                },
                {
                    relatedProject: projectId,
                    name: 'Guidebook discussion',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-04-25').toISOString(),
                        end: new Date('2018-04-25').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Guidebook discussion'
                },
                {
                    relatedProject: projectId,
                    name: 'Guidebook discussion (videos)',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-05-09').toISOString(),
                        end: new Date('2018-05-09').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Guidebook discussion'
                },
                {
                    relatedProject: projectId,
                    name: 'Agreement on general functionality of guidebook',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Agreeing on functionality to be implemented',],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-05-16').toISOString(),
                        end: new Date('2018-05-16').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Agreement on general functionality of guidebook'
                },
                {
                    relatedProject: projectId,
                    name: 'Interactive guidebook contract discussion',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-05-30').toISOString(),
                        end: new Date('2018-05-30').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Interactive guidebook contract discussion'
                },
                {
                    relatedProject: projectId,
                    name: 'Interactive guidebook contract discussion (II)',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-06-13').toISOString(),
                        end: new Date('2018-06-13').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Interactive guidebook contract discussion'
                },
                {
                    relatedProject: projectId,
                    name: 'How to co-create the CIDER platform',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-06-27').toISOString(),
                        end: new Date('2018-06-27').toISOString()
                    },
                    location: 'Skype',
                    objective: 'How to co-create the CIDER platform'
                },
                {
                    relatedProject: projectId,
                    name: 'How to co-create the CIDER platform (II)',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-07-25').toISOString(),
                        end: new Date('2018-07-25').toISOString()
                    },
                    location: 'Skype',
                    objective: 'How to co-create the CIDER platform'
                },
                {
                    relatedProject: projectId,
                    name: 'Discussion of UI/UX of CIDER',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds([kakouris, falelakis, ouzounidis, asymeon]),
                    date: {
                        start: new Date('2018-09-03').toISOString(),
                        end: new Date('2018-09-03').toISOString()
                    },
                    location: 'Thessaloniki',
                    objective: 'To discuss UI/UX of CIDER'
                },
                {
                    relatedProject: projectId,
                    name: 'Discussed co-creation model & how to fit to Guidebook',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds([juliane, falelakis]),
                    date: {
                        start: new Date('2018-09-05').toISOString(),
                        end: new Date('2018-09-05').toISOString()
                    },
                    location: 'Skype',
                    objective: 'To discuss co-creation model & how to fit to Guidebook'
                },
                {
                    relatedProject: projectId,
                    name: 'Revised stakeholder groups & roles',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds([juliane, falelakis]),
                    date: {
                        start: new Date('2018-09-10').toISOString(),
                        end: new Date('2018-09-10').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Revised stakeholder groups & roles'
                },
                {
                    relatedProject: projectId,
                    name: 'Revised co-creation model',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds([juliane, falelakis]),
                    date: {
                        start: new Date('2018-09-20').toISOString(),
                        end: new Date('2018-09-20').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Revised co-creation model'
                },
                {
                    relatedProject: projectId,
                    name: 'Revised co-creation model (II)',
                    type: 'Co-creation event',
                    substage: ['Idea forming'],
                    relatedParticipants: getParticipantsIds([juliane, falelakis]),
                    date: {
                        start: new Date('2018-09-24').toISOString(),
                        end: new Date('2018-09-24').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Revised co-creation model'
                },
                {
                    relatedProject: projectId,
                    name: 'Discussed & improved front-end design',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Detailing service concept', 'Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([juliane, falelakis, dora, iliana, vasiliki, kakouris]),
                    date: {
                        start: new Date('2018-10-29').toISOString(),
                        end: new Date('2018-10-29').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Discussed & improved front-end design'
                },
                {
                    relatedProject: projectId,
                    name: 'Further development discussion',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Detailing service concept', 'Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([falelakis, christopher, juliane]),
                    date: {
                        start: new Date('2018-12-05').toISOString(),
                        end: new Date('2018-12-05').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Further development discussion'
                },
                {
                    relatedProject: projectId,
                    name: 'Further development discussion (II)',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Detailing service concept', 'Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds([falelakis, christopher, juliane]),
                    date: {
                        start: new Date('2018-12-05').toISOString(),
                        end: new Date('2018-12-05').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Further development discussion'
                },
                {
                    relatedProject: projectId,
                    name: 'Preparation of Excel sheets and documentation to be used',
                    type: 'Co-creation event',
                    substage: ['Idea forming', 'Detailing service concept', 'Agreeing on functionality to be implemented'],
                    relatedParticipants: getParticipantsIds(ALL),
                    date: {
                        start: new Date('2018-12-13').toISOString(),
                        end: new Date('2018-12-13').toISOString()
                    },
                    location: 'Skype',
                    objective: 'Preference for interactive guidebook version. Excel sheets and documentation to be used until the platform plans are concrete.'
                }
            ]
        return Activity.create(newActivities)
    })
    .then(activities => {
        console.log('activities created')
    })
    .catch(err => {
        console.log(err)
    })