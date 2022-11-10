import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { computeVersion, EXTROVERT, INTROVERT } from '../../providers/computeVersion.js'

const Outcome = () => {
  const navigate = useNavigate()
  const responses = useSelector((state) => state.versionTest.responses)
  const version = computeVersion(responses)

  const onClickRetake = () => {
    navigate('/')
  }


  return (
    <div className='container text-center justify-content-center'>
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
        <Button className='btn btn-lg bg-secondary' onClick={onClickRetake}>Retake Test</Button>
      </Card>
   </div>
   
     
  )
}

export default Outcome