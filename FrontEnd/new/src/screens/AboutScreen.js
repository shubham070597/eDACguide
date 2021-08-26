import Header from '../components/header'

import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const AboutScreen=(props)=>{
    return(
        <div>
             <MDBContainer >
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6147053/pexels-photo-6147053.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/6001831/pexels-photo-6001831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://images.pexels.com/photos/5538618/pexels-photo-5538618.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
            <Header title="About"/>
                    </div>
    )

}

export default AboutScreen