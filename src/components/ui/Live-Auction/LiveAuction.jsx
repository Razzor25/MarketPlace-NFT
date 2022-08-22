import React from 'react'
import {Container , Row , Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import NftCard from '../Nft-card/NftCard'
import {NFT__DATA} from '../../../Data/db'
import './live-auction.css'

const LiveAuction = () => {
  return (
    <section>
        <Container>
            <Row>
              <Col lg='12' className='mb-4'>
                    <div className="live__auction__top d-flex align-items-center justify-content-between">
                        <h3>Live Auction</h3>
                        <span><Link to='/market'>
                            Explore Market</Link></span>
                    </div>
                </Col>
                <div className='d-flex flex-wrap'>
                    {
                        NFT__DATA.map((item)=>(
                            <Col xl="4" lg="6" md="6" sm="12" className='d-flex justify-content-around'>
                            <NftCard key={item.id} item={item}/>
                            </ Col>
                        ))
                    }
                </div>
               
            </Row>
        </Container>
    </section>
  )
}

export default LiveAuction
