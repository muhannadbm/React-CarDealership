import React from 'react'

export default function About() {
    return(
        <div>
               <div  className="page-heading about-heading header-text">
      <div  className="container">
        <div  className="row">
          <div  className="col-md-12">
            <div  className="text-content">
              <h4>about us</h4>
              <h2>our company</h2>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div  className="best-features about-features">
      <div  className="container">
        <div  className="row">
          <div  className="col-md-12">
            <div  className="section-heading">
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
            </div>
          </div>
          <div  className="col-md-6">
            <div  className="right-image">
              <img src={process.env.PUBLIC_URL + "images/about-1-570x350.jpg"} alt=""></img>
            </div>
          </div>
          <div  className="col-md-6">
            <div  className="left-content">
              <h4>Lorem ipsum dolor sit amet.</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis.</p>
              <ul  className="social-icons">
                <li><a href="#"><i   className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i   className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i   className="fa fa-linkedin"></i></a></li>
                <li><a href="#"><i   className="fa fa-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}