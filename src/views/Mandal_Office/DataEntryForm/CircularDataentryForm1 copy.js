import React, { useState, useEffect } from 'react'
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
import URLS from 'src/URLS'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'
import { useFormik } from 'formik'
import * as yup from 'yup'

const CircularDataentryForm1 = () => {
  const [allFormVal, setAllFormVal] = useState({
    talathiName: '',
    gaoName: '',
    sajagaoName: '',
    mandalDate: '',
    deviceDate: '',
    contactDetails: '',
    remark: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAllFormVal({ ...allFormVal, [name]: value })
  }

  const handlerReset = () => {
    setAllFormVal({
      talathiName: '',
      gaoName: '',
      sajagaoName: '',
      mandalDate: '',
      deviceDate: '',
      contactDetails: '',
      remark: '',
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Mandal Namuna 1 Form Values:->', allFormVal)
    // axios
    //   .post(`http://localhost:8080/api/mandalNamuna1/saveMandalNamuna1Data`, allFormVal, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then((val) => {
    //     console.log('Data successfully sendeed to backend', val)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   })
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
                      <strong> मंडळ नमुना एक (Dataentry)</strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSave}>
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
                          placeholder="तलाठ्याचे नाव"
                          value={allFormVal.talathiName}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">गाव / साझा</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="gaoName"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="gaoName"
                          placeholder="गाव / साझा"
                          value={allFormVal.gaoName}
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
                          name="sajagaoName"
                          placeholder="साझ्यातील गावे"
                          value={allFormVal.sajagaoName}
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
                      <CFormLabel htmlFor="basic-url">
                        लॅपटॉप, प्रिंटर, डेटाकार्ड प्राप्त झाल्याचा दिनांक
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="deviceDate"
                          type="date"
                          size="lg"
                          onChange={(e) => handleChange(e)}
                          name="deviceDate"
                          value={allFormVal.deviceDate}
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
                    </CCol>
                  </CRow>
                  <CRow>
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
                  </CRow>
                </div>
                <div className="d-grid gap-4 d-md-flex justify-content-md-center">
                  <CButton type="submit" color="success" shape="rounded-1">
                    Save
                  </CButton>

                  <CButton type="reset" color="secondary" shape="rounded-1" onClick={handlerReset}>
                    Reset
                  </CButton>

                  <CButton color="danger" shape="rounded-1">
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
