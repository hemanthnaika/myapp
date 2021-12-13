import jwt from 'jsonwebtoken'
import toast from 'react-hot-toast'
import axios from 'axios'


export const loginUser = (email, password) => async (dispatch) => {

    try {
        const base_URL='https://hemanth-e-comerce-api.herokuapp.com'

        const res = await axios.post(`${base_URL}/api/v1/auth/login`, {
            email, password
        })
        const { token, message } = res.data

        if (token) {
            toast.success('Login Success')
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { token }
            })
        } else {
            toast.error('LOGIN_FAILED')
            dispatch({
                type: "LOGIN_FAILED",
                payload: { token: null }
            })
        }
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
    }
};