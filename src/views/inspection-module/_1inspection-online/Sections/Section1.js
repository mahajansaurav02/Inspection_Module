import React, { useState } from 'react'
import { CTooltip } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addInspectionDetailsOnline, selectState } from '../../../../slices/InspectionOnlineSlice'
import { CButton, CFormCheck, CFormTextarea, CTable, CTableBody } from '@coreui/react'

const Section1 = () => {
  const [visible, setVisible] = useState(false)
  const [selectedTable, setSelectedtable] = useState('')
  const dispatch = useDispatch()
  const reduxInspectionState = useSelector(selectState)

  const handleChange = (e) => {
    const { name, value } = e?.target

    if (name == 'que1' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1: {
            ...reduxInspectionState?.que1,
            [name]: value,
            remarksQue1: '',
          },
        }),
      )
    } else if (name == 'que1' || name == 'remarksQue1') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1: { ...reduxInspectionState?.que1, [name]: value },
        }),
      )
    }
  }

  const handleShowTable = (val) => {
    setSelectedtable(val)
    setVisible(!visible)
  }
  return (
    <>
      <CTable bordered>
        <thead>
          <tr>
            {/* <th colSpan={6} style={{ textAlign: 'center' }}>
              गाव नमुना१ - अ ते ई (online offline दप्तराची तपासणी)
            </th> */}
          </tr>
        </thead>
        <CTableBody>
          {/*-----------------------------------------------------------------------------Que No.9a---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>1</th>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>गाव नमुना १</th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}
            >
              गाव नमुना १ (आकारबंद) मधील सर्वे/गा. क्र. मध्ये क्षेत्राची तफावत आहे काय?
            </td>
            <td
              style={{ textAlign: 'center' }}
              rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}
            >
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  //   onClick={() => handleShowTable('que1')}
                  color="success"
                  variant="outline"
                >
                  Live
                </CButton>
                <CButton
                  //   onClick={() => handleShowTable('que1')}
                  color="success"
                  variant="outline"
                >
                  ODC
                </CButton>
                <CButton
                  //   onClick={() => handleShowTable('que1')}
                  color="success"
                  variant="outline"
                >
                  Difference
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1?.que1 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1?.que1 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1?.que1 == 'होय' && (
            <tr>
              <td colSpan={2}>
                <CTooltip
                  content={
                    <p style={{ textAlign: 'left' }}>
                      <h6 style={{ color: 'red' }}>टिप:</h6>
                      <h6>1. सादर गावात एकूण सर्वे क्रमांक / गाट क्रमांक मध्ये फरक आहे काय.</h6>
                      <h6>2. क्षेत्रा मध्ये तफावत असलेले एकूण सर्वे क्रमांक नमूद करा.</h6>
                      <h6>3. गावाची एकूण क्षेत्र व आकारणी साठी बेरीज जुळते काय. </h6>
                    </p>
                  }
                  placement="left"
                >
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1"
                    rows={3}
                    value={reduxInspectionState?.que1?.remarksQue1}
                    onChange={handleChange}
                  />
                </CTooltip>
              </td>
            </tr>
          )}

          {/* ------------------------------------Question2----------------------- */}
          <tr>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>2</th>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>गाव नमुना १-अ</th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}
            >
              सादर गावात वन जमिनी आहे काय?
            </td>
            <td
              style={{ textAlign: 'center' }}
              rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}
            >
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  //   onClick={() => handleShowTable('que1')}
                  color="success"
                  variant="outline"
                >
                  अ
                </CButton>
                {/* <CButton
                  //   onClick={() => handleShowTable('que1')}
                  color="success"
                  variant="outline"
                >
                  ODC
                </CButton> */}
                {/* <CButton
                  //   onClick={() => handleShowTable('que1')}
                  color="success"
                  variant="outline"
                >
                  Difference
                </CButton> */}
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1?.que1 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1?.que1 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1?.que1 == 'होय' && (
            <tr>
              <td colSpan={2}>
                <CTooltip
                  content={
                    <p style={{ textAlign: 'left' }}>
                      <h6 style={{ color: 'red' }}>टिप:</h6>
                      <h6>1. सादर गावात एकूण सर्वे क्रमांक / गाट क्रमांक मध्ये फरक आहे काय.</h6>
                      <h6>2. क्षेत्रा मध्ये तफावत असलेले एकूण सर्वे क्रमांक नमूद करा.</h6>
                      <h6>3. गावाची एकूण क्षेत्र व आकारणी साठी बेरीज जुळते काय. </h6>
                    </p>
                  }
                  placement="left"
                >
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1"
                    rows={3}
                    value={reduxInspectionState?.que1?.remarksQue1}
                    onChange={handleChange}
                  />
                </CTooltip>
              </td>
            </tr>
          )}
          {/* -----------------------------------------------------------------------------Que No.9a---
          <tr>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'नाही' ? 2 : 1}>1</th>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'नाही' ? 2 : 1}>गाव नमुना १</th>
            <td
              rowSpan={reduxInspectionState?.que1?.que1 == 'नाही' ? 2 : 1}
              style={{ width: '30vw' }}
            >
              गाव नमुना १ (आकारबंद) मधील सर्वे/गा. क्र. मध्ये क्षेत्राची तफावत आहे काय?
            </td>
            <th
              rowSpan={reduxInspectionState?.que1?.que1 == 'नाही' ? 2 : 1}
              style={{ display: 'flex', textAlign: 'center', justifyContent: 'space-around' }}
            >
              <CButton
                //   onClick={() => handleShowTable('que1')}
                color="success"
                variant="outline"
              >
                Live
              </CButton>
              <CButton
                //   onClick={() => handleShowTable('que1')}
                color="success"
                variant="outline"
              >
                ODC
              </CButton>
              <CButton
                //   onClick={() => handleShowTable('que1')}
                color="success"
                variant="outline"
              >
                Difference
              </CButton>
            </th>
            <td>
              <CFormCheck
                type="radio"
                name="que1"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1?.que1 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1?.que1 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1?.que1 == 'होय' && (
            <tr>
              <td colSpan={2}>
                <CFormTextarea
                  type="text"
                  placeholder="शेरा..."
                  name="remarksQue1"
                  rows={3}
                  value={reduxInspectionState?.que1?.remarksQue1}
                  onChange={handleChange}
                  // required
                />
              </td>
            </tr>
          )} */}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Section1
