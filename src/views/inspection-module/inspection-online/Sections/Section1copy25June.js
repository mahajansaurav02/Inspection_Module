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
import ReusableDependencyQue from './ReusableComponents/ReusableDependencyQue'
import VillageForm7ATable from './SectionTables/VillageForm7ATable'
import VillageForm7BTable from './SectionTables/VillageForm7BTable'
import VillageForm8ATable from './SectionTables/VillageForm8ATable'
import VillageForm8BTable from './SectionTables/VillageForm8BTable'
import VillageForm8CTable from './SectionTables/VillageForm8CTable'
import VillageForm8DTable from './SectionTables/VillageForm8DTable'
import VillageForm7FerfarTable from './SectionTables/VillageForm7FerfarTable'
import VillageForm7NZaleleTable from './SectionTables/VillageForm7NZaleleTable'
import VillageForm7AhawalTable from './SectionTables/VillageForm7AhawalTable'
import VillageForm12Table from './SectionTables/VillageForm12Table'
import VillageForm14Table from './SectionTables/VillageForm14Table'
import VillageForm15Table from './SectionTables/VillageForm15Table'
import VillageForm17Table from './SectionTables/VillageForm17Table'
import VillageForm19Table from './SectionTables/VillageForm19Table'

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

    if (name == 'que1' && value == 'नाही') {
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

    if (name == 'que1a' && value == 'नाही') {
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

    if (name == 'que1b' && value == 'नाही') {
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

    if (name == 'que1c' && value == 'नाही') {
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

    if (name == 'que1d' && value == 'नाही') {
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

    if (name == 'que1e' && value == 'नाही') {
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

    if (name == 'que7' && value == 'नाही') {
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

    if (name == 'que8' && value == 'नाही') {
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

    if (name == 'que9' && value == 'नाही') {
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

    if (name == 'que10' && value == 'नाही') {
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

    if (name == 'que11' && value == 'नाही') {
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

    if (name == 'que11a' && value == 'नाही') {
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

    if (name == 'que11b' && value == 'नाही') {
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

    if (name == 'que11c' && value == 'नाही') {
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

    if (name == 'que11d' && value == 'नाही') {
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

    if (name == 'que16_1' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16_1: {
            ...reduxInspectionState?.que16_1,
            [name]: value,
            remarksQue16_1: '',
          },
        }),
      )
    } else if (name == 'que16_1' || name == 'remarksQue16_1') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16_1: { ...reduxInspectionState?.que16_1, [name]: value },
        }),
      )
    }

    if (name == 'que16_2' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16_2: {
            ...reduxInspectionState?.que16_2,
            [name]: value,
            remarksQue16_2: '',
          },
        }),
      )
    } else if (name == 'que16_2' || name == 'remarksQue16_2') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16_2: { ...reduxInspectionState?.que16_2, [name]: value },
        }),
      )
    }

    if (name == 'que16a' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16a: {
            ...reduxInspectionState?.que16a,
            [name]: value,
            remarksQue16a: '',
          },
        }),
      )
    } else if (name == 'que16a' || name == 'remarksQue16a') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16a: { ...reduxInspectionState?.que16a, [name]: value },
        }),
      )
    }

    if (name == 'que16b' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16b: {
            ...reduxInspectionState?.que16b,
            [name]: value,
            remarksQue16b: '',
          },
        }),
      )
    } else if (name == 'que16b' || name == 'remarksQue16b') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que16b: { ...reduxInspectionState?.que16b, [name]: value },
        }),
      )
    }

    if (name == 'que19a' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19a: {
            ...reduxInspectionState?.que19a,
            [name]: value,
            remarksQue19a: '',
          },
        }),
      )
    } else if (name == 'que19a' || name == 'remarksQue19a') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19a: { ...reduxInspectionState?.que19a, [name]: value },
        }),
      )
    }

    if (name == 'que19b' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19b: {
            ...reduxInspectionState?.que19b,
            [name]: value,
            remarksQue19b: '',
          },
        }),
      )
    } else if (name == 'que19b' || name == 'remarksQue19b') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19b: { ...reduxInspectionState?.que19b, [name]: value },
        }),
      )
    }

    if (name == 'que19c' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19c: {
            ...reduxInspectionState?.que19c,
            [name]: value,
            remarksQue19c: '',
          },
        }),
      )
    } else if (name == 'que19c' || name == 'remarksQue19c') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19c: { ...reduxInspectionState?.que19c, [name]: value },
        }),
      )
    }

    if (name == 'que19d' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19d: {
            ...reduxInspectionState?.que19d,
            [name]: value,
            remarksQue19d: '',
          },
        }),
      )
    } else if (name == 'que19d' || name == 'remarksQue19d') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que19d: { ...reduxInspectionState?.que19d, [name]: value },
        }),
      )
    }

    if (name == 'que23' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que23: {
            ...reduxInspectionState?.que23,
            [name]: value,
            remarksQue24: '',
          },
        }),
      )
    } else if (name == 'que23' || name == 'remarksQue24') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que23: { ...reduxInspectionState?.que23, [name]: value },
        }),
      )
    }

    if (name == 'que24' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que24: {
            ...reduxInspectionState?.que24,
            [name]: value,
            remarksQue24: '',
          },
        }),
      )
    } else if (name == 'que24' || name == 'remarksQue24') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que24: { ...reduxInspectionState?.que24, [name]: value },
        }),
      )
    }

    if (name == 'que25' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que25: {
            ...reduxInspectionState?.que25,
            [name]: value,
            remarksQue25: '',
          },
        }),
      )
    } else if (name == 'que25' || name == 'remarksQue25') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que25: { ...reduxInspectionState?.que25, [name]: value },
        }),
      )
    }

    if (name == 'que26' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que26: {
            ...reduxInspectionState?.que26,
            [name]: value,
            remarksQue26: '',
          },
        }),
      )
    } else if (name == 'que26' || name == 'remarksQue26') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que26: { ...reduxInspectionState?.que26, [name]: value },
        }),
      )
    }

    if (name == 'que27' && value == 'नाही') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que27: {
            ...reduxInspectionState?.que27,
            [name]: value,
            remarksQue27: '',
          },
        }),
      )
    } else if (name == 'que27' || name == 'remarksQue27') {
      dispatch(
        addInspectionDetailsOnline({
          ...reduxInspectionState,
          que27: { ...reduxInspectionState?.que27, [name]: value },
        }),
      )
    }
  }

  const handleShowTable = (val) => {
    setSelectedtable(val)
    console.info('valie show table ', selectedTable)
    setVisible(!visible)
  }
  return (
    <>
      <CModal
        backdrop="static"
        alignment="center"
        size="xl"
        // fullscreen="xxl"
        fullscreen={selectedTable == 'que19b' ? true : 'xxl'}
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel" style={{ textAlign: 'center' }}>
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
            {selectedTable == 'que16a' && 'गाव नमुना ७अ तक्ता'}
            {selectedTable == 'que16ferfar' && 'गाव नमुना ७ फेरफार तक्ता'}
            {selectedTable == 'que16nzalele' && 'गाव नमुना ७ नझालेले तक्ता'}
            {selectedTable == 'que16ahawal' && 'गाव नमुना ७ अहवाल तक्ता'}
            {selectedTable == 'que16b' && 'गाव नमुना ७ब तक्ता'}
            {selectedTable == 'que19a' && 'गाव नमुना ८अ तक्ता'}
            {selectedTable == 'que19b' && 'गाव नमुना ८ब तक्ता'}
            {selectedTable == 'que19c' && 'गाव नमुना ८क तक्ता'}
            {selectedTable == 'que19d' && 'गाव नमुना ८ड तक्ता'}
            {selectedTable == 'que23' && 'गाव नमुना 12 तक्ता'}
            {selectedTable == 'que24' && 'गाव नमुना 14 तक्ता'}
            {selectedTable == 'que25' && 'गाव नमुना 15 तक्ता'}
            {selectedTable == 'que26' && 'गाव नमुना 17 तक्ता'}
            {selectedTable == 'que27' && 'गाव नमुना 19 तक्ता'}
          </CModalTitle>
        </CModalHeader>
        <CModalBody style={{ overflow: selectedTable == 'que8' || 'que19b' ? 'auto' : 'visible' }}>
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
          {selectedTable == 'que16ferfar' && <VillageForm7FerfarTable />}
          {selectedTable == 'que16nzalele' && <VillageForm7NZaleleTable />}
          {selectedTable == 'que16ahawal' && <VillageForm7AhawalTable />}
          {selectedTable == 'que16a' && <VillageForm7ATable />}
          {selectedTable == 'que16b' && <VillageForm7BTable />}
          {selectedTable == 'que19a' && <VillageForm8ATable />}
          {selectedTable == 'que19b' && <VillageForm8BTable />}
          {selectedTable == 'que19c' && <VillageForm8CTable />}
          {selectedTable == 'que19d' && <VillageForm8DTable />}
          {selectedTable == 'que23' && <VillageForm12Table />}
          {selectedTable == 'que24' && <VillageForm14Table />}
          {selectedTable == 'que25' && <VillageForm15Table />}
          {selectedTable == 'que26' && <VillageForm17Table />}
          {selectedTable == 'que27' && <VillageForm19Table />}
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
          {/*---------------------------------------------------------------------Que No.1---*/}
          <tr>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>1</th>
            <th rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}>
              गाव नमुना १ <br /> <span>(आकारबंद)</span>
            </th>

            <td
              style={{ width: '30vw' }}
              rowSpan={reduxInspectionState?.que1?.que1 == 'होय' ? 2 : 1}
            >
              गाव नमुना १ (आकारबंद) मधील भूमापन क्र. मध्ये क्षेत्राची तफावत आहे काय?
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

          {/*---------------------------------------------------------------------Que No.1a---*/}
          <ReusableDependencyQue
            queNo={2}
            queTitle="गाव नमुना १-अ"
            queTitleDesc="वन जमिनींची नोंदवही"
            queDescription="सदर गावात वन जमिनी आहेत का ?"
            state={reduxInspectionState?.que1a?.que1a}
            handleChange={handleChange}
            showTable="que1a"
            handleShowTable={handleShowTable}
            remarksName="remarksQue1a"
            remarks={reduxInspectionState?.que1a?.remarksQue1a}
            tooltipContent="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
            २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
            ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
          />

          {/*---------------------------------------------------------------------Que No.1b---*/}
          <ReusableDependencyQue
            queNo={3}
            queTitle="गाव नमुना १-ब"
            queTitleDesc="बिन भोगवटयाच्या(सरकारी)जमिनींची नोंदवही"
            queDescription="सदर गावात बिन भोगवटयाच्या जमिनी आहेत का ?"
            state={reduxInspectionState?.que1b?.que1b}
            handleChange={handleChange}
            showTable="que1b"
            handleShowTable={handleShowTable}
            remarksName="remarksQue1b"
            remarks={reduxInspectionState?.que1b?.remarksQue1b}
            tooltipContent="१.सर्वे नोंदी ७/१२ वर तपासून योग्य खात्री करा ? 
            २.भूमापण योग्य असल्याची खात्री करा ?"
          />

          {/*---------------------------------------------------------------------Que No.1c---*/}
          <ReusableDependencyQue
            queNo={4}
            queTitle="गाव नमुना १-क"
            queTitleDesc="भोगवटदार वर्ग २ म्हणून मंजूर केलेल्या जमिनी आणि ग्रामपंचायतिकडे निहित केलेल्या जमिनी यांची नोंदवही "
            queDescription="भोगवटदार वर्ग २ म्हणून मंजूर केलेल्या आणि ग्रामपंचायतिकडे निहित केलेल्या जमिनी आहेत का ?"
            state={reduxInspectionState?.que1c?.que1c}
            handleChange={handleChange}
            showTable="que1c"
            handleShowTable={handleShowTable}
            remarksName="remarksQue1c"
            remarks={reduxInspectionState?.que1c?.remarksQue1c}
            tooltipContent="१.किती प्रकारात जमिनीच्या नोंदी आहे ? 
            २.७/१२ प्रमाणे  नोंदी तपासणी केली  का ?"
          />

          {/*---------------------------------------------------------------------Que No.1d---*/}
          <ReusableDependencyQue
            queNo={5}
            queTitle="गाव नमुना १-ड"
            queTitleDesc="कुळवहिवाट कायदा आणि महाराष्ट्र शेतजमीन (जमीनधारणेची कमाल मर्यादा) अधिनियम,१९६१
            यांच्या उपबंधनानुसार अतिरिक म्हणून घोषित केलेल्या जमिनी दर्शविणारी नोंदवही"
            queDescription="सदर गावात कुळवहिवाट कायदा आणि महाराष्ट्र शेतजमीन (जमीनधारणेची कमाल मर्यादा)
            अधिनियम,१९६१ यांच्या उपबंधनानुसार अतिरिक म्हणून घोषित केलेल्या जमिनी आहेत का ?"
            state={reduxInspectionState?.que1d?.que1d}
            handleChange={handleChange}
            showTable="que1d"
            handleShowTable={handleShowTable}
            remarksName="remarksQue1d"
            remarks={reduxInspectionState?.que1d?.remarksQue1d}
            tooltipContent="१. ७/१२ नुसार सर्वे नोंदी तपासले तफावत असल्यास नमूद करा .  
            २. सर्वे नोंदी अद्ययावत असून आदेश व दिनांक नमूद आहे का ?"
          />

          {/*---------------------------------------------------------------------Que No.9e---*/}
          <ReusableDependencyQue
            queNo={6}
            queTitle="गाव नमुना १-ई"
            queTitleDesc="अतिक्रमण नोंदवही"
            queDescription="सदर गावात शासकीय जमिनीवर अतिक्रमण आहे का ?"
            state={reduxInspectionState?.que1e?.que1e}
            handleChange={handleChange}
            showTable="que1e"
            handleShowTable={handleShowTable}
            remarksName="remarksQue1e"
            remarks={reduxInspectionState?.que1e?.remarksQue1e}
            tooltipContent="१.चालू वर्षात अतिक्रमण नोंद आहे काय ?असल्यास कार्यवाही करणायात नमूद करा. 
            २.यापूर्वी अतिक्रमण कढण्यात आल्याचा आदेश व दिनांक नमूद केले आहे का ?"
          />

          {/* ------------------------Question2 */}
          {/*---------------------------------------------------------------------Que No.7---*/}
          <ReusableDependencyQue
            queNo={7}
            queTitle="गाव नमुना २"
            queTitleDesc="अकृषिक महसुलाची नोंदवही"
            queDescription="सदर गावात अकृषिक महसुलाची नोंदवही केलेली आहे का ?"
            state={reduxInspectionState?.que7?.que7}
            handleChange={handleChange}
            showTable="que7"
            handleShowTable={handleShowTable}
            remarksName="remarksQue7"
            remarks={reduxInspectionState?.que7?.remarksQue7}
            tooltipContent="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
            २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
            ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
          />

          {/*---------------------------------------------------------------------Que No.8---*/}
          <ReusableDependencyQue
            queNo={8}
            queTitle="गाव नमुना ३"
            queTitleDesc="दुमाला जमिनीची नोंदवही"
            queDescription="सदर गावात दुमाला जमिनी आहेत का ?"
            state={reduxInspectionState?.que8?.que8}
            handleChange={handleChange}
            showTable="que8"
            handleShowTable={handleShowTable}
            remarksName="remarksQue8"
            remarks={reduxInspectionState?.que8?.remarksQue8}
            tooltipContent="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
            २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
            ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
          />

          {/*---------------------------------------------------------------------Que No.9---*/}
          {/* <ReusableDependencyQue
            queNo={9}
            queTitle="गाव नमुना ४"
            queTitleDesc="संकीर्ण जमीन महसुलाची तपशीलवार नोंदवही"
            queDescription="सदर गावात संकीर्ण जमीन महसुलाच्या नोंदी आहेत का ?"
            state={reduxInspectionState?.que9?.que9}
            handleChange={handleChange}
            showTable="que9"
            handleShowTable={handleShowTable}
            remarksName="remarksQue9"
            remarks={reduxInspectionState?.que9?.remarksQue9}
            tooltipContent="१.सदर गावात वन जमिन असल्यास वन क्रमांक नमूद आहे का ? 
            २.७/१२ वन विभागाच्या नावाने आहे किंवा नाही ? 
            ३.वनाला प्रकार योग्य असची असल्याची खात्री करा ?"
          /> */}

          {/*---------------------------------------------------------------------Que No.10---*/}
          {/* <ReusableDependencyQue
            queNo={10}
            queTitle="गाव नमुना ५"
            queTitleDesc="क्षेत्र व महसूल यांचा सर्वसाधारण गोषवारा"
            queDescription="सदर गावात क्षेत्र आणि महसूल यांचा सर्वसाधारण गोषवारा जुळतो का ?"
            state={reduxInspectionState?.que10?.que10}
            handleChange={handleChange}
            showTable="que10"
            handleShowTable={handleShowTable}
            remarksName="remarksQue10"
            remarks={reduxInspectionState?.que10?.remarksQue10}
            tooltipContent="गा.न. ५"
          /> */}

          {/* ------------------------Question6 */}
          {/*---------------------------------------------------------------Que No.11----*/}
          <ReusableDependencyQue
            queNo={11}
            queTitle="गाव नमुना ६"
            queTitleDesc="फेरफारांची नोंदवही"
            queDescription="सदर गावातील (नोंदणीकृत आणि अनोंदणीकृत) फेरफाराच्या नोंदी तपासा."
            state={reduxInspectionState?.que11?.que11}
            handleChange={handleChange}
            showTable="que11"
            handleShowTable={handleShowTable}
            remarksName="remarksQue11"
            remarks={reduxInspectionState?.que11?.remarksQue11}
            tooltipContent="गा.न. ६"
          />

          {/*---------------------------------------------------------------Que No.11-A----*/}
          <ReusableDependencyQue
            queNo={12}
            queTitle="गाव नमुना ६ अ"
            queTitleDesc="विवादग्रस्त प्रकरणांची नोंदवही"
            queDescription="सदर गावात विवादग्रस्त प्रकरणे दाखल आहेत का ?"
            state={reduxInspectionState?.que11a?.que11a}
            handleChange={handleChange}
            showTable="que11a"
            handleShowTable={handleShowTable}
            remarksName="remarksQue11a"
            remarks={reduxInspectionState?.que11a?.remarksQue11a}
            tooltipContent="गा.न. ६ अ"
          />

          {/*---------------------------------------------------------------Que No.11-B----*/}
          {/* <ReusableDependencyQue
            queNo={13}
            queTitle="गाव नमुना ६ ब"
            queTitleDesc="विलंबशुल्क प्रकारनांची नोंदवही"
            queDescription="सदर गावात विलंब शुल्क वसुल केले जाते का ?"
            state={reduxInspectionState?.que11b?.que11b}
            handleChange={handleChange}
            showTable="que11b"
            handleShowTable={handleShowTable}
            remarksName="remarksQue11b"
            remarks={reduxInspectionState?.que11b?.remarksQue11b}
            tooltipContent="गा.न. ६ ब"
          /> */}

          {/*---------------------------------------------------------------Que No.11-C----*/}
          {/* <ReusableDependencyQue
            queNo={14}
            queTitle="गाव नमुना ६ क"
            queTitleDesc="वारसा प्रकारणांची नोंदवही"
            queDescription="सदर गावामधील वारस प्रकरणाच्या नोंदी तपासा."
            state={reduxInspectionState?.que11c?.que11c}
            handleChange={handleChange}
            showTable="que11c"
            handleShowTable={handleShowTable}
            remarksName="remarksQue11c"
            remarks={reduxInspectionState?.que11c?.remarksQue11c}
            tooltipContent="गा.न. ६ क"
          /> */}

          {/*---------------------------------------------------------------Que No.11-D----*/}
          {/* <ReusableDependencyQue
            queNo={15}
            queTitle="गाव नमुना ६ ड"
            queTitleDesc="नवीन उप-विभाग (पोट-हिस्से) नोंदवही"
            queDescription="सदर गावात नवीन उप-विभाग(पोट-हिस्से) यांच्या नोंदी आहेत का ?"
            state={reduxInspectionState?.que11d?.que11d}
            handleChange={handleChange}
            showTable="que11d"
            handleShowTable={handleShowTable}
            remarksName="remarksQue11d"
            remarks={reduxInspectionState?.que11d?.remarksQue11d}
            tooltipContent="गा.न. ६ ड"
          /> */}

          {/*---------------------------------------------------------------Que No.16----*/}

          <tr>
            {/* <th rowSpan={reduxInspectionState?.que16_1?.que16_1 == 'होय' ? 3 : 1}>16</th> */}
            <th>16</th>
            <th>
              गाव नमुना ७ <br /> <span>(अधिकार अभिलेख)</span>
            </th>
            <td style={{ width: '30vw' }} colSpan={4}>
              गाव नमुना ७/१२ तपासणी
            </td>
          </tr>
          <tr>
            <td rowSpan={reduxInspectionState?.que16_1?.que16_1 == 'होय' ? 2 : 1}></td>
            <td rowSpan={reduxInspectionState?.que16_1?.que16_1 == 'होय' ? 2 : 1}></td>
            <td rowSpan={reduxInspectionState?.que16_1?.que16_1 == 'होय' ? 2 : 1}>
              १) सदर गावात डाटा साईन न झालेले भूमापण क्र. आहे का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span>
                <CButton
                  onClick={() => handleShowTable('que16ferfar')}
                  color="success"
                  variant="outline"
                  style={{ textWrap: 'noWrap', marginBottom: '8px' }}
                >
                  फेरफार पश्चात
                </CButton>
                <CButton
                  onClick={() => handleShowTable('que16nzalele')}
                  color="success"
                  variant="outline"
                  style={{ textWrap: 'noWrap' }}
                >
                  एकदाही नझालेले
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que16_1"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que16_1?.que16_1 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que16_1"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que16_1?.que16_1 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que16_1?.que16_1 == 'होय' && (
            <tr>
              <CTooltip
                content="साईन न झालेले भूमापण टीप"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue16_1"
                    rows={3}
                    value={reduxInspectionState?.que16_1?.remarksQue16_1}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}
          <tr>
            <td rowSpan={reduxInspectionState?.que16_2?.que16_2 == 'होय' ? 2 : 1}></td>
            <td rowSpan={reduxInspectionState?.que16_2?.que16_2 == 'होय' ? 2 : 1}></td>
            <td rowSpan={reduxInspectionState?.que16_2?.que16_2 == 'होय' ? 2 : 1}>
              २) सदर गावात विसंगत भूमापण क्रमांक आहे का ?
            </td>
            <td style={{ textAlign: 'center' }}>
              <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                <CButton
                  onClick={() => handleShowTable('que16ahawal')}
                  color="success"
                  variant="outline"
                >
                  अहवाल
                </CButton>
              </span>
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que16_2"
                id="8c11"
                value="होय"
                label="होय"
                checked={reduxInspectionState?.que16_2?.que16_2 == 'होय'}
                onChange={handleChange}
              />
            </td>
            <td>
              <CFormCheck
                type="radio"
                name="que16_2"
                id="8c22"
                value="नाही"
                label="नाही"
                checked={reduxInspectionState?.que16_2?.que16_2 == 'नाही'}
                onChange={handleChange}
              />
            </td>
          </tr>
          {reduxInspectionState?.que16_2?.que16_2 == 'होय' && (
            <tr>
              <CTooltip
                content="विसंगत भूमापण क्रमांक टीप"
                placement="left"
                style={customTooltipStyle}
              >
                <td colSpan={3}>
                  <CFormTextarea
                    type="text"
                    placeholder="शेरा..."
                    name="remarksQue16_2"
                    rows={3}
                    value={reduxInspectionState?.que16_2?.remarksQue16_2}
                    onChange={handleChange}
                  />
                </td>
              </CTooltip>
            </tr>
          )}

          {/*---------------------------------------------------------------Que No.16-A----*/}
          {/* <ReusableDependencyQue
            queNo={17}
            queTitle="गाव नमुना ७ अ"
            queTitleDesc="कुळवहिवाट नोंदवही"
            queDescription="सदर गावात कुळाच्या नोंदी आहेत का ?"
            state={reduxInspectionState?.que16a?.que16a}
            handleChange={handleChange}
            showTable="que16a"
            handleShowTable={handleShowTable}
            remarksName="remarksQue16a"
            remarks={reduxInspectionState?.que16a?.remarksQue16a}
            tooltipContent="गा.न. ७ अ"
          /> */}

          {/*---------------------------------------------------------------Que No.16-B----*/}
          {/* <ReusableDependencyQue
            queNo={18}
            queTitle="गाव नमुना ७ ब"
            queTitleDesc="अधिकार अभिलेखानुसार जमीन कब्जात असल्याचे मानण्यात येणाऱ्या व्यक्ती व्यतिरिक्त जमीन कब्जात असलेल्या इतर व्यक्तींची नोंदवही"
            queDescription="अधिकार अभिलेखानुसार जमीन कब्जात असल्याचे मानण्यात येणाऱ्या व्यक्ती व्यतिरिक्त जमीन कब्जात असलेल्या इतर व्यक्तींची नोंदवहीत नोंद आहे का ?"
            state={reduxInspectionState?.que16b?.que16b}
            handleChange={handleChange}
            showTable="que16b"
            handleShowTable={handleShowTable}
            remarksName="remarksQue16b"
            remarks={reduxInspectionState?.que16b?.remarksQue16b}
            tooltipContent="गा.न. ७ ब"
          /> */}

          {/*---------------------------------------------------------------Que No.19-A----*/}
          <ReusableDependencyQue
            queNo={19}
            queTitle="गाव नमुना ८ अ"
            queTitleDesc="धारण जमिनीची नोंदवही"
            queDescription="खाते प्रकार तपासा / खाते संदर्भात ODC मधील अहवाल पडताळणी करा."
            state={reduxInspectionState?.que19a?.que19a}
            handleChange={handleChange}
            showTable="que19a"
            handleShowTable={handleShowTable}
            remarksName="remarksQue19a"
            remarks={reduxInspectionState?.que19a?.remarksQue19a}
            tooltipContent="गा.न. ८ अ"
          />

          {/*---------------------------------------------------------------Que No.19-B----*/}
          {/* <ReusableDependencyQue
            queNo={20}
            queTitle="गाव नमुना ८ ब"
            queTitleDesc="येणे, रकमा व वसुली यांची वार्षिक खातेवही व सर्व ठरावबंद बाबींच्या चाचणी ताळेबंदाची नोंदवही"
            queDescription="जमीन महसूल वसूली यांची वार्षिक खातेवही तपासा."
            state={reduxInspectionState?.que19b?.que19b}
            handleChange={handleChange}
            showTable="que19b"
            handleShowTable={handleShowTable}
            remarksName="remarksQue19b"
            remarks={reduxInspectionState?.que19b?.remarksQue19b}
            tooltipContent="गा.न. ८ ब"
          /> */}

          {/*---------------------------------------------------------------Que No.19-C----*/}
          {/* <ReusableDependencyQue
            queNo={21}
            queTitle="गाव नमुना ८ क"
            queTitleDesc="मागण्या व वसूली यांची वार्षिक खातेवही आणि जमीन महासुलाखेरीज इतर बाबींच्या चाचणी तळेबंदा ची नोंदवही"
            queDescription="सदर गावामधील संकीर्ण रोजगार हमी, शिक्षण कराच्या नोंदी तपासा."
            state={reduxInspectionState?.que19c?.que19c}
            handleChange={handleChange}
            showTable="que19c"
            handleShowTable={handleShowTable}
            remarksName="remarksQue19c"
            remarks={reduxInspectionState?.que19c?.remarksQue19c}
            tooltipContent="गा.न. ८ क"
          /> */}

          {/*---------------------------------------------------------------Que No.19-D----*/}
          {/* <ReusableDependencyQue
            queNo={22}
            queTitle="गाव नमुना ८ ड"
            queTitleDesc="तलाठयाने/मंडळ निरीक्षकाने वसूल केलेले सरकारी येणे रक्कमची व इतर रक्कमची नोंदवही"
            queDescription="सदर गावातील वसूल केलेल्या सरकारी येणे रकमांची व इतर रकमांची नोंदवही तपासा."
            state={reduxInspectionState?.que19d?.que19d}
            handleChange={handleChange}
            showTable="que19d"
            handleShowTable={handleShowTable}
            remarksName="remarksQue19d"
            remarks={reduxInspectionState?.que19d?.remarksQue19d}
            tooltipContent="गा.न. ८ ड"
          /> */}

          {/*---------------------------------------------------------------Que No.23----*/}
          {/* <ReusableDependencyQue
            queNo={23}
            queTitle="गाव नमुना १२"
            //  queTitleDesc=""
            queDescription="सदर गावातील पिकांच्या नोंदी तपासा."
            state={reduxInspectionState?.que23?.que23}
            handleChange={handleChange}
            showTable="que23"
            handleShowTable={handleShowTable}
            remarksName="remarksQue23"
            remarks={reduxInspectionState?.que23?.remarksQue23}
            tooltipContent="गा.न. १२"
          /> */}

          {/*---------------------------------------------------------------Que No.24-----*/}
          {/* <ReusableDependencyQue
            queNo={24}
            queTitle="गाव नमुना १४"
            queTitleDesc="पाणीपुरवठ्याच्या साधनांची नोंदवही"
            queDescription="सदर गावातील पाणीपुरवठ्याच्या साधनांची नोंदवही तपासा."
            state={reduxInspectionState?.que24?.que24}
            handleChange={handleChange}
            showTable="que24"
            handleShowTable={handleShowTable}
            remarksName="remarksQue24"
            remarks={reduxInspectionState?.que24?.remarksQue24}
            tooltipContent="पाणीपुरवठ्याचे साधने टीप"
          /> */}

          {/*---------------------------------------------------------------Que No.25-----*/}
          {/* <ReusableDependencyQue
            queNo={25}
            queTitle="गाव नमुना १५"
            queTitleDesc="आवक-जावक नोंदवही"
            queDescription="सदर गावातील आवक जावक नोंदवही आहे का ?."
            state={reduxInspectionState?.que25?.que25}
            handleChange={handleChange}
            showTable="que25"
            handleShowTable={handleShowTable}
            remarksName="remarksQue25"
            remarks={reduxInspectionState?.que25?.remarksQue25}
            tooltipContent="आवक जावक नोंदवही टीप"
          /> */}

          {/*---------------------------------------------------------------Que No.26-----*/}
          {/* <ReusableDependencyQue
            queNo={26}
            queTitle="गाव नमुना १७"
            queTitleDesc="प्रकरण प्रतीवृत्त"
            queDescription="सदर गावातील संकीर्ण जमीन महसुलाच्या नोंदी प्रकरणनिहाय तपासा."
            state={reduxInspectionState?.que26?.que26}
            handleChange={handleChange}
            showTable="que26"
            handleShowTable={handleShowTable}
            remarksName="remarksQue26"
            remarks={reduxInspectionState?.que26?.remarksQue26}
            tooltipContent="संकीर्ण जमीन महासुलाच्या नोंदी प्रकरणनिहाय टीप"
          /> */}

          {/*---------------------------------------------------------------Que No.27-----*/}
          {/* <ReusableDependencyQue
            queNo={27}
            queTitle="गाव नमुना १९"
            queTitleDesc="तलाठी / मंडळ अधिकारी यांच्या ताब्यात असलेल्या सरकारी मालमत्तेची नोंदवही"
            queDescription="सदर गावामध्ये तलाठी / मंडळ अधिकारी यांच्या ताब्यात असलेल्या सरकारी मालमत्तेची नोंदवही तपासा."
            state={reduxInspectionState?.que27?.que27}
            handleChange={handleChange}
            showTable="que27"
            handleShowTable={handleShowTable}
            remarksName="remarksQue27"
            remarks={reduxInspectionState?.que27?.remarksQue27}
            tooltipContent="सरकारी मालमत्तेची नोंदवही टीप"
          /> */}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Section1
