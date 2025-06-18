import React from 'react'
import { CCol, CContainer, CForm, CFormSelect, CRow } from '@coreui/react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { selectState } from '../../../slices/HomepageSlice'
import { useSelector } from 'react-redux'
import LanguageSelector from '../../../components/language-selector'
import { Trans, useTranslation } from 'react-i18next'

const Section1 = ({ setDropdownVal, dropdownVal }) => {
  const { t } = useTranslation('dashboard')
  const state = useSelector(selectState)

  const handleChange = (e) => {
    const { name, value } = e?.target
    // if(name=="gaon")
    const selctedVillageData = state?.villageData.find((u) => u.villageName == value)
    console.log(selctedVillageData, '--------selctedVillageData')

    // if (name == 'revenueYear') {
    //   setDropdownVal({ ...dropdownVal, revenueYear: value })
    // } else {
    //   setDropdownVal({
    //     ...dropdownVal,
    //     village: value,
    //     villageCode: selctedVillageData?.villageCode,
    //     cCode: selctedVillageData?.cCode,
    //   })
    // }
  }
  return (
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
            <InputLabel id="demo-simple-select-label">गाव</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="गाव"
              size="small"
              name="gaon"
              onChange={handleChange}
            >
              {Array.isArray(state?.villageData) &&
                state?.villageData?.map((val, i) => {
                  return (
                    <MenuItem key={val?.villageCode + i} value={val?.villageName}>
                      {val?.villageName}
                    </MenuItem>
                  )
                })}
            </Select>
          </FormControl>
        </CCol>
        <CCol xs={3}>
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-label">महसूल वर्ष</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="महसूल वर्ष"
              size="small"
              name="revenueYear"
              onChange={handleChange}
            >
              {Array.isArray(state?.revenueYear1) &&
                state?.revenueYear1?.map((val, i) => {
                  return (
                    <MenuItem key={val?.id + i} value={val?.revenueYear}>
                      {val?.revenueYear}
                    </MenuItem>
                  )
                })}
            </Select>
          </FormControl>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Section1
