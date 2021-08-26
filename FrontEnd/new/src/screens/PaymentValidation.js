import Header from '../components/header'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOtp } from '../actions/userActions'

const PaymentOtpScreen = (props) => {
    const[otp,setOtp]=useState('')
  


     const dispatch=useDispatch()

     const otp1=useSelector((store)=>store.otp)
     const{loading,response,error}=otp1
     useEffect(()=>{
         if(response){
             console.log(response)
    props.history.push('/homestudent')
         }else if(error){
             console.log(error)
             alert('error while making API call')
         }
     },[loading,response,error])
     const onaddotp = () => {
         dispatch(confirmOtp(otp))
     }
    
    return(
        <div>
         
            <div className="form-group">
      <label for="name">OTP:</label>
      <input onChange={(e)=>{setOtp(e.target.value)}}  type="number" className="form-control" />
    </div>

    <button type="submit"  onClick={onaddotp} className="btn btn-success">Submit </button>
                    </div>
    )

}

export default PaymentOtpScreen