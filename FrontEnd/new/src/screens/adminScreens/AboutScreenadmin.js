import Header from '../../components/header'
import { MDBCard, MDBCardBody,   MDBRow, MDBCol, MDBIcon } from 'mdbreact';


const AboutScreenadmin=(props)=>{

    const profile=sessionStorage.getItem("user")
    return(
        <div>
             
             <MDBRow>
      <MDBCol md='4'>
        <MDBCard testimonial>
          <MDBCard className='indigo lighten-1' />
          <div className='mx-auto white'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg'
              alt=''
            />
          </div>
          <MDBCardBody>
            <h4 className='card-title'>{profile.id}</h4>
            <hr />
            <p>
              <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Eos, adipisci{' '}
              <MDBIcon icon='quote-right' />
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
     
    </MDBRow>
                    </div>
    )

}

export default AboutScreenadmin