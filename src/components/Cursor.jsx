import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  return (
    <div className='z-30'>
 <AnimatedCursor 
  innerSize={8}
  outerSize={0}
  innerScale={1.3}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
/>
</div>
  )
}

export default Cursor