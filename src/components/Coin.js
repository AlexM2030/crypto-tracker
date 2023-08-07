import React from 'react'
import './Coin.css'

const Coin = ({id, name, icon, price, symbol}) => {
  return (
    <div className='coin'>
        <span>#</span>
        <h3>{name}</h3>
        <img src={icon} alt="coin" />
        <h3>${price.toFixed(2)}</h3>
        <h3>{symbol}</h3>
    </div>
  )
}

export default Coin