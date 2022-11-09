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
            <div className='col d-flex justify-content-center centered w-50 h-90' >
                <Card id='main-container' className='h-100 text-center shadow p-3 mb-5 bg-white rounded border-0 rounded w-100'>
              <Header />
                    <Card.Body>
                        <Card.Text className='text-white-100'>
                            Only honest answers guarantee honest results
                        </Card.Text>
                        <Button variant="secondary border-0" className='btn btn-outline-dark btn-sm' onClick={onGoClick} >Let's Go</Button>
                    </Card.Body>
                </Card>
            </div>
          )
}

export default Welcome