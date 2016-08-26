import React, {PropTypes} from 'react'

import Post from './Post'

const Makes = ({makes, del, show}) => (
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
        <button
          onClick={() => { show(post.models) }}>
          Show Models</button>
    </div>
    )}
  </div>
)

Makes.propTypes = {

}

export default Makes
