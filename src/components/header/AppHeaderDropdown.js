import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilAccountLogout,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

import avatar8 from './../../assets/images/avatars/User.png'
import Logout from '../logout'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  // const handleLogout = () => {
  //   //handling clear session
  //   localStorage.clear('token')
  //   localStorage.clear('expiryDate')
  //   sessionStorage.clear('token')
  //   sessionStorage.clear('expiryDate')
  //   navigate('/Login')
  // }
  const userName = localStorage.getItem('marathiName')

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false} color={'info'}>
        {/* <CAvatar src={avatar8} size="md" /> */}
        <h5>{userName ? userName : 'user'}</h5>
      </CDropdownToggle>{' '}
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2"> Account </CDropdownHeader>{' '}
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates{' '}
          <CBadge color="info" className="ms-2">
            42{' '}
          </CBadge>{' '}
        </CDropdownItem>{' '}
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages{' '}
          <CBadge color="success" className="ms-2">
            42{' '}
          </CBadge>{' '}
        </CDropdownItem>{' '}
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks{' '}
          <CBadge color="danger" className="ms-2">
            42{' '}
          </CBadge>{' '}
        </CDropdownItem>{' '}
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments{' '}
          <CBadge color="warning" className="ms-2">
            42{' '}
          </CBadge>{' '}
        </CDropdownItem>{' '}
    
        {/* <CDropdownItem onClick={handleLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Account Logout{' '}
        </CDropdownItem>{' '} */}

        <Logout/>

      </CDropdownMenu>{' '}
    </CDropdown>
  )
}

export default AppHeaderDropdown
