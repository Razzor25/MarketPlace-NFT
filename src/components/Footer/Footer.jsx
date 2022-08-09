import React from 'react'
import {Container, Row,Col} from 'reactstrap'

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

            <Col lg='2' md='3' sm='6'></Col>
            <Col lg='2' md='3' sm='6'></Col>
            <Col lg='2' md='3' sm='6'></Col>

            <Col lg='3' md='6' sm='6'>

            </Col>
          </Row>
        </Container>
  </footer>
  
}

export default Footer
