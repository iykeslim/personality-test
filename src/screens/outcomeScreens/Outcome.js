import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { computeVersion, EXTROVERT, INTROVERT } from '../../providers/computeVersion.js'
import './outcome.css'

const Outcome = () => {
  const navigate = useNavigate()
  const responses = useSelector((state) => state.versionTest.responses)
  const version = computeVersion(responses)

  const onClickRetake = () => {
    navigate('/', {replace: true})
  }
  console.log(responses)
  console.log(version)


  return (
    <div className='outcome-container'>
      <Card className='question-container'>
        {version === EXTROVERT && (          
          <Card.Body>
          <Card.Header>
            You are most likely an EXTROVERT
          </Card.Header>
            <Card.Text>
              hfjhzbjdfvzuhiofbjzbdj jdzjif hhjdhf jhdofo  fgviuavbidhifjijbvijbdifv jhidbfihibdifhbivjbid fgiiugiurtggbbvjhiuhdiuygfyugiherjh hgibebfihguguygruowijefoiajndjvbj  yvhdhvtafuehwiuiuhbigfuyg  hg8yyr8ytghbiaubuidgfyauhjwjbiaytgyefauwyteufgttuyijbc 
            </Card.Text>
          </Card.Body>
        )}
        {version === INTROVERT && (
          <div>
            <Card.Body>
              <Card.Header>
                You are more likely an INTROVERT
              </Card.Header>
              <Card.Text className='text-center'>
                Text about introversion
              </Card.Text>
            </Card.Body>
          </div>
        )}
        <a className='bg-light-grey border-0 outline-none text-center text-white text-decoration-none' role='button' onClick={onClickRetake}>Retake Test</a>
      </Card>
   </div>
   
     
  )
}

export default Outcome