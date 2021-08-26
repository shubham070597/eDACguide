import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const ForgotPassScreen=(props)=>{

    const [email,setemail]=useState('')
    const body={
        email
    }

    const url='localhost:8080/cdac/user/forgot_pass'
    const dispatch =useDispatch()
    const onForgot=()=>{
        axios.post(url,body).then((res)=>{
            alert(res)

        }).catch()
    
        
}

useEffect(()=>{

    

},[])

    return (
        <div className="container">
            <div className="form-group">
      <label for="email">Email:</label>
      <input onChange={(e)=>{setemail(e.target.value)}} type="email" className="form-control"  placeholder="Enter Email" />
    </div>
     
    <button onClick={onForgot} className="btn btn-success">Submit</button>

        </div>
    )
}
export default ForgotPassScreen