import React from 'react'
import {Link} from 'react-router-dom'

const NftCard = (props) => {


    const {title, id, currentBid, creatorImg, imgUrl, creator}=props.item


  return <div className="single__nft__card w-75">
  <div className="nft__img">
      <img src={imgUrl} alt="" className='w-100'/>
  </div>
  <div className="nft__content">
      <h5 className='nft__title'>
          {title}
      </h5>

      <div className="creator__info-wrapper d-flex gap-3" >
          
          <div className="creator__img">
              <img src={creatorImg} alt="" className='w-100'/>
          </div>

          <div className="creator__info d-flex align-items-center w-100 justify-content-between">
              <div className='w-50'>
              <h6>Created By</h6>
              <p>{creator}</p>
              </div>

              <div className='w-50'>
                  <h6>Current Bid</h6>
                  <p>{currentBid}</p>
              </div>
          </div>
      </div>
      <div className='d-flex align-items-center justify-content-between mt-3 w-100'>
              <button className='bid__btn d-flex align-items-center gap-3'>           
              Place Order
              </button>
              <button className='bid__btn d-flex align-items-center gap-3'> <Link to={`/market/${id}`}>Veiw details</Link></button>
      </div>
  </div>
</div>
}

export default NftCard

