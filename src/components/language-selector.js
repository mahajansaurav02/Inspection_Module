import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLanguage } from '@coreui/icons'
import './language-selector.css'

const languages = [
  { code: 'en', lang: 'English' },
  { code: 'mr', lang: 'मराठी' },
  // { code: 'hi', lang: 'हिंदी' },
  // { code: 'fr', lang: 'French' },
  // { code: 'ar', lang: 'Arabic' },
]

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    document.body.dir = i18n.dir()
  }, [i18n, i18n.language])

  return (
    <>
      {/* <div  className="dropdown"> */}
      <div>
        {/* {languages.map((lng) => {
        return (
          <button id="button1"
            className={lng.code === i18n.language ? 'selected' : ''}
            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        )
      })} */}

        <CDropdown variant="btn-group">
          <CDropdownToggle color="secondary" size="sm">
            <CIcon icon={cilLanguage} />
          </CDropdownToggle>
          <CDropdownMenu style={{ padding: 0 }}>
            {languages.map((lng) => {
              return (
                <CDropdownItem
                  href="#"
                  id="button1"
                  className={lng.code === i18n.language ? 'selected' : ''}
                  key={lng.code}
                  onClick={() => changeLanguage(lng.code)}
                  // onChange={() => changeLanguage(lng.code)}
                >
                  {' '}
                  {lng.lang}
                </CDropdownItem>
              )
            })}
          </CDropdownMenu>
        </CDropdown>

        {/* <button className="dropbtn">Dropdown</button>
  <div className="dropdown-content">
  {languages.map((lng) => {
            return (
              <CDropdownItem
                href="#"
                id="button1"
                className={lng.code === i18n.language ? 'selected' : ''}
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
              >
                {' '}
                {lng.lang}
              </CDropdownItem>
            )
          })}
  </div> */}
      </div>
      {/* <div className="dropdown-content"> */}
      {/* <div className="dropdown">
        <ul>
          {languages.map((lng) => {
            return (
              <CDropdownItem
                href="#"
                id="button1"
                className={lng.code === i18n.language ? 'selected' : ''}
                key={lng.code}
                onClick={() => changeLanguage(lng.code)}
              >
                {' '}
                {lng.lang}
              </CDropdownItem>
            )
          })}
        </ul>
      </div> */}
    </>
  )
}

export default LanguageSelector
