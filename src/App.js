import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './globalStyles.js';
import { UserProvider } from './context/UserContext.js';
import useToken from './hooks/useToken.js';
import Home from './Pages/Home.js';

export default function App() {
  return (
    <>
      <GlobalStyle />
        <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />           
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