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
let prevEnchroachedArea = 0
const VillageForm1ETable = () => {
  const [tableData, setTableData] = useState()

  var totalAreaAddition = prevTotalArea.toFixed(4).substring(prevTotalArea.length - 2)
  var totalAreaOfAll = totalAreaAddition
    .substring(0, totalAreaAddition.length - 2)
    .concat('.')
    .concat(totalAreaAddition.substring(totalAreaAddition.length - 2))

  var totalEnchroachedAreaAddition = prevEnchroachedArea
    .toFixed(4)
    .substring(prevEnchroachedArea.length - 2)
  var totalEnchroachedAreaOfAll = totalEnchroachedAreaAddition
    .substring(0, totalEnchroachedAreaAddition.length - 2)
    .concat('.')
    .concat(totalEnchroachedAreaAddition.substring(totalEnchroachedAreaAddition.length - 2))

  useEffect(() => {
    prevTotalArea = 0
    prevEnchroachedArea = 0
  }, [])

  const getTableData1B = async () => {
    prevTotalArea = 0
    prevEnchroachedArea = 0

    axios
      .get(
        `${URLS.BaseURL}/form1e/getForm1EReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        console.log(res.data?.form1EData, 'form1E')
        setTableData(
          res.data?.form1EData?.map((r, i) => ({
            id: r?.id,
            pin: r?.hissaNo == null || r?.hissaNo.trim() == '' ? r?.pin : r?.pin + '/' + r?.hissaNo,
            nameOfEncroacher: r?.nameOfEncroacher,
            areaOfEncroached: r?.areaOfEncroached,
            totalArea: r?.totalArea,
            dateOfEncroachment: r?.dateOfEncroachment,
            // purposeOfEncroachmentLand: <FormattedMessage id={r?.purposeOfEncroachmentLand} />,
            purposeOfEncroachmentLand: r?.purposeOfEncroachmentLand,
            yearFromWhichRentRecoverable: r?.yearFromWhichRentRecoverable,
            yearOfEncroachmentNotedIfRemoved: r?.yearOfEncroachmentNotedIfRemoved,
            dateOfDecisionOnEncroachment: r?.dateOfDecisionOnEncroachment,
            remarks: r?.remarks,
            srNo: i + 1,
            hissaNo: r.hissaNo,
            allTotal: getTotalOfAll(r?.totalArea, r?.areaOfEncroached),
          })),
        )
        successToast('Data Successfully fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }

  function getTotalOfAll(totalArea, areaOfEncroached) {
    prevTotalArea += parseFloat(totalArea)
    prevEnchroachedArea += parseFloat(areaOfEncroached)
  }

  useEffect(() => {
    getTableData1B()
  }, [])

  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="11">
              <h5 style={{ color: 'red' }}>
                <b>
                  {/* <FormattedMessage id="formLanguage.label.villageForm1a" /> */}
                  गाव नमुना १इ
                </b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="11">
              <h5 style={{ color: 'red' }}>
                <b>अतिक्रमण नोंदवही</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="11">
              <h6 style={{ color: 'red' }}>
                <b>
                  गाव- {villageName} &nbsp; तालुका- {talukaName} &nbsp; जिल्हा- {districtName}
                </b>
              </h6>
            </th>
          </tr>
          <tr>
            <th>
              <b>अ.क्र</b>
            </th>
            <th>
              <b>भूमापन क्रमांक आणि हिस्सा क्रमांक</b>
            </th>
            <th>
              <b>अतिक्रमण करणाऱ्याचे नाव</b>
            </th>
            <th>
              <b>एकूण क्षेत्र</b>
            </th>
            <th>
              <b>अतिक्रमित क्षेत्र</b>
            </th>
            <th>
              <b>अतिक्रमित जमिनीचा उपयोग</b>
            </th>
            <th>
              <b>अतिक्रमणाचा दिनांक</b>
            </th>
            <th>
              <b>अतिक्रमण नजरेस आल्याचा दिनांक</b>
            </th>
            <th>
              <b>खंड किंवा आकारणी कोणत्या वर्षापासून करायची</b>
            </th>
            <th>
              <b>
                स्तंभ (५) मध्ये नमूद केलेले अतिक्रमण पूर्वी कोणत्याही वेळी दूर केले होते काय ?
                असल्यास कोणत्या वर्षी ?
              </b>
            </th>
            <th>
              <b>शेरा</b>
            </th>
          </tr>
          <tr>
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
          </tr>
        </thead>

        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <>
                <tr>
                  {/* <td>{r.srNo}</td> */}
                  <td>{i + 1}</td>
                  <td>{r.pin}</td>
                  <td>{r.nameOfEncroacher}</td>
                  <td>{r.totalArea}</td>
                  <td>{r.areaOfEncroached}</td>
                  {/* <td>{r.purposeOfEncroachmentLand} </td> */}
                  <td>{/* <FormattedMessage id="villageForm1E.table.agriculture" />{' '} */}</td>
                  {/* <td>0</td> */}
                  <td>{r.dateOfEncroachment}</td>
                  <td>{r.dateOfDecisionOnEncroachment}</td>
                  <td>{r.yearFromWhichRentRecoverable}</td>
                  <td>{r.yearOfEncroachmentNotedIfRemoved}</td>
                  <td>{r.remarks}</td>
                </tr>
              </>
            ))}

          <tr>
            <td colSpan={3}>
              <b>एकूण</b>
            </td>
            <td>
              <b>{totalAreaOfAll}</b>
            </td>
            <td>
              <b>{totalEnchroachedAreaOfAll}</b>
            </td>
            <td colSpan={6}></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default VillageForm1ETable
