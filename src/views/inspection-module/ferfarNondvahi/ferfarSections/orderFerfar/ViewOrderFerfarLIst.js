import React, { useState } from 'react';
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CPagination,
  CBadge,
  CCol,
  CRow,
  CFormInput,
  CAlert,
  CSpinner,
  CTooltip
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilFile, cilMagnifyingGlass, cilInfo } from '@coreui/icons';
import FerfarNavbar from '../FerfarNavbar';
import { useNavigate } from 'react-router-dom';

// Sample ferfar list (replace with actual data)
const ferfarList = [
  {
    id: 1,
    ferfarNumber: '2598',
    satbaraLink: 'https://example.com/satbara1',
    documentLink: 'https://example.com/document1',
    description: 'फेरफार क्र. FF-001 विषयी तपशील.',
    status: 'approved',
    date: '१५-०३-२०२३ '
  },
  {
    id: 2,
    ferfarNumber: '7895',
    satbaraLink: 'https://example.com/satbara2',
    documentLink: 'https://example.com/document2',
    description: 'फेरफार क्र. FF-002 विषयी तपशील.',
    status: 'rejected',
    date: '१४-०३-२०२३ '
  },
  {
    id: 3,
    ferfarNumber: '1258',
    satbaraLink: 'https://example.com/satbara3',
    documentLink: 'https://example.com/document3',
    description: 'फेरफार क्र. FF-003 विषयी तपशील.',
    status: 'rejected',
    date: '१३-०३-२०२३ '
  },
  {
    id: 4,
    ferfarNumber: '6598',
    satbaraLink: 'https://example.com/satbara4',
    documentLink: 'https://example.com/document4',
    description: 'फेरफार क्र. FF-004 विषयी तपशील.',
    status: 'approved',
    date: '१३-०३-२०२३'
  },
  {
    id: 5,
    ferfarNumber: '7878',
    satbaraLink: 'https://example.com/satbara5',
    documentLink: 'https://example.com/document5',
    description: 'फेरफार क्र. FF-005 विषयी तपशील.',
    status: 'rejected',
    date: '१३-०३-२०२३'
  },
  {
    id: 6,
    ferfarNumber: '1110',
    satbaraLink: 'https://example.com/satbara6',
    documentLink: 'https://example.com/document6',
    description: 'फेरफार क्र. FF-006 विषयी तपशील.',
    status: 'approved',
    date: '१३-०३-२०२३'
  }
];

function ViewOrderFerfarList() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [selectedFerfar, setSelectedFerfar] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 5;

  // Filter data based on search term
  const filteredData = ferfarList.filter(ferfar => 
    ferfar.ferfarNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ferfar.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate paginated data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFerfarClick = (ferfar) => {
    navigate(`/ferfar-details/${ferfar.id}`, { state: { ferfar } });
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved':
        return <CBadge color="success">अभिप्राय दिलेला आहे </CBadge>;
      case 'rejected':
        return <CBadge color="danger">अभिप्राय दिलेला नाही </CBadge>;
      
    }
  };

  return (
    <>
      <FerfarNavbar />
      <CCard className="mb-4 custom-card">
        <CCardHeader className="d-flex justify-content-between align-items-center bg-primary text-white">
          <h4 className="mb-0">📋 फेरफार क्रमांकानुसार यादी</h4>
          <div className="d-flex align-items-center">
            <CTooltip content="Search ferfar">
              <div className="position-relative">
                <CIcon icon={cilSearch} className="position-absolute top-50 start-0 translate-middle-y ms-2" />
                <CFormInput
                  type="text"
                  placeholder="शोधा..."
                  className="ps-5"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </CTooltip>
          </div>
        </CCardHeader>
        
        <CCardBody>
          {isLoading ? (
            <div className="text-center py-5">
              <CSpinner color="primary" />
              <p className="mt-2">लोड होत आहे...</p>
            </div>
          ) : (
            <>
              {filteredData.length === 0 ? (
                <CAlert color="info" className="text-center">
                  <CIcon icon={cilInfo} className="me-2" />
                  कोणतेही फेरफार सापडले नाहीत
                </CAlert>
              ) : (
                <>
                  <div className="table-responsive">
                    <CTable hover striped bordered className="mb-4">
                      <CTableHead className="table-dark">
                        <CTableRow>
                          <CTableHeaderCell width="5%">अनु. क्रमांक</CTableHeaderCell>
                          <CTableHeaderCell width="15%">फेरफार क्रमांक</CTableHeaderCell>
                          <CTableHeaderCell width="15%">दिनांक</CTableHeaderCell>
                          <CTableHeaderCell width="15%">स्थिती</CTableHeaderCell>
                          {/* <CTableHeaderCell width="15%">7/12 पहा</CTableHeaderCell>
                          <CTableHeaderCell width="15%">दस्त पहा</CTableHeaderCell> */}
                        </CTableRow>
                      </CTableHead>
                      <CTableBody>
                        {paginatedData.map((ferfar, index) => (
                          <CTableRow key={ferfar.id}>
                            <CTableDataCell className="text-center">{index + 1}</CTableDataCell>
                            <CTableDataCell className="text-center">
                              <button
                                className="btn btn-link text-primary text-decoration-underline p-0"
                                onClick={() => handleFerfarClick(ferfar)}
                              >
                                {ferfar.ferfarNumber}
                              </button>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">{ferfar.date}</CTableDataCell>
                            <CTableDataCell className="text-center">
                              {getStatusBadge(ferfar.status)}
                            </CTableDataCell>
                            {/* <CTableDataCell className="text-center">
                              <CTooltip content="7/12 पहा">
                                <CButton
                                  color="info"
                                  variant="outline"
                                  size="sm"
                                  href={ferfar.satbaraLink}
                                  target="_blank"
                                >
                                  <CIcon icon={cilFile} className="me-1" />
                                  पहा
                                </CButton>
                              </CTooltip>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                              <CTooltip content="दस्तऐवज पहा">
                                <CButton
                                  color="warning"
                                  variant="outline"
                                  size="sm"
                                  href={ferfar.documentLink}
                                  target="_blank"
                                >
                                  <CIcon icon={cilMagnifyingGlass} className="me-1" />
                                  पहा
                                </CButton>
                              </CTooltip>
                            </CTableDataCell> */}
                          </CTableRow>
                        ))}
                      </CTableBody>
                    </CTable>
                  </div>
                  
                  <CRow>
                    <CCol md={6} className="d-flex align-items-center">
                      <small className="text-muted">
                        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
                      </small>
                    </CCol>
                    <CCol md={6} className="d-flex justify-content-end">
                      <CPagination
                        activePage={currentPage}
                        pages={totalPages}
                        onActivePageChange={setCurrentPage}
                        align="end"
                        size="sm"
                        className="mb-0"
                      />
                    </CCol>
                  </CRow>
                </>
              )}
            </>
          )}
        </CCardBody>
      </CCard>

      {/* Modal */}
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <strong>फेरफार तपशील</strong>
        </CModalHeader>
        <CModalBody>
          {selectedFerfar ? (
            <>
              <p><strong>फेरफार क्रमांक:</strong> {selectedFerfar.ferfarNumber}</p>
              <p><strong>तपशील:</strong> {selectedFerfar.description}</p>
            </>
          ) : (
            <p>कृपया फेरफार निवडा.</p>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            बंद करा
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default ViewOrderFerfarList;