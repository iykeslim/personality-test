import React from "react"
import teamway from './teamway.png';

const Header = () => {


  return (
    <div className='row'>
      <div className='col-12 my-3'>
        <img src={teamway} className='d-block text-center mx-auto' style={{ width: '5rem' }} />
        <h1 className='display-6 text-center' data-testid="welcome">Personality Test Application</h1>
      </div>
    </div>
  )
}

export default Header
