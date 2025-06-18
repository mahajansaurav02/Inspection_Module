import React from 'react'
import { useLocation } from 'react-router-dom'

const Satbara = () => {
  const location = useLocation()
  return (
    <>
      <h2>Satbara</h2>
      <div style={{ overflow: 'auto' }}>
        {/* <iframe
          src="http://127.0.0.1:5500/Test1.html"
          //src="src/views/inspection-module/inspection-online/Sections/Test1.html"
          style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}
        ></iframe> */}
        {location.state}
      </div>
    </>
  )
}

export default Satbara
