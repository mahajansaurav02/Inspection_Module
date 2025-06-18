import React, { useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectState } from '../../../slices/InspectionSlice'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CCard,
} from '@coreui/react'
import './inspectionTable.css'
import { useReactToPrint } from 'react-to-print'

function InspectionTable({ visible, setVisible, modelData }) {
  const state = useSelector(selectState)
  const navigate = useNavigate()
  const componentRef = useRef()

  const handleEdit = () => {
    navigate('/reportstrial/auditForm')
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  console.info('state-->', state)
  return (
    <>
      <div>
        <CCard>
          {/* <CModal
          size="xl"
          alignment="center"
          visible={visible}
          onClose={() => setVisible(false)}
          aria-labelledby="VerticallyCenteredExample"
        >
          <CModalHeader>
            <CRow>
              <CModalTitle id="VerticallyCenteredExample">
                <h5>Id:{this.props.talathiId}</h5>
                <h5>Name:{this.props.talathiName}</h5>
                <h5>Village:{this.props.villageName}</h5>
              </CModalTitle>
            </CRow>{' '}
          </CModalHeader>
          <CModalBody> */}
          {/* <CButton color="info" shape="rounded-0" onClick={handlePrint} style={{ width: 60 }}>
            Print
          </CButton> */}

          <ComponentToPrint
            ref={componentRef}
            state={state}
            visible={visible}
            talathiId={modelData?.talathiId}
            talathiName={modelData?.talathiName}
            villageName={modelData?.villageName}
            que1a={state?.que1a}
            que1a1={state?.que1a1}
            que2={state?.que2}
            que3a={state?.que3a}
            que4a={state?.que4a}
            quea1={state?.que3a1}
            que4a1={state?.que4a1}
            que4a2={state?.que4a2}
            nondKramank={state?.que5?.nondKramank ? state?.que5?.nondKramank : '__'}
            kajapa={state?.que5?.kajapa ? state?.que5?.kajapa : '__'}
            akarfodPatrak={state?.que5?.akarfodPatrak ? state?.que5?.akarfodPatrak : '__'}
            kabulayat={state?.que5?.kabulayat ? state?.que5?.kabulayat : '__'}
            gaonNo7_12={state?.que5?.gaonNo7_12 ? state?.que5?.gaonNo7_12 : '__'}
            gaonNo1C={state?.que5?.gaonNo1C ? state?.que5?.gaonNo1C : '__'}
            gaonNo2={state?.que5?.gaonNo2 ? state?.que5?.gaonNo2 : '__'}
            gaonNo3={state?.que5?.gaonNo3 ? state?.que5?.gaonNo3 : '__'}
            que6={state?.que6}
            que7={state?.que7?.que7}
            goshwaraShetraQue7={
              state?.que7?.goshwaraShetraQue7 ? state?.que7?.goshwaraShetraQue7 : '__'
            }
            aakarQue7={state?.que7?.aakarQue7 ? state?.que7?.aakarQue7 : '__'}
            que8a={state?.que8a}
            que8a1={state?.que8a1}
            que8b={state?.que8b}
            que8c={state?.que8c}
            que8c1={state?.que8c1}
          />
        </CCard>
      </div>
    </>
  )
}

export default InspectionTable

class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <CCard>
          <div>
            <CModal
              size="xl"
              alignment="center"
              visible={this.props.visible}
              //onClose={() => setVisible(false)}
              aria-labelledby="VerticallyCenteredExample"
            >
              <CModalHeader>
                <CRow>
                  <CModalTitle id="VerticallyCenteredExample">
                    <h5>Id:{this.props.talathiId}</h5>
                    <h5>Name:{this.props.talathiName}</h5>
                    <h5>Village:{this.props.villageName}</h5>
                  </CModalTitle>
                </CRow>{' '}
              </CModalHeader>

              <CTable bordered style={{ textAlign: 'center' }}>
                <tbody>
                  {/*-------------------------------------------------------------Q.1----  */}
                  <tr>
                    <th colSpan={4}>
                      गाव नमुना १ (जमिनींची नोंदवही (आफारबंद) मुदत- जमाबंदीचा कालावधी.
                    </th>
                  </tr>
                  <tr>
                    <th className="th-wrap">1 a</th>
                    <td colSpan={2}>गा.न.क्र.१ (आकारबंद) दप्तरी ठेवण्यात आलेला आहे काय?</td>
                    <td>{this.props?.que1a}</td>
                  </tr>
                  <tr>
                    <th className="th-wrap">1 a.1</th>
                    <td colSpan={2}>असल्यास त्यात घेतलेल्या नोंदी बरोबर आहेत का?</td>
                    <td>{this.props.que1a1}</td>
                  </tr>
                  {/*-------------------------------------------------------------Q.2----  */}
                  <tr>
                    <th>2</th>
                    <td colSpan={2}>
                      जिल्हा अधिक्षक भूमी अभिलेख यांचेकडून आलेली पोटहिस्सा आणि कम-जास्ती पत्रके
                      दप्तरी उपलब्ध आहेत काय ?
                    </td>
                    <td>{this.props.que2}</td>
                  </tr>
                  {/*-------------------------------------------------------------Q.3----  */}
                  <tr>
                    <th>3 a</th>
                    <td colSpan={2}>
                      आलेल्या पोटहिस्सा आणि कम-जास्ती पत्रकांच्या आधारे योग्य तो दुरुस्ती गा.न.क्र.१
                      मध्ये करण्यात आली आहे काय ?
                    </td>
                    <td>{this.props.que3a}</td>
                  </tr>
                  <tr>
                    <th className="th-wrap">3 a.1</th>
                    <td colSpan={2}>ते पाहिले का ?</td>
                    <td>{this.props.que3a1}</td>
                  </tr>
                  {/*-------------------------------------------------------------Q.4----  */}
                  <tr>
                    <th>4 a</th>
                    <td colSpan={2}>गा.न.क्र.१ चा गोषवारा मागील वर्षाकरीता तयार केलेला आहे का ?</td>
                    <td>{this.props.que4a}</td>
                  </tr>
                  <tr>
                    <th className="th-wrap">4 a.1</th>
                    <td colSpan={2}>असल्यास तो परीपूर्ण आहे का ?</td>
                    <td>{this.props.que4a1}</td>
                  </tr>
                  <tr>
                    <th className="th-wrap">4 a.2</th>
                    <td colSpan={2}>त्यातील नोंदी गा.न.क्र.५ मधील नोंदीशी जुळतात का ?</td>
                    <td>{this.props.que4a2}</td>
                  </tr>
                  {/*-------------------------------------------------------------Q.5----  */}
                  <tr>
                    <th colSpan={4}>गाव नमुना- १ व गोषवारा</th>
                  </tr>
                  <tr>
                    <th rowSpan={8}>5</th>
                    <td rowSpan={8}>
                      गा.न.क्र. १ मधील दुरुस्त केलेल्या तीन नोंदी घ्या व त्यांच्या अनुषंगिक
                      नोंदीसाठी फ. क.जा.प., आकारफोड. पत्रक, कबुलायत, गा.न.क्र.७/१२, १ क. २ आणि ३
                      यांची तपासणी करा ?
                    </td>
                    <td>नोंद क्र.</td>
                    <td>{this.props.nondKramank}</td>
                  </tr>
                  <tr>
                    <td>कजाप</td>
                    <td>{this.props.kajapa}</td>
                  </tr>
                  <tr>
                    <td>आकारफोड पत्रक</td>
                    <td>{this.props.akarfodPatrak}</td>
                  </tr>
                  <tr>
                    <td>कबुलायत</td>
                    <td>{this.props.kabulayat}</td>
                  </tr>
                  <tr>
                    <td>गा.न.७/१२</td>
                    <td>{this.props.gaonNo7_12}</td>
                  </tr>
                  <tr>
                    <td>गा.न.१क</td>
                    <td>{this.props.gaonNo1C}</td>
                  </tr>
                  <tr>
                    <td>गा.न. २</td>
                    <td>{this.props.gaonNo2}</td>
                  </tr>
                  <tr>
                    <td>गा.न. ३</td>
                    <td>{this.props.gaonNo3}</td>
                  </tr>
                  {/*-------------------------------------------------------------Q.6----  */}
                  <tr>
                    <th>6</th>
                    <td colSpan={2}>
                      गा.न.क्र. १ मध्ये केलल्या दुरस्तीप्रमाणे गोषवान्वात दुरुस्ती केली आहे काय ?
                    </td>
                    <td>{this.props.que6}</td>
                  </tr>
                  {/*-------------------------------------------------------------Q.7----  */}
                  <tr>
                    <th rowSpan={this.props.que7 == 'होय' ? 3 : 1}>7</th>
                    <td colSpan={2}>
                      गोषवान्यातील क्षेत्र व आकार गावचे अंतिम कमी जास्त पत्रक, गा.न.क्र. १अ, श्व,
                      एक. २ आणि ३ मध्ये दर्शविलेले क्षेत्र व आकारणी बाबत जुळतात का ते पहा.
                    </td>
                    <td>{this.props.que7}</td>
                  </tr>
                  {this.props?.que7 == 'होय' && (
                    <>
                      <tr>
                        <td colSpan={1}></td>
                        <td>गोषवारा क्षेत्र...</td>
                        <td>{this.props.goshwaraShetraQue7}</td>
                      </tr>
                      <tr>
                        <td colSpan={1}></td>
                        <td>आकार ..</td>
                        <td>{this.props.aakarQue7}</td>
                      </tr>
                    </>
                  )}
                  {/*-------------------------------------------------------------Q.8----  */}
                  <tr>
                    <th colSpan={4}>गाव नमुना१ - अ ते ड(जमाबंदी कालावधी मात्र१ ई वार्षिक)</th>
                  </tr>
                  <tr>
                    <th>8 a</th>
                    <td colSpan={2}>गा.न.क्र.१अ ते१ ई ह्या नोंदवह्या तयार केलेल्या आहेत का ?</td>
                    <td>{this.props.que8a}</td>
                  </tr>
                  <tr>
                    <th>8 a.1</th>
                    <td colSpan={2}>असल्यास त्या परिपूर्ण आहेत का ?</td>
                    <td>{this.props.que8a1}</td>
                  </tr>
                  <tr>
                    <th>8 b</th>
                    <td colSpan={2}>पडताळणी क्षेत्रात तफावत आहे का ?</td>
                    <td>{this.props.que8b}</td>
                  </tr>
                  <tr>
                    <th>8 c</th>
                    <td colSpan={2}>नोंदणी झाली आहे का ?</td>
                    <td>{this.props.que8c}</td>
                  </tr>
                  <tr>
                    <th>8 c.1</th>
                    <td colSpan={2}>नोंदणी अद्यायावत झाली आहे का ?</td>
                    <td>{this.props.que8c1}</td>
                  </tr>
                </tbody>
              </CTable>

              {/* <CModalFooter>
            <CButton color="danger" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary" onClick={() => setVisible(false)}>
              Checked
            </CButton>
          </CModalFooter>  */}
            </CModal>
          </div>
        </CCard>
      </>
    )
  }
}
