import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInspectionDetailsOnline, selectState } from '../../../../slices/InspectionOnlineSlice'
import {
  CButton,
  CFormCheck,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTooltip,
} from '@coreui/react'
import VillageForm1ATable from './SectionTables/VillageForm1ATable'
import VillageForm1Btable from './SectionTables/VillageForm1BTable'
import VillageForm1CTable from './SectionTables/VillageForm1CTable'
import VillageForm1DTable from './SectionTables/VillageForm1DTable'
import VillageForm1ETable from './SectionTables/VillageForm1ETable'
import VillageForm1LiveTable from './SectionTables/VillageForm1LiveTable'
import VillageForm1ODCTable from './SectionTables/VillageForm1ODCTable'
import VillageForm1ODCDiffTable from './SectionTables/VillageForm1ODCDiffTable'
import VillageForm4Table from './SectionTables/VillageForm4Table'
import VillageForm2Table from './SectionTables/VillageForm2Table'
import VillageForm3Table from './SectionTables/VillageForm3Table'
import VillageForm5Table from './SectionTables/VillageForm5table'
import VillageForm6Table from './SectionTables/VillageForm6Table'
import VillageForm6ATable from './SectionTables/VillageForm6ATable'
import VillageForm6BTable from './SectionTables/VillageForm6BTable'
import VillageForm6CTable from './SectionTables/VillageForm6CTable'
import VillageForm6DTable from './SectionTables/VillageForm6DTable'

