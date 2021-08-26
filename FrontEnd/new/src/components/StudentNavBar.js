import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../actions/userActions"
import '../App.css';

const StudentNavBar = (props)=>{

  const dispatch=useDispatch()

  const onlogout=()=>{
      dispatch(
          logout()
      )


  }
    return(

        <div>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light  mb-5"  >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/homestudent">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
        {/* <Link className="nav-link" to="/module">Modual</Link> */}
        

        <Link className="nav-link" to="/getsubject" >get subject</Link>
        <Link className="nav-link" to="/gettutorial">get Tutorial</Link>
        <Link className="nav-link" to="/getreference">get Refernce book</Link>
        <Link className="nav-link" to="/quizpage">View Quiz</Link>


        <Link className="nav-link" to="/profile" >Profile</Link>
        <Link className="nav-link" to="/payment">Payment</Link>
        
        
         <button className="btn-danger  float-right"  onClick={onlogout} >LogOut</button>
        
        
       </div>
    </div>
  </div>
</nav>

 </div>

    )
}

export default StudentNavBar