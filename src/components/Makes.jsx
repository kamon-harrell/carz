import React, {PropTypes} from 'react'

import Post from './Post'

const Makes = ({makes, del}) => (
  <div>
    {makes.map((post, i) =>
    <div key={i}>
      <Post
        {...post}
      />
      <button name={post.id} onClick={evt => {
        del(evt.target.name)
      }}>
        Del
      </button>
    </div>
    )}
  </div>
)

Makes.propTypes = { 
  makes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Makes
