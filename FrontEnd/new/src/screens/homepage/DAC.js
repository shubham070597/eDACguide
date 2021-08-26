import React from "react"
import { MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";

const DAC = () => {
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
                <strong>Diploma in Advance Computing</strong>
              </h3>
              <ul>
       <li>The Post Graduate Diploma in Advanced Computing (PG-DAC) is the
    flagship programme of ACTS. The course is targeted towards engineers and IT</li>
    <li>Professionals who wish to venture into the domain of advanced computing. 
        The course aims to groom the students to enable them to work on current technology 
      scenarios as well as prepare them to keep pace with the changing face of technology</li>
      <li> The requirements of the growing IT industry. The course curriculum has been 
      designed keeping in view the emerging trends in advanced computing as well as the 
      contemporary and futuristic human resource requirements of the ICT industry</li>
      <li>he entire course syllabus, course ware, teaching methodology and the course 
      delivery have been derived from the rich research and development background of C-DAC.</li>
      <li>The depth and width of the course is unique in the industry covering a wide spectrum 
      of requirements of the ICT industry. Running successfully for more than twenty seven 
      years, PG-DAC course has yielded more than quarter million students, 
      who are well positioned in the industry today</li>
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

export default DAC;