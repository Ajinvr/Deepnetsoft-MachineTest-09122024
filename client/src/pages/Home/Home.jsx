import React from 'react'
import Header from '../../globalComponents/Header'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
import Items from './components/items/items'
import Footer from './components/footer/Footer'
function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Menu/>
        <Items/>
        <Footer/>
    </div>
  )
}

export default Home