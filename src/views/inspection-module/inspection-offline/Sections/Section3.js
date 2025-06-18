/*------Q.8------[Section 3]--गाव नमुना१ - अ ते ड(जमाबंदी कालावधी मात्र१ ई वार्षिक)--------------*/
import React from 'react'
import FormRowYesNo from '../ResuableComponents/FormRowYesNo'
import { CTable, CTableBody } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addInspectionDetails, selectState } from '../../../../slices/InspectionSlice'

const Section3 = () => {
  const dispatch = useDispatch()
  const reduxInspectionState = useSelector(selectState)
  const handleChange = (e) => {
    const { name, value } = e?.target
    if (name == 'que8a' && value == 'नाही') {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value, que8a1: 'नाही' }))
    } else if (name == 'que8c' && value == 'नाही') {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value, que8c1: 'नाही' }))
    } else {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value }))
    }
  }
  return (
    <CTable hover bordered>
      {/* <CTableHead> */}
      {/* <CTableRow style={{ alignItems: 'center' }}>
        <CFormLabel htmlFor="auditformMR.header.formTitle">
        <strong>गाव नमुना१ - अ ते ड(जमाबंदी कालावधी मात्र१ ई वार्षिक)</strong>
        </CFormLabel>
      </CTableRow> */}
      {/* <tr style={{ alignItems: 'center' }}> */}
      <thead>
        <tr>
          <th colSpan={4} style={{ textAlign: 'center' }}>
            गाव नमुना१ - अ ते ड(जमाबंदी कालावधी मात्र१ ई वार्षिक)
          </th>
        </tr>
      </thead>
      {/* </CTableHead> */}

      <CTableBody>
        <FormRowYesNo
          value={reduxInspectionState?.que8a}
          handleChange={handleChange}
          formLabel1="8 a"
          formLabel2="गा.न.क्र.१अ ते१ ई ह्या नोंदवह्या तयार केलेल्या आहेत का ?"
          name="que8a"
        />
        {reduxInspectionState?.que8a == 'होय' && (
          <FormRowYesNo
            value={reduxInspectionState?.que8a1}
            handleChange={handleChange}
            formLabel1="8 a .1"
            formLabel2="असल्यास त्या परिपूर्ण आहेत का ?"
            name="que8a1"
          />
        )}
        <FormRowYesNo
          value={reduxInspectionState?.que8b}
          handleChange={handleChange}
          formLabel1="8 b"
          formLabel2="पडताळणी क्षेत्रात तफावत आहे का ?"
          name="que8b"
        />
        <FormRowYesNo
          value={reduxInspectionState?.que8c}
          handleChange={handleChange}
          formLabel1="8 c"
          formLabel2="नोंदणी झाली आहे का ?"
          name="que8c"
        />

        {reduxInspectionState?.que8c == 'होय' && (
          <FormRowYesNo
            value={reduxInspectionState?.que8c1}
            handleChange={handleChange}
            formLabel1="8 c .1"
            formLabel2="नोंदणी अद्यायावत झाली आहे का ?"
            name="que8c1"
          />
        )}
      </CTableBody>
    </CTable>
  )
}

export default Section3
