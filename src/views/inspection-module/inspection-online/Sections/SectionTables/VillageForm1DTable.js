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

const VillageForm1DTable = () => {
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
        `${URLS.BaseURL}/form1d/getForm1DReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form1DData.map((r) => ({
            id: r.id,
            surveyNumber:
              r.hissaNo == null || r.hissaNo.trim() == '' ? r.pin : r.pin + '/' + r.hissaNo,
            hissaNo: r.hissaNo,
            totalAreaH: r.totalAreaH,
            assessment: r.assessment,
            remarks: r.remarks,
            irrigatedArea: r.irrigatedArea,
            unirrigatedArea: r.unirrigatedArea,
            rules: r.rules,
            allTotal: getTotalOfAll(r.totalAreaH, r.assessment, r.irrigatedArea, r.unirrigatedArea),
          })),
        )
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
            <th colSpan="11">
              <h5 style={{ color: 'red' }}>
                <b>
                  {/* <FormattedMessage id="formLanguage.form.villageForm1D" /> */}
                  Village Form 1-D
                </b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="11">
              <h6 style={{ color: 'red' }}>
                <b>
                  {/* <b>
                {' '}
                <FormattedMessage id="formLanguage.form.registerShowingLand" />
              </b> */}
                  कुळवहिवाट कायदा आणि महाराष्ट्र शेतजमीन (जमीनधारणेची कमाल मर्यादा) अधिनियम,1961
                  <br />
                  यांच्या उपबंधानुसार अतिरिक्त म्हणून घोषित केलेल्या जमिनी दर्शविणारी नोंदवही
                </b>
              </h6>
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
              <b>भूमापन क्र</b>
            </th>
            {/* <th>
          <b>हिस्सा क्र</b>
        </th> */}
            <th>
              <b>क्षेत्र</b>
            </th>
            <th>
              <b>आकारणी</b>
            </th>
            <th colSpan={2}>
              <b>जमिनीचे वर्गीकरण</b>
            </th>
            <th>
              <b>कायदा</b>
            </th>
            <th>
              <b>तहसीलदार/उपजिल्हाधिकारी - आदेश क्रमांक आणि दिनांक</b>
            </th>
          </tr>
          <tr>
            {/* <th></th> */}
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>जलसिंचित क्षेत्र</th>
            <th>अजलसिंचित क्षेत्र</th>
            <th></th>
            <th></th>
            {/*  <td></td>
     <td></td>
    <td></td> */}
          </tr>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6(अ)</th>
            <th>6(ब)</th>
            <th>7</th>
            {/* <th>8</th> */}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{r.surveyNumber}</td>
                {/* <td>{r.hissaNo}</td> */}
                <td>
                  {r.totalAreaH
                    .substring(0, r.totalAreaH.length - 2)
                    .concat('.')
                    .concat(r.totalAreaH.substring(r.totalAreaH.length - 2))}
                </td>
                <td>{r.assessment}</td>
                <td>
                  {r.irrigatedArea
                    .substring(0, r.irrigatedArea.length - 2)
                    .concat('.')
                    .concat(r.irrigatedArea.substring(r.irrigatedArea.length - 2))}
                </td>
                <td>
                  {r.unirrigatedArea
                    .substring(0, r.unirrigatedArea.length - 2)
                    .concat('.')
                    .concat(r.unirrigatedArea.substring(r.unirrigatedArea.length - 2))}
                </td>
                <td>{r.rules}</td>
                <td>{r.remarks}</td>
              </tr>
            ))}
          {/* 
        {this.props.isNirank && (
          <tr>
            <th colSpan={18}>
              {
                <Alert
                  // message="टीप"
                  description="सदर गाव नमुना निरंक आहे."
                  type="info"
                  showIcon
                  style={{ width: '100%' }}
                />
              }
            </th>
          </tr>
        )} */}
          <tr>
            <td colSpan={2}>
              <b>
                {/* <FormattedMessage id="formLanguage.form.total" /> */}
                Total
              </b>
            </td>
            <td>
              <b>{totalAreaOfAll}</b>
            </td>
            <td>
              <b>{prevAssessment.toFixed(2)}</b>
            </td>
            <td>
              <b>{totalIrrigatedAreaOfAll}</b>
            </td>
            <td>
              <b>{totalUnIrrigatedAreaOfAll}</b>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default VillageForm1DTable
