import React from 'react'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import { Retake } from './Retake.jsx';



const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

it("calls a function to navigate to the questions screen", () => {
    render(<Retake />);

    const navigtn = screen.getByTestId('testForNavgtn');
    fireEvent.click(navigtn);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
});