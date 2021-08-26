import Header from '../../components/header'
import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettutorial } from '../../actions/studnetAction'
import axios from 'axios'
const TutorialScreen=(props)=>{
   
 const [data ,setData]=useState([])


 useEffect(()=>{
     const url='http://localhost:8080/cdac/student/getTutorial/1'
     axios
     .get(url)
     .then((res) => {
      setData(res.data)
     })
     .catch((err) => {
         console.log('err')
     })
 },[data])

 return(
     <div align="center" >
 
  <tr>
    <th><h3>SQL</h3></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>

  
  <tbody>
  { data.map((c) => {
               return (
                 <tr>
                 <div>{c.tutorial}</div>
                 </tr>
                 
               ) 
             })  
             }
  </tbody>


  
  
  <ul class="pagination">
 <li class="page-item"><a class="page-link" href="#">Previous</a></li>
 <li class="page-item"><a class="page-link" href="#">1</a></li>
 <li class="page-item"><a class="page-link" href="#">2</a></li>
 <li class="page-item"><a class="page-link" href="#">3</a></li>
 <li class="page-item"><a class="page-link" href="#">Next</a></li>
</ul>

</div>
 )

}

export default TutorialScreen