import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import URLS from 'src/URLS'

import { Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Toast } from 'src/views/ui/Toast'
import Section1 from './Sections/Section1'
import SectionCount from './Sections/SectionCount'

const InspectionOnline = () => {
  const [districtName, setDistrictName] = useState()
  const [talukaName, setTalukaName] = useState()
  const [villageName, setVillage] = useState()
  const [InspectionName, setInspectionPersonName] = useState()

  const [totalLiveKhatedar, setTotalLiveKhatedar] = useState(0)
  const [totalSurveyNumber, setTotalSurveyNumber] = useState(0)
  const [totalKhatedar, setTotalKhatedar] = useState(0)
  const [AugPin1, setAugPin1] = useState(0)
  const [Wasulipatrakhatedar, setWasulipatrakhatedar] = useState()
  const [targetData, setTargetData] = useState(0)
  const [totalNetReceived, setTotalNetReceived] = useState(0)
  const [khatedarAmountReceived, setKhatedarAmountReceived] = useState(0)
  const [sankirnMahsool, setSankirnMahsool] = useState()
  const [demandGenerated, setDemandGenerated] = useState(0)
  const [jamabandi, setJamabandi] = useState()
  const [sankirnWith, setSankirnWith] = useState(0)
  const [sankirnWithOut, setSankirnWithOut] = useState(0)
  const [totalNetAmount, setTotalNetAmount] = useState(0)

  const VillageData = async () => {
    setDistrictName(localStorage.getItem('districtName'))
    setTalukaName(localStorage.getItem('talukaName'))
    setVillage(JSON.parse(localStorage.getItem('villageData'))[0].villageName)
    setInspectionPersonName(localStorage.getItem('marathiName'))
  }
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  const TotalLiveKhatedar = async () => {
    // alert(dropdownVal?.cCode)

    const token = localStorage.getItem('token')
    const talukCode = JSON.parse(localStorage.getItem('talukaCode'))
    const ccode = JSON.parse(localStorage.getItem('talukaCode'))
    //272400110296420000
    await axios
      //.get(`${URLS.BaseURL}/restservice/getDashBoardKhataNoDetails?cCode=272400110296420000`, {
      .get(
        `${URLS.BaseURL}/restservice/getDashBoardKhataNoDetails?cCode=272400110296420000&talukaCode=${talukCode}`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            Echdbname: '3y+6bSLaBNfOzEUWW3yXOA==',
            Echschemaname: '33gU8iw1FOl/D43LCQ6MhA==',
            Echhost: 'On3zPHeGPKNn95bKB26ZhA==',
            Mhrdbname: 'egt/yzXRlGH+dexGJKQ7yA==',
            Mhrhost: 'On3zPHeGPKNn95bKB26ZhA==',
            Mhrschemaname: 'jfxKEUeaSF6ew8mrXvUedg==',
            Servarthid: 'REVARPM8102',
          },
        },
      )
      .then((res) => {
        try {
          setTotalSurveyNumber(res.data.form7KhataData[0].pin)
          setTotalKhatedar(res.data.form7KhataDataAug[0].khataNo)
          setAugPin1(res.data.form7KhataDataAug[0].pin)

          //setWasulipatrakhatedar(res.data.form7KhataData[0].netAmount1);
          setWasulipatrakhatedar(res.data.khatedarPatra[0].netAmount1)
          //console.log('data for live khatedar', res);
        } catch (err) {
          console.log(err, 'error in TotalLiveKhatedar')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getTargetData = async () => {
    let a = '3y+6bSLaBNfOzEUWW3yXOA=='
    let b = '33gU8iw1FOl/D43LCQ6MhA=='
    const token = localStorage.getItem('token')
    await axios
      .get(
        `${URLS.BaseURL}/restservice/getVillageTarget?cCode=272400110296420000&revenueYear=2022-23`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            Echdbname: a,
            Echschemaname: b,
            Echhost: 'On3zPHeGPKNn95bKB26ZhA==',
            Mhrdbname: 'egt/yzXRlGH+dexGJKQ7yA==',
            Mhrhost: 'On3zPHeGPKNn95bKB26ZhA==',
            Mhrschemaname: 'jfxKEUeaSF6ew8mrXvUedg==',
            Servarthid: 'REVARPM8102',
          },
        },
      )
      .then((res) => {
        // console.log(res, '-------getTargetData');
        try {
          setTargetData(res.data.talathiDashBoardData[0].annualVillageTarget)
        } catch (err) {
          console.log(err, 'error in block getTargetData')
        }
      })
  }

  const TotalLiveDemandDetails = async () => {
    let a = '3y+6bSLaBNfOzEUWW3yXOA=='
    let b = '33gU8iw1FOl/D43LCQ6MhA=='
    const token = localStorage.getItem('token')
    axios
      .get(
        `${URLS.BaseURL}/restservice/getDashBoardTotalDemandDetails?cCode=272400110296420000&revenueYear=2022-23`,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            Echdbname: a,
            Echschemaname: b,
            Echhost: 'On3zPHeGPKNn95bKB26ZhA==',
            Mhrdbname: 'egt/yzXRlGH+dexGJKQ7yA==',
            Mhrhost: 'On3zPHeGPKNn95bKB26ZhA==',
            Mhrschemaname: 'jfxKEUeaSF6ew8mrXvUedg==',
            Servarthid: 'REVARPM8102',
          },
        },
      )
      .then((res) => {
        //console.info(res.data, '-------data----11----')
        setTotalNetAmount(res.data.landRevenueDemandData[0].netAmount)
        setTotalNetReceived(res.data.landRevenueDemandData[0].netReceived)
        setKhatedarAmountReceived(res.data.landRevenueDemandData[0].khataNo)
        setSankirnWith(res.data.landRevenueDemandData[0].totalOfWithSankirn)
        setSankirnWithOut(res.data.landRevenueDemandData[0].totalOfWithuotSankirn)
        //setDemandGenerated(res.data.landRevenueDemandData[0].demandGeneratedKhataNo);
        setDemandGenerated(res.data.demandGenerated[0].demandGenerated)
        //setSankirnMahsool(parseInt(res.data.landRevenueDemandData[0].sankirnMahsool));
        setSankirnMahsool(
          // parseInt(res.data.sankirnMahsool[0].sankirnMahsool),
          parseInt(res.sankirnMahsool),
        )
        //setJamabandi(res.data.landRevenueDemandData[0].jamabandi_p);
        setJamabandi(res.data.jmp[0].jamabandi_p)
        //setJamabandinew(res.data.jmp[0].jamabandi_p);
      })
  }

  useEffect(() => {
    TotalLiveKhatedar()
    TotalLiveDemandDetails()
    getTargetData()
  }, [])

  useEffect(() => {
    VillageData()
  }, [])

  return (
    <>
      <h2>Inspection Online</h2>
      <Toast />
      <CRow>
        <CCol xs={12}>
          <CCard>
            <CCardHeader>
              <CRow>
                <center>
                  <CFormLabel>
                    <h5>
                      <strong> संक्षिप्त दप्तर तपासणी (Online) </strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
              <CRow>
                <CCol md={6} className="a1">
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}>
                        {' '}
                        तपासणी अधिकारी यांचे नाव व पद - {InspectionName}
                      </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}>
                        {' '}
                        तपासणी दिनांक - {`${day} / ${month} / ${year}`}
                      </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> गावाचे नाव - {villageName} </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> तलाठीचे नाव - {districtName}</strong>
                    </CFormLabel>
                  </CRow>
                </CCol>
                <CCol md={6} className="a2">
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> जिल्हा - {districtName}</strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> तालुका - {talukaName} </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> सांजयचे नाव - </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> मंडळाचे नाव - </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}>Inspection Id - 2024/5029/0001</strong>
                    </CFormLabel>
                  </CRow>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <h2 colSpan={6} style={{ textAlign: 'center' }}>
                संक्षिप्त दप्तराची तपासणी (online)
              </h2>
              <CForm>
                {/*----------------------------------------------------------------Section 1 */}
                <SectionCount
                  count1A={AugPin1}
                  count1B={totalLiveKhatedar}
                  count2A={totalKhatedar}
                  count2B={totalSurveyNumber}
                  // count3A={jamabandi}
                  // count3B={targetData}
                />
                <Section1 />
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                  <CButton type="submit" color="primary">
                    Save Response
                  </CButton>
                  <CButton color="light" style={{ marginLeft: 7 }}>
                    Reset
                  </CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default InspectionOnline
