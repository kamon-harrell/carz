import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadCars = ({dispatch}) => (
  <button className="btn" id="fetchbtn"
    onClick={() => dispatch(fetchPosts())}>
      Fetch Cars
    </button>
)

LoadCars = connect()(LoadCars)

export default LoadCars
