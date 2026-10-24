import { Navigate, Outlet } from "react-router-dom";
import type { ProfileName } from "../../../models/Profile";

interface ProtectedRouteProps {
  role: ProfileName | null;
  allowedRoles: ProfileName[];
}

export function ProtectedRoute({
  role,
  allowedRoles,
}: ProtectedRouteProps) {
  const hasPermission = role !== null && allowedRoles.includes(role);

  if (!hasPermission) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
}