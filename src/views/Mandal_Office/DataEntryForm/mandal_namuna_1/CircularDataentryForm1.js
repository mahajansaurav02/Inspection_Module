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

const CircularDataentryForm1 = () => {
  const [talathiName, setTalathiName] = useState()
  const [villagename, setVillageName] = useState()
  const [circlename, setCircleName] = useState()
  const [sajja, setSajja] = useState()

  const [allFormVal, setAllFormVal] = useState({
    talathiName: talathiName,
    gaoName: villagename,
    sajagaoName: sajja,
    // talathiName: 'talathiName',
    // gaoName: 'villagename',
    // sajagaoName: 'sajja',
    mandalDate: '',
    deviceDate: '',
    laptopDate: '',
    printerDate: '',
    datacardDate: '',
    contactDetails: '',
    remark: '',
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setAllFormVal({ ...allFormVal, [name]: value })
  }
  const navigateToDataentryPage = () => {
    navigate('/Mandal_Office/DataEntryForm/CircularVillageForm1')
    handlerReset()
  }
  const handlerReset = () => {
    setAllFormVal({
      talathiName: '',
      gaoName: '',
      sajagaoName: '',
      mandalDate: '',
      deviceDate: '',
      laptopDate: '',
      printerDate: '',
      datacardDate: '',
      contactDetails: '',
      remark: '',
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Mandal Namuna 1 Form Values:->', allFormVal)
    const inputParams = {
      talathiName: talathiName,
      gaoName: villagename,
      sajagaoName: sajja,
      mandalDate: allFormVal.mandalDate,
      deviceDate: allFormVal.deviceDate,
      laptopDate: allFormVal.laptopDate,
      printerDate: allFormVal.printerDate,
      datacardDate: allFormVal.datacardDate,
      contactDetails: allFormVal.contactDetails,
      remark: allFormVal.remark,
    }
    axios
      .post(`${URLS?.MandalURL}/mandalNamuna1/saveMandalNamuna1Data`, inputParams, {
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
                      <strong> मंडळ नमुना एक (Dataentry)</strong>
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
                      <CFormLabel htmlFor="basic-url">तलाठ्याचे नाव</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="talathiName"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="talathiName"
                          placeholder={talathiName}
                          // value={allFormVal.talathiName}
                          value={allFormVal.talathiName}
                          disabled
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      {/* / साझा */}
                      <CFormLabel htmlFor="basic-url">गाव </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="gaoName"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="gaoName"
                          defaultValue={villagename}
                          placeholder={villagename}
                          // value={allFormVal.gaoName}
                          value={allFormVal.gaoName}
                          disabled
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">साझ्यातील गावे</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="sajagaoName"
                          aria-describedby="basic-addon3"
                          size="lg"
                          onChange={(e) => handleChange(e)}
                          defaultValue={sajja}
                          name="sajagaoName"
                          placeholder={sajja}
                          // value={allFormVal.sajagaoName}
                          value={allFormVal.sajagaoName}
                          disabled
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">मंडळात रुजू दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="mandalDate"
                          type="date"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="mandalDate"
                          value={allFormVal.mandalDate}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">लॅपटॉप प्राप्त झाल्याचा दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="laptopDate"
                          type="date"
                          size="lg"
                          onChange={(e) => handleChange(e)}
                          name="laptopDate"
                          value={allFormVal.laptopDate}
                        />
                      </CInputGroup>
                      <CFormLabel htmlFor="basic-url">प्रिंटर प्राप्त झाल्याचा दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="printerDate"
                          type="date"
                          size="lg"
                          onChange={(e) => handleChange(e)}
                          name="printerDate"
                          value={allFormVal.printerDate}
                        />
                      </CInputGroup>
                      <CFormLabel htmlFor="basic-url">डेटाकार्ड प्राप्त झाल्याचा दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="datacardDate"
                          type="date"
                          size="lg"
                          onChange={(e) => handleChange(e)}
                          name="datacardDate"
                          value={allFormVal.datacardDate}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">संपर्क क्रमांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="contactDetails"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          size="lg"
                          name="contactDetails"
                          placeholder="संपर्क क्रमांक"
                          value={allFormVal.contactDetails}
                        />
                      </CInputGroup>
                      <CFormLabel htmlFor="basic-url">शेरा</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="remark"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="remark"
                          placeholder="शेरा"
                          value={allFormVal.remark}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  {/* <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">शेरा</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="remark"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="remark"
                          placeholder="शेरा"
                          value={allFormVal.remark}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow> */}
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

export default CircularDataentryForm1
