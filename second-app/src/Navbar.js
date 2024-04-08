import React from 'react'

function Navbar() {
  return (
    <header>
        <><div className="subheader">
          <div className="logo">
              <img src="img/logo.png" alt="" />
              </div>
          <nav>
              <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Academics</a></li>
                  <li><a href="">Student</a></li>
                  <li><a href="">Admissions</a></li>
              </ul>
          </nav>
      </div><div className="text">
              <h1>Welcome to our univercity</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolores error commodi placeat eligendi, excepturi sapiente. At culpa dicta nisi alias. Aspernatur modi nihil atque ea libero recusandae ullam perferendis?</p>
              <a href="">Discover the School</a>
          </div></>
    </header>
  )
}

export default Navbar