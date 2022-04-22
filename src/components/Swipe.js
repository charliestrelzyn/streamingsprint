import React, {useState} from 'react'
import SwipeableViews from 'react-swipeable-views'
import './swipe.css'

export default function Swipe({titleDetails}) {

  // const style = {
  //   slide: {
  //     padding: 15,
  //     minHeight: 100,
  //     color: '#fff',
  //   },

  //   slide1: {
  //     backgroundColor: '#FEA900'
  //   },
  //   slide2: {
  //     backgroundColor: '#B3DC4A'
  //   }

  // }
  
  return (
    <div className="slide">
      {
         titleDetails.map(item => {
           console.log(item)
         })
        
      }
    {<SwipeableViews enableMouseEvents>
      <div className="slide1">
        Slide 1
      </div>
      <div className="slide2">
        Slide 2
      </div>
    </SwipeableViews>   }
    </div>
  )
}
