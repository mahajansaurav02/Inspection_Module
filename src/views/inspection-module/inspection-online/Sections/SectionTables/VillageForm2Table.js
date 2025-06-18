import React, { useEffect, useState } from 'react'
import styles from './villageform1a.module.css'
import URLS from 'src/URLS'
import axios from 'axios'
import reqHeaders from 'src/instance/headers'
import { Toast, errorToast, successToast } from 'src/views/ui/Toast'
import moment from 'moment'

const districtCode = localStorage.getItem('districtCode')
const talukaCode = localStorage.getItem('talukaCode')
const codeVillage = JSON.parse(localStorage.getItem('villageData'))[0].cCode
const districtName = localStorage.getItem('districtName')
const talukaName = localStorage.getItem('talukaName')
const villageName = JSON.parse(localStorage.getItem('villageData'))[0].villageName

let prevTotalArea = 0
let prevTotalAreaB = 0
let prevAssessmentForA = 0
let prevAssessmentForB = 0
const VillageForm2Table = () => {
  const [tableData, setTableData] = useState()

  var revenueYearFromStorage = JSON.parse(localStorage.getItem('revenueYear'))

  useEffect(() => {
    prevTotalArea = 0
    prevTotalAreaB = 0
    prevAssessmentForA = 0
    prevAssessmentForB = 0
  }, [])

  const getTableData1B = async () => {
    prevTotalArea = 0
    prevTotalAreaB = 0
    prevAssessmentForA = 0
    prevAssessmentForB = 0

    axios
      .get(
        `${URLS.BaseURL}/form2/getForm2Report?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        console.log(res.data?.form2Data, 'form2Data')
        setTableData(
          res.data.form2Data,
          res.data.form2Data.map((r) => ({
            allTotal: getTotalAreaAssess(r.part, r.naAreaH, r.naAssessment),
          })),
        )
        // successToast('Data Successfully fetched')
      })
      .catch((err) => {
        console.error(err)
        errorToast(err.status == 'FAILURE' ? err.message : 'Data Not Found')
      })
  }

  var totalAreaAddition = prevTotalArea.toFixed(4).substring(prevTotalArea.length - 2)
  var totalAreaOfAll = totalAreaAddition
    .substring(0, totalAreaAddition.length - 2)
    .concat('.')
    .concat(totalAreaAddition.substring(totalAreaAddition.length - 2))

  var totalAreaAdditionB = prevTotalAreaB.toFixed(4).substring(prevTotalAreaB.length - 2)
  var totalAreaOfAllForB = totalAreaAdditionB
    .substring(0, totalAreaAdditionB.length - 2)
    .concat('.')
    .concat(totalAreaAdditionB.substring(totalAreaAdditionB.length - 2))

  function totalAreaOfABFunction(param1, param2) {
    let param3 = parseFloat(param1) + parseFloat(param2)
    var param4 = param3.toFixed(4).substring(param3.length - 2)
    var param5 = param4
      .substring(0, param4.length - 2)
      .concat('.')
      .concat(param4.substring(param4.length - 2))
    return param5
  }

  function totalAssessmentOfABFunction(param1, param2) {
    let param3 = parseFloat(param1) + parseFloat(param2)
    return param3
  }

  function getTotalAreaAssess(part, naAreaH, naAssessment) {
    // console.log('data ala ka??', naAreaH);
    if (part === 'form2.table.partA') {
      prevTotalArea += parseFloat(naAreaH)
      prevAssessmentForA += parseFloat(naAssessment)
    } else if (part === 'form2.table.partB') {
      prevTotalAreaB += parseFloat(naAreaH)
      prevAssessmentForB += parseFloat(naAssessment)
    }
  }

  var totalAssessmentForAandB = totalAssessmentOfABFunction(
    prevAssessmentForA,
    prevAssessmentForB,
  ).toFixed(2)

  var totalAreaOfAB = totalAreaOfABFunction(totalAreaOfAll, totalAreaOfAllForB)

  useEffect(() => {
    getTableData1B()
  }, [])

  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="14">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना दोन</b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="14">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना दोन-अकृषिक महसुलाची नोंदवही</b>
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
            <th colSpan="14">
              <h6 style={{ color: 'red' }}>
                <b>
                  महाराष्ट्र जमीन महसुल अधिनियम १९६६ चे कलम ११०/१११ अन्वये ज्या वर्गात गाव दाखल केला
                  असेत तो वर्ग
                </b>
              </h6>
            </th>
          </tr>
          <tr colSpan="15">
            <th>
              <b>अ.क्र</b>
            </th>
            <th>
              <b>जमिनीचे वर्णन</b>
            </th>
            <th>
              <b>क्षेत्र (आर.चौमी)</b>
            </th>
            <th>
              <b>अकृषिक परवानगीचे / भूप्रदानाचे स्वरुप व अटी</b>
            </th>
            <th>
              <b></b>भोगवटा हक्काची किंमत असल्यास (रु.पैसे)
            </th>
            <th>
              <b>वार्षिक महसूल</b>
            </th>
            <th colSpan={2}>
              <b>मुदत</b>
            </th>
            <th>
              <b>तालुका नमुना क्र. दोनमधील नोंद क्र.</b>
            </th>
            <th>
              <b>पहिल्या भोगवटादाराचे नाव</b>
            </th>
            <th>
              <b>प्राधिकाराचे नाव</b>
            </th>
            <th>
              <b>प्राधिकार आदेश क्रमांक</b>
            </th>
            <th>
              <b>प्राधिकार दिनांक</b>
            </th>
            <th>
              <b>शेरा</b>
            </th>
          </tr>
          <tr>
            <th colSpan={6}></th>
            <th colSpan={1} rowSpan={1}>
              पासून
            </th>
            <th colSpan={1} rowSpan={1}>
              पर्यंत
            </th>
            <th colSpan={6}></th>
          </tr>
          <tr colSpan="16">
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
            <th>14</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              भाग (अ) गावठाणातील --
            </td>
          </tr>
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (एक) निवासविषयक प्रयोजनांकरिता वापर केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partA' && r.purposeOfUse == 'form2.table.partA.1') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '----' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '-----' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (दोन) औदयोगिक प्रयोजनांकरिता वापर केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partA' && r.purposeOfUse == 'form2.table.partA.2') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '-----' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '---' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}

          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (तीन) वाणिज्यिक प्रयोजनांकरिता वापर केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partA' && r.purposeOfUse == 'form2.table.partA.3') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      {/* <td> */}
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '------' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '--------------' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}

          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (चार)महसूल माफ प्रदानांव्यतिरिक्त,कमी केलेल्या किंवा वाढवलेल्या दराने इतर कोणत्याही
              प्रयोजनांकरिता
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partA' && r.purposeOfUse == 'form2.table.partA.4') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '-----' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? 'tableData' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (पाच)महसूल माफ प्रदाने
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partA' && r.purposeOfUse == 'form2.table.partA.5') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '--------' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '-------' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          {/* गावठाणाबाहेरील गट- ब  एन्ट्री */}
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              भाग (ब) गावठाणा बाहेरील --
            </td>
          </tr>
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (एक) निवासविषयक प्रयोजनांकरिता वापर केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partB' && r.purposeOfUse == 'form2.table.partA.1') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '--------' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '---------' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (दोन) औदयोगिक प्रयोजनांकरिता वापर केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partB' && r.purposeOfUse == 'form2.table.partA.2') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '-------' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '--------' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (तीन) वाणिज्यिक प्रयोजनांकरिता वापर केलेल्या जमिनी
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partB' && r.purposeOfUse == 'form2.table.partA.3') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '--------' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>

                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '--------------' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (चार)महसूल माफ प्रदानांव्यतिरिक्त,कमी केलेल्या किंवा वाढवलेल्या दराने इतर कोणत्याही
              प्रयोजनांकरिता
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partB' && r.purposeOfUse == 'form2.table.partA.4') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '-------' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '------' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          <tr>
            <td colSpan="15" style={{ color: 'red', textAlign: 'left' }}>
              (पाच)महसूल माफ प्रदाने
            </td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => {
              if (r.part == 'form2.table.partB' && r.purposeOfUse == 'form2.table.partA.5') {
                return (
                  <>
                    <tr>
                      <td>{(r.srNo = i + 1)}</td>
                      <td>
                        {r.hissaNo == null || r.hissaNo.trim() == ''
                          ? r.pin
                          : r.pin + '/' + r.hissaNo}
                      </td>
                      <td>{r.naAreaH}</td>
                      <td>
                        {/* {r.purposeOfUse != '' ? <FormattedMessage id={r.purposeOfUse} /> : ''} */}
                        {r.purposeOfUse != '' ? '------' : ''}
                      </td>
                      <td>{r.occupanyPrice}</td>
                      <td>{r.naAssessment}</td>
                      <td>
                        {r.periodFrom != null
                          ? moment(r.periodFrom, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>
                      <td>
                        {r.periodTo != null
                          ? moment(r.periodTo, 'YYYY-MM-DD').format('YYYY-MM-DD')
                          : ''}
                      </td>

                      <td>{r.entryNumberInTalukaForm2}</td>

                      <td>{r.nameOfFirstOccupant}</td>
                      {/* <td>{r.authority != '' ? <FormattedMessage id={r.authority} /> : ''}</td> */}
                      <td>{r.authority != '' ? '-------' : ''}</td>
                      <td>{r.authorityOrderNo}</td>
                      <td>{r.authorityDate}</td>

                      <td>{r.remarks}</td>
                    </tr>
                  </>
                )
              }
            })}
          <tr>
            <td colSpan="9"></td>
            <td colSpan="6" style={{ textAlign: 'left' }}>
              <center>
                <strong>
                  वार्षिक गोषवारा वर्ष :-
                  {revenueYearFromStorage && revenueYearFromStorage.map((r, i) => r.revenueYear)}
                </strong>
              </center>
            </td>
          </tr>

          <tr>
            <td colSpan="9"></td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              <strong> भाग</strong>
            </td>
            <td colSpan="1" style={{ textAlign: 'left' }}>
              <strong> क्षेत्र (आर.चौमी)</strong>
            </td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              <strong> महसूल (रु.पैसे)</strong>
            </td>
          </tr>
          <tr>
            <td colSpan="9"></td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              <strong> (अ)</strong>
            </td>
            <td colSpan="1" style={{ textAlign: 'left' }}>
              <td>
                {totalAreaOfAll}
                {/* {console.log('this.props.totalArea', this.props.totalAreaA)} */}
              </td>
            </td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              {prevAssessmentForA.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td colSpan="9"></td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              <strong> (ब)</strong>
            </td>
            <td colSpan="1" style={{ textAlign: 'left' }}>
              {totalAreaOfAllForB}
            </td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              {prevAssessmentForB.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td colSpan="9"></td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              <strong> एकूण</strong>
            </td>
            <td colSpan="1" style={{ textAlign: 'left' }}>
              {totalAreaOfAB}
            </td>
            <td colSpan="2" style={{ textAlign: 'left' }}>
              {totalAssessmentForAandB}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default VillageForm2Table
