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
                      <strong> मंडळ नमुना पाच </strong>
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
                  <CTable hover bordered responsive="sm" align="middle">
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell scope="col">अनु.क्रमांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col">भूमापन क्रमांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col">एकूण क्षेत्र</CTableHeaderCell>
                        <CTableHeaderCell scope="col">भेटीचे कारण</CTableHeaderCell>
                        <CTableHeaderCell scope="col">अतिक्रमित क्षेत्र</CTableHeaderCell>
                        <CTableHeaderCell scope="col">अतिक्रमण करणाराचे नाव</CTableHeaderCell>
                        <CTableHeaderCell>
                          अतिक्रमणांचा दिनांक आणी जमिनीचा करण्यात येणारा उपयोग
                        </CTableHeaderCell>
                        <CTableHeaderCell>
                          अतिक्रमणाबाबत केलेल्या कार्यवाहीचा तपशील व दिनांक
                        </CTableHeaderCell>
                        <CTableHeaderCell>
                          सार्वजनिक मार्गाधिकार आणी सुविधाधिकार सार्वजनिक मार्गाधिकार आणी
                          सुविधाधिकार
                        </CTableHeaderCell>
                        <CTableHeaderCell>शेरा</CTableHeaderCell>
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
                        <CTableHeaderCell>9</CTableHeaderCell>
                        <CTableHeaderCell>10</CTableHeaderCell>
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
