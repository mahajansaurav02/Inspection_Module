import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CForm,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CFormInput,
  CFormLabel,
  CInputGroup,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'
import { useFormik } from 'formik'
import * as yup from 'yup'
import reqHeaders from 'src/instance/headers'
import URLS from 'src/URLS'

const CircularDataentryForm2 = () => {
  const [talathiName, setTalathiName] = useState()
  const [villagename, setVillageName] = useState()
  const [circlename, setCircleName] = useState()
  const [sajja, setSajja] = useState()

  const [allFormVal, setAllFormVal] = useState({
    incomingLetterNo: '',
    incomingLetterDate: '',
    letterReceivedFrom: '',
    detailsOfProceedingTopic: '',
    actionTaken: '',
    issuedLetterNo: '',
    issuedLetterDate: '',
    caseAbstract: '',
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setAllFormVal({ ...allFormVal, [name]: value })
  }
  const navigateToDataentryPage = () => {
    navigate('/Mandal_Office/DataEntryForm/CircularVillageForm2')
    handlerReset()
  }
  const handlerReset = () => {
    setAllFormVal({
      incomingLetterNo: '',
      incomingLetterDate: '',
      letterReceivedFrom: '',
      detailsOfProceedingTopic: '',
      actionTaken: '',
      issuedLetterNo: '',
      issuedLetterDate: '',
      caseAbstract: '',
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Mandal Namuna 2 Form Values:->', allFormVal)
    const inputParams = {
      // talathiName: talathiName,
      // gaoName: villagename,
      // sajagaoName: sajja,

      incomingLetterNo: allFormVal?.incomingLetterNo,
      incomingLetterDate: allFormVal?.incomingLetterDate,
      letterReceivedFrom: allFormVal?.letterReceivedFrom,
      detailsOfProceedingTopic: allFormVal?.detailsOfProceedingTopic,
      actionTaken: allFormVal?.actionTaken,
      issuedLetterNo: allFormVal?.issuedLetterNo,
      issuedLetterDate: allFormVal?.issuedLetterDate,
      caseAbstract: allFormVal?.caseAbstract,
    }
    axios
      .post(`${URLS?.MandalURL}/mandalNamuna2/saveMandalNamuna2Data`, inputParams, {
        headers: reqHeaders,
      })
      .then((val) => {
        console.log('Data successfully sendeed to backend', val)
        successToast('Data Successfully saved')
        handlerReset()
        //reset field
        // navogate to form
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // const getFooterData = async () => {
  //   axios
  //     .get(
  //       `${URLS.BaseURL}/form1/getForm1ReportFooter?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
  //       {
  //         headers: reqHeaders,
  //       },
  //     )
  //     .then((res) => {
  //       setVillageSite(res.data[0].villageSite)
  //       setRiver(res.data[0].riversNalas)
  //       setNalas(res.data[0].nalas)
  //       setRoadAndPath(res.data[0].roadsAndPath)
  //       setPrevRoadsAndPath(
  //         parseFloat(res.data[0].riversNalas) +
  //           parseFloat(res.data[0].nalas) +
  //           parseFloat(res.data[0].roadsAndPath),
  //       )
  //     })
  //   // setLoading(false)
  // }

  //--------------UseEffect---------------------
  useEffect(() => {
    var villageData = JSON.parse(localStorage.getItem('villageData'))
    const talathiname = localStorage.getItem('marathiName')
    console.log(villageData[0])
    setCircleName(villageData[0].circleName)
    setVillageName(villageData[0].villageName)
    setSajja(villageData[0].sajjaName)
    setTalathiName(talathiname)
    // }, [sajja, talathiName, villagename, circlename])
  }, [])
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
                      <strong> मंडळ नमुना दोन (Dataentry)</strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
            </CCardHeader>
            <CCardBody>
              {/* <CForm onSubmit={handleSave}> */}
              <CForm>
                <div>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">आवक पत्राचा क्रमांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="incomingLetterNo"
                          size="lg"
                          type="number"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="incomingLetterNo"
                          placeholder="आवक पत्राचा क्रमांक"
                          value={allFormVal.incomingLetterNo}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">आवक पत्राचा दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="incomingLetterDate"
                          size="lg"
                          type="date"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="incomingLetterDate"
                          placeholder="आवक पत्राचा दिनांक"
                          value={allFormVal.incomingLetterDate}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">पत्र कोणाकडून प्राप्त झाले</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="letterReceivedFrom"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="letterReceivedFrom"
                          placeholder="पत्र कोणाकडून प्राप्त झाले"
                          value={allFormVal.letterReceivedFrom}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">कार्यवाही खालील विषयाचा तपशील</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="detailsOfProceedingTopic"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="detailsOfProceedingTopic"
                          placeholder="कार्यवाही खालील विषयाचा तपशील"
                          value={allFormVal.detailsOfProceedingTopic}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">केलेली कार्यवाही</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="actionTaken"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="actionTaken"
                          placeholder="केलेली कार्यवाही"
                          value={allFormVal.actionTaken}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">कार्यवाही जावक क्रमांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="issuedLetterNo"
                          size="lg"
                          type="number"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="issuedLetterNo"
                          placeholder="कार्यवाही जावक"
                          value={allFormVal.issuedLetterNo}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">कार्यवाही दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="issuedLetterDate"
                          type="date"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="issuedLetterDate"
                          placeholder="कार्यवाही दिनांक"
                          value={allFormVal.issuedLetterDate}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">
                        तहसीलदार आणि अन्य वरीष्ठ अधिकाऱ्यांकडून चौकशीसाठी पाठविलेल्या अर्जांचा /
                        प्रकरणांचा गोषवारा
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="caseAbstract"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="caseAbstract"
                          placeholder="तहसीलदार आणि अन्य वरीष्ठ अधिकाऱ्यांकडून चौकशीसाठी पाठविलेल्या अर्जांचा / प्रकरणांचा गोषवारा"
                          value={allFormVal.caseAbstract}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                </div>
                <div className="d-grid gap-4 d-md-flex justify-content-md-center">
                  <CButton type="submit" color="success" shape="rounded-1" onClick={handleSave}>
                    Save
                  </CButton>

                  <CButton type="reset" color="secondary" shape="rounded-1" onClick={handlerReset}>
                    Reset
                  </CButton>

                  <CButton color="danger" shape="rounded-1" onClick={navigateToDataentryPage}>
                    Cancel
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

export default CircularDataentryForm2
