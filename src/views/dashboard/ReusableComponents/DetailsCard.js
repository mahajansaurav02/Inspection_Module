import React from 'react'
import './DetailsCard.css'
import { CCol, CRow } from '@coreui/react'
import { Paper } from '@mui/material'
import CountUp from 'react-countup'

const DetailsCard = ({ label, count, topHeader = null, icon }) => {
  return (
    <>
      <Paper
        style={{
          marginTop: '20px',
          borderRadius: 10,
          marginTop: 20,
          position: 'relative',
        }}
        elevation={3}
      >
        <div style={{ position: 'absolute' }} className="box1">
          {icon}
        </div>
        <div style={{ position: 'absolute', right: 15, top: 5 }}>{topHeader}</div>
        <CRow>
          <CCol
            style={{
              padding: 20,
              paddingTop: 35,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h6 style={{ padding: '5px', fontWeight: 'bolder' }}>{label}</h6>
            <h1 style={{ fontSize: '2.5em' }}>
              <CountUp end={count} />
            </h1>
          </CCol>
        </CRow>
      </Paper>
    </>
  )
}

export default DetailsCard
