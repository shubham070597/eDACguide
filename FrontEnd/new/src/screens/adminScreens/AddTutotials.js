import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../../components/header'
import {  addtutorial } from '../../actions/adminActions'


const AddTutorialScreen =(props)=>{
    
    
    const[subjectId,setSubjectId]=useState('')
    const[tutotial,setTutorial]=useState('')

    const addTutotial =useSelector((store)=>store.addTuto)
    const{loading,error,response}=addTutotial
    

    const dispatch=useDispatch()

    const addtutotial = ()=>{
        dispatch( addtutorial(subjectId,tutotial))
    }

    useEffect(()=>{
        if(response && response.status === 'success'){
            alert("login success")
            
             this.props.history.push("/home")
        }else if (response && response.status === 'error'){
            alert(response.error)
        }else if(error){
            alert(error)
        }
    },[loading,error,response])

    return(
        <div>
            <Header title="Add Tutorial" />
           
    
    <div className="form-group">
      <label for="subjectId">Subject Id:</label>
      <input onChange={(e) =>{setSubjectId(e.target.value)}} type="number" class="form-control" placeholder="Enter suject" />
    </div>
    
     <div className="form-group">
      <label for="tutorial">Tutorial:</label>
      <input onChange={(e)=>{setTutorial(e.target.value)}} type="textarea" className="form-control"  placeholder="Enter  data" />
    </div>
    
    
     
    <button onClick={addtutotial} className="btn btn-success"><Link to="/home">ADD</Link></button>
    
       
        {loading && <div>Waiting for response</div>}
        </div>
    )
}

export default AddTutorialScreen 