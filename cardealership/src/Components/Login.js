import React from 'react'


export default function Login() {
    return(
        <div>
               <div  className="page-heading about-heading header-text">
      {/* <div  className="container">
        <div  className="row">
          <div  className="col-md-12">
            <div  className="text-content">
              <h4>about us</h4>
              <h2>our company</h2>
            </div>
          </div>
        </div>
      </div> */}
    </div>

    <h2>Login</h2>
    <div  className="best-features about-features">
      <div  className="container">



      <form className='loginform'>

          <label for="username">Username</label>
          <input name="username" type="text" className="logininput" />
          <label for="password">Password</label>
          <input name="password" type="password" className="logininput" />
          <input type="submit" className="logininput" />
      </form>

      </div>
    </div>
        </div>
    )
}