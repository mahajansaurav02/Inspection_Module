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

const VillageForm1ATable = () => {
  const [tableData, setTableData] = useState()

  var totalVillageAreaAddition = preVillageTotalArea
    .toFixed(4)
    .substring(preVillageTotalArea.length - 2)
  var totalVillageAreaOfAll = totalVillageAreaAddition
    .substring(0, totalVillageAreaAddition.length - 2)
    .concat('.')
    .concat(totalVillageAreaAddition.substring(totalVillageAreaAddition.length - 2))

  var totalVillageForestAddition = prevVillageForest
    .toFixed(4)
    .substring(prevVillageForest.length - 2)
  var totalVillageForestAreaOfAll = totalVillageForestAddition
    .substring(0, totalVillageForestAddition.length - 2)
    .concat('.')
    .concat(totalVillageForestAddition.substring(totalVillageForestAddition.length - 2))

  var totalProtectedForestAddition = prevProtectedForest
    .toFixed(4)
    .substring(prevProtectedForest.length - 2)
  var totalProtectedForestAreaOfAll = totalProtectedForestAddition
    .substring(0, totalProtectedForestAddition.length - 2)
    .concat('.')
    .concat(totalProtectedForestAddition.substring(totalProtectedForestAddition.length - 2))

  var totalReservedForestAddition = prevReservedForest
    .toFixed(4)
    .substring(prevReservedForest.length - 2)
  var totalReservedForestAreaOfAll = totalReservedForestAddition
    .substring(0, totalReservedForestAddition.length - 2)
    .concat('.')
    .concat(totalReservedForestAddition.substring(totalReservedForestAddition.length - 2))

  const gettableData1A = async () => {
    preVillageTotalArea = 0
    prevVillageForest = 0
    prevProtectedForest = 0
    prevReservedForest = 0
    axios
      .get(
        `${URLS.BaseURL}/form1a/getForm1AReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setTableData(
          res.data.form1AData.map((r) => ({
            hissaNo: r.hissaNo,
            surveyNumber:
              r.hissaNo == null || r.hissaNo.trim() == '' ? r.pin : r.pin + '/' + r.hissaNo,
            area: r.area,
            typeOfLand:
              r.typeOfLand != ''
                ? // <FormattedMessage id={r.typeOfLand} />
                  r.typeOfLand
                : '',
            remarks: r.remarks,
            area: r.area,
            forestNoIfAny: r.forestNoIfAny,
            protectedForest: r.protectedForest,
            reservedForest: r.reservedForest,
            villageForest: r.villageForest,
            rightsRecordedByTheForset: r.rightsRecordedByTheForestOfficer,
            allTotal: getTotalAreaAssess(
              r.area,
              r.villageForest,
              r.protectedForest,
              r.reservedForest,
            ),
          })),
        )
        // successToast('Data Successfully fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }

  function getTotalAreaAssess(area, villageForest, protectedForest, reservedForest) {
    preVillageTotalArea += parseFloat(area ? area : '0') / 2
    prevVillageForest += parseFloat(villageForest ? villageForest : '0') / 2
    prevProtectedForest += parseFloat(protectedForest ? protectedForest : '0') / 2
    prevReservedForest += parseFloat(reservedForest ? reservedForest : '0') / 2
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
            <th colSpan="11">
              <h5 style={{ color: 'red', textAlign: 'center' }}>
                <b>
                  {/* <FormattedMessage id="villageForm1A.table.villageForm1A" /> */}
                  Village Form 1-A
                </b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="11">
              <h5 style={{ color: 'red' }}>
                <b>
                  {/* <FormattedMessage id="villageReport1A.label.landRegister" /> */}
                  Forest Register
                </b>
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
            <th rowSpan="4">
              <b>
                {/* <FormattedMessage id="villageReport1A.table.surveyNo" /> */}
                Survey Number
              </b>
            </th>

            <th colSpan={5}>
              <h6 style={{ textAlign: 'center' }}>
                <b>
                  {/* <FormattedMessage id="villageReport1A.table.forestLand" /> */}
                  Area under Forest
                </b>
              </h6>
            </th>
            <th rowSpan="4">
              <b>
                {/* <FormattedMessage id="villageReport1A.table.settleOfficer" /> */}
                Rights recorded by the Forest Settlement Officer under the Act
              </b>
            </th>
            <th rowSpan="4">
              <b>
                {/* <FormattedMessage id="villageReport1A.table.remark" /> */}
                Remarks
              </b>
            </th>
          </tr>
          <tr>
            <th colSpan={1} rowSpan={2}>
              {/* <FormattedMessage id="villageForm1A.table.noIfAny" /> */}
              Forest No. if Any
            </th>
            <th colSpan={1} rowSpan={2}>
              {/* <FormattedMessage id="villageForm1A.table.area" /> */}
              Any Area
            </th>
            <th colSpan={1} rowSpan={2}>
              {/* <FormattedMessage id="villageForm1A.table.villageForest1" />
            <br />
        <FormattedMessage id="villageForm1A.table.villageForest12" /> */}
              <span>Village Forest or Forest under Revenue Department</span>
              <br />
              <span>(Still if its in Forest Law)</span>
            </th>
            <th colSpan={1} rowSpan={2}>
              {/* <FormattedMessage id="villageForm1A.table.protectedForest" /> */}
              Protected Forest
            </th>
            <th colSpan={1} rowSpan={2}>
              {/* <FormattedMessage id="villageForm1A.table.reservedForest" /> */}
              Reserved Forest
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
          </tr>
          {Array.isArray(tableData) &&
            tableData.map((r, i) => (
              <tr key={i}>
                <td>{r.surveyNumber}</td>
                <td>{r.forestNoIfAny}</td>
                <td>{r.area}</td>
                <td>{r.villageForest}</td>
                <td>{r.protectedForest}</td>
                <td>{r.reservedForest}</td>
                <td>{r.rightsRecordedByTheForset}</td>
                <td>{r.remarks}</td>
              </tr>
            ))}
          <tr>
            <td colSpan={2}>
              <b>
                {/* <FormattedMessage id="formLanguage.form.total" /> */}
                Total
              </b>
            </td>
            <td>
              <b>{totalVillageAreaOfAll}</b>
            </td>
            <td>
              <b>{totalVillageForestAreaOfAll}</b>
            </td>
            <td>
              <b>{totalProtectedForestAreaOfAll}</b>
            </td>
            <td>
              <b>{totalReservedForestAreaOfAll}</b>
            </td>
            <td colSpan={2}></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default VillageForm1ATable
