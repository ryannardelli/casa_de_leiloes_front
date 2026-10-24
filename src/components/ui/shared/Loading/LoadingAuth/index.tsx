interface LoadingAuthProps {
  message?: string;
}

export function LoadingAuth({
  message = "Aguarde enquanto preparamos tudo...",
}: LoadingAuthProps) {
  return (
    <main className="fixed inset-0 z-[9999] flex min-h-screen flex-col items-center justify-center gap-4 bg-background text-foreground">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

      <h2 className="text-xl font-semibold">
        Arremata
      </h2>

      <p className="text-sm text-muted-foreground">
        {message}
      </p>
    </main>
  );
}