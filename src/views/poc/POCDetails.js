import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, 
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CTabs
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import pocData from './POCData'

const POCDetails = ({match}) => {
  console.log(match.params.prospect);
  console.log(pocData);
  const poc = pocData.find( poc => poc.prospect === match.params.prospect)
  const details = poc ? Object.entries(poc) : 
    [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]

  return (
    <CRow>
      <CCol lg={6}>
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
              </CNav>
              <CTabContent>

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
              </CTabContent>
              </CTabs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default POCDetails
