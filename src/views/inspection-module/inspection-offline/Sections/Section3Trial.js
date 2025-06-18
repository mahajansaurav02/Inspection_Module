import React, { useState } from 'react'
import FormRowYesNo from '../ResuableComponents/FormRowYesNo'
import {
  CButton,
  CFormCheck,
  CFormInput,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addInspectionDetails, selectState } from '../../../../slices/InspectionSlice'
import VillageForm1ATable from './SectionTables/VillageForm1ATable'
import VillageForm1Btable from './SectionTables/VillageForm1BTable'
import VillageForm1CTable from './SectionTables/VillageForm1CTable'
import VillageForm1DTable from './SectionTables/VillageForm1DTable'
import VillageForm1ETable from './SectionTables/VillageForm1ETable'

const Section3Trial = () => {
  const [visible, setVisible] = useState(false)
  const [selectedTable, setSelectedtable] = useState('')
  const dispatch = useDispatch()
  const reduxInspectionState = useSelector(selectState)
  const handleChange = (e) => {
    const { name, value } = e?.target
    if (name == 'que9a' && value == 'होय') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9a: {
            ...reduxInspectionState?.que9a,
            [name]: value,
            remarksQue9a: '',
          },
        }),
      )
    } else if (name == 'que9a' || name == 'remarksQue9a') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9a: { ...reduxInspectionState?.que9a, [name]: value },
        }),
      )
    }

    if (name == 'que9b' && value == 'होय') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9b: {
            ...reduxInspectionState?.que9b,
            [name]: value,
            remarksQue9b: '',
          },
        }),
      )
    } else if (name == 'que9b' || name == 'remarksQue9b') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9b: { ...reduxInspectionState?.que9b, [name]: value },
        }),
      )
    }

    if (name == 'que9c' && value == 'होय') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9c: {
            ...reduxInspectionState?.que9c,
            [name]: value,
            remarksQue9c: '',
          },
        }),
      )
    } else if (name == 'que9c' || name == 'remarksQue9c') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9c: { ...reduxInspectionState?.que9c, [name]: value },
        }),
      )
    }

    if (name == 'que9d' && value == 'होय') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9d: {
            ...reduxInspectionState?.que9d,
            [name]: value,
            remarksQue9d: '',
          },
        }),
      )
    } else if (name == 'que9d' || name == 'remarksQue9d') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9d: { ...reduxInspectionState?.que9d, [name]: value },
        }),
      )
    }

    if (name == 'que9e' && value == 'होय') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9e: {
            ...reduxInspectionState?.que9e,
            [name]: value,
            remarksQue9e: '',
          },
        }),
      )
    } else if (name == 'que9e' || name == 'remarksQue9e') {
      dispatch(
        addInspectionDetails({
          ...reduxInspectionState,
          que9e: { ...reduxInspectionState?.que9e, [name]: value },
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
      <CModal
        alignment="center"
        // scrollable
        size="xl"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">
            {selectedTable == 'que9a' && 'गाव नमुना १ - अ तक्ता'}
            {selectedTable == 'que9b' && 'गाव नमुना १ - ब तक्ता'}
            {selectedTable == 'que9c' && 'गाव नमुना १ - क तक्ता'}
            {selectedTable == 'que9d' && 'गाव नमुना १ - ड तक्ता'}
            {selectedTable == 'que9e' && 'गाव नमुना १ - ई तक्ता'}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedTable == 'que9a' && <VillageForm1ATable />}
          {selectedTable == 'que9b' && <VillageForm1Btable />}
          {selectedTable == 'que9c' && <VillageForm1CTable />}
          {selectedTable == 'que9d' && <VillageForm1DTable />}
          {selectedTable == 'que9e' && <VillageForm1ETable />}
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
      <CTable bordered>
        <thead>
          <tr>
            <th colSpan={6} style={{ textAlign: 'center' }}>
              गाव नमुना१ - अ ते ई (online offline दप्तराची तपासणी)
            </th>
          </tr>
        </thead>
        <CTableBody>
          {/*-----------------------------------------------------------------------------Que No.9a---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que9a?.que9a == 'नाही' ? 2 : 1}>9 a</th>
            <th rowSpan={reduxInspectionState?.que9a?.que9a == 'नाही' ? 2 : 1}>गाव नमुना १ - अ</th>
            <td
              rowSpan={reduxInspectionState?.que9a?.que9a == 'नाही' ? 2 : 1}
              style={{ width: '30vw' }}
            >
              गाव नमुना १ - अ हस्तलिखित गाव नमुना सोबत जुळतो का?
            </td>
            <th
              rowSpan={reduxInspectionState?.que9a?.que9a == 'नाही' ? 2 : 1}
              style={{ textAlign: 'center' }}
            >
              <CButton onClick={() => handleShowTable('que9a')} color="success" variant="outline">
                पहा
              </CButton>
            </th>
            <td>
              <CFormCheck
                type="radio"
                name="que9a"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que9a?.que9a == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que9a"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que9a?.que9a == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que9a?.que9a == 'नाही' && (
            <tr>
              {/* <td>शेरा...</td> */}
              <td colSpan={2}>
                <CFormTextarea
                  type="text"
                  placeholder="शेरा..."
                  name="remarksQue9a"
                  rows={3}
                  value={reduxInspectionState?.que9a?.remarksQue9a}
                  onChange={handleChange}
                  // required
                />
              </td>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9b---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que9b?.que9b == 'नाही' ? 2 : 1}>9 b</th>
            <th rowSpan={reduxInspectionState?.que9b?.que9b == 'नाही' ? 2 : 1}>गाव नमुना १ - ब</th>
            <td
              rowSpan={reduxInspectionState?.que9b?.que9b == 'नाही' ? 2 : 1}
              style={{ width: '30vw' }}
            >
              गाव नमुना १ - ब हस्तलिखित गाव नमुना सोबत जुळतो का?
            </td>
            <th
              rowSpan={reduxInspectionState?.que9b?.que9b == 'नाही' ? 2 : 1}
              style={{ textAlign: 'center' }}
            >
              <CButton onClick={() => handleShowTable('que9b')} color="success" variant="outline">
                पहा
              </CButton>
            </th>
            <td>
              <CFormCheck
                type="radio"
                name="que9b"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que9b?.que9b == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que9b"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que9b?.que9b == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que9b?.que9b == 'नाही' && (
            <tr>
              {/* <td>शेरा...</td> */}
              <td colSpan={2}>
                <CFormTextarea
                  type="text"
                  placeholder="शेरा..."
                  name="remarksQue9b"
                  rows={3}
                  value={reduxInspectionState?.que9b?.remarksQue9b}
                  onChange={handleChange}
                  // required
                />
              </td>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9c---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que9c?.que9c == 'नाही' ? 2 : 1}>9 c</th>
            <th rowSpan={reduxInspectionState?.que9c?.que9c == 'नाही' ? 2 : 1}>गाव नमुना १ - क</th>
            <td
              rowSpan={reduxInspectionState?.que9c?.que9c == 'नाही' ? 2 : 1}
              style={{ width: '30vw' }}
            >
              गाव नमुना १ - क हस्तलिखित गाव नमुना सोबत जुळतो का?
            </td>
            <th
              rowSpan={reduxInspectionState?.que9c?.que9c == 'नाही' ? 2 : 1}
              style={{ textAlign: 'center' }}
            >
              <CButton onClick={() => handleShowTable('que9c')} color="success" variant="outline">
                पहा
              </CButton>
            </th>
            <td>
              <CFormCheck
                type="radio"
                name="que9c"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que9c?.que9c == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que9c"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que9c?.que9c == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que9c?.que9c == 'नाही' && (
            <tr>
              {/* <td>शेरा...</td> */}
              <td colSpan={2}>
                <CFormTextarea
                  type="text"
                  placeholder="शेरा..."
                  name="remarksQue9c"
                  rows={3}
                  value={reduxInspectionState?.que9c?.remarksQue9c}
                  onChange={handleChange}
                  // required
                />
              </td>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9d---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que9d?.que9d == 'नाही' ? 2 : 1}>9 d</th>
            <th rowSpan={reduxInspectionState?.que9d?.que9d == 'नाही' ? 2 : 1}>गाव नमुना १ - ड</th>
            <td
              rowSpan={reduxInspectionState?.que9d?.que9d == 'नाही' ? 2 : 1}
              style={{ width: '30vw' }}
            >
              गाव नमुना १ - ड हस्तलिखित गाव नमुना सोबत जुळतो का?
            </td>
            <th
              rowSpan={reduxInspectionState?.que9d?.que9d == 'नाही' ? 2 : 1}
              style={{ textAlign: 'center' }}
            >
              <CButton onClick={() => handleShowTable('que9d')} color="success" variant="outline">
                पहा
              </CButton>
            </th>
            <td>
              <CFormCheck
                type="radio"
                name="que9d"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que9d?.que9d == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que9d"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que9d?.que9d == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que9d?.que9d == 'नाही' && (
            <tr>
              {/* <td>शेरा...</td> */}
              <td colSpan={2}>
                <CFormTextarea
                  type="text"
                  placeholder="शेरा..."
                  name="remarksQue9d"
                  rows={3}
                  value={reduxInspectionState?.que9d?.remarksQue9d}
                  onChange={handleChange}
                  // required
                />
              </td>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9e---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que9e?.que9e == 'नाही' ? 2 : 1}>9 e</th>
            <th rowSpan={reduxInspectionState?.que9e?.que9e == 'नाही' ? 2 : 1}>गाव नमुना १ - ई</th>
            <td
              rowSpan={reduxInspectionState?.que9e?.que9e == 'नाही' ? 2 : 1}
              style={{ width: '30vw' }}
            >
              गाव नमुना १ - ई हस्तलिखित गाव नमुना सोबत जुळतो का?
            </td>
            <th
              rowSpan={reduxInspectionState?.que9e?.que9e == 'नाही' ? 2 : 1}
              style={{ textAlign: 'center' }}
            >
              <CButton onClick={() => handleShowTable('que9e')} color="success" variant="outline">
                पहा
              </CButton>
            </th>
            <td>
              <CFormCheck
                type="radio"
                name="que9e"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que9e?.que9e == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que9e"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que9e?.que9e == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que9e?.que9e == 'नाही' && (
            <tr>
              {/* <td>शेरा...</td> */}
              <td colSpan={2}>
                <CFormTextarea
                  type="text"
                  placeholder="शेरा..."
                  name="remarksQue9e"
                  rows={3}
                  value={reduxInspectionState?.que9e?.remarksQue9e}
                  onChange={handleChange}
                  // required
                />
              </td>
            </tr>
          )}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Section3Trial
