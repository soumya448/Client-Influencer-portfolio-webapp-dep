export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-display text-xl font-bold">
          <span className="text-primary">.</span>arwa
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Arwa. Crafted with love.
        </p>
      </div>
    </footer>
  );
}