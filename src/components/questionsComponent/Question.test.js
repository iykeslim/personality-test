import React from 'react'
import '@testing-library/jest-dom'
import Question from './Question.jsx';
import { fireEvent, render, screen } from '@testing-library/react';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

const mockedDispatch = jest.fn();
const clickedOn = jest.fn();
const answers = [
        {
            answer: 'Yes, that is accurate for me',
            likelihoodscale: 3,
        },
        {
            answer:
                'I really do not care as long as no one is bothering me',
            likelihoodscale: 7,
        },
];

jest.mock('react-redux', () => ({
    useDispatch: () => mockedDispatch
}));

beforeEach(() => {
    render(<Question answers={answers} selectAnswer={clickedOn} />);
});

test("renders question component", () => {
    const qstnShow = screen.getByTestId('question-show');

    expect(qstnShow).toBeInTheDocument();
});

describe('answers', () => {
    
            test("should be clickable", () => {
                const answr = screen.getByText('Yes, that is accurate for me');
                fireEvent.click(answr);
        
                expect(clickedOn).toHaveBeenCalled();
            });
    
        test("should return the required data when clicked on", () => {
            const clickShow = screen.getByText('Yes, that is accurate for me');
            fireEvent.click(clickShow);
    
            expect(clickedOn).toHaveBeenCalledWith(answers[0]);
        });

        test("should display the answer", () => {
            const answr = screen.getByText('I really do not care as long as no one is bothering me');
            expect(answr).toBeInTheDocument();
        });

        test("should return all answers in the array", () => {
            const answersElt = screen.getAllByTestId('answers-show');

            expect(answersElt.length).toBe(1);
            expect(answersElt).toHaveLength(1);

            const answr = screen.getAllByTestId('answer-show');

            expect(answr.length).toBe(2);
            expect(answr).toHaveLength(2);
        });

});