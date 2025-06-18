import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import InspectionTable from './InspectionTable'
import { cilPencil, cilTrash, cilLowVision, cilPrint, cilMedicalCross } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import Pagination from '@mui/material/Pagination'
import Section1 from '../../dashboard/Sections/Section1'
import { Paper } from '@mui/material'

const data = [
  { talathiId: 1, talathiName: 'Talathi 1', villageName: 'Jalgaon' },
  { talathiId: 2, talathiName: 'Talathi 2', villageName: 'Pune' },
  { talathiId: 3, talathiName: 'Talathi 3', villageName: 'Satara' },
  { talathiId: 4, talathiName: 'Talathi 4', villageName: 'Dhule' },
  { talathiId: 5, talathiName: 'Talathi 5', villageName: 'Sangli' },
  { talathiId: 6, talathiName: 'Talathi 6', villageName: 'Nandurbar' },
  { talathiId: 7, talathiName: 'Talathi 7', villageName: 'Yaola' },
  { talathiId: 8, talathiName: 'Talathi 8', villageName: 'Dharashiv' },
  { talathiId: 9, talathiName: 'Talathi 9', villageName: 'Pimpri-Chinchwad' },
  { talathiId: 10, talathiName: 'Talathi 10', villageName: 'Pimpri' },
  { talathiId: 11, talathiName: 'Talathi 11', villageName: 'Dharashiv' },
  { talathiId: 12, talathiName: 'Talathi 12', villageName: 'Chinchwad' },
]

const CheckInspection = () => {
  const [visible, setVisible] = useState(false)
  const [modelData, setModelData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setDataPerPage] = useState(7)

  const lastDataIndex = currentPage * dataPerPage
  const firstDataIndex = lastDataIndex - dataPerPage
  const currPageData = data.slice(firstDataIndex, lastDataIndex)
  const pageCount = Math.ceil(data.length / dataPerPage)

  const handlePagination = (e, value) => {
    setCurrentPage(value)
  }

  const navigate = useNavigate()
  const handleEdit = () => {
    navigate('/inspection-module/inspection-offline')
  }
  const navigateToInspectionPage = () => {
    navigate('/inspection-module/inspection-offline')
  }
  const handleShow = (val) => {
    setVisible(!visible)
    setModelData(val)
  }

  return (
    <>
      <Paper elevation={2} style={{ paddingTop: 5, paddingBottom: 5 }}>
        <CRow>
          <CCol md={11}>
            <Section1 />
          </CCol>
          <CCol md={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <CButton shape="rounded-0">Add</CButton> */}
            <CButton shape="rounded-1" onClick={navigateToInspectionPage}>
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
          currPageData.map((val, i) => {
            return (
              <CTableBody key={i}>
                <CTableRow>
                  <CTableHeaderCell scope="row">{val?.talathiId}</CTableHeaderCell>
                  <CTableDataCell>{val?.talathiName}</CTableDataCell>
                  <CTableDataCell>{val?.villageName}</CTableDataCell>
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
                        <CButton color="success" variant="ghost" onClick={handleEdit}>
                          <CIcon icon={cilPencil} size="md" />
                        </CButton>
                      </CTooltip>
                      <CTooltip
                        content="View"
                        placement="bottom"
                        style={{ '--cui-tooltip-bg': 'var(--cui-primary)' }}
                      >
                        <CButton color="primary" variant="ghost" onClick={() => handleShow(val)}>
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
                        <CButton color="info" variant="ghost" onClick={() => handleShow(val)}>
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
    </>
  )
}

export default CheckInspection
