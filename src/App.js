import "./App.css"
import { Container } from "react-bootstrap";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import { useSelector} from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const user = useSelector((state) => state.authReducer.userInfo)
  return (
    <Container fluid style={{marginLeft: 0, marginRight: 0, padding: 0}}>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/auth" />} />

        <Route path="/home" element={user ? <Home /> : <Navigate to="../auth" />} />

        <Route path="/product/:id" element={user ? <Product /> : <Navigate to="../auth" />} />

        <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />}  /> 

        <Route path="/profile" element={user ? <Profile/> : <Navigate to="../auth" />}  /> 

        <Route path="/cart/:id" element={user ? <Cart /> : <Navigate to="../auth" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="../auth" />} />
        
        <Route path="/checkout" element={user ? <Checkout /> : <Navigate to="../auth" />} />
        {/*<Route path="/profile/:id" element = {user ? <Profile/> : <Navigate to = "../auth" />} />*/}

      </Routes>
    </Container>
  );
}

export default App;
