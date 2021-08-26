import Header from '../components/header'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addPayment } from '../actions/userActions'

const PaymentScreen = (props) => {
    const[acctHolderName,setacctholdername]=useState('')
    const[cardNo,setcardno]=useState('')
    const[cvc,setcvc]=useState('')
    const[validUpto,setvalidupto]=useState('')
    const[paymentType,setpaymentype]=useState('')
    const[amount,setamount]=useState('')
    


     const dispatch=useDispatch()

     const payment=useSelector((store)=>store.payment)
     const{loading,response,error}=payment



     const onaddPayment = () => {
         dispatch(addPayment(acctHolderName,cardNo,cvc,validUpto,paymentType,amount))
     }

     useEffect(()=>{
      if(response){
        props.history.push('/validatepay')
      }

     },[loading,response,error])
    
    return(
<div>
  
          <Header title="Quiz Paayment " />
          <div>
          
          
          <div className="form-group">
      <label for="name">Account Holder name:</label>
      <input onChange={(e)=>{setacctholdername(e.target.value)}} type="text" className="form-control"   />
    </div>

    <div className="form-group">
      <label for="email">cardno:</label>
      <input onChange={(e)=>{setcardno(e.target.value)}} type="number" className="form-control"   />
    </div>


    <div className="form-group">
      <label for="password">cvc:</label>
      <input onChange={(e)=>{setcvc(e.target.value)}} type="password" className="form-control"  placeholder="*****" />
    </div>

    <div className="form-group">
      <label for="password">valid upto:</label>
      <input onChange={(e)=>{setvalidupto(e.target.value)}} type="text" className="form-control"  placeholder="*****" />
    </div>


    <div className="form-group">
      <label for="phone">Payment Type:</label>
      <input onChange={(e)=>{setpaymentype(e.target.value)}} type="text" className="form-control"  placeholder="" />
    </div>

    <div className="form-group">
      <label for="phone">Amount:</label>
      <input onChange={(e)=>{setamount(e.target.value)}} type="number" className="form-control"  placeholder="" />
    </div>


    <button type="submit"  onClick={onaddPayment} className="btn btn-success"> Next
        
          </button>
          
   
      {loading &&<div>waiting for result</div>}
      </div>
          </div>
    )
}

export default PaymentScreen