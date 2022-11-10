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
  return (
    <div>
      <Card className='shadow d-flex text-center'>
             <Card.Body>
              <div className=''>
                      <Card.Header><h1>{question}</h1></Card.Header>
                      <ul className="list-group shadow-sm">
                  {responses?.map((response, key) => (
                      
                      <li className="list-group-item"
                          role='button'
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
      </div>
    )
}

export default Question

