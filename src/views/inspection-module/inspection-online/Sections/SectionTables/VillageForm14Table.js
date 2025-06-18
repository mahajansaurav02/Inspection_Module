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

const VillageForm14Table = () => {
  const [tableData, setTableData] = useState()

  const getTableData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form14/getForm14Report?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form14Data.map((r) => ({
            eWaterSourceName: r.eWaterSourceName,
            position: r.position,
            pakkaOrKaccha: r.pakkaOrKaccha,
            purposeOfUse: r.purposeOfUse,
            governmentbodyOrPrivate: r.governmentbodyOrPrivate,
            remarks: r.remarks,
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
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना चौदा</b>
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
              <b>पाणीपुरवठयाचे साधन</b>
            </th>
            <th>
              <b>स्थान</b>
            </th>
            <th>
              <b>पक्के किंवा कच्चे</b>
            </th>
            <th>
              <b>कोणत्या प्रयोजनासाठी वापर होता</b>
            </th>

            <th>
              <b>शासकीय / स्थानिक / संस्थेची / खाजगी</b>
            </th>
            <th>
              <b>शेरा</b>
            </th>
          </tr>

          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{r.eWaterSourceName}</td>
                <td>{r.position}</td>
                <td>{r.pakkaOrKaccha}</td>
                <td>{r.purposeOfUse}</td>
                <td>{r.governmentbodyOrPrivate}</td>
                <td>{r.remarks}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm14Table
