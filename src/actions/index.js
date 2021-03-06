import request from 'superagent'

export const receivePosts = (posts) => {
  console.log(posts)
  return {
    type: 'RECEIVE_POSTS',
    posts: posts
  }
}


export const deleteName = name => {
  return {
    type: 'DELETE_NAME',
    name
  }
}

export const showModel = models => {
  return {
    type: 'SHOW_MODEL',
    models
  }
}

//const key = faaaf8a7rtsa3z49dgt7ctf9

export function fetchPosts () {
  return (dispatch) => {
    request
      .get(`http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=faaaf8a7rtsa3z49dgt7ctf9`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receivePosts(res.body.makes))
      })
  }
}
