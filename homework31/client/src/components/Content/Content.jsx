import { Route, Routes } from 'react-router';
import './Content.css';
import { menuItems } from '../../common/menu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AuthForm from '../AuthForm/AuthForm';

export default function Content() {
  return (
    <Routes>
      <Route path="/login" element={<AuthForm />} />
      {menuItems.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            (path.startsWith('/projects') || path.startsWith('/tasks')) ? (
              <ProtectedRoute>
                <Component />
              </ProtectedRoute>
            ) : (
              <Component />
            )
          }
        />
      ))}
    </Routes>
  )
}