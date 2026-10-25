export interface LiveBid {
  id: string;
  bidderName: string;
  amount: number;
  createdAt: string;
  isCurrentUser: boolean;
}

export interface LiveRoom {
  lotId: string;
  title: string;
  imageUrl: string;
  category: string;
  startingPrice: number;
  currentBid: number;
  minimumIncrement: number;
  totalBids: number;
  endsAt: string;
  bids: LiveBid[];
  currentUser: {
    id: string;
    name: string;
    highestBid: number;
    position: number;
    isWinning: boolean;
  };
}

export const liveRoomMock: LiveRoom = {
  lotId: "lot-001",
  title: "Composição em tons clássicos",
  imageUrl:
    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800",
  category: "Pintura",
  startingPrice: 1500,
  currentBid: 2450,
  minimumIncrement: 50,
  totalBids: 18,
  endsAt: "2026-10-25T20:30:00",

  bids: [
    {
      id: "bid-018",
      bidderName: "Você",
      amount: 2450,
      createdAt: "2026-10-25T20:24:30",
      isCurrentUser: true,
    },
    {
      id: "bid-017",
      bidderName: "Carlos Mendes",
      amount: 2400,
      createdAt: "2026-10-25T20:23:45",
      isCurrentUser: false,
    },
    {
      id: "bid-016",
      bidderName: "Mariana Costa",
      amount: 2350,
      createdAt: "2026-10-25T20:22:18",
      isCurrentUser: false,
    },
    {
      id: "bid-015",
      bidderName: "Carlos Mendes",
      amount: 2300,
      createdAt: "2026-10-25T20:20:52",
      isCurrentUser: false,
    },
    {
      id: "bid-014",
      bidderName: "Você",
      amount: 2250,
      createdAt: "2026-10-25T20:19:10",
      isCurrentUser: true,
    },
    {
      id: "bid-013",
      bidderName: "Ana Oliveira",
      amount: 2200,
      createdAt: "2026-10-25T20:17:35",
      isCurrentUser: false,
    },
  ],

  currentUser: {
    id: "user-001",
    name: "Você",
    highestBid: 2450,
    position: 1,
    isWinning: true,
  },
};