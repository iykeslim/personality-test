import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Retake} from "../Retake.jsx"

const Outcome = ({ children, result = 'INTROVERT' }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Card className="w-75 mx-auto border-0 rounded-3 shadow-sm">
        <Card.Body className="text-center">
          <div>
            <Card.Header className="bg-primary text-white rounded-2 mb-3">
              <h2 className="pt-2">You tend to be an {result}</h2>
            </Card.Header>
            <Card.Text className="text-center" style={{ lineHeight: 1.5, color: '#333' }}>
              {children}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      <Retake />
    </div>
  );
};

export default Outcome;
