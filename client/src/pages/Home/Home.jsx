import React from 'react'
import Header from '../../globalComponents/Header'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Menu/>
    </div>
  )
}

export default Home