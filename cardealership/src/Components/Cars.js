import React from 'react'


export default function Cars() {
    let arr = [1,2,3,4,5,6]
    return(<div>
<div class="page-heading about-heading header-text" >
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="text-content">
          <h4>Lorem ipsum dolor sit amet</h4>
          <h2>Cars</h2>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="products">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
         <div class="contact-form">
            <form action="#">
                 <label>Used/New:</label>
                 
                 <select class="form-control">
                      <option value="">All</option>
                      <option value="new">New vehicle</option>
                      <option value="used">Used vehicle</option>
                 </select>

                 <label>Vehicle Type:</label>
                 
                 <select class="form-control">
                      <option value="">--All --</option>
                      <option value="">--All --</option>
                      <option value="">--All --</option>
                      <option value="">--All --</option>
                      <option value="">--All --</option>
                 </select>

                 <label>Make:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Model:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Price:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Mileage:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Engine size:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Power:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Fuel:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Gearbox:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Doors:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <label>Number of seats:</label>
                 
                 <select class="form-control">
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                      <option value="">-- All --</option>
                 </select>

                 <button type="submit" class="filled-button btn-block">Search</button>
            </form>
         </div>
      </div>

      <div class="col-md-9">
        <div class="row">
            {arr.map(el => {
                return(          <div class="col-md-6">
                <div class="product-item">
                  <a href="car-details.html"><img src={process.env.PUBLIC_URL + "images/product-1-370x270.jpg"} alt=""></img></a>
                  <div class="down-content">
                    <a href="car-details.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
    
                    <h6><small><del> $11199.00</del></small> $11179.00</h6>
    
                    <p>190 hp &nbsp;/&nbsp; Petrol &nbsp;/&nbsp; 2008 &nbsp;/&nbsp; Used vehicle</p>
    
                    <small>
                      <strong title="Author"><i class="fa fa-dashboard"></i> 130 000km</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Author"><i class="fa fa-cube"></i> 1800cc</strong>&nbsp;&nbsp;&nbsp;&nbsp;
                      <strong title="Views"><i class="fa fa-cog"></i> Manual</strong>
                    </small>
                  </div>
                </div>
              </div>)
            })}


          <div class="col-md-12">
            <ul class="pages">
              <li><a href="#">1</a></li>
              <li class="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>)
}