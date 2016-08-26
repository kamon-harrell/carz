import React, {PropTypes} from 'react'

const Post = ({name, models}) => (
  <div className="list">
    <p> {name} </p>
  </div>
)

Post.propTypes = {
  id: PropTypes.number

}

export default Post
