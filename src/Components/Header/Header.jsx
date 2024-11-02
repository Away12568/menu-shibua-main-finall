import React, { useState } from 'react'
import "./Header.css"

const Header = () => {

  const [active, setActive] = useState(false) 

  const togglBurger = () => {
    setActive(!active)
  }





  


  return (
    <>
      <header className="header">
        <div className="container">
            <div className="header__wrapper">

                <img  className="logo" src="https://cdn-0.motorcycle-logos.com/wp-content/uploads/2016/10/Logo-Yamaha.png" alt="" />

                <div className={`header__menu ${  active ? 'active' : ''}`}>
                    <a href="">home</a>
                    <a href="">about</a>
                    <a href="">contacts</a>

                   
                </div>


                <div onClick={togglBurger } className={`burger ${active ? 'active' : ''}`}>

                  <span></span>
                  <span></span>
                  <span></span>        

                </div>

            </div>
        </div>
      </header>
    </>
  )
}

export default Header
