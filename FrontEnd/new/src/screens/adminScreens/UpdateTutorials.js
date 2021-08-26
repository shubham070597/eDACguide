import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import {useDispatch,useSelector} from 'react-redux'


const UpdateTutorials=(props)=>{
const[tutorials,setTutorials]=useState('')

const tutoupdate =useSelector((store)=>store.UpdateTutorials)
const{loading,error,response}=tutoupdate

const dispatch=useDispatch()
const OnUpdateTutorials = ()=>{
    dispatch(UpdateTutorials(tutorials))
}
    return (
<div>
<Header title="Update Subject"/>
<div className="form-group">
      <label for="subjectl">Tutorials:</label>
      <input onChange={(e) =>{setTutorials(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    <button onClick={OnUpdateTutorials} className="btn btn-success">Update</button>
    {loading && <div>Waiting for response</div>}
</div>
    )
}
export default UpdateTutorials