import React from 'react'
import './SectionCount.css'
import DetailsCard from '../../../dashboard/ReusableComponents/DetailsCardOnline'
import { CCol, CContainer, CFormLabel, CRow } from '@coreui/react'
import DescriptionIcon from '@mui/icons-material/Description'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import HiveIcon from '@mui/icons-material/Hive'
import LanguageSelector from '../../../../components/language-selector'
import { Trans, useTranslation } from 'react-i18next'

const SectionCount = ({ count1A, count1B, count2A, count2B, count3A, count3B }) => {
  const { t } = useTranslation('dashboard')
  return (
    <CContainer fluid style={{ justifyContent: 'space-evenly', padding: 10 }}>
      <CRow>
        <CCol
          md={3}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            padding: 20,
          }}
        >
          <CRow className="example_d" md={12}>
            {/* एकूण खातेदार संख्या */}
            <CFormLabel style={{ marginBottom: '52px' }}>{t('t1')}</CFormLabel>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="१ ऑगस्ट २०२३ रोजी"
                count={count1A ? count1A : 0}
                icon={<DescriptionIcon />}
              />
            </CCol>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="आजची संख्या"
                count={count1B ? count1B : 0}
                icon={<DescriptionIcon />}
              />
            </CCol>
          </CRow>
          {/* <CRow>
            <CCol md={6} style={{ position: 'absolute' }}>
              <DetailsCard
                label="१ ऑगस्ट २०२३ रोजी"
                count={count1A ? count1A : 0}
                icon={<DescriptionIcon />}
              />
            </CCol>
            <CCol md={6}>
              <DetailsCard
                label="आजची संख्या"
                count={count1B ? count1B : 0}
                icon={<DescriptionIcon />}
              />
            </CCol>
          </CRow> */}
        </CCol>
        <CCol
          md={3}
          style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: 20 }}
        >
          <CRow className="example_d" md={12}>
            <CFormLabel style={{ marginBottom: '52px' }}>एकूण ७/१२ संख्या</CFormLabel>

            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="१ ऑगस्ट २०२३ रोजी"
                count={count2A ? count2A : 0}
                icon={<DescriptionIcon />}
              />
            </CCol>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="आजची संख्या"
                count={count2B ? count2B : 0}
                icon={<DescriptionIcon />}
              />
            </CCol>
          </CRow>
          {/* <CRow>
            <CCol md={6}>
              <DetailsCard
                label="१ ऑगस्ट २०२३ रोजी"
                count={count2A ? count2A : 0}
                icon={<Diversity3Icon />}
              />
            </CCol>
            <CCol md={6}>
              <DetailsCard
                label="आजची संख्या"
                count={count2B ? count2B : 0}
                icon={<Diversity3Icon />}
              />
            </CCol>
          </CRow> */}
        </CCol>
        <CCol
          md={3}
          style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: 20 }}
        >
          <CRow className="example_d" md={10}>
            <CFormLabel style={{ marginBottom: '28px' }}>
              गावाची एकूण वसूली पात्र रक्कम(मागणी)
            </CFormLabel>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="ज.म"
                count={count3A ? count3A : 0}
                icon={<DescriptionIcon />}
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="संकीर्ण"
                count={count3B ? count3B : 0}
                icon={<DescriptionIcon />}
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
          </CRow>
          {/* <CRow>
            <CCol md={6}>
              <DetailsCard
                label="ज.म"
                count={count3A ? count3A : 0}
                icon={<HiveIcon />}
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
            <CCol md={6}>
              <DetailsCard
                label="संकीर्ण"
                count={count3B ? count3B : 0}
                icon={<HiveIcon />}
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
          </CRow> */}
        </CCol>
        <CCol
          md={3}
          style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', padding: 20 }}
        >
          <CRow className="example_d" md={10}>
            <CFormLabel style={{ marginBottom: '52px' }}> वसूली झालेली रक्कम</CFormLabel>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="ज.म"
                count={count3A ? count3A : 0}
                icon={<DescriptionIcon />}
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="संकीर्ण"
                count={count3B ? count3B : 0}
                icon={<DescriptionIcon />}
                className="col_height"
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
          </CRow>
          {/* <CRow>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="ज.म"
                count={count3A ? count3A : 0}
                icon={<Brightness7Icon />}
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
            <CCol md={6} style={{ float: 'left' }}>
              <DetailsCard
                label="संकीर्ण"
                count={count3B ? count3B : 0}
                icon={<Brightness7Icon />}
                className="col_height"
                //topHeader="प्रपत्र-अ"
              />
            </CCol>
          </CRow> */}
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default SectionCount
