import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../../components/header'
import {  addreference } from '../../actions/adminActions'


const AddRefernceScreen =(props)=>{
    
    
    const[subjectId,setSubjectId]=useState('')
    const[bookName,setBookName]=useState('')
    const[auther,setAuther]=useState('')
    const[bookLink,setBookLink]=useState('')

    const addReference =useSelector((store)=>store.addRefe)
    const{loading,error,response}=addReference
    

    const dispatch=useDispatch()

    const addreferencebook = ()=>{
        dispatch( addreference(subjectId,bookName,auther,bookLink))
    }

    useEffect(()=>{
        if(response && response.status === 'success'){
            alert("login success")
            
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
      <label for="email">Subject Id:</label>
      <input onChange={(e) =>{setSubjectId(e.target.value)}} type="number" class="form-control" placeholder="Enter email" />
    </div>
    
     <div className="form-group">
      <label for="bookName">Book Name:</label>
      <input onChange={(e)=>{setBookName(e.target.value)}} type="text" className="form-control"  placeholder="Enter Booh name" />
    </div>

    <div className="form-group">
      <label for="auther name ">Auther:</label>
      <input onChange={(e)=>{setAuther(e.target.value)}} type="text" className="form-control"  placeholder="Enter Auther Name" />
    </div>

    <div className="form-group">
      <label for="link">Link:</label>
      <input onChange={(e)=>{setBookLink(e.target.value)}} type="text" className="form-control"  placeholder="Enter Link" />
    </div>
    
    
     
    <button onClick={addreferencebook} className="btn btn-success">ADD</button>
    
       
        {loading && <div>Waiting for response</div>}
        </div>
    )
}

export default AddRefernceScreen 