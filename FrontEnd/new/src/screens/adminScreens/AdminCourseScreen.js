import { useEffect, useState } from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'

const AdminCourseScreen = (props) => {

  const [data ,setData]=useState([])
  useEffect(() => {
    
        const url = 'http://localhost:8080/student/courselist'
        axios
          .get(url)
          .then((response) => {
            setData(response.data)
          })
          .catch((error) => {
              console.log('err');
          })
  })

  return (
    <div>
      <header title="Add-Course"/>
      < Link to="/addCourse" className="float-end" > Add Course</Link>
    
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>CourseName</th>
           
          </tr>
        </thead>
        <tbody>
    
          {
            data.map((c) => {
            
              return (
               
                <tr>
                  <td>{c.courseId}</td>
                  <td>{c.courseName}</td>
                  <td> <button  className="btn btn-primary float-end">
       Edit
      </button></td>
      <td> <button  className="btn btn-danger float-end">
      Delete
      </button></td>
                </tr>
              ) 
            })  
            }
        </tbody>
      </table>
    </div>
  )
          }

export default AdminCourseScreen
