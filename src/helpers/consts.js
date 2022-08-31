import navigate from "../contexts/ProductContextProvider";

export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  GET_PRODUCT_DETAILS: "GET_PRODUCT_DETAILS",
};

export const CART = {
  GET_CART: "GET_CART",
  GET_CART_LENGTH: "GET_CART_LENGTH",
};

export const navigateToRegister = () => {
  navigate("/register");
};

export const navigateToLogin = () => {
  navigate("/login");
};

export const API_ADD_PRODUCT = "https://toys-backend2022.herokuapp.com/toys";
