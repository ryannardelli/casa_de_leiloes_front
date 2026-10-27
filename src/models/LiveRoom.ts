export type LotStatus = 'SCHEDULED' | 'LIVE' | 'CLOSED' | 'CANCELLED';

export interface LiveRoom {
  lotId: number;
  status: LotStatus;
  startingPrice: number;
  minimumIncrement: number;
  currentPrice: number;
  nextMinimumBid: number;
  startAt: string;
  endAt: string;
  remainingTime: number;
  isOpen: boolean;
  currentLeaderId: number;
  isLeading: boolean | null;
  position: number | null;
  totalBids: number;
}