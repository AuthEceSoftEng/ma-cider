/**
 * 
 * Manolis falelakis
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
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });
const { Participant } = require('../server/models');

Participant.create([
    {
        name: 'Freddy Priyatna',
        type: 'Researcher',
        explanation: 'UPM'
    },
    {
        name: 'Christopher Bull',
        type: 'Researcher',
        explanation: 'SCC'
    },
    {
        name: 'Laura Fernando',
        type: 'Researcher',
        explanation: 'ZGZ'
    },
    {
        name: 'Ophelie Durand',
        type: 'Researcher',
        explanation: 'AGE'
    },
    {
        name: 'Anindita Banerjee',
        type: 'Researcher',
        explanation: 'CSTO'
    },
    {
        name: 'Michalis Papamichail',
        type: 'Researcher',
        explanation: 'AUTH'
    },
    {
        name: 'Andreas Symeonidis',
        type: 'Researcher',
        explanation: 'AUTH'
    },
    {
        name: 'Ilias Ouzounidis',
        type: 'Researcher'
    },
    {
        name: 'Iliana Mousoudaki',
        type: 'Service provider',
        explanation: 'Gov2U'
    },
    {
        name: 'Vasiliki Zalavra',
        type: 'Service provider',
        explanation: 'Gov2U'
    }
])
    .then(participants => {
        console.log('participants created')
    })
    .catch(err => {
        console.log(err);
    })