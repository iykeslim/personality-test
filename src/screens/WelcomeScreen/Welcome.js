import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/headerComponents/Header.js';
import './welcome.css'

const Welcome = () => {
    const navigate = useNavigate()

   function onGoClick() {
       navigate('/question')
   }
  return (
      <div className='w-90' style={{ maxWidth: '40rem' }} >
                <Card id='main-container' className='text-center shadow-sm p-3 mb-5 border-0 rounded w-100 rounded-3'>
                    <Card.Body className='rounded-3'>
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