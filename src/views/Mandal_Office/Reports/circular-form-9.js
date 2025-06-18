import React, { useState, useRef, useEffect } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import URLS from 'src/URLS'
import {
  CForm,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTooltip,
  CTableRow,
  CToaster,
  CToastHeader,
  CToastClose,
  CToast,
  CFormLabel,
  CFormFeedback,
  CContainer,
} from '@coreui/react'

import {
  cilCompress,
  cilPencil,
  cilTrash,
  cilLowVision,
  cilPrint,
  cilPlus,
  cilMedicalCross,
} from '@coreui/icons'
import { useDispatch, useSelector } from 'react-redux'
import CIcon from '@coreui/icons-react'
import Pagination from '@mui/material/Pagination'
import Section5 from '../../dashboard/Sections/Section5'
import { Paper } from '@mui/material'

import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { selectState } from '../../../slices/HomepageSlice'
import LanguageSelector from '../../../components/language-selector'
import { Trans, useTranslation } from 'react-i18next'

const echHost = localStorage.getItem('echHost')
const token = localStorage.getItem('token')
const mhrHost = localStorage.getItem('mhrHost')
const echDbName = localStorage.getItem('echDbName')
const echSchemaName = localStorage.getItem('echSchemaName')
const mhrDbName = localStorage.getItem('mhrDbName')
const mhrSchemaName = localStorage.getItem('mhrSchemaName')
const servarthId = localStorage.getItem('servarthId')
const langType = localStorage.getItem('umi_locale') === 'ma-IN' ? 'mr-IN' : 'en-US'

