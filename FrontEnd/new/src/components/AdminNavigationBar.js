
import { useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import SideNavPage from './reactNav'
import Sider from './side'
const Adminnavigation = (props)=>{
  const dispatch=useDispatch()

  const onlogout=()=>{
      dispatch(
          logout()
      )


  }

    return(

        <div>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/homeamdin">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" href="/module">Modual</a>
       
        <a className="nav-link" href="/addsubject" >Add subject</a>
        <a className="nav-link" href="/addtutorial">Add Tutorial</a>
        <a className="nav-link" href="/addque">AddQuiz Question</a>
        <a className="nav-link" href="/addreference">Add Refernce book</a>
        <a className="nav-link" href="/updateSub">update Subject </a>
        
        <span class="glyphicon glyphicon-log-out"><button onClick={onlogout} >LogOut</button></span> 

       </div>
    </div>
  </div>
</nav>
 </div>
    )
}

export default Adminnavigation