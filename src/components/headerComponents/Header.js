import React from 'react'
import { Card } from 'react-bootstrap'

const Header = () => {
  return (
      <div className='row'>
          <div className='col-12 my-3'>
            <img src='/teamway.png' className='d-block text-center mx-auto' style={{ width: '5rem' }}/>
              <h1 className='display-6 text-center'>Teamway Assessment Task</h1>
          </div>
      </div>
  )
}

export default Header