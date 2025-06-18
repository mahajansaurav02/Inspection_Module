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

const CircularDataentryForm5 = ({ isEdit = null }) => {
  const [talathiName, setTalathiName] = useState()
  const [villagename, setVillageName] = useState()
  const [circlename, setCircleName] = useState()
  const [sajja, setSajja] = useState()

  const [allFormVal, setAllFormVal] = useState({
    pintopin8: '',
    total_area: '',
    area_of_encroached: '',
    name_of_encroacher: '',
    date_of_encroachment: '',
    purpose_of_encroachment_land: '',
    date_of_decision_on_encroachment: '',
    details_of_action_taken_regarding_encroachment: '',
    public_rights_of_way_and_easements: '',
    remarks: '',
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target
    setAllFormVal({ ...allFormVal, [name]: value })
  }
  const navigateToDataentryPage = () => {
    navigate('/Mandal_Office/DataEntryForm/CircularVillageForm5')
    handlerReset()
  }
  const handlerReset = () => {
    setAllFormVal({
      pintopin8: '',
      total_area: '',
      area_of_encroached: '',
      name_of_encroacher: '',
      date_of_encroachment: '',
      purpose_of_encroachment_land: '',
      date_of_decision_on_encroachment: '',
      details_of_action_taken_regarding_encroachment: '',
      public_rights_of_way_and_easements: '',
      remarks: '',
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.info('Mandal Namuna 5 Form Values:->', allFormVal)
    const inputParams = {
      // talathiName: talathiName,
      // gaoName: villagename,
      // sajagaoName: sajja,

      pintopin8: allFormVal?.pintopin8,
      total_area: allFormVal?.total_area,
      area_of_encroached: allFormVal?.area_of_encroached,
      name_of_encroacher: allFormVal?.name_of_encroacher,
      date_of_encroachment: allFormVal?.date_of_encroachment,
      purpose_of_encroachment_land: allFormVal?.purpose_of_encroachment_land,
      date_of_decision_on_encroachment: allFormVal?.date_of_decision_on_encroachment,
      details_of_action_taken_regarding_encroachment:
        allFormVal?.details_of_action_taken_regarding_encroachment,
      public_rights_of_way_and_easements: allFormVal?.public_rights_of_way_and_easements,
      remarks: allFormVal?.remarks,
    }
    axios
      .post(`${URLS?.MandalURL}/mandalNamuna5/saveMandalNamuna5Data`, inputParams, {
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
                      <strong> मंडळ नमुना पाच (Dataentry)</strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CForm>
                <div>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">भूमापन क्रमांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="pintopin8"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="pintopin8"
                          placeholder="भूमापन क्रमांक"
                          value={allFormVal.pintopin8}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">एकूण क्षेत्र</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="total_area"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="total_area"
                          placeholder="एकूण क्षेत्र"
                          value={allFormVal.total_area}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">अतिक्रमित क्षेत्र</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="area_of_encroached"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="area_of_encroached"
                          placeholder="अतिक्रमित क्षेत्र"
                          value={allFormVal.area_of_encroached}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">अतिक्रमण करणाराचे नाव</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="name_of_encroacher"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="name_of_encroacher"
                          placeholder="अतिक्रमण करणाराचे नाव"
                          value={allFormVal.name_of_encroacher}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">अतिक्रमणांचा दिनांक</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="date_of_encroachment"
                          size="lg"
                          type="date"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="date_of_encroachment"
                          placeholder="अतिक्रमणांचा दिनांक"
                          value={allFormVal.date_of_encroachment}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">
                        अतिक्रमण जमिनीचा करण्यात येणारा उपयोग
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="purpose_of_encroachment_land"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="purpose_of_encroachment_land"
                          placeholder="अतिक्रमण जमिनीचा करण्यात येणारा उपयोग"
                          value={allFormVal.purpose_of_encroachment_land}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">
                        अतिक्रमणाबाबत केलेल्या कार्यवाहीचा तपशील
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="details_of_action_taken_regarding_encroachment"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="details_of_action_taken_regarding_encroachment"
                          placeholder="अतिक्रमणाबाबत केलेल्या कार्यवाहीचा तपशील"
                          value={allFormVal.details_of_action_taken_regarding_encroachment}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">
                        अतिक्रमणाबाबत केलेल्या कार्यवाहीची दिनांक
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="date_of_decision_on_encroachment"
                          size="lg"
                          type="date"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="date_of_decision_on_encroachment"
                          placeholder="अतिक्रमणाबाबत केलेल्या कार्यवाहीची दिनांक"
                          value={allFormVal.date_of_decision_on_encroachment}
                        />
                      </CInputGroup>
                    </CCol>
                  </CRow>

                  <CRow>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">
                        सार्वजनिक मार्गाधिकार आणी सुविधाधिकार सार्वजनिक मार्गाधिकार आणी सुविधाधिकार
                      </CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="public_rights_of_way_and_easements"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="public_rights_of_way_and_easements"
                          placeholder="सार्वजनिक मार्गाधिकार आणी सुविधाधिकार सार्वजनिक मार्गाधिकार आणी सुविधाधिकार"
                          value={allFormVal.public_rights_of_way_and_easements}
                        />
                      </CInputGroup>
                    </CCol>
                    <CCol xs={12} sm={6} md={6}>
                      <CFormLabel htmlFor="basic-url">शेरा</CFormLabel>
                      <CInputGroup className="mb-3">
                        <CFormInput
                          id="remarks"
                          size="lg"
                          aria-describedby="basic-addon3"
                          onChange={(e) => handleChange(e)}
                          name="remarks"
                          placeholder="शेरा"
                          value={allFormVal.remarks}
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

export default CircularDataentryForm5
