import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
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
    { key: '_id', _style: { width: '40%' } },
    { key: 'product', _style: { width: '40%' } },
    { key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const history = useHistory()
  const products = productData("hello");

  return (
    <CCard>
      <CCardHeader>
        Products
          </CCardHeader>
      <CCardBody>
        <CDataTable
          columns
          items={products}
          fields={fields}
          hover
          striped
          itemsPerPage={10}
          activePage={1}
          clickableRows
          header
          onRowClick={(item) => history.push(`/product/${item._id}`)}
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
