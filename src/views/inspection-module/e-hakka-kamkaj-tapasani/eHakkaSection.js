import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EHakkaSection.module.css'; // Correct CSS Modules import

function EHakkaSection() {
  const navigate = useNavigate();

  // Mock data for cards
  const mainCards = [
    { id: 'card1', title: 'त्रुटीपूर्ततेसाठी भूधारकास परत पाठविण्यात आलेल्या अर्जांची तपासणी',
         subCards: [
        { id: 'main1', title: 'किमान ५ तपासणी करणे अनिवार्य आहे ' },
      
      ]
     },
    { 
      id: 'card2', 
      title: 'तलाठी स्तरावर फेरफाराकरीता प्रलंबित अर्जांची तपासणी', 
      subCards: [
        { id: 'main2-1', title: '९० दिवसापेक्षा जास्त दिवस प्रलंबित', description: '(किमान २५% तपासणी अनिवार्य)' },
        { id: 'main2-2', title: '१५ ते ९० दिवसातील प्रलंबित', description: '(किमान १०% तपासणी अनिवार्य)' },
        { id: 'main2-3', title: '१५ दिवसा पेक्षा कमी दिवस प्रलंबित', description: '(तपासणी आवश्यक नाही)' },
      ]
    },
  ];

  const handleCardClick = (id) => {
    if(id=='main1'){
      navigate(`/e-hakka-kamkaj-tapasani/info-truti-arj`)

    }else{

      navigate(`/e-hakka-kamkaj-tapasani/info/${id}`)
    }
  };

  return (
    <>
                  <div className={styles.header}>ई-हक्क प्रणाली कामकाज तपासणी (Online)</div>

    <div className={styles['cards-container']}>

      {mainCards.map((card) => (
        <div key={card.id} className={styles['main-card']}>
          <h2>{card.title}</h2>
          
          {card.description && (
            <div 
              className={styles['card-content']}
              onClick={() => handleCardClick(card.id)}
            >
              <p>{card.description}</p>
            </div>
          )}

          {card.subCards && (
            <div className={styles['sub-cards']}>
              {card.subCards.map((subCard) => (
                <div 
                  key={subCard.id} 
                  className={styles['sub-card']}
                  onClick={() => handleCardClick(subCard.id)}
                >
                  <h3>{subCard.title}</h3>
                  <p>{subCard.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </>
  );
}

export default EHakkaSection;