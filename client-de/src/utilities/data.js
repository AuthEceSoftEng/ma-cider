export const ACTIVITY_TYPES = [
    'Informational event',
    'Preparatory meeting',
    'Co-creation event',
    'Engaging stakeholders',
    'Planning & evaluating',
    'Exploiting & disseminating',
    'Co-creating service concept',
    'Working with open data',
    'Co-creating software'
]

export const INTERVENTION_TYPES = [];//deprecated

export const PARTICIPANT_TYPES = [
    'Engagement audience', 'Local government', 'Software developer', 'Older adult', 'Researcher',
    'Service provider', 'Intermediary', 'Facilitator', 'Other organisation', 'Other individuals', 'Intern'
]

export const ACTIVITY_SUBSTAGES = [
    'Prototyping & implementation',
    'Identifying independent areas of desired functionality',
    'Agreeing on functionality to be implemented',
    'Create and integrate (open) data',
    'Continuous recruitment of additional co-creators',
    'Detailing service concept',
    'Identifying existing data',
    'Collecting, validating & quality checking data',
    'Setting-up of core project group',
    'Idea forming',
    'Continuous recruiting of additional co-creators',
    'Surveying existing services',
    'Developing a rough service concept',
    'Testing & reviewing functionality',
    'Setting up of core-project group',
    'Exploring and scoping the project',
    'Transfer and dissimination',
    'Creating & integrating data'
]

export const REQUIRED_FIELDS = {
    project: ['name', 'description', 'poster'],
    activity: ['relatedProject', 'relatedParticipants', 'name', 'type', 'substage', 'date', 'objective', 'location'],
    participant: ['name', 'type'],
    app: ['relatedProject', 'name', 'description', 'link']
}