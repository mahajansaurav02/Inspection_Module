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

const VillageForm7ATable = () => {
  var prevTotalArea = 0,
    prevAssessment = 0
  const [tableData, setTableData] = useState()

  function getTotalAreaAssess(area, assessment) {
    prevTotalArea += parseFloat(area)
    prevAssessment += parseFloat(assessment)
  }

  const getTableData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form7a/getForm7AReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form7AData.map((r, i) => ({
            srNo: i + 1,
            id: r.id,
            khataNo: r.khataNo,
            lastYearSerialNo: r.lastYearSerialNo,
            nameOfTenant: r.nameOfTenant,
            landlordName: r.landlordName,
            pin: r.hissaNo == null || r.hissaNo.trim() == '' ? r.pin : r.pin + '/' + r.hissaNo,
            hissaNo: r.hissaNo,
            area: r.area,
            assessment: r.assessment,
            rent: r.rent,
            serialNoInMutationReg: r.serialNoInMutationReg,
            remarks: r.remarks,
            // hissaNo:r.hissaNo,
            allTotal: getTotalAreaAssess(r.area, r.assessment),
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
      {/* <h2>Village Form 7-A Table</h2> */}
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना ७अ</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>कुळवहिवाट नोंदवही</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>
                  महाराष्ट्र जमीन महसुल अधिकार अभिलेख आणि नोंदवहया (तयार करणे व सुस्थितीत ठेवणे)
                  नियम,१९७१ यातील नियम ३२
                </b>
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
              <b>मागील वर्षाच्या नोंदवहीचा अ.क्र</b>
            </th>
            <th>
              <b>खाता क्रमांक</b>
            </th>
            <th>
              <b>कुळाचे नाव (मराठी वर्णानुक्रमे)</b>
            </th>
            <th>
              <b>जमीन मालकाचे नाव</b>
            </th>
            <th>
              <b>भूमापन क्रमांक आणि हिस्सा क्र.</b>
            </th>
            <th>
              <b>क्षेत्र</b>
            </th>
            <th>
              <b>आकारणी</b>
            </th>
            <th>
              <b>खंड</b>
            </th>
            <th>
              <b>फेरफार नोंदवहीतील नोंदीचा क्र</b>
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
                  <td className={styles.td1}>{r.srNo}</td>
                  <td className={styles.td2}>{r.lastYearSerialNo}</td>
                  <td className={styles.td2}>{r.khataNo}</td>

                  <td className={styles.td3}>{r.nameOfTenant}</td>
                  <td className={styles.td4}>{r.landlordName}</td>
                  <td className={styles.td5}>{r.pin}</td>
                  <td className={styles.td6}>
                    {r.area
                      .substring(0, r.area.length - 2)
                      .concat('.')
                      .concat(r.area.substring(r.area.length - 2))}
                  </td>
                  <td className={styles.td7}>{r.assessment}</td>

                  <td className={styles.td8}>{r.rent}</td>
                  <td className={styles.td9}>{r.serialNoInMutationReg}</td>
                  <td className={styles.td10}>{r.remarks}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm7ATable
