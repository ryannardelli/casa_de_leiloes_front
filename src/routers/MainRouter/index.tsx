import {
  BrowserRouter,
  useRoutes,
  type RouteObject,
} from "react-router-dom";

import { Home } from "../../pages/Public/Home";
import { AuctionRoom } from "../../pages/Public/AuctionRoom";
import { Audit } from "../../pages/Public/Audit";
import { Lots } from "../../pages/Public/Lots";

import { Forbidden } from "../../pages/Auth/Forbidden";
import NotFound from "../../pages/Auth/NotFound";

import { AuctioneerRoutes } from "../ProfileRouter/AuctioneerRoutes";
import { BidderRoutes } from "../ProfileRouter/BidderRoutes";
import { PrivateRoute } from "../Auth/PrivateRouter";
import { LoadingAuth } from "../../components/ui/shared/Loading/LoadingAuth";
import { useAuth } from "../../hooks/useAuth";
import type { ProfileName } from "../../models/Profile";

const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auctions",
    element: <Lots />,
  },
  {
    path: "/auctions/:id",
    element: <AuctionRoom />,
  },
  {
    path: "/auctions/:id/audit",
    element: <Audit />,
  },
  {
    path: "/forbidden",
    element: <Forbidden />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

function AppRoutes() {
  const { state } = useAuth();

  const isAuth = state.isAuthenticated;
  const loading = state.loading;
  const role: ProfileName | null = state.user?.profile?.name ?? null;

  const element = useRoutes([
    ...publicRoutes,
    {
      element: (
        <PrivateRoute
          isAuth={isAuth}
          loading={loading}
          role={role}
          allowedRoles={["Licitante"]}
        />
      ),
      children: BidderRoutes,
    },
    {
      element: (
        <PrivateRoute
          isAuth={isAuth}
          loading={loading}
          role={role}
          allowedRoles={["Leiloeiro"]}
        />
      ),
      children: AuctioneerRoutes,
    },
  ]);

  if (loading) {
    return <LoadingAuth message="Aguarde enquanto estamos preparando tudo..." />;
  }

  return element;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}