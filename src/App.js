import axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./components/Coin";
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {

  const [listOfCoins, setListOfCoins] = useState([])  // store list of coins fetched from API
  const [searchTerm, setSearchTerm] = useState('')   // store user input when searching currencies


  // fetch API crypto data
  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=AUD')
    .then(response => {
      setListOfCoins(response.data.coins)
    })
  }, [])

  // filter coins and only keep those including search term
  const filteredCoins = listOfCoins.filter(coin => {
    return coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

 return (
  <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Routes>




    <div className="crypto-header">
      <input type="text" placeholder="Search a currency ..." onChange={e => {
        {setSearchTerm(e.target.value)}
      }} />
    </div>

    <div className="crypto-display">
      {filteredCoins.map(coin => {
        return (
          <Coin key={coin.id} name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />
        )
        
      })}
    </div>

  </div>
 )

}

export default App;
