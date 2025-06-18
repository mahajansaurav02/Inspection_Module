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

const VillageForm7BTable = () => {
  const [tableData, setTableData] = useState()

  const getTableData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form7b/getForm7BReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form7BData.map((r, i) => ({
            srNo: i + 1,
            id: r.id,
            pin: r.hissaNo == null || r.hissaNo.trim() == '' ? r.pin : r.pin + '/' + r.hissaNo,
            hissaNo: r.hissaNo,
            khataNo: r.khataNo,
            year: r.year,
            fullName:
              r.fnamePersonInPossession +
              ' ' +
              r.mnamePersonInPossession +
              ' ' +
              r.lnamePersonInPossession,
            // designation: r.designation,
            possessionDate: r.possessionDate,
            remarks: r.remarks,
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
      {/* <h2>Village Form 7-B Table</h2> */}
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
              <b>सर्वे/गट क्रमांक</b>
            </th>
            <th>
              <b>खाते क्र.</b>
            </th>
            <th>
              <b>वर्ष</b>
            </th>
            <th>
              <b>
                अधिकार अभिलेखामध्ये नाव नोंदलेल्या व्यक्ती व्यतिरिक्त जमीन कब्जात असलेल्या इतर
                व्यक्तीचे नाव
              </b>
            </th>
            <th>
              <b>ज्या दिनांकापासुन जमीन इतर व्यक्तीच्या कब्जात असेल तो दिनांक</b>
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
          </tr>
        </thead>

        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <>
                <tr>
                  <td>{r.srNo}</td>
                  <td>{r.pin}</td>
                  <td>{r.khataNo}</td>
                  <td>{r.year}</td>
                  <td>{r.fullName}</td>

                  <td>{r.possessionDate}</td>

                  <td>{r.remarks}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm7BTable
