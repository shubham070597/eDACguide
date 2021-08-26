import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'

const UpdateSubject=(props)=>{
const[subjectName,setSubjectName]=useState('')
const[CourseId,setCouseId]=useState('')
const[subjectId,setSubjectId]=useState('')
const[data,setData]=useState([])
const subupdate =useSelector((store)=>store.UpdateSubject)
const{loading,error,response}=subupdate

const dispatch=useDispatch()
const updateSubject = ()=>{
    dispatch(updateSubject(subjectName))
}

useEffect(()=>{
    var url='http://localhost:8080/student/getSubjectList'
    axios.get(url)
    .then(res =>{
        console.log(res)
        setData(res.data.result)
        
    })
    .catch(err => {
        console.log(err)
    })
},[])
    return (


        
<div>
<Header title="Update Subject"/>
<div className="form-group">
      <label for="subjectl">Subject Name:</label>
      <input onChange={(e) =>{setSubjectName(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    <div className="form-group">
      <label for="courseId">CourseId</label>
      <input onChange={(e) =>{setCouseId(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    <div className="form-group">
      <label for="subjectId">subjectId</label>
      <input onChange={(e) =>{setSubjectId(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    <button onClick={updateSubject} className="btn btn-success">Update</button>
    {loading && <div>Waiting for response</div>}
</div>
    )
}
export default UpdateSubject