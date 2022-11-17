import React from 'react'
import '@testing-library/jest-dom'
import reducer from './versionTestReducer'
import {addAnswer} from '../actions/answer'

const initialState = {
    questions: [],
    answers: []
}

const questions = [
    {
        question: 'qstn',
        answers: [
            {
                answer: 'No, I like being alone, helps me reason better',
            likelihoodscale: 2,
            },
            {
                answer:  'Most times i would rather be on my own',
            likelihoodscale: 3,
            }
        ]
    },
   
]

test("should compute appropriately", () => {
    const answerReducer = reducer(initialState, addAnswer(questions[0].answers[0]));
    expect(answerReducer.answers).toHaveLength(1);

});
