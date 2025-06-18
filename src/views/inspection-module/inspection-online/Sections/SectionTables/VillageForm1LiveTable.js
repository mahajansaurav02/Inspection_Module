import React, { useCallback, useEffect, useState } from 'react'
import styles from './villageform1a.module.css'
import { useNavigate } from 'react-router-dom'
import URLS from 'src/URLS'
import axios from 'axios'
import reqHeaders from 'src/instance/headers'

import { Toast, errorToast, infoToast, successToast, warningToast } from 'src/views/ui/Toast'
import sha256 from 'crypto-js/sha256'
import hmacSHA512 from 'crypto-js/hmac-sha512'
import Base64 from 'crypto-js/enc-base64'
// import { AES, enc, CryptoJS } from 'crypto-js'
import CryptoJS from 'crypto-js'
import { Decrypt, Encrypt } from './crypto'
// encryption.js

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CModal,
  CModalHeader,
} from '@coreui/react'

var prevTotalArea = 0.0,
  prevAssessment = 0,
  prevNetCultiArea = 0,
  prevTotalPotKharabArea = 0
const districtCode = localStorage.getItem('districtCode')
const talukaCode = localStorage.getItem('talukaCode')
const codeVillage = JSON.parse(localStorage.getItem('villageData'))[0].cCode
const districtName = localStorage.getItem('districtName')
const talukaName = localStorage.getItem('talukaName')
const villageName = JSON.parse(localStorage.getItem('villageData'))[0].villageName

