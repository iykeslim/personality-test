import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { computeVersion, EXTROVERT, INTROVERT } from '../../providers/computeVersion.js'

const Outcome = () => {

  const responses = useSelector((state) => state.versionTest.responses)
  const version = computeVersion(responses)



  return (
    <div className='outcome-container text-center justify-content-center'>
      <Card>
        {version === EXTROVERT && (          
          <Card.Body>
          <Card.Header>
            Your personality is more EXTROVERTED
          </Card.Header>
            <Card.Text>
              Text about extroversion
            </Card.Text>
          </Card.Body>
        )}
        {version === INTROVERT && (
          <div>
            <Card.Body>
              <Card.Header>
                Your personality is more INTROVERTED
              </Card.Header>
              <Card.Text>
                Text about introversion
              </Card.Text>
            </Card.Body>
          </div>
        )}
      </Card>
   </div>
     
  )
}

export default Outcome