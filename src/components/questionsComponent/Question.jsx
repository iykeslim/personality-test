import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addAnswer } from '../../redux-files/actions/answer';
import { Retake } from '../Retake.jsx';

const Question = ({ question, answers, selectAnswer }) => {
  const dispatch = useDispatch()


  function onClickanswer(answer) {
    selectAnswer(answer);
    dispatch(addAnswer(answer))
  }
  return (
    <div data-testid="question-show">
      <Card
        className="d-flex text-center border-0"
        style={{ backgroundColor: "transparent" }}
      >
        <Card.Body>
          <div className="" style={{ backgroundColor: "transparent" }}>
            <Card.Header className='border-0'>
              <h4 className="text-white border-0" style={{ fontSize: "1.5rem" }}>
                {question}
              </h4>
            </Card.Header>
            <ul className="list-group border-0 " data-testid="answers-show">
              {answers.map((answer, key) => (
                <li
                  style={{ backgroundColor: "transparent" }}
                  className="list-group-item border-0 text-white"
                  data-testid="answer-show"
                  role="button"
                  key={key}
                  onClick={() => onClickanswer(answer)}
                >
                  {answer.answer}
                </li>
              ))}
            </ul>
          </div>
        </Card.Body>
      </Card>
      <Retake />
    </div>
  )
}

export default Question

