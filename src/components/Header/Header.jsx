import React from 'react'
import { Container } from 'reactstrap'
import './header.css'
import {NavLink, Link} from 'react-router-dom'

const nav__link=[
  {
    display:'Home',
    url:'/home'
  },
  {
    display:'Market',
    url:'/market'
  },
  {
    display:'Create',
    url:'/create'
  },
  {
    display:'Contact',
    url:'/contact'
  },
]
const Header = () => {
  return (<header className="header">
    <Container>
      <div className="navigation">
        <div className="logo">
          <h2 className=" d-flex gap-1 align-items-center">
            <span><i class="ri-exchange-fill" style={{fontSize:'3rem'}}></i></span>
            NFT-Market
          </h2>
        </div>


        <div className="nav__menu">
          <ul className="nav__list">
            {nav__link.map((i,index)=>
              (<li className="nav__item" key={index}>
                <NavLink className={item=>item.isActive ? 'active' :''} 
                to={i.url}>{i.display}</NavLink>

              </li>)
            )}
          </ul>
        </div>


        <div className="nav__right align-items-center d-flex gap-5">
          <button className="btn d-flex gap-1 align-items-center">
            <span>
              <i class="ri-wallet-3-line "></i>
            </span>
            <Link to='/wallet'>
              Connect Wallet
            </Link>
          </button>
          <span className="mobile__menu">
            <i class="ri-menu-line"></i>
          </span>
        </div>


      </div>
    </Container>
  </header>)
}

export default Header
