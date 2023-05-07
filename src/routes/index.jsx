import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { DetailPage } from '../pages/DetailPage'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/show-detail/:id' element={<DetailPage />} />
      <Route path='*' element={<p className='not-found'>NotFound</p>} />
    </Routes>
  )
}

export { RoutesIndex }
