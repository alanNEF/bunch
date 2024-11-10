import React from 'react'
import { useState } from 'react'
import './Home.css'
import MiniCard from './MiniCard'
import Nav from './Nav'
import AddEvent from './AddEvent'
import image from './assets/sugarloaf.jpg'
import Card from './Card'
import CardList from './CardList'
function Home() {

  return (
    <>
      <Nav />
      <CardList />
    </>
  )
}

export default Home
