export function LoadingScreen() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-foreground">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />

            <h2 className="text-xl font-semibold">
                Arremata
            </h2>

            <p className="text-sm text-muted-foreground">
                Preparando suas próximas descobertas...
            </p>
        </main>
    );
}