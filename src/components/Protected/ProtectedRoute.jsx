import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const location = useLocation();
  
  if (!token || !user) {
    return <Navigate to="/api/signin" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;