import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CContainer,
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CRow,
  CCol,
  CButton
} from '@coreui/react';
import FerfarNavbar from '../FerfarNavbar';
function OtherFerfar() {

      const navigate = useNavigate();
    
      const handleGoBack = () => {
        navigate(-1); // Go back to previous page
      };
    
      const handleViewFerfar = () => {
        // Add logic or route to view Ferfar
    navigate('/ferfarNondvahi/other-ferfar/view')  };
    
  return (
    <>
              <FerfarNavbar />

 <CContainer className="mt-4">
  <CCard className="shadow-lg border-0">
    <CCardHeader className="bg-primary text-white fs-5 fw-bold">
      📄  इतर प्रकार या पर्यायांतर्गत तयार केलेल्या फेरफारांची पडताळणी करताना खालील बाबी तपासा :

    </CCardHeader>
    <CCardBody>
      <ol className="ps-3">
        <li className="mb-2">
&quot;इतर फेरफार&quot;  या प्रकारामध्ये असे फेरफार नोंदवायचे असतात, ज्या प्रकारासाठी ई-फेरफार प्रणालीमध्ये विशिष्ट टेम्पलेट उपलब्ध नाही. 
        </li>
        <li className="mb-2">
        जर एखादा फेरफार &quot;इतर फेरफार&quot; या प्रकारामधून नोंदवण्यात आलेला असेल, तर संबंधित फेरफार निर्णयीत होई पर्यंत अशा भूमापन क्रमांकावर इतर कोणताही नविन फेरफार नोंदविता येत नाही. तोपर्यंत संबंधित भूमापन क्रमांक प्रणालीमध्ये ब्लॉक /प्रतिबंधित अवस्थेत राहतो.
        </li>
        <li className="mb-2">
ई-फेरफार प्रणालीमध्ये टेम्पलेट उपलब्ध असताना देखील सामान्य फेरफार प्रकारातील &quot;इतर फेरफार&quot; या प्रकारामधून नोंदवण्यात आले आहेत काय? याची तपासणी करावी. उपलब्ध असताना &quot;इतर फेरफार&quot; प्रकाराचा वापर करण्यामागील योग्य कारण स्पष्टपणे अभिप्रायात  नमूद करावे.
        </li>
       
      </ol>

      <CRow className="mt-4">
        <CCol xs={6}>
          <CButton color="success" className="w-100" onClick={handleViewFerfar}>
            फेरफार बघा
          </CButton>
        </CCol>
        <CCol xs={6}>
          <CButton color="secondary" className="w-100" onClick={handleGoBack}>
            मागे जा
          </CButton>
        </CCol>
      </CRow>
    </CCardBody>
  </CCard>
</CContainer>
</>
  );
}

export default OtherFerfar;
