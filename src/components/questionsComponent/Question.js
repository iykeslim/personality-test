import React from 'react'
import Card from 'react-bootstrap/Card';

const Question = ({question, responses, selectResponse}) => {
    function onClickResponse(response) {
        selectResponse(response);
       
    }

  return (
      <Card>
             <Card.Body>
              <div data-testid="question-main" className='container'>
                  <Card.Text>{question}</Card.Text>
              <ul data-testid="responses">
                  {responses.map((response, key) => (
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

