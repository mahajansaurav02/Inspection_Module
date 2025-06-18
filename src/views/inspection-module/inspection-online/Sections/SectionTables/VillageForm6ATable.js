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

const VillageForm6ATable = () => {
  const [tableData, setTableData] = useState()

  const getTableData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/reports/getForm6AReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form1Data.map((r) => ({
            id: r.id,
            mutNo: r.mutNo,
            objectionDate: r.objectionDate,
            objectionRemark: r.objectionRemark,
            firstName: r.firstName,
            middelName: r.middelName,
            lastName: r.lastName,
          })),
        )
        // successToast('Data Successfully fetched')
      })
      .catch((err) => {
        // console.error(err)
        errorToast(err.status == 'FAILURE' ? err.message : 'Data Not Found')
      })
  }

  useEffect(() => {
    getTableData()
  }, [])
  return (
    <>
      {/* <h2>Village Form 6-A Table</h2> */}
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना सहा-अ</b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>विवादग्रस्त प्रकरणांची नोंदवही</b>
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
          <tr>
            <th>
              <b>अ.क्र</b>
            </th>
            <th>
              <b>फेरफारांच्या नोंदवहीतील अनुक्रमांक किंवा अधिकार अभिलेखाची कच्ची प्रत</b>
            </th>
            <th>
              <b>भूमापन क्रमांक आणि उपविभाग क्रमांक</b>
            </th>
            <th>
              <b>हरकत मिळाल्याचा दिनांक</b>
            </th>
            <th>
              <b>विवाद करणाऱ्या पक्षकारांच्या नावासह विवादाचा तपशील</b>
            </th>
            <th>
              <b>अधिकाऱ्याचा निर्णय</b>
            </th>
          </tr>

          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{r.mutNo}</td>
                  <td></td>
                  <td>{r.objectionDate}</td>
                  <td>
                    {r.firstName} {r.middelName} {r.lastName}
                  </td>
                  <td>{r.objectionRemark}</td>
                  <td></td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm6ATable
