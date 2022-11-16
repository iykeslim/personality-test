import React, { Component } from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import '@testing-library/jest-dom'

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));



test('check for the h1 element', () => {
    render(<Header />);
    const getWeclomeText = screen.getByText(/Teamway Assessment Task/i)
    screen.debug();
    expect(getWeclomeText).toBeInTheDocument();
});

it("calls a function to navigate to the questions screen", () => {
    render(<Header />);

    const navigtn = screen.getByTestId('testForNavgtn');
    fireEvent.click(navigtn);

    expect(mockedUsedNavigate).toHaveBeenCalled();
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
});