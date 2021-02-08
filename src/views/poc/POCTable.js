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
import pocData from "./POCData";
import CIcon from "@coreui/icons-react";

const POCTable = () => {
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
            POCs
            <small className="text-muted"> example</small>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              //columns
              items={pocData}
              fields={[
                { key: 'prospect', _classes: 'font-weight-bold' },
                'region', 
                'value', 
                { key:'salesperson', label:'Sales Person'},
                { key:'saleseng', label:'Sales Engineer'}
              ]}
              hover
              striped
              itemsPerPage={10}
              activePage={1}
              clickableRows
              header
              onRowClick={(item) => history.push(`/poc/${item.prospect}`)}
            ß//onRowClick={(item) => history.push(`/users/${item.id}`)}
            // scopedSlots = {{
            //   'status':
            //     (item)=>(
            //       <td>
            //         <CBadge color={getBadge(item.status)}>
            //           {item.status}
            //         </CBadge>
            //       </td>
            //     )
            // }}
            />
          </CCardBody>
        </CCard>
    );
};

export default POCTable;
