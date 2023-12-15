import React, { useState } from 'react'
import { Container } from './styles'
import type { Asset } from 'contentful';

interface IHomeProject {
  animationFrames: {
    desktop: Asset[];
    mobile?: Asset[];
  };
}

const Project: React.FC<IHomeProject> = ({ children, animationFrames }) => {
  const [frameToggle, setFrameToggle] = useState(false)

  return (
    <Container 
      animationFrames={animationFrames} 
      frameStep={frameToggle}
      onTouchStart={() => {setFrameToggle(!frameToggle)}}
      onTouchEnd={() => {setFrameToggle(!frameToggle)}}
      onMouseEnter={() => {setFrameToggle(!frameToggle)}} 
      onMouseLeave={() => {setFrameToggle(!frameToggle)}} 
    >
      {children}
    </Container>
  )
}

export default Project