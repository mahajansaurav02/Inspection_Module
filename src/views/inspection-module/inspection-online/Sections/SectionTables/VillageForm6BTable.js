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

const VillageForm6BTable = () => {
  const [tableData, setTableData] = useState()

  const getTableData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form6B/getForm6BReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form6BData.map((r, i) => ({
            srNo: i + 1,
            entryInVillageForm6: r.entryInVillageForm6,
            nameOfAcquirerOfRightOrHolderOfDocument: r.nameOfAcquirerOfRightOrHolderOfDocument,
            orderOfTahsildarAsFine: r.orderOfTahsildarAsFine,
            receiptNo: r.receiptNo,
            receiptDate: r.receiptDate,
            entryVillageForm6: r.entryVillageForm6,
            nameOfAcquirerOfRight: r.nameOfAcquirerOfRight,
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
      <h2>Village Form 6-B Table</h2>
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead>
          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना ६ब</b>
              </h5>
            </th>
          </tr>

          <tr>
            <th colSpan="12">
              <h5 style={{ color: 'red' }}>
                <b>
                  विलंब शुल्क (महाराष्ट्र जमीन महसूल अधिनियम,१९६६ कलम १५२ खालील दंड ) प्रकरणांची
                  नोंदवही
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
              <b>गाव नमुना ६ मधील नोंद क्र.</b>
            </th>
            <th>
              <b>अधिकार संपादन करणाऱ्याचे किंवा दस्तऐवज धारकाचे नाव</b>
            </th>
            <th>
              <b>दंड आकारणीबाबत तहसिलदारचा आदेश क्र</b>
            </th>
            <th>
              <b>पावती क्र.</b>
            </th>
            <th>
              <b>पावतीची दिनांक</b>
            </th>
          </tr>

          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <>
                <tr>
                  <td>{r.entryVillageForm6}</td>
                  <td>{r.nameOfAcquirerOfRight}</td>
                  <td>{r.orderOfTahsildarAsFine}</td>
                  <td>{r.receiptNo}</td>
                  <td>{r.receiptDate}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default VillageForm6BTable
