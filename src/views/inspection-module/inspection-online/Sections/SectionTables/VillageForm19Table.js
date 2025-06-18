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

const VillageForm19Table = () => {
  const [tableData, setTableData] = useState()

  const getTableData = async () => {
    axios
      .get(`${URLS.BaseURL}/form19/getForm19Data?sajjaCode=${sajjaCode}&userId=${''}`, {
        headers: reqHeaders,
      })
      .then((res) => {
        setTableData(
          res.data.form19Data.map((r) => ({
            id: r.id,
            descriptionOfArticle: r.descriptionOfArticle,
            authorityOfPurchase: r.authorityOfPurchase,
            numberOrQuantity: r.numberOrQuantity,
            dateOfPurchase: r.dateOfPurchase ? r.dateOfPurchase : '',
            authorityOfVoucher: r.authorityOfVoucher,
            amountWrittenOff: r.amountWrittenOff,
            amountRealized: r.amountRealized,
            dateOfCreditAtTreasury: r.dateOfCreditAtTreasury ? r.dateOfCreditAtTreasury : '',
            number: r.number,
            value: r.value,
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
            <th colSpan={16}>
              <h4 style={{ textAlign: 'center', color: 'red' }}>गाव नमुना एकोणीस</h4>
            </th>
          </tr>
          <tr>
            <th colSpan="16">
              <h4 style={{ textAlign: 'center', color: 'red' }}>
                तलाठी/ मंडळ अधिकारी यांच्या ताब्यात असलेल्या सरकारी मालमत्तेची नोंदवही
              </h4>
            </th>
          </tr>

          <tr>
            <th colSpan={1} rowSpan={4}>
              <b>अ.क्र</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>वस्तुचे वर्णन</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>खरेदीसाठी प्राधिकार</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>खरेदीची दिनांक</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>संख्या किंवा परिमाण</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>मूल्य</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>तलाठी/मंडळ अधिकारी यांची सही</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>अंतिम विल्हेवाट,वस्तुची संख्या किंवा परिमाण, विल्हेवाटीचे स्वरुप</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>प्राधिकारपत्र किंवा प्रमाणक</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>वसुल केलेली रक्कम</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>कोषागारात भरणा केल्याची दिनांक</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>निर्लेखित केलेली रक्कम</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>शिल्लक संग्रह संख्या</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>शिल्लक संग्रह मूल्य</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>तलाठी/मंडळ अधिकारी यांची सही</b>
            </th>
            <th rowSpan={4} colSpan={1}>
              <b>निरीक्षण अधिकाऱ्यांचा शेरा व सही</b>
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
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <tr key={i}>
                <td>{i + 1}</td>

                <td>{r.descriptionOfArticle}</td>
                <td>{r.authorityOfPurchase}</td>

                <td>{r.dateOfPurchase}</td>

                <td>{r.numberOrQuantity}</td>

                <td>{/* {r.sanadNo} */}</td>
                <td>{/* {r.surveyNumber} */}</td>
                <td>{/* {r.hissaNo} */}</td>
                <td>{r.authorityOfVoucher}</td>

                <td>{r.amountRealized}</td>

                <td>{r.dateOfCreditAtTreasury}</td>

                <td>{r.amountWrittenOff}</td>
                <td>{r.number}</td>
                <td>{r.value}</td>
                <td></td>
                <td>{r.remarks}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm19Table
