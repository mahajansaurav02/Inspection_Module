import React, { useCallback, useEffect, useState } from 'react'
import styles from './villageform1a.module.css'
import URLS from 'src/URLS'
import axios from 'axios'
import reqHeaders from 'src/instance/headers'
import { Toast, errorToast, infoToast, successToast } from 'src/views/ui/Toast'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormLabel,
  CRow,
} from '@coreui/react'

const districtCode = localStorage.getItem('districtCode')
const talukaCode = localStorage.getItem('talukaCode')
const codeVillage = JSON.parse(localStorage.getItem('villageData'))[0].cCode
const districtName = localStorage.getItem('districtName')
const talukaName = localStorage.getItem('talukaName')
const villageName = JSON.parse(localStorage.getItem('villageData'))[0].villageName

const VillageForm5Table = () => {
  const [tableData, setTableData] = useState()

  return (
    <>
      <Toast position="top-center" autoClose={2500} />
      <table className={styles.report_table}>
        <thead>
          <tr style={{ CColor: 'red' }}>
            <th colSpan="11">
              <b>गाव नमुना पाच</b>
            </th>
          </tr>
          <tr style={{ CColor: 'red' }}>
            <th colSpan="11">
              <b>
                क्षेत्र आणि महसूल यांचा सर्वसाधारण गोषवारा ( ठरावबंद - किस्तबंदी खतावणी जमाबंदी
                पत्रक )
              </b>
            </th>
          </tr>

          <tr style={{ CColor: 'red' }}>
            <th colSpan="11">
              <pre>
                {' '}
                <b>
                  <pre>
                    <b>
                      गाव- {villageName} &nbsp; तालुका- {talukaName} &nbsp; जिल्हा- {districtName}
                    </b>
                  </pre>
                </b>
              </pre>
            </th>
          </tr>

          <tr>
            <th rowSpan={2}>अनुक्रमांक</th>
            <th rowSpan={2}>बाबीचे वर्णन</th>
            <th colSpan={2}>मागिल वर्ष</th>

            <th colSpan={2}>चालु वर्षी</th>
            <th colSpan={2}>घट</th>
            <th colSpan={2}>वाढ</th>
            <th rowSpan={2}>घट व वाढ यांच्या कारणासंबंधी शेरा</th>
          </tr>
          <tr>
            <th>हे.आर.चौमी</th>
            <th>रु. पै.</th>
            <th>हे.आर.चौमी</th>
            <th>रु. पै.</th>
            <th>हे.आर.चौमी</th>
            <th>रु. पै.</th>
            <th>हे.आर.चौमी</th>
            <th>रु. पै.</th>
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
          <tr>
            <td>1</td>
            <td style={{ CColor: 'red' }}>
              <b>गाव नमुना एक प्रमाणे एकुण क्षेत्र व आकारणी</b>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>2</td>
            <td>
              <b>अधिक आकारणी पेक्षा जास्त असलेली जुडी (असल्यास)</b>
              &nbsp; वजा नियत कृषी अकारणीपेक्षा वेगळा महसुल भरणा-या जमीनीची क्षेत्र व आकारणी
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>3</td>
            <td>
              <b>अ. बिनआकारी लागवड योग्य</b>
              &nbsp; गोषवारा याचा अ-दोन(अ)
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <b style={{ CColor: 'red' }}>
                ब. लागवड अयोग्य
                <br />
              </b>
              <b> (गाव नमुना एक गोषवारा याचा ब-एक)</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <b style={{ CColor: 'red' }}>क. बिनभोगवटयाची आकारी</b>
              <b>गाव नमुना एक गोषवारा याचा अ-एक (ब)</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <b style={{ CColor: 'red' }}>
                ड. विशेष किंवा सार्वजनिक प्रयोजनार्थ राखून ठेवलेली <br />
              </b>
              <b>गाव नमुना एक गोषवारा याचा ब-दोन वजा ब-दोन(अ)</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <b style={{ CColor: 'red' }}>
                इ. वन <br />
              </b>
              <b> (गांव नमुना एक गोषवारा याचा ब-दोन (अ))</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <b style={{ CColor: 'red' }}>इ. वन</b>
              <br />
              <b>(गांव नमुना एक गोषवारा याचा ब-दोन (अ))</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td style={{ CColor: 'red' }}>
              <b>अकृषीक जमीनीचे क्षेत्र व महसुल</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>1. निवासविषयक</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>2. औद्योगिक</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>3. वाणिज्यिक</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>4. इतर कोणतेही प्रयोजन</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <b>5. एकूण ( गाव नमुना दोन (ब))</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td style={{ CColor: 'red' }}>
              <b>ग. दुमाला गाव नमुना तीन</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              ह. विशेष करारान्वये महसुलमाफ किंवा कमआकारी जमीन <br />
              <b>(गाव नमुना एक गोषवारा याचा अ-एक(क))</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <b>ज. एकुण (वरील अ+ब+क+ड+इ+फ(5)+ग+ह)</b>
            </td>
            <td /> <td />
            <td />
            <td /> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>4</td>
            <td>
              <b style={{ CColor: 'red' }}>उरलेली (म्हणजेच 1 वजा 3 ज) आकारणी</b>
              <br />
              देणारी भोगवटयाची लागवडयोग्य जमीन &nbsp;
              <b>(गाव नमुना एक गोषवारा याचा अ-एक(अ))</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>यात पुढील प्रकारच्या जमीनीचा समावेश होतो :</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>अ. भोगवटादार वर्ग एक</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ब. भोगवटादार वर्ग दोन</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>क. सरकारी पट्टेदार</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>5</td>
            <td>
              <b>अधिक</b>
              &nbsp; नियत कृषी अकारणीपेक्षा वेगळा महसुल देणा-या शेतजमीनीचे क्षेत्र व महसुल
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td style={{ CColor: 'red' }}>
              <b>अ-- जुडीसह दुमाला जमीनी (गाव नमुना तीन )</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <b>
                ब-- विशेष करारान्वये महसुल माफ किंवा कम आकारी जमीन ( गाव नमुना एक गोषवारा याचा
                अ-एक(क))
              </b>
              &nbsp;
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td style={{ CColor: 'orange' }}>
              <b>क-- एकूण वरील अ+ब</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>6</td>
            <td style={{ CColor: 'red' }}>
              <b>एकूण कृषी क्षेत्र आणि निव्वळ महसुल (4+5क)</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>7</td>
            <td>
              <b>अधिक </b>
              &nbsp;
              <b>अकृषीक जमीनीचे क्षेत्र व महसुल</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>अ-- गावठातील (गाव नमुना दोन (अ))</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <b>ब-- गावठाणाबाहेरील (गाव नमुना दोन (ब))</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <b style={{ CColor: 'red' }}> क-- वजा</b>
              &nbsp;
              <b>
                (दुमाला अकृषीक जमीनीवरील नुकसान गाव नमुना तीन वर्ग सात )(दुमालादाराकडील शिल्लक किंवा
                नुकसान)
              </b>
            </td>
            <td style={{ CColor: 'red' }}>
              बिनशेती डिमांड
              <br /> कन्सल
            </td>{' '}
            <td></td>
            <td style={{ CColor: 'red' }}>
              बिनशेती डिमांड <br />
              कन्सल
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td style={{ CColor: 'red' }}>
              <b>ड-- एकुण महसुल (वरील अ+ब +क)</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td>8</td>
            <td>
              <b>एकूण नियत महसूल ( 6-अ+7-ड )</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>9</td>
            <td>
              <b>अधिक</b>
              &nbsp;
              <b>संकिर्ण जमीन महसुल ( गाव नमुना चार गोषवारा)</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>अ-स्थानिक उपकर असलेल्या बाबीवरील</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td>ब-स्थानिक उपकर नसलेल्या बाबीवरील</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
          <tr>
            <td></td>
            <td style={{ CColor: 'red' }}>
              <b>क-वरील अ आणि ब यांची बेरीज</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>10</td>
            <td>
              <b>एकूण वसुली योग्य जमीन महसुल (8+9-क)</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>11</td>
            <td>
              <b>अधिक </b>
              &nbsp;
              <b>स्थानिक उपकर</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>अ-नियत महसुलावरील ( गाव नमुना आठ-ब)</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>ब-संकिर्ण महसुलावरील (गाव नमुना चार गोषवारा )</td>
            <td>जि.प.</td> <td></td>
            <td>जि.प.</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td>ग्रा.पं.</td> <td></td>
            <td>ग्रा.पं.</td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td style={{ CColor: 'red' }}>
              <b>क-गाव नमुना आठ-ब शी तुलना करता पैशांच्या अंशभागामुळे झालेला फरक</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td></td>
            <td>
              <b>ड-वरील अ ते क यांची बेरीज</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>

          <tr>
            <td>12</td>
            <td>
              <b>क्षेत्र आणि एकत्रित जमीन महसुल यांची एकूण बेरीज ( 10 + 11 ड )</b>
            </td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td>
            <td></td>
            <td></td> <td></td> <td></td>
          </tr>
        </tbody>
        {/* <tfoot> */}
        <tr>
          <td colSpan={11}>
            <CRow>
              <CCol span={7}>तपासले</CCol>
              <CCol span={1}></CCol>
              <CCol span={7}> लेखापरीक्षण केलेले .दिनांक / /</CCol>
            </CRow>

            <CRow>
              <CCol span={7}>
                <b>एस.बी.सानप</b>
              </CCol>
            </CRow>

            <CRow>
              <CCol span={7}>
                <b> तलाठी सजा</b>
              </CCol>
              <CCol span={1}></CCol>
              <CCol span={7}>
                {' '}
                <b>मंडळ अधिकारी</b>
              </CCol>
              <CCol span={1}></CCol>
              <CCol span={7}>
                {' '}
                <b>तहसिलदार</b>
              </CCol>
            </CRow>
          </td>
        </tr>
        {/* </tfoot> */}
      </table>
    </>
  )
}

export default VillageForm5Table
