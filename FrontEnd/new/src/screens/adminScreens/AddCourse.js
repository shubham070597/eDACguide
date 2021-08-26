import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { addCourse } from '../../actions/adminActions'


const AddCourse=(props)=>{
  const[courseName,setCourseName]=useState('')
  const[duration,setDuration]=useState('')
  const[startDate,setStartDate]=useState('')
  const[endDate,setEndDate]=useState('')

  const courseadd =useSelector((store)=>store.adminCourse)
    const{loading,error,response}=courseadd
    

    const dispatch=useDispatch()
    const onCourseAdd = ()=>{
        dispatch(addCourse(courseName,duration,startDate,endDate))
    }

  

  useEffect(()=>{
    if(response && response.status === 'success'){
        console.log(response)
         props.history.push("/AddCourse-admin")
      
    }else if (response && response.status === 'error'){
        alert(response.error)
    }else if(error){
        alert(error)
    }
},[loading,error,response])


return(
<div>

<div className="form-group">
      <label for="CourseName">CourseName:</label>
      <input onChange={(e) =>{setCourseName(e.target.value)}} type="CourseName" class="form-control" placeholder="Enter CourseName" />
    </div>
    
     <div className="form-group">
      <label for="Duration">Duration:</label>
      <input onChange={(e)=>{setDuration(e.target.value)}} type="Duration" className="form-control"  placeholder="Enter Duration" />
    </div>

    <div className="form-group">
      <label for="date">StartDate:</label>
      <input onChange={(e)=>{setStartDate(e.target.value)}} type="date" className="form-control"  placeholder="Enter Startdate" />
    </div>
    <div className="form-group">
      <label for="date">EndDate:</label>
      <input onChange={(e)=>{setEndDate(e.target.value)}} type="date" className="form-control"  placeholder="Enter Enddate" />
    </div>
    <button onClick={onCourseAdd} className="btn btn-success">AddCourse</button>
        </div>
   
)
}
export default AddCourse