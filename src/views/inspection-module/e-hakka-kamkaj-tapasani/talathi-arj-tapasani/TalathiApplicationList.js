import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
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
import '@coreui/coreui/dist/css/coreui.min.css';
import { useNavigate } from 'react-router-dom';

function TrutiArjList() {
  // Sample data - replace with your actual data source
    const navigate = useNavigate();
  
  const [data, setData] = React.useState([
    {
      id: '1',
      applicationNo: 'APP-2023-001',
      cancelReason: 'Duplicate application',
      date: '2023-05-15',
      docLink: '/documents/app-001',
      status: 'rejected'
    },
    {
      id: '2',
      applicationNo: 'APP-2023-002',
      cancelReason: 'Incomplete information',
      date: '2023-05-18',
      docLink: '/documents/app-002',
      status: 'approved'
    },
    {
      id: '3',
      applicationNo: 'APP-2023-003',
      cancelReason: 'Withdrawn by applicant',
      date: '2023-05-20',
      docLink: '/documents/app-003',
      status: 'rejected'
    },
    {
      id: '4',
      applicationNo: 'APP-2023-1252',
      cancelReason: 'Withdrawn by applicant',
      date: '2023-05-20',
      docLink: '/documents/app-003',
      status: 'rejected'
    },
    {
      id: '5',
      applicationNo: 'APP-2023-56952',
      cancelReason: 'Withdrawn by applicant',
      date: '2023-05-20',
      docLink: '/documents/app-003',
      status: 'rejected'
    },
    {
      id: '6',
      applicationNo: 'APP-2023-0322',
      cancelReason: 'Withdrawn by applicant',
      date: '2023-05-20',
      docLink: '/documents/app-003',
      status: 'rejected'
    },
    {
      id: '7',
      applicationNo: 'APP-2023-0322',
      cancelReason: 'Withdrawn by applicant',
      date: '2023-05-20',
      docLink: '/documents/app-003',
      status: 'rejected'
    },
    {
      id: '8',
      applicationNo: 'APP-2023-0322',
      cancelReason: 'Withdrawn by applicant',
      date: '2023-05-20',
      docLink: '/documents/app-003',
      status: 'rejected'
    },
    {
      id: '9',
      applicationNo: 'APP-2023-0322',
      cancelReason: 'Withdrawn by applicant',
      date: '2023-05-20',
      docLink: '/documents/app-003',
      status: 'rejected'
    },
  ]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const itemsPerPage = 8;
  
  // Filter data based on search term
  const filteredData = data.filter(item => 
    item.applicationNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.cancelReason.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Calculate paginated data
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApplicationClick = (application) => {
navigate(`/truti-applications-details/${application.id}`, { state: { application } });    // Your 7/12 view logic
  };
  const handle7_12Click = (applicationNo) => {
    console.log(`View 7/12 for application: ${applicationNo}`);
    // Your 7/12 view logic
  };

  const handleDocView = (docLink) => {
    console.log(`View documents at: ${docLink}`);
    // Your document view logic
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'approved':
        return <CBadge color="success">अभिप्राय दिलेला आहे</CBadge>;
      case 'rejected':
        return <CBadge color="danger">अभिप्राय दिलेला नाही </CBadge>;
    
    }
  };

  return (
    <CCard className="mb-4 custom-card">
      <CCardHeader className="d-flex justify-content-between align-items-center bg-primary text-white">
        <h4 className="mb-0">तलाठी स्तरावर फेरफाराकरीता प्रलंबित अर्जांची यादी</h4>
        <div className="d-flex align-items-center">
          <CTooltip content="Search applications">
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
                कोणतेही अर्ज सापडले नाहीत
              </CAlert>
            ) : (
              <>
                <div className="table-responsive">
                  <CTable hover striped bordered className="mb-4">
                    <CTableHead className="table-dark">
                      <CTableRow>
                        <CTableHeaderCell width="15%">अर्ज क्रमांक</CTableHeaderCell>
                        {/* <CTableHeaderCell width="30%">त्रुटीपूर्ततेखाली पाठविण्यात आलेले कारण</CTableHeaderCell> */}
                        <CTableHeaderCell width="15%">पाठविण्याचा दिनांक</CTableHeaderCell>
                        <CTableHeaderCell width="10%">स्थिती</CTableHeaderCell>
                        {/* <CTableHeaderCell width="15%">7/12</CTableHeaderCell> */}
                        {/* <CTableHeaderCell width="15%">दस्त</CTableHeaderCell> */}
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {paginatedData.map((item) => (
                        <CTableRow key={item.id}>
                          <CTableDataCell>
 <button
                                className="btn btn-link text-primary text-decoration-underline p-0"
                                onClick={() => handleApplicationClick(item)}
                              >
                                {item.applicationNo}
                              </button>                          </CTableDataCell>
                          {/* <CTableDataCell>{item.cancelReason}</CTableDataCell> */}
                          <CTableDataCell>{item.date}</CTableDataCell>
                          <CTableDataCell>
                            {getStatusBadge(item.status)}
                          </CTableDataCell>
                          {/* <CTableDataCell>
                            <CTooltip content="7/12 पहा">
                              <CButton 
                                color="primary" 
                                variant="outline"
                                size="sm"
                                onClick={() => handle7_12Click(item.applicationNo)}
                              >
                                <CIcon icon={cilFile} className="me-1" />
                                7/12
                              </CButton>
                            </CTooltip>
                          </CTableDataCell> */}
                          {/* <CTableDataCell>
                            <CTooltip content="दस्तऐवज पहा">
                              <CButton 
                                color="info" 
                                variant="outline"
                                size="sm"
                                onClick={() => handleDocView(item.docLink)}
                              >
                                <CIcon icon={cilMagnifyingGlass} className="me-1" />
                                दस्त
                              </CButton>
                            </CTooltip>
                          </CTableDataCell> */}
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </div>
                
              <CRow className="mt-3 align-items-center">
  <CCol xs={12} md={6} className="mb-2 mb-md-0">
    <div className="dataTables_info">
      Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} entries
    </div>
  </CCol>
  
  <CCol xs={12} md={6}>
    {totalPages > 1 && (
      <CPagination
        activePage={currentPage}
        pages={totalPages}
        onActivePageChange={setCurrentPage}
        align="end"
        dots={false}
        doubleArrows={false}
        firstButton="First"
        lastButton="Last"
        size="sm"
        className="justify-content-center justify-content-md-end"
      />
    )}
  </CCol>
</CRow>
              </>
            )}
          </>
        )}
      </CCardBody>
    </CCard>
  );
}

export default TrutiArjList;