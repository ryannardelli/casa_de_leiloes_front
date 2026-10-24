import { useState } from "react";
import {
  ModalAuth,
  type AuthFormData,
} from "../../../ui/shared/Modal/ModalAuth";
import { useAuth } from "../../../../hooks/useAuth";
import { showMessage } from "../../../ui/shared/Feedback/ShowMessage";
import { useNavigate } from "react-router-dom";

export function AuthButton() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [error, setError] = useState("");

  const { state, login, registerUser } = useAuth();
  const navigate = useNavigate();

  const isLoading = state.loading;

  async function handleAuthSubmit(data: AuthFormData) {
    setError("");

    showMessage.dismiss();

    try {
      if (data.mode === "login") {
        const user = await login(data.email, data.password);

         if (user.profile?.name === "Leiloeiro") {
              navigate("/auctioneer/dashboard");
          } else if (user.profile?.name === "Licitante") {
              navigate("/bidder/dashboard");
          } else {
              navigate("/");
          }

      } else {
        if (!data.name) {
          throw new Error("O nome é obrigatório para o cadastro.");
        }

        await registerUser(
          data.name,
          data.email,
          data.password
        );
      }

      setIsAuthOpen(false);
    } catch (err: unknown) {
       if (err instanceof Error) {
        console.error(err);
        showMessage.error(
          err.message || "Algo deu errado. Tente novamente mais tarde."
        );
      }
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError("");
          setIsAuthOpen(true);
        }}
        className="rounded-md bg-accent px-4 py-2 font-semibold text-surface shadow-sm transition-all hover:opacity-90 cursor-pointer"
      >
        Iniciar sessão
      </button>

      <ModalAuth
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSubmit={handleAuthSubmit}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
