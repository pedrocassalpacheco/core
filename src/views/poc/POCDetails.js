import React from 'react'
import {
  CCard, CCardBody, CCardHeader, CCol, CRow,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs,
  CProgress,
  CProgressBar,
  CFormGroup,
  CLabel,
  CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

import POCSchedule from './POCSchedule';
import pocData from './POCData';
import POCIssues from './POCIssues';

const POCDetails = ({ match }) => {
  console.log(match.params.prospect);
  console.log(pocData);
  const poc = pocData.find(poc => poc.prospect === match.params.prospect)
  const details = poc ? Object.entries(poc) :
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
            Prospect: {match.params.prospect}
          </CCardHeader>

          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    Home
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Schedule
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Risk
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Issues
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <table className="table table-striped table-hover">
                    <tbody>
                      {
                        details.map(([key, value], index) => {
                          return (
                            <tr key={index.toString()}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </CTabPane>
                <CTabPane>
                  <CCardBody>
                    <CProgress size="xs">
                      <CProgressBar value={10} />
                      <CProgressBar color="success" value={30} />
                      <CProgressBar color="danger" value={20} />
                    </CProgress>
                    <br></br>
                      <POCSchedule/>
                  </CCardBody>
                </CTabPane>
                <CTabPane></CTabPane>
                <CTabPane>
                  <POCIssues/>
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default POCDetails