const Section1 = () => {
  const [visible, setVisible] = useState(false)
  const [selectedTable, setSelectedtable] = useState('')
  const dispatch = useDispatch()
  const reduxInspectionState = useSelector(selectState)

  const customTooltipStyle = {
    '--cui-tooltip-bg': 'var(--cui-primary)',
  }

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

    if (name == 'que1a' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1a: {
            ...reduxInspectionState?.que1a,
            [name]: value,
            remarksQue1a: '',
          },
        }),
      )
    } else if (name == 'que1a' || name == 'remarksQue1a') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1a: { ...reduxInspectionState?.que1a, [name]: value },
        }),
      )
    }

    if (name == 'que1b' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1b: {
            ...reduxInspectionState?.que1b,
            [name]: value,
            remarksQue1b: '',
          },
        }),
      )
    } else if (name == 'que1b' || name == 'remarksQue1b') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1b: { ...reduxInspectionState?.que1b, [name]: value },
        }),
      )
    }

    if (name == 'que1c' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1c: {
            ...reduxInspectionState?.que1c,
            [name]: value,
            remarksQue1c: '',
          },
        }),
      )
    } else if (name == 'que1c' || name == 'remarksQue1c') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1c: { ...reduxInspectionState?.que1c, [name]: value },
        }),
      )
    }

    if (name == 'que1d' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1d: {
            ...reduxInspectionState?.que1d,
            [name]: value,
            remarksQue1d: '',
          },
        }),
      )
    } else if (name == 'que1d' || name == 'remarksQue1d') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1d: { ...reduxInspectionState?.que1d, [name]: value },
        }),
      )
    }

    if (name == 'que1e' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1e: {
            ...reduxInspectionState?.que1e,
            [name]: value,
            remarksQue1e: '',
          },
        }),
      )
    } else if (name == 'que1e' || name == 'remarksQue1e') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que1e: { ...reduxInspectionState?.que1e, [name]: value },
        }),
      )
    }

    if (name == 'que7' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que7: {
            ...reduxInspectionState?.que7,
            [name]: value,
            remarksQue7: '',
          },
        }),
      )
    } else if (name == 'que7' || name == 'remarksQue7') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que7: { ...reduxInspectionState?.que7, [name]: value },
        }),
      )
    }

    if (name == 'que8' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que8: {
            ...reduxInspectionState?.que8,
            [name]: value,
            remarksQue8: '',
          },
        }),
      )
    } else if (name == 'que8' || name == 'remarksQue8') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que8: { ...reduxInspectionState?.que8, [name]: value },
        }),
      )
    }

    if (name == 'que9' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que9: {
            ...reduxInspectionState?.que9,
            [name]: value,
            remarksQue9: '',
          },
        }),
      )
    } else if (name == 'que9' || name == 'remarksQue9') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que9: { ...reduxInspectionState?.que9, [name]: value },
        }),
      )
    }

    if (name == 'que10' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que10: {
            ...reduxInspectionState?.que10,
            [name]: value,
            remarksQue10: '',
          },
        }),
      )
    } else if (name == 'que10' || name == 'remarksQue10') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que10: { ...reduxInspectionState?.que10, [name]: value },
        }),
      )
    }

    if (name == 'que11' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11: {
            ...reduxInspectionState?.que11,
            [name]: value,
            remarksQue11: '',
          },
        }),
      )
    } else if (name == 'que11' || name == 'remarksQue11') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11: { ...reduxInspectionState?.que11, [name]: value },
        }),
      )
    }

    if (name == 'que11a' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11a: {
            ...reduxInspectionState?.que11a,
            [name]: value,
            remarksQue11a: '',
          },
        }),
      )
    } else if (name == 'que11a' || name == 'remarksQue11a') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11a: { ...reduxInspectionState?.que11a, [name]: value },
        }),
      )
    }

    if (name == 'que11b' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11b: {
            ...reduxInspectionState?.que11b,
            [name]: value,
            remarksQue11b: '',
          },
        }),
      )
    } else if (name == 'que11b' || name == 'remarksQue11b') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11b: { ...reduxInspectionState?.que11b, [name]: value },
        }),
      )
    }

    if (name == 'que11c' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11c: {
            ...reduxInspectionState?.que11c,
            [name]: value,
            remarksQue11c: '',
          },
        }),
      )
    } else if (name == 'que11c' || name == 'remarksQue11c') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11c: { ...reduxInspectionState?.que11c, [name]: value },
        }),
      )
    }

    if (name == 'que11d' && value == 'होय') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11d: {
            ...reduxInspectionState?.que11d,
            [name]: value,
            remarksQue11d: '',
          },
        }),
      )
    } else if (name == 'que11d' || name == 'remarksQue11d') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que11d: { ...reduxInspectionState?.que11d, [name]: value },
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
        backdrop="static"
        alignment="center"
        size="xl"
        fullscreen="xxl"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">
            {selectedTable == 'que1Live' && 'गाव नमुना १-Live तक्ता'}
            {selectedTable == 'que1ODC' && 'गाव नमुना १-ODC तक्ता'}
            {selectedTable == 'que1ODCDiff' && 'गाव नमुना १-ODC Diffrence तक्ता'}
            {selectedTable == 'que1a' && 'गाव नमुना १-अ तक्ता'}
            {selectedTable == 'que1b' && 'गाव नमुना १-ब तक्ता'}
            {selectedTable == 'que1c' && 'गाव नमुना १-क तक्ता'}
            {selectedTable == 'que1d' && 'गाव नमुना १-ड तक्ता'}
            {selectedTable == 'que1e' && 'गाव नमुना १-ई तक्ता'}
            {selectedTable == 'que7' && 'गाव नमुना २ तक्ता'}
            {selectedTable == 'que8' && 'गाव नमुना ३ तक्ता'}
            {selectedTable == 'que9' && 'गाव नमुना ४ तक्ता'}
            {selectedTable == 'que10' && 'गाव नमुना ५ तक्ता'}
            {selectedTable == 'que11' && 'गाव नमुना ६ तक्ता'}
            {selectedTable == 'que11a' && 'गाव नमुना ६अ तक्ता'}
            {selectedTable == 'que11b' && 'गाव नमुना ६ब तक्ता'}
            {selectedTable == 'que11c' && 'गाव नमुना ६क तक्ता'}
            {selectedTable == 'que11d' && 'गाव नमुना ६ड तक्ता'}
          </CModalTitle>
        </CModalHeader>
        <CModalBody style={{ overflow: selectedTable == 'que8' ? 'auto' : 'visible' }}>
          {selectedTable == 'que1Live' && <VillageForm1LiveTable />}
          {selectedTable == 'que1ODC' && <VillageForm1ODCTable />}
          {selectedTable == 'que1ODCDiff' && <VillageForm1ODCDiffTable />}
          {selectedTable == 'que1a' && <VillageForm1ATable />}
          {selectedTable == 'que1b' && <VillageForm1Btable />}
          {selectedTable == 'que1c' && <VillageForm1CTable />}
          {selectedTable == 'que1d' && <VillageForm1DTable />}
          {selectedTable == 'que1e' && <VillageForm1ETable />}
          {selectedTable == 'que7' && <VillageForm2Table />}
          {selectedTable == 'que8' && <VillageForm3Table />}
          {selectedTable == 'que9' && <VillageForm4Table />}
          {selectedTable == 'que10' && <VillageForm5Table />}
          {selectedTable == 'que11' && <VillageForm6Table />}
          {selectedTable == 'que11a' && <VillageForm6ATable />}
          {selectedTable == 'que11b' && <VillageForm6BTable />}
          {selectedTable == 'que11c' && <VillageForm6CTable />}
          {selectedTable == 'que11d' && <VillageForm6DTable />}
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
              गाव नमुना १-अ ते ई (online दप्तराची तपासणी)
            </th>
          </tr>
        </thead>
        <CTableBody>
          {/*-----------------------------------------------------------------------------Que No.1---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>1</th>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>गाव नमुना १</th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}
            >
              गाव नमुना १ (आकारबंद) मधील सर्वे/गा. क्र. मध्ये क्षेत्राची तफावत आहे काय?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  onClick={() => handleShowTable('que1Live')}
                  color="success"
                  variant="outline"
                >
                  Live
                </CButton>
                <CButton
                  onClick={() => handleShowTable('que1ODC')}
                  color="success"
                  variant="outline"
                >
                  ODC
                </CButton>
                <CButton
                  onClick={() => handleShowTable('que1ODCDiff')}
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
              <CTooltip
                content="
                १.सदर गावात एकूण सर्वे क्रमांक/गट क्रमांक मध्ये फरक आहे का ? 
                २.क्षेत्रा मध्ये तफावत असलेले एकूण सर्वे क्रमांक नमूद करा. 
                ३.गावाची एकूण क्षेत्र व आकारणी खाली बेरीज (तेरीज) जुळते का ?
                "
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1"
                    rows={3}
                    value={reduxInspectionState?.que1?.remarksQue1}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.1a---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1a?.que1a == 'होय' ? 2 : 1}>2</th>
            <th rowSpan={reduxInspectionState?.que1a?.que1a == 'होय' ? 2 : 1}>
              <span>गाव नमुना १-अ</span>
              <br /> <span>(वन जमिनींची नोंदवही)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1a?.que1a == 'होय' ? 2 : 1}
            >
              सदर गावात वन जमिनी आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que1a')} color="success" variant="outline">
                  १-अ पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1a"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1a?.que1a == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1a"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1a?.que1a == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1a?.que1a == 'होय' && (
            <tr>
              <CTooltip
                content="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
                २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
                ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1a"
                    rows={3}
                    value={reduxInspectionState?.que1a?.remarksQue1a}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.1b---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1b?.que1b == 'होय' ? 2 : 1}>3</th>
            <th rowSpan={reduxInspectionState?.que1b?.que1b == 'होय' ? 2 : 1}>
              <span>गाव नमुना १-ब</span>
              <br /> <span>(बिन भोगवटयाच्या(सरकारी)जमिनींची नोंदवही)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1b?.que1b == 'होय' ? 2 : 1}
            >
              सदर गावात बिन भोगवटयाच्या जमिनी आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que1b')} color="success" variant="outline">
                  १-ब पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1b"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1b?.que1b == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1b"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1b?.que1b == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1b?.que1b == 'होय' && (
            <tr>
              <CTooltip
                content="१.सर्वे नोंदी ७/१२ वर तपासून योग्य खात्री करा ? 
                २.भूमापण योग्य असल्याची खात्री करा ? "
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1b"
                    rows={3}
                    value={reduxInspectionState?.que1b?.remarksQue1b}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9c---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1c?.que1c == 'होय' ? 2 : 1}>4</th>
            <th rowSpan={reduxInspectionState?.que1c?.que1c == 'होय' ? 2 : 1}>
              <span>गाव नमुना १-क</span>
              {/* <br /> <span>(बिन भोगवटयाच्या(सरकारी)जमिनींची नोंदवही)</span> */}
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1c?.que1c == 'होय' ? 2 : 1}
            >
              सदर गावात बिन भोगवटयाच्या जमिनी आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que1c')} color="success" variant="outline">
                  १-क पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1c"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1c?.que1c == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1c"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1c?.que1c == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1c?.que1c == 'होय' && (
            <tr>
              <CTooltip
                content="१.किती प्रकारात जमिनीच्या नोंदी आहे ? 
                २.७/१२ प्रमाणे  नोंदी तपासणी केली  का ?"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1c"
                    rows={3}
                    value={reduxInspectionState?.que1c?.remarksQue1c}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9d---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1d?.que1d == 'होय' ? 2 : 1}>5</th>
            <th rowSpan={reduxInspectionState?.que1d?.que1d == 'होय' ? 2 : 1}>
              <span>गाव नमुना १-ड</span>
              <br />{' '}
              <span>
                (कुळवहिवाट कायदा आणि महाराष्ट्र शेतजमीन (जमीनधारणेची कमाल मर्यादा) अधिनियम,१९६१
                यांच्या उपबंधानुसार अतिरीक म्हणुन घोषित केलेल्या जमिनी दर्शविणारी नोंदवही)
              </span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1d?.que1d == 'होय' ? 2 : 1}
            >
              सदर गावात कुळवहिवाट कायदा आणि महाराष्ट्र शेतजमीन (जमीनधारणेची कमाल मर्यादा)
              अधिनियम,१९६१ यांच्या उपबंधानुसार अतिरीक म्हणुन घोषित केलेल्या जमिनी आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que1d')} color="success" variant="outline">
                  १-ड पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1d"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1d?.que1d == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1d"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1d?.que1d == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1d?.que1d == 'होय' && (
            <tr>
              <CTooltip
                content="१. ७/१२ नुसार सर्वे नोंदी तपासले तफावत असल्यास नमूद करा .  
                २. सर्वे नोंदी अद्ययावत असून आदेश व दिनांक नमूद आहे का ?"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1d"
                    rows={3}
                    value={reduxInspectionState?.que1d?.remarksQue1d}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9e---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1e?.que1e == 'होय' ? 2 : 1}>6</th>
            <th rowSpan={reduxInspectionState?.que1e?.que1e == 'होय' ? 2 : 1}>
              <span>गाव नमुना १-ई</span>
              <br /> <span>(अतिक्रमण नोंदवही)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1e?.que1e == 'होय' ? 2 : 1}
            >
              सदर गावात अतिक्रमण नोंदवही केलेली आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que1e')} color="success" variant="outline">
                  १-ई पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1e"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que1e?.que1e == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que1e"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que1e?.que1e == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que1e?.que1e == 'होय' && (
            <tr>
              <CTooltip
                content="१.चालू वर्षात अतिक्रमण नोंद आहे काय ?असल्यास कार्यवाही करणायात नमूद करा . 
                २.यापूर्वी अतिक्रमण कढण्यात आल्याचा आदेश व दिनांक नमूद केले आहे का ?"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue1e"
                    rows={3}
                    value={reduxInspectionState?.que1e?.remarksQue1e}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/* ------------------------Question2 */}
          {/*-----------------------------------------------------------------------------Que No.7---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que7?.que7 == 'होय' ? 2 : 1}>7</th>
            <th rowSpan={reduxInspectionState?.que7?.que7 == 'होय' ? 2 : 1}>
              <span>गाव नमुना २</span>
              <br /> <span>(अकृषिक महसुलाची नोंदवही)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que7?.que7 == 'होय' ? 2 : 1}
            >
              सदर गावात अकृषिक महसुलाची नोंदवही केलेली आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que7')} color="success" variant="outline">
                  गा.न. २ पहा
                </CButton>
              </span>
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
            <tr>
              <CTooltip
                content="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
                २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
                ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue7"
                    rows={3}
                    value={reduxInspectionState?.que7?.remarksQue7}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.8---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que8?.que8 == 'होय' ? 2 : 1}>8</th>
            <th rowSpan={reduxInspectionState?.que8?.que8 == 'होय' ? 2 : 1}>
              <span>गाव नमुना ३</span>
              <br /> <span>(इनाम पत्रक)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que8?.que8 == 'होय' ? 2 : 1}
            >
              सदर गावात इनाम पत्रक आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que8')} color="success" variant="outline">
                  गा.न. ३ पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que8"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que8?.que8 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que8"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que8?.que8 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que8?.que8 == 'होय' && (
            <tr>
              <CTooltip
                content="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
                २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
                ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue8"
                    rows={3}
                    value={reduxInspectionState?.que8?.remarksQue8}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.9---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que9?.que9 == 'होय' ? 2 : 1}>9</th>
            <th rowSpan={reduxInspectionState?.que9?.que9 == 'होय' ? 2 : 1}>
              <span>गाव नमुना ४</span>
              <br /> <span>(सिवाई आमदनी -- सिवाई जमाबंदी)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que9?.que9 == 'होय' ? 2 : 1}
            >
              सदर गावात संकिर्ण जमीन महसुलाची नोंदवही आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que9')} color="success" variant="outline">
                  गा.न. ४ पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que9"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que9?.que9 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que9"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que9?.que9 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que9?.que9 == 'होय' && (
            <tr>
              <CTooltip
                content="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
                २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
                ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue9"
                    rows={3}
                    value={reduxInspectionState?.que9?.remarksQue9}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------------Que No.10---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que10?.que10 == 'होय' ? 2 : 1}>10</th>
            <th rowSpan={reduxInspectionState?.que10?.que10 == 'होय' ? 2 : 1}>
              <span>गाव नमुना ५</span>
              <br /> <span>(ठरावबंद - किस्तबंदी खतावणी जमाबंदी पत्रक)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que10?.que10 == 'होय' ? 2 : 1}
            >
              सदर गावात क्षेत्र आणि महसूल यांचा सर्वसाधारण गोषवारा जुळतो का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que10')} color="success" variant="outline">
                  गा.न. ५ पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que10"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que10?.que10 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que10"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que10?.que10 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que10?.que10 == 'होय' && (
            <tr>
              <CTooltip content=" गा.न. ५" placement="left" style={customTooltipStyle}>
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue10"
                    rows={3}
                    value={reduxInspectionState?.que10?.remarksQue10}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}
          {/* ------------------------Question6 */}
          {/*-----------------------------------------------------------------------Que No.11----*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que11?.que11 == 'होय' ? 2 : 1}>11</th>
            <th rowSpan={reduxInspectionState?.que11?.que11 == 'होय' ? 2 : 1}>
              <span>गाव नमुना ६</span>
              {/* <br /> <span>(ठरावबंद - किस्तबंदी खतावणी जमाबंदी पत्रक)</span> */}
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que11?.que11 == 'होय' ? 2 : 1}
            >
              सदर गावात फेरफारांची नोंदवही तपासा ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton onClick={() => handleShowTable('que11')} color="success" variant="outline">
                  गा.न. ६ पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que11?.que11 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que11?.que11 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que11?.que11 == 'होय' && (
            <tr>
              <CTooltip content=" गा.न. ६" placement="left" style={customTooltipStyle}>
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue11"
                    rows={3}
                    value={reduxInspectionState?.que11?.remarksQue11}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------Que No.11-A----*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que11a?.que11a == 'होय' ? 2 : 1}>12</th>
            <th rowSpan={reduxInspectionState?.que11a?.que11a == 'होय' ? 2 : 1}>
              <span>गाव नमुना ६-अ</span>
              <br /> <span>(विवादग्रस्त प्रकरणांची नोंदवही)</span>
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que11a?.que11a == 'होय' ? 2 : 1}
            >
              सदर गावात विवादग्रस्त प्रकरणांची नोंद केली आहे का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  onClick={() => handleShowTable('que11a')}
                  color="success"
                  variant="outline"
                >
                  गा.न. ६-अ पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11a"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que11a?.que11a == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11a"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que11a?.que11a == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que11a?.que11a == 'होय' && (
            <tr>
              <CTooltip content=" गा.न. ६ अ" placement="left" style={customTooltipStyle}>
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue11a"
                    rows={3}
                    value={reduxInspectionState?.que11a?.remarksQue11a}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------Que No.11-B----*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que11b?.que11b == 'होय' ? 2 : 1}>13</th>
            <th rowSpan={reduxInspectionState?.que11b?.que11b == 'होय' ? 2 : 1}>
              <span>गाव नमुना ६-ब</span>
              {/* <br /> <span>(ठरावबंद - किस्तबंदी खतावणी जमाबंदी पत्रक)</span> */}
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que11b?.que11b == 'होय' ? 2 : 1}
            >
              सदर गावात विलंबशुल्क प्रकरणांची नोंद घेतली आहे का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  onClick={() => handleShowTable('que11b')}
                  color="success"
                  variant="outline"
                >
                  गा.न. ६-ब पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11b"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que11b?.que11b == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11b"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que11b?.que11b == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que11b?.que11b == 'होय' && (
            <tr>
              <CTooltip content=" गा.न. ६ ब" placement="left" style={customTooltipStyle}>
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue11b"
                    rows={3}
                    value={reduxInspectionState?.que11b?.remarksQue11b}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------Que No.11-C----*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que11c?.que11c == 'होय' ? 2 : 1}>14</th>
            <th rowSpan={reduxInspectionState?.que11c?.que11c == 'होय' ? 2 : 1}>
              <span>गाव नमुना ६-क</span>
              {/* <br /> <span>(ठरावबंद - किस्तबंदी खतावणी जमाबंदी पत्रक)</span> */}
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que11c?.que11c == 'होय' ? 2 : 1}
            >
              सदर गावामधील वारस प्रकरणाच्या नोंदी तपासा.
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  onClick={() => handleShowTable('que11c')}
                  color="success"
                  variant="outline"
                >
                  गा.न. ६-क पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11c"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que11c?.que11c == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11c"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que11c?.que11c == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que11c?.que11c == 'होय' && (
            <tr>
              <CTooltip content=" गा.न. ६ क" placement="left" style={customTooltipStyle}>
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue11c"
                    rows={3}
                    value={reduxInspectionState?.que11c?.remarksQue11c}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*-----------------------------------------------------------------------Que No.11-C----*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que11d?.que11d == 'होय' ? 2 : 1}>15</th>
            <th rowSpan={reduxInspectionState?.que11d?.que11d == 'होय' ? 2 : 1}>
              <span>गाव नमुना ६-ड</span>
              {/* <br /> <span>(ठरावबंद - किस्तबंदी खतावणी जमाबंदी पत्रक)</span> */}
            </th>
            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que11d?.que11d == 'होय' ? 2 : 1}
            >
              सदर गावात उपविभाग(पोतहिस्से) यांच्या नोंदी आहेत का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  onClick={() => handleShowTable('que11d')}
                  color="success"
                  variant="outline"
                >
                  गा.न. ६-ड पहा
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11d"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que11d?.que11d == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que11d"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que11d?.que11d == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que11d?.que11d == 'होय' && (
            <tr>
              <CTooltip content=" गा.न. ६ ड" placement="left" style={customTooltipStyle}>
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue11d"
                    rows={3}
                    value={reduxInspectionState?.que11d?.remarksQue11d}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Section1
