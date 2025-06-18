import React from 'react'
import { CDropdownItem } from '@coreui/react'
import { cilAccountLogout } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    //handling clear session
    localStorage.clear('token')
    localStorage.clear('expiryDate')
    sessionStorage.clear('token')
    sessionStorage.clear('expiryDate')
    navigate('/Login')
  }
  //const userName = localStorage.getItem('marathiName')

  return (
    <>
      <CDropdownItem onClick={handleLogout}>
        <CIcon icon={cilAccountLogout} className="me-2" />
        Account Logout
      </CDropdownItem>
    </>
  )
}

export default Logout
