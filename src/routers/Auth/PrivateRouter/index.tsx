import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteProps = {
  isAuth: boolean;
  loading: boolean;
};

export function PrivateRoute({
  isAuth,
  loading,
}: PrivateRouteProps) {
  if (loading) {
    return null;
  }

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}