import { Navigate, Outlet } from "react-router-dom";
import type { UserRole } from "../../../mocks/navigation.mock";

interface ProtectedRouteProps {
  role: UserRole;
  allowedRoles: UserRole[];
}

export function ProtectedRoute({
  role,
  allowedRoles,
}: ProtectedRouteProps) {
  const hasPermission = allowedRoles.includes(role);

  if (!hasPermission) {
    return <Navigate to="/forbidden" replace />;
  }

  return <Outlet />;
}
