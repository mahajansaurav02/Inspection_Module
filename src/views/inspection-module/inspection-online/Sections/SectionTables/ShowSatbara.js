import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ShowSatbara = () => {
  const location = useLocation()

  useEffect(() => {}, [])
  return (
    <>
      <h2>Satbara</h2>
      <div style={{ overflow: 'auto', width: '100%', height: '100%', backgroundColor: 'white' }}>
        <div
          // style={{ overflow: 'auto', width: '100%', height: '100%', backgroundColor: 'white' }}
          dangerouslySetInnerHTML={{ __html: location.state.satBaraHtml.replaceAll('"', '') }}
        >
          {/* <iframe
          src="http://127.0.0.1:5500/Test1.html"
          //src="src/views/inspection-module/inspection-online/Sections/Test1.html"
          style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}
        ></iframe> */}
          {/* {sb} */}
        </div>
      </div>
    </>
  )
}

export default ShowSatbara
