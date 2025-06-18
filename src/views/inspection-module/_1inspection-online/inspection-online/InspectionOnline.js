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
import React, { useEffect, useState } from 'react'
import { Toast } from 'src/views/ui/Toast'
import Section1 from './Sections/Section1'

const InspectionOnline = () => {
  const [districtName, setDistrictName] = useState()
  const [talukaName, setTalukaName] = useState()
  const [villageName, setVillage] = useState()
  const [InspectionName, setInspectionPersonName] = useState()

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
                      <strong style={{ color: '#3C4B64' }}> जिल्हा - {districtName}</strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> गांव - {villageName} </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}>
                        {' '}
                        तपासणी करणारा अधिकारी - {InspectionName}
                      </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}>
                        {' '}
                        दिनांक - {`${day} / ${month} / ${year}`}
                      </strong>
                    </CFormLabel>
                  </CRow>
                </CCol>
                <CCol md={6} className="a2">
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> तालुका - {talukaName} </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> हुददा - </strong>
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
              <CForm>
                {/*----------------------------------------------------------------Section 1 */}
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
