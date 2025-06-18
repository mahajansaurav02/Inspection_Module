/*------Q.1 to Q.4----[Section 1]------गाव नमुना १ (जमिनींची नोंदवही (आफारबंद) मुदत- जमाबंदीचा कालावधी.*/
import React from 'react'
import { CFormLabel, CTable, CTableBody, CTableHead, CTableRow } from '@coreui/react'
import FormRowYesNo from '../ResuableComponents/FormRowYesNo'
import { useDispatch, useSelector } from 'react-redux'
import { addInspectionDetails, selectState } from '../../../../slices/InspectionSlice'

const Section1 = () => {
  const dispatch = useDispatch()
  const reduxInspectionState = useSelector(selectState)
  const handleChange = (e) => {
    const { name, value } = e?.target

    if (name == 'que1a' && value == 'नाही') {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value, que1a1: 'नाही' }))
    } else if (name == 'que3a' && value == 'नाही') {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value, que3a1: 'नाही' }))
    } else if (name == 'que4a' && value == 'नाही') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          [name]: value,
          que4a1: 'नाही',
          que4a2: 'नाही',
        }),
      )
    } else if (name == 'que4a1' && value == 'नाही') {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value, que4a2: 'नाही' }))
    } else {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value }))
    }
  }
  return (
    <CTable
      hover
      bordered
      // captionTop={
      //   <span style={{ fontWeight: 'bolder', color: 'black', textAlign: 'center' }}>
      //     गाव नमुना १ (जमिनींची नोंदवही (आफारबंद) मुदत- जमाबंदीचा कालावधी.
      //   </span>
      // }
    >
      {/* <CTableHead> */}
      {/* <CTableRow style={{ alignItems: 'center' }}>
          <CFormLabel htmlFor="auditformMR.header.formTitle">
            <strong>गाव नमुना १ (जमिनींची नोंदवही (आफारबंद) मुदत- जमाबंदीचा कालावधी.</strong>
          </CFormLabel>
        </CTableRow> */}
      <thead>
        <tr>
          <th colSpan={4} style={{ textAlign: 'center' }}>
            गाव नमुना १ (जमिनींची नोंदवही (आफारबंद) मुदत- जमाबंदीचा कालावधी.
          </th>
        </tr>
      </thead>
      {/* </CTableHead> */}
      <CTableBody>
        <FormRowYesNo
          value={reduxInspectionState?.que1a}
          handleChange={handleChange}
          formLabel1="1 a"
          formLabel2="गा.न.क्र.१ (आकारबंद) दप्तरी ठेवण्यात आलेला आहे काय?"
          name="que1a"
        />
        {reduxInspectionState?.que1a == 'होय' && (
          <FormRowYesNo
            value={reduxInspectionState?.que1a1}
            handleChange={handleChange}
            formLabel1="1 a .1"
            formLabel2="असल्यास त्यात घेतलेल्या नोंदी बरोबर आहेत का?"
            name="que1a1"
          />
        )}
        <FormRowYesNo
          value={reduxInspectionState?.que2}
          handleChange={handleChange}
          formLabel1="2"
          formLabel2="जिल्हा अधिक्षक भूमी अभिलेख यांचेकडून आलेली पोटहिस्सा आणि कम-जास्ती पत्रके दप्तरी उपलब्ध आहेत काय ?"
          name="que2"
        />
        <FormRowYesNo
          value={reduxInspectionState?.que3a}
          handleChange={handleChange}
          formLabel1="3 a"
          formLabel2="आलेल्या पोटहिस्सा आणि कम-जास्ती पत्रकांच्या आधारे योग्य तो दुरुस्ती गा.न.क्र.१ मध्ये करण्यात आली आहे काय ?"
          name="que3a"
        />

        {reduxInspectionState?.que3a == 'होय' && (
          <FormRowYesNo
            value={reduxInspectionState?.que3a1}
            handleChange={handleChange}
            formLabel1="3 a .1"
            formLabel2="ते पहा."
            name="que3a1"
          />
        )}
        <FormRowYesNo
          value={reduxInspectionState?.que4a}
          handleChange={handleChange}
          formLabel1="4 a"
          formLabel2=" गा.न.क्र.१ चा गोषवारा मागील वर्षाकरीता तयार केलेला आहे का ?"
          name="que4a"
        />

        {reduxInspectionState?.que4a == 'होय' && (
          <FormRowYesNo
            value={reduxInspectionState?.que4a1}
            handleChange={handleChange}
            formLabel1="4 a .1"
            formLabel2="असल्यास तो परीपूर्ण आहे का ?"
            name="que4a1"
          />
        )}
        {reduxInspectionState?.que4a1 == 'होय' && (
          <FormRowYesNo
            value={reduxInspectionState?.que4a2}
            handleChange={handleChange}
            formLabel1="4 a .2"
            formLabel2="त्यातील नोंदी गा.न.क्र.५ मधील नोंदीशी जुळतात का ?"
            name="que4a2"
          />
        )}
      </CTableBody>
    </CTable>
  )
}

export default Section1
