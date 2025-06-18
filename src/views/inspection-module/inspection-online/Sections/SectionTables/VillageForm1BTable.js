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
let prevAssessedArea = 0
let prevUnAssessedArea = 0

const VillageForm1Btable = () => {
  const [tableData, setTableData] = useState()

  var totalAreaAddition = prevTotalArea.toFixed(4).substring(prevTotalArea.length - 2)
  var totalAreaOfAll = totalAreaAddition
    .substring(0, totalAreaAddition.length - 2)
    .concat('.')
    .concat(totalAreaAddition.substring(totalAreaAddition.length - 2))

  var totalAssessedAreaAddition = prevAssessedArea.toFixed(4).substring(prevAssessedArea.length - 2)
  var totalAssessedAreaOfAll = totalAssessedAreaAddition
    .substring(0, totalAssessedAreaAddition.length - 2)
    .concat('.')
    .concat(totalAssessedAreaAddition.substring(totalAssessedAreaAddition.length - 2))
  var totalUnAssessedAreaAddition = prevUnAssessedArea
    .toFixed(4)
    .substring(prevUnAssessedArea.length - 2)
  var totalUnAssessedAreaOfAll = totalUnAssessedAreaAddition
    .substring(0, totalUnAssessedAreaAddition.length - 2)
    .concat('.')
    .concat(totalUnAssessedAreaAddition.substring(totalUnAssessedAreaAddition.length - 2))

  const getTableData1B = async () => {
    prevTotalArea = 0
    prevAssessment = 0
    prevUnAssessedArea = 0
    prevAssessedArea = 0

    axios
      .get(
        `${URLS.BaseURL}/form1b/getForm1BReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form1BData.map((r, i) => ({
            srNo: i + 1,
            totalAreaH: r.totalAreaH,
            assessment: r.assessment,
            publicRightsOfWayAndEasements: r.publicRightsOfWayAndEasements,
            remarks: r.remarks,
            assessedArea: r.assessedArea,
            unassessedArea: r.unassessedArea,
            surveyNumber:
              r.hissaNo == null || r.hissaNo.trim() == '' ? r.pin : r.pin + '/' + r.hissaNo,
            allTotal: getTotalAreaAssess(
              r.totalAreaH,
              r.assessedArea,
              r.unassessedArea,
              r.assessment,
            ),
          })),
        )
        successToast('Data Successfully fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }

  function getTotalAreaAssess(totalAreaH, assessedArea, unassessedArea, assessment) {
    prevTotalArea += parseFloat(totalAreaH) / 2
    prevAssessment += parseFloat(assessment) / 2
    prevUnAssessedArea += unassessedArea == null ? parseFloat(0) : parseFloat(unassessedArea) / 2
    prevAssessedArea += assessedArea == null ? parseFloat(0) : parseFloat(assessedArea) / 2
  }

  useEffect(() => {
    getTableData1B()
  }, [])

  // useEffect(() => {
  //   prevTotalArea = 0
  //   prevAssessment = 0
  //   prevUnAssessedArea = 0
  //   prevAssessedArea = 0
  // }, [])
  console.info('totalAssessedAreaOfAll->>', totalAssessedAreaOfAll)

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
                  Village Form 1-B
                </b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="11">
              <h5 style={{ color: 'red' }}>
                <b>बिनभोगवटयाच्या (सरकारी) जमिनींची नोंदवही</b>
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
              <b>भूमापन क्र</b>
            </th>
            <th colSpan={2}>
              <b>आकारणी</b>
            </th>
            <th>
              <b> बिनआकारी क्षेत्र</b>
            </th>
            <th>
              <b>सार्वजनिक मार्गाधिकार आणि सुविधाधिकार</b>
            </th>
            <th>
              <b>शेरा</b>
            </th>
          </tr>
          <tr>
            <th></th>
            <th>क्षेत्रफळ</th>
            <th>आकारणी</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>1</th>
            <th>2(अ)</th>
            <th>2(ब)</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <tr key={i}>
                <td>{r.surveyNumber}</td>
                <td>{r.assessedArea}</td>
                <td>{r.assessment}</td>
                <td>{r.unassessedArea}</td>
                <td>{r.publicRightsOfWayAndEasements}</td>
                <td>{r.remarks}</td>
              </tr>
            ))}

          <tr>
            <td>
              <b>
                {/* <FormattedMessage id="formLanguage.form.total" /> */}
                Total
              </b>
            </td>
            <td>
              <b>{totalAssessedAreaOfAll}</b>
            </td>

            <td>
              <b>{prevAssessment.toFixed(2)}</b>
            </td>

            <td>
              <b>{totalUnAssessedAreaOfAll}</b>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default VillageForm1Btable
