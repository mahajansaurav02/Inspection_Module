import React, { useEffect, useState } from 'react';
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
  CTooltip,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormSelect,
  CRow,
  CCol,
} from '@coreui/react';
import { FaFilePdf, FaFileAlt, FaStickyNote, FaFileSignature, FaDownload, FaExchangeAlt } from 'react-icons/fa';
import CryptoJS from 'crypto-js';
import axios from 'axios';
import { errorToast } from 'src/views/ui/Toast';
import './FerfarDetailsTabs.css';
import { MdOutlineZoomIn } from 'react-icons/md';

const FerfarDetailsTabs = ({ ferfar }) => {
  const [activeKey, setActiveKey] = useState(1);
  const [remark, setRemark] = useState('');
  const [base64Image, setBase64Image] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [compareModalVisible, setCompareModalVisible] = useState(false);
  const [selectedDocs, setSelectedDocs] = useState({
    left: '7/12',
    right: 'ferfar'
  });
  
  const [suggestedRemarks] = useState([
    "अपलोड केलेले दस्तऐवज नुसार सातबारा व अंमल योग्य आला आहे/ नाही",
    "फेरफार विहित मुदतीत प्रमाणित करण्यात आले आहे / नाही",
    "आदेशाची प्रमाणित प्रत अपलोड करण्यात आले आहे / नाही",
    "दस्ताऐवज नुसार फेरफार घेण्यात आलेला आहे/नाही",
    "अपलोड केलेले दस्तऐवज वाचण्यायोग्य आहे/नाही"
  ]);

  const documentOptions = [
    { value: '7/12', label: '7/12 Document' },
    { value: 'ferfar', label: 'Ferfar Document' },
    { value: 'other', label: 'Other Document' }
  ];

  useEffect(() => {
    get712View();
  }, []);

  const get712View = async () => {
    setIsLoading(true);
    try {
      const token = 'FCk6WvUiq70RKTpnwf0ASuMWl2ki6rXdhCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy';
      const response = await axios.post(
        `https://api.mahabhumi.gov.in/api/eferfar/getSatbaraHTML`,
        null,
        {
          headers: {
            Authorization: 'Bearer ' + token,
            'API-KEY': 'f3c040ae-4264-f1d1-ac58-486e2453',
            'SECRET-KEY': '9z3g7YaHCzwj4diHacM2Cdt8Cg1FOYVLjh2nOtRjGBz67Ygh3UiYzwcOe5By',
          },
          params: {
            lgd_code: '535327',
            pin: '64',
            pin1: '1',
            pin2: 'अ',
            pin3: '',
            pin4: '',
            pin5: '',
            pin6: '',
            pin7: '',
            pin8: '',
          },
        }
      );

      const encryptedData = response.data.data;
      const key = 'hCFaaYFOfOhIXNoeC3dL6YnHWwRPS1Jy';
      const iv = 'C3dL6YnHWwRPS1Jy';
      const base64String = atob(encryptedData);
      const decryptedData = decryptDataImage(base64String, key, iv);
      const parsedData = JSON.parse(decryptedData);

      setBase64Image(parsedData);
    } catch (err) {
      errorToast('Failed to load 7/12 document');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const decryptDataImage = (base64Data, key, iv) => {
    const encryptedData = CryptoJS.enc.Base64.parse(base64Data);
    const keyWordArray = CryptoJS.enc.Utf8.parse(key);
    const ivWordArray = CryptoJS.enc.Utf8.parse(iv);

    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: encryptedData },
      keyWordArray,
      {
        iv: ivWordArray,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    return decrypted.toString(CryptoJS.enc.Utf8);
  };

  const handleSubmit = () => {
    console.log('Submitted remark:', remark);
    setRemark('');
  };

  const handleDownload = (type) => {
    let filePath, fileName;

    switch (type) {
      case '7/12':
        filePath = '/satbaaraa.pdf';
        fileName = '7-12-utara.pdf';
        break;
      case 'ferfar':
        filePath = '/ferfar.png';
        fileName = 'ferfar-pavati.png';
        break;
      case 'other':
        filePath = '/document_app.pdf';
        fileName = 'ferfar-document.pdf';
        break;
      default:
        console.error('Unknown document type');
        return;
    }

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
      return Math.max(50, Math.min(150, newLevel));
    });
  };

  const getDocumentSource = (type) => {
    switch (type) {
      case '7/12':
        return { type: 'html', content: base64Image };
      case 'ferfar':
        return { type: 'image', content: '/ferfar.png' };
      case 'other':
        return { type: 'pdf', content: '/document_app.pdf' };
      default:
        return { type: '', content: '' };
    }
  };

  const renderDocumentView = (docType) => {
    const doc = getDocumentSource(docType);
    
    if (docType === '7/12') {
      if (!doc.content) return <div className="text-muted">No 7/12 document available</div>;
      return (
        <div 
          className="document-viewer"
          dangerouslySetInnerHTML={{ __html: doc.content }}
        />
      );
    } else if (docType === 'ferfar') {
      return (
        <div className="image-container">
          <img 
            src={doc.content} 
            alt="Ferfar document" 
            style={{ maxWidth: '100%', height: 'auto' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/placeholder-image.png';
            }}
          />
        </div>
      );
    } else {
      return (
        <iframe
          src={doc.content}
          title="Document viewer"
          width="100%"
          height="500px"
          style={{ border: '1px solid #ddd' }}
        />
      );
    }
  };

  const handleCompare = () => {
    if (!base64Image) {
      errorToast('Please load the 7/12 document first');
      return;
    }
    setCompareModalVisible(true);
  };

  const handleSwapDocuments = () => {
    setSelectedDocs(prev => ({
      left: prev.right,
      right: prev.left
    }));
  };

  const documentControls = (
    <div className="d-flex justify-content-end gap-2 mb-3">
      <CTooltip content="Zoom In">
        <CButton 
          color="light" 
          size="sm" 
          onClick={() => handleZoom('in')}
          disabled={zoomLevel >= 150}
        >
          <MdOutlineZoomIn /> +
        </CButton>
      </CTooltip>
      <CTooltip content="Zoom Out">
        <CButton 
          color="light" 
          size="sm" 
          onClick={() => handleZoom('out')}
          disabled={zoomLevel <= 50}
        >
          <MdOutlineZoomIn /> -
        </CButton>
      </CTooltip>
      <CTooltip content="Download Document">
        <CButton 
          color="primary" 
          size="sm" 
          onClick={() => {
            let documentType;
            if (activeKey === 1) documentType = '7/12';
            else if (activeKey === 2) documentType = 'ferfar';
            else if (activeKey === 3) documentType = 'other';
            handleDownload(documentType);
          }}
        >
          <FaDownload className="me-1" /> Download
        </CButton>
      </CTooltip>
      <CTooltip content="Compare Documents">
        <CButton 
          color="info" 
          size="sm" 
          onClick={handleCompare}
        >
          <FaExchangeAlt className="me-1" /> Compare
        </CButton>
      </CTooltip>
    </div>
  );

  return (
    <CCard className="ferfar-details-card">
      <CCardBody className='tabscard'>
        <CNav variant="tabs" role="tablist" className="ferfar-tab-nav">
          <CNavItem className="ferfar-tab-item">
            <CNavLink
              className="ferfar-tab-link"
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            >
              <FaFilePdf className="me-2" /> ७/१२ पहा 
            </CNavLink>
          </CNavItem>
          <CNavItem className="ferfar-tab-item">
            <CNavLink
              className="ferfar-tab-link"
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              <FaFileSignature className="me-2" /> फेरफार पहा 
            </CNavLink>
          </CNavItem>
          <CNavItem className="ferfar-tab-item">
            <CNavLink
              className="ferfar-tab-link"
              active={activeKey === 3}
              onClick={() => setActiveKey(3)}
            >
              <FaFileAlt className="me-2" /> दस्ताऐवज पहा 
            </CNavLink>
          </CNavItem>
          <CNavItem className="ferfar-tab-item">
            <CNavLink
              className="ferfar-tab-link"
              active={activeKey === 4}
              onClick={() => setActiveKey(4)}
            >
              <FaStickyNote className="me-2" />अभिप्राय नोंदवा 
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent className="ferfar-tab-content">
          <CTabPane visible={activeKey === 1} style={{ textAlign: 'center' }}>
            {isLoading ? (
              <div className="document-loading">
                <div className="loading-spinner" />
                <p className="loading-text">Loading document...</p>
                <p className="loading-subtext">Please wait while we prepare your document</p>
              </div>
            ) : (
              <>
                {documentControls}
                {base64Image ? (
                  <div
                    className="document-viewer"
                    dangerouslySetInnerHTML={{ __html: base64Image }}
                  />
                ) : (
                  <div className="text-danger">Failed to load document</div>
                )}
              </>
            )}
          </CTabPane>

          <CTabPane visible={activeKey === 2}>
            {documentControls}
            <div className="image-container">
              <img 
                src="/ferfar.png" 
                alt="Ferfar document" 
                style={{ maxWidth: '100%', height: 'auto' }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder-image.png';
                }}
              />
            </div>
          </CTabPane>

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

          <CTabPane visible={activeKey === 4}>
            <div className="mb-3">
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
              
              <CFormTextarea
                rows={4}
                className="remark-textarea mb-3"
                placeholder="Write your remark here..."
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
            
            <div className="d-flex gap-2">
              <CButton
                color="secondary"
                onClick={() => setRemark('')}
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

      {/* Document Comparison Modal */}
        <CModal 
        visible={compareModalVisible} 
        onClose={() => setCompareModalVisible(false)}
        size="xl"
        alignment="center"
        // style={{maxWidth:'2000px'}}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="modal-content-wrapper">
          <CModalHeader closeButton>
            <CModalTitle className="text-center w-100">Compare Documents</CModalTitle>
          </CModalHeader>
          <CModalBody className="modal-body-centered">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="document-comparison-container">
                <div className="document-column">
                  <CFormSelect
                    value={selectedDocs.left}
                    onChange={(e) => setSelectedDocs({...selectedDocs, left: e.target.value})}
                    className="mb-3"
                  >
                    {documentOptions.map(option => (
                      <option key={`left-${option.value}`} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </CFormSelect>
                  <div className="document-viewer-container">
                    {renderDocumentView(selectedDocs.left)}
                  </div>
                </div>

                {/* <div className="swap-button-container">
                  <CButton 
                    color="secondary" 
                    onClick={handleSwapDocuments}
                    className="swap-button"
                  >
                    <FaExchangeAlt className="swap-icon" />
                  </CButton>
                </div> */}

                <div className="document-column">
                  <CFormSelect
                    value={selectedDocs.right}
                    onChange={(e) => setSelectedDocs({...selectedDocs, right: e.target.value})}
                    className="mb-3"
                  >
                    {documentOptions.map(option => (
                      <option key={`right-${option.value}`} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </CFormSelect>
                  <div className="document-viewer-container">
                    {renderDocumentView(selectedDocs.right)}
                  </div>
                </div>
              </div>
            </div>
          </CModalBody>
          <CModalFooter className="justify-content-center">
            <div className="swap-button-container">
                  <CButton 
                    color="secondary" 
                    onClick={handleSwapDocuments}
                    className="swap-button"
                  >
                    <FaExchangeAlt className="swap-icon" />
                  </CButton>
                </div>
            <CButton 
              color="secondary" 
              onClick={() => setCompareModalVisible(false)}
            >
              Close
            </CButton>
          </CModalFooter>
        </div>
      </CModal>
    </CCard>
  );
};

export default FerfarDetailsTabs;