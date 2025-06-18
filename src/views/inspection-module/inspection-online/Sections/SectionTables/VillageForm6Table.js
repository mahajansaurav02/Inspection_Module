import React, { useEffect, useState } from 'react'
import {
  CDropdown,
  CDropdownToggle,
  CDropdownItem,
  CDropdownMenu,
  CFormSelect,
  CCol,
  CContainer,
  CForm,
  CRow,
  CFormInput,
  CButton,
} from '@coreui/react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import URLS from 'src/URLS'
import axios from 'axios'
import reqHeaders from 'src/instance/headers'
import satbaraHeader from 'src/instance/headers'
import { Toast, errorToast, infoToast, successToast, warningToast } from 'src/views/ui/Toast'
import CryptoJS from 'crypto-js'
import { WidthNormal } from '@mui/icons-material'
import Divider from '@mui/material/Divider'
import { useNavigate } from 'react-router-dom'

const VillageForm6Table = () => {
  const [districtD, setDistrict] = useState([])
  const [districtCode, setDistrictCode] = useState([])
  const [taluka, setTaluka] = useState([])
  const [village, setVillage] = useState([])
  const [eightA, setEightA] = useState([])
  const [KhataNUmber, setKhataNumber] = useState([])
  const [lgdcode, setLGDCode] = useState([])
  const [districtMap, setDistrictMap] = useState({})
  const [base64Image, setBase64Image] = useState({})
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const navigate = useNavigate()

  //---------------------onChanges-----------------------

  const onchangeDistrict = async (e) => {
    const value = await e?.target?.value
    setDistrictCode(value)
    getTaluka(value)
  }

  const onchangeTalukha = async (e) => {
    const taluka = await e?.target?.value
    getVillage(districtCode, taluka)
    console.log(taluka, '-------------------sub')
  }
  const onchangeVillage = async (e) => {
    const village = await e?.target?.value
    // getVillage(districtCode, taluka)
    setLGDCode(village.trim())
    console.log(village, '-------------------village')
  }

  const handleChange = (e) => {
    const { value, name } = e?.target
    setKhataNumber(value.trim())
    console.log(value, '-------------------Khatanumber')
  }

  //---------------------API-----------------------
  const getDistrict = async () => {
    setDistrict([])
    axios
      // .post(`${URLS.District}`, null, {
      //   headers: { satbaraHeader },
      // })
      .post(`https://api.mahabhumi.gov.in/api/lgd/getDistrictofState`, null, {
        headers: {
          Authorization:
            'Bearer ' + 'FCk6WvUiq70RKTpnwf0ASuMWl2ki6rXdhCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy',
          'API-KEY': 'f3c040ae-4264-f1d1-ac58-486e2453',
          'SECRET-KEY': '9z3g7YaHCzwj4diHacM2Cdt8Cg1FOYVLjh2nOtRjGBz67Ygh3UiYzwcOe5By',
        },
      })
      .then((r) => {
        // console.log(r, '------------List of District')
        if (r.status == 200 && r.statusText == 'OK') {
          // console.log(r, '------------List of District')
          const encryptedData = r.data.data

          var key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
          var iv = 'C3dL6YnHWwRPS1Jy'
          const districts = decryptData(encryptedData, key, iv)

          let a = JSON.parse(districts)
          // alert(a)
          setDistrict(a)

          // console.log(a, '------------------------->>>>>>>llll')
          // alert(decreptedata)
        }
        // successToast('Records Fetched')
      })
      .catch((err) => {
        console.error(err, '-----------------reee')

        // if (err.response.status == 400) {
        //   warningToast('Data not available')
        //   console.error(err.response.data.error)
        // }
        // if (err.response.status == 500) {
        //   warningToast('Something went wrong')
        // }
      })
  }

  const getTaluka = async (distictCode) => {
    setTaluka([])
    axios
      // .post(`${URLS.District}`, null, {
      //   headers: { satbaraHeader },
      // })
      .post(`https://api.mahabhumi.gov.in/api/lgd/getTalukasOfDistrict`, null, {
        headers: {
          Authorization:
            'Bearer ' + 'FCk6WvUiq70RKTpnwf0ASuMWl2ki6rXdhCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy',
          'API-KEY': 'f3c040ae-4264-f1d1-ac58-486e2453',
          'SECRET-KEY': '9z3g7YaHCzwj4diHacM2Cdt8Cg1FOYVLjh2nOtRjGBz67Ygh3UiYzwcOe5By',
        },
        params: {
          distcode: distictCode,
        },
      })
      .then((r) => {
        // console.log(r, '------------List of Taluka')
        if (r.status == 200 && r.statusText == 'OK') {
          // console.log(r, '------------List of Talukka')
          const encryptedData = r.data.data
          var key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
          var iv = 'C3dL6YnHWwRPS1Jy'
          const taluka = decryptData(encryptedData, key, iv)

          let a = JSON.parse(taluka)
          // alert(a)
          setTaluka(a)

          console.log(a, '------------------------->>>>>>>llll')
          // alert(decreptedata)
        }
        // successToast('Records Fetched')
      })
      .catch((err) => {
        console.error(err, '-----------------reee')

        // if (err.response.status == 400) {
        //   warningToast('Data not available')
        //   console.error(err.response.data.error)
        // }
        // if (err.response.status == 500) {
        //   warningToast('Something went wrong')
        // }
      })
  }

  const getVillage = async (distictCode, talukaCode) => {
    setVillage([])
    axios
      // .post(`${URLS.District}`, null, {
      //   headers: { satbaraHeader },
      // })
      .post(`https://api.mahabhumi.gov.in/api/lgd/getVillagesOfDistrictAndTaluka`, null, {
        headers: {
          Authorization:
            'Bearer ' + 'FCk6WvUiq70RKTpnwf0ASuMWl2ki6rXdhCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy',
          'API-KEY': 'f3c040ae-4264-f1d1-ac58-486e2453',
          'SECRET-KEY': '9z3g7YaHCzwj4diHacM2Cdt8Cg1FOYVLjh2nOtRjGBz67Ygh3UiYzwcOe5By',
        },
        params: {
          distcode: distictCode,
          talukacode: talukaCode,
        },
      })
      .then((r) => {
        console.log(r, '------------List of Village')
        if (r.status == 200 && r.statusText == 'OK') {
          console.log(r, '------------List of Village')
          const encryptedData = r.data.data
          var key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
          var iv = 'C3dL6YnHWwRPS1Jy'
          const taluka = decryptData(encryptedData, key, iv)

          let a = JSON.parse(taluka)
          // alert(a)
          setVillage(a)

          console.log(a, '------------------------->>>>>>>Village')
          // alert(decreptedata)
        }
        // successToast('Records Fetched')
      })
      .catch((err) => {
        console.error(err, '-----------------reee')

        // if (err.response.status == 400) {
        //   warningToast('Data not available')
        //   console.error(err.response.data.error)
        // }
        // if (err.response.status == 500) {
        //   warningToast('Something went wrong')
        // }
      })
  }

  const getMutationView = async () => {
    let lgdCode = lgdcode
    let mutationNumber = KhataNUmber
    // let lgdCode = '535327'
    // let khataNo = '117'

    axios
      // .post(`${URLS.District}`, null, {
      //   headers: { satbaraHeader },
      // })
      .post(`https://api.mahabhumi.gov.in/api/eferfar/getMRView`, null, {
        headers: {
          Authorization:
            'Bearer ' + 'FCk6WvUiq70RKTpnwf0ASuMWl2ki6rXdhCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy',
          'API-KEY': 'f3c040ae-4264-f1d1-ac58-486e2453',
          'SECRET-KEY': '9z3g7YaHCzwj4diHacM2Cdt8Cg1FOYVLjh2nOtRjGBz67Ygh3UiYzwcOe5By',
        },
        params: {
          // lgd_code: '535327',
          lgd_code: lgdCode,
          // mut_no: '639',
          mut_no: mutationNumber,
        },
      })
      .then((r) => {
        // console.log(r, '------------Mutation View')
        var key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
        var iv = 'C3dL6YnHWwRPS1Jy'
        var encryptedData = r.data.data
        const base64String = atob(encryptedData)
        const base64Image = decryptDataImage(base64String, key, iv)
        const clearTest = JSON.parse(base64Image)
        const showMutationView = clearTest

        setBase64Image(showMutationView)

        successToast('Records Fetched')
      })
      .catch((err) => {
        console.error(err, '-----------------reee')
        // if (err.response.status == 400) {
        //   warningToast('Data not available')
        //   console.error(err.response.data.error)
        // }
        // if (err.response.status == 500) {
        //   warningToast('Something went wrong')
        // }
      })
  }

  const decryptData = (encryptedData, key, iv) => {
    const keyBytes = CryptoJS.enc.Utf8.parse(key)
    const ivBytes = CryptoJS.enc.Utf8.parse(iv)
    // const utf8Bytes = new TextEncoder().encode(encryptedData); // const base64String = atob(String.fromCharCode(...utf8Bytes));

    //--------------or-----------------
    const base64String = atob(encryptedData)

    const decrypted = CryptoJS.AES.decrypt(base64String, keyBytes, {
      iv: ivBytes,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
    const decryptedText = decrypted.toString(CryptoJS.enc.Utf8)
    return decryptedText
  }

  const decryptDataImage = (base64Data, key, iv) => {
    // Decode the Base64 string
    const encryptedData = CryptoJS.enc.Base64.parse(base64Data)

    // Convert key and IV to WordArray
    const keyWordArray = CryptoJS.enc.Utf8.parse(key)
    const ivWordArray = CryptoJS.enc.Utf8.parse(iv)

    // Decrypt
    const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedData }, keyWordArray, {
      iv: ivWordArray,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })

    // Convert decrypted WordArray to string
    return decrypted.toString(CryptoJS.enc.Utf8)
  }
  useEffect(() => {
    getDistrict()
  }, [])
  return (
    <>
      {/* <h2>Village Form 6 Table</h2> */}
      <div>
        <CContainer xxl>
          <CRow>
            <CCol xs={3}>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">जिल्हा(District)</InputLabel>

                <Select label="सजा" size="small" name="सजा" onChange={onchangeDistrict}>
                  {Array.isArray(districtD) &&
                    districtD?.map((val, i) => {
                      return (
                        <MenuItem key={val?.districtcode} value={val?.districtcode}>
                          {val?.districtlocalname}
                        </MenuItem>
                      )
                    })}
                </Select>
              </FormControl>
            </CCol>
            <CCol xs={3}>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">तालुका(Taluka) </InputLabel>

                <Select
                  label="तालुका(Taluka)"
                  size="small"
                  name="तालुका(Taluka) "
                  onChange={onchangeTalukha}
                >
                  {Array.isArray(taluka) &&
                    taluka?.map((val, i) => {
                      return (
                        <MenuItem key={val?.subdistrictcode} value={val?.subdistrictcode}>
                          {val?.subdistrictlocalname}
                        </MenuItem>
                      )
                    })}
                </Select>
              </FormControl>
            </CCol>
            <CCol xs={2}>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">गाव(Village)</InputLabel>

                <Select
                  label="गाव(Village)"
                  size="small"
                  name="गाव(Village)"
                  onChange={onchangeVillage}
                >
                  {Array.isArray(village) &&
                    village?.map((val, i) => {
                      return (
                        <MenuItem key={val?.villagecode} value={val?.villagecode}>
                          {val?.villagelocalname}
                        </MenuItem>
                      )
                    })}
                </Select>
              </FormControl>
            </CCol>
            <CCol xs={2}>
              <FormControl variant="filled" fullWidth>
                <CFormInput
                  type="text"
                  placeholder="Mutation number"
                  name="Mutation_number"
                  onChange={(e) => {
                    // handleChangeQ5(e)
                    handleChange(e)
                  }}
                  // onBlur={handleBlurQ5}
                  // invalid={handleTouchedQ5?.kabulayat && !!handleErrorsQ5?.kabulayat}
                  // feedbackInvalid={handleErrorsQ5?.kabulayat}
                  required
                  style={{ paddingTop: '10px', marginTop: '5px' }}
                />
              </FormControl>
            </CCol>
            <CCol xs={2}>
              <CButton
                onClick={getMutationView}
                type="submit"
                color="primary"
                size="sm"
                shape="rounded-0"
                className="d-grid gap-2 d-md-block"
                style={{ paddingTop: '10px', marginTop: '5px' }}
              >
                View Ferfar
              </CButton>
            </CCol>
          </CRow>
          <Divider />
        </CContainer>
        <Divider />
        <img width="100%" height="100%" src={base64Image} />
      </div>
    </>
  )
}

export default VillageForm6Table
