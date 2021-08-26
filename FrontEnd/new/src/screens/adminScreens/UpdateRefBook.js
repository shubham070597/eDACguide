import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Header from '../../components/header'
import {useDispatch,useSelector} from 'react-redux'


const UpdateRefBook=(props)=>{
const[bookName,setBookName]=useState('')
const[author,setAuthor]=useState('')
const[link,setLink]=useState('')

const refBookupdate =useSelector((store)=>store.UpdateReference)
const{loading,error,response}=refBookupdate

const dispatch=useDispatch()
const OnUpdateRefBook = ()=>{
    dispatch(UpdateRefBook(bookName,author,link))
}
    return (
<div>
<Header title="Update Subject"/>
<div className="form-group">
      <label for="bookName">Book Name:</label>
      <input onChange={(e) =>{setBookName(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    <div className="form-group">
      <label for="author">Author:</label>
      <input onChange={(e) =>{setAuthor(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    <div className="form-group">
      <label for="link">Book Link:</label>
      <input onChange={(e) =>{setLink(e.target.value)}} type="text" class="form-control" placeholder="Enter Subject name" />
    </div>
    <button onClick={OnUpdateRefBook} className="btn btn-success">Update</button>
    {loading && <div>Waiting for response</div>}
</div>
    )
}
export default UpdateRefBook