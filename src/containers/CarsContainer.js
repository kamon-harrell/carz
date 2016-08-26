import {connect} from 'react-redux'

import Makes from '../components/Makes'
import {deleteName} from '../actions'
import{showModel} from '../actions'

const mapStateToProps = (state) => {
  return {
    makes: state.makes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    del: makesId => dispatch(deleteName(makesId)),
    show: makesModels => dispatch(showModel(makesModels))
  }
}

export default connect(mapStateToProps,
  mapDispatchToProps)(Makes)
