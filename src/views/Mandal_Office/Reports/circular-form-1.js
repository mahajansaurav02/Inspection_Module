/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react'
import Section1 from '../../dashboard/Sections/Section1'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Paper } from '@mui/material'

import {
  CForm,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CTableRow,
  CTableHead,
  CTableDataCell,
  CTableHeaderCell,
  CTable,
  CFormLabel,
  CTableBody,
  CContainer,
  CToastBody,
  CToaster,
  CToastHeader,
  CToastClose,
  CToast,
  CFormFeedback,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import URLS from 'src/URLS'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'
import { useFormik } from 'formik'
import * as yup from 'yup'
import reqHeaders from 'src/instance/headers'
import { Trans, useTranslation } from 'react-i18next'
import { selectState } from '../../../slices/HomepageSlice'

const echHost = localStorage.getItem('echHost')
const token = localStorage.getItem('token')
const mhrHost = localStorage.getItem('mhrHost')
const echDbName = localStorage.getItem('echDbName')
const echSchemaName = localStorage.getItem('echSchemaName')
const mhrDbName = localStorage.getItem('mhrDbName')
const mhrSchemaName = localStorage.getItem('mhrSchemaName')
const servarthId = localStorage.getItem('servarthId')
const langType = localStorage.getItem('umi_locale') === 'ma-IN' ? 'mr-IN' : 'en-US'

const CircularForm1 = () => {
  const [DropdownVal1, setDropdownVal1] = useState()
  const [tabaleData, setTableData] = useState()
  const { t } = useTranslation('dashboard')
  const state = useSelector(selectState)
  const [villageSajjaCode, setVillageSajjaCode] = useState()
  const [villageSajjaName, setVillageSajjaName] = useState()
  const [villageSaja, setVillageSaja] = useState([])
  const [dropdownYear, setDropdownYear] = useState([])

  const handleChange = async (e) => {
    const value = await e?.target?.value
    const selctedVillageData = await state?.villageData.find((u) => u.sajjaName === value)
    setDropdownVal1({
      village: await value,
      sajjaCode: await selctedVillageData?.sajjaCode,
      sajjaName: await selctedVillageData?.sajjaName,
    })
  }
  const handleChangeRevenueYear = async (e) => {
    const value = await e?.target?.value
    const selctedYearData = await state?.revenueYear1.find((u) => u.revenueYear === value)
    setDropdownYear({
      // year: await value,
      id: await selctedYearData?.id,
      revenueYear: await selctedYearData?.revenueYear,
    })
  }

  const getAllQuestions = async () => {
    // alert(dropdownVal?.cCode)

    //const token = localStorage.getItem('token')
    await axios
      .get(`${URLS.InspectionBaseURL}/getAllQue`, { headers: reqHeaders })
      //.get(`http://localhost:8092/inspection/api/getAllQue`)
      .then((res) => {
        try {
          console.log(res, '--List of Question List')
          //  setTotalLiveKhatedar(res.data.form7KhataData[0].khataNo)
          //  setTotalSurveyNumber(res.data.form7KhataData[0].pin)
          //  setTotalKhatedar(res.data.form7KhataDataAug[0].khataNo)
          //  setAugPin1(res.data.form7KhataDataAug[0].pin)
          //  //setB(parseInt(totalSurveyNumber));
          //  setWasulipatrakhatedar(res.data.form7KhataData[0].netAmount1)
          //console.log('data for live khatedar', res)
        } catch (err) {
          console.log(err, 'error in TotalLiveKhatedar')
        }
      })
  }
  const fetchTableData = async () => {
    console.log(dropdownYear.revenueYear + '----year----')
    await axios
      .get(`${URLS.BaseURL}/form15/getForm15Data?sajjaCode=${DropdownVal1?.sajjaCode}&userId=''`, {
        headers: {
          'Accept-Language': langType,
          Authorization: `Bearer ${token}`,
          echHost: echHost,
          mhrHost: mhrHost,
          echDbName: echDbName,
          echSchemaName: echSchemaName,
          mhrDbName: mhrDbName,
          mhrSchemaName: mhrSchemaName,
          servarthId: servarthId,
        },
      })
      //.get(`http://localhost:8092/inspection/api/getAllQue`)
      .then((res) => {
        try {
          console.log(res, '--List of Question List')
          setTableData(
            res.data?.form15Data?.map((r) => ({
              communicationDispatchedToWhom: r.communicationDispatchedToWhom,
              communicationReceivedFrom: r.communicationReceivedFrom,
              noOfCommunication: r.noOfCommunication,
              dateOfReceipt: r.dateOfReceipt,
              subjectActionToTake: r.subjectActionToTake,
              dateOfDispatch: r.dateOfDispatch ? r.dateOfDispatch : '',
              noInList: r.noInList,
              remarks: r.remarks,
              designation: r.designation,
            })),
          )
        } catch (err) {
          console.log(err, 'error in TotalLiveKhatedar')
        }
      })
  }

  return (
    <>
      <Toast />
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CRow>
                <center>
                  <CFormLabel>
                    <h5>
                      <strong> मंडळ नमुना एक </strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
              {/* <CRow>
                <CCol md={6} className="a1">
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> जिल्हा - </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> गांव - </strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> तपासणी करणारा अधिकारी -</strong>
                    </CFormLabel>
                  </CRow>
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> दिनांक -</strong>
                    </CFormLabel>
                  </CRow>
                </CCol>
                <CCol md={6} className="a2">
                  <CRow>
                    <CFormLabel>
                      <strong style={{ color: '#3C4B64' }}> तालुका - </strong>
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
              </CRow> */}
            </CCardHeader>
            <CCardBody>
              {/* <CForm onSubmit={formik.handleSubmit}> */}
              <CForm>
                <div>
                  <Paper elevation={2} style={{ paddingTop: 5, paddingBottom: 5 }}>
                    <CRow>
                      <CCol md={11}>
                        <CContainer fluid>
                          <CRow>
                            <CCol xs={2}>
                              <FormControl variant="filled" fullWidth>
                                <TextField
                                  id="filled-basic"
                                  label="जिल्हा"
                                  variant="filled"
                                  value={state?.districtName}
                                  size="small"
                                  disabled
                                />
                              </FormControl>
                            </CCol>
                            <CCol xs={2}>
                              <FormControl variant="filled" fullWidth>
                                <TextField
                                  id="filled-basic"
                                  label="तालुका"
                                  variant="filled"
                                  value={state?.talukaName}
                                  size="small"
                                  disabled
                                />
                              </FormControl>
                            </CCol>
                            <CCol xs={2}>
                              <FormControl variant="filled" fullWidth>
                                <InputLabel id="demo-simple-select-label">सजा</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="गाव निवाडा"
                                  size="small"
                                  name="gaon"
                                  onChange={handleChange}
                                >
                                  {Array.isArray(state?.villageData) &&
                                    state?.villageData?.map((val, i) => {
                                      return (
                                        <MenuItem key={val?.sajjaCode + i} value={val?.sajjaName}>
                                          {val?.sajjaName}
                                        </MenuItem>
                                      )
                                    })}
                                  <MenuItem value="111">111</MenuItem>
                                </Select>
                              </FormControl>
                            </CCol>
                            <CCol xs={3}>
                              <FormControl variant="filled" fullWidth>
                                <InputLabel id="demo-simple-select-label">महसुल वर्ष</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  label="गाव निवाडा"
                                  size="small"
                                  name="gaon"
                                  onChange={handleChangeRevenueYear}
                                >
                                  {Array.isArray(state?.revenueYear1) &&
                                    state?.revenueYear1?.map((val, i) => {
                                      return (
                                        <MenuItem key={val?.id} value={val?.revenueYear}>
                                          {val?.revenueYear}
                                        </MenuItem>
                                      )
                                    })}
                                  <MenuItem value="111">111</MenuItem>
                                </Select>
                              </FormControl>
                            </CCol>
                            <CCol
                              xs={3}
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              <CButton
                                shape="rounded-1"
                                variant="outline"
                                onClick={fetchTableData}
                                color="primary"
                              >
                                {/* <CIcon icon={cilMedicalCross} size="md" /> */}
                                Show Data
                              </CButton>
                            </CCol>
                          </CRow>
                        </CContainer>
                      </CCol>
                    </CRow>
                  </Paper>
                  <hr />
                  <CTable hover bordered responsive="sm" align="middle">
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell scope="col">अनु.क्रमांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col">तलाठ्याचे नाव </CTableHeaderCell>
                        <CTableHeaderCell scope="col">गाव / साझा</CTableHeaderCell>
                        <CTableHeaderCell scope="col">साझ्यातील गावे</CTableHeaderCell>
                        <CTableHeaderCell scope="col">मंडळात रुजू दिनांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          लॅपटॉप, प्रिंटर, डेटाकार्ड प्राप्त झाल्याचा दिनांक
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">संपर्क क्रमांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col">शेरा</CTableHeaderCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell style={{ alignItems: 'center' }}>1</CTableHeaderCell>
                        <CTableHeaderCell>2</CTableHeaderCell>
                        <CTableHeaderCell>3</CTableHeaderCell>
                        <CTableHeaderCell>4</CTableHeaderCell>
                        <CTableHeaderCell>5</CTableHeaderCell>
                        <CTableHeaderCell>6</CTableHeaderCell>
                        <CTableHeaderCell>7</CTableHeaderCell>
                        <CTableHeaderCell>8</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                        <CTableDataCell>-</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'end' }}>
                  <CButton type="submit" color="primary">
                    Save Response
                  </CButton>
                  <CButton color="light" style={{ marginLeft: 7 }}>
                    Reset
                  </CButton>
                </div> */}
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default CircularForm1
