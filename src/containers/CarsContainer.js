import {connect} from 'react-redux'

import Makes from '../components/Makes'
import {deleteName} from '../actions'

const mapStateToProps = (state) => {
  return {
    makes: state.makes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    del: makesId => dispatch(deleteName(makesId))
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Makes)
