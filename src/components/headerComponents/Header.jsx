import React from "react"
import { useNavigate } from 'react-router-dom';
import teamway from './teamway.png';

const Header = () => {
const navigate = useNavigate()

const onClickRetake = () => {
  navigate('/')
}

  return (
    <div className='row'>
      <div className='col-12 my-3'>
        <h4 className='text-center' onClick={onClickRetake} role='button' data-testid='testForNavgtn'>Click to  Start Over</h4>
        <img src={teamway} className='d-block text-center mx-auto' style={{ width: '5rem' }} />
        <h1 className='display-6 text-center' data-testid="welcome">Teamway Assessment Task</h1>
      </div>
    </div>
  )
}

export default Header
