export interface AuditBid {
  id: string;
  bidderId: string;
  bidderName: string;
  amount: number;
  createdAt: string;
  hash: string;
  previousHash: string;
  status: "VALID" | "INVALID";
}

export interface AuctionAudit {
  lot: {
    id: string;
    title: string;
    imageUrl: string;
    category: string;
    startingPrice: number;
    finalPrice: number;
    totalBids: number;
    endedAt: string;
    winner: string;
  };
  integrity: {
    status: "VERIFIED" | "TAMPERED" | "PENDING";
    message: string;
    verifiedAt: string;
    algorithm: string;
    recordsChecked: number;
    validRecords: number;
    invalidRecords: number;
    initialHash: string;
    finalHash: string;
  };
  bids: AuditBid[];
}

export const auctionAuditMock: AuctionAudit = {
  lot: {
    id: "lot-001",
    title: "Relógio clássico de coleção",
    imageUrl:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
    category: "Relógios",
    startingPrice: 1500,
    finalPrice: 2200,
    totalBids: 4,
    endedAt: "2026-10-24T15:30:00",
    winner: "Participante #1042",
  },
  integrity: {
    status: "VERIFIED",
    message:
      "Todos os registros analisados passaram pelas verificações de integridade.",
    verifiedAt: "2026-10-25T10:30:00",
    algorithm: "SHA-256",
    recordsChecked: 4,
    validRecords: 4,
    invalidRecords: 0,
    initialHash: "a8f2c91d7b4e",
    finalHash: "c4d8e6f2a1b9",
  },
  bids: [
    {
      id: "bid-001",
      bidderId: "user-1001",
      bidderName: "Participante #1001",
      amount: 1600,
      createdAt: "2026-10-24T15:10:00",
      hash: "a8f2c91d7b4e",
      previousHash: "GENESIS",
      status: "VALID",
    },
    {
      id: "bid-002",
      bidderId: "user-1008",
      bidderName: "Participante #1008",
      amount: 1800,
      createdAt: "2026-10-24T15:15:00",
      hash: "b7e3d82c5a1f",
      previousHash: "a8f2c91d7b4e",
      status: "VALID",
    },
    {
      id: "bid-003",
      bidderId: "user-1015",
      bidderName: "Participante #1015",
      amount: 2000,
      createdAt: "2026-10-24T15:22:00",
      hash: "d9f5a71c3e8b",
      previousHash: "b7e3d82c5a1f",
      status: "VALID",
    },
    {
      id: "bid-004",
      bidderId: "user-1042",
      bidderName: "Participante #1042",
      amount: 2200,
      createdAt: "2026-10-24T15:29:00",
      hash: "c4d8e6f2a1b9",
      previousHash: "d9f5a71c3e8b",
      status: "VALID",
    },
  ],
};