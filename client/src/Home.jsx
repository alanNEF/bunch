import React from 'react'
import { useState } from 'react'
import './Home.css'
import Card from './Card'
import Nav from './Nav'
import AddEvent from './AddEvent'
import image from './assets/sugarloaf.jpg'

function Home() {
  return (
    <>
      <Nav />
      <AddEvent/>
      {/* <Card 

        event = {{
          img : image,
          title : 'Hike at Mt.Sugarloaf',
          date : 'November 25th',
          time : '4 P.M',
          location : 'Mt.Sugarloaf',
          spots : {filled: 4, available: 5},
          tags : [0,1,2,3,4,5]
        }}
        user = {{
          firstName: 'Alan',
          lastName: 'Achilles',
          userName: 'balch'
        }}
      /> */}
    </>
  )
}

export default Home
