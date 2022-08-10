import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import './hero-section.css'

const HeroSection = () => {
  return <section className="hero__section">
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='hero__contents'>
                <h2>Discover Collections of Rare 'n' Extraodinary <span>Arts and NFTs</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quo maiores animi temporibus id, nostrum sed nobis labore illo reprehenderit eum corporis nesciunt magnam. Cum, officiis? Harum praesentium iure amet.</p>
                
                <div className="hero__btns d-flex align-items-center gap-4">
                <button className="btn1"><i class="ri-store-2-line"></i> <Link to='/market'>Explore More</Link></button>
                <button className="btn1"><i class="ri-edit-2-fill"></i> <Link to='/create'>Self Craft</Link></button>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default HeroSection
