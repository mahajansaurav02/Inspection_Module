import React, { useCallback, useEffect, useState } from 'react'
import styles from './villageform1a.module.css'
import URLS from 'src/URLS'
import axios from 'axios'
import reqHeaders from 'src/instance/headers'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'

let preVillageTotalArea = 0
let prevVillageForest = 0
let prevProtectedForest = 0
let prevReservedForest = 0
const districtCode = localStorage.getItem('districtCode')
const talukaCode = localStorage.getItem('talukaCode')
const codeVillage = JSON.parse(localStorage.getItem('villageData'))[0].cCode
const districtName = localStorage.getItem('districtName')
const talukaName = localStorage.getItem('talukaName')
const villageName = JSON.parse(localStorage.getItem('villageData'))[0].villageName

const VillageForm1ODCDiffTable = () => {
  const [tableData, setTableData] = useState()

  const gettableData1A = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form1/form1OdcDiff?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.map((r) => ({
            surveyNumber: r.pin,
            totalAreaFlag:
              r.form1Totalarea === r.form7Totalarea ? (
                <a style={{ color: 'green' }}>नाही</a>
              ) : (
                <a style={{ color: 'red' }}>होय</a>
              ),
            potKharabaFlag:
              r.form1PotKharaba === r.form7PotKharaba ? (
                <a style={{ color: 'green' }}>नाही</a>
              ) : (
                <a style={{ color: 'red' }}>होय</a>
              ),
            potKharabaTypeFlag:
              r.form1PotType === r.form7PotType ? (
                <a style={{ color: 'green' }}>नाही</a>
              ) : (
                <a style={{ color: 'red' }}>होय</a>
              ),
            // form7PotKharaba: r.form7PotKharaba,
            areaNetCultiAreaFlag:
              r.form1AreaNetCultiArea === r.form7AreaNetCultiArea ? (
                <a style={{ color: 'green' }}>नाही</a>
              ) : (
                <a style={{ color: 'red' }}>होय</a>
              ),
            // form7AreaNetCultiArea: r.form7AreaNetCultiArea,
            AssessmentFlag:
              r.form1Assessment === r.form7Assessment ? (
                <a style={{ color: 'green' }}>नाही</a>
              ) : (
                <a style={{ color: 'red' }}>होय</a>
              ),
            // form7Assessment: r.form7Assessment,
            tenureCodeFlag:
              r.form1TenureCode === r.form7TenureCode ? (
                <a style={{ color: 'green' }}>नाही</a>
              ) : (
                <a style={{ color: 'red' }}>होय</a>
              ),
            // form7TenureCode: r.form7TenureCode,
            netCultiAreaFlag:
              r.form1NetCultiArea === r.form7NetCultiArea ? (
                <a style={{ color: 'green' }}>नाही</a>
              ) : (
                <a style={{ color: 'red' }}>होय</a>
              ),
            //  form7NetCultiArea: r.form7NetCultiArea,
          })),
        )
        successToast('Record Fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }

  useEffect(() => {
    gettableData1A()
  }, [])
  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="10">
              <h5 style={{ color: 'red', textAlign: 'center' }}>
                <b>
                  {/* <FormattedMessage id="villageForm1A.table.villageForm1A" /> */}
                  गाव नमुना एक(फरक)
                </b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="10">
              <h6 style={{ color: 'red' }}>
                <b>
                  गाव- {villageName} &nbsp; तालुका- {talukaName} &nbsp; जिल्हा- {districtName}
                </b>
              </h6>
            </th>
          </tr>
          <tr>
            <th>
              <b>
                {/* <FormattedMessage id="villageReport1A.table.surveyNo" /> */}
                भूमापन क्रमांक
              </b>
            </th>

            <th>
              <h6 style={{ textAlign: 'center' }}>
                <b>
                  {/* <FormattedMessage id="villageReport1A.table.forestLand" /> */}
                  धारणा प्रकारातील फरक
                </b>
              </h6>
            </th>
            <th>
              <b>
                {/* <FormattedMessage id="villageReport1A.table.settleOfficer" /> */}
                एकूण क्षेत्रातील फरक
              </b>
            </th>
            <th>
              <b>
                {/* <FormattedMessage id="villageReport1A.table.remark" /> */}
                पोट खराब प्रकारात फरक
              </b>
            </th>
            <th rowSpan="4">
              <b>पोट खराब क्षेत्रातील फरक</b>
            </th>
            <th>
              <b>निव्वळ लागवड योग्य क्षेत्रातील फरक</b>
            </th>
            <th>
              <b>कृषिक आकारणीतील फरक</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <tr key={i}>
                <td>{r.surveyNumber}</td>
                <td>{r.tenureCodeFlag}</td>
                <td>{r.totalAreaFlag}</td>
                <td>{r.potKharabaTypeFlag}</td>
                <td>{r.potKharabaFlag}</td>
                <td>{r.netCultiAreaFlag}</td>
                <td>{r.AssessmentFlag}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm1ODCDiffTable

// export default VillageForm1ODCDiffTable
