export type UserRole = "user" | "admin";

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  profile: {
    id: number;
    name: string;
    description: string;
    system: boolean;
    active: boolean;
  };
}

export type UserState = {
    users: User[];
    currentUser?: User | null;

    loadingUsers: boolean;
    errorUsers: string | null;
};

export type UserAction =
    | { type: "SET_USERS"; payload: User[] }
    | { type: "SET_LOADING_USERS"; payload: boolean }
    | { type: "SET_ERROR_USERS"; payload: string | null }
    | { type: "DELETE_USER"; payload: number }
    | { type: "UPDATE_USER"; payload: User };

export type UpdateUserPayload = {
    name: string;
    pictureUrl?: string;
    email?: string;
};

export interface UpdateUserResponse {
    message: string;
    user: User;
}