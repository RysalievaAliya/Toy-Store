import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  pages: 0,
  oneProduct: null,
  category: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return { ...state, category: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const API = "https://toys-backend2022.herokuapp.com";

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  async function getProducts() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/toys/`, config);
      console.log(res);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(`${API}/categories/`, config);
      console.log(res);
      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addProducts(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/toys/`, newProduct, config);
      console.log(res);
      navigate("/products");
    } catch (error) {
      console.log(error, "errrrrrrrooooor");
    }
  }

  async function deleteProduct(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.delete(`${API}/toys/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  const getProductDetails = async (id) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const Authorization = `Bearer ${token.access}`;
    const config = {
      headers: {
        Authorization,
      },
    };
    const { data } = await axios(`${API}/toys/${id}/`, config);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };

  async function editProduct(newProduct) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(`${API}/toys/{id}/`, newProduct, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <productContext.Provider
      value={{
        addProducts,
        getProducts,
        getCategories,
        deleteProduct,
        editProduct,
        getProductDetails,
        products: state.products,
        pages: state.pages,
        category: state.category,
        oneProduct: state.oneProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
