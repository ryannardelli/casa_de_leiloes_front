import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainTemplate from "../../templates/MainTemplate";

import { Forbidden } from "../../pages/Auth/Forbidden";
import NotFound from "../../pages/Auth/NotFound";

import { Home } from "../../pages/Public/Home";
import { Lots } from "../../pages/Public/Lots";
import { AuctionRoom } from "../../pages/Public/AuctionRoom";
import { Audit } from "../../pages/Public/Audit";
import { MyLots } from "../../pages/Auctioneer/MyLots";
import { MyBids } from "../../pages/Bidder/MyBids";
import { Results } from "../../pages/Auctioneer/Results";
import { Wallet } from "../../pages/Bidder/Wallet";
import { MyWins } from "../../pages/Bidder/MyWins";
import { CreateLot } from "../../pages/Auctioneer/CreateLot";
import { Dashboard } from "../../pages/Auctioneer/Dashboard";
import { Profile } from "../../pages/Auctioneer/Profile";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auctions" element={<Lots />} />

        <Route path="/auctions/:id" element={<AuctionRoom />} />

        <Route path="/auctions/:id/audit" element={<Audit />} />

        <Route element={<MainTemplate />}>
          <Route path="/dashboard" element={<Dashboard />} />

           {/* Auctioneer */}
          <Route
            path="/dashboard/lots"
            element={<MyLots />}
          />

          <Route
            path="/dashboard/lots/new"
            element={<CreateLot />}
          />
          
          <Route
            path="/dashboard/active-auctions"
            element={<Lots />}
          />

          <Route
            path="/dashboard/results"
            element={<Results />}
          />

          {/* Bidder */}
          <Route
            path="/dashboard/my-bids"
            element={<MyBids />}
          />

          <Route
            path="/dashboard/wallet"
            element={<Wallet />}
          />

          <Route
            path="/dashboard/my-wins"
            element={<MyWins />}
          />

          <Route
            path="/dashboard/profile"
            element={<Profile />}
          />
        </Route>

        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
