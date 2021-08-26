

import React from 'react'

import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const DBDA = () => {
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
                <strong>Diploma in Big Data Analytics </strong>
              </h3>
              <ul>
<li>e-DBDA will educate the aspirants who want to make an impact in the corporate and academic
     world in the domain of big data analytics as data scientist and researcher, 
    big data leads/administrators/managers, business analysts and data visualization specialists.</li>
    <li>The students will be able to work with big data platform, utilise various big data analysis techniques 
        for useful business applications, design efficient algorithms for mining the data from large volumes, 
        analyze the HADOOP  and Map Reduce technologies associated with big data analytics,
        and explore big data applications.</li>

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

export default DBDA;