const CircularForm9 = () => {
  const { t } = useTranslation('dashboard')
  const state = useSelector(selectState)
  const [villageSajjaCode, setVillageSajjaCode] = useState()
  const [villageSajjaName, setVillageSajjaName] = useState()
  const [villageSaja, setVillageSaja] = useState([])
  const [DropdownVal1, setDropdownVal1] = useState()
  const [tabaleData, setTableData] = useState()

  const handleChange = async (e) => {
    const value = await e?.target?.value
    const selctedVillageData = await state?.villageData.find((u) => u.sajjaName === value)
    setDropdownVal1({
      village: await value,
      sajjaCode: await selctedVillageData?.sajjaCode,
      sajjaName: await selctedVillageData?.sajjaName,
    })
  }
  console.log(DropdownVal1, '--------setDropdownVal1')

  const fetchTableData = async () => {
    await axios
      .get(`${URLS.BaseURL}/form19/getForm19Data?sajjaCode=${DropdownVal1?.sajjaCode}&userId=''`, {
        headers: {
          'Accept-Language': langType,
          Authorization: `Bearer ${token}`,
          echHost: echHost,
          mhrHost: mhrHost,
          echDbName: echDbName,
          echSchemaName: echSchemaName,
          mhrDbName: mhrDbName,
          mhrSchemaName: mhrSchemaName,
          servarthId: servarthId,
        },
      })
      //.get(`http://localhost:8092/inspection/api/getAllQue`)
      .then((res) => {
        try {
          console.log(res, '--List of Question List')
          setTableData(
            res.data?.form19Data?.map((r) => ({
              id: r.id,
              descriptionOfArticle: r.descriptionOfArticle,
              authorityOfPurchase: r.authorityOfPurchase,
              numberOrQuantity: r.numberOrQuantity,
              dateOfPurchase: r.dateOfPurchase ? r.dateOfPurchase : '',
              authorityOfVoucher: r.authorityOfVoucher,
              amountWrittenOff: r.amountWrittenOff,
              amountRealized: r.amountRealized,
              dateOfCreditAtTreasury: r.dateOfCreditAtTreasury ? r.dateOfCreditAtTreasury : '',
              number: r.number,
              value: r.value,
              remarks: r.remarks,
            })),
          )
        } catch (err) {
          console.log(err, 'error in TotalLiveKhatedar')
        }
      })
  }

  return (
    <>
      <Toast />

      <Paper elevation={2} style={{ paddingTop: 5, paddingBottom: 5 }}>
        <CRow>
          <CCol md={11}>
            <CContainer fluid>
              <CRow>
                <CCol xs={3}>
                  <FormControl variant="filled" fullWidth>
                    <TextField
                      id="filled-basic"
                      label="जिल्हा"
                      variant="filled"
                      value={state?.districtName}
                      size="small"
                      disabled
                    />
                  </FormControl>
                </CCol>
                <CCol xs={3}>
                  <FormControl variant="filled" fullWidth>
                    <TextField
                      id="filled-basic"
                      label="तालुका"
                      variant="filled"
                      value={state?.talukaName}
                      size="small"
                      disabled
                    />
                  </FormControl>
                </CCol>
                <CCol xs={3}>
                  <FormControl variant="filled" fullWidth>
                    <InputLabel id="demo-simple-select-label">सजा</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="गाव निवाडा"
                      size="small"
                      name="gaon"
                      onChange={handleChange}
                    >
                      {Array.isArray(state?.villageData) &&
                        state?.villageData?.map((val, i) => {
                          return (
                            <MenuItem key={val?.sajjaCode + i} value={val?.sajjaName}>
                              {val?.sajjaName}
                            </MenuItem>
                          )
                        })}
                      <MenuItem value="111">111</MenuItem>
                    </Select>
                  </FormControl>
                </CCol>
                <CCol
                  xs={3}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CButton
                    shape="rounded-1"
                    variant="outline"
                    onClick={fetchTableData}
                    color="primary"
                  >
                    {/* <CIcon icon={cilMedicalCross} size="md" /> */}
                    Show Data
                  </CButton>
                </CCol>
              </CRow>
            </CContainer>
          </CCol>
        </CRow>
      </Paper>
      <hr />
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <CRow>
                <center>
                  <CFormLabel>
                    <h5>
                      <strong>मंडळ नमुना नऊ</strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
              <CRow>
                <center>
                  <CFormLabel>
                    <h5>
                      <strong>
                        मंडळ अधिकारी यांच्या ताब्यात असलेल्या शासकीय मालमत्तेची नोंदवही{' '}
                      </strong>
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
              <CRow>
                <center>
                  <CFormLabel>
                    <h5>
                      <strong>मंडळ अधिकारी ____________, तालुका</strong> {state?.talukaName}
                      <strong>, जिल्हा </strong>
                      {state?.districtName}
                    </h5>
                  </CFormLabel>
                </center>
              </CRow>
            </CCardHeader>
            <CCardBody>
              {/* <CForm onSubmit={formik.handleSubmit}> */}
              <CForm>
                <div>
                  <CTable hover bordered responsive="sm" align="middle">
                    <CTableHead color="dark">
                      <CTableRow>
                        <CTableHeaderCell scope="col">अ. क्र.</CTableHeaderCell>
                        <CTableHeaderCell scope="col">वस्तूचे वर्णन</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          तहसील कार्यालयातून साहित्य मिळाल्याचा दिनांक
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">संख्या किंवा परिमाण</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          तालुका नमुना नऊ मधील अ. क्र.{' '}
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          साहित्य खरेदी केले असल्यास त्याचा दिनांक{' '}
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">साहित्याचे मूल्य</CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          मंडळ अधिकारी यांची स्वाक्षरी
                        </CTableHeaderCell>
                        <CTableHeaderCell scope="col">
                          अंतिम विल्हेवाट लावण्यात आली असेल तर त्याचे स्वरूप आणि दिनांक
                        </CTableHeaderCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell style={{ alignItems: 'center' }}>1</CTableHeaderCell>
                        <CTableHeaderCell>2</CTableHeaderCell>
                        <CTableHeaderCell>3</CTableHeaderCell>
                        <CTableHeaderCell>4</CTableHeaderCell>
                        <CTableHeaderCell>5</CTableHeaderCell>
                        <CTableHeaderCell>6</CTableHeaderCell>
                        <CTableHeaderCell>7</CTableHeaderCell>
                        <CTableHeaderCell>8</CTableHeaderCell>
                        <CTableHeaderCell>9</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {tabaleData?.map((r, i) => (
                        <>
                          <CTableRow>
                            <CTableHeaderCell scope="row">{i + 1}</CTableHeaderCell>
                            <CTableDataCell>{r.descriptionOfArticle}</CTableDataCell>
                            <CTableDataCell>{r.dateOfCreditAtTreasury}</CTableDataCell>
                            <CTableDataCell>{r.numberOrQuantity}</CTableDataCell>
                            <CTableDataCell>{r.authorityOfVoucher}</CTableDataCell>
                            <CTableDataCell>-</CTableDataCell>
                            <CTableDataCell>-</CTableDataCell>
                            <CTableDataCell>{r.amountRealized}</CTableDataCell>
                            <CTableDataCell>-</CTableDataCell>
                          </CTableRow>
                        </>
                      ))}
                    </CTableBody>
                  </CTable>
                </div>
                {/* <div style={{ display: 'flex', justifyContent: 'end' }}>
                  <CButton type="submit" color="primary">
                    Save Response
                  </CButton>
                  <CButton color="light" style={{ marginLeft: 7 }}>
                    Reset
                  </CButton>
                </div> */}
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default CircularForm9
