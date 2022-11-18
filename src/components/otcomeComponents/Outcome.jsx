import React from 'react'
import { Card } from 'react-bootstrap'
import { Retake } from '../Retake.jsx'

export const Outcome = ({children, result = 'INTROVERT'}) => {
  return (
    <div>
         <Card className='d-flex text-center w-75 mx-auto border-0 rounded-3 shadow-sm'>
              <Card.Body>
                  <div>
                      <Card.Header className='rounded-2 justify-content-center align-items-center mb-2'><h2 className='justify-content-center align-items-center pt-2' >You tend to be an {result}</h2></Card.Header>
                      <Card.Text className='text-center ' style={{ lineHeight: 1.5 }}>
                            {children}
                      </Card.Text>
                  </div >
              </Card.Body>
          </Card>
          <Retake />
    </div>
  )
}
