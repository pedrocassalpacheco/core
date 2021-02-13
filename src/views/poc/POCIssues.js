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
  CInput,
  CCardFooter
} from "@coreui/react";
import { useHistory, useLocation } from 'react-router-dom'
import CIcon from "@coreui/icons-react";

const POCIssues = () => {
  
  const issues = 
  [
    {
      "title": "Problem 123",
      "link": "http://www.google.com",
      "comments": "sunt non consectetur do commodo consequat aliquip sunt aute consectetur",
      "status":"success",
      "age":"13"
    },
    {
      "title": "Problem 456",
      "link": "http://www.google.com",
      "comments": "sLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "status":"danger",
      "age":"13"
    },    
    {
      "title": "Problem 456",
      "link": "http://www.google.com",
      "comments": "sLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "status":"danger",
      "age":"13"
    },
  ]


  return (
    <>
    <br></br>
    <CRow>
      { issues.map((issue) => (
    <CCol xs="12" sm="6" md="4">
      <CCard>
      <CCardHeader>
          {issue.title}
          <div className="card-header-actions">
                <CBadge color={issue.status} className="float-right">{issue.status}</CBadge>
          </div>
        </CCardHeader>
        <CCardBody>
          {issue.comments}
         </CCardBody>
      </CCard>
    </CCol>
      ))}
    </CRow>
    </>
  );
};

export default POCIssues;
