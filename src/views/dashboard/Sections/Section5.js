import React, { useState, useRef, useEffect } from 'react'
import { CCol, CContainer, CForm, CFormSelect, CRow } from '@coreui/react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { selectState } from '../../../slices/HomepageSlice'
import { useSelector } from 'react-redux'
import LanguageSelector from '../../../components/language-selector'
import { Trans, useTranslation } from 'react-i18next'

const Section5 = ({ setDropdownVal, dropdownVal }) => {
  const { t } = useTranslation('dashboard')
  const state = useSelector(selectState)
  const [villageSajjaCode, setVillageSajjaCode] = useState()
  const [villageSajjaName, setVillageSajjaName] = useState()
  const [villageSaja, setVillageSaja] = useState([])

  useEffect(() => {
    const villageData = JSON.parse(localStorage.getItem('villageData'))
    const result = villageData.filter(
      (thing, index, self) =>
        index ===
        self.findIndex((t) => t.sajjaName === thing.sajjaName && t.sajjaCode === thing.sajjaCode),
    )
    setVillageSaja(
      result?.map((row) => ({
        label: row.sajjaName,
        value: row.sajjaCode,
      })),
    )
  }, [])

  const handleOnChange = (value, event) => {
    setVillageSajjaCode(value)
    setVillageSajjaName(event.label)
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
            <InputLabel id="demo-simple-select-label">सजा</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="सजा"
              options={villageSaja}
              size="small"
              name="gaon"
              onSelect={(value, event) => handleOnChange(value, event)}
            ></Select>
          </FormControl>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Section5
