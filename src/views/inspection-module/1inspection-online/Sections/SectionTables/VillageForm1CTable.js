import React, { useEffect, useState } from 'react'
import styles from './villageform1a.module.css'
import URLS from 'src/URLS'
import axios from 'axios'
import reqHeaders from 'src/instance/headers'
import { Toast, errorToast, successToast } from 'src/views/ui/Toast'

const districtCode = localStorage.getItem('districtCode')
const talukaCode = localStorage.getItem('talukaCode')
const codeVillage = JSON.parse(localStorage.getItem('villageData'))[0].cCode
const districtName = localStorage.getItem('districtName')
const talukaName = localStorage.getItem('talukaName')
const villageName = JSON.parse(localStorage.getItem('villageData'))[0].villageName

let prevTotalArea = 0
let prevAssessment = 0
let prevIrrigatedArea = 0
let prevUnIrrigatedArea = 0

const VillageForm1CTable = () => {
  const [tableData, setTableData] = useState()

  var totalAreaAddition = prevTotalArea.toFixed(4).substring(prevTotalArea.length - 2)
  var totalAreaOfAll = totalAreaAddition
    .substring(0, totalAreaAddition.length - 2)
    .concat('.')
    .concat(totalAreaAddition.substring(totalAreaAddition.length - 2))

  var totalIrriagtedAreaAddition = prevIrrigatedArea
    .toFixed(4)
    .substring(prevIrrigatedArea.length - 2)
  var totalIrrigatedAreaOfAll = totalIrriagtedAreaAddition
    .substring(0, totalIrriagtedAreaAddition.length - 2)
    .concat('.')
    .concat(totalIrriagtedAreaAddition.substring(totalIrriagtedAreaAddition.length - 2))

  var totalUnIrriagtedAreaAddition = prevUnIrrigatedArea
    .toFixed(4)
    .substring(prevUnIrrigatedArea.length - 2)
  var totalUnIrrigatedAreaOfAll = totalUnIrriagtedAreaAddition
    .substring(0, totalUnIrriagtedAreaAddition.length - 2)
    .concat('.')
    .concat(totalUnIrriagtedAreaAddition.substring(totalUnIrriagtedAreaAddition.length - 2))

  const getTableData1D = async () => {
    prevTotalArea = 0
    prevAssessment = 0
    prevIrrigatedArea = 0
    prevUnIrrigatedArea = 0

    axios
      .get(
        `${URLS.BaseURL}/form1c/getForm1CReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(res.data.form1CData)

        successToast('Data Successfully fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }
  function getTotalOfAll(totalAreaH, assessment, irrigatedArea, unirrigatedArea) {
    prevTotalArea += parseFloat(totalAreaH) / 2
    prevAssessment += parseFloat(assessment) / 2
    prevIrrigatedArea += parseFloat(irrigatedArea) / 2
    prevUnIrrigatedArea += parseFloat(unirrigatedArea) / 2
  }

  useEffect(() => {
    getTableData1D()
  }, [])
  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="14">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना १क</b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="14">
              <h6 style={{ color: 'red' }}>
                <b>
                  गाव- {villageName} &nbsp; तालुका- {talukaName} &nbsp; जिल्हा- {districtName}
                </b>
              </h6>
            </th>
          </tr>

          <tr>
            <th colSpan={1}>
              <b>भूमापन क्र</b>
            </th>
            <th colSpan={1}>
              <b>भोगवटादाराचे नाव</b>
            </th>
            <th colSpan={1}>
              <b>क्षेत्र (हे.आर.चौमी)</b>
            </th>
            <th colSpan={1}>
              <b>आकारणी (रु.पैसे)</b>
            </th>
            <th>
              <b>जमीन कोणत्या शर्तीवर प्रदान करण्‍यात आली आहे</b>
            </th>
            <th colSpan={1}>
              <b>जमीन प्रदानाचा आदेश क्रमांक व दिनांक</b>
            </th>
            <th colSpan={1}>
              <b>जमीन ज्‍या कारणास्‍तव निहीत केली आहे त्‍या उपयोगाचे प्रयोजन</b>
            </th>
            <th colSpan={1}>
              <b>निहित केलेल्‍या प्राधिकरणाचे नाव उदा. नगरपालिका/ ग्रामपंचायत इ.</b>
            </th>
            <th colSpan={1}>
              <b>जमीन हस्‍तांतरणास परवानगी देण्‍यास सक्षम प्राधिकारी</b>
            </th>
            <th colSpan={1}>
              <b>शासनास भरावी लागणारी अनार्जित रक्‍कम /नजराणा/ कब्‍जेहक्‍काच्या रक्‍कमेचा तपशिल</b>
            </th>
            <th colSpan={1}>
              <b>
                सक्षम प्राधिकार्‍याचे विक्री परवानगी/ शर्तभंग प्रकरणी आदेश पारीत झाले असल्‍यास
                त्‍याचा क्रमांक व दिनांक
              </b>
            </th>
            <th colSpan={1}>
              <b>तपासणी अधिकारी व तपासणीचा दिनांक</b>
            </th>
            <th colSpan={1}>
              <b>शेरा</b>
            </th>
          </tr>

          <tr colSpan="13">
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
            <th>13</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(१)-मुंबई कुळ्वाहिवाट व शेत जमीन अधिनियम १९४८ चे कलम ३२ ग अन्वये विक्री झालेल्या
              जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '1') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}

          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(२)-वेगवेगळ्या इनाम व वतन जमिनी (देवस्तान जमिनी वगळून)
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '2') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(४)-महाराष्ट्र जमिन महसूल अधिनियम, १९६६ अंतर्गत विविध योजने अंतर्गत प्रदान/ अतिक्रमण
              नियमानुकूल केलेल्या जमिनी (भूमिहीन, शेतमजुर, स्वातंत्र्य सैनिक इ.)
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '3') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(५)-महाराष्ट्र जमिन महसूल अधिनियम, १९६६ अंतर्गत विविध योजने अंतर्गत प्रदान/ आतिक्रमण
              नियमांनुकूल केलेल्या जमिनी (गृह निर्माण संस्था, औद्यागिक आस्थापना, शैक्षणिक संस्था,
              विशेष वसाहत प्रकल्प इ.)
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '4') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(५)-महाराष्ट्र शेत जमिन कमाल धारणा अधिनियम, १९६१ अंतर्गत वाटप केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '5') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(६)-महानगरपालिका, नगरपालिका व विविध प्राधिकारण यांच्या विकास आराखड्यात समाविष्ट
              असलेल्या जमिनी अथवा ग्रामपंचायतीकडे गुरचरण अथवा इतर प्रयोजनासाठी वर्ग केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '6') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(७)-देवस्थान इनाम जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '7') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(८)-आदिवासी खातेदारांचा जमिनी, महाराष्ट्र जमिनी महसूल अधिनियम, १९६६ च्या कलम ३६ अ
              प्रमाणे
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '8') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(९)-महाराष्ट्र पुनर्वसन अधिनियम, १९९९ च्या कलम १६ अन्वये प्रदान केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '9') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(१०)-भाडेपट्याने दिलेल्या शासकीय जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '10') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              1क(११)-भूदान व ग्रामदान अंतर्गत दिलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '11') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(१२)-महाराष्ट्र खाजगी वने(संपादन) अधिनियम, १९६१ अन्वये चौकशीसाठी प्रलंबित असलेल्या
              जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '12') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              1क(१३)-भूमिधारी हक्कान्वये
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '13') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}

          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(१४)-महाराष्ट्र शेतजमीन (जमिन धरणेची कमाल मर्यादा) अधिनियम, १९६१ अंतर्गत कमाल
              मर्यादेपेक्षा अधिक धारण करण्यास सूट दिलेल्या जमिनी
            </td>
          </tr>

          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '14') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}

          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(१५)-भूसंपादन अधिनियमान्वये संपादित केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '15') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
              // return <>निरंक</>
            })}
          <tr>
            <td colSpan="14" style={{ color: 'red', textAlign: 'left' }}>
              १क(१६)-वक्फ जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r) => {
              if (r.clause == '16') {
                return (
                  <>
                    <tr>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.khataOwnerName}</td>
                      <td>{r.totalAreaH}</td>
                      <td>{r.assessment}</td>
                      <td>{r.termsOfGrant}</td>
                      <td>{r.aadeshOnDate}</td>
                      <td>{r.purposeOfLandIntended}</td>
                      <td>{r.nameOfVillagePanchayat}</td>
                      <td>{r.authorityCompetentToPermitTransferOfLand}</td>
                      <td>{r.detailsOfUnclaimedAmount}</td>
                      <td>{r.breachOfCondition}</td>
                      <td>{r.inspectingOfficer}</td>
                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm1CTable
