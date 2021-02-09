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
} from "@coreui/react";
import { useHistory, useLocation } from 'react-router-dom'
import featureData from "./FeatureData";
import CIcon from "@coreui/icons-react";

const getBadge = status => {
  switch (status) {
    case 'Available': return 'success'
    default: return 'primary'
  }
}

const FeatureTable = () => {
  const fields = [
    { key: 'prospect', _style: { width: '40%' } },
    'registered',
    { key: 'role', _style: { width: '20%' } },
    { key: 'status', _style: { width: '20%' } },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
    
  ]

  const history = useHistory()

  return (
        <CCard>
          <CCardHeader>
            Features
          </CCardHeader>
          <p>{JSON.stringify(featureData)}</p>
          <CCardBody>
            <CDataTable
              //columns
              items={featureData}
              fields={[
                { key: 'feature', _classes: 'font-weight-bold' },
                'family'
              ]}
              hover
              striped
              itemsPerPage={10}
              activePage={1}
              clickableRows
              header
              //onRowClick={(item) => history.push(`/poc/${item.prospect}`)}
            //onRowClick={(item) => history.push(`/users/${item.id}`)}
            scopedSlots = {{
              'available':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.available)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
            />
          </CCardBody>
        </CCard>
    );
};

export default FeatureTable;
