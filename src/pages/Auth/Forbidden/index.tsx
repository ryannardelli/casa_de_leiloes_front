import { useNavigate } from "react-router-dom";

export function Forbidden() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md text-center">
        <span className="text-8xl font-bold text-[var(--color-primary)]">
          403
        </span>

        <h1 className="mt-4 text-2xl font-semibold text-[var(--color-text)]">
          Acesso não permitido
        </h1>

        <p className="mt-2 text-gray-500">
          Você não possui permissão para acessar esta página.
        </p>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="
            mt-6 inline-block rounded-lg
            bg-[var(--color-primary)]
            px-6 py-3
            text-sm font-semibold text-white
            transition-colors
            hover:bg-[var(--color-accent)]
            hover:text-black
            cursor-pointer
          "
        >
          Voltar
        </button>
      </div>
    </main>
  );
}