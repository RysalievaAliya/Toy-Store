import { Box, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  console.log(products);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  const handlePage = (e, p) => {
    console.log(p);
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  return (
    <Box
      sx={{
        display: "flex",
        mt: 2,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {currentData().map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          variant="outlined"
          onChange={handlePage}
        />
      </Stack>
    </Box>
  );
};

export default ProductList;
