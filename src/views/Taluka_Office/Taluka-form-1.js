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

const TalukaForm1 = () => {
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
                      <strong> तालुका नमुना १ जमिनींची नोंदवही </strong>
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
                    <CTableHead color="primary">
                      <CTableRow>
                        <CTableHeaderCell>अ. क्र.</CTableHeaderCell>
                        <CTableHeaderCell>गाव</CTableHeaderCell>
                        <CTableHeaderCell colSpan={7}>
                          लागवडीसाठी उपलब्ध जमिनीचे क्षेत्र
                        </CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell colSpan={9}>आकारी</CTableHeaderCell>
                        <CTableHeaderCell colSpan={2}>बिन आकारी </CTableHeaderCell>
                        <CTableHeaderCell>
                          लागवडीकरिता एकूण क्षेत्र (९ ते १२ ची बेरीज)
                        </CTableHeaderCell>
                        <CTableHeaderCell colSpan={5}>
                          लागवडीसाठी उपलब्ध नसलेले जमिनीचे क्षेत्र{' '}
                        </CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell colSpan={4}>भोगवट्याची बिनदुमाला</CTableHeaderCell>
                        <CTableHeaderCell>बिनभोगवट्याची</CTableHeaderCell>
                        <CTableHeaderCell>
                          विशेष करारान्व्यये महसूल माफ किंवा कम महसुली जमीन
                        </CTableHeaderCell>
                        <CTableHeaderCell>दुमाला</CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell colSpan={3}>लागवड अयोग्य</CTableHeaderCell>
                        <CTableHeaderCell colSpan={2}>
                          सार्वजनिक किंवा विशेष वापरासठी नेमून दिलेली{' '}
                        </CTableHeaderCell>
                        <CTableHeaderCell colSpan={5}>
                          सार्वजनिक किंवा विशेष वापरासाठी नेमून दिलेली{' '}
                        </CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                        <CTableHeaderCell></CTableHeaderCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="col">अनु.क्रमांक</CTableHeaderCell>
                        <CTableHeaderCell scope="col" colSpan={2}>
                          भोगवटादार वर्ग एक
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">भोगवटादार वर्ग दोन</CTableHeaderCell>
                        <CTableHeaderCell scope="col">सरकारी पट्टेदार</CTableHeaderCell>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                        {/* <CTableHeaderCell scope="col"></CTableHeaderCell> */}
                        <CTableHeaderCell scope="col">
                          एकूण आकारणी केलेले (३ ते ८ ची बेरीज)
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">बिनभोगवट्याची</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          विशेष वापरासाठी नेमून दिलेली जमीन (उदा. कृषी क्षेत्र, भात पैदास केंद्र ई.)
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">एकूण बिन आकारी (१० + ११)</CTableHeaderCell>
                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                        <CTableHeaderCell scope="col">पोटखराबा</CTableHeaderCell>
                        <CTableHeaderCell scope="col">नदया व नाले </CTableHeaderCell>
                        <CTableHeaderCell scope="col">एकूण लागवड अयोग्य (१४ + १५)</CTableHeaderCell>
                        <CTableHeaderCell scope="col">वन</CTableHeaderCell>
                        <CTableHeaderCell scope="col">कुरण</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          विनामूल्य गायराने, गुरांचे तळ
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">गावठाण</CTableHeaderCell>
                        <CTableHeaderCell scope="col">तलाव</CTableHeaderCell>
                        <CTableHeaderCell scope="col">स्मशानभूमी</CTableHeaderCell>
                        <CTableHeaderCell scope="col">रेल्वे</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          रस्ते, पाणीपूरवठ्याची साधने इत्यादी करिता दिलेला पोट खराबा
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">रस्ते व वाटा</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          कटक (कॅन्टोनमेन्ट) क्षेत्रातील जमिनी (सैनिकी छावणी, गोळीबार क्षेत्र
                          इत्यादी) साठी दिलेले क्षेत्र
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">शाळा</CTableHeaderCell>
                        <CTableHeaderCell scope="col">धर्मशाळा</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          सार्वजनिक किंवा विशेष वापरासाठी नेमून दिलेल्या जमिनीची बेरीज (१७ ते २८ ची
                          बेरीज)
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          वर्ग ७ इनामाच्या जमिनीसह अकृषिक वापराकरिता प्रदान केलेले किंवा पट्ट्याने
                          दिलेले (वापराचा प्रकार बदलल्यानंतर भूमापन क्रमांक)
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          लागवडीसाठी उपलब्ध नसलेली जमीन (१६ + २९ + ३० यांची बेरीज)
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          लागवडीसाठी उपलब्ध नसलेली जमीन (१६ + २९ + ३० यांची बेरीज)
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          गावाचे एकूण क्षेत्र (१३ व ३१ यांची बेरीज)
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">गावाची एकूण आकारणी</CTableHeaderCell>
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
                        <CTableHeaderCell>9</CTableHeaderCell>
                        <CTableHeaderCell>10</CTableHeaderCell>
                        <CTableHeaderCell>11</CTableHeaderCell>
                        <CTableHeaderCell>12</CTableHeaderCell>
                        <CTableHeaderCell>13</CTableHeaderCell>
                        <CTableHeaderCell>14</CTableHeaderCell>
                        <CTableHeaderCell>15</CTableHeaderCell>
                        <CTableHeaderCell>16</CTableHeaderCell>
                        <CTableHeaderCell>17</CTableHeaderCell>
                        <CTableHeaderCell>18</CTableHeaderCell>
                        <CTableHeaderCell>19</CTableHeaderCell>
                        <CTableHeaderCell>20</CTableHeaderCell>
                        <CTableHeaderCell>21</CTableHeaderCell>
                        <CTableHeaderCell>22</CTableHeaderCell>
                        <CTableHeaderCell>23</CTableHeaderCell>
                        <CTableHeaderCell>24</CTableHeaderCell>
                        <CTableHeaderCell>25</CTableHeaderCell>
                        <CTableHeaderCell>26</CTableHeaderCell>
                        <CTableHeaderCell>27</CTableHeaderCell>
                        <CTableHeaderCell>28</CTableHeaderCell>
                        <CTableHeaderCell>29</CTableHeaderCell>
                        <CTableHeaderCell>30</CTableHeaderCell>
                        <CTableHeaderCell>31</CTableHeaderCell>
                        <CTableHeaderCell>32</CTableHeaderCell>
                        <CTableHeaderCell>33</CTableHeaderCell>
                        <CTableHeaderCell>34</CTableHeaderCell>
                        <CTableHeaderCell>35</CTableHeaderCell>
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

export default TalukaForm1
