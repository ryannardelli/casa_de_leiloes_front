import { Navigate, Outlet } from "react-router-dom";
import type { ProfileName } from "../../../models/Profile";

type PrivateRouteProps = {
  isAuth: boolean;
  loading: boolean;
  role: ProfileName | null;
  allowedRoles: ProfileName[];
};

export function PrivateRoute({
  isAuth,
  loading,
  role,
  allowedRoles,
}: PrivateRouteProps) {
  if (loading) {
    return null;
  }

  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
}