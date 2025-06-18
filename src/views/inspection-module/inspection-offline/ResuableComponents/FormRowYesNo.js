import { CFormCheck, CFormLabel, CTableDataCell, CTableRow } from '@coreui/react'
import React from 'react'

const FormRowYesNo = ({ value, name, handleChange, formLabel1, formLabel2 }) => {
  return (
    // <CTableRow color={value == 'होय' ? 'info' : 'light'}>
    <CTableRow>
      <CTableDataCell>
        <CFormLabel htmlFor="exampleFormControlInput1">
          <strong> {formLabel1} </strong>
        </CFormLabel>
      </CTableDataCell>
      <CTableDataCell>
        <CFormLabel htmlFor="exampleFormControlInput1">{formLabel2}</CFormLabel>
      </CTableDataCell>
      <CTableDataCell>
        <CFormCheck
          type="radio"
          name={name}
          id="8c11"
          value="होय"
          label="होय"
          checked={value == 'होय'}
          onChange={(e) => handleChange(e)}
        />
      </CTableDataCell>
      <CTableDataCell>
        <CFormCheck
          type="radio"
          name={name}
          id="8c22"
          value="नाही"
          label="नाही"
          checked={value == 'नाही'}
          onChange={(e) => handleChange(e)}
        />
      </CTableDataCell>
    </CTableRow>
  )
}

export default FormRowYesNo
