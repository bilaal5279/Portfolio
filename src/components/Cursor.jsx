import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  return (
    <div className='z-30'>
 <AnimatedCursor
  innerSize={8}
  outerSize={28}
  innerScale={1}
  outerScale={1.2}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
/>
</div>
  )
}

export default Cursor