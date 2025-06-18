import { ToastContainer, Zoom, toast, Bounce, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'

export const Toast = ({ autoClose = 7000, position = 'top-right' }) => {
  return (
    <>
      <ToastContainer
        transition={Bounce}
        position={position}
        autoClose={autoClose}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export const successToast = (message) => {
  toast.success(message)
}
export const errorToast = (message) => {
  toast.error(message)
}
export const warningToast = (message) => {
  toast.warning(message)
}
export const infoToast = (message) => {
  toast.info(message)
}
