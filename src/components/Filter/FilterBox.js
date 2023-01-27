import React, {useState} from 'react'
import FormatPrice from './FormatPrice'

export default function FilterBox() {
  const [price, setPrice] = useState([0, 5000])
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  return (
    <div>
        <div className='price-range'>
            <p className='filter-heading'>Price</p>
            <p style={{marginLeft: '5px'}}>
                <FormatPrice price={price} />
            </p>
            <input style={{marginLeft: '5px'}} type='range' name='price'  min={0} max={5000} value={price} onChange={priceHandler} />
        </div>
    </div>
  )
}
