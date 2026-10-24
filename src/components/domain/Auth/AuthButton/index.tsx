import { useState } from "react";
import { ModalAuth, type AuthFormData } from "../../../ui/shared/Modal/ModalAuth";
import { LoadingAuth } from "../../../ui/shared/Loading/LoadingAuth";

export function AuthButton() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

   async function handleAuthSubmit(data: AuthFormData) {
      setIsLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 4000));

        console.log("Dados enviados:", data);
      } finally {
        setIsLoading(false);
      }
    }

   if (isLoading) {
    return <LoadingAuth message="Aguarde enquanto preparamos tudo..." />;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsAuthOpen(true)}
        className="rounded-md bg-accent px-4 py-2 font-semibold text-surface shadow-sm transition-all hover:opacity-90 cursor-pointer"
      >
        Iniciar sessão
      </button>

      <ModalAuth
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onSubmit={handleAuthSubmit}
      />
    </>
  );
}