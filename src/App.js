import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyles.js';
import { UserProvider } from './context/UserContext.js';
import useToken from './hooks/useToken.js';
import Home from './Pages/Home.js';
import SignIn from './Pages/Sign-In.js';
import SignUp from './Pages/Sign-Up.js';
import CreateProduct from './Pages/CreateProduct.js';
import Menu from './Pages/Menu.js';

export default function App() {
  return (
    <>
      <GlobalStyle />
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-up" element={<SignUp />} />    
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/menu" element={<Menu />} />  
              <Route path="/create/product" element={<CreateProduct/>} />         
            </Routes>
          </Router>
        </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}