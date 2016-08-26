function makes (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return [
        ...action.posts
      ]

      case 'DELETE_NAME':
        const newState = [...state].filter(function(key) {
          if(key.id !== parseInt(action.name,10)){
            return key
          }
        })
        return newState


    default:
      return state
  }
}

export default makes
