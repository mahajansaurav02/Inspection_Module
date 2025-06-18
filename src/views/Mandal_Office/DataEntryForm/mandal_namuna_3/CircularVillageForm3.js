import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import reqHeaders from 'src/instance/headers'
import {
  CButton,
  CCol,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
  CFormLabel,
  CForm,
  CInputGroup,
  CFormInput,
} from '@coreui/react'
import InspectionTable from '../Inspectiontable'
import { cilPencil, cilTrash, cilLowVision, cilPrint, cilMedicalCross } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import Pagination from '@mui/material/Pagination'
import Section1 from '../../../dashboard/Sections/Section1'
import { Paper } from '@mui/material'
import { Toast, errorToast, successToast } from 'src/views/ui/Toast'
import CircularDataentryForm3 from './CircularDataentryForm3'

const data = [
  {
    talathiId: 1,
    talathiName: 'Talathi 1',
    villageName: 'Jalgaon',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 2,
    talathiName: 'Talathi 2',
    villageName: 'Pune',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 3,
    talathiName: 'Talathi 3',
    villageName: 'Satara',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 4,
    talathiName: 'Talathi 4',
    villageName: 'Dhule',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 5,
    talathiName: 'Talathi 5',
    villageName: 'Sangli',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 6,
    talathiName: 'Talathi 6',
    villageName: 'Nandurbar',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 7,
    talathiName: 'Talathi 7',
    villageName: 'Yaola',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 8,
    talathiName: 'Talathi 8',
    villageName: 'Dharashiv',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 9,
    talathiName: 'Talathi 9',
    villageName: 'Pimpri-Chinchwad',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 10,
    talathiName: 'Talathi 10',
    villageName: 'Pimpri',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 11,
    talathiName: 'Talathi 11',
    villageName: 'Dharashiv',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
  {
    talathiId: 12,
    talathiName: 'Talathi 12',
    villageName: 'Chinchwad',
    sajjaName: 'मांदाड',
    sajjaVillageName: 'मांदाड',
    mandalRuzuDate: '04/26/2024',
    deviceDateofreceipt: '04/26/2024',
    contactNo: '1234567890',
    remark: 'remark',
  },
]

const CircularVillageForm3 = () => {
  const [visible, setVisible] = useState(false)
  const [modelData, setModelData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(3)
  const [datainModel, setDataInModal] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const lastDataIndex = currentPage * dataPerPage
  const firstDataIndex = lastDataIndex - dataPerPage
  const currPageData = data.slice(firstDataIndex, lastDataIndex)
  const pageCount = Math.ceil(data.length / dataPerPage)

  const [talathiName, setTalathiName] = useState()
  const [villagename, setVillageName] = useState()
  const [circlename, setCircleName] = useState()
  const [sajja, setSajja] = useState()
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

  const handlePagination = (e, value) => {
    setCurrentPage(value)
  }

  const navigate = useNavigate()
  const showModalForEdit = (record) => {
    // Code For Reset Form
    // Code For Edit for Specific record
    console.log(record, '----Edit-------')
    setDataInModal({
      talathiId: record.talathiId,
      talathiName: record.talathiName,
      villageName: record.villageName,
      sajjaName: record.sajjaName,
      sajjaVillageName: record.sajjaVillageName,
      mandalRuzuDate: record.mandalRuzuDate,
      deviceDateofreceipt: record.deviceDateofreceipt,
      contactNo: record.contactNo,
      remark: record.remark,
    })
    setIsModalVisible(true)
    //navigate('/inspection-module/inspection-offline')
  }
  const navigateToDataentryPage = () => {
    navigate('/Mandal_Office/DataEntryForm/CircularDataentryForm3')
  }
  const handleShow = (val) => {
    setVisible(!visible)
    setModelData(val)
  }
  const handleCancelForModal = () => {
    setIsModalVisible(false)
  }

  const updateCircularForm = async () => {
    alert('Update')
    const parametersForEdit = {
      talathiId: allFormVal.talathiId,
      talathiName: allFormVal.talathiName,
      villageName: allFormVal.villageName,
      sajjaName: allFormVal.sajjaName,
      sajjaVillageName: allFormVal.sajjaVillageName,
      mandalRuzuDate: allFormVal.mandalRuzuDate,
      deviceDateofreceipt: allFormVal.deviceDateofreceipt,
      contactNo: allFormVal.contactNo,
      remark: allFormVal.remark,
    }
    console.log('update' + allFormVal.contactDetails, allFormVal.deviceDate)
  }

  useEffect(() => {
    var villageData = JSON.parse(localStorage.getItem('villageData'))
    const talathiname = localStorage.getItem('marathiName')
    console.log(villageData[0])
    setCircleName(villageData[0].circleName)
    setVillageName(villageData[0].villageName)
    setSajja(villageData[0].sajjaName)
    setTalathiName(talathiname)
  }, [sajja, talathiName, villagename, circlename])

  return (
    <>
      <Paper elevation={2} style={{ paddingTop: 5, paddingBottom: 5 }}>
        <CRow>
          <CCol md={11}>
            <Section1 />
          </CCol>
          <CCol md={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <CButton shape="rounded-0">Add</CButton> */}
            <CButton shape="rounded-1" onClick={navigateToDataentryPage}>
              {/* <CIcon icon={cilMedicalCross} size="md" /> */}Add
            </CButton>
          </CCol>
        </CRow>
      </Paper>
      <hr />

      <InspectionTable visible={visible} setVisible={setVisible} modelData={modelData} />

      <CTable
        bordered
        borderColor="secondary"
        style={{ textAlign: 'center', verticalAlign: 'middle' }}
      >
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Inspection ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Talathi Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Village Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        {Array.isArray(currPageData) &&
          currPageData.map((record, i) => {
            return (
              <CTableBody key={i}>
                <CTableRow>
                  <CTableHeaderCell scope="row">{record?.talathiId}</CTableHeaderCell>
                  <CTableDataCell>{record?.talathiName}</CTableDataCell>
                  <CTableDataCell>{record?.villageName}</CTableDataCell>
                  <CTableDataCell>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        marginBottom: 12,
                      }}
                    >
                      <CTooltip
                        content="Edit"
                        placement="bottom"
                        style={{ '--cui-tooltip-bg': 'var(--cui-primary)' }}
                      >
                        <CButton
                          color="success"
                          variant="ghost"
                          onClick={() => showModalForEdit(record)}
                        >
                          <CIcon icon={cilPencil} size="md" />
                        </CButton>
                      </CTooltip>
                      <CTooltip
                        content="View"
                        placement="bottom"
                        style={{ '--cui-tooltip-bg': 'var(--cui-primary)' }}
                      >
                        <CButton color="primary" variant="ghost" onClick={() => handleShow(record)}>
                          {/* <CIcon icon={cilCompress} size="md" /> */}
                          <CIcon icon={cilLowVision} size="md" />
                        </CButton>
                      </CTooltip>
                      <CTooltip
                        content="Delete"
                        placement="bottom"
                        style={{ '--cui-tooltip-bg': 'var(--cui-primary)' }}
                      >
                        <CButton color="danger" variant="ghost">
                          <CIcon icon={cilTrash} size="md" />
                        </CButton>
                      </CTooltip>

                      <CTooltip
                        content="View"
                        placement="bottom"
                        style={{ '--cui-tooltip-bg': 'var(--cui-primary)' }}
                      >
                        <CButton color="info" variant="ghost" onClick={() => handleShow(record)}>
                          <CIcon icon={cilPrint} size="md" />
                        </CButton>
                      </CTooltip>

                      {/* ------------------------------------------------ */}
                    </div>
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            )
          })}
      </CTable>
      <CRow>
        <CCol xs={12} md={6}>
          <Pagination
            count={pageCount}
            color="primary"
            variant="text"
            shape="rounded"
            size="large"
            onChange={handlePagination}
          />
        </CCol>
      </CRow>

      {/* --------------------Edit Model---------------------------------*/}
      <CModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        aria-labelledby="ScrollingLongContentExampleLabel"
        size="lg"
      >
        <CModalHeader>
          <CModalTitle id="ScrollingLongContentExampleLabel">मंडळ नमुना तीन Edit</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CircularDataentryForm3 isEdit={true} />
        </CModalBody>
      </CModal>
    </>
  )
}

export default CircularVillageForm3
