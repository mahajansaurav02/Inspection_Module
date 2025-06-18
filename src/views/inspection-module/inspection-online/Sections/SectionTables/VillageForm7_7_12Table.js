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

const VillageForm7_7_12Table = () => {
  const [districtD, setDistrict] = useState([])
  const [districtCode, setDistrictCode] = useState([])
  const [taluka, setTaluka] = useState([])
  const [village, setVillage] = useState([])
  const [eightA, setEightA] = useState([])
  const [KhataNUmber, setKhataNumber] = useState([])
  const [SurveyNumber, setSurveyNumber] = useState([])
  const [lgdcode, setLGDCode] = useState([])
  const [districtMap, setDistrictMap] = useState({})
  const [base64Image, setBase64Image] = useState({})
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [satbaraHtml, setSatbaraHtml] = useState()
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
    const a = value.split('/')
    console.log(a, '-------------------surveyNumber')
    // alert(value.trim())
    setSurveyNumber(a)
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

          setVillage(a)

          console.log(a, '------------------------->>>>>>>Village')
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

  const get712View = async () => {
    // console.log('survey number:  ' + SurveyNumber)
    console.log('Element at index 0: ' + SurveyNumber[0]) // Access the first element (65)
    console.log('Element at index 1: ' + SurveyNumber[1]) // Access the second element (1)
    console.log('Element at index 2: ' + SurveyNumber[2]) // Access the third element (अ)

    let pin = SurveyNumber[0]
    let pin1 = SurveyNumber[1]
    let pin2 = SurveyNumber[2]
    let pin3 = SurveyNumber[3]
    let pin4 = SurveyNumber[4]
    let pin5 = SurveyNumber[5]
    let pin6 = SurveyNumber[6]
    let pin7 = SurveyNumber[7]
    let pin8 = SurveyNumber[8]
    let lgdcode = '535327'
    //let lgdcode = village
    const token = 'FCk6WvUiq70RKTpnwf0ASuMWl2ki6rXdhCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
    await axios
      .post(`https://api.mahabhumi.gov.in/api/eferfar/getSatbaraHTML`, null, {
        //.post(`https://api.mahabhumi.gov.in/api/lgd/getDistrictofState`, null, {
        // .post(
        //   `https://api.mahabhumi.gov.in/api/eferfar/getSatbaraHTML?lgd_code=${lgd_code}&pin=${pin}&pin1=${pin1}&pin2=${pin2}&pin3=${pin3}&pin4=${pin4}&pin5=${pin5}&pin6=${pin6}&pin7=${pin7}&pin8=${pin8}`,
        //   {
        headers: {
          Authorization: 'Bearer ' + token,
          'API-KEY': 'f3c040ae-4264-f1d1-ac58-486e2453',
          'SECRET-KEY': '9z3g7YaHCzwj4diHacM2Cdt8Cg1FOYVLjh2nOtRjGBz67Ygh3UiYzwcOe5By',
        },
        params: {
          lgd_code: lgdcode,
          pin: '65',
          pin1: '1',
          pin2: 'अ',
          pin3: '',
          pin4: '',
          pin5: '',
          pin6: '',
          pin7: '',
          pin8: '',
          // pin: pin,
          // pin1: pin1,
          // pin2: pin2,
          // pin3: pin3,
          // pin4: pin4,
          // pin5: pin5,
          // pin6: pin6,
          // pin7: pin7,
          // pin8: pin8,
        },
      })
      .then((res) => {
        const encryptedData = res.data.data

        var key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
        var iv = 'C3dL6YnHWwRPS1Jy'
        const base64String = atob(encryptedData)

        const base64Image = decryptDataImage(base64String, key, iv)

        const clearTest = JSON.parse(base64Image)

        const sendtoShowEightAView = clearTest

        setBase64Image(sendtoShowEightAView)

        // navigate(
        //   '/src/views/inspection-module/inspection-online/Sections/SectionTables/ShowSatbara.js',
        //   { state: { satBaraHtml: cleanedStr } },
        // )
      })
      .catch((err) => {
        //console.error(err)

        errorToast()
        //err.status == '500' ? err.message : 'Unauthorized access (Check required parameters)',
      })
  }
  const decryptData = (encryptedData, key, iv) => {
    const keyBytes = CryptoJS.enc.Utf8.parse(key)
    const ivBytes = CryptoJS.enc.Utf8.parse(iv)
    const utf8Bytes = new TextEncoder().encode(encryptedData)
    const base64String = atob(String.fromCharCode(...utf8Bytes))
    // const base64 = require('js-base64')
    //--------------or-----------------
    //const base64String = atob(encryptedData)
    // console.log(base64.decode(base64String), '---------------base64')

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

  const Base64Image = ({ base64String }) => {
    return (
      <div>
        <img src={`${base64String}`} alt="Base64_Image" width={500} height={600} />
      </div>
    )
  }
  useEffect(() => {
    getDistrict()
  }, [])

  return (
    <>
      <h2> Show 7 / 12 details</h2>
      <div>
        <CContainer xxl>
          <CRow>
            <CCol xs={3}>
              <FormControl variant="filled" fullWidth>
                <InputLabel id="demo-simple-select-label">जिल्हा(District)</InputLabel>

                <Select label="सजा" size="small" name="gaon" onChange={onchangeDistrict}>
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
                  placeholder="Survey number"
                  name="Survey number"
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
                onClick={get712View}
                type="submit"
                color="primary"
                size="sm"
                shape="rounded-0"
                className="d-grid gap-2 d-md-block"
                style={{ paddingTop: '10px', marginTop: '5px' }}
              >
                View 7/12
              </CButton>
            </CCol>
          </CRow>
          <Divider />
          <hr />
          {/* <img src={base64Image} alt="Base64" style={{ width: '100%', height: '100%' }} /> */}
          {/* <Base64Image base64String={base64Image} /> */}
          <div
            style={{ overflow: 'auto', width: '100%', height: '100%', backgroundColor: 'white' }}
            dangerouslySetInnerHTML={{ __html: base64Image }}
          ></div>
        </CContainer>
        {/* <img
          src={base64Image == undefined ? '/Placeholder_view_vector.svg' : base64Image}
          alt="8Aimage"
          width="100%"
          height="100%"
        /> */}
      </div>
    </>
  )
}

export default VillageForm7_7_12Table
