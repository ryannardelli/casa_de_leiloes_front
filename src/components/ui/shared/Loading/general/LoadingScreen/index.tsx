export function LoadingScreen() {
    return (
        <main className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 bg-background text-text">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-accent" />

            <h2 className="text-xl font-semibold">
                Arremata
            </h2>

            <p className="text-sm text-text-muted">
                Preparando suas próximas descobertas...
            </p>
        </main>
    );
}