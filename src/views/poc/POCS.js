import React, { lazy } from 'react'
// import {
//   CBadge,
//   CButton,
//   CButtonGroup,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CProgress,
//   CRow,
//   CCallout
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

//import MainChartExample from '../charts/MainChartExample.js'

const Metrics = lazy(() => import('./POCMetrics'))
const POCTable = lazy(() => import('./POCTable'))

const POCS = () => {
  return (
    <>
      <Metrics/>  
      <POCTable/>
    </>
  )
}

export default POCS
