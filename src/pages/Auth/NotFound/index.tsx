import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <span className="text-8xl font-bold text-[var(--color-primary)]">
          404
        </span>

        <h1 className="mt-4 text-2xl font-semibold text-[var(--color-text)]">
          Página não encontrada
        </h1>

        <p className="mt-2 text-gray-500">
          A página que você está procurando não existe.
        </p>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="
            mt-6
            inline-block
            rounded-lg
            bg-[var(--color-primary)]
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition-colors
            hover:bg-[var(--color-accent)]
            hover:text-black cursor-pointer
          "
        >
          Voltar
        </button>
      </div>
    </main>
  );
}