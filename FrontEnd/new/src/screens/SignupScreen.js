import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import { signup } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const SignupScreen = (props) => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
     const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('')
    const [course, setCourse] = useState('')
    const dispatch = useDispatch()

    const notify = () => toast("'please check password'");
    const userSignup = useSelector((store) => store.userSignup)
  const { loading, response, error } = userSignup

  useEffect(() => {
    
    if (response && response.status == 'success') {
      
      props.history.push('/signin')
    } else if (error) {
    
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    if(password==confirmPassword)
    dispatch(signup(fname,lname,phone, email,gender,course, password,confirmPassword))
    else notify()
  }
  
  return(
    
<MDBContainer className='mt-4' style={{
             
             width: '28rem'
           }}>
      <MDBRow>
        <MDBCol md='6'>
          <MDBCard
            className='card-image'
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)',
                
              width: '28rem'
            }}
          >
            <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
              <div className='text-center'>
                <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                  <strong>SIGN</strong>
                  <a href='#!' className='green-text font-weight-bold'>
                    <strong> UP</strong>
                  </a>
                </h3>
              </div>
              <MDBInput
              
                label='Your First Name'
                onChange={(e)=>{setFname(e.target.value)}}
                group
                
                type='text'
                validate
                labelClass='white-text'
                style={{color: "#FFFFFF"}}
              />
              <MDBInput
              
              label='Your Last Name'
              onChange={(e)=>{setLname(e.target.value)}}
              group
              type='text'
              validate
              labelClass='white-text'
              style={{color: "#FFFFFF"}}
            />
              <MDBInput
              
                label='Your email'
                group
                type='email'
                validate
                labelClass='white-text'
                style={{color: "#FFFFFF"}}
              />
               <MDBInput
              
              label='Your Phone'
              onChange={(e)=>{setPhone(e.target.value)}}
              group
              type='text'
              validate
              labelClass='white-text'
              style={{color: "#FFFFFF"}}
            />
             <MDBInput
              
              label='Your Gender'
              onChange={(e)=>{setGender(e.target.value)}}
              group
              type='text'
              validate
              labelClass='white-text'
              style={{color: "#FFFFFF"}}
            />
            <MDBInput
              
              label='Your Course'
              onChange={(e)=>{setCourse(e.target.value)}}
              group
              type='text'
              validate
              labelClass='white-text'
              style={{color: "#FFFFFF"}}
            />
            
              
              <MDBInput
                label='Your password'
                onChange={(e)=>{setPassword(e.target.value)}}
                group
                type='password'
                validate
                labelClass='white-text'
                style={{color: "#FFFFFF"}}
              />
              <MDBInput
                label='Your Confirm password'
                onChange={(e)=>{setConPassword(e.target.value)}}
                group
                type='password'
                validate
                labelClass='white-text'
                style={{color: "#FFFFFF"}}
              />

              
            
              <MDBRow className='d-flex align-items-center mb-4'>
                <div className='text-center mb-3 col-md-12'>
                  <MDBBtn
                    color='success'
                    onClick={onSignup}
                    rounded
                    type='button'
                    className='btn-block z-depth-1'
                  >
                    Sign Up
                  </MDBBtn>
                </div>
              </MDBRow>
              <MDBCol md='12'>
                <p className='font-small white-text d-flex justify-content-end'>
                  Have an account?
                  <a href='/signin' className='green-text ml-1 font-weight-bold'>
                    Log in
                  </a>
                </p>
              </MDBCol>
            </div>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


    /*
      <div>
          <Header title="SignUp" />

          <div className="form-group">
      <label for="fname">firstName:</label>
      <input onChange={(e)=>{setFname(e.target.value)}} type="text" className="form-control"  placeholder="First Name" />
    </div>
    <div className="form-group">
      <label for="lname">lastName:</label>
      <input onChange={(e)=>{setLname(e.target.value)}} type="text" className="form-control"  placeholder="LastName" />
    </div>
    <div className="form-group">
      <label for="email">Email:</label>
      <input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control"  placeholder="......@gmail.com" />
    </div>
    <div className="form-group">
      <label for="phone">Phone:</label>
      <input onChange={(e)=>{setPhone(e.target.value)}} type="text" className="form-control"  placeholder="94563117" />
    </div>
    <div className="form-group">
      <label for="gender">Gender:</label>
      <input onChange={(e)=>{setGender(e.target.value)}} type="text" className="form-control"  placeholder="94563117" />
    </div>
    <div className="form-group">
      <label for="course">Course:</label>
      <input onChange={(e)=>{setCourse(e.target.value)}} type="text" className="form-control"  placeholder="94563117" />
    </div>
    <div className="form-group">
      <label for="password">Passsword:</label>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password" className="form-control"  placeholder="*****" />
    </div>
    <div className="form-group">
      <label for="confPassword">Confirm Passsword:</label>
      <input onChange={(e)=>{setConPassword(e.target.value)}} type="password" className="form-control"  placeholder="*****" />
      
    </div>
<div className ="container" style={{color: "red" }}><ToastContainer /></div>

  
    <button onClick={onSignup} className="btn btn-success" >
            Singup
          </button>
          <div className="float-end">
            Existing user? <Link to="/signin">Signin here</Link>
          </div>
   
      {userSignup.loading &&<div>waiting for result</div>}
      </div> */
  )
}


export default SignupScreen


