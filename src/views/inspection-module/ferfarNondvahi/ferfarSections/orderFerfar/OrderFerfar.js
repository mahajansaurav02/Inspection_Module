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

function OrderFerfar() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleViewFerfar = () => {
    // Add logic or route to view Ferfar
navigate('/ferfarNondvahi/order-ferfar/view')  };

  return (
    <>
          <FerfarNavbar />

   <CContainer className="mt-4">
  <CCard className="shadow-lg border-0">
    <CCardHeader className="bg-primary text-white fs-5 fw-bold">
      📄 आदेश फेरफार ची पळताळणी करताना खालील बाबी तपासा :
    </CCardHeader>
    <CCardBody>
      <ol className="ps-3">
        <li className="mb-2">
          आदेशाप्रमाणे नोंद घेतली आहे का?  
        </li>
        <li className="mb-2">
          आदेश फेरफाराशी संबंधित सर्व दस्तऐवज (आदेश व अनुषंगिक कागदपत्रे) अपलोड केले असल्याची खात्री करा.
        </li>
        <li className="mb-2">
          क. जा. प. /आकारफोड/फाळणी बारा इ. नोंदीचा फेरफार, जुना ७/१२ बंद करून नवीन पोट हिस्से तयार करणे या फेरफार प्रकारातून घेणे बंधनकारक आहे. सदर फेरफार नोंदवताना  ‘आदेश दस्तऐवज (7/12 बंद करणे)’ व ‘आदेशाने नविन 7/12 तयार करणे’ अथवा ‘कलम 155 च्या आदेशाने नवीन ७/१२ तयार करणे’ या पर्यायांचा वापर करण्यात आला नाही याची तपासणी करावी.
        </li>
        <li className="mb-2">
          नामंजूर केलेले आदेश फेरफार तपासा.
        </li>
        <li className="mb-2">
          आदेश फेरफार निर्णयास प्रलंबित ठेवला आहे का? असल्यास प्रलंबित असल्याचे कारण तपासा.
        </li>
        <li className="mb-2">
          आदेशावर स्थगिती आदेश असल्यास स्थगितीची इ फेरफार आज्ञावली मध्ये नोंदणी केली आहे काय.
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

export default OrderFerfar;
