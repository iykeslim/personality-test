import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addResponse } from '../../redux-files/actions/response';

const Question = ({question, responses, selectResponse}) => {
    const dispatch = useDispatch()


    function onClickResponse(response) {
        selectResponse(response);
        dispatch(addResponse(response))
    }
    console.log(responses)
  return (
      <Card>
             <Card.Body>
              <div data-testid="question-main" className='container'>
                  <Card.Text>{question}</Card.Text>
              <ul data-testid="responses">
                  {responses?.map((response, key) => (
                      
                      <li
                          data-testid="response"
                          key={key}
                          onClick={() => onClickResponse(response)}
                      >
                          {response.response}
                      </li>
                  ))}
              </ul>
          </div >
             </Card.Body>
      </Card>
    )
}

export default Question

