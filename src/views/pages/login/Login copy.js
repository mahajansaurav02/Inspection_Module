import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Background from 'src/assets/images/maha_map1.png'
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
import { LoadCanvasTemplate, loadCaptchaEnginge } from 'react-simple-captcha'

const Login = () => {
        const [value, setValue] = useState({
            userName: '',
            password: '',
        })
        const handleLogin = (e) => {
            e.preventDefault()
        }

        useEffect(() => {
            loadCaptchaEnginge(6, 'skyblue')
        }, [])

        return (

            <
            div className = "bg-light min-vh-100 d-flex flex-row align-items-center"
            style = {
                {
                    backgroundImage: `url(${Background})`,
                    //  width: '3105.7817',
                    // height: '2453.0112',
                    // width: '100vw',
                    // height: '50vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '100vw 100vh',
                }
            } > < /div
            CContainer >
            <
            CRow className = "justify-content-center" >
            <
            CCol md = { 5 } >
            <
            CCardGroup >
            <
            CCard className = "p-4" >
            <
            CCardBody >
            <
            CForm onSubmit = { handleLogin } >
            <
            h2 > Inspection Module E - Chawadi < /h2>{' '} <
            p className = "text-medium-emphasis" > Sign In to your account < /p>{' '} <
            CInputGroup className = "mb-3" >
            <
            CInputGroupText >
            <
            CIcon icon = { cilUser }
            />{' '} < /
            CInputGroupText > <
            CFormInput placeholder = "Username"
            autoComplete = "username"
            onChange = {
                (e) => setValue({...value, [e ? .target ? .name]: e ? .target ? .value })
            }
            /> < /
            CInputGroup > <
            CInputGroup className = "mb-4" >
            <
            CInputGroupText >
            <
            CIcon icon = { cilLockLocked }
            />{' '} < /
            CInputGroupText > <
            CFormInput type = "password"
            placeholder = "Password"
            autoComplete = "current-password" /
            >
            <
            /CInputGroup>{' '} <
            CInputGroup className = "mb-4" > <
            LoadCanvasTemplate / >
            <
            /CInputGroup>{' '} <
            CInputGroup className = "mb-4" > <
            CInputGroupText >
            <
            CIcon icon = { cilClosedCaptioning }
            />{' '} < /
            CInputGroupText > <
            CFormInput type = "text"
            placeholder = "Captcha" / >
            <
            /CInputGroup>{' '} <
            CRow className = "d-grid gap-2 d-md-block justify-content-md-end d-md-block  d-md-flex" >
            <
            CButton color = "primary"
            size = "sm"
            type = "submit" >
            Login <
            /CButton>{' '} < /
            CRow > <
            /CForm>{' '} < /
            CCardBody > <
            /CCard>{' '} < /
            CCardGroup > <
            /CCol>{' '} < /
            CRow > <
            /CContainer> < /
            div >

        )


        export default Login;