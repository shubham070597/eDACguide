import { useEffect } from "react"
import { Link } from "react-router-dom"
import Sider from "./side"

const Navigation = (props)=>{
  useEffect(()=>{})

    return(

        <div>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <div className="dropdown">
    <a role="button" id="dropdownMenuLink" className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                      Course
  </a>
   <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
     <li><a class="dropdown-item" href="/DAC">DAC</a></li>
     <li><a class="dropdown-item" href="/DMC">DMC</a></li>
     <li><a class="dropdown-item" href="/DBDA">DBDA</a></li>
     <li><a class="dropdown-item" href="/DAI">DAI</a></li>
   </ul>
</div>
  <a className="nav-link" href="/companies">Recruiter</a>

        <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
        
        <a className="nav-link" href="/signin">Login</a>
        <a className="nav-link" href="/signup">Sign Up</a>


       </div>
    </div>
  </div>
</nav>
 <Sider></Sider> 
 </div>
    )
}

export default Navigation