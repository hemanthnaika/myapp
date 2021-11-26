import jwt from 'jsonwebtoken'

 export const loginUser = (email, password) => {
    // VERIFY EMAIL AND PASSWORD
    // create and sign a JWT
  if(email==='admin@gmail.com' &&password==='123' )
{
    const token=jwt.sign({email},'SeCret')
        return {
            type: "LOGIN_SUCCESS",
            payload: { token }
        }
    } else {
   
        return {
            type: "LOGIN_FAILED",
            payload: { token: null }
        }
    }
 }
