import React, { useState } from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const productColumns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params)=>{
        return(
          <div className="productListItem">
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      }
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field:"action",
      headerName:"Action",
      width: 150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/product/" + params.row.id}>
          <button className="productListEdit">Edit</button>
          </Link>
            
            <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];

  return (
    <div className="productList">
      ProductList
      <DataGrid
        rows={data}
        columns={productColumns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
