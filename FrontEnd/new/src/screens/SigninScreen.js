import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { signin } from '../actions/userActions'
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom';

const SigninScreen =(props)=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const userSign =useSelector((store)=>store.userSignin)
    const{loading,error,role,response}=userSign
    

    const dispatch=useDispatch()
    const onSignin = ()=>{
      dispatch(signin(email,password))
    }
useEffect(()=>{
    console.log(role)
   
    sessionStorage.setItem('role',role)
     if(response && role=="STUDENT")
     props.history.push("/homestudent")
     else if(response &&role == "ADMIN" )
     props.history.push("/homeamdin")
     else if(error)
     alert("check details")
},[loading,error,role,response])

    return(



<MDBContainer  className='mt-4'  style={{
             
             width: '28rem'
           }}>
            
           <MDBRow>
           <MDBCol md='6'>
           <MDBCard
           onChange={(e) =>{setEmail(e.target.value)}}
            className='card-image'
            style={{
              backgroundImage:
                'url(https://mdbcdn.b-cdn.net/img/Photos/Others/pricing-table7.jpg)',
              width: '28rem'
            }}
           >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> IN</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
              onChange={(e) =>{setEmail(e.target.value)}}
                label='Your email'
                group
                type='text'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
              <MDBInput
              onChange={(e)=>{setPassword(e.target.value)}}
                label='Your password'
                group
                type='password'
                validate
                labelClass='white-text'  style={{color: "#2BBBAD"}} 
              />
           
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                <div>Forgot Password ?<Link to ="/forgotepass">Forgot Password</Link></div>
                <div></div>
                  <MDBBtn  onClick={onSignin}
                    color='success'
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Sign in
                  </MDBBtn>
                  {loading && <div>Waiting for response</div>}
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Don't Have an account?
                  <Link to="/signup">Signup here</Link> 
                  
                  
                </p>
              </MDBCol>
            </div>
           </MDBCard>
           </MDBCol>
           </MDBRow>
           </MDBContainer>









      /*
        <div>
            <Header title="Signin" />
           
    
    <div className="form-group">
      <label for="email">Email:</label>
      <input onChange={(e) =>{setEmail(e.target.value)}} type="email" className="form-control" placeholder="Enter email" />
    </div>
    
     <div className="form-group">
      <label for="pwd">Password:</label>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="Enter Password" />
    </div>
    
    
     
    <button onClick={onSignin} className="btn btn-success">SignIn</button>
    <div className="float-end">
            New User? <Link to="/signup">Signup here</Link>
          </div>
            <div>Forgot Password ?<Link to ="/forgotepass">Forgot Password</Link></div>
            
    
        {loading && <div>Waiting for response</div>}
        </div>
        */
    )
}

export default SigninScreen
