const SLABELS = {};
const CLABELS = {};
const MLABELS = {};

const materials = {
    '1': {
        id: 1,
        name: 'Understanding socio-spatial relations',
        text: 'Examples of probes for understanding socio spatial networks',
        tags: [
            { tag: 'method', labels: [MLABELS['CULTURAL_PROBES']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '2': {
        id: 2,
        name: 'Understanding social connectedness',
        text: 'Examples of probes for understanding social connectedness',
        tags: [
            { tag: 'method', labels: [MLABELS['CULTURAL_PROBES']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '3': {
        id: 3,
        name: 'Completing, Validating and Quality Checking Data',
        text: 'Example of a completed data table ',
        tags: [
            { tag: 'method', labels: [MLABELS['DATA_TABLES']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '4': {
        id: 4,
        name: 'Guiding a Focus Group for Data Collection',
        text: 'Example of a guideline for a data collection focus group',
        tags: [
            { tag: 'method', labels: [MLABELS['FOCUS_GROUPS']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '5': {
        id: 5,
        name: 'Documenting Focus Groups ',
        text: 'Example on how to document several focus groups',
        tags: [
            { tag: 'method', labels: [MLABELS['FOCUS_GROUPS']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '6': {
        id: 6,
        name: 'Guiding an Interview',
        text: 'Example of an interview guideline ',
        tags: [
            { tag: 'method', labels: [MLABELS['INTERVIEWS']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['EVALUATING_CO_CREATION'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '7': {
        id: 7,
        name: 'Observing an user test',
        text: 'Example of an observation protocol',
        tags: [
            { tag: 'method', labels: [MLABELS['PARTICIPANT_OBSERVATION']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['EVALUATING_CO_CREATION'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '8': {
        id: 8,
        name: 'Representing Older Adults in an Urban Neighbourhood',
        text: 'Example of personas in urban neighbourhoods',
        tags: [
            { tag: 'method', labels: [MLABELS['PERSONAS']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '9': {
        id: 9,
        name: 'Representing Older Adults in a Rural Area',
        text: 'Example of personas in rural areas',
        tags: [
            { tag: 'method', labels: [MLABELS['PERSONAS']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '10': {
        id: 10,
        name: 'Capture Experience with ICT',
        text: 'Example of a questionnaire on previous ICT experiences',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['EVALUATING_CO_CREATION'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '11': {
        id: 11,
        name: 'Defining Attributes of Walks',
        text: 'Example on a questionnaire on what is interesting on a walking route',
        tags: [
            { tag: 'method', labels: [MLABELS['WALKING_WORKSHOPS']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '12': {
        id: 12,
        name: 'Defining Age-Friendly Routes',
        text: 'Examples of the participatory definition of age-friendly routes',
        tags: [
            { tag: 'method', labels: [MLABELS['WALKING_WORKSHOPS']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT'], CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['AGE_FRIENDLY_ROUTES']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '13': {
        id: 13,
        name: 'Proposing improvements on walks',
        text: 'Example on material for participants to propose improvements on walking routes',
        tags: [
            { tag: 'method', labels: [MLABELS['WALKING_WORKSHOPS']] },
            { tag: 'stream', labels: [CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['AGE_FRIENDLY_ROUTES']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '14': {
        id: 14,
        name: 'Co-creating Content',
        text: 'Example of co-created videos',
        tags: [
            { tag: 'method', labels: [MLABELS['CONTENT_CREATION_WORKSHOP'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '15': {
        id: 15,
        name: 'Exemplifying use cases',
        text: 'Example of a use scenario of a digital neighbourhood guide',
        tags: [
            { tag: 'method', labels: [MLABELS['SCENARIOS'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '16': {
        id: 16,
        name: 'Paper prototyping - Element templates',
        text: 'Examples of material provided for prototyping of user interfaces',
        tags: [
            { tag: 'method', labels: [MLABELS['PROTOTYPING_PAPER_AND_DIGITAL'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '17': {
        id: 17,
        name: 'Paper prototyping - Example results',
        text: 'Examples of results of prototyping of user interfaces',
        tags: [
            { tag: 'method', labels: [MLABELS['PROTOTYPING_PAPER_AND_DIGITAL'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '18': {
        id: 18,
        name: 'Events and roles in Scrum',
        text: 'Definition of Scrum roles and events in the context of co-creation',
        tags: [
            { tag: 'method', labels: [MLABELS['SCRUM']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '19': {
        id: 19,
        name: 'Task management using a Kanban-board',
        text: 'Example of a Kanban-board',
        tags: [
            { tag: 'method', labels: [MLABELS['KANBAN_BOARD']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '20': {
        id: 20,
        name: 'User Test Questionnaire',
        text: 'Example of a questionnaire used in final usability and acceptance evaluation',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '23': {
        id: 23,
        name: 'Co-Designing a Map Interface',
        text: 'Example on materials for paper mock-ups',
        tags: [
            { tag: 'method', labels: [MLABELS['PROTOTYPING_PAPER_AND_DIGITAL'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '24': {
        id: 24,
        name: 'Describing Walks',
        text: 'Example of a walk description',
        tags: [
            { tag: 'method', labels: [MLABELS['WALKING_WORKSHOPS'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '25': {
        id: 25,
        name: 'Instruct Participants to Use Tablets',
        text: 'Example of Tablet Instructions',
        tags: [
            { tag: 'method', labels: [MLABELS['CONTENT_CREATION_WORKSHOP'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '26': {
        id: 26,
        name: 'Instruct Participants to Create Slideshows',
        text: 'Example on Slideshow Instructions',
        tags: [
            { tag: 'method', labels: [MLABELS['CONTENT_CREATION_WORKSHOP'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['WORKING_WITH_DATA']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '27': {
        id: 27,
        name: 'Inform Participants',
        text: 'Example on Participants Information Sheet',
        tags: [
            { tag: 'method', labels: [MLABELS['INFORMATION_EVENT'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['ENGAGING_CO_CREATORS']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '28': {
        id: 28,
        name: 'Get Participants Feedback on the Process',
        text: 'Example on questionnaire booklet ',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '29': {
        id: 29,
        name: 'Get to Know Participants and the District',
        text: 'Example on a Card Game',
        tags: [
            { tag: 'method', labels: [MLABELS['INFORMATION_EVENT'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['ENGAGING_CO_CREATORS']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '30': {
        id: 30,
        name: 'Survey Users about the Result',
        text: 'Example on user survey',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['german'] }
        ]
    },
    '31': {
        id: 31,
        name: 'Co-creation Planning Template',
        text: 'Example on co-creation planning template',
        tags: [
            { tag: 'method', labels: [MLABELS['REFLECTIVE_PRACTICE']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['AGE_FRIENDLY_ROUTES'], SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '32': {
        id: 32,
        name: 'Co-creation Intervention Planning Template',
        text: 'Example on intervention planning',
        tags: [
            { tag: 'method', labels: [MLABELS['REFLECTIVE_PRACTICE']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['AGE_FRIENDLY_ROUTES'], SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '33': {
        id: 33,
        name: 'Co-creation Intervention Record and Reflection Template',
        text: 'Example on intervention record & reflection template',
        tags: [
            { tag: 'method', labels: [MLABELS['REFLECTIVE_PRACTICE']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['AGE_FRIENDLY_ROUTES'], SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '34': {
        id: 34,
        name: 'Functionality testing table',
        text: 'Example of a functionality testing table',
        tags: [
            { tag: 'method', labels: [MLABELS['FUNCTIONALITY_TESTING']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['AGE_FRIENDLY_ROUTES'], SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '35': {
        id: 35,
        name: 'Accessibility testing table A',
        text: 'Example of accessibility testing table A',
        tags: [
            { tag: 'method', labels: [MLABELS['ACCESSIBILITY_TESTING']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['AGE_FRIENDLY_ROUTES'], SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '36': {
        id: 36,
        name: 'Accessibility testing table B',
        text: 'Example of accessibility testing table B',
        tags: [
            { tag: 'method', labels: [MLABELS['ACCESSIBILITY_TESTING']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE'], SLABELS['AGE_FRIENDLY_ROUTES'], SLABELS['SOCIAL_CONNECTEDNESS_APP'], SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '37': {
        id: 37,
        name: 'Understanding Demographic profile of the participants',
        text: 'Example of a questionaire on personal information',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['greek'] }
        ]
    },
    '38': {
        id: 38,
        name: 'Capture Experience with ICT (II)',
        text: 'Example of a questionnaire on previous ICT experiences',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['greek'] }
        ]
    },
    '39': {
        id: 39,
        name: 'Representing senior citizens',
        text: 'Example of personas',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES'], MLABELS['WORKSHOP']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_A_SERVICE_CONCEPT']] },
            { tag: 'caseStudy', labels: [SLABELS['HEALTH_APP']] },
            { tag: 'language', labels: ['greek'] }
        ]
    },
    '40': {
        id: 40,
        name: 'Participant survey',
        text: 'Questionnaire to collect data on participants',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '41': {
        id: 41,
        name: 'End of pilot study survey',
        text: 'Questionnaire to collect data from participants using tablet and app',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '42': {
        id: 42,
        name: 'End of co-creation evaluation survey',
        text: 'Questionnaire to collect data from co-creation participants',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '43': {
        id: 43,
        name: 'App user testing questionnaire',
        text: 'Questionnaire to collect feedback on app from public users',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '44': {
        id: 44,
        name: 'Social Connectedness App: User Testing form',
        text: 'Check-list used in user testing of social connectedness app',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '45': {
        id: 45,
        name: 'Events App User Testing Evaluation Worksheet',
        text: 'Check-list used in user testing of events app',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '46': {
        id: 46,
        name: 'Co-creation workshop feedback form',
        text: 'Example of a feedback/evaluation form',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '47': {
        id: 47,
        name: 'Interim evaluation form',
        text: 'Example interim evaluation questions for co-creation participants',
        tags: [
            { tag: 'method', labels: [MLABELS['SURVEYS_AND_QUESTIONNAIRES']] },
            { tag: 'stream', labels: [CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['SOCIAL_CONNECTEDNESS_APP']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '48': {
        id: 48,
        name: 'Technical Decision Template',
        text: 'Template for documentation of technical decisions',
        tags: [
            { tag: 'method', labels: [MLABELS['PROTOTYPING_PAPER_AND_DIGITAL']] },
            { tag: 'stream', labels: [CLABELS['CO_CREATING_SOFTWARE'], CLABELS['EVALUATING_CO_CREATION']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '49': {
        id: 49,
        name: 'Mapping stakeholders',
        text: 'Example of a Stakeholder Map',
        tags: [
            { tag: 'method', labels: [MLABELS['STAKEHOLDER_ANALYSIS']] },
            { tag: 'stream', labels: [CLABELS['MANAGING_A_CO_CREATION_PROJECT']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['english'] }
        ]
    },
    '50': {
        id: 50,
        name: 'Planning Exploitation',
        text: 'Example of a Business Model',
        tags: [
            { tag: 'method', labels: [MLABELS['BUSINESS_MODEL_CANVAS']] },
            { tag: 'stream', labels: [CLABELS['MANAGING_A_CO_CREATION_PROJECT'], CLABELS['PROVISION_AND_MAINTENANCE']] },
            { tag: 'caseStudy', labels: [SLABELS['DIGITAL_WALKING_GUIDE'], SLABELS['DIGITAL_NEIGHBOURHOOD_GUIDE']] },
            { tag: 'language', labels: ['english'] }
        ]
    }
}

const materialsArray = Object.keys(materials).map(function (_) { return materials[_]; })

const folder = './data/resources/';
const fs = require('fs');

fs.readdir(folder, (err, files) => {
    files.forEach(file => {
        const dot = file.indexOf('.');
        const newName = materials[file.substr(0, dot)].name + '.pdf'
        fs.rename(`${folder}${file}`, `${folder}${newName}`, function (err) {
            if (err) console.log('ERROR: ' + err);
        });
    });
})