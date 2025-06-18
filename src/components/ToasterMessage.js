import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CToastBody, CToast, CToastClose, CToaster } from '@coreui/react'

// routes config
import routes from '../routes'

const ToasterMessage = (props) => {
  return (
    <>
      {' '}
      <CToaster placement="top-end">
        <CToast
          animation={false}
          autohide={true}
          visible={true}
          color={props.color}
          className="text-white align-items-center"
        >
          <div className="d-flex">
            <CToastBody> {props.message} </CToastBody> <CToastClose className="me-2 m-auto" white />
          </div>{' '}
        </CToast>{' '}
      </CToaster>{' '}
    </>
  )
}

export default ToasterMessage
