import { CFormCheck, CFormFeedback, CFormInput, CTable } from '@coreui/react'
import React, { useState } from 'react'
import FormRowYesNo from '../ResuableComponents/FormRowYesNo'
import { useDispatch, useSelector } from 'react-redux'
import { selectState, addInspectionDetails } from '../../../../slices/InspectionSlice'

const Section2 = ({ valueQ5, handleChangeQ5, handleBlurQ5, handleTouchedQ5, handleErrorsQ5 }) => {
  // console.info('valueQ5->>', valueQ5)
  const dispatch = useDispatch()
  const reduxInspectionState = useSelector(selectState)
  const handleChange = (e) => {
    const { value, name } = e?.target
    if (name == 'que6') {
      dispatch(addInspectionDetails({ ...reduxInspectionState, [name]: value }))
    } else if (name == 'que7' && value == 'नाही') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que7: {
            ...reduxInspectionState?.que7,
            [name]: value,
            goshwaraShetraQue7: '',
            aakarQue7: '',
          },
        }),
      )
    } else if (name == 'que7' || name == 'goshwaraShetraQue7' || name == 'aakarQue7') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que7: { ...reduxInspectionState?.que7, [name]: value },
        }),
      )
    } else {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que5: { ...reduxInspectionState?.que5, [name]: value },
        }),
      )
    }
  }
  return (
    <CTable bordered>
      <thead>
        <tr>
          <th colSpan={4} style={{ textAlign: 'center' }}>
            गाव नमुना- १ व गोषवारा
          </th>
        </tr>
      </thead>
      <tbody>
        {/*------------------------------------------------------------------Que No.5---*/}
        <tr>
          <th rowSpan={8}>5</th>
          <td rowSpan={8}>
            गा.न.क्र. १ मधील दुरुस्त केलेल्या तीन नोंदी घ्या व त्यांच्या अनुषंगिक नोंदीसाठी फ.
            क.जा.प., आकारफोड. पत्रक, कबुलायत, गा.न.क्र.७/१२, १ क. २ आणि ३ यांची तपासणी करा ?
          </td>
          <td>नोंद क्र.</td>
          <td>
            <CFormInput
              type="text"
              placeholder="नोंद क्र."
              name="nondKramank"
              value={valueQ5?.nondKramank}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.nondKramank && !!handleErrorsQ5?.nondKramank}
              feedbackInvalid={handleErrorsQ5?.nondKramank}
              required
            />
          </td>
        </tr>
        <tr>
          <td>कजाप</td>
          <td>
            <CFormInput
              type="text"
              placeholder="कजाप"
              name="kajapa"
              value={valueQ5?.kajapa}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.kajapa && !!handleErrorsQ5?.kajapa}
              feedbackInvalid={handleErrorsQ5?.kajapa}
              required
            />
          </td>
        </tr>
        <tr>
          <td>आकारफोड पत्रक</td>
          <td>
            <CFormInput
              type="text"
              placeholder="आकारफोड पत्रक"
              name="akarfodPatrak"
              value={valueQ5?.akarfodPatrak}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.akarfodPatrak && !!handleErrorsQ5?.akarfodPatrak}
              feedbackInvalid={handleErrorsQ5?.akarfodPatrak}
              required
            />
          </td>
        </tr>
        <tr>
          <td>कबुलायत</td>
          <td>
            <CFormInput
              type="text"
              placeholder="कबुलायत"
              name="kabulayat"
              value={valueQ5?.kabulayat}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.kabulayat && !!handleErrorsQ5?.kabulayat}
              feedbackInvalid={handleErrorsQ5?.kabulayat}
              required
            />
          </td>
        </tr>
        <tr>
          <td>गा.न.७/१२</td>
          <td>
            <CFormInput
              type="text"
              placeholder="गा.न.७/१२"
              name="gaonNo7_12"
              value={valueQ5?.gaonNo7_12}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.gaonNo7_12 && !!handleErrorsQ5?.gaonNo7_12}
              feedbackInvalid={handleErrorsQ5?.gaonNo7_12}
              required
            />
          </td>
        </tr>
        <tr>
          <td>गा.न.१क</td>
          <td>
            <CFormInput
              type="text"
              placeholder="गा.न.१क"
              name="gaonNo1C"
              value={valueQ5?.gaonNo1C}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.gaonNo1C && !!handleErrorsQ5?.gaonNo1C}
              feedbackInvalid={handleErrorsQ5?.gaonNo1C}
              required
            />
          </td>
        </tr>
        <tr>
          <td>गा.न. २</td>
          <td>
            <CFormInput
              type="text"
              placeholder="गा.न. २"
              name="gaonNo2"
              value={valueQ5?.gaonNo2}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.gaonNo2 && !!handleErrorsQ5?.gaonNo2}
              feedbackInvalid={handleErrorsQ5?.gaonNo2}
              required
            />
          </td>
        </tr>
        <tr>
          <td>गा.न. ३</td>
          <td>
            <CFormInput
              type="text"
              placeholder="गा.न. ३"
              name="gaonNo3"
              value={valueQ5?.gaonNo3}
              onChange={(e) => {
                handleChangeQ5(e)
                handleChange(e)
              }}
              onBlur={handleBlurQ5}
              invalid={handleTouchedQ5?.gaonNo3 && !!handleErrorsQ5?.gaonNo3}
              feedbackInvalid={handleErrorsQ5?.gaonNo3}
              required
            />
          </td>
        </tr>
        {/*------------------------------------------------------------------Que No.6---*/}
        <FormRowYesNo
          value={reduxInspectionState?.que6}
          handleChange={handleChange}
          formLabel1="6"
          formLabel2="गा.न.क्र. १ मध्ये केलल्या दुरस्तीप्रमाणे गोषवान्वात दुरुस्ती केली आहे काय ?"
          name="que6"
        />
        {/*------------------------------------------------------------------Que No.7---*/}
        <tr>
          <th rowSpan={3}>7</th>
          <td rowSpan={3} style={{ width: '30vw' }}>
            गोषवान्यातील क्षेत्र व आकार गावचे अंतिम कमी जास्त पत्रक, गा.न.क्र. १अ, श्व, एक. २ आणि ३
            मध्ये दर्शविलेले क्षेत्र व आकारणी बाबत जुळतात का ते पहा.
          </td>
          <td>
            <CFormCheck
              type="radio"
              name="que7"
              id="8c11"
              value="होय"
              label="होय"
              checked={reduxInspectionState?.que7?.que7 == 'होय'}
              onChange={handleChange}
            />
          </td>
          <td>
            <CFormCheck
              type="radio"
              name="que7"
              id="8c22"
              value="नाही"
              label="नाही"
              checked={reduxInspectionState?.que7?.que7 == 'नाही'}
              onChange={handleChange}
            />
          </td>
        </tr>
        {reduxInspectionState?.que7?.que7 == 'होय' && (
          <>
            <tr>
              <td>गोषवारा क्षेत्र...</td>
              <td>
                <CFormInput
                  type="text"
                  placeholder="गोषवारा क्षेत्र..."
                  name="goshwaraShetraQue7"
                  // value={reduxInspectionState?.que7?.goshwaraShetraQue7}
                  // onChange={handleChange}
                  value={valueQ5?.que7?.goshwaraShetraQue7}
                  onChange={(e) => {
                    handleChangeQ5(e)
                    handleChange(e)
                  }}
                  onBlur={handleBlurQ5}
                  invalid={
                    handleTouchedQ5?.goshwaraShetraQue7 && !!handleErrorsQ5?.goshwaraShetraQue7
                  }
                  feedbackInvalid={handleErrorsQ5?.goshwaraShetraQue7}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>व आकार ..</td>
              <td>
                <CFormInput
                  type="text"
                  placeholder="व आकार .."
                  name="aakarQue7"
                  value={reduxInspectionState?.que7?.aakarQue7}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </>
        )}
      </tbody>
    </CTable>
  )
}

export default Section2
