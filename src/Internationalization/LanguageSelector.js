// import React, { useEffect, useState } from 'react'
// import { CFormSelect } from '@coreui/react'
// import { useTranslation } from 'react-i18next'

// const LanguageSelector = () => {
//   const { i18n } = useTranslation()
//   const [currentLanguage, setCurrentLanguage] = useState(i18n.language)
//   const [translations, setTranslations] = useState({})

//   useEffect(() => {
//     const fetchTranslations = async () => {
//       const loadedTranslations = await i18n.getResourceBundle(currentLanguage, 'translation')
//       setTranslations(loadedTranslations)
//     }
//     fetchTranslations()
//   }, [currentLanguage])

//   const changeLanguage = (lang) => {
//     setCurrentLanguage(lang)
//     i18n.changeLanguage(lang)
//   }

//   return (
//     <>
//       <CFormSelect
//         aria-label="Select Language"
//         // value={lang}
//         onChange={(e) => changeLanguage(e.target.value)}
//         defaultValue={i18n.language}
//       >
//         <option value="en">English</option>
//         <option value="mr">मराठी</option>
//       </CFormSelect>
//     </>
//   )
// }

// export default LanguageSelector
//old code
import React, { useState } from 'react'
import { CFormSelect } from '@coreui/react'
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
  // const [lang, setlang] = useState()
  const { i18n } = useTranslation()

  const changeLanguage = async (language) => {
    // setlang(language)
    // i18n.changeLanguage(language ? language : 'en')
    // let lang = await language
    i18n.changeLanguage(language)
    //1111111111
    // i18n.changeLanguage(language)
    // localStorage.setItem('language', language)
  }
  return (
    <>
      <CFormSelect
        aria-label="Select Language"
        // value={lang}
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="mr">मराठी</option>
      </CFormSelect>
    </>
  )
}

export default LanguageSelector
