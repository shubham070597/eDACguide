import React from 'react'

import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const DAI = () => {
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
                <strong>Diploma in Artificial Intelligence </strong>
              </h3>
              <ul>
      <li>The objective of the e-DAI course is to 
          present in-depth knowledge and applications 
          in Artificial Intelligence using tools and 
          case studies. </li>
          <li>Upon completion of this course, 
          participants will be empowered to use 
          computational techniques in the area of 
          Artificial Intelligence, Natural Language 
          Processing, Machine Learning 
          and Deep Learning based applications.</li>
      
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

export default DAI;