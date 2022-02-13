import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'

export default function Home () {
    const [index, setIndex] = useState(0);
    const [cars, setCars] = useState([])
    const arr = [1,2,3,4,5,6]
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const formData = new FormData();

    useEffect(()=>{
      axios.get('http://localhost:5000/api/cars')
      .then(res => {
        setCars(res.data)
      })
      .catch(e => console.log(e))
      console.log(cars)
    },[])
    return(<div>
         {/* <Carousel controls={false} touch ={true} activeIndex={index} onSelect={handleSelect}>
      {arr.map(el => {
 return (<Carousel.Item interval ={10000000}>

 <img
   className="d-block w-100 carousel-img"
   src={process.env.PUBLIC_URL + 'images/slider-image-1-1600x800.jpg'}
   alt="First slide"
 />

 <Carousel.Caption>
   <h3>{el} slide label</h3>
   <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
 </Carousel.Caption>
</Carousel.Item>)
      })}
    </Carousel> */}

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + 'images/slider-image-1-1600x800.jpg'}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + 'images/slider-image-1-1600x800.jpg'}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={process.env.PUBLIC_URL + 'images/slider-image-1-1600x800.jpg'}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>





    <div className="latest-products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Featured Cars</h2>
              <a href="cars.html">view more <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
          {console.log(cars)}
          {cars && cars.map(el => {
              return(          <div className="col-lg-4 col-md-6">
              <div className="product-item">
                <a href="car-details.html"><img src={process.env.PUBLIC_URL + "images/" + el.car_image+".jpg"} alt=""></img></a>
                <div className="down-content">
                  <a href="car-details.html"><h4>{el.car_make} {el.car_model}</h4></a>
  
                  <h6><small><del> $11199.00</del></small> $11179.00</h6>
  
                  <p>190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008 &nbsp;/&nbsp; Used vehicle</p>
  
                  <small>
                    <strong title="Author"><i className="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Author"><i className="fa fa-cube"></i> 1800cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong title="Views"><i className="fa fa-cog"></i> Manual</strong>
                  </small>
                </div>
              </div>
            </div>)
          })}


        </div>
      </div>
    </div>

    <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-content">
              <p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit. Explicabo, esse consequatur alias repellat in excepturi inventore ad <a href="#">asperiores</a> tempora ipsa. Accusantium tenetur voluptate labore aperiam molestiae rerum excepturi minus in pariatur praesentium, corporis, aliquid dicta.</p>
              <ul className="featured-list">
                <li><a href="#">Lorem ipsum dolor sit amet</a></li>
                <li><a href="#">Consectetur an adipisicing elit</a></li>
                <li><a href="#">It aquecorporis nulla aspernatur</a></li>
                <li><a href="#">Corporis, omnis doloremque</a></li>
              </ul>
              <a href="about-us.html" className="filled-button">Read More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-image">
            <img src={process.env.PUBLIC_URL + "images/about-1-570x350.jpg"} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="call-to-action">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
              <div class="row">
                <div class="col-md-8">
                  <h4>Lorem ipsum dolor sit amet, consectetur adipisicing.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis amet elite author nulla.</p>
                </div>
                <div class="col-lg-4 col-md-6 text-right">
                  <a href="contact.html" class="filled-button">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>)
}