import React, {PropTypes} from 'react'

const Post = ({id}) => (
  <div>{id}</div>
)

Post.propTypes = {
  id: PropTypes.number.isRequired
}

export default Post
