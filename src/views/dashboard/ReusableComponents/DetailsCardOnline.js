import React from 'react'
import './DetailsCardOnline.css'
import { CCol, CRow } from '@coreui/react'
import { Paper } from '@mui/material'
import CountUp from 'react-countup'

const DetailsCard = ({ label, count, topHeader = null, icon }) => {
  return (
    <>
      <Paper
        sx={{
          // marginTop: 5,
          borderRadius: 2,
          position: 'relative',
          height: '140px',
          backgroundImage: 'linear-gradient(to bottom right, #F6F5F2, #ffa66cdb)',
          boxShadow: '0px 0px 3px 0px rgb(0 0 0 / 67%)',
          transition: 'transform .5s',
          '&:hover': {
            boxShadow: '0px 5px 20px 0px rgb(0 0 0 / 34%)',
            transform: 'scale(1.07)',
          },
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
              //backgroundImage: lineargradient('to-bottom-right', '#e8eff3', '#aeb2dc'),
              // backgroundImage: linearGradient(tobottomright, #e8eff3, #aeb2dc);
            }}
          >
            <h6 style={{ padding: '5px', fontWeight: 'bolder' }}>{label}</h6>
            <h1 style={{ fontSize: '2em' }}>
              <CountUp end={count} />
            </h1>
          </CCol>
        </CRow>
      </Paper>
    </>
  )
}

export default DetailsCard
