import { useReducer, type ReactNode, useCallback } from "react";
import type { UpdateUserPayload, User } from "../../models/User";
import { catchInformationsUser } from "../../services/users";
import { UserContext } from "./UserContext";
import { initialStateUser, userReducer } from "../../reducers/userReducer";

type UserProviderProps = {
  children: ReactNode;
};

export type AssociateProfileResponse = User & { message: string };

export const UserProvider = ({ children }: UserProviderProps) => {
  const [stateUser, dispatchUser] = useReducer(
    userReducer,
    initialStateUser
  );

  const loadUsers = useCallback(async () => {
    try {
      dispatchUser({ type: "SET_LOADING_USERS", payload: true });

      const users = await catchInformationsUser.findAll();

      dispatchUser({
        type: "SET_USERS",
        payload: users,
      });
    } catch (error) {
      console.error(error);

      const message =
        error instanceof Error
          ? error.message
          : "Erro ao carregar usuários";

      dispatchUser({
        type: "SET_ERROR_USERS",
        payload: message,
      });
    } finally {
      dispatchUser({ type: "SET_LOADING_USERS", payload: false });
    }
  }, []);

  const deleteUser = useCallback(async (id: number) => {
  try {
    dispatchUser({ type: "SET_LOADING_USERS", payload: true });

    const response = await catchInformationsUser.deleteUser(id);

    dispatchUser({
      type: "DELETE_USER",
      payload: id,
    });

    return response;

  } catch (error) {
    console.error(error);

    if(error instanceof Error) {
      dispatchUser({
        type: "SET_ERROR_USERS",
        payload: error.message,
      });
    }

    throw error;
  } finally {
    dispatchUser({ type: "SET_LOADING_USERS", payload: false });
  }
}, []);

const updateUser = useCallback(async (id: number, data: UpdateUserPayload) => {
  try {
    dispatchUser({ type: "SET_LOADING_USERS", payload: true });

    const updatedUser = await catchInformationsUser.updateUser(id, data);

    dispatchUser({
      type: "UPDATE_USER",
      payload: updatedUser as unknown as User,
    });

    await loadUsers();
    
    return updatedUser;

  } catch (error) {
    console.error(error);

    const message =
      error instanceof Error
        ? error.message
        : "Erro ao atualizar usuário";

    dispatchUser({
      type: "SET_ERROR_USERS",
      payload: message,
    });

    throw error;

  } finally {
    dispatchUser({ type: "SET_LOADING_USERS", payload: false });
  }
}, []);

  return (
    <UserContext.Provider
      value={{
        stateUser,
        dispatchUser,
        updateUser,
        loadUsers,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};