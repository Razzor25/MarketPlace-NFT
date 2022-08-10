import React from 'react'
import {Container, Row,Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import './footer.css'


const myAccount=[
  {
    display:'Stanley Profile',
    url:'/seller-profile'
  },
  {
    display:'Create Item',
    url:'/create'
  },
  {
    display:'Collections',
    url:'/market'
  },
  {
    display:'Edit Profile',
    url:'/edit-profile'
  }
]
const resources=[
  {
    display:'Help Center',
    url:'#'
  },
  {
    display:'Documentation',
    url:'#'
  },
  {
    display:'Community',
    url:'/market'
  },
  {
    display:'Market Capitalization',
    url:'#'
  }
]
const company=[
  {
    display:'About',
    url:'#'
  },
  {
    display:'Career',
    url:'#'
  },
  {
    display:'RoadMap',
    url:'/market'
  },
  {
    display:'Contact us',
    url:'#'
  }
]

const Footer = () => {
  return <footer className='footer'>
        <Container>
          <Row>
            <Col lg='3' md='12' sm='12'>{/* md='6' sm='6' */}
            <div className="logo">
            <h2 className=" d-flex gap-1 align-items-center">
              <span><i class="ri-exchange-fill" style={{fontSize:'3rem'}}></i></span>
              NFT-Market
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et excepturi iste vel magnam, perspiciatis vitae corrupti ad, ullam quia delectus deleniti. Sunt, labore numquam excepturi dolore harum sit iste.</p>
            </div>
            </Col>

            <Col lg='2' md='4' sm='12' >{/* md='3' sm='6' */}
              <h5>My Account!</h5>
              <ListGroup className='list__group'>
                {myAccount.map((i,index)=>(
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={i.url}>{i.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg='2' md='4' sm='12'>{/* md='3' sm='6' */}
            <h5>Resources!</h5>
              <ListGroup className='list__group'>
                {resources.map((i,index)=>(
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={i.url}>{i.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg='2' md='4' sm='12'>{/* md='3' sm='6' */}
            <h5>Company!</h5>
              <ListGroup className='list__group'>
                {company.map((i,index)=>(
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={i.url}>{i.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg='3' md='12' sm='12'>{/*md='6' sm='6'*/}
                  <h5>Important Updates!</h5>
                  <div className="updates d-flex" >
                    <input type="text"placeholder="Enter your email to not miss updates"/>
                    <button className=''>
                      <i class="ri-mail-add-line"></i>
                    </button>
                  </div>
                  <div className='social-links d-flex gap-3 align-items-center'>
                    <span><Link to='#'><i class="ri-github-fill"></i></Link></span>
                    <span><Link to='#'><i class="ri-gitlab-fill"></i></Link></span>
                    <span><Link to='#'><i class="ri-discord-fill"></i></Link></span>
                    <span><Link to='#'><i class="ri-linkedin-box-fill"></i></Link></span>
                    <span><Link to='#'><i class="ri-telegram-fill"></i></Link></span>
                    <span><Link to='#'><i class="ri-youtube-fill"></i></Link></span> 
                  </div>
            </Col>
            <Col lg='12' sm='12' md='12' className='mt-5 text-center'>
              <p style={{fontSize:'.9rem'}}>Developed by Satya Roy All  Rights Resevred © Copyright 2022.</p>
            </Col>
          </Row>
        </Container>
  </footer>
  
}

export default Footer
