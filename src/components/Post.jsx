import React, {PropTypes} from 'react'

const Post = ({name, models}) => (
  <div className="list">
  {name}
    <div>

    </div>
  </div>
)

Post.propTypes = {
  id: PropTypes.number

}

export default Post
