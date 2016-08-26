import React, {PropTypes} from 'react'

import Post from './Post'

const Makes = ({makes, del, show}) => (
  <div>
    {makes.map((post, i) =>
    <div key={i}>
      <Post
        {...post}
      />
      <button className="btn"
        onClick={() => { show(post.models) }}>
        Show Models
      </button>
      <button className="btn-red" name={post.id} onClick={evt => {
        del(evt.target.name)
      }}>
        Delete
        </button>
        <span className="sexy_line"></span>
    </div>

    )}

  </div>
)

Makes.propTypes = {

}

export default Makes
