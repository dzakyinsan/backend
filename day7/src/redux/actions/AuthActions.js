import Axios from 'axios'
import {
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    AUTH_LOADING,
    AUTH_SYSTEM_ERROR
} from './types'
import {APIURL} from './../../helper/apiurl'


export const onUserRegister=({username,email,password})=>{
    return(dispatch)=>{
        dispatch({type:AUTH_LOADING})
        if(username===''||email===''||password===''){
            dispatch({type:AUTH_SYSTEM_ERROR,payload:'Semua form harus terisi'})
        }else{
            Axios.post(APIURL+'auth/registerver',{
                username,email,password
            }).then((res)=>{
                console.log(res)
                if(res.data.status==='error'){
                    dispatch({type:AUTH_SYSTEM_ERROR,payload:res.data.message})
                }else{
                    localStorage.setItem('username',username)
                    dispatch({type:USER_LOGIN_SUCCESS,payload:res.data})
                }
            }).catch((err)=>{
                console.log(err)
                dispatch({type:AUTH_SYSTEM_ERROR,payload:'Sistem Error'})
            })
        }
    }
}