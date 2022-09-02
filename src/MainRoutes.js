import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import ContactUs from "./pages/ContactUsPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import RegistrationPage from "./pages/RegistrationPage";
import FavoritePage from "./pages/FavoritePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import PaymentMethod from "./pages/PaymentMethod";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 3,
    },
    {
      link: "/edit/",
      element: <EditProductPage />,
      id: 4,
    },
    {
      link: "/toys",
      element: <ProductsPage />,
      id: 5,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 6,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 7,
    },
    {
      link: "/contact",
      element: <ContactUs />,
      id: 8,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 9,
    },
    {
      link: "/payment",
      element: <PaymentMethod />,
      id: 10,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