const VillageForm1LiveTable = () => {
  const [tableData, setTableData] = useState()
  const [isNirank, setIsNirank] = useState(false)
  const [textForVillage, setTextForVillage] = useState()
  const [village, setVillage] = useState([])

  const [textVillage, setTextVillage] = useState('')

  const [totalArea, setTotalArea] = useState(0)
  const [netCultiArea, setNetCultiArea] = useState(0)
  const [netAssessment, setNetAssessment] = useState(0)
  const [potkharabaType, setPotkharabaType] = useState('')
  const [revenueYear, setRevenueYear] = useState()
  const [headerData, setHeaderData] = useState()
  const [riceRate, setRiceRate] = useState()
  const [settlementYear, setSettlementYear] = useState()
  const [settlementExpiry, setSettlementExpiry] = useState()
  const [gardenRate, setGardenRate] = useState()
  const [surveyGroup, setSurveyGroup] = useState()
  const [dateInstallment, setDateInstallment] = useState()
  const [dryRate, setDryRate] = useState()
  const [warkasRate, setWarkasRate] = useState()
  const [loading, setLoading] = useState(false)
  const [villageSite, setVillageSite] = useState(0)
  const [river, setRiver] = useState()
  const [roadAndPath, setRoadAndPath] = useState()
  const [prevRoadsAndPath, setPrevRoadsAndPath] = useState(0)
  const [nalas, setNalas] = useState()
  const [iv12, setIV] = useState()
  const [visible, setVisible] = useState(false)
  const [satbaraHtml, setSatbaraHtml] = useState()

  const navigate = useNavigate()

  //const CryptoJS = require('node:crypto')
  // const secretKey = 'aelwfhlaef'
  // const secretIV = 'aifjaoeifjo'
  // const encMethod = 'aes-256-cbc'
  const navigateToDataentryPage = () => {
    navigate('/inspection-module/inspection-online/Sections/SectionTables/satbara.js')
  }
  const showsatbara1 = async (surveyNo) => {}

  const showsatbara = async (surveyNo) => {
    // alert('survey number:  ' + surveyNo)
    console.log('survey number:  ' + surveyNo)
    const token = 'FCk6WvUiq70RKTpnwf0ASuMWl2ki6rXdhCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'

    var htmlAPI = 'https://api.mahabhumi.gov.in/api/eferfar/getSatbaraHTML'
    var lgd_code = '535327'
    var pin = '65'
    var pin1 = '1'
    // var pin2 = TextDecoder('अ')
    //var pin2 = encodeURIComponent('अ')
    var pin2 = 'अ'
    var pin3 = ''
    var pin4 = ''
    var pin5 = ''
    var pin6 = ''
    var pin7 = ''
    var pin8 = ''

    console.log('survey number2:  ' + pin2)

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
          lgd_code: '535327',
          pin: '65',
          pin1: '1',
          pin2: 'अ',
          pin3: '',
          pin4: '',
          pin5: '',
          pin6: '',
          pin7: '',
          pin8: '',
        },
      })
      .then((res) => {
        var key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy'
        var iv = 'C3dL6YnHWwRPS1Jy'
        var encryptedData = res.data.data
        // var decryptData11 = decryptData(ciphertext, key, iv)

        const base64String = atob(encryptedData)
        const base64Image = decryptDataImage(base64String, key, iv)

        const clearTest = JSON.parse(base64Image)
        const sendtoShowEightAView = clearTest

        navigate(
          '/src/views/inspection-module/inspection-online/Sections/SectionTables/ShowSatbara.js',
          // { state: { satBaraHtml: cleanedStr } },
          { state: { satBaraHtml: sendtoShowEightAView } },
        )
      })
      .catch((err) => {
        //console.error(err)

        errorToast()
        //err.status == '500' ? err.message : 'Unauthorized access (Check required parameters)',
      })
  }

  // function decryptData11(encryptedData, key, iv) {

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

  const getHeaderData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form1/getForm1HeaderDetails?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setRiceRate(res.data[0].rice_rate)
        setSettlementYear(res.data[0].settlementYear)
        setSettlementExpiry(res.data[0].settlementExp)
        setGardenRate(res.data[0].garden_rate)
        setSurveyGroup(res.data[0].survey_group)
        setDateInstallment(res.data[0].date_inst)
        setDryRate(res.data[0].dry_rate)
        setWarkasRate(res.data[0].warkas_rate)
      })
    // setLoading(false)
  }

  const getFooterData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form1/getForm1ReportFooter?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setVillageSite(res.data[0].villageSite)
        setRiver(res.data[0].riversNalas)
        setNalas(res.data[0].nalas)
        setRoadAndPath(res.data[0].roadsAndPath)
        setPrevRoadsAndPath(
          parseFloat(res.data[0].riversNalas) +
            parseFloat(res.data[0].nalas) +
            parseFloat(res.data[0].roadsAndPath),
        )
      })
    // setLoading(false)
  }

  useEffect(() => {
    prevTotalArea = 0
    prevAssessment = 0
    prevNetCultiArea = 0
    prevTotalPotKharabArea = 0
  }, [])

  const gettableData1A = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form1/getForm1Report?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((r) => {
        let potkharabaTypeInt
        let cultivableAreaInt
        let naAgriAssesment

        setTableData(
          r.data.form1Data.map((r) => ({
            id: r.id,
            surveyHissaNo:
              r.hissaNo == null || r.hissaNo.trim() == '' ? r.pin : r.pin + '/' + r.hissaNo,
            designation: r.designation,
            totalAreaH: r.totalAreaH,
            tenureName: r.tenureName,
            netCultiAreaH: r.netCultiAreaH,
            naAssessment: naAgriAssesment,
            assessment: r.assessment,
            publicRightsOfWayAndEasements: r.publicRightsOfWayAndEasements,
            particularsOfAlteration: r.particularsOfAlteration,
            orderSanctioningChanges: r.orderNo,
            orderDate: r.orderDate,
            remarks: r.remarks,
            potkharabaType: getPotkharabaType(
              r.potkharabaAH ? r.potkharabaAH : '0.0000',
              r.potkharabaBH ? r.potkharabaBH : '0.0000',
            ),
            cultivableAreaInt: getPotkharabaTypeAr(
              // r.potkharabaAH === '0.0000' ? '0' :
              r.potkharabaAH,
              // r.potkharabaBH === '0.0000' ? '0' :
              r.potkharabaBH,
            ),
            naAgriAssesment:
              r.naAssessment != null || r.naAssessment > 0 ? r.naAssessment : r.assessment,
            allTotal: getTotalAreaAssess(r.totalAreaH, r.netCultiAreaH, r.assessment),
          })),
          //message.success('Records Fetched!!'),
        )
        successToast('Records Fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }

  var totalAreaAddition = prevTotalArea.toFixed(4).substring(prevTotalArea.length - 2)
  var totalAreaOfAll = totalAreaAddition
    .substring(0, totalAreaAddition.length - 2)
    .concat('.')
    .concat(totalAreaAddition.substring(totalAreaAddition.length - 2))

  var totalAreaPathRoad = prevRoadsAndPath.toFixed(4).substring(prevRoadsAndPath.length - 2)
  var totalAreaOfPathRoads = totalAreaPathRoad
    .substring(0, totalAreaPathRoad.length - 2)
    .concat('.')
    .concat(totalAreaPathRoad.substring(totalAreaPathRoad.length - 2))

  var totalPotkharabAddition = prevTotalPotKharabArea
    .toFixed(4)
    .substring(prevTotalPotKharabArea.length - 2)
  var totalPotkharabOfAll = totalPotkharabAddition
    .substring(0, totalPotkharabAddition.length - 2)
    .concat('.')
    .concat(totalPotkharabAddition.substring(totalPotkharabAddition.length - 2))

  var totalCultiAreaAddition = prevNetCultiArea.toFixed(4).substring(prevNetCultiArea.length - 2)
  var totalNetCultiAreaOfAll = totalCultiAreaAddition
    .substring(0, totalCultiAreaAddition.length - 2)
    .concat('.')
    .concat(totalCultiAreaAddition.substring(totalCultiAreaAddition.length - 2))

  var additionOfTotalArea = additionHoilKaAtaTari(totalAreaOfAll, totalAreaOfPathRoads)
  var additionOfTotalPotkharaba = additionOfTotalPotkharaba1(
    totalPotkharabOfAll,
    totalAreaOfPathRoads,
  )
  var finalAdditionForReport = additionHoilKaAtaTari(
    additionHoilKaAtaTari(totalAreaOfAll, totalAreaOfPathRoads),
    villageSite,
  )
  var finalAdditionOfTotalPotKharaba = additionOfTotalPotkharaba1(
    additionOfTotalPotkharaba1(totalPotkharabOfAll, totalAreaOfPathRoads),
    villageSite,
  )

  function additionHoilKaAtaTari(param1, param2) {
    // console.log('param1', param1);
    // console.log('param2', param2);
    let param3 = parseFloat(param1) + parseFloat(param2)
    var param4 = param3.toFixed(4).substring(param3.length - 2)
    var param5 = param4
      .substring(0, param4.length - 2)
      .concat('.')
      .concat(param4.substring(param4.length - 2))
    return param5
  }

  function additionOfTotalPotkharaba1(param1, param2) {
    let param3 = parseFloat(param1) + parseFloat(param2)
    var param4 = param3.toFixed(4).substring(param3.length - 2)
    var param5 = param4
      .substring(0, param4.length - 2)
      .concat('.')
      .concat(param4.substring(param4.length - 2))
    return param5
  }

  var totalCultiAreaAddition = prevNetCultiArea.toFixed(4).substring(prevNetCultiArea.length - 2)
  var totalNetCultiAreaOfAll = totalCultiAreaAddition
    .substring(0, totalCultiAreaAddition.length - 2)
    .concat('.')
    .concat(totalCultiAreaAddition.substring(totalCultiAreaAddition.length - 2))

  function getTotalAreaAssess(totalAreaH, netCultiAreaH, assessment) {
    prevTotalArea += parseFloat(totalAreaH)
    prevNetCultiArea += parseFloat(netCultiAreaH)

    prevAssessment += parseFloat(assessment)
  }

  function getFirstTotalArea(villageSite, riversNalas, nalas, roadsAndPath) {
    let prevRoadsAndPath =
      parseFloat(villageSite) +
      parseFloat(riversNalas) +
      parseFloat(nalas) +
      parseFloat(roadsAndPath)
    // console.log('roadsAndPath ala ka?', roadsAndPath);
  }

  function getPotkharabaType(ptypeA, ptypeb) {
    if (ptypeb == '0.0000' && ptypeA == '0.0000') {
      return '-'
    } else if (ptypeb == '0.0000') {
      return 'अ'
    } else if (ptypeA == '0.0000') {
      return 'ब'
    } else {
      return 'अ,ब'
    }
  }

  function getPotkharabaTypeAr(ptypeA, ptypeb) {
    prevTotalPotKharabArea += parseFloat(ptypeA) + parseFloat(ptypeb)
    if (ptypeb == '0.0000' && ptypeA == '0.0000') {
      return 0 + ' , ' + 0
    } else if (ptypeb == '0.0000') {
      return ptypeA
    } else if (ptypeA == '0.0000') {
      return ptypeb
    } else {
      return ptypeb + ' , ' + ptypeA
    }
  }

  useEffect(() => {
    gettableData1A()
    getHeaderData()
    getFooterData()
  }, [])
  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red', textAlign: 'center' }}>
                <b>गाव नमुना एक (आकारबंद)( गाव नमुना-७,ई-फेरफार Live डेटा)</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>जमिनींची नोंदवही</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>(आकारबंद जमाबंदी मिस्ल - शेतवारपत्रक )</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="12">
              <h6 style={{ color: 'red' }}>
                <b>
                  गाव- {villageName} &nbsp; तालुका- {talukaName} &nbsp; जिल्हा- {districtName}
                </b>
              </h6>
            </th>
          </tr>
          <tr style={{ textAlign: 'left', backgroundColor: 'white', border: '1px solid black' }}>
            <th colSpan={3}>हेक्टरी प्रमाण दर रु. पै</th>
            <th colSpan={2}></th>

            <th colSpan={3}>जमाबंदी सुरु केल्याचे वर्ष</th>
            <th colSpan={4}> {settlementYear}</th>
          </tr>
          <tr style={{ textAlign: 'left', backgroundColor: 'white', border: '1px solid black' }}>
            <th colSpan={3}>कोरडवाहू</th>
            <th colSpan={2}>{dryRate}</th>

            <th colSpan={3}>जमाबंदी मुदत संपल्याचे वर्ष</th>
            <th colSpan={4}>{settlementExpiry}</th>
          </tr>
          <tr style={{ textAlign: 'left', backgroundColor: 'white', border: '1px solid black' }}>
            <th colSpan={3}>बागायत</th>
            <th colSpan={2}>{gardenRate}</th>

            <th colSpan={3}>सर्वेक्षण गट</th>
            <th colSpan={4}>{surveyGroup}</th>
          </tr>
          <tr style={{ textAlign: 'left', backgroundColor: 'white', border: '1px solid black' }}>
            <th colSpan={3}>भात</th>
            <th colSpan={2}>{riceRate}</th>

            <th colSpan={3}></th>
            <th colSpan={4}></th>
          </tr>
          <tr style={{ textAlign: 'left', backgroundColor: 'white', border: '1px solid black' }}>
            <th colSpan={3}>वरकस व इतर</th>
            <th colSpan={2}> {warkasRate}</th>

            <th colSpan={3}>हप्त्याचा दिनांक</th>
            <th colSpan={4}> {dateInstallment}</th>
          </tr>

          <tr style={{ height: '20px', backgroundColor: 'white', border: '1px solid black' }}>
            <th colSpan={5}></th>
            <th colSpan={7}></th>
          </tr>
          <tr style={{ backgroundColor: 'white', border: '1px solid black' }}>
            <th>भूमापन क्रमांक</th>
            <th>धारणा प्रकार</th>
            <th>एकूण क्षेत्र</th>
            <th colSpan={2}>वजा-लागवड अयोग्य बिनआकारी किंवा लागवडीसाठी अनुपलब्ध</th>
            <th>निव्वळ लागवड योग्य क्षेत्र</th>

            <th>कृषिक आकारणी</th>
            <th>सार्वजनिक मार्गाधिकार आणि सुविधाधिकार</th>
            <th>फेरबदलाचे तपशील</th>
            <th>फेरबदलांना मंजुरी देणारे आदेश</th>
            <th>आदेशाची तारीख</th>
            <th>शेरा</th>
          </tr>
          <tr style={{ backgroundColor: 'white', border: '1px solid black' }}>
            <th></th>
            <th></th>
            <th></th>
            <th>प्रकार</th>
            <th>क्षेत्र</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr style={{ backgroundColor: 'white', border: '1px solid black' }}>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
          </tr>
          <tr style={{ backgroundColor: 'white', border: '1px solid black' }}>
            <th></th>
            <th></th>
            <th>हे.आर.चौमी</th>
            <th></th>
            <th>हे.आर.चौमी</th>
            <th>हे.आर.चौमी</th>
            <th>रु.पैसे</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <>
                <tr>
                  {/* <td>{r.surveyHissaNo}</td> */}
                  <td>
                    <CButton color="link" onClick={() => showsatbara(r.surveyHissaNo)}>
                      {/* <CButton color="link" onClick={navigateToDataentryPage}> */}
                      {r.surveyHissaNo}
                    </CButton>
                  </td>
                  <td>{r.tenureName}</td>
                  <td>
                    {r.totalAreaH
                      .substring(0, r.totalAreaH.length - 2)
                      .concat('.')
                      .concat(r.totalAreaH.substring(r.totalAreaH.length - 2))}
                  </td>
                  <td>{r.potkharabaType}</td>
                  <td>{r.cultivableAreaInt}</td>
                  <td>
                    {r.netCultiAreaH
                      .substring(0, r.netCultiAreaH.length - 2)
                      .concat('.')
                      .concat(r.netCultiAreaH.substring(r.netCultiAreaH.length - 2))}
                  </td>
                  {/* <td>{r.naAssessment}</td> */}
                  <td>{r.assessment}</td>
                  <td>{r.publicRightsOfWayAndEasements}</td>
                  <td>{r.particularsOfAlteration}</td>
                  <td>{r.orderSanctioningChanges}</td>
                  <td>{r.orderDate}</td>
                  <td>{r.remarks}</td>
                </tr>
              </>
            ))}
          <tr colSpan="11">
            <td>
              <b>एकूण</b>
            </td>
            <td>
              <b>गावठाणाबाहेरील</b>
            </td>
            <td>
              <b>{totalAreaOfAll}</b>
            </td>
            <td></td>
            <td>
              <b>{totalPotkharabOfAll}</b>
            </td>
            <td>
              <b>{totalNetCultiAreaOfAll}</b>
            </td>
            <td>
              <b>{prevAssessment.toFixed(2)}</b>
            </td>

            <td colSpan={8}></td>
          </tr>

          <tr style={{ height: '20px' }}>
            <td colSpan={5}></td>
            <td colSpan={7}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>गावठाण </b>
            </td>
            <td>
              <b>{villageSite}</b>
            </td>
            <td>{/*  <b>गावठाण </b> */}</td>
            <td>
              <b>{villageSite}</b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>नद्या </b>
            </td>
            <td>
              <b>{river}</b>
            </td>
            <td>
              <b>नद्या </b>
            </td>
            <td>
              <b>{river}</b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>नाले </b>
            </td>
            <td>
              <b>{nalas}</b>
            </td>
            <td>
              <b>नाले </b>
            </td>
            <td>
              <b>{nalas}</b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>रस्ते</b>
            </td>
            <td>
              <b>{roadAndPath}</b>
            </td>
            <td>
              <b>रस्ते</b>
            </td>
            <td>
              <b>{roadAndPath}</b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>भूमापन क्रमांक खेरीज एकूण क्षेत्र</b>
            </td>
            <td>
              <b>{totalAreaOfPathRoads}</b>
            </td>
            <td></td>
            <td>
              <b>{totalAreaOfPathRoads}</b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>गावठाणाबाहेरील एकूण </b>
            </td>
            <td>
              <b>{additionOfTotalArea}</b>
            </td>
            <td></td>
            <td>
              <b>{additionOfTotalPotkharaba}</b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>गावठाण एकूण </b>
            </td>
            <td>
              <b>{villageSite}</b>
            </td>
            <td></td>
            <td>
              <b>{villageSite}</b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td></td>
            <td>
              <b>गावाची एकूण बेरीज </b>
            </td>
            <td>
              <b>{finalAdditionForReport}</b>
            </td>
            <td></td>
            <td>
              <b>{finalAdditionOfTotalPotKharaba}</b>
            </td>
            <td>
              <b>{totalNetCultiAreaOfAll}</b>
            </td>
            <td>
              <b>{prevAssessment.toFixed(2)}</b>
            </td>
            <td colSpan={8}></td>
          </tr>
        </tbody>
      </table>

      {/* <img
        // src={base64Image == undefined ? '/Placeholder_view_vector.svg' : base64Image}
        src={satbaraHtml}
        alt="8Aimage"
        width="100%"
        height="100%"
      /> */}
    </>
  )
}

export default VillageForm1LiveTable
