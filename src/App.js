import Navbar from "./components/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import CartContextProvider from "./contexts/CartContextProvider";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
<<<<<<< HEAD
            <Navbar />
            <MainRoutes />
=======
            <Navbar/>
            <MainRoutes/>
>>>>>>> ed4b293146f5c00daec43457bad1c5320973144f
          </CartContextProvider>
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
