import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CProgress,
  CFormGroup,
  CLabel,
  CSelect,
  CInput
} from "@coreui/react";
import { useHistory, useLocation } from 'react-router-dom'
import pocData from "./POCData";
import CIcon from "@coreui/icons-react";

const POCSchedule = () => {
  const dateTypes = [
    'Kick off',
    'Instalation',
    'Tech sync 1',
    'Tech sync 2',
    'Tech sync 3',
    'Wrap up',
  ]
  console.log(dateTypes);

  return (
    <CCard>
      <CCardHeader>
        Schedule
      </CCardHeader>
      <CCardBody>
      <CRow>
          <CCol>           
          </CCol>
          <CCol>
            Planned
          </CCol>
          <CCol>
            Actual
          </CCol>
        </CRow>
      {dateTypes.map((name) => (
        <CRow>
          <CCol>
            {name}
          </CCol>
          <CCol xs="4">
          <CInput type="date" id="date-input" name="date-input" placeholder="date" />
          </CCol>
          <CCol xs="4">
          <CInput type="date" id="date-input" name="date-input" placeholder="date" />
          </CCol>
        </CRow>
      ))}
      </CCardBody>
    </CCard>
  );
};

export default POCSchedule;
