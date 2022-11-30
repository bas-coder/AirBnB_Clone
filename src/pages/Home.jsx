import React from 'react'
import Navbar from '../components/Navbar'
import Hero from "../components/Hero"
import Card from '../components/Card'
import data from '../data/data'

function Home() {

const cards = data.map(item => {
  return <Card 
    key={item.id}
    item = {item}
  />
})

  return (

    <div className='home'>
        <Navbar />
        <Hero />

        <div className="home__card">
          {cards}
        </div>
    </div>
  )
}

export default Home