import React, { useEffect, useState } from 'react'
import { Link, redirect, useHistory, useLocation, useNavigate } from 'react-router-dom'
import Background from 'src/assets/images/maha_map1.png'
import ToasterMessage from 'src/components/ToasterMessage'
import { validUser, validPassword, NUMBERS_ONLY, CHAR_ONLY } from 'src/components/Regex'
import axios from 'axios'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilClosedCaptioning } from '@coreui/icons'
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha'

const baseURL = 'https://localhost:9092/inspection/getRoles'

const Login = () => {
  //const history = useHistory()
  const navigate = useNavigate()
  const [loginValue, setLoginValue] = useState({
    userName: '',
    password: '',
    captcha: '',
  })
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState(false)
  const [validated, setValidated] = useState(false)
  const [userErr, setUserErr] = useState(false)
  const [pwdError, setPwdError] = useState(false)

  const handleLogin = (e) => {
    // const history = useHistory()
    const form = e.currentTarget

    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)
    // if (!NUMBERS_ONLY.test(loginValue.userName)) {
    //   // alert('a')
    //   setUserErr(true)
    // }
    // if (!validPassword.test(loginValue.password)) {
    //   setPwdError(true)
    // }

    if (validateCaptcha(loginValue.captcha) == true) {
      //console.log('loginValue->', loginValue)
      // alert('values is in console')
      // setShowToast(false)

      navigate('/reports/auditForm')
      //history.push(`/reports/auditForm`)
    } else {
      //alert('Captch not match')
      setShowToast(true)
      setToastMsg('Captcha does not match.')
    }
  }

  console.log('captcha', cilClosedCaptioning)
  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginValue({ ...loginValue, [name]: value })
  }

  const getData = () => {
    axios
      // .get('https://fakestoreapi.com/products')
      .get('https://localhost:7254/api/Question')
      //.get(`http://localhost:9092/inspection/getRoles`)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // useEffect(() => {
  //   axios
  //     // .get(`http://localhost:9092/inspection/getRoles`)
  //     // .get(`localhost:9092/inspection/getRoles`)
  //     .get(`https://fakestoreapi.com/products`)
  //     .then((res) => {
  //       alert('get')
  //       console.log(res.data)
  //     })
  //     .catch((error) => console.log(error))
  // }, [])

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    loadCaptchaEnginge(6, 'skyblue')
  }, [validated])

  return (
    <div
      className="bg-light min-vh-100 d-flex flex-row align-items-center"
      // style={{
      //   backgroundImage: `url(${Background})`,
      //   //  width: '3105.7817',
      //   // height: '2453.0112',
      //   // width: '100vw',
      //   // height: '50vh',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      //   backgroundSize: '100vw 100vh',
      // }}
    >
      {' '}
      {showToast && <ToasterMessage message={toastMsg} />}{' '}
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    className="row g-3 needs-validation"
                    noValidate
                    validated={validated}
                    onSubmit={handleLogin}
                  >
                    <h2> Inspection Module E - Chawadi </h2>{' '}
                    <p className="text-medium-emphasis"> Sign In to your account </p>{' '}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />{' '}
                      </CInputGroupText>{' '}
                      <CFormInput
                        id="userInput"
                        placeholder="Username"
                        autoComplete="username"
                        name="userName"
                        value={loginValue.userName}
                        onChange={handleChange}
                        feedbackInvalid="Please provide a user name."
                        required
                      />{' '}
                    </CInputGroup>{' '}
                    {userErr && <span color="red"> Your user name is invalid </span>}{' '}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />{' '}
                      </CInputGroupText>{' '}
                      <CFormInput
                        type="password"
                        id="userPassword"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={loginValue.password}
                        onChange={handleChange}
                        feedbackInvalid="Please provide a password."
                        required
                      />{' '}
                      {pwdError && <span color="danger"> Your password is invalid </span>}{' '}
                    </CInputGroup>{' '}
                    <CInputGroup className="mb-4">
                      <LoadCanvasTemplate />
                    </CInputGroup>{' '}
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilClosedCaptioning} />{' '}
                      </CInputGroupText>{' '}
                      <CFormInput
                        type="text"
                        id="userCaptcha"
                        placeholder="Captcha"
                        name="captcha"
                        value={loginValue.captcha}
                        onChange={handleChange}
                        // feedbackInvalid={
                        //   validateCaptcha(loginValue.captcha) == true
                        //     ? 'please write same captcha'
                        //     : 'Please provide a captcha.'
                        // }
                        required
                        // tooltipFeedback
                      />{' '}
                    </CInputGroup>{' '}
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login{' '}
                        </CButton>{' '}
                      </CCol>{' '}
                    </CRow>{' '}
                  </CForm>{' '}
                </CCardBody>{' '}
              </CCard>{' '}
            </CCardGroup>{' '}
          </CCol>{' '}
        </CRow>{' '}
      </CContainer>{' '}
    </div>
  )
}

export default Login
