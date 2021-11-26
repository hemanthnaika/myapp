const initialState = {
  token: null
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log(state)
  switch (type) {
      case "LOGIN_SUCCESS":
        //   return payload
        return{
            ...state,
        auth:payload
        }
        

      case "LOGIN_FAILED":
          return {
            ...state,
            auth:payload
          }
      case "LOGOUT":
          return {
              token: null
          }

      default:
          return state
  }

}


export default authReducer