import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css' 
import "./boots1project.css"
import pic1 from "./img3.jpg"
import pic2 from "./img2.jpg"
import pic3 from "./img1.webp"
import pic4 from "./growth.jpg"
function Boots1Project(){
    return(
    <>
    {/* navbar  */}
    {/* There is no need of using container,row,column for navbar and should be kept out of them  */}
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"red"}}
    >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <strong style={{color:"white",fontWeight: "1000"}}>Gaurav Mishra</strong>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Client</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Web development</a></li>
                  <li><a className="dropdown-item" href="#">App development</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">SEO</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
    </nav>

    {/* slider  */}
    {/* There is no need of using container,row,column for slider and should be kept out of them  */}
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{height:"460px"}}>
          <img src={pic1} style={{backgroundRepeat:"no-repeat",height:"460px"}} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic2} style={{backgroundRepeat:"no-repeat",height:"460px"}} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic3} style={{backgroundRepeat:"no-repeat",height:"460px"}} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="container-fluid">
      {/* tagline  */}
      <div className="row">
        <div className="col-12 display-6 text-center mt-5 mb-2" >
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Ullam nobis incidunt esse.
          </h3>
        </div>
      </div>

       {/* feature   */}
      <div className="row justify-content-evenly pt-3 pb-3" >
        <div className="col-md-3 text-center" >
           {/* to increase icon size we use h1   */}
         <h1> <i className="bi bi-file-code-fill  text-primary"></i> </h1>
         <h5>Built for developers</h5>
         <p>Landkit is built to make your life easier. Variables,build tooling,documentation,and reusable components.</p>
        </div>
        <div className="col-md-3 text-center"> 
          <h1><i className="bi bi-easel-fill text-danger "></i></h1 >
          <h5>Built for developers</h5>
         <p>Landkit is built to make your life easier. Variables,build tooling,documentation,and reusable components.</p>
        </div>
        <div className="col-md-3 text-center" >
          <h1><i className="bi bi-calendar-range-fill text-success "></i></h1>
          <h5>Built for developers</h5>
         <p>Landkit is built to make your life easier. Variables,build tooling,documentation,and reusable components.</p>
        </div>
        </div>

         {/* line */}
        <hr />

         {/* growth */}
        <div className="row justify-content-evenly pt-3 pb-5">
          <div className="col-md-5 pt-3" >
            <img src={pic4} style={{height:"400px"}} className="img-fluid" alt="" />
          </div>
          <div className="col-md-5 pt-3">

            <h5 className="mt-3">Website Development </h5>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" aria-label="Success example" style={{width:"95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h5 className="mt-3">App Development</h5>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" aria-label="Info example" style={{width:"70%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h5 className="mt-3">Software Development </h5>
            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" aria-label="Warning example" style={{width:"75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h5 className="mt-3">SEO</h5>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" aria-label="Danger example" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            <h5 className="mt-3">Marketing</h5>
            <div className="progress">
              <div className="progress-bar bg-primary" role="progressbar" aria-label="Danger example" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

          </div>
        </div>

         {/* contact */}
        <div className="row justify-content-evenly pt-2 pb-5" style={{backgroundColor:"#f1f1f1"}}>
          <div className="col-md-5 mt-5">
            <h3 className="mb-4">Contact Form</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="name" className="form-control" id="name" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Email Address</label>
                <input type="email" className="form-control" id="name" aria-describedby="emailHelp" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group mb-3" >
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              
              <button type="submit" className="btn btn-danger">Submit</button>
            </form>
          </div>
          <div className="col-md-5 mt-5" >
            <h3 className="mb-4">Address</h3>

            <p>
            1180 Kimberly Way, WILLISTON PARK <br />
            New York - 11596<br />
            <i className="bi bi-telephone"></i> : 917-772-5081
            </p>
         
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24174.27219844236!2d-74.04783847278969!3d40.76677473010144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25782f1042d95%3A0xba005c0f7421780!2sUnion%20City%2C%20NJ%2007087%2C%20USA!5e0!3m2!1sen!2sin!4v1669094140107!5m2!1sen!2sin" width="100%" height="250" style={{border:"0"}} 
            // allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
                
          </div>
        </div>

         {/* faq  */}
        <div className="row justify-content-evenly pt-5 pb-5">
          <div className="col-md-10">
            {/* FAQ was not getting at center despite using text-center and to make it center we use justify-content-evenly   */}
            <h3 className="text-center pb-4">FAQ</h3>
            <div className="accordion accordion-flush border" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* footer */}
        <div className="row justify-content-evenly bg-dark pt-2 pb-5 text-white"  >
          <div className="col-md-3 pt-4">
            <h5 className="pb-2">GauravMishra</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam animi voluptatum veritatis placeat nostrum. Temporibus commodi deserunt vero adipisci aliquid, explicabo eum officiis et.</p>
          </div>
          <div className="col-md-3 pt-4">
            <h5 className="pb-2">Important Links</h5>
            <p>
              <a href="#" className="link-light text-decoration-none">Home</a><br />
              <a href="#" className="link-light text-decoration-none">About Us</a><br />
              <a href="#" className="link-light text-decoration-none">Contact Us</a><br />
              <a href="#" className="link-light text-decoration-none">Our Team</a><br />
              <a href="#" className="link-light text-decoration-none">Our Client</a>
            </p>
          </div>
          <div className="col-md-3 pt-4">
            <h5 className="pb-2">Contact Us</h5>
            <p>
            1180 Kimberly Way<br />
             WILLISTON PARK <br />
            New York - 11596<br />
            <i className="bi bi-telephone"></i> : 917-772-5081
            </p>
          </div>
        </div>

        {/* copyright  */}
        <div className="row bg-secondary text-white text-center p-2" >
          <div className="col-12">
            <p>Copyright 1998-2022 by GauravMishra. All Rights Reserved.</p>
          </div>
        </div>
         {/* container end  */}
    </div>

    </>
    )
}
export default Boots1Project