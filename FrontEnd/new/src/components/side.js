import { Link } from 'react-router-dom';
import '../App.css';
const Sider = (props)=>{


    return(
      
		<div >
<nav className="navbar navbar-expand-lg navbar-light bg-light " style ={{backgroundColor: "#16383d"}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/home" >
   <img src="EDAC.png" className="img" style ={
    {width:'60px' }
  } alt="Cinque Terre"/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <div className="dropdown">
    <Link role="button" id="dropdownMenuLink" className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                      Course
  </Link>
   <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
     <li><Link className="dropdown-item" to="/dac">DAC</Link></li>
     <li><Link className="dropdown-item" to="/dmc">DMC</Link></li>
     <li><Link className="dropdown-item" to="/dbda">DBDA</Link></li>
     <li><Link className="dropdown-item" to="/dai">DAI</Link></li>
   </ul>
</div>
  <Link className="nav-link" to="/company">Recruiter</Link>

        <Link className="nav-link active" aria-current="page" to="/interview">Interview Questions</Link>
        
        <Link className="nav-link" to="/signin">Login</Link>
        <Link className="nav-link" to="/signup">Sign Up</Link>
      
        
      <div className="dropdown">
    <Link role="button" id="dropdownMenuLink" className="nav-link" data-bs-toggle="dropdown" aria-expanded="false">
    Syllabus
  </Link>
   <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
     <li><Link className="dropdown-item" to="/dacs">DAC </Link></li>
     <li><Link className="dropdown-item" to="/dmcs">DMC</Link></li>
     <li><Link className="dropdown-item" to="/dbdas">DBDA</Link></li>
     <li><Link className="dropdown-item" to="/dais">DAI</Link></li>
   </ul>
</div>



       </div>
    </div>
  </div>
</nav>
      

		</div>
	
	)
}
   
export default Sider