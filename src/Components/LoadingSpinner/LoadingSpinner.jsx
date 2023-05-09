import { CSpinner } from '@coreui/react'
import React from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className='spinner-container'><CSpinner color='secondary' variant='grow' /><CSpinner color='success' variant='grow' /><CSpinner color='danger' variant='grow' /><CSpinner color='warning' variant='grow' /><CSpinner color='light' variant='grow' /><CSpinner color='dark' variant='grow' /></div>
  )
}

export { LoadingSpinner }
