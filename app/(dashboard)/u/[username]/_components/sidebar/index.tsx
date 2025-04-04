import React from 'react'
import Wrapper from './Wrapper'
import Toggle from './toggle'
import Navigation from '../navigation'


const Sidebar = () => {
    

  return (
    <Wrapper>
        <Toggle />
        <Navigation />
    </Wrapper>
  )
}

export default Sidebar