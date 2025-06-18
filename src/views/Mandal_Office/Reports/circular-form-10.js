/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react'

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
  CTableBody,
  CToastBody,
  CToaster,
  CToastHeader,
  CToastClose,
  CToast,
  CFormLabel,
  CFormFeedback,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import URLS from 'src/URLS'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'
import { useFormik } from 'formik'
import * as yup from 'yup'

const CircularForm5 = () => {
  const getAllQuestions = async () => {
    // alert(dropdownVal?.cCode)

    //const token = localStorage.getItem('token')
    await axios
      .get(`${URLS.InspectionBaseURL}/getAllQue`)
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
                      <strong>मंडळ नमुना दहा </strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
              <CRow>
                <center>
                  <CFormLabel>
                    <h5>
                      <strong>पुस्तके, नियम पुस्तिका व स्थायी आदेश इत्यादींची संकलन संचिका</strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
            </CCardHeader>
            <CCardBody>
              {/* <CForm onSubmit={formik.handleSubmit}> */}
              <CForm>
                <div>
                  <CTable hover bordered responsive="sm" align="middle">
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell scope="col">अनु.क्रमांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          पुस्तक / नियमपुस्तिकीचे नाव / आदेश / मार्गदर्शनपर आदेश / परिपत्रक / शासन
                          निर्णय इ. चा क्रमांक{' '}
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">विषय</CTableHeaderCell>
                        <CTableHeaderCell scope="col">आवक क्रमांक व दिनांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col">पान क्रमांक </CTableHeaderCell>

                        <CTableHeaderCell>शेरा</CTableHeaderCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell style={{ alignItems: 'center' }}>1</CTableHeaderCell>
                        <CTableHeaderCell>2</CTableHeaderCell>
                        <CTableHeaderCell>3</CTableHeaderCell>
                        <CTableHeaderCell>4</CTableHeaderCell>
                        <CTableHeaderCell>5</CTableHeaderCell>
                        <CTableHeaderCell>6</CTableHeaderCell>
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
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
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

export default CircularForm5
