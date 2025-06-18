import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CButton
} from '@coreui/react';
import styles from './FerfarHome.module.css';

function FerfarNondwahiSection1() {
 const navigate = useNavigate();


  const options = [
    { label: '1. आदेश फेरफार', route: '/ferfarNondvahi/order-ferfar' },
    { label: '2. कलम १५५ ची सुविधा वापरून तयार केलेले फेरफार', route: '/ferfarNondvahi/section-155' },
    { label: '3. इतर प्रकार वापरून तयार केलेले फेरफार', route: '/ferfarNondvahi/other-ferfar' },
    { label: '4. नामंजूर केलेले फेरफार (तांत्रिक कारण)', route: '/ferfarNondvahi/rejected-ferfar' },
    { label: '5. रि-एन्ट्री केलेले फेरफार', route: '/ferfarNondvahi/reentry-ferfar' },
  ];

  return (
     <CContainer className={styles.container}>
      <div className={styles.header}>फेरफार निवडा</div>
      <div className={styles.cardGrid}>
        {options.map((option, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardBody}>
              <div className={styles.cardTitle}>{option.label}</div>
              <button
                className={styles.button}
                onClick={() => navigate(option.route)}
              >
                निवडा
              </button>
            </div>
          </div>
        ))}
      </div>
    </CContainer>
  );
}

export default FerfarNondwahiSection1;
