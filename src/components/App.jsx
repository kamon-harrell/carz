import React from 'react'

import LoadCars from './LoadCars'
import CarsContainer from '../containers/CarsContainer'

const App = () => (
  <div className='app-container'>
    <LoadCars />
    <CarsContainer />
  </div>
)

export default App
