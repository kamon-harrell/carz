import React, {PropTypes} from 'react'

import Post from './Post'

const Makes = ({makes}) => (
  <div>
    {makes.map((post, i) =>
      <Post
        key={i}
        {...post}
        />
    )}
  </div>
)

Makes.propTypes = {
  makes: PropTypes.array.isRequired
}

export default Makes
