import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../../components/header'
import { addsubject } from '../../actions/adminActions'


const AddSubjectScreen =(props)=>{
    
    
    const[subjectName,setSubjectName]=useState('')
    const[courseId,setCourseId]=useState('')

    const addsubjec =useSelector((store)=>store.addsub)
    const{loading,error,response}=addsubjec
    

    const dispatch=useDispatch()

    const addSubject = ()=>{
        dispatch( addsubject(subjectName,courseId))
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

    const arr=[
        {id:1,course:"dac"},
        {id:2,course:"dmc"},
        {id:3,course:"big"}]

    return(
        <div>
            <Header title="Add Suject" />
           
    
    <div className="form-group">
      <label for="subjectl">Subject Name:</label>
      <input onChange={(e) =>{setSubjectName(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    
     <div className="form-group">
      <label for="courseId">Course Id:</label>
      <input onChange={(e)=>{setCourseId(e.target.value)}} type="number" className="form-control"  placeholder="Enter CourseId" />
    </div>
    <div>
 <select 
 onChange={(e)=>{setCourseId(e.target.value)}} 
 >
     {arr.map((val)=>{
         return(
    <option >{val.course}</option>
         )
})
     }
  </select>
  </div>   
    
     
    <button onClick={addSubject} className="btn btn-success">ADD</button>
    
       
        {loading && <div>Waiting for response</div>}
        </div>
    )
}

export default AddSubjectScreen 