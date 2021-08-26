import {
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

  } from '../constatnts/constants'
  export const userSignupReducer=(state ={},action)=>{
      switch(action.type){
          case USER_SIGNUP_REQUEST:
              return {loading:true}
          case USER_SIGNUP_SUCCESS:
                  return{loading:false,response:action.payload}
          case USER_SIGNUP_FAIL:
              return {loading:false,error:action.payload}
              default:
                  return state


      }
  }

  export const userSigninReducer=(state ={},action)=>{
      switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading:true}
        case USER_SIGNIN_SUCCESS:
            return{loading:false,response:action.payload,role:action.payload.role}
         case USER_SIGNIN_FAIL:
             return {loading:false,error:action.payload} 
         case USER_SIGNOUT:
             return {}
             default:
                 return state       

      }
  
  }

  export const userPaymentReducer=(state ={},action)=>{
    switch(action.type){
      case PAYMENT_ADD_REQUEST:
          return {loading:true}
      case PAYMENT_ADD_SUCCESS:
          return{loading:false,response:action.payload}
       case PAYMENT_ADD_FAIL:
           return {loading:false,error:action.payload} 
       
           default:
               return state       

    }

}

export const userConfirmReducer=(state ={},action)=>{
    switch(action.type){
      case CONFIRM_OTP_REQUEST:
          return {loading:true}
      case CONFIRM_OTP_SUCCESS:
          return{loading:false,response:action.payload}
       case CONFIRM_OTP_FAIL:
           return {loading:false,error:action.payload} 
       
           default:
               return state       

    }

}

export const checkPayReducer=(state ={},action)=>{
    switch(action.type){
      case CONFIRM_CHECK_PAY_REQUEST:
          return {loading:true}
      case CONFIRM_CHECK_PAY_SUCCESS:
          return{loading:false,response:action.payload}
       case CONFIRM_CHECK_PAY_FAIL:
           return {loading:false,error:action.payload} 
       
           default:
               return state       

    }

}