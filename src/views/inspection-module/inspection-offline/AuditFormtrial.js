/* eslint-disable prettier/prettier */
import React, { useState, useRef, useEffect } from 'react'
import './auditForm.css'
import {
  CForm,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CToastBody,
  CToaster,
  CToastHeader,
  CToastClose,
  CToast,
  CFormLabel,
  CFormFeedback,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addInspectionDetails, selectState } from '../../../slices/InspectionSlice'
import Section1 from './Sections/Section1'
import Section3 from './Sections/Section3'
import Section2 from './Sections/Section2'
import axios from 'axios'
import URLS from 'src/URLS'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Section3Trial from './Sections/Section3Trial'

// const validationSchema = yup.object().shape({
//   // que5: yup.object().shape({
//   nondKramank: yup
//     .string()
//     .required('कृपया नोंद क्र. टाका')
//     .matches(/^[a-zA-Z0-9]+$/, 'कृपया विशेष चिन्ह वापरू नका')
//     .min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
//   kajapa: yup.string().required('कृपया काजाप क्र. टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
//   akarfodPatrak: yup.string().required('कृपया आकरफोड क्र. टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
//   kabulayat: yup.string().required('कृपया कबुलायत क्र. टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
//   gaonNo7_12: yup.string().required('कृपया गा.न.७/१२ टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
//   gaonNo1C: yup.string().required('कृपया गा.न.१क टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
//   gaonNo2: yup.string().required('कृपया गा.न.२ टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
//   gaonNo3: yup.number().required('कृपया गा.न.३ टाका').typeError('फक्त संख्या टाका').min(3, 'min 3'),
//   // }),

//   goshwaraShetraQue7: yup.number().when('que7.que7', {
//     is: 'होय',
//     then: yup.number().required('Special value is required'),
//     otherwise: yup.number(),
//   }),
// })

const AuditForm = () => {
  const dispatch = useDispatch()
  const values = useSelector(selectState)
  const [districtName, setDistrictName] = useState()
  const [talukaName, setTalukaName] = useState()
  const [villageName, setVillage] = useState()
  const [InspectionName, setInspectionPersonName] = useState()

  const validationSchema = yup.object().shape({
    nondKramank: yup
      .string()
      .required('कृपया नोंद क्र. टाका')
      .matches(/^[a-zA-Z0-9]+$/, 'कृपया विशेष चिन्ह वापरू नका')
      .min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
    kajapa: yup.string().required('कृपया काजाप क्र. टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
    akarfodPatrak: yup
      .string()
      .required('कृपया आकरफोड क्र. टाका')
      .min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
    kabulayat: yup.string().required('कृपया कबुलायत क्र. टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
    gaonNo7_12: yup.string().required('कृपया गा.न.७/१२ टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
    gaonNo1C: yup.string().required('कृपया गा.न.१क टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
    gaonNo2: yup.string().required('कृपया गा.न.२ टाका').min(5, 'कमीत कमी ५ शब्द पाहिजेत'),
    gaonNo3: yup.number().required('कृपया गा.न.३ टाका').typeError('फक्त संख्या टाका'),
    que7: yup.object().shape({
      goshwaraShetraQue7: yup.string().when('que7.que7', {
        is: 'होय',
        then: yup.string().required('कृपया गोषवार क्षेत्र टाका'),
      }),
    }),
  })

  const formik = useFormik({
    initialValues: values,
    validationSchema,
    onSubmit: (formValues) => {
      console.info('formikformValues', formik.errors)
      // dispatch(
      //   addInspectionDetails({
      //     ...values,
      //     que5: { ...formValues.que5 },
      //   }),
      // )

      successToast('Form successfully Saved')
    },
  })

  // const resetHandler = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     addInspectionDetails({
  //       que1a: 'नाही',
  //       que1a1: 'नाही',
  //       que2: 'नाही',
  //       que3a: 'नाही',
  //       que3a1: 'नाही',
  //       que4a: 'नाही',
  //       que4a1: 'नाही',
  //       que4a2: 'नाही',
  //       que5: {
  //         nondKramank: '',
  //         kajapa: '',
  //         akarfodPatrak: '',
  //         kabulayat: '',
  //         gaonNo7_12: '',
  //         gaonNo1C: '',
  //         gaonNo2: '',
  //         gaonNo3: '',
  //       },
  //       que6: 'नाही',
  //       que7: { que7: 'नाही', goshwaraShetraQue7: '', aakarQue7: '' },
  //       que8a: 'नाही',
  //       que8a1: 'नाही',
  //       que8b: 'नाही',
  //       que8c: 'नाही',
  //       que8c1: 'नाही',
  //     }),
  //   )
  //   infoToast('All Fields are Resetted')
  // }

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
  const VillageData = async () => {
    setDistrictName(localStorage.getItem('districtName'))
    setTalukaName(localStorage.getItem('talukaName'))
    setVillage(JSON.parse(localStorage.getItem('villageData'))[0].villageName)
    setInspectionPersonName(localStorage.getItem('marathiName'))
  }
  useEffect(() => {
    //getAllQuestions();
  }, [])
  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  useEffect(() => {
    VillageData()
  }, [])

  // console.log('formik.values->', formik.values.que5)
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
                      <strong> तलाठी दप्तर अ - ऑडीट तपासणी नमुना </strong>
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
              <CForm onSubmit={formik.handleSubmit}>
                {/*--------Q.1 to Q.4--[Section 1]------गाव नमुना १ (जमिनींची नोंदवही (आफारबंद) मुदत- जमाबंदीचा कालावधी.*/}
                <Section1 />
                {/*--------Q.5 to Q.7--[Section 2]------गाव नमुना- १ व गोषवारा.*/}
                <Section2
                  valueQ5={formik.values}
                  handleChangeQ5={formik.handleChange}
                  handleBlurQ5={formik.handleBlur}
                  handleTouchedQ5={formik.touched}
                  handleErrorsQ5={formik.errors}
                />
                {/*-----------Q.8------[Section 3]--गाव नमुना१ - अ ते ड(जमाबंदी कालावधी मात्र१ ई वार्षिक)  */}
                <Section3 />
                {/*-----------Q.8------[Section 3 TRIAL]--गाव नमुना१ - अ ते ड(online & offline)  */}
                <Section3Trial />
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

export default AuditForm
