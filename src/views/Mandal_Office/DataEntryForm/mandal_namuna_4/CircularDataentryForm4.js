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

const CircularDataentryForm4 = ({ isEdit = null }) => {
  const [talathiName, setTalathiName] = useState()
  const [villagename, setVillageName] = useState()
  const [circlename, setCircleName] = useState()
  const [sajja, setSajja] = useState()

  const [allFormVal, setAllFormVal] = useState({
    visitingOfficerName: '',
    visitingOfficerRank: '',
    visitDate: '',
    visitReason: '',
    remarks: '',
    visitingOfficerSignature: '',
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setAllFormVal({ ...allFormVal, [name]: value })
  }
  const navigateToDataentryPage = () => {
    navigate('/Mandal_Office/DataEntryForm/CircularVillageForm4')
    handlerReset()
  }
  const handlerReset = () => {
    setAllFormVal({
      visitingOfficerName: '',
      visitingOfficerRank: '',
      visitDate: '',
      visitReason: '',
      remarks: '',
      visitingOfficerSignature: '',
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Mandal Namuna 4 Form Values:->', allFormVal)
    const inputParams = {
      // talathiName: talathiName,
      // gaoName: villagename,
      // sajagaoName: sajja,

      visitingOfficerName: allFormVal?.visitingOfficerName,
      visitingOfficerRank: allFormVal?.visitingOfficerRank,
      visitDate: allFormVal?.visitDate,
      visitReason: allFormVal?.visitReason,
      remarks: allFormVal?.remarks,
      visitingOfficerSignature: allFormVal?.visitingOfficerSignature,
    }
    axios
      .post(`${URLS?.MandalURL}/mandalNamuna4/saveMandalNamuna4Data`, inputParams, {
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
                      <strong> मंडळ नमुना चार (Dataentry)</strong>
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
                      <CFormLabel htmlFor="basic-url">भेट देणाऱ्या अधिकाऱ्याचे नाव</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="visitingOfficerName"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="visitingOfficerName"
                          placeholder="भेट देणाऱ्या अधिकाऱ्याचे नाव"
                          value={allFormVal.visitingOfficerName}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">भेट देणाऱ्या अधिकाऱ्याचे हुद्दा</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="visitingOfficerRank"
                          size="lg"
                          type="date"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="visitingOfficerRank"
                          placeholder="भेट देणाऱ्या अधिकाऱ्याचे हुद्दा"
                          value={allFormVal.visitingOfficerRank}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">भेटीचा दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="visitDate"
                          size="lg"
                          type="date"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="visitDate"
                          placeholder="भेटीचा दिनांक"
                          value={allFormVal.visitDate}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">भेटीचे कारण</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="visitReason"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="visitReason"
                          placeholder="भेटीचे कारण"
                          value={allFormVal.visitReason}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">शेरा / शक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="actionTaken"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="actionTaken"
                          placeholder="शेरा / शक"
                          value={allFormVal.actionTaken}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">
                        भेट देणाऱ्या अधिकाऱ्याची स्वाक्षरी
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="visitingOfficerSignature"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="visitingOfficerSignature"
                          placeholder="भेट देणाऱ्या अधिकाऱ्याची स्वाक्षरी"
                          value={allFormVal.visitingOfficerSignature}
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

export default CircularDataentryForm4
