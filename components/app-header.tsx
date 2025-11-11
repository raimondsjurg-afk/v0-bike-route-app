export function AppHeader() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-10">
      <div className="px-4 py-3 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-base font-semibold text-foreground tracking-wide">SHAPES OF LATVIA</span>
        </div>
      </div>
    </header>
  )
}
