import React from 'react';
import './EChawadiKamkajTap.css';
import { FaEye } from 'react-icons/fa'; // Using react-icons for the eye icon

function EChawadiKamkajTap() {
  return (
    <div className="echawadi-container">
      <h1 className="echawadi-title">ई-चावडी कामकाज तपासणी
</h1>
      
      <div className="cards-wrapper">
        {/* Card 1 */}
        <div className="echawadi-card">
          <h2 className="card-title">गावातील गाव नमुना पूर्ण भरण्याची घोषणा केलेले गाव नमुना संख्या
</h2>
          {/* <p className="card-description">
            या कार्यामध्ये तुम्हाला गावातील पहिल्या प्रकल्पाची माहिती सादर करावयाची आहे. 
            सर्व आवश्यक तपशील आणि दस्तऐवज येथे अपलोड करा.
          </p> */}
          <button className="paha-button">
            <FaEye /> पहा
          </button>
        </div>
        
        {/* Card 2 */}
        <div className="echawadi-card">
          <h2 className="card-title">गावातील मागणी निश्चिती करताना दुरुस्तीद्वारे मागणी रक्कम कमी केलेल्या खातेदार संख्या</h2>
          {/* <p className="card-description">
            गावातील दुसऱ्या प्रकल्पाची अहवाल तयार करणे. यामध्ये प्रकल्पाची प्रगती, 
            खर्च आणि इतर महत्वाच्या माहितीचा समावेश आहे.
          </p> */}
          <button className="paha-button">
            <FaEye /> पहा
          </button>
        </div>
      </div>
    </div>
  );
}

export default EChawadiKamkajTap;