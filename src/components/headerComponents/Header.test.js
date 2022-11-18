import React, { Component } from 'react';
import {render, screen } from "@testing-library/react";
import Header from "./Header";
import '@testing-library/jest-dom'





test('check for the h1 element', () => {
    render(<Header />);
    const getWeclomeText = screen.getByText(/Teamway Assessment Task/i)
    screen.debug();
    expect(getWeclomeText).toBeInTheDocument();
});
