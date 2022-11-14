import React from 'react'
import { Card } from 'react-bootstrap'

export const Extrovert = () => {
  return (
    <div>
          <Card className='d-flex text-center'>
              <Card.Body>
                  <div className=''>
                      <Card.Header className='border-sm'><h3>You tend to be an EXTROVERT</h3></Card.Header>
                  </div >
              </Card.Body>
          </Card>
    </div>
  )
}
