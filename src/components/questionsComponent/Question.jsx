import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addanswer } from '../../redux-files/actions/answer';

const Question = ({ question, answers, selectanswer }) => {
  const dispatch = useDispatch()


  function onClickanswer(answer) {
    selectanswer(answer);
    dispatch(addanswer(answer))
  }
  return (
    <div>
      <Card className='shadow d-flex text-center'>
        <Card.Body>
          <div className=''>
            <Card.Header><h4>{question}</h4></Card.Header>
            <ul className="list-group shadow-sm">
              {answers.map((answer, key) => (

                <li className="list-group-item"
                  role='button'
                  key={key}
                  onClick={() => onClickanswer(answer)}
                >
                  {answer.answer}
                </li>
              ))}
            </ul>
          </div >
        </Card.Body>
      </Card>
    </div>
  )
}

export default Question

