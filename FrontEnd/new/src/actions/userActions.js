import{
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,


    PAYMENT_ADD_FAIL,
    PAYMENT_ADD_REQUEST,
    PAYMENT_ADD_SUCCESS,

CONFIRM_OTP_REQUEST ,
 CONFIRM_OTP_SUCCESS, 
 CONFIRM_OTP_FAIL,

 CONFIRM_CHECK_PAY_REQUEST ,
 CONFIRM_CHECK_PAY_SUCCESS, 
 CONFIRM_CHECK_PAY_FAIL


}from '../constatnts/constants'

import axios from 'axios'

export const logout=()=>{
    return(dispatch)=>{
         sessionStorage.removeItem('user')
         sessionStorage.removeItem('userId')
         sessionStorage.removeItem('role')
        dispatch({type:USER_SIGNOUT})
        document.location.href='/signin'
    }
}

export const signup=(fName,lName,phoneNo, email,gender,courseId, password,confirmPassword)=>{
    return(dispatch)=>{
        dispatch({
            type:USER_SIGNUP_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
            fName,
            lName,
            phoneNo,
             email,
             gender,
             courseId,
              password,
              confirmPassword
        }
        const url='http://localhost:8080/cdac/user/register'
        axios
        .post(url,body,header)
        .then((response)=>{
            dispatch({
                type:USER_SIGNUP_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:USER_SIGNUP_FAIL,
                payload:error,
            })
        })
    }
}

export const signin=(email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:USER_SIGNIN_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
    
    const body={
        email,
        password,
    }
    const url = 'http://localhost:8080/cdac/user/login'
    axios
    .post(url,body,header)
    .then((response)=>{
        sessionStorage.setItem('userId',response.data.id)
        sessionStorage.setItem('userCourseId',response.data.courseId)
         sessionStorage.setItem('user',response.data)
        // sessionStorage.setItem('user',response.data)

        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload:response.data,
           
        })
    })
    .catch((error)=>{
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload:error,
        })

    })
}
}


export const addPayment=(acctHolderName,cardNo,cvc,validUpto,paymentType,amount)=>{
    return(dispatch)=>{
        dispatch({
            type:PAYMENT_ADD_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
            acctHolderName,cardNo,cvc,validUpto,paymentType,amount

            
        }
       var id=sessionStorage.getItem('userId')
        const url='http://localhost:8080/cdac/user/payment/'+id
        axios
        .post(url,body,header)
        .then((response)=>{
            sessionStorage.setItem("user", JSON.stringify(response.data));
            dispatch({
                type:PAYMENT_ADD_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:PAYMENT_ADD_FAIL,
                payload:error,
            })
        })
    }
}

export const confirmOtp=(otp)=>{
    return(dispatch)=>{
        dispatch({
            type:CONFIRM_OTP_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
           otp

            
        }
        var id=sessionStorage.getItem('user')
        const url='http://localhost:8080/cdac/user/addPayment/otp/'+id
        axios
        .post(url,body,header)
        .then((response)=>{
            
            dispatch({
                type:CONFIRM_OTP_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:CONFIRM_OTP_FAIL,
                payload:error,
            })
        })
    }
}



export const checkPaymet=(userId)=>{
    return(dispatch)=>{
        dispatch({
            type:CONFIRM_CHECK_PAY_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
        const body={
           userId

            
        }
        const url='http://localhost:8080/cdac/user/checkPayment/'
        axios
        .post(url,body,header)
        .then((response)=>{
            
            dispatch({
                type:CONFIRM_CHECK_PAY_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:CONFIRM_CHECK_PAY_FAIL,
                payload:error,
            })
        })
    }
}