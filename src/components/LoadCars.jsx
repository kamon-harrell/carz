import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadCars = ({dispatch}) => (
  <button
    onClick={() => dispatch(fetchPosts())}>
      Fetch Cars
    </button>
)

LoadCars = connect()(LoadCars)

export default LoadCars
