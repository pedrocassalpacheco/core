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
import productData from "./ProductData";
import CIcon from "@coreui/icons-react";

const getBadge = status => {
  console.log(status);
  switch (status) {
    case 'yes': return 'success'
    default: return 'primary'
  }
}

const ProductTable = () => {
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
      <p>{JSON.stringify(productData)}</p>
      <CCardBody>
        <CDataTable
          columns
          items={productData}
          fields={[
            { key: 'product', _classes: 'font-weight-bold' },
            'family',
            'available',
            'ddddd'
          ]}
          hover
          striped
          itemsPerPage={10}
          activePage={1}
          clickableRows
          header
          //onRowClick={(item) => history.push(`/poc/${item.prospect}`)}
          //onRowClick={(item) => history.push(`/users/${item.id}`)}
          scopedSlots={{
            'available':
              (item) => (
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

export default ProductTable;
