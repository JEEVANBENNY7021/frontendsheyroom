import { Link } from "react-router-dom";
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import image from '../images/download.png'
function Landingscreen() {
  return (
    <div style={{width:"100%", height:"100vh"}} className="container-fluid landing justify-content-center">
      {/* Main SheyRooms Section */}
      <div
        className="d-flex justify-content-center align-items-center text-center py-5"
        style={{
          borderRight: "9px solid white",
          width: "100vw", // Set to 100% of the viewport width
          height: "100vh", // Set to 100% of the viewport height for vertical centering
        }}
      >
        <div  className="col-md-10 col-12 mt-7 ">
          <img 
          src={image}
  alt="Logo"
            className="img-fluid"
            style={{ width: "230px", height: "230px", }}
          />
          <div className="inline-block">
  <h2 style={{ fontSize: "70px" }} className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
    SheyRooms
  </h2>
  <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    "There is only one boss. The Guest"
  </h1>
</div>
          
          <Link to="/home">
            <button
              className="btn landingbtn"
              style={{ color: "black", border: "2px solid black" }}            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about-section">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-12">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About our services"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 col-12">
              <div className="box-contents" data-aos="fade-down">
                <h2>We Strived Only for The Best!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias! Soluta minima at itaque.
                </p>
                <h5>Sollicitudin imperdiet maecenas lorem</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet unde ipsum minima iusto rerum cum sunt quam mollitia, blanditiis similique.
                </p>
                <div className="continue-button">
                <a href="/home" className="me-5 p-2 text-white">Continue →</a>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div style={{width:"100%"}}  className="stats-section py-5 text-black">
  <div className="container bg-dark p-4">
    <div className="row text-center">
      <div className="col-md-4 col-12 mb-4">
        <h1 className="stat-count">140+</h1>
        <p className="stat-description">New Friendships</p>
      </div>
      <div className="col-md-4 col-12 mb-4">
        <h1 className="stat-count">200+</h1>
        <p className="stat-description">International Guests</p>
      </div>
      <div className="col-md-4 col-12 mb-4">
        <h1 className="stat-count">500+</h1>
        <p className="stat-description">Five Star Ratings</p>
      </div>
    </div>
  </div>
</div>



      {/* Trusted by Companies Section */}
     {/* Trusted Section */}
<div style={{width:"100%"}} className="trusted-section py-5">
  <div className="container text-center">
    <h2 className="trusted-title">
      "Companies That Have Trusted{" "}
      <span className="highlight">Panggon</span> for Conducting Meetings"
    </h2>
    <div className="logos py-3 row justify-content-center">
      <div className="col-6 col-md-2 mb-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
          alt="Google"
          className="img-fluid"
        />
      </div>
      <div className="col-6 col-md-2 mb-3">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo.png"
          alt="Slack"
          className="img-fluid"
        />
      </div>
      <div className="col-6 col-md-2 mb-3">
        <img
          src="https://th.bing.com/th/id/OIP.fQsrXnDsYfNv3kbhElADrQHaHa?rs=1&pid=ImgDetMain"
          alt="InVision"
          className="img-fluid"
        />
      </div>
      <div className="col-6 col-md-2 mb-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Airbnb"
          className="img-fluid"
        />
      </div>
      <div className="col-6 col-md-2 mb-3">
        <img
          src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Logo.png"
          alt="Stripe"
          className="img-fluid"
        />
      </div>
    </div>
  </div>
</div>

{/* Testimonials Section */}
<div style={{width:"100%" ,height:"100%"}}  className="testimonials py-5">
  <div className="container">
    <h2 className="testimonial-title text-center"> "What They Say?"</h2>
    <div className="testimonial-container row justify-content-center">
      {/* Testimonial 1 */}
      <div className="testimonial col-md-6 col-12 mb-4">
        <p className="testimonial-text">
          “Panggon.com sangat memudahkan saya dalam memesan ruangan! panggon.com memberikan rekomendasi tempat yang sesuai dengan kebutuhan kami
          dengan harga yang sangat kompetitif! Saat ini kami sudah dua kali menggunakan panggon.com dan sejauh ini kami sangat puas.”
        </p>
        <div className="testimonial-author d-flex align-items-center">
          <img
            src="https://th.bing.com/th/id/OIP.OWOJmNiEtrWZcXj-7yBISAHaJo?rs=1&pid=ImgDetMain"
            alt="Andre Henderson"
            className="author-img rounded-circle"
            style={{ width: "60px", height: "60px" }}
          />
          <div>
            <h5>Andre Henderson</h5>
            <p>Creative Director @ Google</p>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div style={{width:"100%" ,height:"100%"}}  className="testimonial col-md-6 col-12 mb-4">
        <p className="testimonial-text">
          “Luar biasa! Saya sangat terbantu dengan adanya panggon.com dalam pemesanan ruangan untuk keperluan rapat acara pelatihan saya.
          Saat ini kami sudah dua kali menggunakan panggon.com dan sejauh ini kami sangat puas.”
        </p>
        <div className="testimonial-author d-flex align-items-center">
          <img
            src="https://th.bing.com/th/id/OIP.URo52uA74MdVtdpPixGdRAHaD4?w=311&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Stewart Butterfield"
            className="author-img rounded-circle"
            style={{ width: "60px", height: "60px" }}
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


      {/* Footer Section */}
      <div className="footer py-5"  style={{ color: 'white' }}>
        <MDBFooter className="text-center text-lg-start text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-4 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div className="social-icons "  style={{ color: 'white' }}>
              <a href="https://www.facebook.com/" className="me-5 p-2 text-reset " >
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="https://x.com/i/flow/login" className="me-4 p-2 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="https://www.google.co.in/" className="me-4 p-2 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="https://www.instagram.com/" className="me-4 p-2 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="https://www.linkedin.com/" className="me-4 p-2 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
            
            </div>
          </section>

          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-4"  style={{ color: 'white' }}>
              <span>Created By Jeevan Benny ( 1/25/2025)</span>
            </div>
          </section>
        </MDBFooter>
      </div>
    </div>
  );
}

export default Landingscreen;
