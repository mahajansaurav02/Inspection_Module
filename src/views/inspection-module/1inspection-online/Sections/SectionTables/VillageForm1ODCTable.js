import React, { useCallback, useEffect, useState } from 'react'
import styles from './villageform1a.module.css'
import URLS from 'src/URLS'
import axios from 'axios'
import reqHeaders from 'src/instance/headers'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'

const districtCode = localStorage.getItem('districtCode')
const talukaCode = localStorage.getItem('talukaCode')
const codeVillage = JSON.parse(localStorage.getItem('villageData'))[0].cCode
const districtName = localStorage.getItem('districtName')
const talukaName = localStorage.getItem('talukaName')
const villageName = JSON.parse(localStorage.getItem('villageData'))[0].villageName

let prevTotalArea = 0
let prevAssessment = 0
let prevNetCultiArea = 0
let prevTotalPotKharabArea = 0

const VillageForm1ODCTable = () => {
  const [tableData, setTableData] = useState()

  const [riceRate, setRiceRate] = useState()
  const [settlementYear, setSettlementYear] = useState()
  const [settlementExpiry, setSettlementExpiry] = useState()
  const [gardenRate, setGardenRate] = useState()
  const [surveyGroup, setSurveyGroup] = useState()
  const [dateInstallment, setDateInstallment] = useState()
  const [dryRate, setDryRate] = useState()
  const [warkasRate, setWarkasRate] = useState()
  const [totalArea, setTotalArea] = useState(0)
  const [netCultiArea, setNetCultiArea] = useState(0)
  const [netAssessment, setNetAssessment] = useState(0)
  const [potkharabaType, setPotkharabaType] = useState('')

  useEffect(() => {
    prevTotalArea = 0
    prevAssessment = 0
    prevNetCultiArea = 0
    prevTotalPotKharabArea = 0
  }, [])

  var totalAreaAddition = prevTotalArea.toFixed(4).substring(prevTotalArea.length - 2)
  var totalAreaOfAll = totalAreaAddition
    .substring(0, totalAreaAddition.length - 2)
    .concat('.')
    .concat(totalAreaAddition.substring(totalAreaAddition.length - 2))

  var totalPotkharabAddition = prevTotalPotKharabArea
    .toFixed(4)
    .substring(prevTotalPotKharabArea.length - 2)
  var totalPotkharabOfAll = totalPotkharabAddition
    .substring(0, totalPotkharabAddition.length - 2)
    .concat('.')
    .concat(totalPotkharabAddition.substring(totalPotkharabAddition.length - 2))

  var totalCultiAreaAddition = prevNetCultiArea.toFixed(4).substring(prevNetCultiArea.length - 2)
  var totalNetCultiAreaOfAll = totalCultiAreaAddition
    .substring(0, totalCultiAreaAddition.length - 2)
    .concat('.')
    .concat(totalCultiAreaAddition.substring(totalCultiAreaAddition.length - 2))

  const getHeaderData = async () => {
    axios
      .get(
        `${URLS.BaseURL}/form1/getForm1HeaderDetails?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((res) => {
        setRiceRate(res.data[0].rice_rate)
        setSettlementYear(res.data[0].settlementYear)
        setSettlementExpiry(res.data[0].settlementExp)
        setGardenRate(res.data[0].garden_rate)
        setSurveyGroup(res.data[0].survey_group)
        setDateInstallment(res.data[0].date_inst)
        setDryRate(res.data[0].dry_rate)
        setWarkasRate(res.data[0].warkas_rate)
        // successToast('Data Successfully fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }

  const gettableData1A = async () => {
    prevTotalArea = 0
    prevAssessment = 0
    prevNetCultiArea = 0
    prevTotalPotKharabArea = 0
    axios
      .get(
        `${URLS.BaseURL}/form1/getForm1ODCReport?districtCode=${districtCode}&talukaCode=${talukaCode}&cCode=${codeVillage}`,
        {
          headers: reqHeaders,
        },
      )
      .then((r) => {
        let potkharabaTypeInt
        let cultivableAreaInt
        let naAgriAssesment
        setTableData(
          r.data.map((r, i) => ({
            id: r.id,
            srNo: i + 1,
            surveyHissaNo: r.hissaNo == null || r.hissaNo == '' ? r.pin : r.pin + '/' + r.hissaNo,
            designation: r.designation,
            totalAreaH: r.totalAreaH,
            tenureName: r.tenureName,
            netCultiAreaH: r.netCultiAreaH,
            naAssessment: naAgriAssesment,
            assessment: r.assessment,
            publicRightsOfWayAndEasements: r.publicRightsOfWayAndEasements,
            particularsOfAlteration: r.particularsOfAlteration,
            orderSanctioningChanges: r.orderNo,
            orderDt: r.orderDt,
            remarks: r.remarks,
            potkharabaType: getPotkharabaType(
              r.potkharabaAH ? r.potkharabaAH : '0.0000',
              r.potkharabaBH ? r.potkharabaBH : '0.0000',
            ),
            cultivableAreaInt: getPotkharabaTypeAr(
              r.potkharabaAH ? r.potkharabaAH : '0.0000',
              r.potkharabaBH ? r.potkharabaBH : '0.0000',
            ),
            naAgriAssesment:
              r.naAssessment != null || r.naAssessment > 0 ? r.naAssessment : r.assessment,
            test: TotalOfArea(r.totalAreaH, r.assessment, r.netCultiAreaH),
          })),
          //message.success('Records Fetched!!'),
        )
        successToast('Records Fetched')
      })
    // .catch((err) => {
    //   console.error(err)
    //   errorToast(err ? err : 'Data Not Found')
    // })
  }

  // function getTotalAreaAssess(area, villageForest, protectedForest, reservedForest) {
  //   preVillageTotalArea += parseFloat(area ? area : '0') / 2
  //   prevVillageForest += parseFloat(villageForest ? villageForest : '0') / 2
  //   prevProtectedForest += parseFloat(protectedForest ? protectedForest : '0') / 2
  //   prevReservedForest += parseFloat(reservedForest ? reservedForest : '0') / 2
  // }

  function TotalOfArea(totalAreaH, assessment, netCultiAreaH) {
    prevTotalArea += parseFloat(totalAreaH)
    prevAssessment += parseFloat(assessment)
    prevNetCultiArea += parseFloat(netCultiAreaH)
    // console.log('Values', prevTotalArea, prevAssessment, prevNetCultiArea);
  }

  function getPotkharabaType(ptypeA, ptypeb) {
    if (ptypeb == 0 && ptypeA == '0.0000') {
      return '-'
    } else if (ptypeb == 0) {
      return 'अ'
    } else if (ptypeA == '0.0000') {
      return 'ब'
    } else {
      return 'अ,ब'
    }
  }

  function getPotkharabaTypeAr(ptypeA, ptypeb) {
    prevTotalPotKharabArea += parseFloat(ptypeA) + parseFloat(ptypeb)

    if (ptypeb == 0 && ptypeA == '0.0000') {
      return ptypeb + ' , ' + ptypeA
    } else if (ptypeb == 0) {
      return ptypeA
    } else if (ptypeA == '0.0000') {
      return ptypeb
    } else {
      return ptypeb + ' , ' + ptypeA
    }
  }

  useEffect(() => {
    gettableData1A()
    getHeaderData()
  }, [])
  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table id="table-to-xls" className={styles.report_table}>
        <thead style={{ backgroundColor: '#add8e6', border: '1px solid black' }}>
          <tr>
            <th colSpan="8">
              <h5 style={{ color: 'red' }}>
                <b>गाव नमुना एक( ई फेरफार मधील ओ.डी.सी प्रमाणे दुरुस्त)</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="8">
              <h5 style={{ color: 'red' }}>
                <b>जमिनींची नोंदवही</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="8">
              <h5 style={{ color: 'red' }}>
                <b>(आकारबंद जमाबंदी मिस्ल - शेतवारपत्रक )</b>
              </h5>
            </th>
          </tr>
          <tr>
            <th colSpan="8">
              <h5 style={{ color: 'red' }}>
                <b>
                  गाव- {villageName} &nbsp; तालुका- {talukaName} &nbsp; जिल्हा- {districtName}
                </b>
              </h5>
            </th>
          </tr>

          <tr style={{ textAlign: 'left' }}>
            <th colSpan={2}>हेक्टरी प्रमाण दर रु. पै</th>
            <th colSpan={2}></th>

            <th colSpan={2}>जमाबंदी सुरु केल्याचे वर्ष</th>
            <th colSpan={3}> 0</th>
          </tr>
          <tr style={{ textAlign: 'left' }}>
            <th colSpan={2}>कोरडवाहू</th>
            {/* <th colSpan={2}>{this.props.dryRate}</th> */}
            <th colSpan={2}>0</th>

            <th colSpan={2}>जमाबंदी मुदत संपल्याचे वर्ष</th>
            {/* <th colSpan={3}>{this.props.settlementExpiry}</th> */}
            <th colSpan={3}>0</th>
          </tr>
          <tr style={{ textAlign: 'left' }}>
            <th colSpan={2}>बागायत</th>
            {/* <th colSpan={2}>{this.props.gardenRate}</th> */}
            <th colSpan={2}>0</th>

            {/* <th colSpan={2}> */}
            <th colSpan={2}>सर्वेक्षण गट</th>
            {/* <th colSpan={3}>{this.props.surveyGroup}</th> */}
            <th colSpan={3}>0</th>
          </tr>
          <tr style={{ textAlign: 'left' }}>
            <th colSpan={2}>भात</th>
            {/* <th colSpan={2}>{this.props.riceRate}</th> */}
            <th colSpan={2}>0</th>

            <th colSpan={2}></th>
            <th colSpan={3}></th>
          </tr>
          <tr style={{ textAlign: 'left' }}>
            <th colSpan={2}>वरकस व इतर</th>
            {/* <th colSpan={2}> {this.props.warkasRate}</th> */}
            <th colSpan={2}> 0</th>

            <th colSpan={2}>हप्त्याचा दिनांक</th>
            {/* <th colSpan={3}> {this.props.dateInstallment}</th> */}
            <th colSpan={3}>0</th>
          </tr>
          <tr style={{ height: '20px' }}>
            <th colSpan={4}></th>
            <th colSpan={6}></th>
          </tr>
          <tr>
            {/* <th>{<FormattedMessage id="villageForm.form.srno" />}</th> */}
            <th>भूमापन क्रमांक</th>
            <th>धारणा प्रकार</th>
            <th>एकूण क्षेत्र</th>
            <th colSpan={2}>वजा-लागवड अयोग्य बिनआकारी किंवा लागवडीसाठी अनुपलब्ध</th>
            <th>निव्वळ लागवड योग्य क्षेत्र</th>
            <th>कृषिक आकारणी</th>
          </tr>
          <tr>
            {/* <th></th> */}
            <th></th>
            <th></th>
            <th></th>
            <th>प्रकार</th>
            <th>क्षेत्र</th>
            <th></th>
            <th></th>
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
          <tr>
            <th></th>
            <th></th>
            <th>हे.आर.चौमी</th>
            <th></th>
            <th>हे.आर.चौमी</th>
            <th>हे.आर.चौमी</th>
            <th>रु.पैसे</th>
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
              <>
                <tr>
                  {/* <td>{r.srNo}</td> */}
                  <td>{r.surveyHissaNo}</td>
                  <td>{r.tenureName}</td>
                  <td>
                    {r.totalAreaH
                      .substring(0, r.totalAreaH.length - 2)
                      .concat('.')
                      .concat(r.totalAreaH.substring(r.totalAreaH.length - 2))}
                  </td>
                  <td>{r.potkharabaType}</td>
                  <td>
                    {r.cultivableAreaInt
                      .substring(0, r.cultivableAreaInt.length - 2)
                      .concat('.')
                      .concat(r.cultivableAreaInt.substring(r.cultivableAreaInt.length - 2))}
                  </td>
                  <td>
                    {r.netCultiAreaH
                      .substring(0, r.netCultiAreaH.length - 2)
                      .concat('.')
                      .concat(r.netCultiAreaH.substring(r.netCultiAreaH.length - 2))}
                  </td>
                  <td>{r.assessment}</td>
                </tr>
              </>
            ))}
          <tr colSpan="10">
            <td>
              <b>एकूण</b>
            </td>
            {/* <td></td> */}
            <td></td>
            <td>
              <b>{totalAreaOfAll}</b>
            </td>
            <td></td>
            <td>
              <b>{totalPotkharabOfAll}</b>
            </td>
            <td>
              <b>{totalNetCultiAreaOfAll}</b>
            </td>
            <td>
              <b>{prevAssessment.toFixed(2)}</b>
            </td>
          </tr>

          {/*------------------------- newly added-------------------- */}

          <tr style={{ height: '20px' }}>
            <td colSpan={5}></td>
            <td colSpan={7}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>गावठाण </b>
            </td>
            <td>
              {/* <b>{this.props.villageSite}</b> */}
              <b></b>
            </td>
            <td>{/*  <b>गावठाण </b> */}</td>
            <td>
              {/* <b>{this.props.villageSite}</b> */}
              <b></b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>नद्या </b>
            </td>
            <td>
              {/* <b>{this.river}</b> */}
              <b></b>
            </td>
            <td>
              <b>नद्या </b>
            </td>
            <td>
              {/* <b>{this.river}</b> */}
              <b></b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>नाले </b>
            </td>
            <td>
              {/* <b>{this.nalas}</b> */}
              <b></b>
            </td>
            <td>
              <b>नाले </b>
            </td>
            <td>
              {/* <b>{this.nalas}</b> */}
              <b></b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>रस्ते</b>
            </td>
            <td>
              {/* <b>{this.roadAndPath}</b> */}
              <b></b>
            </td>
            <td>
              <b>रस्ते</b>
            </td>
            <td>
              {/* <b>{this.roadAndPath}</b> */}
              <b></b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>भूमापन क्रमांक खेरीज एकूण क्षेत्र</b>
            </td>
            <td>
              {/* <b>{this.totalForArea}</b> */}
              <b></b>
            </td>
            <td></td>
            <td>
              {/* <b>{this.totalForArea}</b> */}
              <b></b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>गावठाणाबाहेरील एकूण </b>
            </td>
            <td>
              {/* <b>{this.additionOfTotalArea}</b> */}
              <b></b>
            </td>
            <td></td>
            <td>
              {/* <b>{this.additionOfTotalPotkharaba}</b> */}
              <b></b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>गावठाण एकूण </b>
            </td>
            <td>
              {/* <b>{this.props.villageSite}</b> */}
              <b></b>
              {/* </td> */}
            </td>
            <td></td>
            <td>
              {/* <b>{this.props.villageSite}</b> */}
              <b></b>
            </td>
            <td>{/* <b>{this.props.netCultiArea}</b> */}</td>
            <td>{/* <b>{this.props.netAssessment}</b> */}</td>

            <td colSpan={8}></td>
          </tr>
          <tr colSpan="11">
            <td>
              {/* <b>
                      <FormattedMessage id="formLanguage.form.total" />
                    </b> */}
            </td>
            <td>
              <b>गावाची एकूण बेरीज </b>
            </td>
            <td>
              <b>{totalArea}</b>
            </td>
            <td></td>
            <td>
              <b>{totalPotkharabOfAll}</b>
            </td>
            <td>
              <b>{netCultiArea}</b>
            </td>
            <td>
              <b>{netAssessment}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default VillageForm1ODCTable
