import { useState } from "react";
import { ModalAuth, type AuthFormData } from "../../../ui/shared/Modal/ModalAuth";

export function AuthButton() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  function handleAuthSubmit(data: AuthFormData) {
    if (data.mode === "login") {
      console.log("Login:", data.email);
      return;
    }

    console.log("Cadastro:", data.name, data.email);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsAuthOpen(true)}
        className="cursor-pointer rounded-md bg-accent px-4 py-2 font-semibold text-surface shadow-sm transition-all hover:opacity-90 cursor-pointer"
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