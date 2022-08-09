import React from 'react'
import {Container, Row,Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'


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
            <Col lg='3' md='6' sm='6'>
            <div className="logo">
            <h2 className=" d-flex gap-1 align-items-center">
              <span><i class="ri-exchange-fill" style={{fontSize:'3rem'}}></i></span>
              NFT-Market
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed et excepturi iste vel magnam, perspiciatis vitae corrupti ad, ullam quia delectus deleniti. Sunt, labore numquam excepturi dolore harum sit iste.</p>
            </div>
            </Col>

            <Col lg='2' md='3' sm='6'>
              <h5>My Account!</h5>
              <ListGroup className='list__group'>
                {myAccount.map((i,index)=>(
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={i.url}>{i.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg='2' md='3' sm='6'>
            <h5>Resources!</h5>
              <ListGroup className='list__group'>
                {resources.map((i,index)=>(
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={i.url}>{i.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>
            <Col lg='2' md='3' sm='6'>
            <h5>Company!</h5>
              <ListGroup className='list__group'>
                {company.map((i,index)=>(
                  <ListGroupItem key={index} className='list__item'>
                    <Link to={i.url}>{i.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg='3' md='6' sm='6'>
                  <h5>Important Updates!</h5>
                  <input type="text" className="updates" placeholder="Email"/>
                  <div className='social-links'>
                    {/* <span ><Link to='#'><i class="ri-github-fill"></i></Link></span>
                    <span ><Link to='#'><i class="ri-github-fill"></i></Link></span>
                    <span ><Link to='#'><i class="ri-github-fill"></i></Link></span>
                    <span ><Link to='#'><i class="ri-github-fill"></i></Link></span>
                    <span ><Link to='#'><i class="ri-github-fill"></i></Link></span> */}
                  </div>
            </Col>
          </Row>
        </Container>
  </footer>
  
}

export default Footer
