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

const VillageForm6DTable = () => {
  const [tableData, setTableData] = useState()

  const getTableData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form6D/getForm6DReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form6DData.map((r) => ({
            id: r.id,
            mutationEntryInVillageForm6: r.mutationEntryInVillageForm6,
            surveyNoOrSubDivisionNo: r.surveyNoOrSubDivisionNo,
            natureOfChangeInMap: r.natureOfChangeInMap,
            byWhomDoneAndDate: r.byWhomDoneAndDate,
            dateOfChange: r.dateOfChange ? r.dateOfChange : '',
            byWhomDone: r.byWhomDone,
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
      {/* <h2>Village Form 6-D Table</h2> */}
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना ६ड:नवीन उप- विभाग (पोट हिस्से) नोंदवही</b>
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
              <b>गाव नमुना ६ मधील फेरफार क्र</b>
            </th>
            <th>
              <b>भूमापन क्रमांक किंवा हिस्सा क्रमांक</b>
            </th>
            <th>
              <b>नकाशामध्ये आवश्यक बदलाचे स्वरूप</b>
            </th>
            <th>
              <b>मोजणी करणाराचे नाव आणि दिनांक</b>
            </th>
          </tr>

          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <>
                <tr>
                  <td>{r.mutationEntryInVillageForm6}</td>
                  <td>{r.surveyNoOrSubDivisionNo}</td>
                  <td>{r.natureOfChangeInMap}</td>
                  <td>
                    {r.byWhomDone}/{r.dateOfChange}
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm6DTable
