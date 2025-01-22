import { Link } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Landingscreen() {
  return (
    <div className="row landing justify-content-center">
      {/* Main SheyRooms Section */}
      <div
        className="col-md-8 my-auto text-center"
        style={{ borderRight: "8px solid white" }}
      >
        <img
          src="https://thumbs.dreamstime.com/b/sr-letter-logo-heraldic-shield-shape-crown-vintage-black-background-template-design-343453572.jpg"
          alt="Logo"
          width="200"
          height="200"
        />
        <h2 style={{ color: "white", fontSize: "120px" }}>SheyRooms</h2>
        <h1 style={{ color: "white" }}>
          "There is only one boss. The Guest"
        </h1>
        <Link to="/home">
          <button
            className="btn landingbtn"
            style={{ color: "black" }}
          >
            Get Started
          </button>
        </Link>
      </div>

      {/* About Section */}
      <div className="about-section" id="about-section">
        <div className="container">
          <div className="about-contents">
            <div className="image-about" data-aos="fade-up">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About our services"
              />
            </div>
            <div className="box-about" data-aos="fade-down">
              <div className="box-contents">
                <h2>We Strived Only for The Best!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Architecto alias! Soluta minima at itaque.
                </p>
                <h5>Sollicitudin imperdiet maecenas lorem</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Eveniet unde ipsum minima iusto rerum cum sunt
                  quam mollitia, blanditiis similique.
                </p>
              </div>
              <div className="continue-button">
              <a href="#" className='me-5 p-2 text-reset'>Continue →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h1 className="stat-count">140+</h1>
            <p className="stat-description">New Friendships</p>
          </div>
          <div className="stat-item">
            <h1 className="stat-count">200+</h1>
            <p className="stat-description">International Guests</p>
          </div>
          <div className="stat-item">
            <h1 className="stat-count">500+</h1>
            <p className="stat-description">Five Star Ratings</p>
          </div>
        </div>
      </div>

      <div className="trusted-section">
        {/* Trusted by Companies Section */}
        <div className="trusted-companies">
          <h2 className="trusted-title">
            "Companies That Have Trusted  {" "}
            <span className="highlight">Panggon</span> for Conducting Meetings"
          </h2>
          <div className="logos">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" />
            <img src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png" alt="Slack" />
            <img src="https://th.bing.com/th/id/OIP.fQsrXnDsYfNv3kbhElADrQHaHa?rs=1&pid=ImgDetMain" alt="InVision" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" alt="Airbnb" />
            <img src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png" alt="Stripe" />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h2 className="testimonial-title"> "What They Say?"</h2>
          <div className="testimonial-container">
            {/* Testimonial 1 */}
            <div className="testimonial">
              <p className="testimonial-text">
                “Panggon.com sangat memudahkan saya dalam memesan ruangan!
                panggon.com memberikan rekomendasi tempat yang sesuai dengan kebutuhan kami
                dengan harga yang sangat kompetitif! Saat ini kami sudah dua kali menggunakan
                panggon.com dan sejauh ini kami sangat puas.”
              </p>
              <div className="testimonial-author">
                <img
                  src="https://th.bing.com/th/id/OIP.OWOJmNiEtrWZcXj-7yBISAHaJo?rs=1&pid=ImgDetMain"
                  alt="Andre Henderson"
                  className="author-img"
                />
                <div>
                  <h5>Andre Henderson</h5>
                  <p>Creative Director @ Google</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial">
              <p className="testimonial-text">
                “Luar biasa! Saya sangat terbantu dengan adanya panggon.com
                dalam pemesanan ruangan untuk keperluan rapat acara pelatihan saya.
                Saat ini kami sudah dua kali menggunakan panggon.com dan sejauh ini kami sangat puas.”
              </p>
              <div className="testimonial-author">
                <img
                  src="https://th.bing.com/th/id/OIP.URo52uA74MdVtdpPixGdRAHaD4?w=311&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="Stewart Butterfield"
                  className="author-img"
                />
                <div>
                  <h5>Stewart Butterfield</h5>
                  <p>CTO & Co-Founder @ Slack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <MDBFooter className='text-center text-lg-start text-muted p-8'>
          <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <div className='me-4 d-none d-lg-block'>
              <span>Get connected with us on social networks:</span>
            </div>

            <div style={{ margin: '20px'  }}>
              <a href='#' className='me-5 p-2 text-reset'>
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href='#' className='me-4 p-2 text-reset'>
                <MDBIcon fab icon="twitter" />
              </a>
              <a href='#' className='me-4 p-2 text-reset'>
                <MDBIcon fab icon="google" />
              </a>
              <a href='#' className='me-4 p-2 text-reset'>
                <MDBIcon fab icon="instagram" />
              </a>
              <a href='#' className='me-4 p-2 text-reset'>
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href='#' className='me-4 p-2 text-reset'>
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <img
                    src="https://thumbs.dreamstime.com/b/sr-letter-logo-heraldic-shield-shape-crown-vintage-black-background-template-design-343453572.jpg"
                    alt="Logo"
                    width="100"
                    height="100"
                  />
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="" className="me-3" />
                    SheyRooms
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                  </p>
                </MDBCol>

                 

                <MDBCol md="6" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='/' className='text-reset'>
                      Home
                    </a>
                  </p>
                  <p>
                    <a href='/home' className='text-reset'>
                      Booking
                    </a>
                  </p>
                  <p>
                    <a href='/login' className='text-reset'>
                      login
                    </a>
                  </p>
                  <p>
                    <a href='/register' className='text-reset'>
                      Register
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="5" lg="4" xl="4" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    sheyrooms@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <section className=''>
            <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="6" lg="6" xl="6" className='mx-auto mb-4'>
                  <p>
                    © {new Date().getFullYear()} Copyright:
                    <a className='text-reset fw-bold' href='https://sheyrooms.com/'>
                      sheyrooms.com
                    </a>
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
        </MDBFooter>
      </div>
    </div>
  );
}

export default Landingscreen;
