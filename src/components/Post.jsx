import React, {PropTypes} from 'react'

const Post = ({name}) => (
  <div>{name}</div>
)

Post.propTypes = {
  id: PropTypes.number
}

export default Post
