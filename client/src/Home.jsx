import React from 'react'
import { useState } from 'react'
import './Home.css'
import MiniCard from './MiniCard'
import Nav from './Nav'
import AddEvent from './AddEvent'
import image from './assets/sugarloaf.jpg'
import Card from './Card'
function Home() {
  return (
    <>
      <Nav />

      <Card

        event = {{
          img : image,
          title : 'Hike at Mt.Sugarloaf',
          date : 'November 25th',
          time : '4 P.M',
          location : 'Mt.Sugarloaf',
          spotsAvailable : 10,
          attendees:[{firstName:'Alan', lastName:'Achilles', userName: 'alanNEF'}],
          tags : [0,1,2,3,4,5]
        }}
        user = {{
          firstName: 'Alan',
          lastName: 'Achilles',
          userName: 'balch'
        }}
      />
    </>
  )
}

export default Home
