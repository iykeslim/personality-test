import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Retake = () => {
    const navigate = useNavigate()

    const onClickRetake = () => {
        navigate('/')
    }

  return (
    <div>
          <h4 className='text-center  my-3 hover-retake' style={{ fontSize: '1rem' }} onClick={onClickRetake} role='button' data-testid='testForNavgtn'><small>Click to  Start Over</small></h4>
    </div>
  )
}
