import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const { addProducts, category, getCategories } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    desc: "",
    price: "",
    picture: "",
    stock: "",
    categories: [1],
  });

  console.log(product);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  function handleSave() {
    addProducts(product);
    navigate("/products");
  }
  useEffect(() => {
    getCategories();
    console.log(category);
  }, []);

  return (
    <Box
      sx={{
        width: "40vw",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Add new product
      </Typography>
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        onChange={handleInp}
        value={product.name}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Description"
        variant="outlined"
        fullWidth
        name="desc"
        onChange={handleInp}
        value={product.desc}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Price"
        variant="outlined"
        fullWidth
        name="price"
        onChange={handleInp}
        value={product.price}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Picture"
        variant="outlined"
        fullWidth
        name="picture"
        onChange={handleInp}
        value={product.picture}
      />
      <TextField
        sx={{ m: 1 }}
        color="secondary"
        id="standard-basic"
        label="Stock"
        variant="outlined"
        fullWidth
        name="stock"
        onChange={handleInp}
        value={product.stock}
      />

      <FormControl sx={{ mt: 1 }} fullWidth>
        <InputLabel id="demo-simple-select-label">Specs</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Категории"
          onChange={handleInp}
          value={product.categories || 1}
          name="categories"
        >
          {category?.map((item) => (
            <MenuItem value={[item.id]} key={item.id} onChange={handleInp}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        sx={{
          m: 1,
          bgcolor: "#e91e63",
          color: "white",
          "&:hover": { bgcolor: "black" },
        }}
        variant="outlined"
        fullWidth
        size="large"
        onClick={handleSave}
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
