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
import type { UserRole } from "../../models/User";
import { PrivateRoute } from "../Auth/PrivateRouter";


const isAuth = false;
const loading = false;
const role: UserRole | null = null;

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
  return useRoutes([
    ...publicRoutes,
    {
      element: (
        <PrivateRoute
          isAuth={isAuth}
          loading={loading}
          role={role}
          allowedRoles={["BIDDER"]}
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
          allowedRoles={["AUCTIONEER"]}
        />
      ),
      children: AuctioneerRoutes,
    },
  ]);
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}