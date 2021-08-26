
import React from 'react'

import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const DMC = () => {
  return (
  <section className="text-center my-5">
    <h2 className="h1-responsive font-weight-bold my-5">
    Our Course
    </h2>
    <p className="grey-text w-responsive mx-auto mb-5">
      details
    </p>

    <MDBContainer className="d-flex flex-wrap">
      <MDBCol md="12" className="mb-4">
        <MDBCard className="card-image" style={{
                backgroundImage:
                  "url(https://mdbcdn.b-cdn.net/img/Photos/Others/img%20%2832%29.jpg)"
              }}>
          <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
            <div>
              <h6 className="purple-text">
                <MDBIcon icon="graduation-cap" />
                <strong> Education</strong>
              </h6>
              <h3 className="py-3 font-weight-bold">
                <strong>Diploma in Mobile Computing </strong>
              </h3>
              <ul>
              <li>The course is targeted towards electronics/computer
                 sciences/IT engineers who wish to venture into the
                  domain of mobile computing.</li>  
                  <li>The course aims to groom the students to enable them to work on
                           current technology scenarios as well as prepare them to keep pace with
                            the changing face of technology and requirements of an exponentially growing mobile 
                            dustry.</li>   
                   
                 </ul>   
        
              <MDBBtn color="secondary" rounded size="md">
                <MDBIcon far icon="clone" className="left" /> 
              </MDBBtn>
            </div>
          </div>
        </MDBCard>
      </MDBCol>
      
    </MDBContainer>
  </section>
  );
}

export default DMC;