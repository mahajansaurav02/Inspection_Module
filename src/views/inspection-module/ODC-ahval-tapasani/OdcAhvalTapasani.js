import React, { useState } from 'react'
import './OdcAhvalTapasani.css'
import { CRow, CCol, CBadge } from '@coreui/react'

const odcData = [
  {
    id: 1,
    name: 'अहवाल १ ',
    remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. गाव नमुना ७ वरील एकुण क्षेत्र व ७/१२ वरील खात्यांच्या एकुण क्षेत्रांचा मेळ बसत नाहीत असे भूमापन क्रमांक (DSD प्रतिबंधित) आहेत.  अहवाल १ ची दुरुस्ती महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे यथास्थिती कलम १५५/२५७ प्रमाणे आदेश पारित करून फेरफार ने नमूद दुरुस्ती  ही  ३ महिन्याच्या कालमर्यादेत पूर्ण करून घ्यावी",
    description: 'गाव नमुना ७ वरील एकुण क्षेत्र व ७/१२ वरील खात्यांच्या एकुण क्षेत्रांचा फ़रक.',
    date: '15/03/2023',
    status: 'Completed',
    surveys: 12,
    ahvalImg:'/ahval11.jpg'
  },
  { id: 2, name: 'अहवाल १ अ',ahvalImg:'/ahval1A.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. गाव नमुना ७ वरील एकुण क्षेत्र व ७/१२ वरील खात्यांच्या एकुण क्षेत्रांची तफावत दिड पट किंवा त्यापेक्षा जास्त असेल असे ७/१२ (अहवाल १ मधीलच) दर्शविले आहेत. अशा ७/१२ वर कोणताही फेरफार किंवा दस्त नोंदणी होणार नसल्याने असे ७/१२ दुरुस्ती करण्याची कार्यवाही तात्काळ चालू करावी. सदर दुरुस्ती महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे यथास्थिती कलम १५५/२५७ प्रमाणे आदेश पारित करून नमूद दुरुस्ती  ही  ३ महिन्याच्या कालमर्यादेत पूर्ण करून घ्यावी." ,description:"गाव नमुना ७ वरील एकुण क्षेत्र व ७/१२ वरील खात्यांच्या एकुण क्षेत्रांचा दिड पट पेक्षा जास्त फ़रक असलेले सर्व्हे क्रमांक (DSD प्रतिबंधित)" , date: '22/04/2023', status: 'In Progress', surveys: 8 },
  { id: 3, name: 'अहवाल ३ ' ,ahvalImg:'/ahval3.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. आकारबंद भरलेला नाही किंवा चुकीच्या पद्धतीने भरला आहे असे सर्वे या अहवालात दाखविले आहेत. आकारबंद प्रमाणे ७/१२ चे क्षेत्र योग्य आहे किंवा नाही याची तपासणी करावी. अहवाल ३ च्या दुरुस्तीसाठी ODC मधील दुरुस्ती सुविधा क्रमांक ३ वापरावी. या दुरुस्ती ला तहसीलदार/नायब तहसीलदार ई–फेरफार यांच्या UC लॉगीन ने मान्यता देताना गावाच्या आकारबंदाची प्रत पाहून मान्यता देऊन नमूद दुरुस्ती ही  १  महिन्याच्या कालमर्यादेत पूर्ण करून घ्यावी." ,description:"गाव नमुना १ व गाव नमुना ७ मधील क्षेत्रांचा फ़रक.", date: '05/05/2023', status: 'Pending', surveys: 5 },
  { id: 4, name: 'अहवाल ६ ' ,ahvalImg:'/Ahval6.jpg' ,remark:"या अहवाल मध्ये ----- इतकी खाती आहेत . हा अहवाल निरंक होणे आवश्यक नसले तरीही या अहवालात व्यक्तिगत, समाईक अथवा संयुक्त खात्यातील व्यक्तींची नावे दिसून येत आहेत. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत आदेश पारित करून व्यक्तींची नावे प्रथम नाव मधले नाव व आडनाव अशी दुरुस्ती १ महिन्याच्या आत पूर्ण करावी." ,description:"चुकीच्या पद्धतीने भरलेली खातेदारांची नावे.", date: '12/05/2023', status: 'Pending', surveys: 4 },
  { id: 5, name: 'अहवाल ८ ' ,ahvalImg:'/ahval7.jpg'  ,remark:"या अहवाल मध्ये ----- इतकी खाती आहेत. सदर अहवाल तात्काळ दुरुस्त करावा. ODC मधील दुरुस्ती सुविधा ८ -शून्य फेरफार क्रमांक दुरुस्ती पर्याय वापरुन व्यक्तीच्या नावा समोर योग्य फेरफार क्रमांक नमूद करून दुरुस्त करा. " ,description:"फ़ेरफ़ार क्र. नसलेल्या कब्जेदारांची नावे. (फेरफार क्रमांक ०) (DSD प्रतिबंधित)", date: '11/05/2023', status: 'Completed', surveys: 3 },
  { id: 6, name: 'अहवाल १०' ,ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत . ई- फेरफार आज्ञावली कलम १५५ च्या आदेशाने अहवाल १ ची दुरुस्ती करणे द्वारे खातेदाराच्या नावासमोरील आणेवारीचे क्षेत्रात रूपांतर करण्यात यावे. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत आदेश पारित करून ही दुरुस्ती १ महिन्याच्या आत पूर्ण करावी." ,description:"१६ आणे हून जास्त आणेवारी असलेले सर्व्हे क्र.", date: '09/05/2023', status: 'Pending', surveys: 12 },
  { id: 7, name: 'अहवाल ११' ,ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. ई-फेरफार आज्ञावली मधून कलम १५५ च्या आदेशाने इतर अधिकारातील नोंदीचा प्रकार उपप्रकार बदलणे या पर्यायाचा वापर करावा व दुरुस्ती करून घ्यावी. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत आदेश पारित करून अशी दुरुस्ती १ महिन्याच्या आत पूर्ण करावी." ,description:"इतर आधिकारात नोंदीचा प्रकार निवडलेला नाही. (DSD प्रतिबंधित)", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 8, name: 'अहवाल १२' ,ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. ई-फेरफार आज्ञावली मधून कलम १५५ च्या आदेशाने फेरफार क्रमांकाची दुरुस्ती या पर्यायाचा वापर करावा व दुरुस्ती करून घ्यावी. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत आदेश पारित करून योग्य फेरफार क्रमांक नमूद करण्याची दुरुस्ती १ महिन्याच्या आत पूर्ण करावी " ,description:"फ़ेरफ़ार क्र.नसलेल्या इतर अधिकारांच्या नोंदी. (फेरफार क्रमांक 0) (DSD प्रतिबंधित)", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 9, name: 'अहवाल १३' ,ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. भूधारणा पध्दती निवडण्यात आली नाही असा भूमापन क्रमांक ई-फेरफार आज्ञावली मधील १५५ च्या आदेशाने चुकीची भूधारणा दुरुस्त करणे फेरफारने योग्य भूधारणा निवडून दुरुस्त करा. ही दुरुस्ती केल्या शिवाय असे ७/१२ डिजिटल स्वाक्षरीत करता येणार नाहीत. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत आदेश पारित करून योग्य भूधारणा नमूद करण्याची दुरुस्ती १ महिन्याच्या आत पूर्ण करावी" ,description:"भुधारणा पद्धती साठी प्रकार निवडलेला नाही. (DSD प्रतिबंधित)", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 10, name:'अहवाल १५' ,ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतकी खाती आहेत. सदर अहवाल तात्काळ दुरुस्त करावा. ODC मधील दुरुस्ती पर्याय क्रमांक १५ निरंक अथवा ‘-‘ अथवा ‘0’ अथवा ‘TKN’ असलेले खाता क्रमांक दुरुस्ती सुविधा वापरा. केलेल्या दुरुस्तीस मान्यता देऊन अहवाल निरंक करा. " ,description:"निरंक अथवा 0 अथवा TKN असलेले खाते- ", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 11, name:'अहवाल १६' ,ahvalImg:'/ahval11.jpg'  ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. यातील नमूद निरंक ७/१२ योग्य आणि अस्तित्वात असल्यास ई-फेरफार आज्ञावलीमधील “आदेश दस्तावेज”  हा पर्याय वापरून आवश्यक खाते समाविष्ट करा.  जर हा निरंक सातबारा काढून टाकायचा असल्यास अहवाल क्र.१६ ची दुरुस्ती पर्याय वापरून हा ७/१२ नष्ट करावा. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत आदेश पारित करून ही  दुरुस्ती १ महिन्याच्या आत पूर्ण करावी." ,description:"खातेदार नसलेले ७/१२  ची यादी. (DSD प्रतिबंधित)", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 12, name: 'अहवाल १८',ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतकी खाती आहेत. ई-फेरफार आज्ञावली मधील आदेशाने ७/१२ वरील क्षेत्राची दुरुस्ती फेरफार द्वारे खातेदारांच्या नावा समोरील क्षेत्र सामूहिकरीत्या (फक्त एक नावा समोरील ) नमूद करावे अथवा सर्व नावांसमोर (०% अथवा १००% क्षेत्र नमूद करणे) क्षेत्र नमूद करणे आवश्यक आहे.  महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत आदेश पारित करून  ही  दुरुस्ती १ महिन्याच्या आत पूर्ण करावी."  ,description:"सामाईक खात्यामधील नावांचे क्षेत्र 0% अथवा 100% नसलेल्या खातेदारांची यादी.", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 13, name: 'अहवाल १९',ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतकी खाती आहेत. ई-फेरफार आज्ञावली मधील आवश्यकते प्रमाणे आदेशाने ७/१२ वरील क्षेत्राची दुरुस्ती/आदेशाने अहवाल १ ची दुरुस्ती  फेरफार घेऊन खातेदाराच्या नावासमोरील आणेवारीचे क्षेत्रात रूपांतर करा.  महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५ अंतर्गत क्षेत्र  रूपांतरणाचे आदेश पारित करून  ही  दुरुस्ती १ महिन्याच्या आत पूर्ण करावी."   ,description:"सर्वे निहाय आणेवारी असलेल्या खातेदारांची यादी - (DSD प्रतिबंधित)", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 14, name: 'अहवाल २१',ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. १)७/१२ वरील एकक दुरुस्ती अपेक्षित असल्यास एकका प्रमाणे क्षेत्र दुरुस्त करून घ्या. त्या नंतर एकक दुरुस्ती करिता आवश्यकते प्रमाणे बिनशेती आदेश (एन. ए)/ बिनशेती आदेश रद्द फेरफार ने दुरुस्ती करा. २)  ७/१२ वरील एकक योग्य असल्यास क्षेत्र दुरुस्ती (शेती) अथवा क्षेत्र दुरुस्ती (एन.ए) ७/१२ या फेरफार द्वारे योग्य त्या दुरुस्त्या कराव्यात. ३)  क्षेत्र बरोबर आहे आणि एकक सुद्धा बरोबर आहे परंतु क्षेत्र चुकीच्या ठिकाणी लिहिले आहे उदा. एकक आर. चो.मी. आणि क्षेत्र जिरायत मध्ये लिहिले आहे तर या साठी कलम १५५ च्या आदेशाने क्षेत्र दुरुस्ती फेरफार घ्यावा आणि क्षेत्र बिनशेती मध्ये लिहावे. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५/२५७ अंतर्गत आदेश पारित करून ही  दुरुस्ती १ महिन्याच्या आत पूर्ण करावी"  ,description:"७/१२ वरील एकूण क्षेत्र व क्षेत्राचे एकक यामध्ये तफावत असलेले सर्व्हे क्र.-(DSD प्रतिबंधित)", date: '22/05/2023', status: 'In Progress', surveys: 8 },
  { id: 15, name: 'अहवाल २२',ahvalImg:'/ahval11.jpg' ,remark:"या अहवाल मध्ये ----- इतके भूमापन क्रमांक आहेत. यातील खाते अनावश्यक असलेस ई-फेरफार आज्ञावली मधून कलम १५५ च्या आदेशाने खाता दुरुस्ती फेरफार घेऊन खाते क्रमांक वगळणे ही सुविधा वापरून दुरुस्त करा.  परंतु खाते आवश्यक असल्यास आदेशाने ७/१२ वरील क्षेत्र दुरुस्ती फेरफार क्षेत्र दुरुती करून घ्यावे. महाराष्ट्र जमीन महसूल अधिनियम १९६६ चे कलम १५५/२५७ अंतर्गत आदेश पारित करून  ही  दुरुस्ती १ महिन्याच्या आत पूर्ण करावी."  ,description:"शून्य क्षेत्र असलेले ७/१२ वरील चालू खाता क्रमांक.-(DSD प्रतिबंधित)", date: '22/05/2023', status: 'In Progress', surveys: 8 },

]



const tipsData = {
  1: 'Verify all measurements before submission. Check for boundary discrepancies.',
  2: 'Pending surveys need field validation. Priority level: Medium',
  4: 'New surveys added. Coordinate with field team for verification.',
  5: 'New surveys added. Coordinate with field team for verification.',
  3: 'New surveys added. Coordinate with field team for verification.',
  6: 'New surveys added. Coordinate with field team for verification.',
  7: 'New surveys added. Coordinate with field team for verification.',
}

function OdcAhvalTapasani() {
  const [selectedOdc, setSelectedOdc] = useState(null)
  const [isChecked, setIsChecked] = useState(false)
  const [showFullImage, setShowFullImage] = useState(false)

  const handleCheckChange = () => {
    setIsChecked(!isChecked) // Add your agreement submission logic here
  }
  const handleAgreementClick = () => {
    alert('आपली सहमती नोंदवण्यात आली आहे. धन्यवाद!')
    // Add your agreement submission logic here
  }
  return (
    <div className="odc-container">
      <div className="mb-4">
        <CRow className="align-items-center">
          <CCol md={6}>
            <h1 className="header-odc mb-0">ODC अहवाल तपासणी</h1>
          </CCol>
          <CCol md={6} className="text-end">
            <div className="kalavadhi-design-2">
              <div className="kalavadhi-traditional">
                <div className="kalavadhi-label">कलावधी</div>
                <div className="kalavadhi-date">१ ऑगस्ट २०२४ ते ३१ जुलै २०२५ </div>
              </div>
            </div>
          </CCol>
        </CRow>
        <hr className="mt-2 border-primary border-2 opacity-50" />
      </div>{' '}
      <h5 className="header-2">
        दि. {'12-06-2025'} पर्यन्त सदर गावात खालील प्रमाणे अहवाल प्रलंबित आहेत .{' '}
      </h5>
      <div className="content-grid">
        {/* ODC Boxes Section - Left Side */}
        <div className="section">
  <h2>ODC Records</h2>
  <div className="boxes-grid-container">
    <div className="boxes-grid">
      {odcData.map((odc) => (
        <div
          key={odc.id}
          className={`odc-box ${selectedOdc?.id === odc.id ? 'selected' : ''}`}
          onClick={() => setSelectedOdc(odc)}
        >
          <div className="odc-name">{odc.name}</div>
          <div className="odc-date">{odc.date}</div>
          <div className={`odc-status ${odc.status.toLowerCase().replace(' ', '-')}`}>
            {odc.status}
          </div>
          <div className="odc-surveys">{odc.surveys} Surveys</div>
        </div>
      ))}
    </div>
  </div>

  {/* Fixed footer content */}
  <div className="footer-content">
    {/* Non-editable Remarks Section with Checkbox */}
    <div className="remarks-section">
      <h3>अभिप्राय</h3>
      <div className="remarks-content">
        <p style={{ marginBottom: '10px' }}>
          <input
            type="checkbox"
            id="surveyVerification"
            name="surveyVerification"
            style={{ marginRight: '8px' }}
          />
          सर्व अभिप्रायांशी सहमत असून दप्तर तपासणी अहवालात समाविष्ट करावे .
        </p>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="action-buttons">
      <button className="preview-btn">Preview</button>
      <button className="post-btn">Post</button>
    </div>
  </div>
</div>

        {/* Right Side - Survey Numbers and Tips */}
        <div className="right-section">
          {/* Image Section with Zoom */}
          <div className="section">
            <h2>{selectedOdc && `(${selectedOdc.name})-${selectedOdc.description})`}</h2>
            <div className="image-preview-container">
              {selectedOdc ? (
                selectedOdc ? (
                  <div className="image-wrapper">
                    <img
                      src={selectedOdc.ahvalImg}
                      alt={`Survey for ODC-${selectedOdc}`}
                      className="thumbnail-image"
                    />
                    <button className="zoom-button" onClick={() => setShowFullImage(true)}>
                      <i className="eye-icon">👁️</i>
                    </button>
                  </div>
                ) : (
                  <div className="no-data">या ODC साठी कोणतीही प्रतिमा उपलब्ध नाही</div>
                )
              ) : (
                <div className="no-data">प्रतिमा पाहण्यासाठी ODC निवडा</div>
              )}
            </div>

            {/* Full Image Modal */}
            {showFullImage && (
              <div className="image-modal" onClick={() => setShowFullImage(false)}>
                <div className="modal-content">
                  <img src={selectedOdc.ahvalImg} alt={`Full Survey for ODC-${selectedOdc}`} />
                  <button className="close-button" onClick={() => setShowFullImage(false)}>
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Tips Section */}
            <div className="tips-section">
              <h3>Tooltips</h3>
              <div className="tips-content">
                {selectedOdc ? (
                  tipsData[selectedOdc] ? (
                    <p>{tipsData[selectedOdc]}</p>
                  ) : (
                    <p>No tips available for this ODC</p>
                  )
                ) : (
                  <p>Select an ODC to view relevant tips</p>
                )}
              </div>
            </div>

            {selectedOdc ? (
              <div className="remarks-section">
                <h3>अभिप्राय </h3>
                <div className="remarks-content">
                  <p>
                    <input
                      style={{ marginRight: '5px' }}
                      type="checkbox"
                      id="surveyCheck"
                      name="surveyCheck"
                      checked={isChecked}
                      onChange={handleCheckChange}
                    />
                    <label htmlFor="surveyCheck">
                      {selectedOdc.remark}
                    </label>
                  </p>
                </div>
              </div>
            ) : (
              <h3></h3>
            )}

            <div className="agreement-section">
              <button
                className="agreement-button"
                onClick={handleAgreementClick}
                disabled={!selectedOdc}
              >
                अभिप्राय सहमतीसाठी येथे क्लिक करावे
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OdcAhvalTapasani
