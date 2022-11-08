import React from 'react'
import { Card } from 'react-bootstrap'
import Image from '../imagesComponent/Image.js'

const Header = () => {
  return (
      <div className='row'>
          <div className='container'>
            {/* <Image /> */}
              <h1 className='shadow h2'>Teamway Assessment Task</h1>
              <Card.Title className='shadow-sm text-center rounded justify-content-center' >Take a Personality Test</Card.Title>
          </div>
      </div>
  )
}

export default Header