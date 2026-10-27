export interface Award {
  lotId: number;
  title: string;
  description: string;
  imageUrl: string | null;
  winnerId: number | null;
  finalPrice: number;
  status: "CLOSED" | string;
  endAt: string | null;
  settledAt: string | null;
}

export interface CloseAwardResponse {
  message?: string;
  award: Award;
}

export type AwardsAction =
  | { type: "SET_MY_AWARDS"; payload: Award[] }
  | { type: "SET_SELECTED_AWARD"; payload: Award | null }

  | { type: "SET_LOADING_MY_AWARDS"; payload: boolean }
  | { type: "SET_LOADING_AWARD_BY_ID"; payload: boolean }
  | { type: "SET_LOADING_CLOSE_AWARD"; payload: boolean }

  | { type: "SET_ERROR_MY_AWARDS"; payload: string | null }
  | { type: "SET_ERROR_AWARD_BY_ID"; payload: string | null }
  | { type: "SET_ERROR_CLOSE_AWARD"; payload: string | null };

export type AwardsState = {
  myAwards: Award[];
  selectedAward: Award | null;

  loadingMyAwards: boolean;
  loadingAwardById: boolean;
  loadingCloseAward: boolean;

  errorMyAwards: string | null;
  errorAwardById: string | null;
  errorCloseAward: string | null;
};
