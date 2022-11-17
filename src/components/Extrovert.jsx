import React from 'react'
import { Card } from 'react-bootstrap'

export const Extrovert = () => {
  return (
    <div>
      <Card className='d-flex text-center w-50 mx-auto border-0 rounded-3 shadow-sm'>
              <Card.Body>
                  <div>
            <Card.Header className='rounded-2 justify-content-center align-items-center mb-2'><h2 className='justify-content-center align-items-center pt-2'>You tend to be an EXTROVERT</h2></Card.Header>
                      <Card.Text className='text-center'>
                        
                You are energized by and thrive off being around peopple: social activities bring out the best in you; you are more of an expressive person even when you are around strangers; you do well working in a group and you don't like being by yourself - that is when boredom steps in.
                        
                      </Card.Text>
                  </div >
              </Card.Body>
          </Card>
    </div>
  )
}
