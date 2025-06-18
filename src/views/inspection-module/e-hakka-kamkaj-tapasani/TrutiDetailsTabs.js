import React, { useState } from 'react';
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CButton,
  CFormTextarea,
  CCard,
  CCardBody,
  CSpinner,
  CAlert,
  CTooltip,
  CContainer,
  CRow,
  CCol
} from '@coreui/react';
import { 
  FaFilePdf, 
  FaFileAlt, 
  FaStickyNote, 
  FaFileSignature,
  FaCheckCircle,
  FaTimesCircle,
  FaDownload
} from 'react-icons/fa';
import { MdOutlineZoomIn } from 'react-icons/md';

const TrutiDetailsTabs = ({ ferfar }) => {
  const [activeKey, setActiveKey] = useState(1);
  const [remark, setRemark] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);


const [suggestedRemarks] = useState([
  "अपलोड केलेले दस्तऐवज नुसार सातबारा व अंमल योग्य आला आहे/ नाही",
  "फेरफार विहित मुदतीत प्रमाणित करण्यात आले आहे / नाही",
  "आदेशाची प्रमाणित प्रत अपलोड करण्यात आले आहे / नाही",
  "दस्ताऐवज नुसार फेरफार घेण्यात आलेला आहे/नाही",
  "अपलोड केलेले दस्तऐवज वाचण्यायोग्य आहे/नाही"
]);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setRemark('');
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

 const handleDownload = (type) => {
  console.log(`Downloading ${type} document`);

  // Define file paths and names based on document type
  let filePath, fileName;

  switch (type) {
    case '7/12':
      filePath = '/satbaaraa.pdf';
      fileName = '7-12-utara.pdf'; // Customize filename
      break;
    case 'ferfar':
      filePath = '/ferfar.png';
      fileName = 'ferfar-pavati.png'; // Customize filename
      break;
    case 'document':
      filePath = '/document_app.pdf';
      fileName = 'application-document.pdf'; // Customize filename
      break;
    default:
      console.error('Unknown document type');
      return;
  }

  // Create a temporary anchor tag to trigger download
  const link = document.createElement('a');
  link.href = filePath;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const handleZoom = (direction) => {
    setZoomLevel(prev => {
      const newLevel = direction === 'in' ? prev + 10 : prev - 10;
      return Math.max(50, Math.min(150, newLevel)); // Limit between 50% and 150%
    });
  };

  const tabStyle = (isActive) => ({
    fontWeight: 500,
    fontSize: '15px',
    padding: '10px 15px',
    backgroundColor: isActive ? '#eef2ff' : '#f8f9fa',
    borderBottom: isActive ? '3px solid #6366f1' : '3px solid transparent',
    color: isActive ? '#3730a3' : '#4b5563',
    borderRadius: '6px 6px 0 0',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '180px'
  });

  const documentControls = (
    <div className="d-flex justify-content-end gap-2 mb-3">
     
     <CTooltip content="Download Document">
  <CButton 
    color="primary" 
    size="sm" 
    onClick={() => {
      let documentType;
      if (activeKey === 1) documentType = '7/12';
      else if (activeKey === 2) documentType = 'ferfar';
      else if (activeKey === 3) documentType = 'document';
      handleDownload(documentType);
    }}
  >
    <FaDownload className="me-1" /> Download
  </CButton>
</CTooltip>
    </div>
  );

  return (
    <CCard className="shadow border-0 mt-4" style={{ backgroundColor: '#f0f4f8' }}>
      <CCardBody>
        <CNav variant="tabs" role="tablist" className="mb-3 flex-nowrap overflow-auto">
          <CNavItem className="me-2">
            <CNavLink
              style={tabStyle(activeKey === 1)}
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              <FaFilePdf className="me-2" /> ७/१२ पहा 
            </CNavLink>
          </CNavItem>
          <CNavItem className="me-2">
            <CNavLink
              style={tabStyle(activeKey === 2)}
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              <FaFileSignature className="me-2" /> अर्ज पहा 
            </CNavLink>
          </CNavItem>
          <CNavItem className="me-2">
            <CNavLink
              style={tabStyle(activeKey === 3)}
              active={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              <FaFilePdf className="me-2" /> दस्ताऐवज पहा
            </CNavLink>
          </CNavItem>
          <CNavItem className="me-2">
            <CNavLink
              style={tabStyle(activeKey === 4)}
              active={activeKey === 4}
              onClick={() => setActiveKey(4)}
            >
              <FaStickyNote className="me-2" /> अभिप्राय नोंदवा
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent className="p-3 bg-white rounded shadow-sm">
          {/* 7/12 Document Tab */}
          <CTabPane visible={activeKey === 1}>
            {documentControls}
            <div className="d-flex justify-content-center">
              <iframe
                src="/satbaaraa.pdf"
                title="7/12 Document"
                width={`${zoomLevel}%`}
                height="600px"
                style={{
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9fafb',
                }}
              />
            </div>
          </CTabPane>

          {/* Ferfar Pavati Tab */}
          <CTabPane visible={activeKey === 2}>
            {documentControls}
            <div className="d-flex justify-content-center">
              <iframe
                src="/ferfar.png"
                title="Ferfar Document"
                width={`${zoomLevel}%`}
                height="600px"
                style={{
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9fafb',
                }}
              />
            </div>
          </CTabPane>

          {/* Documents Tab */}
           <CTabPane visible={activeKey === 3}>
            {documentControls}
            <div className="d-flex justify-content-center">
              <iframe
                src="/document_app.pdf"
                title="document"
                width={`${zoomLevel}%`}
                height="600px"
                style={{
                  borderRadius: '10px',
                  border: '1px solid #ccc',
                  backgroundColor: '#f9fafb',
                }}
              />
            </div>
          </CTabPane>

          {/* Remark & Submit Tab */}
         <CTabPane visible={activeKey === 4}>
           <div className="mb-3">
             {/* Suggested Remarks Section */}
             <div className="suggested-remarks mb-3">
               <h6>Suggested Remarks:</h6>
               <div className="d-flex flex-wrap gap-2">
                 {suggestedRemarks.map((suggestion, index) => (
                   <CButton
                     key={index}
                     color="light"
                     size="sm"
                     onClick={() => setRemark(prev => prev ? `${prev}\n${suggestion}` : suggestion)}
                     className="suggestion-btn"
                   >
                     {suggestion}
                   </CButton>
                 ))}
               </div>
             </div>
             
             {/* Remark Textarea */}
             <CFormTextarea
               rows={4}
               className="remark-textarea mb-3"
               placeholder="Write your remark here..."
               value={remark}
               onChange={(e) => setRemark(e.target.value)}
             />
           </div>
           
           {/* Action Buttons (Clear & Submit) */}
           <div className="d-flex gap-2">
             <CButton
               color="secondary"
               onClick={() => setRemark('')}  // Clears the remark textarea
               className="clear-button"
             >
               Clear Remarks
             </CButton>
             
             <CButton
               color="primary"
               onClick={handleSubmit}
               className="submit-button"
             >
               Submit Ferfar
             </CButton>
           </div>
         </CTabPane>
        </CTabContent>
      </CCardBody>
    </CCard>
  );
};

export default TrutiDetailsTabs;