import React from 'react'

function Navbar() {
  return (
    <div>
      <header>
          <p className="p">Free shipping on all international orders over $35 <a href="" className="color"> Shop Now </a>📦</p>
      </header>
      <div className="header1">
        <section className="s1">
            <h1><a href="" className="color1">Menu</a></h1>
        </section>
        <section className="s2">
          <h1><a href="" className="color2">R.V</a></h1>
        </section>
        <section className="s3">
            <a href="" className="color3">Cart(0) &nbsp;&nbsp;</a>
            <a href="" className="color3">Log In</a>
        </section>
      </div>
    </div>
  )
}

export default Navbar