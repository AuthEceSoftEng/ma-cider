import { materialsArray } from '../materials/materials'
import { CO_CREATION_PROCESS_LABELS as LABELS, METHODS_LABELS as MLABELS } from '../labels/labels'
import { methods } from '../methods/methods'
import basic from './coCreationProcessBasic'

const details =
    [
        {
            ...basic[0],
            methods: [
                MLABELS['STAKEHOLDER_ANALYSIS'],
                MLABELS['PROJECT_MANAGEMENT_PLAN'],
                MLABELS['BUSINESS_MODEL_CANVAS'],
                MLABELS['REFLECTIVE_PRACTICE'],
                MLABELS['WORKSHOP']
            ]
                .map(l => {
                    const method = methods.find(m => m.label === l);
                    return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                }),
            relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'stream' && t.labels.includes(LABELS['MANAGING_A_CO_CREATION_PROJECT']))).map(m => m.id)
        },
        {
            ...basic[1],
            methods: [
                MLABELS['INTERVIEWS'],
                MLABELS['PARTICIPANT_OBSERVATION'],
                MLABELS['SURVEYS_AND_QUESTIONNAIRES'],
                MLABELS['INFORMATION_EVENT'],
                MLABELS['REFLECTIVE_PRACTICE'],
                MLABELS['WORKSHOP']
            ]
                .map(l => {
                    const method = methods.find(m => m.label === l);
                    return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                }),
            relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'stream' && t.labels.includes(LABELS['ENGAGING_CO_CREATORS']))).map(m => m.id)
        },
        {
            ...basic[2],
            methods: [
                MLABELS['CULTURAL_PROBES'],
                MLABELS['DATA_TABLES'],
                MLABELS['FOCUS_GROUPS'],
                MLABELS['INTERVIEWS'],
                MLABELS['PARTICIPANT_OBSERVATION'],
                MLABELS['PERSONAS'],
                MLABELS['SURVEYS_AND_QUESTIONNAIRES'],
                MLABELS['WALKING_WORKSHOPS'],
                MLABELS['REFLECTIVE_PRACTICE'],
                MLABELS['WORKSHOP']
            ]
                .map(l => {
                    const method = methods.find(m => m.label === l);
                    return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                }),
            relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'stream' && t.labels.includes(LABELS['CO_CREATING_A_SERVICE_CONCEPT']))).map(m => m.id)
        },
        {
            ...basic[3],
            methods: [
                MLABELS['CONTENT_CREATION_WORKSHOP'],
                MLABELS['DATA_TABLES'],
                MLABELS['FOCUS_GROUPS'],
                MLABELS['REFLECTIVE_PRACTICE'],
                MLABELS['WORKSHOP']
            ]
                .map(l => {
                    const method = methods.find(m => m.label === l);
                    return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                }),
            relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'stream' && t.labels.includes(LABELS['WORKING_WITH_DATA']))).map(m => m.id)
        },
        {
            ...basic[4],
            methods: [
                MLABELS['INTERVIEWS'],
                MLABELS['SCENARIOS'],
                MLABELS['PROTOTYPING_PAPER_AND_DIGITAL'],
                MLABELS['KANBAN_BOARD'],
                MLABELS['SCRUM'],
                MLABELS['REFLECTIVE_PRACTICE'],
                MLABELS['WORKSHOP']
            ]
                .map(l => {
                    const method = methods.find(m => m.label === l);
                    return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                }),
            relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'stream' && t.labels.includes(LABELS['CO_CREATING_SOFTWARE']))).map(m => m.id)
        },
        {
            ...basic[5],
            methods: [
                MLABELS['PARTICIPANT_OBSERVATION'],
                MLABELS['SURVEYS_AND_QUESTIONNAIRES'],
                MLABELS['REFLECTIVE_PRACTICE'],
                MLABELS['WORKSHOP']
            ]
                .map(l => {
                    const method = methods.find(m => m.label === l);
                    return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                }),
            relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'stream' && t.labels.includes(LABELS['EVALUATING_CO_CREATION']))).map(m => m.id)
        },
        {
            ...basic[6],
            methods: [
                MLABELS['BUSINESS_MODEL_CANVAS'],
                MLABELS['REFLECTIVE_PRACTICE'],
                MLABELS['WORKSHOP']
            ]
                .map(l => {
                    const method = methods.find(m => m.label === l);
                    return method ? { text: method.name, link: `/guidebook/methods/details/${method.id}` } : { text: l }
                }),
            relatedMaterials: materialsArray.filter(m => m.tags.find(t => t.tag === 'stream' && t.labels.includes(LABELS['PROVISION_AND_MAINTENANCE']))).map(m => m.id)
        }
    ]

export default details;