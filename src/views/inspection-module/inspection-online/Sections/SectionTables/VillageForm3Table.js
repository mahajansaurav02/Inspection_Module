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

let prevCultiArea = 0
let prevAssessment = 0
let prevPotKharabArea = 0
let prevTotalArea = 0
let prevNaArea = 0
let prevNaAssessment = 0
let prevJudiSalami = 0
let prevRate = 0
let prevEchAssessment = 0
let prevTotal = 0
let prevNetPending = 0

const VillageForm3Table = () => {
  const [tableData, setTableData] = useState()

  useEffect(() => {
    prevCultiArea = 0
    prevAssessment = 0
    prevPotKharabArea = 0
    prevTotalArea = 0
    prevNaArea = 0
    prevNaAssessment = 0
    prevJudiSalami = 0
    prevRate = 0
    prevEchAssessment = 0
    prevTotal = 0
    prevNetPending = 0
  }, [])

  const getTableData1B = async () => {
    prevCultiArea = 0
    prevAssessment = 0
    prevPotKharabArea = 0
    prevTotalArea = 0
    prevNaArea = 0
    prevNaAssessment = 0
    prevJudiSalami = 0
    prevRate = 0
    prevEchAssessment = 0
    prevTotal = 0
    prevNetPending = 0

    axios
      .get(
        `${URLS.BaseURL}/form3/getForm3Report?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res?.data?.form3Data?.map((r) => ({
            id: r.id,
            surveyNumber:
              r.hissaNo == null || r.hissaNo.trim() == '' ? r.pin : r.pin + '/' + r.hissaNo,
            hissaNo: r.hissaNo,
            classes: r.classes,
            kindAndHowLongContinuable: r.kindAndHowLongContinuable,
            runningNoEachClass: r.runningNoEachClass,
            noInRegisterOfLands: r.noInRegisterOfLands,
            sanadNo: r.sanadNo,
            hissaNo: r.hissaNo,
            netCultiAreaH: r.netCultiAreaH,
            assessment: r.assessment,
            areaUnderNaUse: r.areaUnderNaUse,
            remarks: r.remarks,
            potKharabArea: r.potKharabArea,
            totalArea: r.totalArea,
            naAreaH: r.naAreaH,
            naAssessment: r.naAssessment,
            juniSalami: r.juniSalami,
            rate: r.rate,
            echAssessment: r.echAssessment,
            netPending: r.netPending,
            total: r.total,
            allTotal: getTotalAreaAssess(
              r.netCultiAreaH,
              r.potKharabArea,
              r.totalArea,
              r.assessment,
              r.naAreaH,
              r.naAssessment,
              r.juniSalami,
              r.rate,
              r.echAssessment,
              r.total,
              r.netPending,
            ),
          })),
        )

        // successToast('Data Successfully fetched')
      })
      .catch((err) => {
        // console.error(err)
        errorToast(err.status == 'FAILURE' ? err.message : 'Data Not Found')
      })
  }

  var totalNetCultiAreaAddition = prevCultiArea.toFixed(4).substring(prevCultiArea.length - 2)
  var totalNetCultiAreaOfAll = totalNetCultiAreaAddition
    .substring(0, totalNetCultiAreaAddition.length - 2)
    .concat('.')
    .concat(totalNetCultiAreaAddition.substring(totalNetCultiAreaAddition.length - 2))

  var totalNetPotkharabaAreaAddition = prevPotKharabArea
    .toFixed(4)
    .substring(prevPotKharabArea.length - 2)
  var totalNetPotkharabaAreaOfAll = totalNetPotkharabaAreaAddition
    .substring(0, totalNetPotkharabaAreaAddition.length - 2)
    .concat('.')
    .concat(totalNetPotkharabaAreaAddition.substring(totalNetPotkharabaAreaAddition.length - 2))

  var totalAreaAddition = prevTotalArea.toFixed(4).substring(prevTotalArea.length - 2)
  var totalAreaOfAll = totalAreaAddition
    .substring(0, totalAreaAddition.length - 2)
    .concat('.')
    .concat(totalAreaAddition.substring(totalAreaAddition.length - 2))

  var totalNaAreaAddition = prevNaArea.toFixed(4).substring(prevNaArea.length - 2)
  var totalNaAreaOfAll = totalNaAreaAddition
    .substring(0, totalNaAreaAddition.length - 2)
    .concat('.')
    .concat(totalNaAreaAddition.substring(totalNaAreaAddition.length - 2))

  function getTotalAreaAssess(
    netCultiAreaH,
    potKharabArea,
    totalArea,
    assessment,
    naAreaH,
    naAssessment,
    juniSalami,
    rate,
    echAssessment,
    total,
    netPending,
  ) {
    prevCultiArea += parseFloat(netCultiAreaH)
    prevPotKharabArea += parseFloat(potKharabArea)
    prevTotalArea += parseFloat(totalArea)
    prevAssessment += parseFloat(assessment)
    prevNaArea += parseFloat(naAreaH)
    prevNaAssessment += parseFloat(naAssessment)
    prevJudiSalami += parseFloat(juniSalami == '' || juniSalami === null ? 0 : juniSalami)
    prevRate += parseFloat(rate == '' || rate === null ? 0 : rate)
    prevEchAssessment += parseFloat(
      echAssessment == '' || echAssessment === null ? 0 : echAssessment,
    )
    prevTotal += parseFloat(total == '' || total === null ? 0 : total)
    prevNetPending += parseFloat(netPending == '' || netPending === null ? 0 : netPending)
  }

  useEffect(() => {
    getTableData1B()
  }, [])

  var netCultivableArea = totalNetCultiAreaOfAll
  var totalArea = totalAreaOfAll
  var netAssessment = prevAssessment.toFixed(2)
  var netPotkharab = totalNetPotkharabaAreaOfAll
  var netNaArea = totalNaAreaOfAll
  var netNaAssessment = prevNaAssessment.toFixed(2)
  var netJudiSalami = prevJudiSalami.toFixed(2)
  var netRate = prevRate.toFixed(2)
  var netEchAssessment = prevEchAssessment.toFixed(2)
  var netTotal = prevTotal.toFixed(2)
  var netPending = prevNetPending.toFixed(2)

  return (
    <>
      <Toast position="top-center" autoClose={2500} />

      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="18">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना तीन</b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="18">
              <h5 style={{ color: 'red' }}>
                <b>इनाम पत्रक</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="18">
              <h6 style={{ color: 'red' }}>
                <b>
                  गाव- {villageName} &nbsp; तालुका- {talukaName} &nbsp; जिल्हा- {districtName}
                </b>
              </h6>
            </th>
          </tr>
          <tr>
            <th rowSpan={3}>
              <b>इनाम वर्ग</b>
            </th>
            <th rowSpan={3}>
              <b>प्रकार आणि किती काळ चालू रहावयाची</b>
            </th>
            {/* <th colSpan={2}>
              <b>आकारणी</b>
            </th> */}
            <th rowSpan={3}>
              <b> प्रत्येक वर्गातील चालु क्रमांक</b>
            </th>
            <th rowSpan={3}>
              <b>
                दुमाला जमिनीच्या नोंदवहीतील (ॲलिनेशन रजिस्टर) क्रमांक,धारणाप्रकार आणि निर्णय असल्यास
              </b>
            </th>
            <th rowSpan={3}>
              <b>सनद क्र.</b>
            </th>
            <th rowSpan={3}>
              <b>भूमापन क्रमांक आणि हिस्सा क्रमांक</b>
            </th>
            <th colSpan={3}>
              <b>निव्वळ लागवडी योग्य क्षेत्र</b>
            </th>
            <th rowSpan={3}>
              <b>आकारणी (रु.पैसे)</b>
            </th>
            <th rowSpan={3}>
              <b>अकृषिक वापराखालील क्षेत्र</b>
            </th>
            <th rowSpan={3}>
              <b>आकारणी (रु.पैसे)</b>
            </th>
            <th colSpan={3}>
              <b>शासनाला येणे असलेली रक्कम</b>
            </th>
            <th rowSpan={3}>
              <b>एकूण</b>
            </th>
            <th rowSpan={3}>
              <b>दुमालादाराकडील शिल्लक किंवा नुकसान</b>
            </th>
            <th rowSpan={3}>
              <b>शेरा</b>
            </th>
          </tr>
          <tr>
            <th colSpan={1} rowSpan={1}>
              लागवडक्षम क्षेत्र ( हे.आर.चौमी)
            </th>
            <th colSpan={1} rowSpan={1}>
              पोटखराब क्षेत्र (हे.आर.चौमी)
            </th>
            <th colSpan={1} rowSpan={1}>
              एकूण क्षेत्र (हे.आर.चौमी)
            </th>

            <th colSpan={1} rowSpan={1}>
              जुडी/सलामी
            </th>
            <th colSpan={2}>जमाबंदी</th>
          </tr>
          <tr>
            {/* <th></th>
            <th></th>*/}
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>दर</th>
            <th>आकारणी (रु.पैसे)</th>
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7-अ</th>
            <th>7-ब</th>
            <th>7-क</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
            <th>11</th>
            <th>12</th>
            <th>13</th>
            <th>14</th>
            <th>15</th>
            <th>16</th>
          </tr>
        </thead>

        <tbody>
          <>
            {Array.isArray(tableData) &&
              tableData.map((r, i) => (
                <tr key={i}>
                  <td>{r.classes}</td>
                  <td>{r.kindAndHowLongContinuable}</td>
                  <td>{r.runningNoEachClass}</td>
                  <td>{r.noInRegisterOfLands}</td>
                  <td>{r.sanadNo}</td>
                  <td>
                    {r.surveyNumber}
                    {/* {r.hissaNo && '/' + r.hissaNo} */}
                  </td>

                  <td>
                    {r.netCultiAreaH
                      .substring(0, r.netCultiAreaH.length - 2)
                      .concat('.')
                      .concat(r.netCultiAreaH.substring(r.netCultiAreaH.length - 2))}
                  </td>
                  <td>
                    {r.potKharabArea
                      .substring(0, r.potKharabArea.length - 2)
                      .concat('.')
                      .concat(r.potKharabArea.substring(r.potKharabArea.length - 2))}
                  </td>
                  <td>
                    {r.totalArea
                      .substring(0, r.totalArea.length - 2)
                      .concat('.')
                      .concat(r.totalArea.substring(r.totalArea.length - 2))}
                  </td>
                  <td>{r.assessment}</td>
                  <td>
                    {r.naAreaH
                      .substring(0, r.naAreaH.length - 2)
                      .concat('.')
                      .concat(r.naAreaH.substring(r.naAreaH.length - 2))}
                  </td>
                  <td>{r.naAssessment}</td>
                  <td>{r.juniSalami}</td>
                  <td>{r.rate}</td>
                  <td>{r.echAssessment}</td>
                  <td>{r.total}</td>
                  <td>{r.netPending}</td>
                  <td>{r.remarks}</td>
                </tr>
              ))}
            <tr>
              <td colSpan={6}>
                <b>total</b>
              </td>
              <td>
                <b>{netCultivableArea}</b>
              </td>
              <td>
                <b>{netPotkharab}</b>
              </td>
              <td>
                <b>{totalArea}</b>
              </td>
              <td>
                <b>{netAssessment}</b>
              </td>
              <td>
                <b>{netNaArea}</b>
              </td>
              <td>
                <b>{netNaAssessment}</b>
              </td>
              <td>
                <b>{netJudiSalami}</b>
              </td>
              <td>
                <b>{netRate}</b>
              </td>
              <td>
                <b>{netEchAssessment}</b>
              </td>
              <td>
                <b>{netTotal}</b>
              </td>
              <td>
                <b>{netPending}</b>
              </td>
              <td></td>
            </tr>
          </>
        </tbody>
      </table>
    </>
  )
}

export default VillageForm3Table
