import { useEffect, useReducer } from "react";
import { authReducer, initialState } from "../../reducers/authReducer";
import { getMe } from "../../services/users";
import { userAuthentication } from "../../services/auth";
import type { AuthUser, RegisterResponse } from "../../models/Auth";
import type { User } from "../../models/User";
import { AuthContext } from "./AuthContext";

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    async function restoreSession() {
      const token = localStorage.getItem("token");

      if (!token) {
        dispatch({ type: "SET_LOADING", payload: false });
        return;
      }

      try {
        dispatch({ type: "SET_LOADING", payload: true });

        const user = await getMe();

        dispatch({
          type: "LOGIN",
          payload: { token, user },
        });
      } catch {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    }

    restoreSession();
  }, []);

  const login = async (
      email: string,
      password: string
    ): Promise<AuthUser> => {
      try {
        dispatch({ type: "SET_LOADING", payload: true });

        const response = await userAuthentication.login({ email, password });
        const { token, user: initialUser } = response;

        localStorage.setItem("token", token);

        let finalUser: AuthUser;

        try {
          const fullUser = await getMe();

          finalUser = fullUser ?? initialUser;
        } catch (e) {
          console.warn(e);
          throw e;
        }

        dispatch({
          type: "LOGIN",
          payload: { token, user: finalUser },
        });

        return finalUser;
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Erro ao fazer login";

        dispatch({ type: "SET_ERROR", payload: message });
        throw err;
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    const registerUser = async (
      name: string,
      email: string,
      password: string,
      autoLogin = false
    ): Promise<RegisterResponse> => {
      dispatch({ type: "SET_LOADING", payload: true });

      try {
        const response = await userAuthentication.register({
          name,
          email,
          password,
        });

        if (!autoLogin) {
          return response;
        }

        const { token } = response;
        localStorage.setItem("token", token);

        const finalUser = await getMe();

        dispatch({
          type: "REGISTER",
          payload: {
            token,
            user: finalUser as User,
          },
        });

        return { token, user: finalUser };
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : "Erro ao registrar usuário";

        dispatch({ type: "SET_ERROR", payload: message });
        throw err;
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
};
  
  const logout = () => {
    userAuthentication.logout();
    dispatch({ type: "LOGOUT" });
    window.location.href = "/";
  };
  
  return (
    <AuthContext.Provider value={{ state, dispatch, login, registerUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};