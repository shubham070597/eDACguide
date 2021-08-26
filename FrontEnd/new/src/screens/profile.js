import { useState } from "react"

const Profile=(props)=>{
    const [user ,setUser]=useState(sessionStorage.getItem('user'))

    return (
        <div>
            <span>My profile</span>
         <h6 class="text-overflow m-0">Welcome {user.fName}</h6>
         <span>My First Name</span>
         <h6 class="text-overflow m-0">{user.lName}</h6>
         <span> Email</span>
         <h6 class="text-overflow m-0">Welcome {user.email}</h6>
         <span> Phone Number</span>
         <h6 class="text-overflow m-0">Welcome {user.phoneNo}</h6>
         <span> Course Id</span>
         <h6 class="text-overflow m-0">Welcome {user.courseId}</h6>
         <span> Gender</span>
         <h6 class="text-overflow m-0">Welcome {user.gender}</h6>
        
                 

    </div>
)}

export default Profile