import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddProduct from "../components/products/AddProduct";
import "../styles/Admin.css";

const AdminPage = () => {
  return (
    <div className="Admin">
      <Box sx={{ margin: "2%" }}>
        <Typography variant="body1" sx={{ mt: 2 }}></Typography>
      </Box>
      <AddProduct />
    </div>
  );
};

export default AdminPage;
