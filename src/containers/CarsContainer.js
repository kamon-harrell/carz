import {connect} from 'react-redux'

import Makes from '../components/Makes'

const mapStateToProps = (state) => {
  return {
    makes: state.makes
  }
}

export default connect(
  mapStateToProps
)(Makes)
