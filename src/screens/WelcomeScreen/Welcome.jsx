import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './welcome.css'

const Welcome = () => {
  const navigate = useNavigate()

  function onGoClick() {
    navigate('/questions')
  }
  return (
    <div className='justify-content-center' style={{ maxWidth: '42rem' }} >
      <Card id='main-container' className='text-center shadow-sm p-3 mb-5 border-0 w-100 rounded-3'>
        <Card.Body className='rounded-3'>
          <Card.Header className='border-0 rounded-2 my-3'>Take a personality test: find out if you are an Introvert or an Extrovert</Card.Header>
          <Card.Text className='text-white-100 fs-5'>
            Only honest answers guarantee honest results
          </Card.Text>
          <Button variant="secondary border-0" className='btn btn-outline-dark btn-lg px-3 bg-light-grey' onClick={onGoClick} >Let's Go</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Welcome