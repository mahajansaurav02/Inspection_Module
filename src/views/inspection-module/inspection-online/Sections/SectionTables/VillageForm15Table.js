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
const revenueYear = JSON.parse(localStorage.getItem('revenueYear'))[1].revenueYear
const sajjaCode = JSON.parse(localStorage.getItem('villageData'))[0].sajjaCode

const VillageForm15Table = () => {
  const [tableData, setTableData] = useState()

  const getTableData = async () => {
    axios
      .get(`${URLS.BaseURL}/form15/getForm15Data?sajjaCode=${sajjaCode}&userId=${''}`, {
        headers: reqHeaders,
      })
      .then((res) => {
        setTableData(
          res.data.form15Data.map((r) => ({
            communicationDispatchedToWhom: r.communicationDispatchedToWhom,
            communicationReceivedFrom: r.communicationReceivedFrom,
            noOfCommunication: r.noOfCommunication,
            dateOfReceipt: r.dateOfReceipt,
            subjectActionToTake: r.subjectActionToTake,
            dateOfDispatch: r.dateOfDispatch ? r.dateOfDispatch : '',
            noInList: r.noInList,
            remarks: r.remarks,
            designation: r.designation,
          })),
        )
        successToast('Data Successfully fetched')
      })
      .catch((err) => {
        errorToast(err.status == 'FAILURE' ? err.message : err?.response?.data?.message)
      })
  }

  useEffect(() => {
    getTableData()
  }, [])

  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="11">
              <h4 style={{ color: 'red' }}>
                <b>गाव नमुना पंधरा आवक-जावक नोंदवही</b>
              </h4>
            </th>
          </tr>

          <tr>
            <th>
              <b>अ.क्र</b>
            </th>
            <th>
              <b>पत्रव्यवहार कोणाकडुन मिळाला</b>
            </th>
            <th>
              <b>पत्रव्यवहाराचा क्रमांक</b>
            </th>
            <th>
              <b>पत्रव्यवहाराचा दिनांक</b>
            </th>
            <th>
              <b>थोडक्यात विषय व करावयाची कार्यवाही</b>
            </th>
            <th>
              <b>पत्रव्यवहार कोणाकडे निर्गमित केला</b>
            </th>
            <th>
              <b>निर्गमित केल्याचा दिनांक</b>
            </th>
            <th>
              <b>अ , ब, क, ड सूचीत अभिलिखित केल्याचा क्रमांक</b>
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
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{r.communicationReceivedFrom}</td>
                <td>{r.noOfCommunication}</td>
                <td>{r.dateOfReceipt}</td>
                <td>{r.subjectActionToTake}</td>
                <td>{r.communicationDispatchedToWhom}</td>
                <td>{r.dateOfDispatch}</td>
                <td>{r.noInList}</td>
                <td>{r.remarks}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm15Table
